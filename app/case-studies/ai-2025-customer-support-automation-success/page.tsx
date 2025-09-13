import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerSupportAutomationSuccess2025() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🤝 CUSTOMER SUPPORT CASE STUDY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">AI Customer Support Automation</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              60% ticket deflection, 45% faster resolution, and +22 NPS in 6 months using agentic workflows
              with guardrails and end-to-end observability.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <h2>Executive Summary</h2>
        <ul>
          <li>60% deflection of Tier-1 inquiries</li>
          <li>45% faster resolution time (P50)</li>
          <li>22 point NPS increase</li>
          <li>Estimated $4.2M annual OPEX reduction</li>
        </ul>

        <h2>Architecture</h2>
        <ul>
          <li>Router + tools with typed contracts</li>
          <li>Policy checks and kill switches</li>
          <li>Tracing, evals, and cost budgets</li>
        </ul>

        <p>
          See also: <Link href="/blog/ai-2025-agentic-orchestration-blueprint">Agentic Orchestration Blueprint 2025</Link>
        </p>
      </article>
    </div>
  );
}

