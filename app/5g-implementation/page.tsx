'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Brain, Cloud, Database, Smartphone, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage = () => {
  const services = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization services.',
      features: ['Network planning', 'Tower installation', 'Spectrum optimization', 'Coverage analysis'],
      pricing: 'Starting at $50,000'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Edge Computing Solutions',
      description: 'Ultra-low latency edge computing infrastructure for real-time applications.',
      features: ['Edge servers', 'Data processing', 'Real-time analytics', 'IoT integration'],
      pricing: 'Starting at $25,000'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: 'IoT Platform Development',
      description: 'Comprehensive IoT solutions leveraging 5G connectivity.',
      features: ['Device management', 'Data collection', 'Analytics dashboard', 'Remote monitoring'],
      pricing: 'Starting at $35,000'
    }
  ];

  const useCases = [
    {
      icon: '🏭',
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of industrial processes with 5G connectivity.'
    },
    {
      icon: '🏥',
      title: 'Telemedicine',
      description: 'High-quality video consultations and remote patient monitoring.'
    },
    {
      icon: '🚗',
      title: 'Autonomous Vehicles',
      description: 'Ultra-reliable communication for self-driving cars and traffic management.'
    },
    {
      icon: '🏙️',
      title: 'Smart Cities',
      description: 'Connected infrastructure for efficient urban management and services.'
    },
    {
      icon: '🎮',
      title: 'AR/VR Applications',
      description: 'Immersive experiences with ultra-low latency and high bandwidth.'
    },
    {
      icon: '📱',
      title: 'Mobile Applications',
      description: 'Next-generation mobile apps leveraging 5G capabilities.'
    }
  ];

  const benefits = [
    'Ultra-fast data transmission (up to 10 Gbps)',
    'Ultra-low latency (1ms or less)',
    'Massive device connectivity (1M devices/km²)',
    'Enhanced reliability and security',
    'Energy-efficient network operations',
    'Future-proof technology infrastructure'
  ];

  const stats = [
    { number: '10x', label: 'Faster than 4G' },
    { number: '1ms', label: 'Ultra-low Latency' },
    { number: '99.9%', label: 'Network Uptime' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G implementation services including network infrastructure, IoT solutions, edge computing, and mobile applications. Transform your business with ultra-fast connectivity." />
        <meta name="keywords" content="5G implementation, 5G networks, edge computing, IoT solutions, 5G mobile apps, ultra-fast connectivity" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Next-Generation 5G Implementation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with ultra-fast 5G connectivity, edge computing, and IoT solutions. 
              Experience the future of wireless technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our 5G Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">5G Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our 5G Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Expertise</h3>
                <p className="text-gray-300">Experienced team with successful 5G deployments across various industries and use cases.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300">Latest 5G equipment and software solutions for optimal performance and reliability.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Support</h3>
                <p className="text-gray-300">24/7 support and maintenance services to ensure your 5G network operates flawlessly.</p>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">5G Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Embrace 5G Technology?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with ultra-fast 5G connectivity and next-generation wireless solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiveGImplementationPage;