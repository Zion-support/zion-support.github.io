import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Services
            <span className="block text-2xl md:text-3xl font-normal opacity-90 mt-2">
              Transform Your Business with Cutting-Edge AI Solutions
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover our latest AI enterprise transformation guide, Fortune 500 success stories, 
            and autonomous AI systems that deliver 300% ROI and $50M+ savings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Featured Article
              </span>
              <span className="text-sm opacity-75">25 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Enterprise Transformation 2026: Complete Implementation Guide
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Master AI enterprise transformation with proven strategies. Achieve 300% ROI, 
              90% efficiency gains, and $50M+ savings with our comprehensive framework.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">300% ROI</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">$50M+ Savings</span>
              </div>
            </div>
            <Link
              href="/blog/ai-enterprise-transformation-2026"
              className="inline-flex items-center text-white font-semibold hover:text-blue-300 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Success Story
              </span>
              <span className="text-sm opacity-75">Fortune 500</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Fortune 500 AI Transformation: $50M Savings Achieved
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Learn how a Fortune 500 company achieved $50M annual savings, 300% ROI, 
              and 90% efficiency improvement through comprehensive AI transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">$50M Saved</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">90% Efficiency</span>
              </div>
            </div>
            <Link
              href="/case-studies/fortune-500-ai-transformation-success"
              className="inline-flex items-center text-white font-semibold hover:text-green-300 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* New Service */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                New Service
              </span>
              <span className="text-sm opacity-75">Autonomous AI</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Autonomous Systems: Self-Managing AI Solutions
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Deploy AI systems that self-manage, self-optimize, and self-heal. Achieve 99.9% uptime, 
              80% cost reduction, and 300% efficiency gains.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm">
                <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded">99.9% Uptime</span>
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded">80% Cost Cut</span>
              </div>
            </div>
            <Link
              href="/services/ai-autonomous-systems"
              className="inline-flex items-center text-white font-semibold hover:text-purple-300 transition-colors"
            >
              Explore Service →
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-bold mb-2">$50M+ Savings</h3>
            <p className="text-sm opacity-75">Proven cost reduction through AI transformation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-bold mb-2">300% ROI</h3>
            <p className="text-sm opacity-75">Guaranteed return on AI investment</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold mb-2">90% Efficiency</h3>
            <p className="text-sm opacity-75">Dramatic operational efficiency improvements</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Autonomous AI</h3>
            <p className="text-sm opacity-75">Self-managing AI systems that operate 24/7</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </a>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Explore All Content
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join 10,000+ professionals who trust Zion Tech Group for their AI transformation needs
          </p>
        </div>
      </div>
    </section>
  );
}