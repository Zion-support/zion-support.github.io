'use client';
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Server, 
  Database, 
  Globe, 
  Zap,
  Activity,
  TrendingUp,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      description: 'Core API endpoints and services'
    },
    {
      name: 'AI Analytics Platform',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastIncident: '2024-01-10',
      description: 'Machine learning and analytics services'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '25ms',
      lastIncident: '2024-01-20',
      description: 'Primary and backup database systems'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '30ms',
      lastIncident: '2024-01-12',
      description: 'User authentication and authorization'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '80ms',
      lastIncident: '2024-01-08',
      description: 'Document and media storage services'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '200ms',
      lastIncident: '2024-01-05',
      description: 'Transactional and notification emails'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-15T10:30:00Z',
      endTime: '2024-01-15T11:45:00Z',
      description: 'Some API endpoints experienced increased response times due to high load. Issue was resolved by scaling up infrastructure.',
      affectedServices: ['API Services', 'AI Analytics Platform']
    },
    {
      id: 2,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-10T14:20:00Z',
      endTime: '2024-01-10T16:30:00Z',
      description: 'Intermittent database connection issues affecting some users. Root cause was identified and fixed.',
      affectedServices: ['Database Services', 'API Services']
    },
    {
      id: 3,
      title: 'Email Delivery Delays',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-05T09:15:00Z',
      endTime: '2024-01-05T10:30:00Z',
      description: 'Email notifications were delayed due to third-party service issues. Service restored after provider resolution.',
      affectedServices: ['Email Services']
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
        return 'text-green-400 bg-green-400/10';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'outage':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-400/10';
      case 'major':
        return 'text-orange-400 bg-orange-400/10';
      case 'minor':
        return 'text-yellow-400 bg-yellow-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              System Status
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real-time status of all our services and systems. We're committed to providing reliable, high-performance solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Last Updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            </div>

            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
            </button>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Service Status
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Current status of all our core services and systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Server className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                    {service.status}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Uptime:</span>
                    <span className="text-green-400 font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Response Time:</span>
                    <span className="text-cyan-400 font-medium">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Last Incident:</span>
                    <span className="text-gray-300 text-sm">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Recent Incidents
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Past incidents and their resolutions
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    <div className="text-sm text-gray-400">
                      <div>Start: {new Date(incident.startTime).toLocaleString()}</div>
                      <div>End: {new Date(incident.endTime).toLocaleString()}</div>
                      <div>Affected Services: {incident.affectedServices.join(', ')}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Key performance indicators and system health metrics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Overall Uptime</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">45ms</div>
              <div className="text-gray-300">Average Response Time</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-gray-300">Global Data Centers</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">99.95%</div>
              <div className="text-gray-300">Database Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            If you're experiencing issues or have questions about our services, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Support Center
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;