import React from 'react';
import { Link } from 'react-router-dom';

export default function September30ContentPromo2025() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white rounded-2xl my-12 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-4">
            <span className="text-white font-semibold text-sm">New — September 30, 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">3 Fresh Publications You Should Read Today</h2>
          <p className="text-white/90 mt-3 text-lg max-w-3xl mx-auto">
            Trustworthy agents, zero-trust security for autonomy, and Innovation Labs that ship 10x faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition">
            <h3 className="text-2xl font-bold mb-2">Trustworthy AI Agents</h3>
            <p className="text-white/85 mb-4">Blueprint for safe, scalable agent deployments.</p>
            <Link href="/blog/ai-september-30-2025-trustworthy-agents" className="inline-block bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">
              Read →
            </Link>
          </article>

          <article className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition">
            <h3 className="text-2xl font-bold mb-2">Agent Security Blueprint</h3>
            <p className="text-white/85 mb-4">Zero-trust controls for autonomous systems.</p>
            <Link href="/blog/ai-september-30-2025-agent-security-blueprint" className="inline-block bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">
              Read →
            </Link>
          </article>

          <article className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition">
            <h3 className="text-2xl font-bold mb-2">AI Innovation Labs</h3>
            <p className="text-white/85 mb-4">Achieve 10x velocity with guardrails.</p>
            <Link href="/blog/ai-september-30-2025-innovation-labs" className="inline-block bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">
              Read →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

