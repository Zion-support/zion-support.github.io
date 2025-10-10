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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform provides everything you need to build, deploy, and scale 
              Internet of Things solutions for any industry or use case.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your IoT Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your IoT platform today. Get started with a free consultation 
            and discover how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTPlatformPage;
