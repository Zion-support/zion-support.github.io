import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Server, Database, Cloud, Zap } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      icon: Zap,
      description: 'Core AI prediction and model services',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '12ms',
      icon: Cloud,
      description: 'Cloud hosting and infrastructure services',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '8ms',
      icon: Database,
      description: 'Primary and backup database systems',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      icon: Server,
      description: 'User authentication and authorization',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'File Storage',
      status: 'degraded',
      uptime: '98.2%',
      responseTime: '120ms',
      icon: Server,
      description: 'File upload and storage services',
      lastIncident: 'Minor performance issues detected'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '25ms',
      icon: Server,
      description: 'Email delivery and notification services',
      lastIncident: 'No incidents in the past 30 days'
    }
  ];

  const incidents = [
    {
      title: 'File Storage Performance Issues',
      status: 'investigating',
      date: '2024-12-15T10:30:00Z',
      description: 'We are investigating reports of slower file upload speeds. Some users may experience delays.',
      impact: 'minor'
    },
    {
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'scheduled',
      date: '2024-12-20T02:00:00Z',
      description: 'Planned maintenance to optimize database performance. Expected downtime: 30 minutes.',
      impact: 'minor'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
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
      case 'maintenance':
        return Clock;
      default:
        return Clock;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'major':
        return 'bg-red-600';
      case 'minor':
        return 'bg-yellow-600';
      case 'none':
        return 'bg-green-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            System Status
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of all Zion Tech Group services and infrastructure.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Clock className="w-5 h-5" />
            <span>Last updated: {currentTime.toLocaleString()}</span>
          </div>
        </div>

        {/* Overall Status */}
        <div className="cyber-card p-8 mb-12 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
            <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
          </div>
          <p className="text-gray-300 text-lg">
            All core services are running normally. We're monitoring our systems 24/7.
          </p>
        </div>

        {/* Services Status */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Service Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                    <StatusIcon className={`w-6 h-6 ${getStatusColor(service.status)}`} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-white font-semibold">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white font-semibold">{service.responseTime}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-gray-400 text-sm">{service.lastIncident}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Recent Incidents
          </h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => {
              const StatusIcon = getStatusIcon(incident.status);
              return (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <StatusIcon className={`w-6 h-6 ${getStatusColor(incident.status)}`} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{incident.title}</h3>
                        <p className="text-gray-400">
                          {new Date(incident.date).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImpactColor(incident.impact)}`}>
                      {incident.impact}
                    </span>
                  </div>
                  <p className="text-gray-300">{incident.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Overall Uptime</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">45ms</div>
              <div className="text-gray-300">Avg Response Time</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-300">Active Incidents</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to status updates and be notified when incidents occur or are resolved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default StatusPage;