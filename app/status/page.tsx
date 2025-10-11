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
        name: 'Cloud Infrastructure',
        status: 'operational',
        uptime: '99.95%',
        responseTime: '85ms',
        lastIncident: null
      },
      {
        name: 'Database Services',
        status: 'operational',
        uptime: '99.8%',
        responseTime: '45ms',
        lastIncident: null
      },
      {
        name: 'Authentication System',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '65ms',
        lastIncident: null
      },
      {
        name: 'File Storage',
        status: 'operational',
        uptime: '99.7%',
        responseTime: '200ms',
        lastIncident: null
      },
      {
        name: 'Monitoring System',
        status: 'operational',
        uptime: '100%',
        responseTime: '30ms',
        lastIncident: null
      }
    ]
  });

  const [recentIncidents, setRecentIncidents] = useState([
    {
      id: 1,
      title: 'Scheduled Maintenance - AI Services',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-01-10T02:00:00Z',
      endTime: '2024-01-10T04:00:00Z',
      description: 'Scheduled maintenance window for AI services infrastructure updates.',
      affectedServices: ['AI Services API', 'Machine Learning Models']
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
        return 'text-green-400 bg-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-400/20';
      case 'major':
        return 'text-orange-400 bg-orange-400/20';
      case 'minor':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
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
        <title>System Status - Zion Tech Group | Service Status & Uptime</title>
        <meta name="description" content="Check the real-time status of Zion Tech Group services. Monitor uptime, performance, and incident reports for all our AI and IT services." />
        <meta name="keywords" content="status, uptime, system status, service status, incidents, monitoring, AI services, IT services" />
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
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Overall System Status</h2>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(systemStatus.overall)}
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(systemStatus.overall)}`}>
                      {systemStatus.overall.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Average Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">45ms</div>
                    <div className="text-gray-300">Average Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
                    <div className="text-gray-300">Active Incidents</div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-400 text-center">
                  Last updated: {new Date(systemStatus.lastUpdated).toLocaleString()}
                </div>
              </div>
            </div>
          </section>

          {/* Service Status */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systemStatus.services.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      {getStatusIcon(service.status)}
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Status</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(service.status)}`}>
                          {service.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Uptime</span>
                        <span className="text-cyan-400 font-semibold">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Response Time</span>
                        <span className="text-cyan-400 font-semibold">{service.responseTime}</span>
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
              <div className="space-y-6">
                {recentIncidents.map((incident) => (
                  <div key={incident.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                        <p className="text-gray-300 mb-4">{incident.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                          <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(incident.status)}`}>
                          {incident.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-white font-semibold mb-2">Affected Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Monitoring Information */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Monitoring & <span className="text-cyan-400">Reliability</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We continuously monitor our systems to ensure maximum uptime and performance
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">24/7 Monitoring</h3>
                  <p className="text-gray-300">Round-the-clock monitoring of all systems and services</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Real-time Alerts</h3>
                  <p className="text-gray-300">Instant notifications for any issues or anomalies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Automated Recovery</h3>
                  <p className="text-gray-300">Automatic failover and recovery mechanisms</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
                  <p className="text-gray-300">Continuous optimization for better performance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Need Help?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  If you're experiencing issues or have questions about our services, 
                  our support team is here to help 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/support"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Contact Support
                  </a>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Email Support
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