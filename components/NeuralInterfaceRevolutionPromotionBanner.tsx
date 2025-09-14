import React from 'react';
import Link from 'next/link';

export default function NeuralInterfaceRevolutionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-bold text-lg mb-6 animate-pulse">
            🧠 NEURAL INTERFACE REVOLUTION 2035
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Direct Brain-Computer Integration
          </h1>
          
          <p className="text-xl text-violet-200 max-w-4xl mx-auto mb-8">
            Breakthrough neural interface technology that enables seamless communication between human consciousness 
            and artificial intelligencecreating the ultimate human-AI symbiosis.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-violet-600 text-white rounded-full text-sm font-medium">
              🧬 Neural Enhancement
            </span>
            <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
              🔗 Consciousness Bridge
            </span>
            <span className="px-4 py-2 bg-fuchsia-600 text-white rounded-full text-sm font-medium">
              ⚡ Direct Thought Control
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/neural-interface-revolution-2035"
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-105"
            >
              🧠 Explore Neural Tech
            </Link>
            <Link 
              href="/ai-2035-singularity-breakthrough"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-violet-900 transition-all duration-300"
            >
              🚀 Singularity 2035
            </Link>
            <Link 
              href="/quantum-ai-fusion-2030"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-violet-900 transition-all duration-300"
            >
              ⚛️ Quantum AI
            </Link>
          </div>
        </div>
        
        {/* Neural Network Effects */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-violet-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-fuchsia-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-violet-400 rounded-full opacity-20 animate-pulse delay-500"></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="10%" y1="10%" x2="20%" y2="20%" stroke="white" strokeWidth="2" className="animate-pulse" />
          <line x1="80%" y1="20%" x2="90%" y2="10%" stroke="white" strokeWidth="2" className="animate-pulse delay-1000" />
          <line x1="20%" y1="80%" x2="10%" y2="90%" stroke="white" strokeWidth="2" className="animate-pulse delay-2000" />
          <line x1="90%" y1="90%" x2="80%" y2="80%" stroke="white" strokeWidth="2" className="animate-pulse delay-500" />
        </svg>
      </div>
    </div>
  );
}