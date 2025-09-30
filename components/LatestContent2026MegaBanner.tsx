import React from 'react';
import Link from 'next/link';

export default function LatestContent2026MegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT JUST RELEASED</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Now Available
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, implementation guides, and success stories 
            that are transforming businesses worldwide in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <Link href="/blog/ai-2026-enterprise-automation-revolution" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm text-gray-300">20 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                AI Enterprise Automation Revolution 2026
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Complete implementation guide with proven strategies, ROI frameworks, and success stories 
                from companies achieving 300% ROI.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold text-sm">
                Read Full Article →
              </div>
            </div>
          </Link>

          {/* Multimodal AI Article */}
          <Link href="/blog/ai-multimodal-integration-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  New Article
                </span>
                <span className="text-sm text-gray-300">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                AI Multimodal Integration 2025
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Discover how multimodal AI integration delivers 250% efficiency gains with text, 
                voice, and video AI technologies.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold text-sm">
                Read Full Article →
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-300">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                AI Supply Chain Optimization
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency 
                improvement, saving $12M annually.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">250%</div>
            <div className="text-gray-300 text-sm">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">60%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$12M+</div>
            <div className="text-gray-300 text-sm">Annual Savings</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          <p className="text-gray-300 text-sm">
            Join 10,000+ professionals getting weekly AI insights and updates
          </p>
        </div>
      </div>
    </section>
  );
}