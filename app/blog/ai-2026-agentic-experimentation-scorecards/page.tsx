import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agentic Experimentation Scorecards',
  description: 'Design counterfactual experiments and ship with evidence using standardized scorecards across agents and features.',
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <p className="text-sm font-semibold text-purple-700">Guide • September 2025</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">AI 2026: Agentic Experimentation Scorecards</h1>
        <p className="text-gray-600 mt-3">Run safe experiments with eval-gated changes, causal metrics, and release-ready scorecards.</p>
      </header>

      <section className="prose prose-lg max-w-none">
        <p>
          This guide provides a practical approach to agentic experimentation where every change is
          evaluated, gated, and captured as evidence. You will define hypotheses, set up
          intervention/observation points, and formalize decision policies with scorecards.
        </p>
        <h2>What you will implement</h2>
        <ul>
          <li>Experiment design with counterfactual prompts and interventions</li>
          <li>Policy-as-code approvals wired to evaluation gates</li>
          <li>Release decisioning with standardized scorecards (safety, quality, reliability, cost)</li>
        </ul>
        <h2>Blueprint</h2>
        <p>
          Start with a narrow workflow, enumerate risks, and attach measurements to each stage. Use
          canary routes and rollback contracts. Promote only when scorecards meet thresholds and
          evidence bundles are complete.
        </p>
        <h2>Artifacts</h2>
        <ul>
          <li>Hypothesis sheet and experiment charter</li>
          <li>Scorecard template with thresholds and guardrails</li>
          <li>Evidence bundle manifest for audits</li>
        </ul>
      </section>

      <footer className="mt-10 flex gap-4">
        <Link href="/" className="inline-block text-purple-600 font-semibold hover:text-purple-800">← Back to Home</Link>
        <Link href="/blog/ai-2026-causal-evaluation-blueprint" className="inline-block text-purple-600 font-semibold hover:text-purple-800">Read next: Causal Evaluation Blueprint →</Link>
      </footer>
    </main>
  );
}

