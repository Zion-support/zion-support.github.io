import React from 'react';
import Link from 'next/link';

export default function AI2029ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            <span>🚀</span>
            <span>BREAKTHROUGH 2029</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI 2029: The Quantum Computing Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Discover how quantum computing will transform AI in 2029. Get exclusive access to 
            breakthrough technologies, implementation guides, and case studies showing 4,000% ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">4,000%</div>
            <div className="text-blue-100 mb-3">Maximum ROI Achieved</div>
            <div className="text-sm text-blue-200">Fortune 500 case study results</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">85%</div>
            <div className="text-blue-100 mb-3">Cost Reduction</div>
            <div className="text-sm text-blue-200">Average operational savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">300%</div>
            <div className="text-blue-100 mb-3">Productivity Increase</div>
            <div className="text-sm text-blue-200">Measured across all implementations</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link 
            href="/blog/ai-2029-quantum-computing-revolution"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
          >
            🔮 Read Quantum AI Guide
          </Link>
          <Link 
            href="/case-studies/ai-2029-enterprise-transformation-breakthrough"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors text-center shadow-lg"
          >
            💰 View 4,000% ROI Case Study
          </Link>
          <Link 
            href="/resources/ai-2029-implementation-master-guide"
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors text-center shadow-lg"
          >
            📚 Download Master Guide
          </Link>
        </div>

        <div className="text-center">
          <p className="text-blue-200 text-sm">
            Join 500+ enterprise leaders already preparing for the AI 2029 revolution
          </p>
        </div>
      </div>
    </div>
  );
}