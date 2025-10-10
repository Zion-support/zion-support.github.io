<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const healthPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Health | Zion Tech Group</title>
        <meta name="description" content="Professional health services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="health, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Health
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional health services powered by advanced AI and cutting-edge technology.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <div>
                <a 
                  href="/" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default healthPage;
=======
'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, Server, Database, Cloud, Shield, Activity, TrendingUp, Users, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HealthPage: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState({
    overall: 'operational',
    uptime: '99.9%',
    lastIncident: '2024-01-15',
    services: [
      { name: 'API Services', status: 'operational', uptime: '99.9%' },
      { name: 'Database', status: 'operational', uptime: '99.8%' },
      { name: 'CDN', status: 'operational', uptime: '99.9%' },
      { name: 'AI Services', status: 'operational', uptime: '99.7%' },
      { name: 'Authentication', status: 'operational', uptime: '99.9%' },
      { name: 'File Storage', status: 'operational', uptime: '99.8%' }
    ]
  });

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2024-01-15',
      duration: '2 hours',
      description: 'Routine maintenance to improve performance and security.',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      date: '2024-01-10',
      duration: '45 minutes',
      description: 'Temporary performance degradation due to high query load.',
      impact: 'minor'
    },
    {
      id: 3,
      title: 'CDN Outage',
      status: 'resolved',
      date: '2024-01-05',
      duration: '1 hour',
      description: 'CDN provider experienced regional outage affecting content delivery.',
      impact: 'major'
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
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Activity, 
  Heart, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  BarChart,
  Server,
  Database,
  Cloud,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const HealthPage: React.FC = () => {
  const healthMetrics = [
    {
      icon: Server,
      title: 'System Uptime',
      value: '99.9%',
      description: 'Average system availability across all services',
      status: 'excellent'
    },
    {
      icon: Database,
      title: 'Database Performance',
      value: '98.5%',
      description: 'Query response time and optimization metrics',
      status: 'excellent'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      value: '99.7%',
      description: 'Cloud service reliability and performance',
      status: 'excellent'
    },
    {
      icon: Shield,
      title: 'Security Status',
      value: '100%',
      description: 'Security monitoring and threat detection',
      status: 'excellent'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance',
      status: 'resolved',
      time: '2 hours ago',
      description: 'Database optimization completed successfully'
    },
    {
      id: 2,
      title: 'API Performance Update',
      status: 'resolved',
      time: '1 day ago',
      description: 'Improved response times by 15%'
    },
    {
      id: 3,
      title: 'Security Patch Applied',
      status: 'resolved',
      time: '3 days ago',
      description: 'Latest security updates deployed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-400';
      case 'good':
        return 'text-yellow-400';
      case 'warning':
        return 'text-orange-400';
      case 'critical':
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

<<<<<<< HEAD
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'minor':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'major':
        return 'bg-red-500/20 text-red-400';
      case 'critical':
        return 'bg-red-600/20 text-red-500';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
=======
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { Activity, Shield, CheckCircle, Star, ArrowRight, Zap, Brain, Globe, Phone, Mail, MapPin, Award, TrendingUp, MessageSquare, Cpu, Database, Smartphone, Settings, FileText, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function HealthPage() {
  const features = [
    {
      icon: Activity,
      title: 'System Health Monitoring',
      description: 'Real-time monitoring of all system components with automated alerts and reporting.'
    },
    {
      icon: Shield,
      title: 'Security Health Checks',
      description: 'Comprehensive security assessments and vulnerability scanning to ensure system protection.'
    },
    {
      icon: Database,
      title: 'Database Health',
      description: 'Monitor database performance, optimization, and health metrics for optimal operation.'
    },
    {
      icon: Globe,
      title: 'Network Health',
      description: 'Continuous network monitoring and health assessment to prevent downtime.'
    },
    {
      icon: Cpu,
      title: 'Server Performance',
      description: 'Monitor server resources, CPU usage, memory, and disk space for optimal performance.'
    },
    {
      icon: Settings,
      title: 'Automated Remediation',
      description: 'AI-powered automated fixes for common issues to maintain system health.'
    }
  ];

  const healthMetrics = [
    {
      metric: 'System Uptime',
      value: '99.9%',
      description: 'Average uptime across all monitored systems'
    },
    {
      metric: 'Response Time',
      value: '< 100ms',
      description: 'Average response time for critical applications'
    },
    {
      metric: 'Security Score',
      value: '98/100',
      description: 'Overall security health rating'
    },
    {
      metric: 'Issue Resolution',
      value: '< 5 min',
      description: 'Average time to resolve automated issues'
    }
  ];

  const services = [
    {
      title: 'Health Assessment',
      description: 'Comprehensive system health evaluation and recommendations.',
      price: 'Starting at $1,500'
    },
    {
      title: 'Continuous Monitoring',
      description: '24/7 system health monitoring with real-time alerts.',
      price: 'Starting at $500/month'
    },
    {
      title: 'Health Optimization',
      description: 'Proactive optimization to improve system performance and reliability.',
      price: 'Starting at $2,000'
    },
    {
      title: 'Emergency Response',
      description: 'Rapid response team for critical system health issues.',
      price: 'Starting at $300/hour'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'IT Manager, TechCorp',
      content: 'The health monitoring system has prevented multiple outages. We now have complete visibility into our infrastructure.',
      rating: 5,
      avatar: '/images/testimonials/david-kim.jpg'
    },
    {
      name: 'Lisa Anderson',
      role: 'CTO, DataFlow Inc',
      content: 'The automated remediation features are incredible. Issues are fixed before they become problems.',
      rating: 5,
      avatar: '/images/testimonials/lisa-anderson.jpg'
    },
    {
      name: 'James Wilson',
      role: 'System Administrator, CloudTech',
      content: 'Our system reliability has improved dramatically since implementing their health monitoring solution.',
      rating: 5,
      avatar: '/images/testimonials/james-wilson.jpg'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            System Health
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of our systems and services. We're committed to providing reliable, 
            high-performance AI and IT solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">All Systems Operational</span>
            </div>
            <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Last Incident: Jan 15, 2024</span>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white neon-text">Overall System Status</h2>
              <div className="flex items-center space-x-2">
                {getStatusIcon(systemStatus.overall)}
                <span className={`text-xl font-bold ${getStatusColor(systemStatus.overall)}`}>
                  {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{systemStatus.uptime}</div>
                <div className="text-gray-300">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-gray-300">Resolved (30 days)</div>
=======
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'good':
        return <TrendingUp className="w-5 h-5 text-yellow-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-orange-400" />;
      case 'critical':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>System Health - Zion Tech Group</title>
        <meta name="description" content="Real-time system health monitoring and status updates for Zion Tech Group services and infrastructure." />
        <meta name="keywords" content="system health, uptime, monitoring, status, infrastructure, performance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Activity className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                System
                <span className="bg-gradient-to-r from-green-400 to-cyan-600 bg-clip-text text-transparent">
                  {' '}Health Status
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-time monitoring of our infrastructure, services, and performance metrics. 
                All systems are operational and running smoothly.
              </p>

              <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 font-semibold">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                All Systems Operational
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Service Status */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemStatus.services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Status:</span>
                      <span className={getStatusColor(service.status)}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Uptime:</span>
                      <span className="text-cyan-400 font-medium">{service.uptime}</span>
                    </div>
                  </div>
=======
        {/* Health Metrics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                System Performance Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current performance indicators across all our services and infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    {getStatusIcon(metric.status)}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                  <div className={`text-3xl font-bold mb-2 ${getStatusColor(metric.status)}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-gray-400">{metric.description}</p>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
<<<<<<< HEAD
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Recent Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <span>{incident.date}</span>
                        <span>•</span>
                        <span>Duration: {incident.duration}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded text-xs ${getImpactColor(incident.impact)}`}>
                          {incident.impact.charAt(0).toUpperCase() + incident.impact.slice(1)} Impact
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(incident.status)}
                      <span className={getStatusColor(incident.status)}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{incident.description}</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Recent System Updates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest maintenance activities and system improvements.
              </p>
            </div>

            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                        <p className="text-gray-400">{incident.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{incident.time}</div>
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {incident.status}
                      </div>
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Server Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">45ms</div>
                <div className="text-gray-300">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">99.8%</div>
                <div className="text-gray-300">CDN Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Security Score</div>
              </div>
=======
        {/* Service Status */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Status Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Current status of all our services and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Web Application', status: 'operational', uptime: '99.9%' },
                { name: 'API Services', status: 'operational', uptime: '99.8%' },
                { name: 'Database', status: 'operational', uptime: '99.9%' },
                { name: 'CDN', status: 'operational', uptime: '99.7%' },
                { name: 'Email Services', status: 'operational', uptime: '99.9%' },
                { name: 'Monitoring', status: 'operational', uptime: '100%' }
              ].map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">{service.status}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.uptime}</div>
                  <div className="text-sm text-gray-400">Uptime (30 days)</div>
                </div>
              ))}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you're experiencing issues or have questions about our system status, 
              please don't hesitate to contact our support team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Support Channels</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">support@ziontechgroup.com</a></p>
                  <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
                  <p>Status Updates: <a href="/status" className="text-cyan-400 hover:text-cyan-300">status.ziontechgroup.com</a></p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Response Times</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Critical Issues: <span className="text-green-400">15 minutes</span></p>
                  <p>High Priority: <span className="text-yellow-400">1 hour</span></p>
                  <p>Normal Priority: <span className="text-blue-400">4 hours</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
=======
      <SEOOptimizer 
        title="System Health Monitoring - IT Infrastructure Health Management | Zion Tech Group"
        description="Comprehensive system health monitoring with real-time alerts, automated remediation, and performance optimization. Ensure 99.9% uptime with our health management solutions."
        keywords="system health monitoring, IT health management, infrastructure monitoring, system performance, automated remediation, uptime monitoring"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">System Health Monitoring</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              System Health Monitoring
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive system health monitoring with real-time alerts, automated remediation, 
              and performance optimization. Ensure 99.9% uptime with our health management solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Activity className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">1,000+ Systems Monitored</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99.9% Uptime Guarantee</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Get Health Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Health Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Health Metrics
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real-time performance indicators that demonstrate our commitment to system health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-xl font-semibold text-white mb-2">{metric.metric}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Health Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to maintain optimal system health and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Health Management Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional health management solutions tailored to your infrastructure needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust us with their system health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your System Health?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get a free health assessment and discover how we can improve your system reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Activity className="w-5 h-5 mr-2" />
              Get Health Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003

      <Footer />
    </div>
  );
<<<<<<< HEAD
};

export default HealthPage;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-04b6
=======
}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Our support team is available 24/7 to assist with any issues or questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthPage;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
