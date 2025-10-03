// import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Brain, TrendingUp, Shield } from 'lucide-react';

export default function NeuromorphicComputingRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-400/30 rounded-full px-4 py-2 mb-4">
            <Brain className="w-5 h-5 text-purple-300" />
            <span className="text-purple-200 font-semibold text-sm">NEUROMORPHIC COMPUTING REVOLUTION 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            🧠 Neuromorphic Computing
            <br />
            <span className="text-yellow-300">95% Energy Savings</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-6 max-w-4xl mx-auto">
            Revolutionary AI computing that mimics the human brain with unprecedented efficiency and performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-yellow-300 mb-1">95%</div>
            <div className="text-purple-200 text-sm">Energy Savings</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-300 mb-1">1000x</div>
            <div className="text-blue-200 text-sm">Performance Boost</div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 border border-indigo-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyan-300 mb-1">99.9%</div>
            <div className="text-indigo-200 text-sm">Uptime</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
            <Brain className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-300 mb-1">$22M</div>
            <div className="text-green-200 text-sm">Annual Savings</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 border border-purple-400/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-100">
            🚀 Just Published: Revolutionary Neuromorphic Computing Content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-700/40 to-purple-900/40 border border-purple-400/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-100 mb-3 flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-300" />
                Neuromorphic Computing Revolution
              </h3>
              <p className="text-purple-200 mb-4">
                Discover how neuromorphic computing is revolutionizing enterprise AI with unprecedented energy efficiency and processing power.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">95% Energy Savings</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">1000x Performance</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">Real-time Processing</span>
              </div>
              <Link to="/blog/ai-2026-neuromorphic-computing-revolution"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-700/40 to-blue-900/40 border border-blue-400/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-100 mb-3 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-300" />
                $22M ROI Case Study
              </h3>
              <p className="text-blue-200 mb-4">
                Real-world implementation results from a global automotive manufacturer achieving unprecedented energy savings and performance improvements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">$22M Annual Savings</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">Automotive Industry</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">275% ROI</span>
              </div>
              <Link to="/case-studies/neuromorphic-computing-manufacturing-success-2026"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link to="/services/neuromorphic-computing-enterprise-services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Get Started with Neuromorphic Computing
            </Link>
            <Link to="/contact"
              className="border-2 border-purple-400 hover:bg-purple-400/20 text-purple-200 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
          
          <p className="text-purple-300 mt-4 text-sm">
            Join the neuromorphic computing revolution • Transform your enterprise AI • Achieve unprecedented efficiency
          </p>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}