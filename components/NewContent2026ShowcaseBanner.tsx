import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest AI insights, implementation guides, and real-world success stories that are transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm opacity-75">25 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                AI Enterprise Transformation 2026: Complete Implementation Guide
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master AI enterprise transformation with proven strategies achieving 300% ROI, 70% cost reduction, and 90% efficiency gains.
              </p>
              <div className="flex items-center text-blue-200 font-semibold text-sm">
                Read Full Guide →
              </div>
            </div>
          </Link>

          {/* Edge Computing Article */}
          <Link href="/blog/ai-edge-computing-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  New Technology
                </span>
                <span className="text-sm opacity-75">18 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                AI Edge Computing 2025: Real-time Intelligence at the Edge
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Achieve sub-50ms response times with AI processing at the edge. Perfect for autonomous vehicles, IoT devices, and real-time applications.
              </p>
              <div className="flex items-center text-blue-200 font-semibold text-sm">
                Explore Technology →
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm opacity-75">12 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.
              </p>
              <div className="flex items-center text-blue-200 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">300%</div>
            <div className="text-sm opacity-90">Average ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">70%</div>
            <div className="text-sm opacity-90">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">90%</div>
            <div className="text-sm opacity-90">Efficiency Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">500+</div>
            <div className="text-sm opacity-90">Successful Implementations</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join 10,000+ professionals staying ahead with our latest AI insights and success stories
          </p>
        </div>
      </div>
    </section>
  );
}