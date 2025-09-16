import React from 'react';
import Link from 'next/link';

export default function AI2026EvaluationCookbook() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI 2026: Evaluation Cookbook</h1>
          <p className="text-lg md:text-xl opacity-90">Scenario suites, metrics, and policies to ship reliable autonomous systems.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <p>
            Use these recipes to define objective signals that gate each lifecycle step — pre-merge checks,
            shadow runs, progressive delivery, and production safety scorecards. Copy, tweak, and adopt.
          </p>
          <h2>Recipes</h2>
          <ul>
            <li>Groundedness and factuality with reference corpora</li>
            <li>Tool correctness and side‑effect safety</li>
            <li>Latency, cost, and stability budgets</li>
            <li>User utility and satisfaction proxies</li>
          </ul>
          <h2>Policy Integration</h2>
          <p>
            Express pass/fail as policy-as-code and publish results to a central evidence hub to justify change.
          </p>
          <div className="mt-8">
            <Link href="/" className="text-amber-700 font-semibold hover:text-amber-900">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

