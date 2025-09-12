import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Insurance Claims Automation 2025: 55% OPEX Reduction with AI Agents',
  description: 'A Tier-1 insurer automated FNOL, triage, and fraud checks with AI agents, reducing OPEX by 55% and improving CSAT by 18 points within 6 months.',
  keywords: ['insurance', 'claims automation', 'AI agents', 'FNOL', 'fraud', 'OPEX reduction', 'case study'],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">CASE STUDY • Sep 12, 2025</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Claims Automation: 55% OPEX Reduction with AI Agents</h1>
          <p className="text-lg text-gray-700 mb-6">
            How a Tier-1 insurer automated first notice of loss (FNOL), document intake, triage, and fraud checks using AI agents. The program cut average
            handling time by 42%, reduced leakage, and improved customer satisfaction by 18 points in 6 months.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2>Objectives</h2>
            <ul>
              <li>Reduce claims OPEX and cycle time without compromising risk controls</li>
              <li>Automate repetitive tasks end-to-end with human-on-the-loop oversight</li>
              <li>Improve CX with real-time status and proactive communication</li>
            </ul>

            <h2>Solution Architecture</h2>
            <ul>
              <li>Multimodal ingestion (voice, email, images, PDFs) to structured events</li>
              <li>Agentic workflows orchestrating FNOL, triage, SIU checks, and payments</li>
              <li>Guardrails and audit trails for every tool call and policy-sensitive action</li>
              <li>Observability: spans, red-team evals, and outcome analytics</li>
            </ul>

            <h2>Impact</h2>
            <p>
              55% OPEX reduction, 42% cycle time improvement, 0.6% fraud leakage reduction, +18 CSAT. Break-even in 4 months on a $2.1M program.
            </p>

            <h2>Key Lessons</h2>
            <ol>
              <li>Start with subflows that have clear policies and measurable baselines</li>
              <li>Invest early in evaluation harnesses and operational guardrails</li>
              <li>Design for human escalation and appeals by default</li>
            </ol>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/content-showcase" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Explore More Success Stories
            </Link>
            <Link href="/resources/ai-evaluation-checklist-2025" className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Download Evaluation Checklist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

