import React from 'react';
import { Link } from 'react-router-dom';

const NeuralInterfaceRevolutionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20">
      {/* Neural network visualization */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-24 h-24 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-24 w-20 h-20 bg-teal-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 left-2/3 w-8 h-8 bg-lime-400 rounded-full opacity-35 animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-emerald-200 bg-emerald-800/30 rounded-full border border-emerald-400/30 mb-4 animate-pulse">
              🧠 NEURAL INTERFACE REVOLUTION 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Direct Brain-Computer
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Interface Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Control computers with your thoughts, enhance cognitive abilities, and restore lost functions. 
              The future of human-computer interaction is here with unprecedented precision and safety.
            </p>
          </div>

          {/* Key neural interface features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Thought Control</h3>
              <p className="text-emerald-200">Control devices and software directly with neural signals and brain patterns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Cognitive Enhancement</h3>
              <p className="text-emerald-200">Boost memory, focus, and processing speed through neural augmentation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-2">Neural Restoration</h3>
              <p className="text-emerald-200">Restore lost motor functions and sensory capabilities through neural interfaces</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/neural-interface-solutions"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-full hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
            >
              <span className="relative z-10">Explore Neural Interfaces</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/case-studies/neural-interface-healthcare-breakthrough"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              View Medical Breakthroughs
            </Link>
          </div>

          {/* Neural interface stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-emerald-200">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0.1ms</div>
              <div className="text-emerald-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-emerald-200">Neural Channels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-emerald-200">Safety Record</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner;