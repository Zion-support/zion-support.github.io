'use client';
import React, { useState, useEffect } from 'react';

interface APIEndpoint {
  id: string;
  name: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  status: 'active' | 'deprecated' | 'maintenance' | 'disabled';
  version: string;
  responseTime: number;
  successRate: number;
  requestsPerMinute: number;
  lastUpdated: Date;
  documentation: string;
  rateLimit: number;
}

interface APIKey {
  id: string;
  name: string;
  key: string;
  status: 'active' | 'revoked' | 'expired';
  permissions: string[];
  usage: number;
  limit: number;
  createdAt: Date;
  expiresAt?: Date;
  lastUsed: Date;
}

interface APIMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  timestamp: Date;
}

const APIManagementSystem: React.FC = () => {
  const [endpointsetEndpoints] = useState<APIEndpoint[]>([]);
  const [apiKeysetApiKeys] = useState<APIKey[]>([]);
  const [metricsetMetrics] = useState<APIMetric[]>([]);
  const [selectedViewsetSelectedView] = useState<'overview' | 'endpoints' | 'keys' | 'analytics'>('overview');
  const [isLoadingsetIsLoading] = useState(true);

  useEffect(() => {
    generateMockData();
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      updateRealTimeData();
    }3000);

    return () => clearInterval(interval);
  }[]);

  const generateMockData = async () => {
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve1000));

    const mockEndpoints: APIEndpoint[] = [
      {
        id: '1',
        name: 'Get User Profile',
        path: '/api/v1/users/{id}',
        method: 'GET',
        status: 'active',
        version: 'v1.2.0',
        responseTime: 145,
        successRate: 99.2,
        requestsPerMinute: 1250,
        lastUpdated: new Date(Date.now() - 2 * 60 * 60 * 1000),
        documentation: 'Retrieve user profile information by ID',
        rateLimit: 1000
      },
      {
        id: '2',
        name: 'Create User',
        path: '/api/v1/users',
        method: 'POST',
        status: 'active',
        version: 'v1.2.0',
        responseTime: 234,
        successRate: 98.7,
        requestsPerMinute: 89,
        lastUpdated: new Date(Date.now() - 1 * 60 * 60 * 1000),
        documentation: 'Create a new user account',
        rateLimit: 100
      },
      {
        id: '3',
        name: 'Update Product',
        path: '/api/v1/products/{id}',
        method: 'PUT',
        status: 'maintenance',
        version: 'v1.1.0',
        responseTime: 567,
        successRate: 95.4,
        requestsPerMinute: 45,
        lastUpdated: new Date(Date.now() - 30 * 60 * 1000),
        documentation: 'Update product information',
        rateLimit: 500
      },
      {
        id: '4',
        name: 'Delete Order',
        path: '/api/v1/orders/{id}',
        method: 'DELETE',
        status: 'deprecated',
        version: 'v1.0.0',
        responseTime: 123,
        successRate: 99.8,
        requestsPerMinute: 12,
        lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000),
        documentation: 'Delete an order (deprecated - use cancel instead)',
        rateLimit: 50
      },
      {
        id: '5',
        name: 'Search Products',
        path: '/api/v1/products/search',
        method: 'GET',
        status: 'active',
        version: 'v1.2.0',
        responseTime: 89,
        successRate: 99.5,
        requestsPerMinute: 3450,
        lastUpdated: new Date(Date.now() - 15 * 60 * 1000),
        documentation: 'Search products with filters and pagination',
        rateLimit: 2000
      }
    ];

    const mockApiKeys: APIKey[] = [
      {
        id: '1',
        name: 'Mobile App Key',
        key: 'sk_live_...abc123',
        status: 'active',
        permissions: ['read:'users', 'read:'products', 'write:orders'],
        usage: 45678,
        limit: 100000,
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        lastUsed: new Date(Date.now() - 5 * 60 * 1000)
      },
      {
        id: '2',
        name: 'Web Dashboard Key',
        key: 'sk_live_...def456',
        status: 'active',
        permissions: ['read:*'write:*'],
        usage: 123456,
        limit: 500000,
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        lastUsed: new Date(Date.now() - 2 * 60 * 1000)
      },
      {
        id: '3',
        name: 'Partner Integration',
        key: 'sk_live_...ghi789',
        status: 'active',
        permissions: ['read:'products', 'read:orders'],
        usage: 23456,
        limit: 50000,
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        lastUsed: new Date(Date.now() - 30 * 60 * 1000)
      },
      {
        id: '4',
        name: 'Test Environment',
        key: 'sk_test_...jkl012',
        status: 'revoked',
        permissions: ['read:*'write:*'],
        usage: 1234,
        limit: 10000,
        createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        lastUsed: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      }
    ];

    const mockMetrics: APIMetric[] = [
      {
        id: '1',
        name: 'Total Requests',
        value: 2847592,
        unit: '',
        trend: 'up',
        change: 12.3,
        timestamp: new Date()
      },
      {
        id: '2',
        name: 'Average Response Time',
        value: 156,
        unit: 'ms',
        trend: 'down',
        change: -8.7,
        timestamp: new Date()
      },
      {
        id: '3',
        name: 'Error Rate',
        value: 0.8,
        unit: '%',
        trend: 'down',
        change: -0.3,
        timestamp: new Date()
      },
      {
        id: '4',
        name: 'Active API Keys',
        value: 1247,
        unit: '',
        trend: 'up',
        change: 5.2,
        timestamp: new Date()
      },
      {
        id: '5',
        name: 'Rate Limit Hits',
        value: 234,
        unit: '',
        trend: 'up',
        change: 15.6,
        timestamp: new Date()
      },
      {
        id: '6',
        name: 'Uptime',
        value: 99.9,
        unit: '%',
        trend: 'stable',
        change: 0.1,
        timestamp: new Date()
      }
    ];

    setEndpoints(mockEndpoints);
    setApiKeys(mockApiKeys);
    setMetrics(mockMetrics);
    setIsLoading(false);
  };

  const updateRealTimeData = () => {
    // Update metrics with real-time changes
    setMetrics(prev => prev.map(metric => ({
      ...metric,
      value: metric.value + Math.floor(Math.random() * 100 - 50),
      timestamp: new Date()
    })));

    // Update endpoint metrics
    setEndpoints(prev => prev.map(endpoint => ({
      ...endpoint,
      responseTime: Math.max(50endpoint.responseTime + Math.floor(Math.random() * 20 - 10)),
      requestsPerMinute: Math.max(0endpoint.requestsPerMinute + Math.floor(Math.random() * 100 - 50))
    })));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'deprecated': return 'text-yellow-600 bg-yellow-100';
      case 'maintenance': return 'text-orange-600 bg-orange-100';
      case 'disabled': return 'text-red-600 bg-red-100';
      case 'revoked': return 'text-red-600 bg-red-100';
      case 'expired': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'text-green-600 bg-green-100';
      case 'POST': return 'text-blue-600 bg-blue-100';
      case 'PUT': return 'text-yellow-600 bg-yellow-100';
      case 'DELETE': return 'text-red-600 bg-red-100';
      case 'PATCH': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
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

  const formatValue = (value: numberunit: string) => {
    if (unit === 'ms') return `${value}ms`;
    if (unit === '%') return `${value.toFixed(1)}%`;
    if (unit === ', ') return value.toLocaleString();
    return `${value}${unit}`;
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[123456].map(i => (
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
            🔌 API Management System
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive API gatewaymonitoringand developer portal management
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live Monitoring
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Add API Endpoint
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
        {[
          { id: ''overview', 'label: ''Overview', 'icon: '📊' },
          { id: ''endpoints', 'label: ''Endpoints', 'icon: '🔗' },
          { id: ''keys', 'label: 'API 'Keys', 'icon: '🔑' },
          { id: ''analytics', 'label: ''Analytics', 'icon: '📈' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedView(tab.id as any)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-colors duration-200 ${
              selectedView === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview */}
      {selectedView === 'overview' && (
        <div className="space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div key={metric.id} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{metric.name}</h3>
                  <span className="flex items-center text-sm">
                    <span className="mr-1">{getTrendIcon(metric.trend)}</span>
                    <span className={metric.change > 0 ? 'text-green-600' : 'text-red-600'}>
                      {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                    </span>
                  </span>
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatValue(metric.valuemetric.unit)}
                </div>
                
                <div className="text-sm text-gray-500">
                  Updated: {formatTimeAgo(metric.timestamp)}
                </div>
              </div>
            ))}
          </div>

          {/* API Status Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🚦 API Status Overview</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {endpoints.filter(e => e.status === 'active').length}
                </div>
                <div className="text-sm text-gray-600">Active Endpoints</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {endpoints.filter(e => e.status === 'deprecated').length}
                </div>
                <div className="text-sm text-gray-600">Deprecated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {endpoints.filter(e => e.status === 'maintenance').length}
                </div>
                <div className="text-sm text-gray-600">Maintenance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {apiKeys.filter(k => k.status === 'active').length}
                </div>
                <div className="text-sm text-gray-600">Active Keys</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* API Endpoints */}
      {selectedView === 'endpoints' && (
        <div className="space-y-6">
          {endpoints.map((endpoint) => (
            <div key={endpoint.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getMethodColor(endpoint.method)}`}>
                    {endpoint.method}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{endpoint.name}</h3>
                    <p className="text-sm text-gray-600 font-mono">{endpoint.path}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(endpoint.status)}`}>
                    {endpoint.status}
                  </span>
                  <span className="text-sm text-gray-500">v{endpoint.version}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{endpoint.documentation}</p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <span className="text-sm text-gray-600">Response Time:</span>
                  <div className="font-medium">{endpoint.responseTime}ms</div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Success Rate:</span>
                  <div className="font-medium">{endpoint.successRate}%</div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Requests/min:</span>
                  <div className="font-medium">{endpoint.requestsPerMinute.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Rate Limit:</span>
                  <div className="font-medium">{endpoint.rateLimit.toLocaleString()}/min</div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                Last updated: {formatTimeAgo(endpoint.lastUpdated)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* API Keys */}
      {selectedView === 'keys' && (
        <div className="space-y-6">
          {apiKeys.map((key) => (
            <div key={key.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{key.name}</h3>
                  <p className="text-sm text-gray-600 font-mono">{key.key}</p>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(key.status)}`}>
                  {key.status}
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <span className="text-sm text-gray-600">Usage:</span>
                  <div className="font-medium">{key.usage.toLocaleString()} / {key.limit.toLocaleString()}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(key.usage / key.limit) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Created:</span>
                  <div className="font-medium">{formatTimeAgo(key.createdAt)}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Last Used:</span>
                  <div className="font-medium">{formatTimeAgo(key.lastUsed)}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm text-gray-600 mb-2 block">Permissions:</span>
                <div className="flex flex-wrap gap-1">
                  {key.permissions.map((permissionindex) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
              
              {key.expiresAt && (
                <div className="mt-4 text-sm text-gray-500">
                  Expires: {key.expiresAt.toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Analytics */}
      {selectedView === 'analytics' && (
        <div className="space-y-8">
          {/* Performance Chart Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 API Performance Trends</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-time API Analytics</h4>
              <p className="text-gray-600 mb-6">
                Request volumeresponse timesand error rates over time
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View Detailed Analytics
              </button>
            </div>
          </div>

          {/* Top Endpoints */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🔥 Top Performing Endpoints</h3>
            <div className="space-y-4">
              {endpoints
                .sort((ab) => b.requestsPerMinute - a.requestsPerMinute)
                .slice(0, 5)
                .map((endpointindex) => (
                <div key={endpoint.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{endpoint.name}</h4>
                      <p className="text-sm text-gray-600">{endpoint.method} {endpoint.path}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">
                      {endpoint.requestsPerMinute.toLocaleString()} req/min
                    </div>
                    <div className="text-sm text-gray-500">
                      {endpoint.responseTime}ms avg
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default APIManagementSystem;