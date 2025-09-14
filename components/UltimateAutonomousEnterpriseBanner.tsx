import React from 'react';
import Link from 'next/link';

const UltimateAutonomousEnterpriseBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Autonomous Enterprise
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Experience the future of business with fully autonomous AI systems that manageoptimizeand transform your enterprise operations without human intervention.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Fully Autonomous</h3>
            <p className="text-purple-100">AI systems that operate independently and make real-time decisions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Self-Optimizing</h3>
            <p className="text-purple-100">Systems that continuously improve and adapt to changing conditions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Future-Ready</h3>
            <p className="text-purple-100">Advanced AI designed for the challenges of tomorrow</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-cyan-500 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Autonomous Enterprise
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseBanner;