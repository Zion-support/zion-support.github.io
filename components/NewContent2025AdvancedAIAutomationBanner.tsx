import React from 'react';
import Link from 'next/link';

const NewContent2025AdvancedAIAutomationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Advanced AI Automation 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-pink-100">
            Transform your business with advanced AI automation that streamlines operationsreduces costsand maximizes efficiency across all business functions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-rose-400">Intelligent Automation</h3>
            <p className="text-pink-100">AI-powered systems that learnadaptand optimize continuously</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-rose-400">Complete Integration</h3>
            <p className="text-pink-100">Seamless integration with existing systems and workflows</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-rose-400">Proven Results</h3>
            <p className="text-pink-100">2,000% ROI and $5.2B+ in savings across all implementations</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-rose-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Automation
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-rose-900 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025AdvancedAIAutomationBanner;