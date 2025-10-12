'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const IoTEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Edge Analytics',
      description: 'Real-time data processing and AI inference at the edge for instant decision making'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Ultra-Low Latency',
      description: 'Process data locally with minimal latency for critical applications'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure Edge Networks',
      description: 'End-to-end encryption and secure communication protocols'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Distributed Architecture',
      description: 'Scalable edge computing infrastructure across multiple locations'
    }
  ];

  const benefits = [
    'Reduced latency and improved performance',
    'Lower bandwidth costs and data transfer',
    'Enhanced data privacy and security',
    'Real-time processing and analytics',
    'Offline capability and reliability',
    'Scalable edge infrastructure',
    'AI/ML model deployment at edge',
    'Cost-effective data processing'
  ];

  return (
    <>
      <Helmet>
        <title>IoT Edge Computing | Zion Tech Group</title>
        <meta name="description" content="Advanced IoT edge computing solutions for real-time data processing, AI inference, and distributed computing infrastructure." />
        <meta name="keywords" content="IoT edge computing, edge analytics, real-time processing, distributed computing, AI at edge" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IoT Edge
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Computing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Process data at the edge with ultra-low latency, real-time analytics, and AI-powered insights for your IoT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful edge computing solutions designed for modern IoT applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your IoT infrastructure with the power of edge computing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index + 4} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Deploy Edge Computing?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how edge computing can transform your IoT infrastructure and business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IoTEdgeComputingPage;
