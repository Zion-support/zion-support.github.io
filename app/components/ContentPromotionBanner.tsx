'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    'Advanced AI technology',
    'Real-time processing',
    'Enterprise security',
    '24/7 support',
    'Easy integration',
    'Cost-effective pricing'
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">
              Discover Our Latest AI Solutions
            </h3>
            <p className="text-purple-100 mb-4">
              Transform your business with cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-300 mr-1" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="hidden md:block ml-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-purple-200">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;