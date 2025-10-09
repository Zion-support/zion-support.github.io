'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Activity, CheckCircle, AlertTriangle, XCircle, Clock, RefreshCw, Zap, Settings, Code, BarChart, Cloud, Target, MessageSquare, Cpu, Database, Users, Mail, Phone, MapPin, Lock, Eye, Truck, Factory, GraduationCap, Stethoscope, CreditCard, Home, Briefcase, Wrench, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Heart, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services = [
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Core AI and machine learning services',
      lastIncident: null
    },
    {
      name: 'IT Infrastructure',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '32ms',
      description: 'Cloud infrastructure and hosting services',
      lastIncident: null
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '28ms',
      description: 'User authentication and authorization',
      lastIncident: null
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '15ms',
      description: 'Primary and backup database systems',
      lastIncident: null
    },
    {
      name: 'CDN & Content Delivery',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '12ms',
      description: 'Global content delivery network',
      lastIncident: null
    },
    {
      name: 'Monitoring & Analytics',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '38ms',
      description: 'System monitoring and performance analytics',
      lastIncident: null
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '52ms',
      description: 'Email delivery and notification services',
      lastIncident: null
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      description: 'Secure file storage and management',
      lastIncident: null
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'completed',
      severity: 'maintenance',
      startTime: '2024-12-15T02:00:00Z',
      endTime: '2024-12-15T04:00:00Z',
      description: 'Routine database optimization and performance improvements',
      affectedServices: ['Database Services', 'AI Services API'],
      updates: [
        {
          time: '2024-12-15T02:00:00Z',
          message: 'Maintenance started - database services may experience brief interruptions'
        },
        {
          time: '2024-12-15T04:00:00Z',
          message: 'Maintenance completed successfully - all services restored'
        }
      ]
    },
    {
      id: 2,
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-12-10T14:30:00Z',
      endTime: '2024-12-10T15:45:00Z',
      description: 'Temporary issue with API rate limiting causing some requests to be rejected',
      affectedServices: ['AI Services API'],
      updates: [
        {
          time: '2024-12-10T14:30:00Z',
          message: 'Investigating reports of API rate limiting issues'
        },
        {
          time: '2024-12-10T15:00:00Z',
          message: 'Identified configuration issue with rate limiting middleware'
        },
        {
          time: '2024-12-10T15:45:00Z',
          message: 'Issue resolved - API rate limiting working correctly'
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return CheckCircle;
      case 'degraded':
        return AlertTriangle;
      case 'outage':
        return XCircle;
      case 'maintenance':
        return Clock;
      default:
        return Activity;
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
        return 'bg-red-500';
      case 'major':
        return 'bg-orange-500';
      case 'minor':
        return 'bg-yellow-500';
      case 'maintenance':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
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

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="System Status - Zion Tech Group"
        description="Check the current status of Zion Tech Group's AI and IT services. Real-time monitoring and incident reporting."
        keywords={['status', 'uptime', 'monitoring', 'Zion Tech Group', 'system status', 'service health']}
        canonicalUrl="https://ziontechgroup.com/status"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Activity className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            System Status
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time monitoring of our AI and IT services. We're committed to providing reliable, high-performance solutions.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <span>Last updated: {lastUpdated.toLocaleString()}</span>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </section>

        {/* Overall Status */}
        <section className="mb-16">
          <div className="cyber-card p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              {React.createElement(getStatusIcon(overallStatus), {
                className: `w-12 h-12 ${getStatusColor(overallStatus)}`
              })}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              All Systems {overallStatus === 'operational' ? 'Operational' : 'Degraded'}
            </h2>
            <p className="text-gray-300">
              {overallStatus === 'operational' 
                ? 'All services are running normally with no known issues.'
                : 'Some services may be experiencing issues. Check individual service status below.'
              }
            </p>
          </div>
        </section>

        {/* Service Status */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Service Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <StatusIcon className={`w-6 h-6 ${getStatusColor(service.status)}`} />
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-green-400 font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-cyan-400 font-medium">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Status:</span>
                      <span className={`font-medium capitalize ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Recent Incidents
          </h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="cyber-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        incident.status === 'resolved' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{incident.description}</p>
                    <div className="text-sm text-gray-400">
                      <div>Start: {new Date(incident.startTime).toLocaleString()}</div>
                      <div>End: {new Date(incident.endTime).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Affected Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {incident.affectedServices.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Updates:</h4>
                  <div className="space-y-2">
                    {incident.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="text-sm text-gray-300 border-l-2 border-gray-700 pl-3">
                        <div className="text-gray-400 text-xs mb-1">
                          {new Date(update.time).toLocaleString()}
                        </div>
                        <div>{update.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Average Uptime</div>
              <div className="text-sm text-gray-400 mt-1">Last 30 days</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">28ms</div>
              <div className="text-gray-300">Average Response Time</div>
              <div className="text-sm text-gray-400 mt-1">Last 24 hours</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-300">Active Incidents</div>
              <div className="text-sm text-gray-400 mt-1">All systems operational</div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Stay Informed
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to status updates to be notified of any service disruptions or maintenance windows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <button className="cyber-button px-6 py-3 font-semibold">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StatusPage;