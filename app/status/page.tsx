import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertTriangle, XCircle, Clock, RefreshCw, ExternalLink } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: null,
      description: 'Core API endpoints and authentication services'
    },
    {
      name: 'AI Content Generation',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '2.1s',
      lastIncident: null,
      description: 'AI-powered content creation and generation services'
    },
    {
      name: 'Analytics Dashboard',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '85ms',
      lastIncident: null,
      description: 'Real-time analytics and reporting services'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      lastIncident: null,
      description: 'Primary and backup database systems'
    },
    {
      name: 'CDN & Static Assets',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      lastIncident: null,
      description: 'Content delivery network and static asset serving'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '1.2s',
      lastIncident: null,
      description: 'Transactional and marketing email delivery'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '180ms',
      lastIncident: null,
      description: 'Secure payment processing and billing services'
    },
    {
      name: 'Monitoring & Alerts',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '15ms',
      lastIncident: null,
      description: 'System monitoring and alerting infrastructure'
    }
  ];

  const incidents = [
    {
      id: 'incident-001',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'completed',
      severity: 'maintenance',
      startTime: '2024-01-10T02:00:00Z',
      endTime: '2024-01-10T04:00:00Z',
      description: 'Routine database optimization and performance improvements. All services were restored successfully.',
      affectedServices: ['Database Services', 'API Services'],
      updates: [
        {
          time: '2024-01-10T04:00:00Z',
          message: 'Maintenance completed successfully. All services are operational.',
          status: 'resolved'
        },
        {
          time: '2024-01-10T02:00:00Z',
          message: 'Scheduled maintenance started. Database services may experience brief interruptions.',
          status: 'in_progress'
        }
      ]
    },
    {
      id: 'incident-002',
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-05T14:30:00Z',
      endTime: '2024-01-05T15:45:00Z',
      description: 'Temporary issue with rate limiting causing some API requests to be rejected incorrectly.',
      affectedServices: ['API Services'],
      updates: [
        {
          time: '2024-01-05T15:45:00Z',
          message: 'Issue resolved. Rate limiting is working correctly.',
          status: 'resolved'
        },
        {
          time: '2024-01-05T15:00:00Z',
          message: 'Identified the issue with rate limiting configuration. Working on fix.',
          status: 'identified'
        },
        {
          time: '2024-01-05T14:30:00Z',
          message: 'Investigating reports of API requests being rejected unexpectedly.',
          status: 'investigating'
        }
      ]
    }
  ];

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-400" />;
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
      case 'maintenance':
        return 'text-blue-400 bg-blue-500/20';
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
      case 'maintenance':
        return 'text-blue-400 bg-blue-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status & Uptime</title>
        <meta name="description" content="Check the current status of Zion Tech Group services. Real-time monitoring of our API, AI services, and infrastructure." />
        <meta name="keywords" content="status, uptime, monitoring, service status, system health, incidents" />
        <meta property="og:title" content="System Status - Zion Tech Group" />
        <meta property="og:description" content="Real-time status of our services and infrastructure" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Status</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Real-time monitoring of our services and infrastructure. All systems operational.
              </p>
              
              {/* Overall Status */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                {getStatusIcon(overallStatus)}
                <span className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(overallStatus)}`}>
                  {overallStatus === 'operational' ? 'All Systems Operational' : 'Service Degradation'}
                </span>
              </div>
              
              {/* Last Updated */}
              <div className="flex items-center justify-center space-x-4 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Last updated: {lastUpdated.toLocaleString()}</span>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Service Status</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current status of all our services and infrastructure components
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-green-400 font-semibold ml-2">{service.uptime}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-cyan-400 font-semibold ml-2">{service.responseTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Recent Incidents</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Information about recent service disruptions and maintenance activities
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>
                          {new Date(incident.startTime).toLocaleString()} - {incident.endTime ? new Date(incident.endTime).toLocaleString() : 'Ongoing'}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{incident.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Affected Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {incident.affectedServices.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Updates:</h4>
                    <div className="space-y-3">
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-gray-400 text-sm">
                                {new Date(update.time).toLocaleString()}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(update.status)}`}>
                                {update.status}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{update.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Status History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Status History</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Historical uptime and performance data for our services
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300 mb-4">Overall Uptime</div>
                  <div className="text-sm text-gray-400">Last 30 days</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">45ms</div>
                  <div className="text-gray-300 mb-4">Average Response Time</div>
                  <div className="text-sm text-gray-400">Last 24 hours</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">0</div>
                  <div className="text-gray-300 mb-4">Active Incidents</div>
                  <div className="text-sm text-gray-400">Current status</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8">
                Subscribe to status updates and get notified about service incidents and maintenance.
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
              <p className="text-white/70 text-sm mt-4">
                You can also follow us on{' '}
                <a href="https://twitter.com/ziontechgroup" className="text-white hover:underline">
                  Twitter
                </a>{' '}
                for real-time updates.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatusPage;