import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, ExternalLink, Activity, Server, Database, Globe } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const systemComponents = [
    {
      name: 'Load Balancer',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '12ms',
      lastCheck: '2024-01-20T10:30:00Z',
      icon: Globe
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '25ms',
      lastCheck: '2024-01-20T10:30:00Z',
      icon: Server
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '8ms',
      lastCheck: '2024-01-20T10:30:00Z',
      icon: Database
    },
    {
      name: 'Cache Layer',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '3ms',
      lastCheck: '2024-01-20T10:30:00Z',
      icon: Activity
    },
    {
      name: 'Message Queue',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '15ms',
      lastCheck: '2024-01-20T10:30:00Z',
      icon: Activity
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastCheck: '2024-01-20T10:30:00Z',
      icon: Server
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Detailed system status and infrastructure monitoring for Zion Tech Group services." />
        <meta name="keywords" content="system status, infrastructure, monitoring, uptime, performance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time monitoring of our infrastructure components and system health metrics.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <span>•</span>
              <span>Last updated: {new Date().toLocaleString()}</span>
            </div>
          </div>

          {/* System Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">System Health</div>
                <div className="text-gray-400 text-sm mt-1">All components operational</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
                <div className="text-gray-300">Uptime</div>
                <div className="text-gray-400 text-sm mt-1">Last 30 days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">18ms</div>
                <div className="text-gray-300">Avg Response</div>
                <div className="text-gray-400 text-sm mt-1">Last 24 hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
                <div className="text-gray-300">Active Alerts</div>
                <div className="text-gray-400 text-sm mt-1">No issues detected</div>
              </div>
            </div>
          </section>

          {/* Component Status */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Component Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <component.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{component.name}</h3>
                    </div>
                    {getStatusIcon(component.status)}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Uptime</span>
                      <span className="text-white font-medium">{component.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Response Time</span>
                      <span className="text-white font-medium">{component.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Last Check</span>
                      <span className="text-white font-medium text-xs">
                        {new Date(component.lastCheck).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(component.status)}`}>
                      {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Performance Metrics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Response Time Trends</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">API Gateway</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-white text-sm">25ms</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Database</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <span className="text-white text-sm">8ms</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cache Layer</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <span className="text-white text-sm">3ms</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Resource Utilization</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">CPU Usage</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-white text-sm">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Memory Usage</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                      <span className="text-white text-sm">62%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Disk Usage</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full" style={{ width: '38%' }}></div>
                      </div>
                      <span className="text-white text-sm">38%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Monitoring Tools */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Monitoring & Alerts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Continuous monitoring of all system components with 24/7 alerting.
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Active monitoring enabled
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Automated Scaling</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Automatic resource scaling based on demand and performance metrics.
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Auto-scaling enabled
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Incident Response</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Automated incident detection and response with escalation procedures.
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Response team ready
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Support */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">Need More Information?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                For detailed technical information about our infrastructure or to report issues, 
                contact our technical team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:tech@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Contact Technical Team
                </a>
                <a
                  href="/status"
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  View Service Status
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SystemStatusPage;