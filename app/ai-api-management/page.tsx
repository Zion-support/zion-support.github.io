'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, Star, TrendingUp, Database, Cloud, Target, Globe, Brain, Cpu, Settings, Lock, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAPIManagementPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'API Security',
      description: 'Advanced security measures to protect your APIs from threats and unauthorized access.',
      benefits: ['Authentication & Authorization', 'Rate Limiting', 'Encryption', 'Monitoring']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize API performance for maximum speed and reliability.',
      benefits: ['Caching Strategies', 'Load Balancing', 'Response Optimization', 'Monitoring']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and monitoring for your API ecosystem.',
      benefits: ['Usage Analytics', 'Performance Metrics', 'Error Tracking', 'Real-time Alerts']
    },
    {
      icon: Users,
      title: 'Developer Experience',
      description: 'Tools and documentation to enhance developer productivity.',
      benefits: ['API Documentation', 'SDKs', 'Testing Tools', 'Developer Portal']
    }
  ];

  const services = [
    {
      title: 'API Gateway Management',
      description: 'Centralized management of all your APIs through a single gateway.',
      features: ['Traffic Management', 'Security Policies', 'Rate Limiting', 'Load Balancing']
    },
    {
      title: 'API Lifecycle Management',
      description: 'Complete lifecycle management from design to retirement.',
      features: ['API Design', 'Versioning', 'Testing', 'Deprecation']
    },
    {
      title: 'API Analytics Platform',
      description: 'Advanced analytics to understand API usage and performance.',
      features: ['Usage Tracking', 'Performance Monitoring', 'Business Intelligence', 'Custom Dashboards']
    },
    {
      title: 'API Security Services',
      description: 'Comprehensive security solutions for your API infrastructure.',
      features: ['Authentication', 'Authorization', 'Encryption', 'Threat Detection']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Professional AI API management services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai api management, API solutions, IT services, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI API Management
                <span className="block text-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional AI API management services powered by advanced AI and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
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
                API Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage and optimize your API ecosystem
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our API Management Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions for your API infrastructure
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI API management solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Us
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIAPIManagementPage;