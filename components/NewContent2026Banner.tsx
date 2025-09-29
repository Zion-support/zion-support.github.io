import React from 'react';
import Link from 'next/link';

export default function NewContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 New 2026 Content: Latest AI Innovations
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Discover cutting-edge AI strategies, real-world case studies, and breakthrough technologies 
            that are transforming industries in 2026
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* AI Agent Orchestration */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">AI Agent Orchestration</h3>
                <p className="text-sm opacity-80">Multi-agent systems</p>
              </div>
            </div>
            <p className="text-sm mb-4 opacity-90">
              Master multi-agent coordination patterns for complex workflows. Achieve 85% efficiency gains and $3M+ ROI.
            </p>
            <Link
              href="/blog/ai-agent-orchestration-2026"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Read Article →
            </Link>
          </div>

          {/* Responsible AI Development */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚖️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Responsible AI</h3>
                <p className="text-sm opacity-80">Ethics & safety</p>
              </div>
            </div>
            <p className="text-sm mb-4 opacity-90">
              Build ethical, safe, and sustainable AI systems. Reduce bias by 90% with comprehensive frameworks.
            </p>
            <Link
              href="/blog/ai-responsible-development-2026"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          {/* Manufacturing Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🏭</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Manufacturing Excellence</h3>
                <p className="text-sm opacity-80">$8M ROI case study</p>
              </div>
            </div>
            <p className="text-sm mb-4 opacity-90">
              See how a Fortune 500 manufacturer achieved $8M ROI with AI-driven process optimization and predictive maintenance.
            </p>
            <Link
              href="/case-studies/ai-manufacturing-excellence-2026"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore All 2026 Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">
            📈 Join 10,000+ professionals staying ahead with the latest AI insights
          </p>
        </div>
      </div>
    </div>
  );
}