import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Procurement Playbook 2025: Buy Fast, Avoid Regret',
  description:
    'A pragmatic guide for evaluating, piloting, and purchasing AI software in 2025 without vendor lock-in or runaway costs.',
  keywords:
    'AI procurement, vendor evaluation, RFP, proof of value, AI contracts, ROI, 2025',
  openGraph: {
    title: 'AI Procurement Playbook 2025: Buy Fast, Avoid Regret',
    description:
      'A pragmatic guide for evaluating, piloting, and purchasing AI software in 2025 without vendor lock-in or runaway costs.',
    type: 'article',
    publishedTime: '2025-09-11T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIProcurementPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Procurement & Governance</span>
          </div>

          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Procurement Playbook 2025: Buy Fast, Avoid Regret
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold">ZT</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Zion Tech Group</div>
                <div className="text-sm">Advisory Team</div>
              </div>
            </div>
            <div className="text-sm">
              <div>September 11, 2025</div>
              <div>10 min read</div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl mb-12 flex items-center justify-center">
          <div className="text-8xl">🛒</div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            AI buying cycles can stretch for months and still miss the mark. This playbook
            compresses evaluation, de-risks pilots, and locks in value without lock-in.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Define Outcomes and Guardrails</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Outcome metrics: cycle time reduced, deflection rate, unit cost per task.</li>
            <li>Non-negotiables: data residency, human-in-the-loop, audit/export guarantees.</li>
            <li>Pilot boundary: 30–60 days, fixed scope, success criteria agreed upfront.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proof of Value over Proof of Concept</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Pilot Checklist</h3>
            <ul className="text-blue-800 space-y-2">
              <li>• Production-like data subset with redaction where required</li>
              <li>• Observability for quality, cost, latency, and failure modes</li>
              <li>• Exit ramps: export data/artefacts; model and vector portability</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Commercials that Scale with Value</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
            <li>Hybrid pricing: platform fee + usage ceilings with pre-approved overages.</li>
            <li>Expansion paths: SSO, audit, retention policies as add-ons—not bundles.</li>
            <li>Exit clauses: performance guarantees tied to agreed outcome metrics.</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Need an AI procurement sprint?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              We help legal, security, and tech teams align on a 30-day PoV with clear
              metrics, risk controls, and fast time-to-value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Talk to Our Team
              </Link>
              <Link href="/services/ai-services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View AI Services
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ai-governance-in-practice-2025" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                    AI Governance in Practice 2025
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Controls that reduce risk without blocking delivery.
                  </p>
                </div>
              </Link>
              <Link href="/blog/enterprise-rag-architecture-2025" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
                    Enterprise RAG Architecture 2025
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Reference patterns for governed, reliable retrieval systems.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

