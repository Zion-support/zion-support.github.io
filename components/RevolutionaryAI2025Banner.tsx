import React from 'react';
import Link from 'next/link';

const RevolutionaryAI2025Banner = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Revolutionary AI 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Experience the most advanced AI technologies that are revolutionizing industries and delivering unprecedented business transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Revolutionary Technology</h3>
            <p className="text-orange-100">Cutting-edge AI that transforms how businesses operate and compete</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Proven Results</h3>
            <p className="text-orange-100">2,000% ROI and $5.2B+ in savings across all implementations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Future-Ready</h3>
            <p className="text-orange-100">Advanced systems designed for the challenges of tomorrow</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Revolutionary AI
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-900 transition-all duration-300"
          >
            Start Your Transformation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025Banner;