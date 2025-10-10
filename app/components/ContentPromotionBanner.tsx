'use client';
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    'AI-powered solutions',
    '24/7 expert support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Transform Your Business with AI</h3>
        <p className="text-lg mb-6 text-white/90">
          Discover how our AI solutions can revolutionize your operations and drive growth.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 mr-2 text-white" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;