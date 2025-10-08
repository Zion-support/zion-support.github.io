'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NewestContent2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const content = [
    {
      id: 'ai-2025-multi-agent-ops',
      title: 'AI 2025: Multi-Agent Operations Control Tower Blueprint',
      description: 'Revolutionary multi-agent AI system that orchestrates enterprise operations with unprecedented efficiency and intelligence.',
      url: '/blog/ai-2025-multi-agent-ops-control-tower-blueprint',
      type: 'Blog Post',
      category: 'AI Operations',
      metrics: {
        efficiency: '400%',
        accuracy: '99.8%',
        timeline: '6 months',
        adoption: '92%'
      }
    },
    {
      id: 'ai-2025-generative-design',
      title: 'AI 2025: Generative Design Systems Blueprint',
      description: 'Next-generation generative design systems that create optimized solutions across multiple domains and constraints.',
      url: '/blog/ai-2025-generative-design-systems-blueprint',
      type: 'Blog Post',
      category: 'Generative AI',
      metrics: {
        efficiency: '350%',
        accuracy: '98.5%',
        timeline: '4 months',
        adoption: '88%'
      }
    },
    {
      id: 'ai-2025-autonomous-business',
      title: 'AI 2025: Autonomous Business Process Implementation Guide',
      description: 'Complete guide to implementing autonomous business processes that run independently with minimal human intervention.',
      url: '/guides/ai-2025-autonomous-business-processes-implementation-guide',
      type: 'Implementation Guide',
      category: 'Business Process',
      metrics: {
        efficiency: '500%',
        accuracy: '99.2%',
        timeline: '8 months',
        adoption: '95%'
      }
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {content.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-sm font-semibold rounded-full border border-purple-400/30">
                    {item.type}
                  </span>
                  <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{item.metrics.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{item.metrics.timeline}</div>
                    <div className="text-xs text-gray-400">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-400">{item.metrics.adoption}</div>
                    <div className="text-xs text-gray-400">Adoption</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm"
                >
                  Read Now
                  <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Miss Out on the AI Revolution
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals already transforming their businesses with these cutting-edge AI insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Explore All Articles
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;