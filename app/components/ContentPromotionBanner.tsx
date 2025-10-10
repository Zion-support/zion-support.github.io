'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence for your business'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '300% ROI and 95% process automation'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center text-white">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-semibold">Trusted by 500+ Companies Worldwide</span>
            </div>
            <div className="flex items-center text-cyan-100">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">99.9% Uptime Guarantee</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-cyan-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;