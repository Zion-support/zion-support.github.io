'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Zap, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Cloud, Database, Cpu, Lock } from 'lucide-react';

const AIContentDeliveryNetworkPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global CDN Network',
      description: 'Worldwide content delivery network with edge servers in 100+ locations',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Intelligent content optimization and caching using advanced AI algorithms',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'DDoS protection, SSL encryption, and comprehensive security features',
      color: 'text-green-400'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling CDN infrastructure that adapts to your traffic patterns',
      color: 'text-orange-400'
    }
  ];

  const benefits = [
    '99.99% uptime guarantee',
    'Global edge server network',
    'AI-powered content optimization',
    'Advanced security and DDoS protection',
    'Real-time analytics and monitoring',
    'Easy integration and setup',
    'Cost-effective pricing plans',
    '24/7 technical support'
  ];

  const useCases = [
    {
      title: 'Website Acceleration',
      description: 'Dramatically improve website loading speeds and user experience',
      icon: Zap
    },
    {
      title: 'Video Streaming',
      description: 'High-quality video streaming with adaptive bitrate optimization',
      icon: Globe
    },
    {
      title: 'API Acceleration',
      description: 'Fast API responses with intelligent caching and optimization',
      icon: Database
    },
    {
      title: 'Mobile Optimization',
      description: 'Optimized content delivery for mobile devices and applications',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Content Delivery Network | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CDN solutions for global content delivery, optimization, and acceleration. Improve performance and user experience with our intelligent CDN." />
        <meta name="keywords" content="AI CDN, content delivery network, global CDN, website acceleration, video streaming, CDN optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Content Delivery
              </span>
              <br />
              <span className="text-white">Network</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your content delivery with our AI-powered CDN. 
              Global edge network, intelligent optimization, and advanced security for optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced CDN Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered CDN provides intelligent content delivery and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven content delivery for optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI CDN can accelerate your content delivery across different applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our experts to discuss your CDN needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentDeliveryNetworkPage;