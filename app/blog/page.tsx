import React from 'react';
import Link from 'next/link';
export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Explore our latest AI insights, guides, and case studies.'
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-6">Zion Insights Blog</h1>
        <p className="text-white/70 mb-10">
          Curated research, playbooks, and case studies for enterprise AI leaders.
        </p>
        <div className="space-y-4">
          <Link href="/blog/ai-2027-autonomous-governance-blueprint" className="text-blue-300 hover:text-blue-200 underline">
            AI 2027 Autonomous Governance Blueprint
          </Link>
          <br />
          <Link href="/blog/ai-2026-agent-ops-observability" className="text-fuchsia-300 hover:text-fuchsia-200 underline">
            Agent Ops Observability 2026
          </Link>
        </div>
      </main>
    </div>
  );
}

