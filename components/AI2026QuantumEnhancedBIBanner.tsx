import React from 'react';
import { Link } from 'react-router-dom';

const AI2026QuantumEnhancedBIBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/20 border border-purple-400/30 text-purple-200 text-sm font-medium">
              🚀 NEW: January 2026
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Quantum-Enhanced
              </span>
              <br />
              Business Intelligence
            </h2>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover how quantum computing is revolutionizing business intelligence in 2026. 
              Process data 10,000x faster and achieve 95% improvement in predictive accuracy.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-300">10,000x</div>
                <div className="text-sm text-gray-300">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-300">95%</div>
                <div className="text-sm text-gray-300">Better Accuracy</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog/ai-2026-quantum-enhanced-business-intelligence-revolution"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105"
              >
                Read Full Article
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/case-studies/ai-2026-fortune-500-quantum-bi-transformation-2-8-billion-success"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 hover:bg-purple-400/10 rounded-lg font-semibold text-white transition-all duration-200"
              >
                View Case Study
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium">Quantum Processing Active</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Data Processing Speed</span>
                    <span className="text-purple-300 font-bold">10,000x Faster</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Predictive Accuracy</span>
                    <span className="text-blue-300 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300">$2.8B</div>
                    <div className="text-xs text-gray-400">Value Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-300">45%</div>
                    <div className="text-xs text-gray-400">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating quantum particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AI2026QuantumEnhancedBIBanner;