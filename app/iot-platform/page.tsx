'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Wifi,
  Shield,
  Cpu,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
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
  Activity,
  Factory,
  Car,
  Home,
  Heart,
  Building,
  Smartphone
} from 'lucide-react';

const IoTPlatformPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonitoring, setIsMonitoring] = useState(true);

  const features = [
    {
      icon: Wifi,
      title: 'Device Connectivity',
      description: 'Seamless connectivity for millions of IoT devices with multiple protocol support.',
      benefits: ['Multi-protocol support', 'Device management', 'Firmware updates', 'Remote diagnostics']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'End-to-end security with device authentication and data encryption.',
      benefits: ['Device authentication', 'Data encryption', 'Secure communication', 'Privacy protection']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Scalable data storage and processing for massive IoT datasets.',
      benefits: ['Time-series data', 'Real-time processing', 'Data analytics', 'Machine learning']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process IoT data in real-time for immediate insights and actions.',
      benefits: ['Stream processing', 'Event handling', 'Alert systems', 'Automated responses']
    }
  ];

  const useCases = [
    {
      icon: Factory,
      title: 'Industrial IoT',
      description: 'Smart manufacturing and industrial automation solutions',
      benefits: ['Predictive maintenance', 'Quality control', 'Process optimization', 'Safety monitoring'],
      industry: 'Manufacturing'
    },
    {
      icon: Car,
      title: 'Connected Vehicles',
      description: 'Vehicle telematics and fleet management solutions',
      benefits: ['Fleet tracking', 'Driver behavior', 'Maintenance alerts', 'Route optimization'],
      industry: 'Automotive'
    },
    {
      icon: Home,
      title: 'Smart Buildings',
      description: 'Intelligent building management and energy optimization',
      benefits: ['Energy management', 'Occupancy sensing', 'Climate control', 'Security systems'],
      industry: 'Real Estate'
    },
    {
      icon: Heart,
      title: 'Healthcare IoT',
      description: 'Medical device connectivity and patient monitoring',
      benefits: ['Patient monitoring', 'Medical devices', 'Health tracking', 'Emergency alerts'],
      industry: 'Healthcare'
    }
  ];

  const platformComponents = [
    {
      icon: Wifi,
      title: 'Device Gateway',
      description: 'Secure device connectivity and protocol translation',
      features: ['Protocol support', 'Device onboarding', 'Data validation', 'Edge processing']
    },
    {
      icon: Database,
      title: 'Data Platform',
      description: 'Scalable data storage and processing infrastructure',
      features: ['Time-series DB', 'Data lakes', 'Stream processing', 'Analytics engine']
    },
    {
      icon: BarChart,
      title: 'Analytics Engine',
      description: 'AI-powered analytics and machine learning capabilities',
      features: ['Real-time analytics', 'Predictive modeling', 'Anomaly detection', 'Custom algorithms']
    },
    {
      icon: Settings,
      title: 'Management Console',
      description: 'Comprehensive device and platform management interface',
      features: ['Device management', 'User administration', 'Monitoring', 'Configuration']
    }
  ];

  const iotMetrics = [
    { label: 'Connected Devices', value: '10M+', trend: '+25%' },
    { label: 'Data Points/Day', value: '1B+', trend: '+40%' },
    { label: 'Uptime', value: '99.9%', trend: '+0.1%' },
    { label: 'Response Time', value: '< 50ms', trend: '-20%' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Manufacturing',
      role: 'CTO',
      content: 'The IoT platform has transformed our manufacturing operations. We now have complete visibility and control over our production processes.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Fleet Management Inc',
      role: 'VP of Technology',
      content: 'Outstanding platform for fleet management. The real-time tracking and analytics have improved our operational efficiency significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Smart City Solutions',
      role: 'Head of Technology',
      content: 'The IoT platform has enabled us to build comprehensive smart city solutions. The scalability and reliability are exceptional.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Platform - Zion Tech Group | Internet of Things Solutions</title>
        <meta name="description" content="Build and scale your IoT solutions with our comprehensive platform. Device connectivity, data management, analytics, and security for the Internet of Things." />
        <meta name="keywords" content="IoT platform, Internet of Things, device connectivity, IoT analytics, smart devices, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                IoT Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and scale your Internet of Things solutions with our comprehensive platform. 
              Connect, manage, and analyze millions of devices with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Wifi className="mr-2 h-5 w-5" />
                Explore Platform
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
              { id: 'features', label: 'Features', icon: Wifi },
              { id: 'use-cases', label: 'Use Cases', icon: Factory },
              { id: 'components', label: 'Components', icon: Settings }
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
                IoT Platform Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive IoT platform provides everything you need to build, deploy, 
                and scale your Internet of Things solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {iotMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-300 mb-1">{metric.label}</p>
                  <p className="text-green-400 text-sm">{metric.trend}</p>
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
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform provides the connectivity, security, and analytics you need 
                to build successful Internet of Things solutions.
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
                Discover how our IoT platform is transforming industries and enabling new possibilities.
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

      {/* Components Tab */}
      {activeTab === 'components' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Components
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform consists of integrated components that work together to provide 
                a complete solution for your Internet of Things needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformComponents.map((component, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <component.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{component.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{component.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {component.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
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

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our IoT platform.
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
              Ready to Build Your IoT Solution?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our IoT platform can help you connect, manage, and analyze 
              your devices to create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Wifi className="mr-2 h-5 w-5" />
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

export default IoTPlatformPage;