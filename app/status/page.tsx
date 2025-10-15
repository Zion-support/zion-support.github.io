import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, RefreshCw, Clock, Activity, Server, Database } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-10',
      description: 'Core API endpoints and authentication'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastIncident: '2024-01-08',
      description: 'Machine learning and AI processing'
    },
    {
      name: 'Web Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '35ms',
      lastIncident: '2024-01-05',
      description: 'Website and web application hosting'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '15ms',
      lastIncident: '2024-01-02',
      description: 'Primary database and data storage'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      lastIncident: '2024-01-01',
      description: 'Content delivery network'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '100%',
      responseTime: '5ms',
      lastIncident: 'Never',
      description: 'System monitoring and alerting'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      description: 'Planned maintenance window for API infrastructure updates. All services were restored successfully.',
      affectedServices: ['API Services', 'AI Services']
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-10 14:30 UTC',
      endTime: '2024-01-10 16:45 UTC',
      description: 'Temporary database performance degradation affecting response times. Issue was identified and resolved.',
      affectedServices: ['Database', 'API Services', 'AI Services']
    },
    {
      id: 3,
      title: 'CDN Edge Server Outage',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-05 09:15 UTC',
      endTime: '2024-01-05 10:30 UTC',
      description: 'Brief outage affecting content delivery in the US East region. Traffic was automatically rerouted.',
      affectedServices: ['CDN', 'Web Services']
    }
  ];

  const metrics = [
    {
      name: 'Overall Uptime',
      value: '99.9%',
      icon: <Activity className="w-8 h-8" />,
      trend: '+0.1%',
      period: 'Last 30 days'
    },
    {
      name: 'Average Response Time',
      value: '45ms',
      icon: <Clock className="w-8 h-8" />,
      trend: '-5ms',
      period: 'Last 24 hours'
    },
    {
      name: 'Active Services',
      value: '6',
      icon: <Server className="w-8 h-8" />,
      trend: '0',
      period: 'All systems'
    },
    {
      name: 'Data Processed',
      value: '2.4TB',
      icon: <Database className="w-8 h-8" />,
      trend: '+12%',
      period: 'Last 24 hours'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-6 h-6 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-6 h-6 text-red-400" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'outage':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-500/20';
      case 'major':
        return 'text-orange-400 bg-orange-500/20';
      case 'minor':
        return 'text-yellow-400 bg-yellow-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status & Uptime</title>
        <meta name="description" content="Real-time system status for Zion Tech Group's services. Check uptime, response times, and incident reports." />
        <meta name="keywords" content="system status, uptime, service status, incidents, monitoring, availability" />
        <meta property="og:title" content="System Status - Zion Tech Group" />
        <meta property="og:description" content="Real-time system status and service monitoring" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <Activity className="w-16 h-16 inline-block mr-4 text-cyan-400" />
                System Status
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Real-time status of all our services, uptime statistics, and incident reports.
              </p>
              
              {/* Overall Status */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-green-400">All Systems Operational</span>
              </div>
              
              {/* Last Updated */}
              <div className="flex items-center justify-center space-x-4">
                <span className="text-gray-400">Last updated: {lastUpdated.toLocaleTimeString()}</span>
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
          </div>
        </section>

        {/* Metrics Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300 mb-2">{metric.name}</div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <span className={metric.trend.startsWith('+') ? 'text-green-400' : metric.trend.startsWith('-') ? 'text-red-400' : 'text-gray-400'}>
                      {metric.trend}
                    </span>
                    <span className="text-gray-400">{metric.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Service Status</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Current status of all our services and infrastructure components
                </p>
              </div>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(service.status)}
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <p className="text-gray-300">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{service.uptime}</div>
                          <div className="text-gray-400 text-sm">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{service.responseTime}</div>
                          <div className="text-gray-400 text-sm">Response</div>
                        </div>
                        <div className="text-center">
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(service.status)}`}>
                            {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="text-sm text-gray-400">
                        Last incident: {service.lastIncident}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Recent Incidents</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Historical record of service incidents and maintenance windows
                </p>
              </div>
              
              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(incident.status)}`}>
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {incident.startTime} - {incident.endTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{incident.title}</h3>
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-400 text-sm">Affected services:</span>
                      <div className="flex space-x-2">
                        {incident.affectedServices.map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Stay Informed</h2>
                <p className="text-xl text-white/90 mb-8">
                  Subscribe to status updates and get notified about incidents and maintenance windows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatusPage;