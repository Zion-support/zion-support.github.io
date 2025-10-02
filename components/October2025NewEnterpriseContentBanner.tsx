import React from 'react';

export default function October2025NewEnterpriseContentBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-sm border-y border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-300 font-bold text-sm tracking-wider uppercase">
              💎 JUST PUBLISHED: October 1, 2025 - New Enterprise AI Content
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Transform Your Enterprise with AI Orchestration
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Discover how Fortune 500 companies achieve 10x efficiency and $3.2B+ savings with multi-agent AI systems
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-indigo-900/30 rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-bold text-indigo-300">$3.2B</div>
              <div className="text-xs text-gray-300">Proven Savings</div>
            </div>
            <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-300">10x</div>
              <div className="text-xs text-gray-300">Efficiency Gain</div>
            </div>
            <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-300">95%</div>
              <div className="text-xs text-gray-300">Automation Rate</div>
            </div>
            <div className="bg-pink-900/30 rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-bold text-pink-300">840%</div>
              <div className="text-xs text-gray-300">ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/ai-2025-october-enterprise-ai-orchestration-mastery"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Read Full Guide →
            </a>
            <a
              href="/case-studies/fortune-500-ai-orchestration-3-2b-success"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              View Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
