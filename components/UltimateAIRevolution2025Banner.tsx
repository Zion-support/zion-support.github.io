import React from 'react';
import Link from 'next/link';

const UltimateAIRevolution2025Banner = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate AI Revolution 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Join the most transformative AI revolution in history. Experience unprecedented business growthefficiencyand innovation with our cutting-edge AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-pink-400">Revolutionary AI</h3>
            <p className="text-purple-100 text-sm">Next-generation artificial intelligence technologies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-pink-400">2,000% ROI</h3>
            <p className="text-purple-100 text-sm">Proven return on investment across all implementations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-pink-400">$5.2B+ Savings</h3>
            <p className="text-purple-100 text-sm">Total savings achieved for our clients</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-pink-400">99.8% Efficiency</h3>
            <p className="text-purple-100 text-sm">Operational efficiency improvements</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
          >
            Join the Revolution
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-violet-900 transition-all duration-300"
          >
            Get Expert Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateAIRevolution2025Banner;