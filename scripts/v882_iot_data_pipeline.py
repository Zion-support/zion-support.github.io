#!/usr/bin/env python3
"""
V882: IoT Data Pipeline & Stream Processor
Real-time IoT data ingestion, transformation, aggregation, and analytics.
"""

import json
import hashlib
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict

class IoTDataPipeline:
    def __init__(self):
        self.streams = {}
        self.processors = {}
        self.data_buffer = defaultdict(list)
        self.aggregations = defaultdict(dict)
        self.alerts = []
        self.throughput_metrics = {'messages_per_sec': 0, 'bytes_per_sec': 0, 'errors': 0}
        
    def create_stream(self, stream_id: str, schema: Dict, retention_hours: int = 24) -> Dict:
        """Create a new data ingestion stream"""
        self.streams[stream_id] = {
            'stream_id': stream_id,
            'schema': schema,
            'retention_hours': retention_hours,
            'created_at': datetime.now().isoformat(),
            'message_count': 0,
            'total_bytes': 0,
            'status': 'active'
        }
        return {'success': True, 'stream_id': stream_id, 'message': f'Stream {stream_id} created'}
    
    def ingest_data(self, stream_id: str, payload: Dict, timestamp: Optional[str] = None) -> Dict:
        """Ingest data point into stream"""
        if stream_id not in self.streams:
            self.throughput_metrics['errors'] += 1
            return {'success': False, 'error': 'Stream not found'}
        
        data_point = {
            'stream_id': stream_id,
            'payload': payload,
            'timestamp': timestamp or datetime.now().isoformat(),
            'checksum': hashlib.md5(json.dumps(payload, sort_keys=True).encode()).hexdigest()
        }
        
        self.data_buffer[stream_id].append(data_point)
        self.streams[stream_id]['message_count'] += 1
        self.streams[stream_id]['total_bytes'] += len(json.dumps(payload))
        
        # Auto-flush if buffer exceeds threshold
        if len(self.data_buffer[stream_id]) > 1000:
            self._flush_buffer(stream_id)
        
        return {'success': True, 'stream_id': stream_id, 'message_count': self.streams[stream_id]['message_count']}
    
    def batch_ingest(self, stream_id: str, payloads: List[Dict]) -> Dict:
        """Batch ingest multiple data points"""
        results = []
        for payload in payloads:
            result = self.ingest_data(stream_id, payload)
            results.append(result)
        
        successful = sum(1 for r in results if r.get('success'))
        return {
            'success': True,
            'total': len(payloads),
            'successful': successful,
            'failed': len(payloads) - successful
        }
    
    def _flush_buffer(self, stream_id: str):
        """Flush buffered data to aggregation store"""
        buffer = self.data_buffer[stream_id]
        if not buffer:
            return
        
        for point in buffer:
            for key, value in point['payload'].items():
                if isinstance(value, (int, float)):
                    if key not in self.aggregations[stream_id]:
                        self.aggregations[stream_id][key] = {'sum': 0, 'count': 0, 'min': float('inf'), 'max': float('-inf')}
                    agg = self.aggregations[stream_id][key]
                    agg['sum'] += value
                    agg['count'] += 1
                    agg['min'] = min(agg['min'], value)
                    agg['max'] = max(agg['max'], value)
        
        self.data_buffer[stream_id] = []
    
    def get_aggregations(self, stream_id: str) -> Dict:
        """Get aggregated statistics for a stream"""
        self._flush_buffer(stream_id)
        
        if stream_id not in self.aggregations:
            return {'success': True, 'stream_id': stream_id, 'metrics': {}}
        
        metrics = {}
        for key, agg in self.aggregations[stream_id].items():
            if agg['count'] > 0:
                metrics[key] = {
                    'avg': round(agg['sum'] / agg['count'], 2),
                    'min': agg['min'],
                    'max': agg['max'],
                    'sum': agg['sum'],
                    'count': agg['count']
                }
        
        return {'success': True, 'stream_id': stream_id, 'metrics': metrics}
    
    def detect_anomalies(self, stream_id: str, metric: str, threshold_std: float = 2.0) -> Dict:
        """Detect anomalies in stream data using statistical methods"""
        # Collect values BEFORE flushing
        values = [p['payload'].get(metric, 0) for p in self.data_buffer.get(stream_id, []) if metric in p.get('payload', {})]
        
        self._flush_buffer(stream_id)
        
        if stream_id not in self.aggregations or metric not in self.aggregations[stream_id]:
            return {'success': False, 'error': 'No data available for anomaly detection', 'anomaly_count': 0}
        
        agg = self.aggregations[stream_id][metric]
        mean = agg['sum'] / agg['count'] if agg['count'] > 0 else 0
        
        if len(values) < 2:
            return {'success': True, 'anomalies': [], 'anomaly_count': 0, 'message': 'Insufficient data for anomaly detection'}
        
        variance = sum((v - mean) ** 2 for v in values) / len(values)
        std_dev = variance ** 0.5
        
        anomalies = []
        for point in self.data_buffer.get(stream_id, []):
            value = point['payload'].get(metric)
            if value is not None and std_dev > 0:
                z_score = abs(value - mean) / std_dev
                if z_score > threshold_std:
                    anomalies.append({
                        'timestamp': point['timestamp'],
                        'value': value,
                        'z_score': round(z_score, 2),
                        'deviation': f'{round(value - mean, 2)} from mean'
                    })
        
        return {
            'success': True,
            'stream_id': stream_id,
            'metric': metric,
            'mean': round(mean, 2),
            'std_dev': round(std_dev, 2),
            'anomalies': anomalies,
            'anomaly_count': len(anomalies)
        }
    
    def get_throughput_report(self) -> Dict:
        """Get pipeline throughput statistics"""
        total_messages = sum(s['message_count'] for s in self.streams.values())
        total_bytes = sum(s['total_bytes'] for s in self.streams.values())
        
        return {
            'success': True,
            'total_streams': len(self.streams),
            'total_messages': total_messages,
            'total_bytes': total_bytes,
            'total_bytes_mb': round(total_bytes / (1024 * 1024), 2),
            'errors': self.throughput_metrics['errors'],
            'error_rate': round(self.throughput_metrics['errors'] / max(total_messages, 1) * 100, 2)
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive IoT data pipeline report"""
        throughput = self.get_throughput_report()
        
        report = f"""
📊 IoT DATA PIPELINE REPORT (V882)
{'='*60}

PIPELINE OVERVIEW:
- Total Streams: {throughput['total_streams']}
- Total Messages Processed: {throughput['total_messages']:,}
- Total Data Volume: {throughput['total_bytes_mb']} MB
- Error Rate: {throughput['error_rate']}%

STREAM DETAILS:
"""
        for stream_id, stream in self.streams.items():
            aggs = self.get_aggregations(stream_id)
            report += f"\n  📡 {stream_id}:\n"
            report += f"    Messages: {stream['message_count']:,}\n"
            report += f"    Status: {stream['status']}\n"
            for key, metrics in aggs.get('metrics', {}).items():
                report += f"    {key}: avg={metrics['avg']}, min={metrics['min']}, max={metrics['max']}\n"
        
        report += f"""
PIPELINE HEALTH:
- {'✅ Pipeline operating normally' if throughput['error_rate'] < 1 else '⚠️ Elevated error rate detected'}
- {'✅ All streams active' if all(s['status'] == 'active' for s in self.streams.values()) else '⚠️ Some streams inactive'}

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for IoT data pipeline requests"""
    pipeline_keywords = ['iot data', 'stream', 'pipeline', 'ingest', 'sensor data', 'telemetry', 'data flow']
    anomaly_keywords = ['anomaly', 'outlier', 'detect', 'unusual', 'abnormal']
    
    has_pipeline_request = any(kw in email_text.lower() for kw in pipeline_keywords)
    has_anomaly_request = any(kw in email_text.lower() for kw in anomaly_keywords)
    
    analysis = {
        'email_type': 'iot_data_pipeline',
        'pipeline_request': has_pipeline_request,
        'anomaly_detection_requested': has_anomaly_request,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if has_pipeline_request and has_anomaly_request:
        analysis['priority'] = 'high'
        analysis['action'] = 'setup_pipeline_with_anomaly_detection'
    elif has_pipeline_request:
        analysis['action'] = 'setup_data_pipeline'
    
    return analysis


if __name__ == '__main__':
    pipeline = IoTDataPipeline()
    
    # Create streams
    pipeline.create_stream('temp-sensors', {'temperature': 'float', 'humidity': 'float'})
    pipeline.create_stream('motion-sensors', {'motion_count': 'int', 'speed': 'float'})
    
    # Ingest test data
    import random
    for i in range(50):
        pipeline.ingest_data('temp-sensors', {
            'temperature': random.gauss(25, 3),
            'humidity': random.gauss(60, 10)
        })
        pipeline.ingest_data('motion-sensors', {
            'motion_count': random.randint(0, 100),
            'speed': random.gauss(5, 2)
        })
    
    # Inject anomaly
    pipeline.ingest_data('temp-sensors', {'temperature': 45, 'humidity': 95})
    
    # Detect anomalies
    anomalies = pipeline.detect_anomalies('temp-sensors', 'temperature')
    
    print(pipeline.generate_report())
    print(f"\nAnomalies detected: {anomalies['anomaly_count']}")
    
    # Test email analysis
    test_email = "Set up an IoT data pipeline for our temperature sensors and enable anomaly detection"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
