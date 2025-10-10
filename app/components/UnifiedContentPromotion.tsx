'use client';
import React, { memo } from 'react';
import { ArrowRight, Star, Users, TrendingUp, CheckCircle } from 'lucide-react';

const UnifiedContentPromotion: React.FC = memo(() => {
  return (
    <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-8 mb-16">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Star className="w-4 h-4" />
          <span>Featured Solutions</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
          Transform Your Business with AI
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join 500+ companies already using our AI solutions to achieve 300% ROI, 
          70% cost reduction, and 90% efficiency gains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
            <div className="text-sm text-gray-400">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
            <div className="text-sm text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
            <div className="text-sm text-gray-400">Efficiency Gains</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
          >
            <Users className="w-5 h-5 mr-2" />
            Get Started Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a
            href="/contact"
            className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
});

UnifiedContentPromotion.displayName = 'UnifiedContentPromotion';

export default UnifiedContentPromotion;