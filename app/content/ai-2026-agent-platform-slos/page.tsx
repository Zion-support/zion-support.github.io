import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Agent Platform SLOs That Matter',
  description: 'A concise SLO set for safety, quality, reliability, and cost—ready to adopt.'
};

export default function AgentPlatformSLOsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Agent Platform SLOs That Matter</h1>
          <p className="text-lg md:text-xl opacity-90">
            A concise SLO set for safety, quality, reliability, and cost—ready to adopt.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Safety SLOs</h2>
            <ul>
              <li>Policy violation rate ≤ 0.5/1k actions (95% confidence)</li>
              <li>Red-team findings resolution ≤ 24h</li>
              <li>Safety incident MTTR ≤ 1h</li>
            </ul>

            <h2>Quality SLOs</h2>
            <ul>
              <li>Task success rate ≥ 98% on critical scenarios</li>
               <li>No regression &gt; 0.5% in eval scores</li>
              <li>Hallucination rate ≤ 2%</li>
            </ul>

            <h2>Reliability SLOs</h2>
            <ul>
              <li>Action success rate ≥ 99.5%</li>
              <li>Safe-mode MTTR ≤ 5 minutes</li>
              <li>Uptime ≥ 99.9%</li>
            </ul>

            <h2>Cost SLOs</h2>
            <ul>
              <li>Cost per successful task within budget</li>
              <li>Cache hit rate ≥ 60%</li>
              <li>Token efficiency ≥ 90%</li>
            </ul>

            <h2>Implementation</h2>
            <p>
              Use policy-as-code to codify thresholds and evaluation suites to gate changes. 
              Break the build when deltas exceed allowed error bars.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Get Implementation Help</Link>
              <Link href="/blog/ai-2026-agent-platform-slos-best-practices" className="border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Best Practices Guide</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}