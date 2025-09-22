import Link from 'next/link';
import React from 'react';

export default function AI2026SafetyEvalsBlueprint() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Safety Evals Blueprint</h1>
          <p className="text-lg md:text-xl opacity-90">An end-to-end framework for evaluation, red-teaming, and release gating.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-violet">
          <p>
            Build a robust evaluation pipeline that keeps product quality high and risk low. This blueprint shows
            how to design metrics, generate test corpora, automate red-teaming, and implement policy-driven release
            gates across staging and production.
          </p>
          <h2>Core Components</h2>
          <ul>
            <li>Task- and risk-specific metrics with clear thresholds</li>
            <li>Automated adversarial generation and sampling</li>
            <li>Approval workflows with evidence capture</li>
            <li>Continuous monitoring and drift alerts</li>
          </ul>
          <div className="mt-8">
            <Link href="/" className="text-violet-700 font-semibold hover:text-violet-900">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

