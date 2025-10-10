'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your critical data'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Delivering measurable ROI and business growth'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex items-center space-x-2 text-white">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">New: AI-Powered Business Solutions</span>
            </div>
            <div className="flex items-center space-x-4 text-blue-100">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold text-sm transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;