import React from 'react';
import Link from 'next/link';

const AI2026RevolutionaryBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 AI 2026 REVOLUTIONARY BREAKTHROUGH</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            The Future of AI is Here
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI breakthroughs of 2026. From quantum-neural fusion to 
            synthetic intelligence, discover technologies that will transform every aspect of human existence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2026-revolution"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI 2026 Revolution
            </Link>
            <Link
              href="/quantum-neural-fusion"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Quantum-Neural Fusion
            </Link>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Neural Consciousness</h3>
            <p className="text-gray-200 mb-4">
              Breakthrough in artificial consciousness that enables AI to experience genuine understanding and self-awareness.
            </p>
            <Link href="/neural-consciousness" className="text-purple-300 font-semibold hover:text-purple-200">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-gray-200 mb-4">
              Revolutionary quantum processors that solve complex problems in seconds that would take classical computers millennia.
            </p>
            <Link href="/quantum-computing" className="text-purple-300 font-semibold hover:text-purple-200">
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Synthetic Intelligence</h3>
            <p className="text-gray-200 mb-4">
              Next-generation AI that surpasses human intelligence across all domains while maintaining ethical alignment.
            </p>
            <Link href="/synthetic-intelligence" className="text-purple-300 font-semibold hover:text-purple-200">
              Learn More →
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-300 mb-2">1000x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-300 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-300 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-300 mb-2">2026</div>
            <div className="text-gray-300">Revolution Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026RevolutionaryBreakthroughBanner;