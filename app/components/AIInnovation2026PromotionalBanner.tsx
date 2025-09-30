import React from 'react';
import Link from 'next/link';

export default function AIInnovation2026PromotionalBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ⚡ Revolutionary AI Innovations 2026
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-5xl mx-auto">
            Experience the future of artificial intelligence with breakthrough technologies that are transforming 
            industries, delivering unprecedented ROI, and reshaping the landscape of enterprise operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/blog/ai-next-generation-autonomous-systems-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
            <h3 className="font-bold text-xl mb-3">Autonomous AI Systems</h3>
            <p className="text-sm opacity-90 mb-4">
              Self-evolving intelligence achieving 95% accuracy improvements and $50M+ ROI
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-300">95%</div>
                <div className="text-xs opacity-75">Accuracy Gain</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-300">$50M+</div>
                <div className="text-xs opacity-75">ROI</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-yellow-300 font-semibold">BREAKTHROUGH</div>
              <div className="text-xs opacity-75">Explore →</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/ai-platform-architecture-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏗️</div>
            <h3 className="font-bold text-xl mb-3">Enterprise Platform</h3>
            <p className="text-sm opacity-90 mb-4">
              Scalable architecture delivering 1000x performance and $200M+ enterprise ROI
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-300">1000x</div>
                <div className="text-xs opacity-75">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-300">$200M+</div>
                <div className="text-xs opacity-75">ROI</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-green-300 font-semibold">ENTERPRISE</div>
              <div className="text-xs opacity-75">Learn More →</div>
            </div>
          </Link>
          
          <Link 
            href="/case-studies/ai-platform-enterprise-success-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="font-bold text-xl mb-3">Success Story</h3>
            <p className="text-sm opacity-90 mb-4">
              Fortune 500 transformation with 800% productivity and 99.8% system uptime
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-orange-300">800%</div>
                <div className="text-xs opacity-75">Productivity</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-red-300">99.8%</div>
                <div className="text-xs opacity-75">Uptime</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-orange-300 font-semibold">CASE STUDY</div>
              <div className="text-xs opacity-75">View Results →</div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105"
            >
              🚀 Discover All Innovations
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors transform hover:scale-105"
            >
              📈 View Success Metrics
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">$250M+</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">900%</div>
                <div className="text-sm opacity-90">Productivity Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">99.9%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">12mo</div>
                <div className="text-sm opacity-90">Payback Period</div>
              </div>
            </div>
          </div>
          
          <p className="text-sm opacity-75 mt-6">
            Trusted by Fortune 500 companies worldwide • Proven results • Revolutionary technology
          </p>
        </div>
      </div>
    </div>
  );
}