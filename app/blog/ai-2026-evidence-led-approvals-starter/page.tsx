import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'AI 2026: Evidence‑Led Approvals — Starter Templates',
  description:
    'Copy‑paste approval policies, risk tiers, and evidence fields wired to evaluation gates and runtime guardrails.',
};

export default function EvidenceLedApprovalsStarterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <main className="container mx-auto px-6 py-12">
        <nav className="mb-8">
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Blog
          </Link>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                Policy‑as‑Code
              </span>
              <span className="text-white/60 text-sm">September 16, 2025</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 text-sm">7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
              Evidence‑Led Approvals — Starter Templates
            </h1>
            <p className="text-white/80 text-lg">
              Ship governed autonomy faster with minimal, auditable approval policies wired to evaluation gates and
              runtime guardrails.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Why evidence‑led approvals?</h2>
            <p>
              Approvals should capture just enough evidence to prove safety and compliance. These templates keep it
              simple while integrating with scorecards, evals, and runtime policy.
            </p>

            <h3>Starter policy (YAML)</h3>
            <pre><code>{`policy: approvals.v1
name: production_release_minimal
risk_tiers:
  - name: low
    approvers: [service_owner]
  - name: medium
    approvers: [service_owner, oncall]
  - name: high
    approvers: [service_owner, oncall, security]
evidence:
  - name: eval_pass_rate
    required: true
    description: ">= 95% pass across critical evals"
  - name: rollback_plan
    required: true
    description: "Link to tested rollback contract"
gates:
  - name: safety_scorecard
    min_score: 0.8
`}</code></pre>

            <h3>CI wiring</h3>
            <pre><code>{`# .github/workflows/release.yml
- name: Approvals
  uses: zion/actions/approvals@v1
  with:
    policy: approvals/production_release_minimal.yaml
    evidence: evidence.json
`}</code></pre>

            <h3>Next steps</h3>
            <ul>
              <li>Instrument evals and export a single pass/fail metric per gate</li>
              <li>Attach links to traces, incidents, and post‑release checks</li>
              <li>Promote from starter to blueprint as your maturity grows</li>
            </ul>
          </div>

          <footer className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-white/60 text-sm">Written by Zion Tech Group</span>
            <div className="flex gap-4">
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">More articles</Link>
              <Link href="/contact" className="text-fuchsia-300 hover:text-fuchsia-200">Get in touch</Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}

