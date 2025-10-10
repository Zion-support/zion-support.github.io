'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle, 
  XCircle, 
  Clock, 
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

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2024-01-15',
      description: 'Core API endpoints and authentication services'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      lastIncident: '2024-01-10',
      description: 'Primary and replica database clusters'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: '2024-01-12',
      description: 'Content delivery network and static assets'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '95ms',
      lastIncident: '2024-01-08',
      description: 'User authentication and authorization services'
    },
    {
      name: 'Email Service',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '2.1s',
      lastIncident: '2024-01-20',
      description: 'Transactional email delivery service'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '180ms',
      lastIncident: '2024-01-05',
      description: 'File upload and storage services'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Email Service Degradation',
      status: 'investigating',
      severity: 'medium',
      description: 'Some users are experiencing delays in email delivery. We are investigating the issue.',
      startTime: '2024-01-20T10:30:00Z',
      affectedServices: ['Email Service']
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'low',
      description: 'Temporary issue with rate limiting that has been resolved.',
      startTime: '2024-01-15T14:20:00Z',
      endTime: '2024-01-15T15:45:00Z',
      affectedServices: ['API Services']
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            System <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Status</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time status of all our services and systems. We're committed to transparency and keeping you informed.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
            >
              <Activity className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-gray-300 text-lg">
              All core services are running normally. We're monitoring everything 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <span className={`font-semibold ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-white font-semibold">{service.uptime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-white font-semibold">{service.responseTime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Last Incident</span>
                    <span className="text-gray-300 text-sm">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className={`px-3 py-1 rounded-full ${
                        incident.status === 'resolved' ? 'bg-green-500/20 text-green-300' :
                        incident.status === 'investigating' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full ${
                        incident.severity === 'low' ? 'bg-blue-500/20 text-blue-300' :
                        incident.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>Started: {new Date(incident.startTime).toLocaleString()}</div>
                    {incident.endTime && (
                      <div>Resolved: {new Date(incident.endTime).toLocaleString()}</div>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{incident.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>Affected services:</span>
                  <div className="flex gap-2">
                    {incident.affectedServices.map((service, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">
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

      <Footer />
    </div>
  );
};

export default StatusPage;