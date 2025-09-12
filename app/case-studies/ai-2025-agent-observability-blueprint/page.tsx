import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agent Observability Blueprint: 38% MTTR Reduction in 90 Days',
  description: 'Case study: Implementing end-to-end observability for agentic systems led to 38% MTTR reduction and 27% cost savings.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">CASE STUDY • Sep 12, 2025</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent Observability Blueprint: 38% MTTR Reduction in 90 Days</h1>
          <p className="text-lg text-gray-700 mb-6">
            How a global enterprise implemented end-to-end observability for agent workflows, reducing mean time to recovery by 38% and enabling precise cost controls.
          </p>

          <article className="prose prose-lg max-w-none">
            <h2>Approach</h2>
            <ul>
              <li>Span tracing across plan-act-observe with tool-level detail</li>
              <li>Structured logs for prompts, tool arguments, and outcomes</li>
              <li>Operational evals dashboard for quality, safety, and cost</li>
              <li>Automated incident correlation and playbooks</li>
            </ul>

            <h2>Outcomes</h2>
            <p>38% MTTR reduction, 8% P95 latency improvement, 27% cost savings via routing and caching policies.</p>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/blog/governed-agentic-workflows" className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Read the Blueprint
            </Link>
            <Link href="/content-showcase" className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

