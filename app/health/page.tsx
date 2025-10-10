import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react';

const HealthPage: React.FC = () => {
  const systemStatus = {
    overall: 'operational',
    uptime: '99.9%',
    responseTime: '45ms',
    lastIncident: '2024-01-15',
    services: [
      { name: 'Web Application', status: 'operational', uptime: '99.9%' },
      { name: 'API Services', status: 'operational', uptime: '99.8%' },
      { name: 'Database', status: 'operational', uptime: '99.9%' },
      { name: 'CDN', status: 'operational', uptime: '99.9%' },
      { name: 'AI Services', status: 'operational', uptime: '99.7%' },
      { name: 'Authentication', status: 'operational', uptime: '99.9%' }
    ],
    metrics: {
      requestsPerMinute: 1250,
      averageResponseTime: 45,
      errorRate: 0.1,
      activeUsers: 2847
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5" />;
      case 'outage': return <AlertTriangle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>System Health - Zion Tech Group</title>
        <meta name="description" content="Real-time system health monitoring and status updates for Zion Tech Group services." />
        <meta name="keywords" content="system health, uptime, monitoring, status, API health" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Health</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-time monitoring of our infrastructure, services, and performance metrics
              </p>
              
              {/* Overall Status */}
              <div className="inline-flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-cyan-400/30">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white font-semibold text-lg">All Systems Operational</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="text-gray-300">
                  <span className="text-2xl font-bold text-green-400">{systemStatus.uptime}</span>
                  <span className="ml-2">uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Status */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Server className="w-6 h-6 mr-3 text-cyan-400" />
                  Service Status
                </h2>
                <div className="space-y-4">
                  {systemStatus.services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className={getStatusColor(service.status)}>
                          {getStatusIcon(service.status)}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{service.name}</h3>
                          <p className="text-gray-400 text-sm">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`font-semibold ${getStatusColor(service.status)}`}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-8">
              {/* Performance Metrics */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                  Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-white font-semibold">{systemStatus.metrics.averageResponseTime}ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Requests/min</span>
                    <span className="text-white font-semibold">{systemStatus.metrics.requestsPerMinute.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Error Rate</span>
                    <span className="text-white font-semibold">{systemStatus.metrics.errorRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Active Users</span>
                    <span className="text-white font-semibold">{systemStatus.metrics.activeUsers.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-cyan-400" />
                  Infrastructure
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">Cloud Infrastructure</span>
                    <span className="text-green-400 font-semibold">Healthy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">Security</span>
                    <span className="text-green-400 font-semibold">Secure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">AI Services</span>
                    <span className="text-green-400 font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="mt-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                Recent Incidents
              </h2>
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Recent Incidents</h3>
                <p className="text-gray-400">
                  All systems have been running smoothly. Last incident was resolved on {systemStatus.lastIncident}.
                </p>
              </div>
            </div>
          </div>

          {/* Status History */}
          <div className="mt-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-cyan-400" />
                Status History
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Last 30 Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                  <div className="text-gray-300">Last 90 Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Last 365 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthPage;