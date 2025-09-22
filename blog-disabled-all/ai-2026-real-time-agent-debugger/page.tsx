import Link from 'next/link';
import React from 'react';

export const metadata = {
};

export default function RealTimeAgentDebuggerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Agent Debugger</h1>
          <p className="text-xl text-gray-600">
            Debug autonomous agents in production with live traces, prompt/tool diffs, eval IDs, and rollback-ready guardrails.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Key Features</h2>
            <ul>
              <li>Live trace monitoring</li>
              <li>Prompt and tool diffs</li>
              <li>Evaluation ID tracking</li>
              <li>Rollback-ready guardrails</li>
            </ul>
          </div>

          <div className="mt-10 flex gap-4">
            <Link href="/contact" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Get Started</Link>
            <Link href="/resources" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Learn More</Link>
          </div>
        </div>
      </section>
    </main>
  );
}