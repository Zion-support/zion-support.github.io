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
  Brain,
  BarChart,
  Code,
  Users,
  Settings,
  Globe,
  Lock,
  Star,
  Award,
  Target,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  MessageSquare,
  Eye,
  Zap
} from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 2000);
  };

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: '2024-01-10',
      description: 'Core API endpoints and services'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '250ms',
      lastIncident: '2024-01-08',
      description: 'Machine learning and AI processing'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '80ms',
      lastIncident: '2024-01-05',
      description: 'Cloud hosting and infrastructure'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-12',
      description: 'Database and data storage services'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '60ms',
      lastIncident: '2024-01-15',
      description: 'User authentication and authorization'
    },
    {
      name: 'CDN Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '30ms',
      lastIncident: '2024-01-03',
      description: 'Content delivery network'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-10T14:30:00Z',
      endTime: '2024-01-10T16:45:00Z',
      description: 'Some API endpoints experienced increased response times due to high traffic load.',
      impact: 'Limited impact on API performance'
    },
    {
      id: 2,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-08T09:15:00Z',
      endTime: '2024-01-08T11:30:00Z',
      description: 'Database connection pool exhausted causing intermittent service disruptions.',
      impact: 'Some users experienced temporary service unavailability'
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'major':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

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
            Real-time status of all our services and infrastructure. We're committed to providing reliable service.
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Clock className="w-5 h-5" />
            <span>Last updated: {lastUpdated.toLocaleString()}</span>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-gray-300 text-lg">
              All services are running normally. No incidents reported.
            </p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
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
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Incident:</span>
                    <span className="text-white">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                      <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      incident.status === 'resolved' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{incident.description}</p>
                <p className="text-sm text-gray-400">
                  <strong>Impact:</strong> {incident.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to status updates and get notified about any service disruptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Subscribe to Updates
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Status Page
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StatusPage;