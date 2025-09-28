import React, { useState, useEffect, useMemo } from 'react';

interface SecurityAlert {
  id: string;
  type: 'threat' | 'warning' | 'info' | 'success';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  source: string;
  timestamp: Date;
  status: 'active' | 'resolved' | 'investigating';
  recommendation: string;
}

interface SecurityMetric {
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

interface SecurityDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function SecurityDashboard({ isVisible, onClose }: SecurityDashboardProps) {
  const [alerts, setAlerts] = useState<SecurityAlert[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'critical' | 'high' | 'medium' | 'low'>('all');

  useEffect(() => {
    if (isVisible) {
      loadSecurityData();
    }
  }, [isVisible]);

  const loadSecurityData = async () => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual security data
      const mockAlerts: SecurityAlert[] = [
        {
          id: '1',
          type: 'threat',
          severity: 'critical',
          title: 'Suspicious Login Attempts Detected',
          description: 'Multiple failed login attempts from IP 192.168.1.100 within 5 minutes.',
          source: 'Authentication System',
          timestamp: new Date(),
          status: 'investigating',
          recommendation: 'Block IP address and implement rate limiting for login attempts.'
        },
        {
          id: '2',
          type: 'warning',
          severity: 'high',
          title: 'Outdated Security Headers',
          description: 'Missing Content Security Policy and X-Frame-Options headers detected.',
          source: 'Security Scanner',
          timestamp: new Date(Date.now() - 300000),
          status: 'active',
          recommendation: 'Implement comprehensive security headers to prevent XSS and clickjacking attacks.'
        },
        {
          id: '3',
          type: 'info',
          severity: 'medium',
          title: 'SSL Certificate Expiring Soon',
          description: 'SSL certificate will expire in 15 days.',
          source: 'Certificate Monitor',
          timestamp: new Date(Date.now() - 600000),
          status: 'active',
          recommendation: 'Renew SSL certificate before expiration to maintain secure connections.'
        },
        {
          id: '4',
          type: 'success',
          severity: 'low',
          title: 'Security Scan Completed',
          description: 'Automated security scan completed with no critical vulnerabilities found.',
          source: 'Security Scanner',
          timestamp: new Date(Date.now() - 900000),
          status: 'resolved',
          recommendation: 'Continue regular security scans and monitoring.'
        },
        {
          id: '5',
          type: 'warning',
          severity: 'medium',
          title: 'Unusual Data Access Pattern',
          description: 'Unusual data access pattern detected from user account admin@example.com.',
          source: 'Access Monitor',
          timestamp: new Date(Date.now() - 1200000),
          status: 'investigating',
          recommendation: 'Review user permissions and investigate data access logs.'
        }
      ];

      const mockMetrics: SecurityMetric[] = [
        {
          name: 'Security Score',
          value: 85,
          target: 90,
          unit: '/100',
          trend: 'up',
          description: 'Overall security posture score'
        },
        {
          name: 'Threats Blocked',
          value: 1247,
          target: 1000,
          unit: '',
          trend: 'up',
          description: 'Number of threats blocked in the last 24 hours'
        },
        {
          name: 'Vulnerabilities',
          value: 3,
          target: 0,
          unit: '',
          trend: 'down',
          description: 'Number of active vulnerabilities'
        },
        {
          name: 'Response Time',
          value: 2.3,
          target: 5.0,
          unit: 'min',
          trend: 'down',
          description: 'Average time to respond to security incidents'
        },
        {
          name: 'Compliance Score',
          value: 92,
          target: 95,
          unit: '%',
          trend: 'up',
          description: 'Security compliance score'
        }
      ];
      
      setAlerts(mockAlerts);
      setMetrics(mockMetrics);
    } catch (error) {
      console.error('Failed to load security data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAlerts = useMemo(() => {
    if (selectedFilter === 'all') return alerts;
    return alerts.filter(alert => alert.severity === selectedFilter);
  }, [alerts, selectedFilter]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'threat': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'success': return '✅';
      default: return 'ℹ️';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-600 bg-red-100';
      case 'investigating': return 'text-yellow-600 bg-yellow-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return timestamp.toLocaleDateString();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-gray-900">Security Dashboard</h2>
          <div className="flex items-center space-x-4">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Alerts</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Security Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{metric.name}</h3>
                      <span className="text-lg text-gray-600">{getTrendIcon(metric.trend)}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {metric.value}{metric.unit}
                      </span>
                      <span className="text-gray-500 ml-2">/ {metric.target}{metric.unit}</span>
                    </div>
                    <p className="text-sm text-gray-600">{metric.description}</p>
                  </div>
                ))}
              </div>

              {/* Security Alerts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Security Alerts</h3>
                <div className="space-y-4">
                  {filteredAlerts.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-gray-500">No alerts found for the selected filter</div>
                    </div>
                  ) : (
                    filteredAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className="bg-white p-6 rounded-lg border-l-4 border-gray-200 shadow-sm"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-2xl">{getTypeIcon(alert.type)}</span>
                              <h4 className="text-lg font-semibold text-gray-900">{alert.title}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                                {alert.severity.toUpperCase()}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                                {alert.status.toUpperCase()}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{alert.description}</p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Recommendation</h5>
                              <p className="text-gray-600">{alert.recommendation}</p>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span>Source: <span className="font-medium">{alert.source}</span></span>
                              </div>
                              <span>{formatTimestamp(alert.timestamp)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Security Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {alerts.filter(a => a.severity === 'critical' && a.status === 'active').length}
                  </div>
                  <div className="text-sm text-gray-600">Critical Alerts</div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {alerts.filter(a => a.status === 'investigating').length}
                  </div>
                  <div className="text-sm text-gray-600">Under Investigation</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {alerts.filter(a => a.status === 'resolved').length}
                  </div>
                  <div className="text-sm text-gray-600">Resolved</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}