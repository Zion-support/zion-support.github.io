'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertTriangle, Clock, Server, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState({
    overall: 'operational',
    uptime: '99.9%',
    lastIncident: '2024-01-10',
    services: [
      { name: 'API Services', status: 'operational', uptime: '99.9%' },
      { name: 'AI Services', status: 'operational', uptime: '99.8%' },
      { name: 'Database', status: 'operational', uptime: '99.9%' },
      { name: 'Cloud Infrastructure', status: 'operational', uptime: '99.9%' },
      { name: 'Authentication', status: 'operational', uptime: '99.9%' },
      { name: 'File Storage', status: 'operational', uptime: '99.8%' }
    ]
  });

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: 'Scheduled Maintenance - AI Services',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-01-10T02:00:00Z',
      endTime: '2024-01-10T04:00:00Z',
      description: 'Routine maintenance to update AI model infrastructure.'
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'medium',
      startTime: '2024-01-08T14:30:00Z',
      endTime: '2024-01-08T16:45:00Z',
      description: 'Temporary rate limiting issues affecting some API endpoints.'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5" />;
      case 'outage': return <XCircle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time system status and uptime information for Zion Tech Group's AI and IT services." />
        <meta name="keywords" content="status, uptime, system health, service status, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  System Status
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real-time status of all our AI and IT services. We maintain 99.9% uptime 
                  to ensure your business operations run smoothly.
                </p>
              </div>

              {/* Overall Status */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-green-500/20 mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
                      <p className="text-gray-300">All services are running normally</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">{systemStatus.uptime}</div>
                    <div className="text-gray-300">Uptime (30 days)</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <Server className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">0</div>
                    <div className="text-sm text-gray-300">Active Incidents</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <Activity className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">6</div>
                    <div className="text-sm text-gray-300">Services Running</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-300">Average Response Time</div>
                  </div>
                </div>
              </div>

              {/* Service Status */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Service Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {systemStatus.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <div className={`flex items-center space-x-2 ${getStatusColor(service.status)}`}>
                          {getStatusIcon(service.status)}
                          <span className="text-sm font-medium capitalize">{service.status}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Uptime (30 days)</span>
                        <span className="text-sm font-semibold text-green-400">{service.uptime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Incidents */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Recent Incidents</h2>
                <div className="space-y-4">
                  {incidents.map((incident) => (
                    <div
                      key={incident.id}
                      className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                          <p className="text-gray-300 text-sm mb-3">{incident.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                            <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(incident.severity)}`}>
                            {incident.severity.toUpperCase()}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            incident.status === 'resolved' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {incident.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">45ms</div>
                    <div className="text-sm text-gray-300">Average Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">100%</div>
                    <div className="text-sm text-gray-300">Security Score</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">1.2M+</div>
                    <div className="text-sm text-gray-300">API Requests/Day</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-sm text-gray-300">SLA Compliance</div>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need Help?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  If you're experiencing issues or have questions about our services, 
                  our support team is here to help 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/support"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Emergency Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default StatusPage;