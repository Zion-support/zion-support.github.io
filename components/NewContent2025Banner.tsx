import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContent2025Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Insights
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the latest AI trends, implementation guides, and success stories that are transforming enterprises in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                AI Enterprise Automation Revolution 2025
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Complete implementation guide for achieving 300% ROI, 70% cost reduction, and 90% efficiency gains.
              </p>
              <div className="flex items-center text-blue-200 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-multimodal-integration-guide" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-200 transition-colors">
                AI Multimodal Integration Guide 2025
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master text, voice, and video AI integration for 250% efficiency gains and 60% cost reduction.
              </p>
              <div className="flex items-center text-purple-200 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-enterprise-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-200 transition-colors">
                AI Transformation Success: 400% ROI
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a Fortune 500 company achieved 400% ROI, 70% cost reduction, and 90% efficiency gains.
              </p>
              <div className="flex items-center text-green-200 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Stay ahead with the latest AI insights and proven strategies
          </p>
        </div>
      </div>
    </section>
  );
}