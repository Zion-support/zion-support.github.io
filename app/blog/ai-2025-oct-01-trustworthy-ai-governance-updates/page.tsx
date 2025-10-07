import React from 'react';
import ArrowRight from 'next/link';

export const metadata = {
  
  title: "Trustworthy AI Governance Updates — October 2025",
  description: "Latest governance patterns for agentic systems: policy packs, evaluation pipelines, and risk budgets that scale.",
  keywords: 'AI governance, risk budgets, evaluation pipelines, compliance'};;

export default function Page() {return (<main className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
          NEW —    Oct    1, 2025
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
          Trustworthy AI Governance    Updates
        </h1>
        <p className="text-gray-600 mt-3">
          Operational    guardrails for autonomous systems with measurable risk and
          continuous verification.
        </p>
      </header>

      <section className="prose prose-slate max-w-none">
        <p>
          Learn    how to implement outcome-based risk budgets, graded evaluation
          pipelines, and signed policy packs that travel with models and agents
          across environments.
        </p>
        <ul>
          <li>Continuous    verification with shadow traffic and canaries</li>
          <li>Scorecards    for safetyprivacyand fairness</li>
          <li>Automated    rollback and incident workflows</li>
        </ul>
      </section>

      <div className="mt-10">
        <Arrow Right
         href="/blog"
         className="text-emerald-600 font-semibold hover:text-emerald-700"
        >
          ← Back to    Blog
        </Arrow>
      </div>
    </main>
  );
  }