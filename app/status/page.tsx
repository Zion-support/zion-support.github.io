import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      icon: Server
    },
    {
      name: 'Machine Learning Platform',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms',
      icon: Activity
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      icon: Database
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms',
      icon: Globe
    }
  ];

  const incidents = [
    {
      title: 'Scheduled Maintenance - AI Services',
      status: 'scheduled',
      date: '2024-01-20',
      description: 'Planned maintenance window for AI services infrastructure updates.',
      impact: 'minor'
    },
    {
      title: 'Database Performance Issue Resolved',
      status: 'resolved',
      date: '2024-01-15',
      description: 'Temporary performance degradation in database queries has been resolved.',
      impact: 'minor'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      case 'scheduled': return 'text-blue-400';
      case 'resolved': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle;
      case 'degraded': return AlertCircle;
      case 'outage': return XCircle;
      case 'scheduled': return Clock;
      case 'resolved': return CheckCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            System Status
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of our services and infrastructure. We maintain 99.9% uptime 
            and provide transparent updates on any issues.
          </p>
          
          {/* Overall Status */}
          <div className="cyber-card hologram-card p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-gray-300">All services are running normally</p>
          </div>
        </section>

        {/* Service Status */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Service Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <service.icon className="w-6 h-6 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <div className="flex items-center">
                      <StatusIcon className={`w-5 h-5 mr-2 ${getStatusColor(service.status)}`} />
                      <span className={`font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white ml-2 font-medium">{service.uptime}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white ml-2 font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Recent Incidents
          </h2>
          <div className="space-y-4">
            {incidents.map((incident, index) => {
              const StatusIcon = getStatusIcon(incident.status);
              return (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <StatusIcon className={`w-5 h-5 mr-3 ${getStatusColor(incident.status)}`} />
                      <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                    </div>
                    <span className="text-sm text-gray-400">{incident.date}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{incident.description}</p>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-400">Impact:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                      incident.impact === 'minor' ? 'bg-yellow-900 text-yellow-300' : 'bg-red-900 text-red-300'
                    }`}>
                      {incident.impact.charAt(0).toUpperCase() + incident.impact.slice(1)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Overall Uptime</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">150ms</div>
              <div className="text-gray-300">Average Response Time</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
              <div className="text-gray-300">Active Incidents</div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Stay Informed
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to status updates and be notified immediately when there are 
              any service disruptions or maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;
