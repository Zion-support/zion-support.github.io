import React from 'react';
<<<<<<< HEAD
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContentPromotionBanner2026 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-yellow-300 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full opacity-60 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-300 rounded-full opacity-60 animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🆕 NEW CONTENT ALERT</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Discover the Future of AI
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI 2026 Revolution
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Explore groundbreaking AI technologies including Neural Superintelligence, 
            Quantum-Neural Fusion, and Autonomous Business Ecosystems that will transform your business.
          </p>
          
          {/* Content preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold text-sm mb-1">Neural Superintelligence</h3>
              <p className="text-xs opacity-80">Human-level AI reasoning</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-bold text-sm mb-1">Quantum-Neural Fusion</h3>
              <p className="text-xs opacity-80">Quantum computing meets AI</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-bold text-sm mb-1">Autonomous Ecosystems</h3>
              <p className="text-xs opacity-80">Self-managing business AI</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-2026-revolution"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore AI 2026 →
            </a>
            <a
              href="/ai-2026-revolution/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Try Interactive Demo
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">1000%</div>
              <div className="text-xs opacity-80">ROI Potential</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">∞</div>
              <div className="text-xs opacity-80">Processing Speed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-xs opacity-80">Autonomous</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">2026</div>
              <div className="text-xs opacity-80">Future Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
=======
const NewContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewContentPromotionBanner2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  );
  };
export default NewContentPromotionBanner2026;
