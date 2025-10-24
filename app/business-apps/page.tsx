'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const BusinessAppsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Business Apps',
      description: 'Advanced AI technology to enhance business applications and workflows'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international business applications'
    }
  ];

  const benefits = [
    '24/7 technical support',
    'Easy integration with existing systems',
    'Scalable cloud infrastructure',
    'Custom development solutions',
    'Cross-platform compatibility',
    'Enterprise-grade security',
    'Real-time monitoring and analytics',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Apps | Zion Tech Group</title>
        <meta name="description" content="Professional business applications by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="business apps, enterprise applications, custom software, business solutions, app development" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Business Apps</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive business applications
            powered by cutting-edge technology and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our business applications for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started with Business Apps
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessAppsPage;
