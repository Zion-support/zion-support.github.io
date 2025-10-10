'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, Server, Database, Cloud, Shield, Activity, TrendingUp, Users, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HealthPage: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState({
    overall: 'operational',
    uptime: '99.9%',
    lastIncident: '2024-01-15',
    services: [
      { name: 'API Services', status: 'operational', uptime: '99.9%' },
      { name: 'Database', status: 'operational', uptime: '99.8%' },
      { name: 'CDN', status: 'operational', uptime: '99.9%' },
      { name: 'AI Services', status: 'operational', uptime: '99.7%' },
      { name: 'Authentication', status: 'operational', uptime: '99.9%' },
      { name: 'File Storage', status: 'operational', uptime: '99.8%' }
    ]
  });

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2024-01-15',
      duration: '2 hours',
      description: 'Routine maintenance to improve performance and security.',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      date: '2024-01-10',
      duration: '45 minutes',
      description: 'Temporary performance degradation due to high query load.',
      impact: 'minor'
    },
    {
      id: 3,
      title: 'CDN Outage',
      status: 'resolved',
      date: '2024-01-05',
      duration: '1 hour',
      description: 'CDN provider experienced regional outage affecting content delivery.',
      impact: 'major'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'major':
        return 'bg-red-500/20 text-red-400';
      case 'critical':
        return 'bg-red-600/20 text-red-500';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            System Health
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of our systems and services. We're committed to providing reliable, 
            high-performance AI and IT solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              <span className="text-white font-medium">Last Incident: Jan 15, 2024</span>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white neon-text">Overall System Status</h2>
              <div className="flex items-center space-x-2">
                {getStatusIcon(systemStatus.overall)}
                <span className={`text-xl font-bold ${getStatusColor(systemStatus.overall)}`}>
                  {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{systemStatus.uptime}</div>
                <div className="text-gray-300">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-gray-300">Resolved (30 days)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemStatus.services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Status:</span>
                      <span className={getStatusColor(service.status)}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Uptime:</span>
                      <span className="text-cyan-400 font-medium">{service.uptime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <span>{incident.date}</span>
                        <span>•</span>
                        <span>Duration: {incident.duration}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded text-xs ${getImpactColor(incident.impact)}`}>
                          {incident.impact.charAt(0).toUpperCase() + incident.impact.slice(1)} Impact
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(incident.status)}
                      <span className={getStatusColor(incident.status)}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{incident.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Server Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">45ms</div>
                <div className="text-gray-300">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.8%</div>
                <div className="text-gray-300">CDN Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Security Score</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you're experiencing issues or have questions about our system status, 
              please don't hesitate to contact our support team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Support Channels</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">support@ziontechgroup.com</a></p>
                  <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
                  <p>Status Updates: <a href="/status" className="text-cyan-400 hover:text-cyan-300">status.ziontechgroup.com</a></p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Response Times</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Critical Issues: <span className="text-green-400">15 minutes</span></p>
                  <p>High Priority: <span className="text-yellow-400">1 hour</span></p>
                  <p>Normal Priority: <span className="text-blue-400">4 hours</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HealthPage;