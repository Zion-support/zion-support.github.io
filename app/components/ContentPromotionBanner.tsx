'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    'Advanced AI technology',
    '24/7 expert support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="cyber-card p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2 neon-text">
                🚀 Transform Your Business with AI
              </h2>
              <p className="text-gray-300">
                Join thousands of companies already using our AI solutions to boost productivity and drive growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Quick setup</span>
              </div>
              <a
                href="/contact"
                className="cyber-button text-sm px-6 py-2 flex items-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPromotionBanner;