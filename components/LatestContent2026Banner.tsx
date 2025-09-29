import React from 'react';
import Link from 'next/link';

export default function LatestContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* AI Mega Trends */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              AI Mega Trends 2026
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover the 15 mega trends reshaping enterprise AI. From autonomous operations 
              to quantum computing, learn how to capitalize on $50B+ market opportunities.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">45 min read</span>
              <Link
                href="/blog/ai-2026-mega-trends"
                className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors"
              >
                Read Trends →
              </Link>
            </div>
          </div>

          {/* Foundation Models Playbook */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Foundation Models Playbook
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Complete guide to foundation model selection, deployment, and optimization. 
              Practical strategies for enterprise AI implementation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">30 min read</span>
              <Link
                href="/blog/ai-foundation-models-2026"
                className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
              >
                Get Playbook →
              </Link>
            </div>
          </div>

          {/* Zero Trust Security */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-red-200 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              AI Zero Trust Security 2026
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Advanced AI security architecture with zero-trust principles. Protect your 
              AI systems with enterprise-grade security frameworks.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">25 min read</span>
              <Link
                href="/blog/ai-zero-trust-security-2026"
                className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          {/* Autonomous Infrastructure */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2026
              </span>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              AI Autonomous Infrastructure 2026
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Revolutionary AI automation guide showing how to achieve 99% process automation 
              with intelligent, self-evolving systems.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">25 min read</span>
              <Link
                href="/blog/ai-autonomous-infrastructure-2026"
                className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors"
              >
                Read Guide →
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
    </div>
  );
}