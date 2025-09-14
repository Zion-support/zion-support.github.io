import React from 'react';
import Link from 'next/link';

const UltimateAITransformation2025Banner = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Ultimate AI Transformation 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Transform your business with the most advanced AI technologies. Achieve unprecedented growthefficiencyand competitive advantage in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Complete Transformation</h3>
            <p className="text-teal-100">End-to-end AI implementation across all business functions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Proven Results</h3>
            <p className="text-teal-100">2,000% ROI and $5.2B+ in savings across all implementations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Future-Ready</h3>
            <p className="text-teal-100">Advanced AI systems designed for tomorrow's challenges</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Transformation
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
          >
            Get Expert Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateAITransformation2025Banner;