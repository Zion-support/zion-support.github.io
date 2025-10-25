'use client';

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, Brain, BarChart, Settings, Zap, Users } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure API Gateway',
      description: 'Enterprise-grade security for all your API endpoints.',
      benefits: ['Authentication', 'Authorization', 'Rate limiting', 'Encryption']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast API responses with intelligent caching.',
      benefits: ['Fast response times', 'Intelligent caching', 'Load balancing', 'Auto-scaling']
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Deploy your APIs across multiple regions worldwide.',
      benefits: ['Multi-region deployment', 'CDN integration', 'Edge computing', 'Low latency']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive monitoring and analytics for your APIs.',
      benefits: ['Real-time metrics', 'Performance tracking', 'Error monitoring', 'Usage analytics']
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI API Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline and secure your API infrastructure with intelligent management tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful API Management</h2>
              <p className="text-xl text-gray-300">Everything you need to manage and secure your APIs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-blue-400 mb-4">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIApiManagementPage;