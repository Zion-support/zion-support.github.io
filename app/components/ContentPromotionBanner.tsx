'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Star, Users } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap
    },
    {
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results.',
      icon: Star
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards.',
      icon: Shield
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI and IT solutions to drive growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-purple-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">99.9%</div>
              <div className="text-purple-100">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-purple-100">Support</div>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;