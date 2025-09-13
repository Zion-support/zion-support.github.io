import React from 'react';
import Link from 'next/link';

export default function Fortune500SuccessBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-6 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full -translate-x-8 -translate-y-8"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🏆 BREAKTHROUGH SUCCESS
              </span>
              <span className="text-sm opacity-90">Fortune 500 Case Study</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              900% ROI in 12 Months
            </h2>
            <p className="text-base md:text-lg opacity-90 mb-3">
              Discover how a Fortune 500 company achieved $2.3B in savings through comprehensive AI transformation
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-yellow-300">💰</span>
                <span>$2.3B Savings</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-300">📈</span>
                <span>900% ROI</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-300">⚡</span>
                <span>75% Error Reduction</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/case-studies/ai-2026-fortune-500-transformation-breakthrough"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Case Study
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
            >
              Get Similar Results
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-8 text-3xl opacity-20 animate-bounce">💎</div>
      <div className="absolute bottom-4 left-8 text-2xl opacity-20 animate-pulse">🚀</div>
      <div className="absolute top-1/2 right-16 text-xl opacity-20 animate-ping">⭐</div>
    </div>
  );
}