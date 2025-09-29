import React from 'react';
import Link from 'next/link';

export default function Latest2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🔥 LATEST 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Autonomous AI Systems</h3>
                <p className="text-sm text-gray-500">Self-Evolving Intelligence</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Master autonomous AI systems that self-evolve, self-optimize, and self-improve. 
              Complete guide to building self-managing AI infrastructure with 99% automation and $10M+ ROI.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">35 min read</div>
              <Link
                href="/blog/ai-autonomous-ai-systems-2026"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Cognitive Computing</h3>
                <p className="text-sm text-gray-500">Human-like Intelligence</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Explore cognitive computing architectures that mimic human thought processes. 
              Complete guide to building intelligent systems with reasoning, learning, and decision-making capabilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">28 min read</div>
              <Link
                href="/blog/ai-cognitive-computing-2026"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Neural Interfaces</h3>
                <p className="text-sm text-gray-500">Brain-Computer Integration</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Explore the future of brain-computer interfaces powered by AI. 
              Complete guide to neural interface technologies, applications, and implementation strategies for 2026.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">32 min read</div>
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">$25M ROI Success Story</h3>
                <p className="text-sm text-gray-500">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              See how a Fortune 500 company achieved $25M ROI with AI autonomous enterprise systems. 
              99.9% uptime, 90% cost reduction, and complete business transformation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">25 min read</div>
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">$10M Green ROI Success</h3>
                <p className="text-sm text-gray-500">Sustainability Case Study</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive 
              AI sustainability transformation and green technology.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">20 min read</div>
              <Link
                href="/case-studies/ai-sustainability-transformation-2026"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </section>
  );
}