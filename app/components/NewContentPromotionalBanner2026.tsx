import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionalBanner2026() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Revolutionary AI Content 2026
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI technology, enterprise transformation strategies, 
            and real-world success stories that are reshaping industries worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Link 
            href="/blog/ai-next-generation-autonomous-systems-2026"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-bold text-sm mb-1">Next-Gen Autonomous Systems</h3>
            <p className="text-xs opacity-90">Self-evolving AI systems delivering $50M+ ROI</p>
            <div className="text-xs text-yellow-300 mt-2 font-semibold">FEATURED</div>
          </Link>
          
          <Link 
            href="/blog/ai-platform-architecture-2026"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">🏗️</div>
            <h3 className="font-bold text-sm mb-1">Enterprise AI Architecture</h3>
            <p className="text-xs opacity-90">Scalable platform design for massive ROI</p>
            <div className="text-xs text-green-300 mt-2 font-semibold">NEW</div>
          </Link>
          
          <Link 
            href="/case-studies/ai-platform-enterprise-success-2026"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-bold text-sm mb-1">$200M ROI Case Study</h3>
            <p className="text-xs opacity-90">Fortune 500 transformation success story</p>
            <div className="text-xs text-orange-300 mt-2 font-semibold">CASE STUDY</div>
          </Link>
          
          <Link 
            href="/blog/ai-quantum-hybrid-computing-2026"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">⚛️</div>
            <h3 className="font-bold text-sm mb-1">Quantum AI Computing</h3>
            <p className="text-xs opacity-90">1000x faster problem solving</p>
            <div className="text-xs text-purple-300 mt-2 font-semibold">BREAKTHROUGH</div>
          </Link>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              📚 Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              📊 View Case Studies
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ enterprise leaders who trust our AI insights and strategies
          </p>
        </div>
      </div>
    </div>
  );
}