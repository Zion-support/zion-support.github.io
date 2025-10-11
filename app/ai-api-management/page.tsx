'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Settings} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'API Gateway Management',
      description: 'Centralized API gateway with intelligent routing and load balancing.',
      benefits: ['Centralized management', 'Load balancing', 'Traffic routing', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description: 'Advanced security features including authentication, authorization, and encryption.',
      benefits: ['OAuth 2.0', 'JWT tokens', 'Rate limiting', 'API encryption']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and monitoring for API performance and usage.',
      benefits: ['Usage analytics', 'Performance metrics', 'Error tracking', 'Real-time monitoring']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'AI-driven optimization for API performance and resource allocation.',
      benefits: ['Smart caching', 'Predictive scaling', 'Auto-optimization', 'Intelligent routing']
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'High-performance real-time API processing and response.',
      benefits: ['Low latency', 'High throughput', 'Real-time updates', 'Instant responses']
    },
    {
      icon: Target,
      title: 'Developer Experience',
      description: 'Enhanced developer experience with comprehensive documentation and tools.',
      benefits: ['API documentation', 'SDK generation', 'Testing tools', 'Developer portal']
    }
  ];

  const services = [
    {
      title: 'API Strategy & Design',
      description: 'Strategic planning and design of API architectures for your business needs.',
      icon: Brain,
      benefits: ['Architecture design', 'API strategy', 'Best practices', 'Implementation planning']
    },
    {
      title: 'API Development',
      description: 'Custom API development with modern technologies and best practices.',
      icon: Settings,
      benefits: ['Custom APIs', 'RESTful design', 'GraphQL support', 'Microservices']
    },
    {
      title: 'API Integration',
      description: 'Seamless integration of APIs with existing systems and third-party services.',
      icon: Zap,
      benefits: ['System integration', 'Third-party APIs', 'Data synchronization', 'Workflow automation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions for seamless integration and optimal performance." />
        <meta name="keywords" content="AI API management, API gateway, API integration, artificial intelligence, API security" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">API Management</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline your API ecosystem with intelligent management, security, and optimization powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">API Management Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive API management solutions powered by artificial intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end API management solutions for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your APIs?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our AI API management platform today and transform your API ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiApiManagementPage;