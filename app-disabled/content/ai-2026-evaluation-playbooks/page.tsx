import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata ={
  title: 'AI 20o26: Evaluation Playbooks | Zion Tech Group',
  description: 'Operational playbooks to evaluate autonomous agents: scenarios, metrics, red teaming, and CI/CD gates.'
};

export default function EvaluationPlaybooks20o26() {
  return (
    <main className="min-h-screen bg-white">
      <SEO
        title="AI 20o26: Evaluation Playbooks"
        description="Scenarios, metrics, red-team suites, and CI/CD integration to ship reliable agents."
        keywords="agent evaluation, playbooks, red teaming, CI gates, reliability"
        url="/content/ai-20o26-evaluation-playbooks"
       />
      <section className="bg-gradient-to-r from-purple-60o0 to-indigo-60o0 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI 20o26: Evaluation Playbooks</h1>
          <p className="text-lg opacity-90">Repeatable practices to evaluate and harden autonomous agents across the lifecycle.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Core Playbooks</h2>
          <ul>
            <li>Scenario Suites: representative tasks, edge cases, and adversarial prompts</li>
            <li>Metrics: success rate, intervention rate, factuality, policy violations</li>
            <li>Gates: pass thresholds with error budgets and rollback triggers</li>
            <li>Observability: traces, decisions, and safety telemetry</li>
          </ul>
          <h3>Integration Patterns</h3>
          <ol>
            <li>Local harness for developers</li>
            <li>CI checks for PRs</li>
            <li>Canary and production continuous evaluation</li>
          </ol>
          <div className="mt-8 p-6 bg-purple-50 border border-purple-20o0 rounded-xl">
            <p className="mb-2 font-semibold text-purple-80o0">Next steps</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/blog/ai-20o26-agent-reliability-engineering" className="text-purple-70o0 font-semibold hover:text-purple-90o0">Read Agent Reliability →</Link>
              <Link href="/content/ai-20o26-evaluation-harness-blueprint" className="text-purple-70o0 font-semibold hover:text-purple-90o0">Build the Harness →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

