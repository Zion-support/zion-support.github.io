'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  lastIncident?: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  startTime: string;
  endTime?: string;
  description: string;
  affectedServices: string[];
}

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services: ServiceStatus[] = [
    {
      id: 'api',
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      description: 'Core API endpoints and services',
      icon: Server
    },
    {
      id: 'website',
      name: 'Website',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      description: 'Main website and user interface',
      icon: Globe
    },
    {
      id: 'database',
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '45ms',
      description: 'Primary and backup database systems',
      icon: Database
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '250ms',
      description: 'Machine learning and AI processing',
      icon: Brain
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '90ms',
      description: 'Cloud hosting and infrastructure',
      icon: Cloud
    },
    {
      id: 'security',
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '30ms',
      description: 'Security monitoring and protection',
      icon: Shield
    },
    {
      id: 'analytics',
      name: 'Analytics',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '180ms',
      lastIncident: '2024-01-15T10:30:00Z',
      description: 'Data analytics and reporting',
      icon: BarChart
    },
    {
      id: 'notifications',
      name: 'Notifications',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '75ms',
      description: 'Email and push notifications',
      icon: Zap
    }
  ];

  const incidents: Incident[] = [
    {
      id: 'incident-001',
      title: 'Analytics Service Performance Issues',
      status: 'monitoring',
      severity: 'minor',
      startTime: '2024-01-15T10:30:00Z',
      description: 'Some analytics reports are experiencing slower than usual processing times.',
      affectedServices: ['Analytics', 'Reporting']
    },
    {
      id: 'incident-002',
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-12T14:20:00Z',
      endTime: '2024-01-12T16:30:00Z',
      description: 'Intermittent database connection issues affecting some user operations.',
      affectedServices: ['Database', 'API Services']
    }
  ];

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

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
      case 'critical':
        return 'bg-red-500';
      case 'major':
        return 'bg-orange-500';
      case 'minor':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getIncidentStatusColor = (status: string) => {
    switch (status) {
      case 'investigating':
        return 'text-red-400';
      case 'identified':
        return 'text-orange-400';
      case 'monitoring':
        return 'text-yellow-400';
      case 'resolved':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const overallStatus = services.every(s => s.status === 'operational') ? 'operational' : 
                       services.some(s => s.status === 'outage') ? 'outage' : 'degraded';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            System <span className="text-cyan-400">Status</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of all our services and systems. We're committed to providing 
            transparent communication about any issues or maintenance.
          </p>
          
          {/* Overall Status */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 rounded-lg border border-cyan-500/20">
            {getStatusIcon(overallStatus)}
            <span className={`text-lg font-semibold ${getStatusColor(overallStatus)}`}>
              {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300 text-sm">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="ml-2 p-1 text-gray-400 hover:text-cyan-400 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Uptime</span>
                      <span className="text-white font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Response Time</span>
                      <span className="text-white font-medium">{service.responseTime}</span>
                    </div>
                    {service.lastIncident && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Last Incident</span>
                        <span className="text-yellow-400 text-sm">{formatDate(service.lastIncident)}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
          {incidents.length > 0 ? (
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIncidentStatusColor(incident.status)} bg-slate-700`}>
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{incident.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {incident.affectedServices.map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Started: {formatDate(incident.startTime)}</span>
                    {incident.endTime && (
                      <span>Resolved: {formatDate(incident.endTime)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">All Systems Operational</h3>
              <p className="text-gray-400">No recent incidents to report.</p>
            </div>
          )}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99.8%</h3>
              <p className="text-gray-400">Average Uptime</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">120ms</h3>
              <p className="text-gray-400">Average Response Time</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-400">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StatusPage;