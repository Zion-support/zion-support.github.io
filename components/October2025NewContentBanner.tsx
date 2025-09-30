import React from 'react';
import Link from 'next/link';

export default function October2025NewContentBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-cyan-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-200 px-3 py-1 rounded-full text-sm font-semibold mb-3">
              <span>🆕</span>
              New Content — October 2025
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Fresh Insights: Prompt Injection Defense 2025 and AI Cost Optimization 2026
            </h2>
            <p className="text-white/80 mt-2 max-w-2xl">
              Ship safer, cheaper GenAI. Explore our enterprise blueprint for prompt injection defense and a
              proven playbook to cut GenAI costs without sacrificing quality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-2025-prompt-injection-defense-blueprint"
              className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
            >
              Read Prompt Injection Defense →
            </Link>
            <Link
              href="/blog/ai-2026-cost-optimization-blueprint"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 hover:border-white text-white font-semibold rounded-lg transition-colors"
            >
              Read Cost Optimization Guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

