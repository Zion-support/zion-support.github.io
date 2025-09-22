import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'AI 2026: Agentic Risk and Safety Playbook',
  description: 'Practical patterns to assess and mitigate risks in agentic systems.',
};

export default function AgenticRiskAndSafetyPlaybookPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Agentic Risk and Safety Playbook (2026)</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Patterns to measure, mitigate, and govern risks for autonomous agents in production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="bg-white text-rose-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Back to Blog</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-700 transition-colors">Talk to Experts</Link>
          </div>
        </div>
      </section>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-700">This playbook explores safety evaluation gates, incident response, red-teaming, and policy enforcement for agentic systems.</p>
      </article>
    </div>
  );
}