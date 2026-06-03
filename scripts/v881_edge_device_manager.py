#!/usr/bin/env python3
"""
V881: Edge Device Manager & Orchestrator
Manages edge devices, firmware updates, remote monitoring, and fleet orchestration.
"""

import json
import hashlib
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional

class EdgeDeviceManager:
    def __init__(self):
        self.devices = {}
        self.firmware_versions = {}
        self.alerts = []
        self.metrics_history = []
        
    def register_device(self, device_id: str, device_type: str, location: str, capabilities: List[str]) -> Dict:
        """Register a new edge device in the fleet"""
        device = {
            'device_id': device_id,
            'device_type': device_type,
            'location': location,
            'capabilities': capabilities,
            'status': 'online',
            'firmware_version': '1.0.0',
            'last_heartbeat': datetime.now().isoformat(),
            'metrics': {
                'cpu_usage': 0.0,
                'memory_usage': 0.0,
                'network_latency': 0,
                'battery_level': 100,
                'temperature': 25.0
            },
            'registered_at': datetime.now().isoformat()
        }
        self.devices[device_id] = device
        return {'success': True, 'device': device, 'message': f'Device {device_id} registered successfully'}
    
    def update_device_metrics(self, device_id: str, metrics: Dict) -> Dict:
        """Update real-time metrics from edge device"""
        if device_id not in self.devices:
            return {'success': False, 'error': 'Device not found'}
        
        self.devices[device_id]['metrics'].update(metrics)
        self.devices[device_id]['last_heartbeat'] = datetime.now().isoformat()
        
        # Check for anomalies
        alerts = self._check_anomalies(device_id, metrics)
        
        return {
            'success': True,
            'device_id': device_id,
            'metrics_updated': metrics,
            'alerts': alerts
        }
    
    def _check_anomalies(self, device_id: str, metrics: Dict) -> List[Dict]:
        """Check for anomalous device behavior"""
        alerts = []
        device = self.devices[device_id]
        
        # CPU threshold
        if metrics.get('cpu_usage', 0) > 90:
            alert = {
                'device_id': device_id,
                'type': 'high_cpu',
                'severity': 'critical',
                'message': f'CPU usage at {metrics["cpu_usage"]}%',
                'timestamp': datetime.now().isoformat()
            }
            alerts.append(alert)
            self.alerts.append(alert)
        
        # Memory threshold
        if metrics.get('memory_usage', 0) > 85:
            alert = {
                'device_id': device_id,
                'type': 'high_memory',
                'severity': 'warning',
                'message': f'Memory usage at {metrics["memory_usage"]}%',
                'timestamp': datetime.now().isoformat()
            }
            alerts.append(alert)
            self.alerts.append(alert)
        
        # Temperature threshold
        if metrics.get('temperature', 0) > 70:
            alert = {
                'device_id': device_id,
                'type': 'overheating',
                'severity': 'critical',
                'message': f'Device temperature at {metrics["temperature"]}°C',
                'timestamp': datetime.now().isoformat()
            }
            alerts.append(alert)
            self.alerts.append(alert)
        
        # Battery threshold
        if metrics.get('battery_level', 100) < 20:
            alert = {
                'device_id': device_id,
                'type': 'low_battery',
                'severity': 'warning',
                'message': f'Battery level at {metrics["battery_level"]}%',
                'timestamp': datetime.now().isoformat()
            }
            alerts.append(alert)
            self.alerts.append(alert)
        
        return alerts
    
    def deploy_firmware_update(self, device_ids: List[str], version: str, changelog: str) -> Dict:
        """Deploy firmware update to edge devices"""
        results = []
        failed = []
        
        for device_id in device_ids:
            if device_id not in self.devices:
                failed.append({'device_id': device_id, 'error': 'Device not found'})
                continue
            
            # Simulate firmware deployment
            self.devices[device_id]['firmware_version'] = version
            results.append({
                'device_id': device_id,
                'old_version': self.devices[device_id]['firmware_version'],
                'new_version': version,
                'status': 'deployed'
            })
        
        return {
            'success': True,
            'version': version,
            'devices_updated': len(results),
            'devices_failed': len(failed),
            'results': results,
            'failed': failed,
            'changelog': changelog
        }
    
    def get_fleet_health(self) -> Dict:
        """Get overall fleet health status"""
        total_devices = len(self.devices)
        if total_devices == 0:
            return {'success': True, 'total_devices': 0, 'health_score': 100}
        
        online_count = sum(1 for d in self.devices.values() if d['status'] == 'online')
        offline_count = total_devices - online_count
        
        # Calculate health score
        avg_cpu = sum(d['metrics']['cpu_usage'] for d in self.devices.values()) / total_devices
        avg_memory = sum(d['metrics']['memory_usage'] for d in self.devices.values()) / total_devices
        avg_battery = sum(d['metrics']['battery_level'] for d in self.devices.values()) / total_devices
        
        health_score = 100
        if avg_cpu > 80:
            health_score -= 20
        if avg_memory > 80:
            health_score -= 15
        if avg_battery < 30:
            health_score -= 25
        if offline_count > total_devices * 0.1:
            health_score -= 30
        
        return {
            'success': True,
            'total_devices': total_devices,
            'online': online_count,
            'offline': offline_count,
            'health_score': max(0, health_score),
            'avg_cpu_usage': round(avg_cpu, 1),
            'avg_memory_usage': round(avg_memory, 1),
            'avg_battery_level': round(avg_battery, 1),
            'active_alerts': len(self.alerts)
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive edge device management report"""
        fleet_health = self.get_fleet_health()
        
        report = f"""
📡 EDGE DEVICE MANAGEMENT REPORT (V881)
{'='*60}

FLEET OVERVIEW:
- Total Devices: {fleet_health['total_devices']}
- Online: {fleet_health['online']}
- Offline: {fleet_health['offline']}
- Health Score: {fleet_health['health_score']}/100

PERFORMANCE METRICS:
- Avg CPU Usage: {fleet_health['avg_cpu_usage']}%
- Avg Memory Usage: {fleet_health['avg_memory_usage']}%
- Avg Battery Level: {fleet_health['avg_battery_level']}%

ACTIVE ALERTS: {fleet_health['active_alerts']}
"""
        
        if self.alerts:
            report += "\nRECENT ALERTS:\n"
            for alert in self.alerts[-5:]:
                report += f"  • [{alert['severity'].upper()}] {alert['message']} ({alert['device_id']})\n"
        
        report += f"""
RECOMMENDATIONS:
- {'✅ Fleet health is optimal' if fleet_health['health_score'] > 80 else '⚠️ Fleet requires attention'}
- {'✅ All devices online' if fleet_health['offline'] == 0 else f'⚠️ {fleet_health["offline"]} devices offline'}
- {'✅ Battery levels healthy' if fleet_health['avg_battery_level'] > 50 else '⚠️ Low battery across fleet'}

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for edge device management requests"""
    manager = EdgeDeviceManager()
    
    # Check for device registration requests
    device_pattern = r'register\s+device[:\s]+([A-Z0-9-]+)'
    device_matches = re.findall(device_pattern, email_text, re.IGNORECASE)
    
    # Check for firmware update requests
    firmware_pattern = r'(?:update|upgrade|deploy)\s+firmware[:\s]+v?(\d+\.\d+\.\d+)'
    firmware_matches = re.findall(firmware_pattern, email_text, re.IGNORECASE)
    
    # Check for health check requests
    health_keywords = ['fleet health', 'device status', 'health check', 'monitoring']
    health_request = any(kw in email_text.lower() for kw in health_keywords)
    
    analysis = {
        'email_type': 'edge_device_management',
        'device_registrations': device_matches,
        'firmware_updates': firmware_matches,
        'health_check_requested': health_request,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if device_matches:
        analysis['priority'] = 'high'
        analysis['action'] = 'register_devices'
    elif firmware_matches:
        analysis['priority'] = 'high'
        analysis['action'] = 'deploy_firmware'
    elif health_request:
        analysis['action'] = 'generate_health_report'
    
    return analysis


if __name__ == '__main__':
    # Test the engine
    manager = EdgeDeviceManager()
    
    # Register test devices
    manager.register_device('EDGE-001', 'sensor_hub', 'Warehouse-A', ['temperature', 'humidity', 'motion'])
    manager.register_device('EDGE-002', 'gateway', 'Warehouse-B', ['routing', 'protocol_translation'])
    manager.register_device('EDGE-003', 'camera', 'Parking-Lot', ['video_stream', 'object_detection'])
    
    # Update metrics
    manager.update_device_metrics('EDGE-001', {'cpu_usage': 45, 'memory_usage': 60, 'temperature': 42, 'battery_level': 85})
    manager.update_device_metrics('EDGE-002', {'cpu_usage': 92, 'memory_usage': 78, 'temperature': 55, 'battery_level': 90})
    manager.update_device_metrics('EDGE-003', {'cpu_usage': 35, 'memory_usage': 50, 'temperature': 38, 'battery_level': 15})
    
    # Deploy firmware
    manager.deploy_firmware_update(['EDGE-001', 'EDGE-002'], '2.1.0', 'Security patches and performance improvements')
    
    # Generate report
    print(manager.generate_report())
    
    # Test email analysis
    test_email = "Please register device EDGE-004 and update firmware to v2.2.0 for all sensors"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
