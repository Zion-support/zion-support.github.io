'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

const InteractiveTechDemo2025PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            🎮 NEW: Interactive Tech Demo 2025
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Technology in Action
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get hands-on with our cutting-edge AI and automation solutions through interactive demonstrations and real-time simulations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/interactive-tech-demo-2025" 
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Interactive Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <div className="flex items-center text-sm opacity-80">
              <Zap className="w-4 h-4 mr-2" />
              Real-time AI processing demos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025PromotionBanner;