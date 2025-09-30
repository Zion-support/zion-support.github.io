import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Platform Engineering Scorecards 2026: From Golden Paths to Outcomes',
  description:
    'Measure adoption, golden-path time-to-first-success, SLOs, and shipped value—without slowing delivery. A pragmatic 2026 playbook.',
};

export default function PlatformEngineeringScorecards2026Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">New • 2026</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Platform Engineering Scorecards 2026
          </h1>
          <p className="text-xl mb-8 opacity-90">
            From golden paths to business outcomes: how to measure the platform work that actually
            accelerates delivery without adding friction.
          </p>
          <div className="flex items-center gap-6 text-sm opacity-75">
            <span>📅 October 9, 2025</span>
            <span>⏱️ 8 min read</span>
            <span>👤 Zion Tech Group Team</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Scorecards Beat Vanity Metrics</h2>
          <p className="text-lg text-gray-700 mb-6">
            Traditional platform metrics measure activity, not outcomes. In 2026, leading teams
            align platform goals with developer experience and shipped value. Scorecards translate
            technical capabilities into adoption, reliability, and business impact.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8 rounded-md">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">The Scorecard (v2026)</h3>
            <ul className="space-y-2 text-gray-800">
              <li>• Adoption of Golden Paths (TTFX, completion rate)</li>
              <li>• Reliability SLOs (error rates, MTTR, change failure rate)</li>
              <li>• Flow Metrics (PR lead time, batch size, WIP)</li>
              <li>• Shipped Value Proxies (feature throughput, incident reduction)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementing Without Slowing Teams</h2>
          <p className="text-lg text-gray-700 mb-6">
            Wire scorecards into existing workflows: instrument golden paths, add lightweight PR
            checks, and publish a weekly digest. Keep the platform self-serve, documented, and
            supported with office hours.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Golden Path KPIs</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Time to first success (TTFX)</li>
                <li>• Docs discoverability</li>
                <li>• Template completion rate</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability KPIs</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• MTTR and change failure rate</li>
                <li>• Error budget burn</li>
                <li>• Release frequency</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rollout Plan</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-8">
            <li>Pilot with one golden path. Instrument, measure, and publish a baseline.</li>
            <li>Add DX feedback loop. Fix top 3 friction points every sprint.</li>
            <li>Wire scorecards to quarterly outcomes and share wins widely.</li>
          </ol>

          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Need help implementing scorecards?</h3>
            <p className="mb-6 opacity-90">We build pragmatic, engineering-friendly scorecards that teams adopt.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+13024640950" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all">Get Consultation</a>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <RelatedCard title="AI Platform ROI Scorecards" href="/blog/ai-platform-roi-2025" />
            <RelatedCard title="GenAI Guardrails Blueprints" href="/blog/genai-guardrails-blueprints-2026" />
            <RelatedCard title="Cloud FinOps Scorecards" href="/blog/cloud-finops-scorecards-2026" />
          </div>
        </div>
      </section>
    </div>
  );
}

function RelatedCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <span className="text-indigo-600 font-semibold">Read More →</span>
    </Link>
  );
}

