// import React from 'react';
import { Link } from 'react-router-dom';

const January2026NewContentMegaShowcaseBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border border-purple-500/30 rounded-2xl mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-4">
            <span className="text-purple-400 font-semibold text-sm">🚀 JUST PUBLISHED - JANUARY 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary AI Breakthroughs
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore the latest quantum AI innovations and autonomous enterprise transformations that are reshaping the future of business
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Article 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  AI 2026: The Autonomous Enterprise Revolution
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Next-Generation Autonomous Systems Transforming Business Operations with $127B+ Value Creation
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs border border-green-500/30">
                    $127B+ Value
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30">
                    15,847% ROI
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30">
                    500K+ AI Agents
                  </span>
                </div>
              </div>
            </div>
            <Link 
              to="/blog/ai-2026-january-autonomous-enterprise-revolution-next-gen"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm group-hover:underline"
            >
              Read Full Article
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Article 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-pink-500/50 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  Quantum AI Breakthrough 2026: Neural Superintelligence
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  The Next Frontier in Quantum-Enhanced Artificial Intelligence with $84.7B Value Creation
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs border border-purple-500/30">
                    $84.7B Value
                  </span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs border border-pink-500/30">
                    47,200% ROI
                  </span>
                  <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded text-xs border border-indigo-500/30">
                    99.97% Accuracy
                  </span>
                </div>
              </div>
            </div>
            <Link 
              to="/blog/quantum-ai-breakthrough-2026-neural-superintelligence"
              className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold text-sm group-hover:underline"
            >
              Read Full Article
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/30 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">
              📊 Featured Case Study: Fortune 100 Quantum AI Transformation
            </h3>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
              $84.7B Success Story
            </span>
          </div>
          <p className="text-gray-300 mb-4">
            Discover how a leading Fortune 100 technology conglomerate achieved unprecedented transformation 
            through quantum-enhanced AI systems, generating $84.7B in value creation with 47,200% ROI.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">47,200%</p>
              <p className="text-xs text-gray-400">ROI</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">99.97%</p>
              <p className="text-xs text-gray-400">Reliability</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">94.7%</p>
              <p className="text-xs text-gray-400">Cost Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-400">2,847%</p>
              <p className="text-xs text-gray-400">Efficiency Gain</p>
            </div>
          </div>
          <Link 
            to="/content/case-studies/fortune-100-quantum-ai-transformation-2026"
            className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold text-sm"
          >
            Read Complete Case Study
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link 
              to="/blog"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
            >
              Explore All Articles
            </Link>
            <Link 
              to="/case-studies"
              className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              View Case Studies
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Stay ahead of the AI revolution with our latest insights and breakthrough technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default January2026NewContentMegaShowcaseBanner;