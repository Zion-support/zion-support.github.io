import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  const [services, setServices] = useState([
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-12-15'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '32ms',
      lastIncident: '2024-11-28'
    },
    {
      name: 'Cybersecurity Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '28ms',
      lastIncident: '2024-10-12'
    },
    {
      name: 'Data Analytics',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '67ms',
      lastIncident: '2024-12-08'
    },
    {
      name: 'Mobile App Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '52ms',
      lastIncident: '2024-11-15'
    },
    {
      name: 'Quantum Computing',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '89ms',
      lastIncident: '2024-12-01'
    }
  ]);

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: 'Scheduled Maintenance - AI Services',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-12-15 02:00 UTC',
      endTime: '2024-12-15 04:00 UTC',
      description: 'Routine maintenance to improve performance and security.'
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-12-08 14:30 UTC',
      endTime: '2024-12-08 15:45 UTC',
      description: 'Temporary issue with API rate limiting affecting some users.'
    },
    {
      id: 3,
      title: 'Database Performance Degradation',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-11-28 09:15 UTC',
      endTime: '2024-11-28 11:30 UTC',
      description: 'Database performance issues causing slower response times.'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      case 'maintenance': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return '✅';
      case 'degraded': return '⚠️';
      case 'outage': return '❌';
      case 'maintenance': return '🔧';
      default: return '❓';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'major': return 'bg-orange-600';
      case 'minor': return 'bg-yellow-600';
      case 'maintenance': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              System Status
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real-time status of all Zion Tech Group services and systems.
            </p>
          </div>

          {/* Overall Status */}
          <div className="cyber-card hologram-card text-center mb-12">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-green-400 mb-2">All Systems Operational</h2>
            <p className="text-gray-300">All services are running normally</p>
          </div>

          {/* Services Status */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Service Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="cyber-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{getStatusIcon(service.status)}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <p className={`text-sm ${getStatusColor(service.status)}`}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">
                        <div>Uptime: <span className="text-green-400 font-semibold">{service.uptime}</span></div>
                        <div>Response: <span className="text-cyan-400 font-semibold">{service.responseTime}</span></div>
                        <div className="text-xs text-gray-400">Last incident: {service.lastIncident}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="cyber-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 text-white text-sm rounded-full mr-4 ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      incident.status === 'resolved' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{incident.description}</p>
                  <div className="text-sm text-gray-400">
                    <div>Start: {incident.startTime}</div>
                    <div>End: {incident.endTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Performance Metrics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Average Uptime</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">52ms</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
                <div className="text-gray-300">Security Uptime</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </section>

          {/* Subscribe to Updates */}
          <section className="text-center cyber-card">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to status updates and get notified about incidents and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
              />
              <button className="cyber-button">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;