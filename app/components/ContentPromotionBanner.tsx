'use client';
import React from 'react';
import { ArrowRight, Star, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-5 h-5 fill-current" />
          <span className="text-sm font-medium">Limited Time Offer</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Business with AI
        </h2>
        
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Get a free consultation and discover how our AI solutions can increase your efficiency by 300% and reduce costs by 50%.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+13024640950"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Call: (302) 464-0950
          </a>
          
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-8 text-sm opacity-90">
          <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;