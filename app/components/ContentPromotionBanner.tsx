'use client';
import React from 'react';
import { ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'High-quality content that engages and converts'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional writers and content strategists'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: '100% Original',
      description: 'Plagiarism-free content guaranteed'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transform Your Content Strategy
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Get professional content that drives engagement and delivers results for your business.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;