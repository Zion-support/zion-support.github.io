'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  RefreshCw,
  Activity,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  Brain,
  Code,
  Smartphone,
  BarChart3,
  Settings,
  Users,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const systemStatus = {
    overall: 'operational',
    uptime: '99.9%',
    responseTime: '45ms',
    lastIncident: '2024-09-15'
  };

  const services = [
    {
      name: 'AI Content Generator',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      icon: <Brain className="w-5 h-5" />,
      description: 'AI-powered content generation service'
    },
    {
      name: 'AI Chatbot Builder',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms',
      icon: <MessageSquare className="w-5 h-5" />,
      description: 'Intelligent chatbot creation platform'
    },
    {
      name: 'AI Analytics Dashboard',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms',
      icon: <BarChart3 className="w-5 h-5" />,
      description: 'Advanced analytics and reporting'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '35ms',
      icon: <Cloud className="w-5 h-5" />,
      description: 'Cloud hosting and infrastructure'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '60ms',
      icon: <Code className="w-5 h-5" />,
      description: 'RESTful API endpoints'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      icon: <Database className="w-5 h-5" />,
      description: 'Primary database systems'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '15ms',
      icon: <Shield className="w-5 h-5" />,
      description: 'Security monitoring and protection'
    },
    {
      name: 'Mobile Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '110ms',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Mobile application services'
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-2024-001',
      title: 'Scheduled Maintenance - AI Services',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-10-05 02:00 UTC',
      endTime: '2024-10-05 04:00 UTC',
      description: 'Routine maintenance performed on AI content generation services. All services restored successfully.',
      affectedServices: ['AI Content Generator', 'AI Chatbot Builder']
    },
    {
      id: 'INC-2024-002',
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-09-15 14:30 UTC',
      endTime: '2024-09-15 15:45 UTC',
      description: 'Temporary performance degradation in database queries. Issue resolved with query optimization.',
      affectedServices: ['Database Services', 'API Services']
    },
    {
      id: 'INC-2024-003',
      title: 'Cloud Infrastructure Update',
      status: 'resolved',
      severity: 'maintenance',
      startTime: '2024-09-01 01:00 UTC',
      endTime: '2024-09-01 03:00 UTC',
      description: 'Scheduled infrastructure updates to improve performance and security.',
      affectedServices: ['Cloud Infrastructure', 'All Services']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400 bg-green-500/20';
      case 'degraded': return 'text-yellow-400 bg-yellow-500/20';
      case 'outage': return 'text-red-400 bg-red-500/20';
      case 'maintenance': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded': return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'maintenance': return <Clock className="w-5 h-5 text-blue-400" />;
      default: return <Minus className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-500/20';
      case 'major': return 'text-orange-400 bg-orange-500/20';
      case 'minor': return 'text-yellow-400 bg-yellow-500/20';
      case 'maintenance': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
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
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status & Uptime</title>
        <meta name="description" content="Real-time system status for Zion Tech Group's AI and IT services. Check uptime, performance, and incident reports." />
        <meta name="keywords" content="system status, uptime, service status, incident reports, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            System{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Status
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time status of all our services. We monitor our systems 24/7 to ensure maximum uptime and performance.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <span className="text-gray-400 text-sm">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Overall Status */}
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Overall System Status</h2>
              <div className="flex items-center space-x-2">
                {getStatusIcon(systemStatus.overall)}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(systemStatus.overall)}`}>
                  {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{systemStatus.uptime}</div>
                <div className="text-gray-300">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{systemStatus.responseTime}</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div>
                  {getStatusIcon(service.status)}
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-medium">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400 font-medium">{service.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Recent Incidents</h2>
          <div className="space-y-4">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-mono text-gray-400">{incident.id}</span>
                    <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{incident.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Start Time:</span>
                    <span className="text-white ml-2">{incident.startTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">End Time:</span>
                    <span className="text-white ml-2">{incident.endTime}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-gray-400 text-sm">Affected Services:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {incident.affectedServices.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">API Response Time</h3>
                <TrendingDown className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">45ms</div>
              <div className="text-sm text-gray-400">-5ms from last week</div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Error Rate</h3>
                <TrendingDown className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">0.01%</div>
              <div className="text-sm text-gray-400">-0.02% from last week</div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Throughput</h3>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">2.4M</div>
              <div className="text-sm text-gray-400">+12% from last week</div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Active Users</h3>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400 mb-2">15.2K</div>
              <div className="text-sm text-gray-400">+8% from last week</div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Status Updates</h2>
            <p className="text-gray-300 mb-6">
              Stay informed about our system status. Subscribe to status updates via email or follow us on social media.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Email Updates</p>
                  <p className="text-white">status@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Emergency Contact</p>
                  <p className="text-white">+1 (302) 464-0950</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">Status Page</p>
                  <p className="text-white">status.ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Report an Issue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}