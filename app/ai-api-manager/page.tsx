'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent API Management',
      description: 'AI-driven API management with automated optimization and intelligent routing'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with AI-powered threat detection and prevention'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast API responses with intelligent caching and optimization'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Worldwide API distribution with edge computing capabilities'
    }
  ];

  const benefits = [
    'Automated API discovery and documentation',
    'Intelligent load balancing and failover',
    'Real-time performance monitoring',
    'AI-driven security threat detection',
    'Automatic API versioning and migration',
    'Comprehensive analytics and insights',
    'Easy integration with existing systems',
    '24/7 monitoring and support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Manager - Zion Tech Group | Intelligent API Solutions</title>
        <meta name="description" content="Advanced AI-powered API management solutions by Zion Tech Group. Intelligent routing, security, and optimization for your APIs." />
        <meta name="keywords" content="AI API manager, API gateway, microservices, API security, API optimization" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI API Manager
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your API infrastructure with intelligent management solutions powered by artificial intelligence.
            Optimize performance, enhance security, and scale effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Intelligent API Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered API management platform provides comprehensive solutions for modern applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our AI API Manager
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence in API management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Advanced Capabilities</h3>
              <p className="text-gray-300 mb-6">
                Our AI-driven API management platform uses machine learning algorithms to automatically 
                optimize API performance, detect anomalies, and provide intelligent insights for better 
                decision making.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your API Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your API management needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all duration-200 flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAPIManagerPage;