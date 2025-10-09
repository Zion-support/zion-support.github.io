import React from 'react';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Activity, Server, Database, Globe, Cpu, HardDrive } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const systemComponents = [
    {
      name: 'Web Servers',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Load-balanced web servers handling HTTP requests',
      servers: 3,
      load: '45%'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '30ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'API gateway managing request routing and authentication',
      servers: 2,
      load: '60%'
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '15ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Primary and replica database servers',
      servers: 4,
      load: '35%'
    },
    {
      name: 'AI Processing Nodes',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '120ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'GPU-enabled servers for AI model inference',
      servers: 8,
      load: '70%'
    },
    {
      name: 'Cache Layer',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '5ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Redis cache for session and data caching',
      servers: 3,
      load: '25%'
    },
    {
      name: 'Message Queue',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '10ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'RabbitMQ for asynchronous task processing',
      servers: 2,
      load: '40%'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Distributed file storage system',
      servers: 5,
      load: '30%'
    },
    {
      name: 'Monitoring Systems',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '20ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'System monitoring and alerting infrastructure',
      servers: 2,
      load: '20%'
    }
  ];

  const metrics = [
    {
      name: 'Total Requests',
      value: '2.4M',
      change: '+12%',
      trend: 'up',
      description: 'Requests in the last 24 hours'
    },
    {
      name: 'Average Response Time',
      value: '85ms',
      change: '-5%',
      trend: 'down',
      description: 'Global average response time'
    },
    {
      name: 'Error Rate',
      value: '0.02%',
      change: '-0.01%',
      trend: 'down',
      description: 'Percentage of failed requests'
    },
    {
      name: 'Active Users',
      value: '15.2K',
      change: '+8%',
      trend: 'up',
      description: 'Currently active users'
    },
    {
      name: 'CPU Usage',
      value: '45%',
      change: '+3%',
      trend: 'up',
      description: 'Average CPU utilization'
    },
    {
      name: 'Memory Usage',
      value: '62%',
      change: '+2%',
      trend: 'up',
      description: 'Average memory utilization'
    }
  ];

  const recentAlerts = [
    {
      id: 'ALT-2024-001',
      severity: 'warning',
      component: 'AI Processing Nodes',
      message: 'High CPU usage detected on node-03',
      timestamp: '2024-12-15T09:45:00Z',
      status: 'acknowledged'
    },
    {
      id: 'ALT-2024-002',
      severity: 'info',
      component: 'Database Cluster',
      message: 'Scheduled maintenance completed successfully',
      timestamp: '2024-12-15T08:30:00Z',
      status: 'resolved'
    },
    {
      id: 'ALT-2024-003',
      severity: 'warning',
      component: 'Cache Layer',
      message: 'Memory usage approaching threshold',
      timestamp: '2024-12-15T07:15:00Z',
      status: 'investigating'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'outage':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'info':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗️' : '↘️';
  };

  const overallStatus = systemComponents.every(component => component.status === 'operational') ? 'operational' : 'degraded';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Detailed system health and performance metrics
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                {getStatusIcon(overallStatus)}
                <span className="ml-2 text-lg font-semibold">
                  All Systems {overallStatus === 'operational' ? 'Operational' : 'Degraded'}
                </span>
              </div>
              <div className="text-blue-200">•</div>
              <div className="text-lg">
                Last Updated: <span className="font-semibold">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Real-time system performance indicators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{metric.name}</h3>
                  <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {getTrendIcon(metric.trend)} {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Components
            </h2>
            <p className="text-xl text-gray-600">
              Status of all infrastructure components
            </p>
          </div>
          <div className="space-y-4">
            {systemComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(component.status)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{component.name}</h3>
                      <p className="text-gray-600 text-sm">{component.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Uptime</div>
                      <div className="font-semibold text-gray-900">{component.uptime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Response Time</div>
                      <div className="font-semibold text-gray-900">{component.responseTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Servers</div>
                      <div className="font-semibold text-gray-900">{component.servers}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Load</div>
                      <div className="font-semibold text-gray-900">{component.load}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(component.status)}`}>
                      {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Last checked: {new Date(component.lastCheck).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Alerts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Alerts
            </h2>
            <p className="text-xl text-gray-600">
              Latest system alerts and notifications
            </p>
          </div>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{alert.message}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <div>Component: {alert.component}</div>
                      <div>Alert ID: {alert.id}</div>
                      <div>Time: {new Date(alert.timestamp).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Architecture
            </h2>
            <p className="text-xl text-gray-600">
              High-level overview of our infrastructure
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Load Balancer</h3>
                <p className="text-gray-600 text-sm">Distributes traffic across servers</p>
              </div>
              <div className="text-center">
                <Server className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Servers</h3>
                <p className="text-gray-600 text-sm">Handles HTTP requests and responses</p>
              </div>
              <div className="text-center">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Database</h3>
                <p className="text-gray-600 text-sm">Stores and manages data</p>
              </div>
              <div className="text-center">
                <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Processing</h3>
                <p className="text-gray-600 text-sm">GPU-powered AI model inference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">
                System status powered by Zion Tech Group
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                <RefreshCw className="w-4 h-4 mr-2" />
                Auto-refresh: 30s
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemStatusPage;