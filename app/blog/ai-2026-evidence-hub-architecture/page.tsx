import Link from 'next/link';
import React from 'react';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI 2026: Evidence Hub Architecture',
  description:
    'Blueprint for an audit-ready evidence hub linking datasets, evals, traces, guardrails, and releases.',
  keywords: [
    'evidence hub',
    'evals',
    'traces',
    'guardrails',
    'release engineering',
    'audit readiness',
  ],
};

const EvidenceHubArchitecturePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI 2026: Evidence Hub Architecture"
        description="Blueprint for an audit-ready evidence hub linking datasets, evals, traces, guardrails, and releases."
        keywords="evidence hub, evals, traces, guardrails, release engineering, audit readiness"
        url="/blog/ai-2026-evidence-hub-architecture"
      />

      <section className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold opacity-90">Reliability • 2025-09-16</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Evidence Hub Architecture</h1>
          <p className="text-lg md:text-xl opacity-90 mt-4 max-w-3xl">Unify evaluations, production traces, and guardrail signals into a single source of truth.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Core Components</h2>
          <ul>
            <li>Dataset Registry with versioned datasets and lineage</li>
            <li>Eval Store with scenario, metrics, and thresholds</li>
            <li>Trace Index linking runs to datasets and eval results</li>
            <li>Guardrail Signal Bus aggregating policy and runtime checks</li>
          </ul>

          <h3>Release Integration</h3>
          <p>Attach scorecards to releases, gate promotions based on eval thresholds, and export audit bundles for regulators and customers.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/blog/ai-2026-release-scorecards" className="text-violet-700 font-semibold hover:text-violet-900">Release Scorecards →</Link>
          <Link href="/content/ai-2026-evaluation-hub" className="text-violet-700 font-semibold hover:text-violet-900">Evaluation Hub →</Link>
          <Link href="/contact" className="text-white bg-violet-600 px-5 py-3 rounded-lg font-semibold hover:bg-violet-700">Talk to an Expert</Link>
        </div>
      </article>
    </div>
  );
};

export default EvidenceHubArchitecturePage;

