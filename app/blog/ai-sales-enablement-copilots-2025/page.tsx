import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Sales Enablement Copilots 2025: Playbooks, Safety, and ROI',
  description:
    'How to deploy secure, measurable AI sales copilots for prospecting, call prep, objection handling, and follow-ups—with governance and evals.',
  keywords: ['sales copilots', 'AI sales', 'enablement', 'genai', 'guardrails', 'evaluations'],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">NEW • Sep 12, 2025</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Sales Enablement Copilots 2025: Playbooks, Safety, and ROI</h1>
          <p className="text-lg text-gray-700 mb-6">
            Practical architectures and prompts for prospecting, call preparation, live coaching, and follow-ups. We cover data governance, prompt injection defenses,
            evaluator-driven quality, and metrics that correlate to pipeline and revenue.
          </p>
          <div className="flex flex-wrap gap-2 text-sm mb-8">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Copilots</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Sales</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Governance</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Evaluation</span>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Reference Architecture</h2>
            <p>
              Combine CRM-synced profiles, conversation intelligence, and tool contracts for calendar, email, and CRM updates. Use role-specific system prompts and
              policy checks on inputs, tool arguments, and outputs.
            </p>
            <ul>
              <li>Context assembly: accounts, personas, last-touch, objections</li>
              <li>Live coaching with real-time evaluators and fallback scripts</li>
              <li>Human-in-the-loop approvals for high-risk actions</li>
              <li>Observability: spans, success labels, and win-rate correlation</li>
            </ul>

            <h2>Guardrails</h2>
            <p>Data minimization, redaction, allow/deny tool lists, and audit logs. Test with targeted red-teaming and regression suites.</p>

            <h2>KPIs</h2>
            <p>Track meetings booked, stage conversion, average cycle time, and incremental revenue influenced. Start with shadow mode and A/B rollouts.</p>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/resources/ai-evaluation-checklist-2025" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Download Evaluation Checklist
            </Link>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

