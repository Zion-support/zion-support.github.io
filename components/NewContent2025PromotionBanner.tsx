import React from 'react';
import Link from 'next/link';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-white animate-pulse">
                  🚀 NEW CONTENT 2025
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Content
                <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Just Released
                </span>
              </h2>
              
              <p className="text-xl text-white mb-8 opacity-90">
                Discover cutting-edge AI solutions, quantum computing breakthroughs, 
                and neural interface technologies that are reshaping the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-2025-advanced-automation-mastery"
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Automation Mastery
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link 
                  href="/ai-2025-enterprise-transformation"
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Enterprise AI
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Quantum AI</h3>
                <p className="text-white text-sm opacity-80">Revolutionary fusion</p>
                <Link href="/ai-2025-quantum-ai-fusion" className="text-cyan-300 text-sm hover:text-cyan-200">
                  Explore →
                </Link>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Neural Interface</h3>
                <p className="text-white text-sm opacity-80">Mind control tech</p>
                <Link href="/ai-2025-neural-interface-revolution" className="text-purple-300 text-sm hover:text-purple-200">
                  Discover →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-24 translate-y-24 animate-pulse delay-1000"></div>
    </div>
  );
};

export default NewContent2025PromotionBanner;