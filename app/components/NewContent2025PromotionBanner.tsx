'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 mr-2 text-yellow-300" />
            <span className="text-lg font-semibold uppercase tracking-wide">
              NEW CONTENT 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover the latest breakthroughs in AI automation, quantum computing, and neural consciousness. 
            Get exclusive access to case studies showing 10,000% ROI.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-xl font-bold mb-2">10,000% ROI</h3>
              <p className="opacity-90">Proven results from real implementations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-2">500+ Case Studies</h3>
              <p className="opacity-90">Real-world transformation stories</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-purple-300" />
              <h3 className="text-xl font-bold mb-2">AI Mastery</h3>
              <p className="opacity-90">Complete implementation guides</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-ultimate-automation-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Latest Blog Post
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              href="/case-studies/global-enterprise-ai-transformation-2025-ultimate-success"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            <p>✨ Limited Time: Get instant access to all new content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;