import React from 'react';
import Link from 'next/link';

const January2026NeuralArchitectureShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border border-indigo-500/30 rounded-xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">🌟 FEATURED: JANUARY 2026 NEURAL ARCHITECTURE SHOWCASE</h2>
              <p className="text-indigo-200 text-sm">COMPREHENSIVE AI TRANSFORMATION - HIGHLY PROMINENT!</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-400">$15.2B</div>
            <div className="text-sm text-yellow-300">Total Value</div>
          </div>
        </div>

        {/* Main showcase grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Blog Post */}
          <div className="bg-black/30 rounded-lg p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">📚 Complete Guide</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Advanced Neural Architecture Evolution: The Next Generation of AI Intelligence. Comprehensive implementation framework with 99.97% accuracy and 50x performance improvements.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-600/30 text-blue-200 text-xs rounded">99.97% Accuracy</span>
              <span className="px-2 py-1 bg-green-600/30 text-green-200 text-xs rounded">50x Performance</span>
              <span className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded">95% Cost Reduction</span>
            </div>
            <Link 
              href="/content/blog/ai-2026-january-advanced-neural-architecture-evolution"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Read Guide
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-black/30 rounded-lg p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">💰 Success Story</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Global Tech Corporation: $15.2 billion transformation achievement with 99.97% accuracy improvements and 50x performance enhancements across enterprise systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-yellow-600/30 text-yellow-200 text-xs rounded">$2.8B Savings</span>
              <span className="px-2 py-1 bg-red-600/30 text-red-200 text-xs rounded">99.9% Autonomy</span>
              <span className="px-2 py-1 bg-indigo-600/30 text-indigo-200 text-xs rounded">15x Productivity</span>
            </div>
            <Link 
              href="/content/case-studies/ai-2026-january-global-tech-neural-architecture-15-billion-success"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white text-sm font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300"
            >
              View Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Consulting Services */}
          <div className="bg-black/30 rounded-lg p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">🚀 Consulting</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Advanced Neural Architecture Evolution consulting services with comprehensive implementation support, 500% average ROI, and proven enterprise transformation expertise.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-orange-600/30 text-orange-200 text-xs rounded">500% ROI</span>
              <span className="px-2 py-1 bg-pink-600/30 text-pink-200 text-xs rounded">12-Week Delivery</span>
              <span className="px-2 py-1 bg-cyan-600/30 text-cyan-200 text-xs rounded">24/7 Support</span>
            </div>
            <Link 
              href="/content/services/ai-2026-january-advanced-neural-architecture-consulting"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-sm font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300"
            >
              Get Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black/30 rounded-lg p-6 border border-purple-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">⚡ Technical Breakthroughs</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Self-Evolving Networks</h4>
                  <p className="text-gray-300 text-sm">Continuously optimizing neural structures for maximum performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Multi-Modal Fusion</h4>
                  <p className="text-gray-300 text-sm">Unified processing of text, vision, audio, and sensor data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Quantum Integration</h4>
                  <p className="text-gray-300 text-sm">Sub-millisecond inference with quantum-classical hybrid processing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Consciousness Reasoning</h4>
                  <p className="text-gray-300 text-sm">Human-level decision-making and problem-solving capabilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-6 border border-pink-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">🎯 Implementation Services</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Neural Architecture Assessment</h4>
                  <p className="text-gray-300 text-sm">Comprehensive evaluation of existing AI infrastructure</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Multi-Modal Integration</h4>
                  <p className="text-gray-300 text-sm">Unified data processing system deployment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Quantum Processing Setup</h4>
                  <p className="text-gray-300 text-sm">Hybrid quantum-classical processing implementation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Consciousness Integration</h4>
                  <p className="text-gray-300 text-sm">Advanced reasoning capability deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-indigo-200 text-sm">
            🌟 <strong>FEATURED:</strong> January 2026 Neural Architecture Showcase - $15.2B Value Creation, 99.97% Accuracy, 50x Performance - COMPREHENSIVE AI TRANSFORMATION!
          </p>
        </div>
      </div>
    </div>
  );
};

export default January2026NeuralArchitectureShowcaseBanner;