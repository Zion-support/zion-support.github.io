import React from 'react';
import Link from 'next/link';

const AI2026UltimateShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-rose-500/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-sm font-medium">🌟 AI 2026 ULTIMATE SHOWCASE</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            AI 2026 Ultimate Showcase
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of AI innovations, breakthroughs, 
            and revolutionary technologies that will shape the future of humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/ai-2026/ultimate-showcase"
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore Ultimate Showcase
            </Link>
            <Link
              href="/ai-2026/interactive-demo"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Try Interactive Demo
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Space AI</h3>
            <p className="opacity-90 mb-4">
              AI systems designed for space exploration and interplanetary missions
            </p>
            <div className="text-3xl font-bold text-purple-300">∞</div>
            <div className="text-sm opacity-75">Possibilities</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-6xl mb-6">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Bio AI</h3>
            <p className="opacity-90 mb-4">
              AI-powered biotechnology and genetic engineering breakthroughs
            </p>
            <div className="text-3xl font-bold text-pink-300">1000x</div>
            <div className="text-sm opacity-75">Faster Research</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-6xl mb-6">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Climate AI</h3>
            <p className="opacity-90 mb-4">
              AI solutions for climate change mitigation and environmental protection
            </p>
            <div className="text-3xl font-bold text-rose-300">50%</div>
            <div className="text-sm opacity-75">Emission Reduction</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300">
            <div className="text-6xl mb-6">🏥</div>
            <h3 className="text-2xl font-bold mb-4">Medical AI</h3>
            <p className="opacity-90 mb-4">
              Revolutionary AI in healthcare, drug discovery, and medical diagnosis
            </p>
            <div className="text-3xl font-bold text-purple-300">99.9%</div>
            <div className="text-sm opacity-75">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026UltimateShowcaseBanner;