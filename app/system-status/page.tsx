import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe, Zap, Cpu, HardDrive } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const systemComponents = [
    {
      name: 'Web Servers',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '23ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Primary web server infrastructure',
      icon: Server,
      details: {
        instances: 8,
        load: '45%',
        memory: '67%',
        cpu: '23%'
      }
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '12ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'API routing and load balancing',
      icon: Globe,
      details: {
        requests: '1.2M/min',
        errors: '0.01%',
        latency: '12ms',
        throughput: '2.1GB/min'
      }
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '8ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Primary database infrastructure',
      icon: Database,
      details: {
        connections: '1,234',
        queries: '45K/min',
        cache_hit: '98.5%',
        storage: '2.3TB'
      }
    },
    {
      name: 'Cache Layer',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '2ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Redis cache infrastructure',
      icon: HardDrive,
      details: {
        hit_rate: '94.2%',
        memory: '8.5GB',
        keys: '2.1M',
        evictions: '0/min'
      }
    },
    {
      name: 'Message Queue',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '5ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'Message processing infrastructure',
      icon: Zap,
      details: {
        messages: '15K/min',
        consumers: '24',
        queue_depth: '156',
        processing_time: '45ms'
      }
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '3ms',
      lastCheck: '2024-12-15T10:30:00Z',
      description: 'System monitoring and alerting',
      icon: Activity,
      details: {
        metrics: '2.5M',
        alerts: '0',
        checks: '1,234',
        uptime: '99.9%'
      }
    }
  ];

  const regions = [
    {
      name: 'US East (Virginia)',
      status: 'operational',
      latency: '12ms',
      services: 6,
      icon: Globe
    },
    {
      name: 'US West (Oregon)',
      status: 'operational',
      latency: '18ms',
      services: 6,
      icon: Globe
    },
    {
      name: 'EU West (Ireland)',
      status: 'operational',
      latency: '45ms',
      services: 6,
      icon: Globe
    },
    {
      name: 'Asia Pacific (Tokyo)',
      status: 'operational',
      latency: '67ms',
      services: 6,
      icon: Globe
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'degraded':
        return AlertCircle;
      case 'outage':
        return XCircle;
      default:
        return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Detailed system status and infrastructure monitoring for Zion Tech Group's AI services." />
        <meta name="keywords" content="system status, infrastructure, monitoring, server status, database status" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            System Infrastructure Status
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Detailed monitoring of our infrastructure components, servers, and global regions.
          </p>
          
          {/* Overall Status */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">All Systems Operational</span>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                <div className="text-gray-600">Components</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600">Regions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-gray-600">Issues</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">System Components</h2>
          
          <div className="space-y-6">
            {systemComponents.map((component, index) => {
              const StatusIcon = getStatusIcon(component.status);
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <component.icon className="w-8 h-8 text-purple-600" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{component.name}</h3>
                        <p className="text-gray-600">{component.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{component.uptime}</div>
                        <div className="text-sm text-gray-500">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{component.responseTime}</div>
                        <div className="text-sm text-gray-500">Response</div>
                      </div>
                      <div className="text-center">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(component.status)}`}>
                          {component.status}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Component Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                    {Object.entries(component.details).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-semibold text-gray-900">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Regions */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Global Regions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => {
              const StatusIcon = getStatusIcon(region.status);
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <region.icon className="w-8 h-8 text-blue-600" />
                    <StatusIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Latency:</span>
                      <span className="font-semibold text-gray-900">{region.latency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Services:</span>
                      <span className="font-semibold text-gray-900">{region.services}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(region.status)}`}>
                        {region.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Performance Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">CPU Usage</h3>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">23%</div>
              <div className="text-gray-600">Average across all servers</div>
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <HardDrive className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Memory Usage</h3>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
              <div className="text-gray-600">Average across all servers</div>
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Activity className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Network I/O</h3>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2.1GB/s</div>
              <div className="text-gray-600">Total throughput</div>
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Maintenance Schedule</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Scheduled Maintenance</h3>
              <p className="text-gray-600">There are no planned maintenance windows at this time.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">Next Maintenance Window</div>
                  <div className="text-sm text-gray-600">TBD - Will be announced 48 hours in advance</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="text-green-600 font-semibold">None Scheduled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemStatusPage;