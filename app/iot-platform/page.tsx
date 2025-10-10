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
      title: 'Device Management',
      description: 'Comprehensive IoT device management with remote monitoring, updates, and configuration.',
      benefits: ['Remote monitoring', 'OTA updates', 'Device configuration']
    },
    {
      icon: Zap,
      title: 'Real-time Data Processing',
      description: 'Process IoT data in real-time with edge computing and cloud analytics capabilities.',
      benefits: ['Real-time processing', 'Edge computing', 'Cloud analytics']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of IoT devices and networks with instant alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'Network health']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Easily scale your IoT platform as your device fleet grows with millions of connected devices.',
      benefits: ['Auto-scaling', 'Device onboarding', 'Fleet management']
    },
    {
      icon: Shield,
      title: 'IoT Security',
      description: 'Comprehensive security measures designed specifically for IoT environments and devices.',
      benefits: ['Device security', 'Data encryption', 'Access controls']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Advanced analytics and insights from your IoT data to optimize operations and performance.',
      benefits: ['Data analytics', 'Predictive insights', 'Performance optimization']
    }
  ];

  const benefits = [
    'Connect and manage millions of devices',
    'Process data in real-time at the edge',
    'Ensure 99.9% device uptime',
    'Scale infrastructure automatically',
    'Protect devices with enterprise security',
    'Generate actionable insights from data'
  ];

  return (
    <>
      <Helmet>
        <title>IoT Platform Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT platform solutions for device management, real-time processing, and analytics. Scale your IoT operations efficiently." />
        <meta name="keywords" content="IoT platform, device management, real-time processing, IoT analytics, connected devices" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  IoT Platform Solutions
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Connect, manage, and analyze millions of IoT devices with our comprehensive platform. 
                  Scale your IoT operations with confidence and security.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-orange-500/20 px-4 py-2 rounded-lg">
                    <Wifi className="w-5 h-5 text-orange-400" />
                    <span className="text-white font-medium">Device Management</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Real-time Processing</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Enterprise Security</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Comprehensive IoT Platform Features
                  </h2>
                  <p className="text-xl text-gray-300">
                    Everything you need to build, deploy, and scale IoT solutions
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Transform Your IoT Operations
                  </h2>
                  <p className="text-xl text-gray-300">
                    Achieve measurable improvements in efficiency, reliability, and scalability
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center hover:from-slate-700 hover:to-slate-600 transition-all">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-600">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Build Your IoT Platform?
                </h2>
                <p className="text-xl text-orange-100 mb-8">
                  Start your IoT transformation today and connect the world around you
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Get Started
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Contact Expert
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IoTPlatformPage;