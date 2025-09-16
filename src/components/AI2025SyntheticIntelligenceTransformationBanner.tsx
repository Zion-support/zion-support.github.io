import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025SyntheticIntelligenceTransformationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 border border-green-500/30 rounded-xl mb-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
      
      <div className="relative px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide animate-pulse">
                🏆 CASE STUDY - 50,000% ROI 🏆
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                SYNTHETIC INTELLIGENCE TRANSFORMATION
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Revolutionary case study: Fortune 500 company achieves <span className="text-green-400 font-bold">50,000% ROI</span> 
              through synthetic intelligence transformation in just 60 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/case-studies/ai-2025-synthetic-intelligence-transformation-breakthrough"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📊 View Case Study
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                🚀 Start Your Transformation
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <div className="text-2xl font-bold text-green-400 mb-2">50,000%</div>
                <div className="text-white font-semibold mb-1">ROI Achieved</div>
                <div className="text-gray-300 text-sm">60 Days</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Results */}
        <div className="mt-6 pt-6 border-t border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-lg p-4 border border-green-500/20 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
              <div className="text-white font-semibold text-sm">Efficiency Increase</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">99.8%</div>
              <div className="text-white font-semibold text-sm">Quality Rate</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">80%</div>
              <div className="text-white font-semibold text-sm">Cost Reduction</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/20 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">60</div>
              <div className="text-white font-semibold text-sm">Days to ROI</div>
            </div>
          </div>
        </div>
        
        {/* Company Testimonial */}
        <div className="mt-6 pt-6 border-t border-gray-700/50">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CTO</span>
              </div>
              <div className="flex-1">
                <blockquote className="text-white italic mb-2">
                  "The synthetic intelligence transformation delivered by Zion Tech Group has revolutionized 
                  our entire operation. The 50,000% ROI achieved in just 60 days exceeded all expectations."
                </blockquote>
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold">Chief Technology Officer</div>
                  <div>Fortune 500 Manufacturing Leader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}