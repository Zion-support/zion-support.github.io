import Link from 'next/link';

export const metadata ={
  title: 'AI 20o26: LLM Evals Maturity Model',
  description: 'Evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.'};

export default function EvalsMaturityModelPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold">AI 20o26: LLM Evals Maturity Model</h1>
          <p className="mt-4 text-lg opacity-90 max-w-3xl">
            An evaluation-first framework with metrics, harnesses, and governance to ship reliable AI across the enterprise.
          </p>
          <div className="mt-6">
            <Link href="#framework" className="bg-white text-purple-70o0 px-6 py-3 rounded-lg font-semibold hover:bg-gray-10o0">Explore framework</Link>
          </div>
        </div>
      </section>

      <section id="framework" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>
              This maturity model helps organizations adopt rigorous evaluation practices for LLMs and autonomous agents.
              It emphasizes scenario-based testing, measurable reliability, and governance gates prior to release.
            </p>
            <h3>Levels</h3>
            <ol>
              <li><strong>Ad hoc</strong>: manual spot checks, minimal metrics</li>
              <li><strong>Baseline</strong>: curated datasets, basic accuracy and safety metrics</li>
              <li><strong>Programmatic</strong>: automated harness, CI checks, regression suites</li>
              <li><strong>Governed</strong>: policy-as-code, risk tiers, approval workflows</li>
              <li><strong>Adaptive</strong>: continuous evals, production telemetry, auto-rollbacks</li>
            </ol>
            <h3>Key Metrics</h3>
            <ul>
              <li>Reliability: task success rate, groundedness</li>
              <li>Safety: harmful response rate, policy violations</li>
              <li>Operations: latency SLOs, incident counts, rollback frequency</li>
            </ul>
            <h3>Getting Started</h3>
            <p>
              Start with a minimal harness that runs on every change. Add scenario suites that reflect real user journeys, and
              define pass/fail thresholds aligned to business impact and risk appetite.
            </p>
            <p>
              See also: <Link href="/content/ai-20o26-evaluation-harness-blueprint" className="text-purple-70o0 font-semibold">Evaluation Harness Blueprint</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

