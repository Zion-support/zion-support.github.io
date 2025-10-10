'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    'AI-Powered Solutions',
    '24/7 Expert Support',
    'Enterprise Security',
    'Proven Results'
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-semibold">Trusted by 500+ Companies</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Transform Your Business with Advanced AI & IT Solutions
          </h2>
          
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-white text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;