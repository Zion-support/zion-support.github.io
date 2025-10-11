'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Shield, Zap, Target, BarChart, Brain, Cloud } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AiApiManagementPage() {
  const features = [
    {
      icon: Shield,
      title: 'API Security',
      description: 'Comprehensive security measures to protect your APIs from threats and unauthorized access.',
      benefits: ['Authentication', 'Authorization', 'Rate Limiting', 'Encryption']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize API performance for maximum speed and reliability.',
      benefits: ['Caching', 'Load Balancing', 'Response Optimization', 'Monitoring']
    },
    {
      icon: Target,
      title: 'API Design',
      description: 'Well-designed APIs that are intuitive, scalable, and maintainable.',
      benefits: ['RESTful Design', 'GraphQL Support', 'Documentation', 'Versioning']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive monitoring and analytics for your API ecosystem.',
      benefits: ['Real-time Monitoring', 'Usage Analytics', 'Error Tracking', 'Performance Metrics']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your API infrastructure.',
      benefits: ['Machine Learning APIs', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Management',
      description: 'Scalable cloud-based API management solutions.',
      benefits: ['Auto-scaling', 'Global Distribution', 'Disaster Recovery', 'Cost Optimization']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'API Uptime' },
    { number: '50ms', label: 'Average Response Time' },
    { number: '1000+', label: 'APIs Managed' },
    { number: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Professional AI API management services and solutions for modern applications." />
        <meta name="keywords" content="ai api management, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive API management solutions powered by artificial intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Why Choose Our API Management?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise-Grade Security</h3>
                <p className="text-gray-300 mb-4">
                  Protect your APIs with industry-leading security measures and compliance standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    OAuth 2.0 & JWT Authentication
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Rate Limiting & Throttling
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    End-to-End Encryption
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Leverage AI to automatically optimize your API performance and user experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Intelligent Caching
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Predictive Scaling
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Anomaly Detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}