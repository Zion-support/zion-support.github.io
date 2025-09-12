import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Study: Insurance Underwriting Agents — 42% Cycle Time Reduction',
  description: 'How an insurer automated evidence gathering, risk scoring, and policy recommendations using agentic workflows with auditable guardrails.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Insurance Underwriting Agents</h1>
          <p className="text-lg opacity-90">
            42% faster underwriting cycle time and 28% loss ratio improvement by automating evidence gathering, risk
            summarization, and recommendations — with strong governance and human-in-the-loop approvals.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <h2>Outcomes</h2>
          <ul>
            <li>42% underwriting cycle time reduction</li>
            <li>28% loss ratio improvement via better risk classification</li>
            <li>Full audit trail with guardrails, evals, and sign-offs</li>
          </ul>

          <h2>Architecture</h2>
          <p>
            Agentic workflow orchestrates document ingestion, entity extraction, third-party data checks, and risk
            scoring. All steps observed with tracing and budget guardrails, escalating to human review when needed.
          </p>

          <h2>Implementation Notes</h2>
          <p>
            Incremental rollout with evals in staging and shadow-mode production ensured safety and accuracy before
            expanding to new product lines.
          </p>
        </article>

        <div className="mt-10 flex gap-3">
          <Link href="/resources/ai-evaluation-checklist-2025" className="bg-emerald-600 text-white px-4 py-2 rounded-lg">
            Download Evaluation Checklist
          </Link>
          <Link href="/content-showcase" className="border border-gray-300 px-4 py-2 rounded-lg">
            Explore More Content
          </Link>
        </div>
      </main>
    </div>
  );
}

