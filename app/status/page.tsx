import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, Activity, Server, Database, Zap } from 'lucide-react';

const StatusPage: React.FC = () => {
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
    const interval = setInterval(refreshStatus, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Main API endpoint for all services',
      icon: Server
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      description: 'Machine learning and AI processing',
      icon: Zap
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '25ms',
      description: 'Primary database cluster',
      icon: Database
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '30ms',
      description: 'User authentication and authorization',
      icon: Activity
    },
    {
      name: 'File Storage',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '200ms',
      description: 'File upload and storage service',
      icon: Server
    },
    {
      name: 'Analytics',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '80ms',
      description: 'Data analytics and reporting',
      icon: Activity
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'File Storage Performance Issues',
      status: 'investigating',
      description: 'We are experiencing slower than usual response times for file uploads.',
      startTime: '2024-01-15T10:30:00Z',
      updates: [
        {
          time: '2024-01-15T10:30:00Z',
          message: 'We are investigating reports of slow file uploads.'
        },
        {
          time: '2024-01-15T11:00:00Z',
          message: 'We have identified the issue and are working on a fix.'
        }
      ]
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
      case 'investigating':
        return <Clock className="w-5 h-5 text-orange-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/20';
      case 'investigating':
        return 'text-orange-400 bg-orange-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
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
              <Link to="/status" className="text-cyan-400 font-semibold">Status</Link>
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
            Real-time status of all Zion Tech Group services and systems.
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

        {/* Overall Status */}
        <section className="mb-12">
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              {getStatusIcon(overallStatus)}
              <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-gray-300 mb-6">
              All services are running normally. We are monitoring our systems 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">45ms</div>
                <div className="text-gray-300">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(service.status)}
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400 mb-1">Uptime</div>
                    <div className="text-white font-semibold">{service.uptime}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Response Time</div>
                    <div className="text-white font-semibold">{service.responseTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Incidents</h2>
          {incidents.length > 0 ? (
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300">{incident.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(incident.status)}
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold mb-3">Updates</h4>
                    <div className="space-y-3">
                      {incident.updates.map((update, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="text-sm text-gray-400 mb-1">
                              {new Date(update.time).toLocaleString()}
                            </div>
                            <div className="text-gray-300">{update.message}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Active Incidents</h3>
              <p className="text-gray-300">All systems are running smoothly.</p>
            </div>
          )}
        </section>

        {/* Subscribe to Updates */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to status updates and get notified immediately when there are any service issues.
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

export default StatusPage;