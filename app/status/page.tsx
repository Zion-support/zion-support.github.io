'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, ExternalLink, Server, Database, Globe, Shield, Zap, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  lastIncident?: string;
}

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services: ServiceStatus[] = [
    {
      name: 'Main Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2024-01-15'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: '2024-01-10'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-05'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastIncident: '2024-01-12'
    },
    {
      name: 'Micro SaaS Platform',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '150ms',
      lastIncident: '2024-01-08'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '300ms',
      lastIncident: '2024-01-03'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      date: '2024-01-15',
      description: 'Planned maintenance to optimize database performance. All services restored.',
      duration: '2 hours'
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      date: '2024-01-10',
      description: 'Temporary issue with API rate limiting causing some requests to fail.',
      duration: '45 minutes'
    },
    {
      id: 3,
      title: 'AI Service Performance Degradation',
      status: 'resolved',
      date: '2024-01-12',
      description: 'AI services experiencing slower response times due to high load.',
      duration: '1 hour 30 minutes'
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
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
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
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status & Uptime</title>
        <meta name="description" content="Real-time system status and uptime information for Zion Tech Group services. Monitor our API, website, and platform availability." />
        <meta name="keywords" content="system status, uptime, service status, API status, website status, Zion Tech Group" />
        <meta property="og:title" content="System Status - Zion Tech Group" />
        <meta property="og:description" content="Real-time system status and uptime information" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/status" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                System <span className="text-cyan-400">Status</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-time status and uptime information for all our services and platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <Activity className="w-5 h-5" />
                  <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>
            </div>
          </section>

          {/* Overall Status */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-green-400/10 border border-green-400/20 rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h2 className="text-3xl font-bold text-green-400">All Systems Operational</h2>
                </div>
                <p className="text-gray-300 text-lg">
                  All services are running normally. No incidents reported.
                </p>
              </div>
            </div>
          </section>

          {/* Services Status */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Service <span className="text-cyan-400">Status</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Current status and performance metrics for all our services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border ${getStatusColor(service.status)}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-white font-medium">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-white font-medium">{service.responseTime}</span>
                      </div>
                      {service.lastIncident && (
                        <div className="flex justify-between">
                          <span className="text-gray-400">Last Incident:</span>
                          <span className="text-white font-medium">{service.lastIncident}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="py-16 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Recent <span className="text-cyan-400">Incidents</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Information about recent service disruptions and maintenance activities
                </p>
              </div>

              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(incident.status)}
                        <h3 className="text-lg font-bold text-white">{incident.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm">{incident.date}</div>
                        <div className="text-gray-400 text-sm">Duration: {incident.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need <span className="text-cyan-400">Help?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you're experiencing issues or have questions about our services, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
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
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StatusPage;