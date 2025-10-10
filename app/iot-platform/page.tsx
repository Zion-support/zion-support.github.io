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
      description: 'Connect and manage millions of IoT devices with reliable, secure connectivity solutions.',
      benefits: ['Device management', 'Secure connectivity', 'Protocol support']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'End-to-end security with device authentication, encryption, and privacy protection.',
      benefits: ['Device authentication', 'Data encryption', 'Privacy controls']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Real-time data processing and analytics for IoT devices and sensor networks.',
      benefits: ['Real-time processing', 'Predictive analytics', 'Data visualization']
    },
    {
      icon: Clock,
      title: 'Real-Time Monitoring',
      description: 'Monitor device status, performance, and health in real-time with automated alerts.',
      benefits: ['Real-time monitoring', 'Automated alerts', 'Performance tracking']
    },
    {
      icon: Users,
      title: 'Fleet Management',
      description: 'Manage large fleets of IoT devices with centralized control and monitoring.',
      benefits: ['Fleet tracking', 'Centralized control', 'Bulk operations']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data at the edge for low-latency applications and reduced bandwidth usage.',
      benefits: ['Low latency', 'Edge processing', 'Bandwidth optimization']
    }
  ];

  const benefits = [
    'Reduce operational costs by 50%',
    'Improve device uptime by 95%',
    'Scale to millions of devices',
    'Real-time data insights',
    'Enhanced security and compliance',
    'Faster time to market'
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Optimize production with IoT sensors and real-time monitoring',
      icon: '🏭'
    },
    {
      title: 'Smart Cities',
      description: 'Build intelligent city infrastructure with connected devices',
      icon: '🏙️'
    },
    {
      title: 'Agriculture',
      description: 'Monitor crops and livestock with precision agriculture IoT',
      icon: '🌾'
    },
    {
      title: 'Healthcare',
      description: 'Enable remote patient monitoring with medical IoT devices',
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Platform - Zion Tech Group | Internet of Things Solutions</title>
        <meta name="description" content="Build and scale IoT solutions with our comprehensive platform. Connect, manage, and analyze millions of devices with secure, reliable IoT technology." />
        <meta name="keywords" content="IoT platform, internet of things, device management, IoT analytics, smart devices, edge computing, IoT security" />
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
            Build and scale IoT solutions with our comprehensive platform. Connect, manage, and analyze 
            millions of devices with secure, reliable Internet of Things technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get IoT Platform Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              IoT Platform Features
            </h2>
            <h2 className="text-4xl font-bold text-white mb-4">IoT Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT solutions for modern connected applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              IoT platform solutions for every industry and application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your IoT Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your IoT platform today. Get started with a free consultation 
            and discover how we can help you succeed.
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your IoT Solution?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Get started with our IoT platform today and connect your devices to the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
</div>
  );
};

export default IoTPlatformPage;