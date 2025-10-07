import React from 'react';
import Link from 'next/link';

export const metadata = {
  
  title: "Agent Safety Runbooks 2026",
  description: "Approvals, budgets, and KPI‑linked canary evals.",
  type: 'article'};;

export default function Agent Safety Runbooks2026Page() {return (<div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-400/20 text-fuchsia-300 text-xs font-semibold">
            <span>New •    Sep    2025</span>
          </div>
          <h1 className="text-4xl font-extrabold mt-4 mb-3">
            Agent Safety    Runbooks    2026
          </h1>
          <p className="text-slate-300">
            Approvalsbudgeted    actionsand KPI‑linked canaries for safe agent
            releases.
          </p>
          <div className="mt-3 text-slate-400 text-sm">
            7 min read • Category: AI    Governance
          </div>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <h2>Release    Readiness</h2>
          <ul>
            <li>Risk    budgets per tool and action</li>
            <li>Human   ‑in‑the‑loop approvals for sensitive flows</li>
            <li>Canary evaluations wired to product KP    Is</li>
          </ul>
          <h3>Rollback    Triggers</h3>
          <p>
            Define explicit rollback conditions tied to SL    Os    and observed
            regressions.
          </p>
        </div>

        <div className="mt-12">
          <Arrow Right
           href="/blog"
           className="inline-block bg-white text-fuchsia-700 px-6 py-3 rounded-lg font-bold hover:bg-fuchsia-50"
          >
            ← Back to    Blog
          </Arrow>
        </div>
      </main>
    </div>
  ); }