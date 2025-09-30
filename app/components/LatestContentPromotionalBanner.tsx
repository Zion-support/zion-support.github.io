import React from 'react';
import Link from 'next/link';

export default function LatestContentPromotionalBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Latest Revolutionary AI Content 2026
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-5xl mx-auto">
            Discover the most cutting-edge AI technologies, breakthrough innovations, and proven success stories 
            that are reshaping the future of enterprise operations and delivering unprecedented results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link 
            href="/blog/ai-next-generation-autonomous-systems-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🤖</div>
            <h3 className="font-bold text-lg mb-2">Next-Gen Autonomous Systems</h3>
            <p className="text-sm opacity-90 mb-3">
              Self-evolving AI systems delivering $50M+ ROI and 500% productivity gains
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-yellow-300 font-semibold">FEATURED</div>
              <div className="text-xs opacity-75">Read More →</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/ai-platform-architecture-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏗️</div>
            <h3 className="font-bold text-lg mb-2">Enterprise AI Architecture</h3>
            <p className="text-sm opacity-90 mb-3">
              Scalable platform design achieving $200M+ ROI and 1000x performance
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-green-300 font-semibold">NEW</div>
              <div className="text-xs opacity-75">Read More →</div>
            </div>
          </Link>
          
          <Link 
            href="/case-studies/ai-platform-enterprise-success-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="font-bold text-lg mb-2">$200M ROI Success Story</h3>
            <p className="text-sm opacity-90 mb-3">
              Fortune 500 transformation with 800% productivity and 99.8% uptime
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-orange-300 font-semibold">CASE STUDY</div>
              <div className="text-xs opacity-75">View Details →</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/ai-quantum-hybrid-computing-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚛️</div>
            <h3 className="font-bold text-lg mb-2">Quantum AI Computing</h3>
            <p className="text-sm opacity-90 mb-3">
              Revolutionary quantum-enhanced AI delivering 1000x faster solutions
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-purple-300 font-semibold">BREAKTHROUGH</div>
              <div className="text-xs opacity-75">Explore →</div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/blog"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
            >
              📚 Explore All AI Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors transform hover:scale-105"
            >
              📊 View Success Stories
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">$200M+</div>
              <div className="text-xs opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">800%</div>
              <div className="text-xs opacity-90">Productivity Gain</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">99.9%</div>
              <div className="text-xs opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">15mo</div>
              <div className="text-xs opacity-90">Payback Period</div>
            </div>
          </div>
          
          <p className="text-sm opacity-75">
            Join 15,000+ enterprise leaders who trust our revolutionary AI insights and transformation strategies
          </p>
        </div>
      </div>
    </div>
  );
}