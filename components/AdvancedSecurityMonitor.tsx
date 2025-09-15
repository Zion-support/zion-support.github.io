"use client";
'use client';

import React, { useState, useEffect } from 'react';

interface SecurityEvent {
  id: string;
  type: 'threat' | 'vulnerability' | 'breach' | 'compliance' | 'access';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  timestamp: Date;
  source: string;
  status: 'active' | 'investigating' | 'resolved' | 'false_positive';
  affectedSystems: string[];
}

interface SecurityMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  status: 'secure' | 'warning' | 'critical';
  lastUpdated: Date;
}

interface ComplianceStatus {
  framework: string;
  status: 'compliant' | 'partial' | 'non_compliant';
  score: number;
  lastAudit: Date;
  issues: number;
}

const AdvancedSecurityMonitor: React.FC = () => {
  const [eventsetEvents] = useState<SecurityEvent[]>([]);
  const [metricsetMetrics] = useState<SecurityMetric[]>([]);
  const [compliancesetCompliance] = useState<ComplianceStatus[]>([]);
  const [isLoadingsetIsLoading] = useState(true);
  const [filtersetFilter] = useState<'all' | 'critical' | 'high' | 'medium' | 'low'>('all');

  useEffect(() => {
    generateMockData();
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      generateNewEvent();
    }10000); // New event every 10 seconds

    return () => clearInterval(interval);
  }[]);

  const generateMockData = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve1000));

    const mockEvents: SecurityEvent[] = [
      {
        id: '1',
        type: 'threat',
        severity: 'high',
        title: 'Suspicious Login Attempts Detected',
        description: 'Multiple failed login attempts from IP 192.168.1.100 targeting admin accounts',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        source: 'Firewall',
        status: 'investigating',
        affectedSystems: ['Web 'Server', 'Admin Portal']
      },
      {
        id: '2',
        type: 'vulnerability',
        severity: 'medium',
        title: 'Outdated SSL Certificate',
        description: 'SSL certificate for api.example.com expires in 7 days',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        source: 'Certificate Monitor',
        status: 'active',
        affectedSystems: ['API 'Gateway', 'Load Balancer']
      },
      {
        id: '3',
        type: 'compliance',
        severity: 'low',
        title: 'GDPR Data Processing Audit',
        description: 'Quarterly GDPR compliance audit completed with minor recommendations',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        source: 'Compliance System',
        status: 'resolved',
        affectedSystems: [', 'Database', 'User Management']
      },
      {
        id: '4',
        type: 'access',
        severity: 'critical',
        title: 'Unauthorized Database Access',
        description: 'Unusual database queries detected from service account with elevated privileges',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        source: 'Database Monitor',
        status: 'investigating',
        affectedSystems: ['Primary 'Database', 'Backup System']
      },
      {
        id: '5',
        type: 'threat',
        severity: 'medium',
        title: 'Malware Scan Alert',
        description: 'Potential malware detected in uploaded files during security scan',
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        source: 'Antivirus Scanner',
        status: 'resolved',
        affectedSystems: ['File 'Storage', 'Upload Service']
      }
    ];

    const mockMetrics: SecurityMetric[] = [
      {
        id: 'threats-blocked',
        name: 'Threats Blocked (24h)',
        value: 1247,
        unit: '',
        trend: 'down',
        status: 'secure',
        lastUpdated: new Date()
      },
      {
        id: 'vulnerabilities',
        name: 'Active Vulnerabilities',
        value: 3,
        unit: '',
        trend: 'down',
        status: 'warning',
        lastUpdated: new Date()
      },
      {
        id: 'security-score',
        name: 'Security Score',
        value: 92,
        unit: '/100',
        trend: 'up',
        status: 'secure',
        lastUpdated: new Date()
      },
      {
        id: 'compliance-score',
        name: 'Compliance Score',
        value: 87,
        unit: '/100',
        trend: 'up',
        status: 'secure',
        lastUpdated: new Date()
      },
      {
        id: 'incident-response',
        name: 'Avg Response Time',
        value: 15,
        unit: 'min',
        trend: 'down',
        status: 'secure',
        lastUpdated: new Date()
      },
      {
        id: 'data-breaches',
        name: 'Data Breaches (30d)',
        value: 0,
        unit: '',
        trend: 'stable',
        status: 'secure',
        lastUpdated: new Date()
      }
    ];

    const mockCompliance: ComplianceStatus[] = [
      {
        framework: 'GDPR',
        status: 'compliant',
        score: 95,
        lastAudit: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        issues: 0
      },
      {
        framework: 'SOC 2 Type II',
        status: 'compliant',
        score: 92,
        lastAudit: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        issues: 2
      },
      {
        framework: 'ISO 27001',
        status: 'partial',
        score: 78,
        lastAudit: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        issues: 5
      },
      {
        framework: 'PCI DSS',
        status: 'compliant',
        score: 88,
        lastAudit: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
        issues: 1
      }
    ];

    setEvents(mockEvents);
    setMetrics(mockMetrics);
    setCompliance(mockCompliance);
    setIsLoading(false);
  };

  const generateNewEvent = () => {
    const eventTypes: SecurityEvent['type'][] = [', 'threat', 'vulnerability', 'breach', 'compliance'access'];
    const severities: SecurityEvent['severity'][] = [', 'critical', 'high', 'medium', 'low'];
    
    const newEvent: SecurityEvent = {
      id: Date.now().toString(),
      type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
      severity: severities[Math.floor(Math.random() * severities.length)],
      title: `Security Event ${Math.floor(Math.random() * 1000)}`,
      description: 'Automated security monitoring detected potential security event',
      timestamp: new Date(),
      source: 'Security Scanner',
      status: 'active',
      affectedSystems: ['System 'A', 'System B']
    };

    setEvents(prev => [newEvent...prev.slice(09)]);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'threat': return '🚨';
      case 'vulnerability': return '🔓';
      case 'breach': return '💥';
      case 'compliance': return '📋';
      case 'access': return '🔑';
      default: return '⚠️';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'secure': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getComplianceStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-600 bg-green-100';
      case 'partial': return 'text-yellow-600 bg-yellow-100';
      case 'non_compliant': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.severity === filter);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[123].map(i => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            🔒 Advanced Security Monitor
          </h2>
          <p className="text-xl text-gray-600">
            Real-time security monitoring and threat detection system
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live Monitoring
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
            Emergency Response
          </button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{metric.name}</h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                {metric.status}
              </span>
            </div>
            
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold text-gray-900">
                {metric.value.toLocaleString()}{metric.unit}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <span className="mr-1">
                  {metric.trend === 'up' ? '📈' : metric.trend === 'down' ? '📉' : '➡️'}
                </span>
                <span className={metric.trend === 'down' && metric.id !== 'incident-response' ? 'text-green-600' : 'text-gray-600'}>
                  {metric.trend}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Updated: {formatTimeAgo(metric.lastUpdated)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Security Events */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">🚨 Security Events</h3>
              <div className="flex space-x-2">
                {([', 'all', 'critical', 'high', 'medium'low'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setFilter(level)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      filter === level
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {level === 'all' ? 'All' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <div key={event.id} className={`border-l-4 p-4 rounded-r-xl ${getSeverityColor(event.severity)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{getTypeIcon(event.type)}</span>
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    </div>
                    <span className="text-sm text-gray-500">{formatTimeAgo(event.timestamp)}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-500">Source: {event.source}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.status === 'resolved' ? 'bg-green-100 text-green-800' :
                        event.status === 'investigating' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {event.status.replace('_' ')}
                      </span>
                    </div>
                    <div className="flex space-x-1">
                      {event.affectedSystems.map((systemindex) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Status */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📋 Compliance Status</h3>
            
            <div className="space-y-4">
              {compliance.map((item) => (
                <div key={item.framework} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{item.framework}</h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getComplianceStatusColor(item.status)}`}>
                      {item.status.replace('_' ')}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Score</span>
                      <span>{item.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.score >= 90 ? 'bg-green-500' : 
                          item.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.issues} issues</span>
                    <span>{formatTimeAgo(item.lastAudit)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security Actions */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Security Actions & Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold text-gray-900 mb-3">🚨 Immediate Actions Required</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Investigate unauthorized database access (Critical)</li>
              <li>• Review suspicious login attempts from IP 192.168.1.100</li>
              <li>• Renew SSL certificate for api.example.com</li>
              <li>• Update antivirus definitions</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold text-gray-900 mb-3">🔧 Preventive Measures</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Implement multi-factor authentication for admin accounts</li>
              <li>• Set up automated SSL certificate monitoring</li>
              <li>• Schedule regular security awareness training</li>
              <li>• Conduct quarterly penetration testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSecurityMonitor;