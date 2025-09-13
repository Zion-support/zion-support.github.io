import React from 'react';
import Link from 'next/link';

export default function LatestContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                🚀 NEW CONTENT 2026
              </span>
              <span className="bg-red-500 px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                JUST RELEASED
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Revolutionary AI Content Just Dropped!
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Discover groundbreaking AI trends, enterprise implementation guides, and real-world case studies 
              with proven 600%+ ROI results.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Quantum AI Breakthrough</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>Enterprise Implementation Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span>600% ROI Case Studies</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/ai-trends-2026-predictions"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Explore AI Trends 2026
            </Link>
            <Link 
              href="/resources/ai-2026-enterprise-implementation-master-guide"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Get Implementation Guide
            </Link>
          </div>
        </div>
        
        {/* Featured Content Grid */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link 
            href="/ai-trends-2026-predictions"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">⚛️</div>
              <div>
                <h3 className="font-bold text-sm">AI Trends 2026</h3>
                <p className="text-xs opacity-80">Revolutionary Predictions</p>
              </div>
            </div>
            <p className="text-xs opacity-90">
              Discover quantum AI, neural interfaces, and autonomous systems that will reshape industries.
            </p>
          </Link>
          
          <Link 
            href="/resources/ai-2026-enterprise-implementation-master-guide"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">📚</div>
              <div>
                <h3 className="font-bold text-sm">Implementation Guide</h3>
                <p className="text-xs opacity-80">Complete Roadmap</p>
              </div>
            </div>
            <p className="text-xs opacity-90">
              Step-by-step guide to achieve 800% ROI with proven methodologies and best practices.
            </p>
          </Link>
          
          <Link 
            href="/case-studies/quantum-ai-financial-optimization-breakthrough-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">💎</div>
              <div>
                <h3 className="font-bold text-sm">Quantum AI Case Study</h3>
                <p className="text-xs opacity-80">600% ROI Achievement</p>
              </div>
            </div>
            <p className="text-xs opacity-90">
              Real-world implementation of quantum AI achieving $2.8B additional revenue.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}