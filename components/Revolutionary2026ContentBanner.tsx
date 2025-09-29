import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
            <Star className="w-4 h-4 mr-2" />
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover the Future of AI & Technology
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Explore groundbreaking content on autonomous enterprise, quantum computing, and AI innovations that are reshaping industries in 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Autonomous Enterprise */}
          <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                  BREAKTHROUGH
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-200 font-medium">📝 Article</span>
                <span className="text-sm text-purple-300">28 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous Enterprise 2026: Complete Business Transformation Guide
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                Master autonomous enterprise transformation with AI agents, achieving 95% automation efficiency and $25M+ ROI.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">95%</div>
                  <div className="text-xs text-purple-300">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">$25M+</div>
                  <div className="text-xs text-purple-300">ROI</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                Read More →
              </div>
            </div>
          </Link>

          {/* Quantum Computing */}
          <Link href="/blog/ai-quantum-hybrid-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  REVOLUTIONARY
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-200 font-medium">📝 Article</span>
                <span className="text-sm text-purple-300">32 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                AI Quantum Hybrid Computing 2026: Next-Generation Intelligence
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                Master quantum hybrid computing for AI breakthroughs with 1000x faster optimization and 95% accuracy.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">1000x</div>
                  <div className="text-xs text-purple-300">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">95%</div>
                  <div className="text-xs text-purple-300">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                Read More →
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-200 font-medium">📊 Case Study</span>
                <span className="text-sm text-purple-300">Fortune 500</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                AI Autonomous Enterprise Success 2026: $25M ROI Case Study
              </h3>
              <p className="text-purple-100 text-sm mb-4">
                See how a Fortune 500 company achieved $25M ROI and 90% automation efficiency through AI transformation.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">$25M</div>
                  <div className="text-xs text-purple-300">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-300">90%</div>
                  <div className="text-xs text-purple-300">Automation</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                Read More →
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">🚀 Latest AI Innovations</h3>
            <div className="space-y-3">
              <Link href="/blog/ai-neural-architecture-optimization-2026" className="block text-purple-200 hover:text-yellow-300 transition-colors">
                • AI Neural Architecture Optimization 2026
              </Link>
              <Link href="/blog/ai-space-tech-2026" className="block text-purple-200 hover:text-yellow-300 transition-colors">
                • AI Space Technology 2026
              </Link>
              <Link href="/blog/ai-sustainability-green-tech-2026" className="block text-purple-200 hover:text-yellow-300 transition-colors">
                • AI Sustainability & Green Tech 2026
              </Link>
              <Link href="/case-studies/ai-sustainability-transformation-2026" className="block text-purple-200 hover:text-yellow-300 transition-colors">
                • $10M Sustainability ROI Case Study
              </Link>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">📈 Success Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">$50M+</div>
                <div className="text-xs text-purple-300">Total ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">95%</div>
                <div className="text-xs text-purple-300">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">1000x</div>
                <div className="text-xs text-purple-300">Speed Gain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">99.9%</div>
                <div className="text-xs text-purple-300">Reliability</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore All 2026 Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Success Stories
            </Link>
          </div>
          <p className="text-purple-200 text-sm">
            Join 10,000+ professionals staying ahead with cutting-edge AI insights
          </p>
        </div>
      </div>
    </section>
  );
}