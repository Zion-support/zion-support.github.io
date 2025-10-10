'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    '24/7 Expert Support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              🚀 Transform Your Business with AI
            </h2>
            <p className="text-gray-300 mb-4">
              Join 1000+ companies already using our AI solutions to boost productivity and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;