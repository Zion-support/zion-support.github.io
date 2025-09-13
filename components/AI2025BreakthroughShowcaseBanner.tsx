import React from 'react';
import Link from 'next/link';

const AI2025BreakthroughShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white animate-pulse">
                🔥 BREAKTHROUGH SHOWCASE
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 2025 Breakthrough
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            
            <p className="text-xl text-white mb-8 opacity-90 max-w-4xl mx-auto">
              Experience the most revolutionary AI technologies of 2025. From quantum AI fusion 
              to neural interfaces, discover the future of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 text-center">Automation Mastery</h3>
              <p className="text-white text-sm opacity-80 text-center mb-4">Master intelligent automation</p>
              <Link 
                href="/ai-2025-advanced-automation-mastery"
                className="block text-center text-cyan-300 hover:text-cyan-200 font-semibold"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 text-center">Enterprise AI</h3>
              <p className="text-white text-sm opacity-80 text-center mb-4">Transform your business</p>
              <Link 
                href="/ai-2025-enterprise-transformation"
                className="block text-center text-purple-300 hover:text-purple-200 font-semibold"
              >
                Discover →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">⚛️</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 text-center">Quantum AI</h3>
              <p className="text-white text-sm opacity-80 text-center mb-4">Revolutionary fusion</p>
              <Link 
                href="/ai-2025-quantum-ai-fusion"
                className="block text-center text-cyan-300 hover:text-cyan-200 font-semibold"
              >
                Explore →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 text-center">Neural Interface</h3>
              <p className="text-white text-sm opacity-80 text-center mb-4">Mind control tech</p>
              <Link 
                href="/ai-2025-neural-interface-revolution"
                className="block text-center text-violet-300 hover:text-violet-200 font-semibold"
              >
                Experience →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/content-showcase-2025"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Breakthroughs
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full transform translate-x-36 -translate-y-36 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full transform -translate-x-32 translate-y-32 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full transform -translate-x-24 -translate-y-24 animate-pulse delay-500"></div>
    </div>
  );
};

export default AI2025BreakthroughShowcaseBanner;