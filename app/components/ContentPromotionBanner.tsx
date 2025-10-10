'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

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

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      description: 'Businesses trust our solutions'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-white text-sm font-medium">
            🚀 Transform your business with our AI-powered solutions. 
            <span className="font-semibold"> Get started today!</span>
            <a href="/contact" className="ml-2 text-cyan-200 hover:text-white underline">
              Learn More →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;