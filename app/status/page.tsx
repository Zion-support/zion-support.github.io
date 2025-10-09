'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, XCircle, AlertCircle, Clock, RefreshCw } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2024-01-15'
    },
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '85ms',
      lastIncident: '2024-01-10'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '45ms',
      lastIncident: '2024-01-05'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '25ms',
      lastIncident: '2024-01-01'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      lastIncident: '2024-01-12'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '90ms',
      lastIncident: '2024-01-08'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      description: 'Database performance optimization completed successfully',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      description: 'Temporary rate limiting issue affecting some API endpoints',
      startTime: '2024-01-10 14:30 UTC',
      endTime: '2024-01-10 15:45 UTC',
      impact: 'minor'
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
      case 'major':
        return 'bg-red-500/20 text-red-400';
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'none':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
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
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            System Status
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Real-time status of all our services and systems
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
            </button>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Overall Status */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-semibold text-green-400">All Systems Operational</h2>
          </div>
          <p className="text-gray-300 mt-2">
            All services are running normally. No incidents reported.
          </p>
        </div>

        {/* Services Status */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={getStatusColor(service.status)}>{service.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Incident:</span>
                    <span className="text-gray-300 text-sm">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Incidents</h2>
          {incidents.length > 0 ? (
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 text-sm">{incident.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(incident.impact)}`}>
                      {incident.impact}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Start: {incident.startTime}</span>
                    <span>End: {incident.endTime}</span>
                    <span className="text-green-400">Resolved</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-gray-300">No recent incidents</p>
            </div>
          )}
        </section>

        {/* Contact Information */}
        <section className="text-center bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help?
          </h2>
          <p className="text-gray-300 mb-6">
            If you're experiencing issues not reflected in our status page, please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="/support"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;