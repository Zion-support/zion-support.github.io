import React from 'react';
import { Link } from 'react-router-dom';

export default function RevolutionaryQuantumAIBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-purple-300 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-lg font-bold animate-bounce">
              🚀 BREAKTHROUGH 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full text-lg font-bold">
              QUANTUM AI
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Revolutionary Quantum AI Breakthrough
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
            Discover how quantum-enhanced AI achieved <span className="font-bold text-yellow-300">1000x performance gains</span> and 
            <span className="font-bold text-green-300"> $500M ROI</span> in enterprise applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">1000x Speed</h3>
            <p className="text-purple-100">Quantum processing delivers unprecedented computational power</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">$500M ROI</h3>
            <p className="text-purple-100">Proven results in Fortune 500 enterprise implementations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">99.7% Accuracy</h3>
            <p className="text-purple-100">Maintained precision with quantum-enhanced algorithms</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/blog/ai-quantum-computing-breakthrough-2026"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Full Research Paper
            </Link>
            
            <Link to="/case-studies/ai-quantum-breakthrough-success-2026"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View $500M ROI Case Study
            </Link>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-purple-200">
            <Link to="/services/ai-quantum-computing-solutions" className="hover:text-white transition-colors">
              Explore Quantum AI Services
            </Link>
            <span>•</span>
            <Link to="/services/ai-autonomous-operations" className="hover:text-white transition-colors">
              Autonomous Operations
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Quantum circuit visualization */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 text-purple-300">
            <div className="w-8 h-1 bg-purple-400"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-8 h-1 bg-purple-400"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-8 h-1 bg-purple-400"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-8 h-1 bg-purple-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}