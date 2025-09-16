import React from 'react';

const RevolutionaryTechBanner2040: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white py-8 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            ⚡ REVOLUTIONARY BREAKTHROUGH • JANUARY 2040
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough 2040
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Witness the most extraordinary technological breakthroughs that will redefine what's possible. 
            From synthetic consciousness to quantum reality engines and interdimensional AI systems.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2040" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Experience Breakthrough →
            </a>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
              Watch Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2040;