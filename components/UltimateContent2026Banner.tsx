import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, Users, Shield } from 'lucide-react';

export default function UltimateContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4" />
            ULTIMATE 2026 CONTENT COLLECTION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Most Comprehensive AI Content Library
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Ever Created
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Access 500+ articles, case studies, and guides covering every aspect of AI implementation, 
            from autonomous enterprise systems to quantum computing breakthroughs.
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold">Autonomous AI</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Self-managing systems that run your business 24/7
            </p>
            <div className="text-2xl font-bold text-yellow-400">150+</div>
            <div className="text-xs text-blue-200">Articles & Guides</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold">Enterprise AI</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Large-scale AI implementations for Fortune 500s
            </p>
            <div className="text-2xl font-bold text-green-400">200+</div>
            <div className="text-xs text-blue-200">Case Studies</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-semibold">AI Agents</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Intelligent agents that work autonomously
            </p>
            <div className="text-2xl font-bold text-purple-400">100+</div>
            <div className="text-xs text-blue-200">Implementation Guides</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold">AI Security</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Enterprise-grade security and compliance
            </p>
            <div className="text-2xl font-bold text-blue-400">50+</div>
            <div className="text-xs text-blue-200">Security Frameworks</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured This Week</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg border border-green-400/30 group-hover:border-green-400/60 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">NEW</span>
                  <span className="text-green-300 text-sm">Jan 15, 2026</span>
                </div>
                <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors">
                  The Future of Autonomous Enterprise
                </h4>
                <p className="text-blue-200 text-sm mt-1">
                  AI systems that run your business 24/7
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-quantum-optimization-2026" className="group">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-400/30 group-hover:border-purple-400/60 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">QUANTUM</span>
                  <span className="text-purple-300 text-sm">Jan 12, 2026</span>
                </div>
                <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                  Quantum AI: 1000x Faster Processing
                </h4>
                <p className="text-blue-200 text-sm mt-1">
                  Revolutionary quantum computing for AI
                </p>
              </div>
            </Link>

            <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="group">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-400/30 group-hover:border-orange-400/60 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">CASE STUDY</span>
                  <span className="text-orange-300 text-sm">Jan 10, 2026</span>
                </div>
                <h4 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                  $25M ROI Success Story
                </h4>
                <p className="text-blue-200 text-sm mt-1">
                  Real results from Fortune 500 transformation
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </Link>
            <Link
              href="/content-hub"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Content Hub
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            Join 10,000+ professionals already using our content to transform their businesses
          </p>
        </div>
      </div>
    </section>
  );
}