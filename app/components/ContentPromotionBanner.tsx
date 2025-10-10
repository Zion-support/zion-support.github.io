'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment with local support and compliance'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-1">🚀 New AI Solutions Available</h3>
              <p className="text-sm opacity-90">Transform your business with cutting-edge AI technology</p>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <feature.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center">
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors duration-200">
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;