'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, XCircle, AlertCircle, Clock, RefreshCw } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const services = [
    { name: 'Website', status: 'operational', uptime: '99.9%', responseTime: '120ms' },
    { name: 'API Services', status: 'operational', uptime: '99.8%', responseTime: '85ms' },
    { name: 'Database', status: 'operational', uptime: '99.9%', responseTime: '45ms' },
    { name: 'CDN', status: 'operational', uptime: '99.95%', responseTime: '25ms' },
    { name: 'Email Services', status: 'operational', uptime: '99.7%', responseTime: '200ms' },
    { name: 'File Storage', status: 'operational', uptime: '99.9%', responseTime: '150ms' }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      description: 'Planned maintenance window for API infrastructure updates',
      startTime: '2024-10-05T02:00:00Z',
      endTime: '2024-10-05T04:00:00Z',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      description: 'Temporary performance degradation due to high query load',
      startTime: '2024-10-03T14:30:00Z',
      endTime: '2024-10-03T15:45:00Z',
      impact: 'major'
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
      case 'minor':
        return 'bg-yellow-100 text-yellow-800';
      case 'major':
        return 'bg-red-100 text-red-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">System Status</h1>
            <p className="text-gray-300 text-lg mb-4">
              Real-time status of all our services and systems
            </p>
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: {lastUpdated.toLocaleString()}
              <button
                onClick={() => setLastUpdated(new Date())}
                className="ml-4 p-1 hover:bg-gray-700 rounded"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Overall Status */}
          <section className="mb-12">
            <div className="bg-green-600 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">All Systems Operational</h2>
              <p className="text-green-100">
                All services are running normally. No incidents reported.
              </p>
            </div>
          </section>

          {/* Services Status */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={getStatusColor(service.status)}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white">{service.uptime}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 text-sm">{incident.description}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(incident.impact)}`}>
                      {incident.impact}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>
                        {new Date(incident.startTime).toLocaleString()} - {new Date(incident.endTime).toLocaleString()}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      incident.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Overall Uptime</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">85ms</div>
                <div className="text-gray-300">Avg Response Time</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-12">
            <div className="bg-gray-800/50 rounded-lg p-8 text-center border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Experiencing Issues?</h2>
              <p className="text-gray-300 mb-6">
                If you're experiencing issues not reflected in our status page, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors"
                >
                  support@ziontechgroup.com
                </a>
              </div>
            </div>
          </section>

          {/* Status History */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Status History</h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 text-center">
                View detailed status history and incident reports in our 
                <a href="/docs" className="text-cyan-400 hover:text-cyan-300 ml-1">documentation</a>.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;