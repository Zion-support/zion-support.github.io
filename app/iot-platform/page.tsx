'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const IoTPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Device Connectivity',
      description: 'Connect and manage thousands of IoT devices with our robust connectivity platform.',
      benefits: ['Multi-protocol support', 'Device management', 'Real-time monitoring']
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process IoT data in real-time for immediate insights and automated responses.',
      benefits: ['Stream processing', 'Real-time analytics', 'Automated actions']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of IoT devices and systems with intelligent alerting.',
      benefits: ['Continuous monitoring', 'Smart alerts', 'Predictive maintenance']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security for IoT devices and data with end-to-end encryption.',
      benefits: ['End-to-end encryption', 'Device authentication', 'Data privacy']
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description: 'Scale your IoT platform to handle millions of devices and data points.',
      benefits: ['Horizontal scaling', 'Load balancing', 'High availability']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Gain insights from IoT data with machine learning and predictive analytics.',
      benefits: ['ML-powered insights', 'Predictive analytics', 'Custom dashboards']
    }
  ];

  const benefits = [
    'Reduce operational costs by 60%',
    'Improve device uptime by 95%',
    'Enable predictive maintenance',
    'Enhance data security',
    'Scale to millions of devices',
    'Real-time insights and control'
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Optimize production with IoT sensors and real-time monitoring',
      icon: '🏭'
    },
    {
      title: 'Smart Cities',
      description: 'Build intelligent city infrastructure with IoT solutions',
      icon: '🏙️'
    },
    {
      title: 'Agriculture',
      description: 'Monitor crops and livestock with precision IoT sensors',
      icon: '🌾'
    },
    {
      title: 'Healthcare',
      description: 'Enable remote patient monitoring with IoT devices',
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Platform Solutions - Zion Tech Group | Internet of Things</title>
        <meta name="description" content="Build and scale IoT solutions with our comprehensive platform. Device connectivity, real-time processing, and advanced analytics for your IoT projects." />
        <meta name="keywords" content="IoT platform, Internet of Things, device connectivity, IoT analytics, smart devices, IoT management" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IoT Platform
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build and scale IoT solutions with our comprehensive platform. Connect devices, 
            process data in real-time, and gain valuable insights from your IoT ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get IoT Platform Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c4b3
          </div>
        </div>
      </section>

      {/* Features Section */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              IoT Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform supports a wide range of industries and applications, 
              from smart manufacturing to connected cities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of a comprehensive IoT platform designed for scale, 
              security, and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default PagePage;