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
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">New AI Solutions Available</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-white/90 text-sm">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/pricing"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;