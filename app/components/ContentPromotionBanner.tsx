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
    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Transform Your Business with AI & IT Solutions
            </h2>
            <p className="text-cyan-100 text-lg">
              Join 500+ companies already using our cutting-edge technology
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;