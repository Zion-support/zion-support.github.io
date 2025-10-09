import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const services = [
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '32ms',
      lastIncident: '2024-01-10'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '28ms',
      lastIncident: '2024-01-20'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      lastIncident: '2024-01-12'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '22ms',
      lastIncident: '2024-01-08'
    },
    {
      name: 'CDN & Edge',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '8ms',
      lastIncident: '2024-01-18'
    }
  ];

  const incidents = [
    {
      title: 'Scheduled Maintenance - AI Services',
      status: 'resolved',
      date: '2024-01-20',
      description: 'Planned maintenance window for AI model updates completed successfully.',
      impact: 'minor'
    },
    {
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      date: '2024-01-15',
      description: 'Temporary rate limiting issue affecting some API endpoints. Resolved within 30 minutes.',
      impact: 'minor'
    },
    {
      title: 'Database Performance Optimization',
      status: 'resolved',
      date: '2024-01-10',
      description: 'Database optimization completed, improving query performance by 40%.',
      impact: 'none'
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

  const refreshStatus = () => {
    setLastUpdated(new Date());
  };

  return (
    <>
      <Helmet>
        <title>System Status | Zion Tech Group</title>
        <meta
          name="description"
          content="Real-time status of Zion Tech Group's AI and IT services. Monitor uptime, performance, and incidents."
        />
        <meta
          name="keywords"
          content="system status, uptime, service status, Zion Tech Group status"
        />
        <meta property="og:title" content="System Status | Zion Tech Group" />
        <meta
          property="og:description"
          content="Real-time status of our AI and IT services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/status" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time status of all Zion Tech Group services
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <span className="text-gray-400">Last updated: {lastUpdated.toLocaleTimeString()}</span>
              <button
                onClick={refreshStatus}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Overall Status */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-16">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">All Systems Operational</h2>
                <p className="text-green-100 text-lg">
                  All services are running normally with 99.9% uptime
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-green-100">Uptime (30 days)</div>
              </div>
            </div>
          </div>

          {/* Services Status */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={`capitalize ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-green-400">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-cyan-400">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Incident:</span>
                      <span className="text-gray-300">{service.lastIncident}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{incident.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      incident.status === 'resolved' ? 'bg-green-600 text-white' :
                      incident.status === 'investigating' ? 'bg-yellow-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{incident.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Date: {incident.date}</span>
                    <span className="capitalize">Impact: {incident.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Average Response Time</span>
                    <span className="text-cyan-400">28ms</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Error Rate</span>
                    <span className="text-green-400">0.01%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Throughput</span>
                    <span className="text-blue-400">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Scheduled Maintenance</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold">AI Model Updates</h4>
                  <p className="text-gray-400 text-sm">February 15, 2024 - 2:00 AM EST</p>
                  <p className="text-gray-300 text-sm">Expected duration: 2 hours</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold">Database Optimization</h4>
                  <p className="text-gray-400 text-sm">February 22, 2024 - 3:00 AM EST</p>
                  <p className="text-gray-300 text-sm">Expected duration: 1 hour</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold">Security Updates</h4>
                  <p className="text-gray-400 text-sm">March 1, 2024 - 1:00 AM EST</p>
                  <p className="text-gray-300 text-sm">Expected duration: 30 minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Notifications */}
          <div className="text-center bg-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to status updates and get notified about incidents and maintenance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Subscribe to Updates
              </button>
              <button className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                RSS Feed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusPage;
