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
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your operations and drive unprecedented growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-purple-100">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4">
            Get Started Today
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;