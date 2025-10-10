'use client';
import React, { useState, useEffect } from 'react';
import {
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  RefreshCw, 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle
} from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      icon: Server,
      description: 'Core API endpoints and services'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '45ms',
      icon: Database,
      description: 'Primary database and data storage'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms',
      icon: Cloud,
      description: 'Cloud hosting and infrastructure'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '800ms',
      icon: Activity,
      description: 'AI and machine learning services'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '50ms',
      icon: Shield,
      description: 'Security monitoring and protection'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      icon: Cloud,
      description: 'Content delivery network'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance',
      status: 'completed',
      description: 'Database optimization and performance improvements',
      startTime: '2024-01-15 02:00 UTC',
      endTime: '2024-01-15 04:00 UTC',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'API Rate Limiting Update',
      status: 'completed',
      description: 'Updated rate limiting policies for better performance',
      startTime: '2024-01-10 14:00 UTC',
      endTime: '2024-01-10 15:30 UTC',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            System
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Status
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of all our services and systems. We're committed to providing reliable and transparent service.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Clock className="w-5 h-5 mr-2" />
            Last updated: {lastUpdated.toLocaleString()}
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="ml-4 p-2 text-cyan-400 hover:text-cyan-300 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="card-futuristic glass-dark p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-gray-300 text-lg">
              All services are running normally. No incidents reported.
            </p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-futuristic glass-dark p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2">
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
                    <span className={`font-semibold ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="card-futuristic glass-dark p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {getStatusIcon(incident.status)}
                    <h3 className="text-xl font-semibold text-white ml-3">{incident.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImpactColor(incident.impact)}`}>
                    {incident.impact.charAt(0).toUpperCase() + incident.impact.slice(1)} Impact
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{incident.description}</p>
                
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Started: {incident.startTime}</span>
                  <span className="mx-2">•</span>
                  <span>Ended: {incident.endTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our status page notifications to get real-time updates about service status and incidents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Subscribe to Updates
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Status API
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;