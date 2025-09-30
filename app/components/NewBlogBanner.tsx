import React from 'react';
import Link from 'next/link';

export default function NewBlogBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              📝 New Blog Posts
            </span>
            <span className="text-teal-200 text-sm">Fresh Content</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Latest Blog Posts & AI Insights
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest blog posts covering AI trends, implementation strategies, and success stories. Get expert insights and practical guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                New Article
              </span>
              <span className="text-teal-200 text-sm">12 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Agents in the Enterprise: 2025 Adoption Playbook
            </h3>
            <p className="text-teal-100 mb-4">
              Practical guide to rolling out autonomous AI agents across enterprise workflows with proven ROI strategies.
            </p>
            <Link
              href="/blog/ai-agents-in-the-enterprise-2025"
              className="text-blue-300 font-semibold hover:text-blue-200 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                Popular Post
              </span>
              <span className="text-teal-200 text-sm">9 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              LLM Cost Optimization in 2025: Practical Strategies
            </h3>
            <p className="text-teal-100 mb-4">
              Cut LLM spend by 30–70% with routing, caching, and quantization patterns for maximum efficiency.
            </p>
            <Link
              href="/blog/llm-cost-optimization-2025"
              className="text-green-300 font-semibold hover:text-green-200 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold">
                Featured Post
              </span>
              <span className="text-teal-200 text-sm">11 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              GenAI Guardrails 2025: Practical Playbook for Reliable AI
            </h3>
            <p className="text-teal-100 mb-4">
              Practical patterns to ship safe, reliable, and auditable GenAI systems in production environments.
            </p>
            <Link
              href="/blog/genai-guardrails-2025"
              className="text-purple-300 font-semibold hover:text-purple-200 transition-colors"
            >
              Read Article →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Read All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}