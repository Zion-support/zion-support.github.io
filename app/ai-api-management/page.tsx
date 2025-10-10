'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Shield, Zap, Globe, Database, Lock, Settings, BarChart, Users, CheckCircle } from 'lucide-react';

const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'API Development',
      description: 'Custom API development with modern frameworks and best practices',
      benefits: ['RESTful APIs', 'GraphQL endpoints', 'Microservices architecture', 'API versioning']
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description: 'Enterprise-grade security with OAuth, JWT, and advanced authentication',
      benefits: ['OAuth 2.0', 'JWT tokens', 'Rate limiting', 'API key management']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'High-performance APIs with caching, load balancing, and monitoring',
      benefits: ['Redis caching', 'CDN integration', 'Load balancing', 'Performance monitoring']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy your APIs across multiple regions for optimal performance',
      benefits: ['Multi-region deployment', 'Edge computing', 'Global CDN', '99.9% uptime']
    }
  ];

  const services = [
    {
      title: 'API Design & Architecture',
      description: 'Strategic API design following industry best practices and standards',
      icon: Settings
    },
    {
      title: 'API Gateway Management',
      description: 'Centralized API management with routing, monitoring, and security',
      icon: Database
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive documentation with interactive testing capabilities',
      icon: BarChart
    },
    {
      title: 'API Testing & QA',
      description: 'Thorough testing and quality assurance for reliable APIs',
      icon: CheckCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Professional AI API management services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai api management, API development, microservices, API gateway, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI API Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI API management services powered by advanced AI and cutting-edge technology.
                Build, deploy, and manage APIs that scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </a>
                <a
                  href="/about"
                  className="inline-block border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our API Management Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions for API management and optimization</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record in API development and management</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring for your APIs</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you build and manage powerful APIs that drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Today
                </a>
                <a
                  href="/portfolio"
                  className="inline-block border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAPIManagementPage;