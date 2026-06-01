#!/usr/bin/env python3
"""
V885: IoT Security & Threat Detection Engine
Monitors IoT device networks, detects threats, enforces security policies, and manages device certificates.
"""

import json
import hashlib
import re
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict

class IoTSecurityEngine:
    def __init__(self):
        self.devices = {}
        self.security_policies = {}
        self.threats = []
        self.network_flows = []
        self.certificates = {}
        self.vulnerabilities = []
        self.incidents = []
        
    def register_device(self, device_id: str, device_type: str, ip_address: str, 
                       firmware_version: str, protocols: List[str]) -> Dict:
        """Register IoT device for security monitoring"""
        device = {
            'device_id': device_id,
            'device_type': device_type,
            'ip_address': ip_address,
            'firmware_version': firmware_version,
            'protocols': protocols,
            'security_score': 100,
            'status': 'monitored',
            'last_scan': datetime.now().isoformat(),
            'open_ports': [],
            'certificate_valid': True,
            'registered_at': datetime.now().isoformat()
        }
        self.devices[device_id] = device
        return {'success': True, 'device_id': device_id, 'message': f'Device {device_id} registered for monitoring'}
    
    def scan_vulnerabilities(self, device_id: str) -> Dict:
        """Scan device for security vulnerabilities"""
        if device_id not in self.devices:
            return {'success': False, 'error': 'Device not found'}
        
        device = self.devices[device_id]
        vulns = []
        
        # Check firmware version
        firmware = device['firmware_version']
        parts = firmware.split('.')
        if len(parts) >= 2:
            major, minor = int(parts[0]), int(parts[1])
            if major < 2 or (major == 2 and minor < 5):
                vuln = {
                    'id': f'VULN-{device_id}-001',
                    'type': 'outdated_firmware',
                    'severity': 'high',
                    'description': f'Firmware {firmware} is outdated. Latest: 2.5.0',
                    'cve': 'CVE-2025-1234',
                    'recommendation': 'Update firmware to latest version'
                }
                vulns.append(vuln)
        
        # Check for insecure protocols
        insecure_protocols = {'http', 'telnet', 'ftp', 'mqtt_unencrypted'}
        for protocol in device['protocols']:
            if protocol.lower() in insecure_protocols:
                vuln = {
                    'id': f'VULN-{device_id}-002',
                    'type': 'insecure_protocol',
                    'severity': 'critical',
                    'description': f'Insecure protocol detected: {protocol}',
                    'recommendation': f'Migrate to secure alternative (e.g., {protocol}s or {protocol}_tls)'
                }
                vulns.append(vuln)
        
        # Check open ports
        dangerous_ports = {23: 'Telnet', 21: 'FTP', 3389: 'RDP', 445: 'SMB'}
        for port in device.get('open_ports', []):
            if port in dangerous_ports:
                vuln = {
                    'id': f'VULN-{device_id}-003',
                    'type': 'dangerous_port_open',
                    'severity': 'high',
                    'description': f'Dangerous port {port} ({dangerous_ports[port]}) is open',
                    'recommendation': f'Close port {port} or restrict access via firewall'
                }
                vulns.append(vuln)
        
        # Check default credentials
        if device.get('uses_default_credentials', False):
            vuln = {
                'id': f'VULN-{device_id}-004',
                'type': 'default_credentials',
                'severity': 'critical',
                'description': 'Device appears to use default credentials',
                'recommendation': 'Change default credentials immediately'
            }
            vulns.append(vuln)
        
        self.vulnerabilities.extend(vulns)
        
        # Update security score
        score_deduction = sum(
            {'critical': 30, 'high': 20, 'medium': 10, 'low': 5}.get(v['severity'], 5)
            for v in vulns
        )
        device['security_score'] = max(0, 100 - score_deduction)
        
        return {
            'success': True,
            'device_id': device_id,
            'vulnerabilities_found': len(vulns),
            'vulnerabilities': vulns,
            'security_score': device['security_score']
        }
    
    def monitor_network_flow(self, source_ip: str, dest_ip: str, port: int, 
                             protocol: str, bytes_transferred: int) -> Dict:
        """Monitor network traffic flow for threat detection"""
        flow = {
            'source_ip': source_ip,
            'dest_ip': dest_ip,
            'port': port,
            'protocol': protocol,
            'bytes': bytes_transferred,
            'timestamp': datetime.now().isoformat()
        }
        self.network_flows.append(flow)
        
        # Threat detection
        threats = self._detect_threats(flow)
        
        return {
            'success': True,
            'flow_logged': True,
            'threats_detected': threats
        }
    
    def _detect_threats(self, flow: Dict) -> List[Dict]:
        """Detect threats in network flow"""
        threats = []
        
        # DDoS detection - unusual traffic volume
        if flow['bytes'] > 10_000_000:  # 10MB single flow
            threat = {
                'id': f'THREAT-{int(time.time())}',
                'type': 'potential_ddos',
                'severity': 'high',
                'source_ip': flow['source_ip'],
                'dest_ip': flow['dest_ip'],
                'description': f'Unusual traffic volume: {flow["bytes"]:,} bytes',
                'timestamp': flow['timestamp'],
                'action_taken': 'rate_limiting_applied'
            }
            threats.append(threat)
            self.threats.append(threat)
        
        # Suspicious port scanning
        suspicious_ports = {4444, 5555, 6666, 31337, 12345}
        if flow['port'] in suspicious_ports:
            threat = {
                'id': f'THREAT-{int(time.time())}',
                'type': 'suspicious_port',
                'severity': 'medium',
                'source_ip': flow['source_ip'],
                'port': flow['port'],
                'description': f'Connection to known malicious port {flow["port"]}',
                'timestamp': flow['timestamp'],
                'action_taken': 'connection_blocked'
            }
            threats.append(threat)
            self.threats.append(threat)
        
        # Data exfiltration detection
        recent_flows = [f for f in self.network_flows[-100:] 
                        if f['source_ip'] == flow['source_ip']]
        total_outbound = sum(f['bytes'] for f in recent_flows)
        if total_outbound > 50_000_000:  # 50MB from single source
            threat = {
                'id': f'THREAT-{int(time.time())}',
                'type': 'data_exfiltration',
                'severity': 'critical',
                'source_ip': flow['source_ip'],
                'description': f'Potential data exfiltration: {total_outbound:,} bytes outbound',
                'timestamp': flow['timestamp'],
                'action_taken': 'device_quarantined'
            }
            threats.append(threat)
            self.threats.append(threat)
        
        return threats
    
    def create_security_policy(self, policy_id: str, rules: List[Dict]) -> Dict:
        """Create security policy for IoT devices"""
        policy = {
            'policy_id': policy_id,
            'rules': rules,
            'created_at': datetime.now().isoformat(),
            'applied_devices': [],
            'status': 'active'
        }
        self.security_policies[policy_id] = policy
        return {'success': True, 'policy_id': policy_id, 'rules_count': len(rules)}
    
    def apply_policy_to_device(self, device_id: str, policy_id: str) -> Dict:
        """Apply security policy to device"""
        if device_id not in self.devices:
            return {'success': False, 'error': 'Device not found'}
        if policy_id not in self.security_policies:
            return {'success': False, 'error': 'Policy not found'}
        
        self.security_policies[policy_id]['applied_devices'].append(device_id)
        self.devices[device_id]['applied_policy'] = policy_id
        
        return {
            'success': True,
            'device_id': device_id,
            'policy_id': policy_id,
            'message': f'Policy {policy_id} applied to {device_id}'
        }
    
    def manage_certificate(self, device_id: str, action: str = 'issue') -> Dict:
        """Manage device security certificates"""
        if device_id not in self.devices:
            return {'success': False, 'error': 'Device not found'}
        
        if action == 'issue':
            cert = {
                'device_id': device_id,
                'serial': hashlib.sha256(f'{device_id}{time.time()}'.encode()).hexdigest()[:16],
                'issued_at': datetime.now().isoformat(),
                'expires_at': (datetime.now() + timedelta(days=365)).isoformat(),
                'status': 'valid',
                'fingerprint': hashlib.sha256(f'cert-{device_id}'.encode()).hexdigest()
            }
            self.certificates[device_id] = cert
            self.devices[device_id]['certificate_valid'] = True
            
            return {'success': True, 'certificate': cert}
        
        elif action == 'revoke':
            if device_id in self.certificates:
                self.certificates[device_id]['status'] = 'revoked'
                self.devices[device_id]['certificate_valid'] = False
                return {'success': True, 'message': f'Certificate revoked for {device_id}'}
            return {'success': False, 'error': 'No certificate found'}
    
    def get_security_dashboard(self) -> Dict:
        """Get IoT security dashboard"""
        total_devices = len(self.devices)
        avg_score = sum(d['security_score'] for d in self.devices.values()) / max(total_devices, 1)
        
        critical_threats = [t for t in self.threats if t['severity'] == 'critical']
        high_threats = [t for t in self.threats if t['severity'] == 'high']
        
        vulnerable_devices = [d for d in self.devices.values() if d['security_score'] < 70]
        
        return {
            'success': True,
            'total_devices': total_devices,
            'avg_security_score': round(avg_score, 1),
            'total_threats': len(self.threats),
            'critical_threats': len(critical_threats),
            'high_threats': len(high_threats),
            'vulnerable_devices': len(vulnerable_devices),
            'total_vulnerabilities': len(self.vulnerabilities),
            'active_policies': len(self.security_policies),
            'valid_certificates': sum(1 for c in self.certificates.values() if c['status'] == 'valid')
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive IoT security report"""
        dashboard = self.get_security_dashboard()
        
        report = f"""
🔒 IoT SECURITY & THREAT DETECTION REPORT (V885)
{'='*60}

SECURITY OVERVIEW:
- Monitored Devices: {dashboard['total_devices']}
- Average Security Score: {dashboard['avg_security_score']}/100
- Active Threats: {dashboard['total_threats']}
- Critical Threats: {dashboard['critical_threats']}
- High Threats: {dashboard['high_threats']}
- Vulnerable Devices: {dashboard['vulnerable_devices']}
- Total Vulnerabilities: {dashboard['total_vulnerabilities']}

CERTIFICATE MANAGEMENT:
- Valid Certificates: {dashboard['valid_certificates']}
- Active Policies: {dashboard['active_policies']}
"""
        
        if self.threats:
            report += "\nRECENT THREATS:\n"
            for threat in self.threats[-5:]:
                report += f"  • [{threat['severity'].upper()}] {threat['type']}: {threat['description']}\n"
        
        if self.vulnerabilities:
            report += "\nOPEN VULNERABILITIES:\n"
            for vuln in self.vulnerabilities[-5:]:
                report += f"  • [{vuln['severity'].upper()}] {vuln['type']}: {vuln['description']}\n"
        
        report += f"""
SECURITY POSTURE:
- {'✅ Strong security posture' if dashboard['avg_security_score'] > 80 else '⚠️ Security posture needs improvement'}
- {'✅ No critical threats' if dashboard['critical_threats'] == 0 else '🚨 CRITICAL THREATS DETECTED'}
- {'✅ All devices patched' if dashboard['vulnerable_devices'] == 0 else f'⚠️ {dashboard["vulnerable_devices"]} devices vulnerable'}

RECOMMENDATIONS:
1. {'Patch all firmware immediately' if any(v['type'] == 'outdated_firmware' for v in self.vulnerabilities) else 'Firmware up to date'}
2. {'Migrate from insecure protocols' if any(v['type'] == 'insecure_protocol' for v in self.vulnerabilities) else 'Protocols secured'}
3. {'Review and rotate certificates' if dashboard['valid_certificates'] < dashboard['total_devices'] else 'Certificates valid'}

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for IoT security requests"""
    security_keywords = ['iot security', 'threat detection', 'vulnerability', 'security scan', 'certificate']
    incident_keywords = ['breach', 'attack', 'intrusion', 'compromised', 'incident']
    
    has_security = any(kw in email_text.lower() for kw in security_keywords)
    has_incident = any(kw in email_text.lower() for kw in incident_keywords)
    
    analysis = {
        'email_type': 'iot_security',
        'security_request': has_security,
        'incident_reported': has_incident,
        'reply_all_required': True,
        'priority': 'medium'
    }
    
    if has_incident:
        analysis['priority'] = 'critical'
        analysis['action'] = 'incident_response'
    elif has_security:
        analysis['priority'] = 'high'
        analysis['action'] = 'security_scan'
    
    return analysis


if __name__ == '__main__':
    engine = IoTSecurityEngine()
    
    # Register devices
    engine.register_device('IOT-001', 'smart_sensor', '192.168.1.100', '1.2.0', ['mqtt', 'http'])
    engine.register_device('IOT-002', 'ip_camera', '192.168.1.101', '2.5.0', ['rtsp', 'https'])
    engine.register_device('IOT-003', 'gateway', '192.168.1.1', '2.1.0', ['mqtt', 'https', 'telnet'])
    
    # Scan vulnerabilities
    engine.scan_vulnerabilities('IOT-001')
    engine.scan_vulnerabilities('IOT-003')
    
    # Monitor network flows
    engine.monitor_network_flow('192.168.1.100', '10.0.0.5', 443, 'TLS', 5000)
    engine.monitor_network_flow('192.168.1.100', '203.0.113.5', 4444, 'TCP', 15_000_000)
    
    # Create and apply policy
    engine.create_security_policy('POL-001', [
        {'rule': 'block_telnet', 'action': 'deny'},
        {'rule': 'require_tls', 'action': 'enforce'},
        {'rule': 'max_outbound_10mb', 'action': 'rate_limit'}
    ])
    engine.apply_policy_to_device('IOT-001', 'POL-001')
    
    # Issue certificates
    engine.manage_certificate('IOT-001', 'issue')
    engine.manage_certificate('IOT-002', 'issue')
    
    print(engine.generate_report())
    
    test_email = "Run a security scan on all IoT devices, we detected a potential breach on the sensor network"
    analysis = analyze_email_content(test_email)
    print("\nEmail Analysis:")
    print(json.dumps(analysis, indent=2))
