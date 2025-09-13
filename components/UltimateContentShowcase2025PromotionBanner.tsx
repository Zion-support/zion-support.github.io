'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles, TrendingUp } from 'lucide-react';

const UltimateContentShowcase2025PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            🚀 NEW: Ultimate Content Showcase 2025
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Revolutionary AI Content & Solutions
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Explore cutting-edge AI innovations, automation tools, and digital transformation strategies that are reshaping industries worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/ultimate-content-showcase-2025" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              <Star className="w-5 h-5 mr-2" />
              Explore Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <div className="flex items-center text-sm opacity-80">
              <TrendingUp className="w-4 h-4 mr-2" />
              Join 10,000+ businesses already transforming
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025PromotionBanner;