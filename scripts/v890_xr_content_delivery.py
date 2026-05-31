#!/usr/bin/env python3
"""
V890: XR Content Delivery & Streaming Engine
Manages extended reality (AR/VR/MR) content delivery, adaptive streaming,
edge caching, bandwidth optimization, and multi-device content distribution.
"""

import json
import hashlib
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict

class XRContentDeliveryEngine:
    def __init__(self):
        self.content_library = {}
        self.delivery_profiles = {}
        self.streaming_sessions = []
        self.cache_stats = defaultdict(dict)
        self.bandwidth_metrics = defaultdict(list)
        self.device_profiles = {}
        
    def register_content(self, content_id: str, title: str, content_type: str,
                         file_size_mb: float, metadata: Dict = None) -> Dict:
        """Register XR content in the delivery library"""
        content = {
            'content_id': content_id,
            'title': title,
            'content_type': content_type,  # 'vr_360', 'ar_overlay', 'mr_scene', 'hologram', 'spatial_audio'
            'file_size_mb': file_size_mb,
            'metadata': metadata or {},
            'formats_available': metadata.get('formats', ['glb', 'usdz']),
            'quality_levels': {
                'ultra': {'resolution': '8K', 'bitrate_mbps': 100, 'size_ratio': 1.0},
                'high': {'resolution': '4K', 'bitrate_mbps': 50, 'size_ratio': 0.6},
                'medium': {'resolution': '1080p', 'bitrate_mbps': 20, 'size_ratio': 0.3},
                'low': {'resolution': '720p', 'bitrate_mbps': 8, 'size_ratio': 0.15},
                'adaptive': {'resolution': 'auto', 'bitrate_mbps': 'variable', 'size_ratio': 0.4}
            },
            'cdn_nodes': [],
            'cache_hits': 0,
            'cache_misses': 0,
            'total_deliveries': 0,
            'status': 'ready',
            'registered_at': datetime.now().isoformat()
        }
        self.content_library[content_id] = content
        return {'success': True, 'content_id': content_id, 'message': f'Content "{title}" registered'}
    
    def register_device_profile(self, device_id: str, device_type: str, 
                                 capabilities: Dict) -> Dict:
        """Register a device profile for optimized delivery"""
        profile = {
            'device_id': device_id,
            'device_type': device_type,  # 'quest_3', 'vision_pro', 'hololens_2', 'mobile_ar', 'web_xr'
            'capabilities': capabilities,
            'max_resolution': capabilities.get('max_resolution', '4K'),
            'max_bitrate_mbps': capabilities.get('max_bitrate_mbps', 50),
            'supported_formats': capabilities.get('supported_formats', ['glb']),
            'foveated_rendering': capabilities.get('foveated_rendering', False),
            'spatial_audio': capabilities.get('spatial_audio', True),
            'hand_tracking': capabilities.get('hand_tracking', False),
            'registered_at': datetime.now().isoformat()
        }
        self.device_profiles[device_id] = profile
        return {'success': True, 'device_id': device_id}
    
    def select_optimal_quality(self, content_id: str, device_id: str, 
                                network_mbps: float = None) -> Dict:
        """Select optimal quality level based on device and network"""
        if content_id not in self.content_library:
            return {'success': False, 'error': 'Content not found'}
        
        content = self.content_library[content_id]
        device = self.device_profiles.get(device_id)
        
        if not device:
            return {'success': True, 'quality': 'medium', 'reason': 'Unknown device, defaulting to medium'}
        
        # Determine quality based on device capabilities and network
        quality_levels = content['quality_levels']
        
        if network_mbps and network_mbps < 10:
            selected = 'low'
            reason = f'Limited bandwidth ({network_mbps} Mbps)'
        elif network_mbps and network_mbps < 30:
            selected = 'medium'
            reason = f'Moderate bandwidth ({network_mbps} Mbps)'
        elif device['max_resolution'] == '8K' and (not network_mbps or network_mbps >= 100):
            selected = 'ultra'
            reason = 'High-end device with sufficient bandwidth'
        elif device['max_resolution'] in ('4K', '8K'):
            selected = 'high'
            reason = f'Device supports {device["max_resolution"]}'
        else:
            selected = 'medium'
            reason = f'Device max resolution: {device["max_resolution"]}'
        
        quality_info = quality_levels[selected]
        
        return {
            'success': True,
            'quality': selected,
            'resolution': quality_info['resolution'],
            'bitrate_mbps': quality_info['bitrate_mbps'],
            'estimated_size_mb': round(content['file_size_mb'] * quality_info['size_ratio'], 1),
            'reason': reason,
            'foveated': device.get('foveated_rendering', False)
        }
    
    def start_streaming_session(self, content_id: str, device_id: str, 
                                 quality: str = 'adaptive') -> Dict:
        """Start an XR content streaming session"""
        if content_id not in self.content_library:
            return {'success': False, 'error': 'Content not found'}
        
        content = self.content_library[content_id]
        device = self.device_profiles.get(device_id, {})
        
        session = {
            'session_id': f"stream_{int(time.time())}_{device_id}",
            'content_id': content_id,
            'device_id': device_id,
            'quality': quality,
            'started_at': datetime.now().isoformat(),
            'status': 'streaming',
            'bytes_delivered': 0,
            'buffer_events': [],
            'quality_switches': [],
            'current_bitrate_mbps': content['quality_levels'].get(quality, {}).get('bitrate_mbps', 20),
            'latency_ms': 0
        }
        
        self.streaming_sessions.append(session)
        content['total_deliveries'] += 1
        
        return {'success': True, 'session': session}
    
    def update_streaming_quality(self, session_id: str, network_mbps: float) -> Dict:
        """Adaptively update streaming quality based on network conditions"""
        session = next((s for s in self.streaming_sessions if s['session_id'] == session_id), None)
        if not session:
            return {'success': False, 'error': 'Session not found'}
        
        old_quality = session['quality']
        
        # Adaptive bitrate logic
        if network_mbps < 5:
            new_quality = 'low'
        elif network_mbps < 15:
            new_quality = 'medium'
        elif network_mbps < 50:
            new_quality = 'high'
        else:
            new_quality = 'ultra'
        
        if new_quality != old_quality:
            session['quality_switches'].append({
                'from': old_quality,
                'to': new_quality,
                'reason': f'Network: {network_mbps} Mbps',
                'timestamp': datetime.now().isoformat()
            })
            session['quality'] = new_quality
            
            content = self.content_library[session['content_id']]
            session['current_bitrate_mbps'] = content['quality_levels'].get(new_quality, {}).get('bitrate_mbps', 20)
        
        return {
            'success': True,
            'session_id': session_id,
            'quality': session['quality'],
            'switched': new_quality != old_quality,
            'bitrate_mbps': session['current_bitrate_mbps']
        }
    
    def configure_edge_cache(self, content_id: str, edge_nodes: List[str]) -> Dict:
        """Configure edge caching for content"""
        if content_id not in self.content_library:
            return {'success': False, 'error': 'Content not found'}
        
        content = self.content_library[content_id]
        content['cdn_nodes'] = edge_nodes
        
        for node in edge_nodes:
            self.cache_stats[node][content_id] = {
                'cached': True,
                'hits': 0,
                'misses': 0,
                'last_accessed': None,
                'size_mb': content['file_size_mb'] * 0.4  # Cached at medium quality
            }
        
        return {
            'success': True,
            'content_id': content_id,
            'edge_nodes': edge_nodes,
            'total_cache_size_mb': round(content['file_size_mb'] * 0.4 * len(edge_nodes), 1)
        }
    
    def record_cache_access(self, content_id: str, node: str, hit: bool) -> Dict:
        """Record cache hit/miss"""
        if node in self.cache_stats and content_id in self.cache_stats[node]:
            if hit:
                self.cache_stats[node][content_id]['hits'] += 1
                self.content_library[content_id]['cache_hits'] += 1
            else:
                self.cache_stats[node][content_id]['misses'] += 1
                self.content_library[content_id]['cache_misses'] += 1
            self.cache_stats[node][content_id]['last_accessed'] = datetime.now().isoformat()
        
        return {'success': True, 'hit': hit}
    
    def get_delivery_analytics(self) -> Dict:
        """Get comprehensive delivery analytics"""
        total_content = len(self.content_library)
        total_deliveries = sum(c['total_deliveries'] for c in self.content_library.values())
        total_cache_hits = sum(c['cache_hits'] for c in self.content_library.values())
        total_cache_misses = sum(c['cache_misses'] for c in self.content_library.values())
        
        cache_hit_rate = total_cache_hits / max(total_cache_hits + total_cache_misses, 1) * 100
        
        active_sessions = sum(1 for s in self.streaming_sessions if s['status'] == 'streaming')
        
        quality_distribution = defaultdict(int)
        for session in self.streaming_sessions:
            quality_distribution[session['quality']] += 1
        
        return {
            'success': True,
            'total_content': total_content,
            'total_deliveries': total_deliveries,
            'cache_hit_rate_pct': round(cache_hit_rate, 1),
            'active_sessions': active_sessions,
            'total_sessions': len(self.streaming_sessions),
            'quality_distribution': dict(quality_distribution),
            'edge_nodes': sum(len(c.get('cdn_nodes', [])) for c in self.content_library.values())
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive XR content delivery report"""
        analytics = self.get_delivery_analytics()
        
        report = f"""
🎬 XR CONTENT DELIVERY REPORT (V890)
{'='*60}

DELIVERY OVERVIEW:
- Content Library: {analytics['total_content']} items
- Total Deliveries: {analytics['total_deliveries']:,}
- Cache Hit Rate: {analytics['cache_hit_rate_pct']}%
- Active Sessions: {analytics['active_sessions']}
- Edge Nodes: {analytics['edge_nodes']}

QUALITY DISTRIBUTION:
"""
        for quality, count in analytics['quality_distribution'].items():
            report += f"  • {quality}: {count} sessions\n"
        
        report += "\nCONTENT LIBRARY:\n"
        for cid, content in self.content_library.items():
            report += f"""
  📦 {content['title']} ({cid})
    Type: {content['content_type']} | Size: {content['file_size_mb']} MB
    Deliveries: {content['total_deliveries']} | Cache Hits: {content['cache_hits']}
    CDN Nodes: {len(content.get('cdn_nodes', []))}
"""
        
        report += f"""
DEVICE PROFILES: {len(self.device_profiles)}

RECOMMENDATIONS:
- {'✅ Excellent cache hit rate' if analytics['cache_hit_rate_pct'] > 80 else '⚠️ Consider pre-caching popular content'}
- {'✅ Good delivery performance' if analytics['active_sessions'] < 100 else '⚠️ Consider scaling edge nodes'}

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for XR content delivery requests"""
    xr_keywords = ['xr content', 'vr streaming', 'ar delivery', '360 video', 'hologram', 'spatial content']
    optimize_keywords = ['optimize', 'cache', 'bandwidth', 'adaptive', 'quality', 'performance']
    
    has_xr = any(kw in email_text.lower() for kw in xr_keywords)
    has_optimize = any(kw in email_text.lower() for kw in optimize_keywords)
    
    analysis = {
        'email_type': 'xr_content_delivery',
        'xr_request': has_xr,
        'optimization_requested': has_optimize,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if has_xr and has_optimize:
        analysis['priority'] = 'high'
        analysis['action'] = 'optimize_xr_delivery'
    
    return analysis


if __name__ == '__main__':
    engine = XRContentDeliveryEngine()
    
    # Register content
    engine.register_content('XR-001', 'Virtual Museum Tour', 'vr_360', 500, 
                            {'formats': ['mp4', 'hls'], 'duration_min': 45})
    engine.register_content('XR-002', 'AR Product Showcase', 'ar_overlay', 50,
                            {'formats': ['usdz', 'glb'], 'interactive': True})
    engine.register_content('XR-003', 'MR Training Scene', 'mr_scene', 200,
                            {'formats': ['glb', 'fbx'], 'interactions': 25})
    
    # Register devices
    engine.register_device_profile('DEV-001', 'quest_3', {
        'max_resolution': '4K', 'max_bitrate_mbps': 80,
        'supported_formats': ['glb'], 'foveated_rendering': True,
        'spatial_audio': True, 'hand_tracking': True
    })
    engine.register_device_profile('DEV-002', 'mobile_ar', {
        'max_resolution': '1080p', 'max_bitrate_mbps': 20,
        'supported_formats': ['usdz'], 'spatial_audio': False
    })
    
    # Configure edge cache
    engine.configure_edge_cache('XR-001', ['edge-us-east', 'edge-eu-west', 'edge-ap-south'])
    engine.configure_edge_cache('XR-002', ['edge-us-east', 'edge-eu-west'])
    
    # Simulate streaming
    session = engine.start_streaming_session('XR-001', 'DEV-001', 'high')
    sess_id = session['session']['session_id']
    
    engine.update_streaming_quality(sess_id, 25)
    engine.update_streaming_quality(sess_id, 8)
    engine.update_streaming_quality(sess_id, 60)
    
    # Cache access
    engine.record_cache_access('XR-001', 'edge-us-east', True)
    engine.record_cache_access('XR-001', 'edge-us-east', True)
    engine.record_cache_access('XR-002', 'edge-eu-west', False)
    
    # Quality selection
    quality = engine.select_optimal_quality('XR-001', 'DEV-001', 45)
    
    print(engine.generate_report())
    print(f"\nOptimal Quality: {json.dumps(quality, indent=2)}")
    
    test_email = "Optimize our VR 360 video delivery with adaptive streaming and edge caching for mobile AR devices"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
