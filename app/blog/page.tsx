import React from 'react';
import Link from 'next/link';

const posts = [
  { href: '/blog/ai-2026-safe-rollouts-in-production', title: 'AI 2026: Safe Rollouts in Production', tag: 'New' },
  { href: '/blog/ai-2026-production-evidence-hub-blueprint', title: 'AI 2026: Production Evidence Hub — Blueprint', tag: 'New' },
  { href: '/blog/ai-2026-enterprise-ai-security-blueprint', title: 'AI 2026: Enterprise AI Security Blueprint', tag: 'Popular' },
  { href: '/blog/ai-2025-enterprise-agents-vs-autonomous-copilots', title: 'Agents vs. Copilots (2025)', tag: 'Guide' },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="mt-3 text-purple-100/90">Practical guides, playbooks, and blueprints for AI in the enterprise.</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.href} href={p.href} className="block bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold text-purple-700">{p.tag}</div>
              <div className="text-lg font-bold text-gray-900 mt-1">{p.title}</div>
              <div className="mt-2 text-purple-700 font-semibold">Read →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

