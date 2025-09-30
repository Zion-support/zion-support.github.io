import React, { useState, useEffect } from 'react';

interface SystemHealthDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

interface HealthMetric {
  name: string;
  value: number;
  status: 'healthy' | 'warning' | 'critical';
  description: string;
  lastUpdated: Date;
}

interface SystemService {
  name: string;
  status: 'running' | 'stopped' | 'error';
  uptime: string;
  lastCheck: Date;
}

const SystemHealthDashboard: React.FC<SystemHealthDashboardProps> = ({
  isVisible,
  onClose
}) => {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [services, setServices] = useState<SystemService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [overallHealth, setOverallHealth] = useState<'healthy' | 'warning' | 'critical'>('healthy');

  useEffect(() => {
    if (isVisible) {
      const loadHealthData = () => {
        setIsLoading(false);
        
        // Generate mock health metrics
        const mockMetrics: HealthMetric[] = [
          {
            name: 'CPU Usage',
            value: 45 + Math.random() * 30,
            status: Math.random() > 0.8 ? 'warning' : 'healthy',
            description: 'Current CPU utilization',
            lastUpdated: new Date()
          },
          {
            name: 'Memory Usage',
            value: 60 + Math.random() * 25,
            status: Math.random() > 0.9 ? 'critical' : Math.random() > 0.7 ? 'warning' : 'healthy',
            description: 'RAM utilization percentage',
            lastUpdated: new Date()
          },
          {
            name: 'Disk Space',
            value: 30 + Math.random() * 40,
            status: Math.random() > 0.9 ? 'warning' : 'healthy',
            description: 'Available disk space',
            lastUpdated: new Date()
          },
          {
            name: 'Network Latency',
            value: 20 + Math.random() * 50,
            status: Math.random() > 0.8 ? 'warning' : 'healthy',
            description: 'Average response time in ms',
            lastUpdated: new Date()
          },
          {
            name: 'Error Rate',
            value: Math.random() * 5,
            status: Math.random() > 0.7 ? 'critical' : Math.random() > 0.5 ? 'warning' : 'healthy',
            description: 'Percentage of failed requests',
            lastUpdated: new Date()
          },
          {
            name: 'Response Time',
            value: 100 + Math.random() * 200,
            status: Math.random() > 0.8 ? 'warning' : 'healthy',
            description: 'Average API response time',
            lastUpdated: new Date()
          }
        ];

        // Generate mock services
        const mockServices: SystemService[] = [
          {
            name: 'Web Server',
            status: 'running',
            uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
            lastCheck: new Date()
          },
          {
            name: 'Database',
            status: Math.random() > 0.9 ? 'error' : 'running',
            uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
            lastCheck: new Date()
          },
          {
            name: 'Cache Service',
            status: 'running',
            uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
            lastCheck: new Date()
          },
          {
            name: 'Background Jobs',
            status: Math.random() > 0.8 ? 'stopped' : 'running',
            uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
            lastCheck: new Date()
          },
          {
            name: 'Monitoring Service',
            status: 'running',
            uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
            lastCheck: new Date()
          }
        ];

        setMetrics(mockMetrics);
        setServices(mockServices);

        // Calculate overall health
        const criticalCount = mockMetrics.filter(m => m.status === 'critical').length;
        const warningCount = mockMetrics.filter(m => m.status === 'warning').length;
        const errorServices = mockServices.filter(s => s.status === 'error').length;

        if (criticalCount > 0 || errorServices > 0) {
          setOverallHealth('critical');
        } else if (warningCount > 2) {
          setOverallHealth('warning');
        } else {
          setOverallHealth('healthy');
        }
      };

      const timer = setTimeout(loadHealthData, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return '✅';
      case 'warning': return '⚠️';
      case 'critical': return '❌';
      default: return '❓';
    }
  };

  const getServiceStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-green-600 bg-green-100';
      case 'stopped': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">System Health Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(overallHealth)}`}>
              {getStatusIcon(overallHealth)} {overallHealth.toUpperCase()}
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close System Health Dashboard"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Overall Health Status */}
              <div className="bg-white p-4 rounded-lg shadow border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">System Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(overallHealth)}`}>
                      {getStatusIcon(overallHealth)} Overall Status
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{metrics.length}</div>
                    <div className="text-sm text-gray-600">Metrics Monitored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {services.filter(s => s.status === 'running').length}
                    </div>
                    <div className="text-sm text-gray-600">Services Running</div>
                  </div>
                </div>
              </div>

              {/* Health Metrics */}
              <div className="bg-white rounded-lg shadow border">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Health Metrics</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {metrics.map((metric, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">{metric.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                            {getStatusIcon(metric.status)} {metric.status}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {metric.value.toFixed(1)}{metric.name.includes('Rate') || metric.name.includes('Usage') ? '%' : metric.name.includes('Time') || metric.name.includes('Latency') ? 'ms' : ''}
                        </div>
                        <p className="text-sm text-gray-600">{metric.description}</p>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                metric.status === 'healthy' ? 'bg-green-500' :
                                metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${Math.min(metric.value, 100)}%` }}
                            />
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Last updated: {metric.lastUpdated.toLocaleTimeString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Status */}
              <div className="bg-white rounded-lg shadow border">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Services Status</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Uptime</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Check</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {services.map((service, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-2 text-sm font-medium text-gray-900">{service.name}</td>
                          <td className="px-4 py-2 text-sm">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getServiceStatusColor(service.status)}`}>
                              {getStatusIcon(service.status)} {service.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-900">{service.uptime}</td>
                          <td className="px-4 py-2 text-sm text-gray-900">
                            {service.lastCheck.toLocaleTimeString()}
                          </td>
                          <td className="px-4 py-2 text-sm">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">Restart</button>
                              <button className="text-gray-600 hover:text-gray-800">Logs</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* System Actions */}
              <div className="bg-white p-4 rounded-lg shadow border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">System Actions</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Refresh All Metrics
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Restart All Services
                  </button>
                  <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors">
                    Clear Logs
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                    Generate Report
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Emergency Stop
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemHealthDashboard;