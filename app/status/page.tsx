'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
  AlertTriangle,
  Globe,
  Brain,
  Settings,
  Users,
  Eye,
  Sparkles,
  BookOpen,
  FileText,
  Download
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
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      icon: Server
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '12ms',
      lastIncident: '2024-01-10',
      icon: Database
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '78ms',
      lastIncident: '2024-01-12',
      icon: Cloud
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '156ms',
      lastIncident: '2024-01-08',
      icon: Brain
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '23ms',
      lastIncident: 'Never',
      icon: Shield
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '34ms',
      lastIncident: '2024-01-14',
      icon: Globe
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      description: 'Some API endpoints experienced slower response times due to increased load.',
      startTime: '2024-01-15T10:30:00Z',
      endTime: '2024-01-15T11:45:00Z',
      affectedServices: ['API Services', 'Database']
    },
    {
      id: 2,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      description: 'Intermittent database connection failures affecting some users.',
      startTime: '2024-01-10T14:20:00Z',
      endTime: '2024-01-10T16:30:00Z',
      affectedServices: ['Database', 'API Services']
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Maintenance',
      status: 'scheduled',
      severity: 'maintenance',
      description: 'Planned maintenance window for infrastructure updates.',
      startTime: '2024-01-20T02:00:00Z',
      endTime: '2024-01-20T04:00:00Z',
      affectedServices: ['Cloud Infrastructure', 'API Services']
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
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-400" />;
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
      case 'maintenance':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'major':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'maintenance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  const stats = [
    { number: '99.9%', label: 'Overall Uptime', icon: TrendingUp },
    { number: '< 50ms', label: 'Avg Response Time', icon: Activity },
    { number: '0', label: 'Active Incidents', icon: AlertCircle },
    { number: '24/7', label: 'Monitoring', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            System
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Status
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time status of all our services and systems. We're committed to transparency and keeping you informed.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center">
              {getStatusIcon(overallStatus)}
              <span className={`ml-2 text-lg font-semibold ${getStatusColor(overallStatus)}`}>
                All Systems {overallStatus === 'operational' ? 'Operational' : overallStatus === 'outage' ? 'Down' : 'Degraded'}
              </span>
            </div>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
          
          <p className="text-sm text-gray-400">
            Last updated: {lastUpdated.toLocaleString()}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white font-semibold">{service.uptime}</span>
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
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-white mr-3">{incident.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    incident.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                    incident.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {incident.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{incident.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Start Time:</span>
                    <div className="text-white">
                      {new Date(incident.startTime).toLocaleString()}
                    </div>
                  </div>
                  {incident.endTime && (
                    <div>
                      <span className="text-gray-400">End Time:</span>
                      <div className="text-white">
                        {new Date(incident.endTime).toLocaleString()}
                      </div>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-400">Affected Services:</span>
                    <div className="text-white">
                      {incident.affectedServices.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to status updates and get notified about incidents and maintenance windows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Subscribe to Updates
              <RefreshCw className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StatusPage;