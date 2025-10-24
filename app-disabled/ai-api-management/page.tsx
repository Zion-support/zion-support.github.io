'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'API Gateway',
      description: 'Centralized API gateway for managing, monitoring, and securing all your APIs.',
      benefits: ['Centralized management', 'Traffic routing', 'Load balancing', 'Rate limiting']
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description: 'Advanced security features including OAuth, JWT, and API key management.',
      benefits: ['OAuth 2.0', 'JWT tokens', 'API keys', 'Rate limiting']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and monitoring for API performance and usage.',
      benefits: ['Real-time metrics', 'Usage analytics', 'Performance monitoring', 'Error tracking']
    },
    {
      icon: Users,
      title: 'Developer Portal',
      description: 'Self-service developer portal for API documentation and testing.',
      benefits: ['API documentation', 'Interactive testing', 'SDK generation', 'Developer onboarding']
    },
    {
      icon: CheckCircle,
      title: 'API Lifecycle Management',
      description: 'Complete API lifecycle management from design to retirement.',
      benefits: ['Version control', 'Deprecation management', 'Change tracking', 'Migration tools']
    },
    {
      icon: ArrowRight,
      title: 'Integration Tools',
      description: 'Powerful integration tools for connecting APIs with existing systems.',
      benefits: ['Data transformation', 'Protocol conversion', 'Message routing', 'Event streaming']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management - Zion Tech Group | Advanced API Solutions</title>
        <meta name="description" content="Streamline your API management with our AI-powered platform. Centralized gateway, security, analytics, and developer tools for modern API operations." />
        <meta name="keywords" content="API management, API gateway, API security, API analytics, developer portal, API lifecycle" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI API
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your API management with our AI-powered platform. Centralized gateway, 
              security, analytics, and developer tools for modern API operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced API Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered API management platform provides comprehensive tools for 
                managing, securing, and monitoring your APIs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-green-400 mr-3" />
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

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI API Management platform and streamline your API operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIApiManagementPage;
