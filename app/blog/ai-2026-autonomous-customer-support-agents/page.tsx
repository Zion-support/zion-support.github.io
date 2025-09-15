import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Autonomous Customer Support Agents - Zion Tech Group',
  description:
    'Design and operate autonomous customer support agents with guardrails, evals, and observability to deliver measurable CSAT and cost savings.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Autonomous Customer Support Agents</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            A practical blueprint to deploy autonomous support agents with routing, safeguards, and evaluation gates, improving CSAT while reducing handle time.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Executive Summary</h2>
          <p>
            Enterprises can now deploy autonomous agents across Tier 0-2 support with strong guardrails. This guide covers intent detection, tool access, guardrail policies, continuous evaluation, and observability.
          </p>

          <h2>Reference Architecture</h2>
          <ul>
            <li>Multi-channel intake with safety prefilters</li>
            <li>Policy-as-code to govern actions and data access</li>
            <li>Tool orchestration for CRM, knowledge, RMA, and billing</li>
            <li>Closed-loop evaluations and incident response</li>
          </ul>

          <h2>KPIs</h2>
          <ul>
            <li>First-contact resolution rate</li>
            <li>Average handle time</li>
            <li>Deflection and containment</li>
            <li>CSAT and quality score</li>
          </ul>

          <h2>Next Steps</h2>
          <p>
            Ready to pilot? Explore our implementation checklist and schedule a discovery session.
          </p>

          <p>
            <Link href="/contact" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Talk to an expert</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

