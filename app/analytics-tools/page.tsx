'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const AnalyticsToolsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your data analysis and business intelligence'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Lightning-fast data processing and real-time analytics for optimal insights'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Worldwide deployment and support for international business analytics'
    }
  ];

  const benefits = [
    'Advanced AI-powered data analysis',
    'Real-time processing and insights',
    'Enterprise-grade security and compliance',
    'Scalable cloud infrastructure',
    'Custom dashboard creation',
    'Automated reporting and alerts',
    'Multi-source data integration',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Analytics Tools | Zion Tech Group</title>
        <meta name="description" content="Advanced analytics tools powered by AI for comprehensive business intelligence and data insights." />
        <meta name="keywords" content="analytics tools, business intelligence, data analysis, AI analytics, real-time insights" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Analytics Tools</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced analytics platform
            powered by artificial intelligence and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our analytics tools for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started with Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsToolsPage;
