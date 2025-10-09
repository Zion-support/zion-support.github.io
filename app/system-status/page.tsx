import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, Activity, Server, Database, Zap, Cpu, HardDrive, Wifi } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(refreshStatus, 15000); // Refresh every 15 seconds
    return () => clearInterval(interval);
  }, []);

  const systemMetrics = [
    {
      name: 'CPU Usage',
      value: '23%',
      status: 'normal',
      icon: Cpu,
      trend: '+2%'
    },
    {
      name: 'Memory Usage',
      value: '67%',
      status: 'normal',
      icon: Database,
      trend: '+1%'
    },
    {
      name: 'Disk Usage',
      value: '45%',
      status: 'normal',
      icon: HardDrive,
      trend: '+0.5%'
    },
    {
      name: 'Network Latency',
      value: '12ms',
      status: 'excellent',
      icon: Wifi,
      trend: '-1ms'
    },
    {
      name: 'Active Connections',
      value: '1,247',
      status: 'normal',
      icon: Activity,
      trend: '+23'
    },
    {
      name: 'Request Rate',
      value: '2.3k/min',
      status: 'normal',
      icon: Server,
      trend: '+150'
    }
  ];

  const services = [
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      requests: '2.1M',
      errors: '0.01%',
      icon: Server
    },
    {
      name: 'AI Processing',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      requests: '850k',
      errors: '0.02%',
      icon: Zap
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '25ms',
      requests: '5.2M',
      errors: '0.005%',
      icon: Database
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '30ms',
      requests: '1.8M',
      errors: '0.01%',
      icon: Activity
    },
    {
      name: 'File Storage',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '200ms',
      requests: '320k',
      errors: '0.5%',
      icon: Server
    },
    {
      name: 'Analytics Engine',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '80ms',
      requests: '650k',
      errors: '0.03%',
      icon: Activity
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
      case 'normal':
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'investigating':
        return <Clock className="w-5 h-5 text-orange-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
      case 'normal':
      case 'excellent':
        return 'text-green-400 bg-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'outage':
      case 'critical':
        return 'text-red-400 bg-red-400/20';
      case 'investigating':
        return 'text-orange-400 bg-orange-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTrendColor = (trend: string) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/system-status" className="text-cyan-400 font-semibold">System Status</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            {getStatusIcon(overallStatus)}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              System <span className="text-cyan-400">Status</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time monitoring of system performance, metrics, and service health.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* System Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">System Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{metric.name}</h3>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(metric.status)}
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(metric.status)}`}>
                          {metric.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <div className={`text-sm font-semibold ${getTrendColor(metric.trend)}`}>
                    {metric.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Performance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Service Performance</h2>
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Uptime</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Response Time</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Requests</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Error Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <service.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{service.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(service.status)}
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(service.status)}`}>
                            {service.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white">{service.uptime}</td>
                      <td className="px-6 py-4 text-white">{service.responseTime}</td>
                      <td className="px-6 py-4 text-white">{service.requests}</td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${
                          parseFloat(service.errors) > 0.1 ? 'text-red-400' : 
                          parseFloat(service.errors) > 0.05 ? 'text-yellow-400' : 
                          'text-green-400'
                        }`}>
                          {service.errors}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Performance Charts Placeholder */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Performance Trends</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Response Time (24h)</h3>
              <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Activity className="w-12 h-12 mx-auto mb-2" />
                  <p>Performance Chart</p>
                  <p className="text-sm">Real-time monitoring data</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Request Volume (24h)</h3>
              <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Server className="w-12 h-12 mx-auto mb-2" />
                  <p>Traffic Chart</p>
                  <p className="text-sm">Request volume over time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts and Notifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Active Alerts</h2>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="text-center text-gray-400">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold text-white mb-2">No Active Alerts</h3>
              <p>All systems are operating within normal parameters.</p>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to system status updates and get notified about any performance issues or outages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SystemStatusPage;