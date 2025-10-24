'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  RefreshCw,
  Server,
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const services = [
    {
      name: 'AI Platform',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2024-01-15',
      description: 'Core AI services and machine learning APIs'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '85ms',
      lastIncident: '2024-01-10',
      description: 'Cloud hosting and infrastructure services'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms',
      lastIncident: '2024-01-12',
      description: 'API management and routing services'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-08',
      description: 'Primary and backup database systems'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '60ms',
      lastIncident: '2024-01-05',
      description: 'User authentication and authorization'
    },
    {
      name: 'CDN & Assets',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      lastIncident: '2024-01-03',
      description: 'Content delivery and static assets'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      description: 'Database performance optimization and index rebuilding completed successfully.'
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-12 14:30 UTC',
      endTime: '2024-01-12 15:45 UTC',
      description: 'Temporary issue with API rate limiting affecting some users. Resolved by adjusting rate limit thresholds.'
    },
    {
      id: 3,
      title: 'Cloud Provider Outage',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-10 09:15 UTC',
      endTime: '2024-01-10 11:30 UTC',
      description: 'Cloud provider experienced regional outage. Services restored after failover to backup region.'
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'major':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'maintenance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <>
      <SEOOptimizer 
        title="System Status - Zion Tech Group"
        description="Real-time status of our AI and IT services. Check system health, uptime, and incident reports."
        keywords="system status, service status, uptime, incidents, system health, API status"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                System Status
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Real-time status of our AI and IT services. All systems operational.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-semibold">All Systems Operational</span>
                </div>
                <div className="text-gray-400">•</div>
                <div className="text-gray-300">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="ml-4 p-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Service Status</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Server className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      </div>
                      {getStatusIcon(service.status)}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Uptime</span>
                        <span className="text-green-400 font-semibold">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Response Time</span>
                        <span className="text-white">{service.responseTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Last Incident</span>
                        <span className="text-gray-300">{service.lastIncident}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Recent Incidents</h2>
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                        <p className="text-gray-300 mb-3">{incident.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Started: {incident.startTime}</span>
                          <span>Ended: {incident.endTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Performance Metrics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                  <p className="text-gray-300">Overall Uptime</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full mb-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">75ms</h3>
                  <p className="text-gray-300">Average Response Time</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                  <p className="text-gray-300">Active Incidents</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our status page notifications to get real-time updates 
              about service status and incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe to Updates
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Full History
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default StatusPage;
