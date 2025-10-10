'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Cpu,
  Cloud,
  Zap,
  Shield,
  Globe,
  Database,
  Wifi,
  Smartphone,
  Car,
  Factory,
  Home,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Target,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Settings,
  BarChart,
  Activity
} from 'lucide-react';

const EdgeComputingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonitoring, setIsMonitoring] = useState(true);

  const features = [
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Process data at the edge for real-time decision making and instant response.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Instant response', 'Local decision making']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Keep sensitive data local and reduce attack surface with edge security.',
      benefits: ['Data localization', 'Reduced attack surface', 'Local encryption', 'Compliance']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Deploy edge nodes worldwide for optimal performance and coverage.',
      benefits: ['Worldwide coverage', 'Local processing', 'Reduced bandwidth', 'Global scale']
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Process and analyze data locally before sending to the cloud.',
      benefits: ['Local analytics', 'Data filtering', 'Intelligent routing', 'Bandwidth optimization']
    }
  ];

  const useCases = [
    {
      icon: Factory,
      title: 'Industrial IoT',
      description: 'Real-time monitoring and control of manufacturing processes',
      benefits: ['Predictive maintenance', 'Quality control', 'Process optimization', 'Safety monitoring'],
      industry: 'Manufacturing'
    },
    {
      icon: Car,
      title: 'Autonomous Vehicles',
      description: 'Edge computing for real-time vehicle decision making',
      benefits: ['Real-time navigation', 'Collision avoidance', 'Traffic optimization', 'Safety systems'],
      industry: 'Automotive'
    },
    {
      icon: Home,
      title: 'Smart Cities',
      description: 'Intelligent infrastructure management and citizen services',
      benefits: ['Traffic management', 'Energy optimization', 'Public safety', 'Environmental monitoring'],
      industry: 'Government'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Real-time patient monitoring and medical device management',
      benefits: ['Patient monitoring', 'Medical imaging', 'Emergency response', 'Health analytics'],
      industry: 'Healthcare'
    }
  ];

  const edgeNodes = [
    { location: 'New York', status: 'active', latency: '2ms', capacity: '95%' },
    { location: 'London', status: 'active', latency: '3ms', capacity: '87%' },
    { location: 'Tokyo', status: 'active', latency: '1ms', capacity: '92%' },
    { location: 'Sydney', status: 'maintenance', latency: '5ms', capacity: '45%' },
    { location: 'São Paulo', status: 'active', latency: '4ms', capacity: '78%' },
    { location: 'Mumbai', status: 'active', latency: '2ms', capacity: '89%' }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '50% Faster Response',
      description: 'Achieve ultra-low latency with edge processing'
    },
    {
      icon: Shield,
      title: '99.9% Uptime',
      description: 'Reliable edge infrastructure with redundancy'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Edge nodes in 50+ locations worldwide'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process data locally for instant decisions'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Edge computing has transformed our manufacturing operations. We now have real-time visibility and control over our processes.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'AutoDrive Systems',
      role: 'VP of Engineering',
      content: 'The edge infrastructure has enabled us to achieve the low latency required for autonomous vehicle operations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SmartCity Solutions',
      role: 'Head of Technology',
      content: 'Edge computing has revolutionized our smart city initiatives, providing real-time insights and control.',
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400';
      case 'maintenance':
        return 'text-yellow-400';
      case 'offline':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'maintenance':
        return <Settings className="h-4 w-4 text-yellow-400" />;
      case 'offline':
        return <Activity className="h-4 w-4 text-red-400" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Edge Computing - Zion Tech Group | Real-time Processing Solutions</title>
        <meta name="description" content="Transform your business with edge computing solutions. Achieve ultra-low latency, real-time processing, and enhanced security with our edge infrastructure." />
        <meta name="keywords" content="edge computing, real-time processing, low latency, IoT, industrial automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Edge Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Process data at the edge for ultra-low latency, real-time decision making, 
              and enhanced security. Transform your business with edge computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Cpu className="mr-2 h-5 w-5" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart },
              { id: 'features', label: 'Features', icon: Cpu },
              { id: 'use-cases', label: 'Use Cases', icon: Factory },
              { id: 'monitoring', label: 'Live Monitoring', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Edge computing brings computation and data storage closer to the sources of data, 
                enabling real-time processing and decision making.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Tab */}
      {activeTab === 'features' && (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our edge computing solutions provide the performance, security, and reliability 
                you need for mission-critical applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Tab */}
      {activeTab === 'use-cases' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how edge computing is transforming industries and enabling new possibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                      <p className="text-gray-400">{useCase.industry}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Monitoring Tab */}
      {activeTab === 'monitoring' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Live Edge Monitoring
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor your edge infrastructure in real-time with our comprehensive monitoring dashboard.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Edge Node Status</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    <span className="text-gray-300">
                      {isMonitoring ? 'Monitoring Active' : 'Monitoring Paused'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMonitoring(!isMonitoring)}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                  >
                    {isMonitoring ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isMonitoring ? 'Pause' : 'Resume'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {edgeNodes.map((node, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{node.location}</h4>
                      {getStatusIcon(node.status)}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Status:</span>
                        <span className={getStatusColor(node.status)}>
                          {node.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Latency:</span>
                        <span className="text-white">{node.latency}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Capacity:</span>
                        <span className="text-white">{node.capacity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our edge computing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how edge computing can revolutionize your operations and drive unprecedented performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Cpu className="mr-2 h-5 w-5" />
                Get Started
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdgeComputingPage;