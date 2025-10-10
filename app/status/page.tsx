'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertCircle, Clock, RefreshCw, Server, Database, Cloud, Shield, Zap, Mail } from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      id: '1',
      name: 'AI Platform API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      description: 'Core AI services and machine learning APIs',
      icon: Zap
    },
    {
      id: '2',
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      description: 'Cloud hosting and infrastructure services',
      icon: Cloud
    },
    {
      id: '3',
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Primary and backup database systems',
      icon: Database
    },
    {
      id: '4',
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '200ms',
      description: 'Cybersecurity monitoring and protection',
      icon: Shield
    },
    {
      id: '5',
      name: 'Web Application',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '150ms',
      description: 'Main website and customer portal',
      icon: Server
    },
    {
      id: '6',
      name: 'Email Services',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '300ms',
      description: 'Email delivery and notification services',
      icon: Mail
    }
  ];

  const incidents = [
    {
      id: '1',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'scheduled',
      description: 'Planned maintenance to optimize database performance',
      startTime: '2024-01-20 02:00 UTC',
      endTime: '2024-01-20 04:00 UTC',
      impact: 'minor'
    },
    {
      id: '2',
      title: 'Email Service Degradation',
      status: 'investigating',
      description: 'Some email deliveries may be delayed',
      startTime: '2024-01-19 14:30 UTC',
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
    const interval = setInterval(refreshStatus, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status</title>
        <meta name="description" content="Check the real-time status of all Zion Tech Group services. Monitor uptime, performance, and any ongoing incidents." />
        <meta name="keywords" content="status, uptime, service status, system status, monitoring, incidents" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Status</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-time status of all our services. We're committed to providing reliable, high-performance solutions.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
              </button>
              <div className="text-sm text-gray-400">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Overall System Status
              </h2>
              <div className="inline-flex items-center gap-3 bg-green-400/10 border border-green-400/20 text-green-400 px-6 py-3 rounded-full">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">All Systems Operational</span>
              </div>
            </div>

            {/* Service Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/20 ${getStatusColor(service.status)}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-6 h-6" />
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    </div>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white font-medium">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Recent Incidents
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Information about any ongoing or recent service disruptions.
              </p>
            </div>

            <div className="space-y-4">
              {incidents.map((incident) => (
                <div
                  key={incident.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300 text-sm">{incident.description}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      incident.status === 'scheduled' ? 'bg-blue-400/10 text-blue-400' :
                      incident.status === 'investigating' ? 'bg-yellow-400/10 text-yellow-400' :
                      'bg-red-400/10 text-red-400'
                    }`}>
                      {incident.status}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div>
                      <span className="font-medium">Started:</span> {incident.startTime}
                    </div>
                    {incident.endTime && (
                      <div>
                        <span className="font-medium">Ended:</span> {incident.endTime}
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Impact:</span> {incident.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you're experiencing issues not reflected in our status page, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Shield className="w-5 h-5" />
                  Contact Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Server className="w-5 h-5" />
                  Report Issue
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatusPage;
