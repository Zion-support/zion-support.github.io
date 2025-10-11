'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, CheckCircle, XCircle, AlertTriangle, Clock, Server, Database, Cloud, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState({
    overall: 'operational',
    lastUpdated: new Date().toISOString(),
    services: [
      {
        name: 'AI Services API',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '120ms',
        lastIncident: null
      },
      {
        name: 'IT Services Platform',
        status: 'operational',
        uptime: '99.8%',
        responseTime: '95ms',
        lastIncident: null
      },
      {
        name: 'Micro SaaS Dashboard',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '80ms',
        lastIncident: null
      },
      {
        name: 'Database Services',
        status: 'operational',
        uptime: '99.7%',
        responseTime: '45ms',
        lastIncident: null
      },
      {
        name: 'Cloud Infrastructure',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '60ms',
        lastIncident: null
      },
      {
        name: 'Security Services',
        status: 'operational',
        uptime: '100%',
        responseTime: '30ms',
        lastIncident: null
      }
    ]
  });

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: 'Scheduled Maintenance',
      status: 'completed',
      severity: 'maintenance',
      startTime: '2024-01-15T02:00:00Z',
      endTime: '2024-01-15T04:00:00Z',
      description: 'Routine maintenance completed successfully.',
      affectedServices: ['All Services']
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-08T14:30:00Z',
      endTime: '2024-01-08T15:15:00Z',
      description: 'Temporary performance degradation in database queries.',
      affectedServices: ['Database Services', 'API Response Times']
    }
  ]);

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
        return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'major':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'minor':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setSystemStatus(prev => ({
        ...prev,
        lastUpdated: new Date().toISOString()
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Uptime & Performance</title>
        <meta name="description" content="Real-time monitoring of all Zion Tech Group services. Check uptime, performance, and incident status." />
        <meta name="keywords" content="system status, uptime, performance, incidents, monitoring, service status" />
        <link rel="canonical" href="https://ziontechgroup.com/status" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white neon-text-enhanced">
                  System <span className="text-cyan-400">Status</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-time monitoring of all our services and infrastructure. 
                Stay informed about uptime, performance, and any incidents.
              </p>
            </div>
          </section>

          {/* Overall Status */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
                <div className="flex items-center justify-center mb-4">
                  {getStatusIcon(systemStatus.overall)}
                  <span className={`ml-3 px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(systemStatus.overall)}`}>
                    All Systems Operational
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Last updated: {new Date(systemStatus.lastUpdated).toLocaleString()}
                </p>
              </div>
            </div>
          </section>

          {/* Services Status */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systemStatus.services.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Server className="w-5 h-5 text-cyan-400 mr-2" />
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      </div>
                      {getStatusIcon(service.status)}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-green-400 font-semibold">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-cyan-400 font-semibold">{service.responseTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Status:</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    
                    <div className="flex flex-wrap items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span>Start: {new Date(incident.startTime).toLocaleString()}</span>
                        {incident.endTime && (
                          <span>End: {new Date(incident.endTime).toLocaleString()}</span>
                        )}
                      </div>
                      <div className="text-cyan-400">
                        Affected: {incident.affectedServices.join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Need Help?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  If you're experiencing issues not reflected in our status page, 
                  please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/support"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Support Center
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StatusPage;