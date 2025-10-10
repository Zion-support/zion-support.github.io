'use client';
import React from 'react';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      text: '4.9/5 Customer Rating'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      text: '10,000+ Happy Customers'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      text: '99.9% Uptime Guarantee'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                {feature.icon}
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
