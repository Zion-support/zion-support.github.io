import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AISalesAcceleration2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Sales Acceleration 2025: Playbooks to Shorten Sales Cycles"
        description="Practical AI tactics to accelerate B2B sales: lead scoring, outreach automation, proposal generation, and RevOps instrumentation."
        keywords="AI sales, sales acceleration, lead scoring, outreach automation, RevOps, proposal generation, AI in sales"
        url="/blog/ai-2025-ai-sales-acceleration"
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mb-4">Sales & GTM</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Sales Acceleration 2025: From First Touch to Closed Won</h1>
          <p className="text-gray-600">Shorten sales cycles by 30–50% with AI-powered lead scoring, smart outreach, and automated proposal generation.</p>
          <div className="mt-3 text-sm text-gray-500">12 min read • Sep 12, 2025</div>
        </header>

        <section className="prose prose-lg max-w-none">
          <h2>What Changes With AI In Sales</h2>
          <p>
            Sales teams are moving from manual, rep-driven workflows to instrumented, data-driven systems. AI sits across
            the funnel to prioritize accounts, personalize at scale, and remove latency between steps.
          </p>

          <h3>1) Predictive Lead Scoring</h3>
          <ul>
            <li>Unify CRM, product usage, and marketing signals</li>
            <li>Score on fit and intent; trigger sequences when score crosses threshold</li>
            <li>Route to best rep automatically with context</li>
          </ul>

          <h3>2) Intelligent Outreach</h3>
          <ul>
            <li>Generate first-touch emails tailored to persona and pain</li>
            <li>Summarize account news and technographics for call prep</li>
            <li>Auto-log outcomes and update play selection</li>
          </ul>

          <h3>3) Proposal and SOW Drafting</h3>
          <ul>
            <li>Assemble proposals from approved blocks and pricing guardrails</li>
            <li>Fill gaps with RFP Q&A using a retrieval layer</li>
            <li>Export branded PDF and e-sign packet in one click</li>
          </ul>

          <h2>Measured Outcomes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">-35%</div>
              <div className="text-xs text-gray-600">Cycle Time</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">+22%</div>
              <div className="text-xs text-gray-600">Win Rate</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">+18%</div>
              <div className="text-xs text-gray-600">ACV</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">-40%</div>
              <div className="text-xs text-gray-600">Admin Time</div>
            </div>
          </div>

          <h2>Starter Stack</h2>
          <p>Use your CRM as the system of record and add:</p>
          <ul>
            <li>Scoring: model hosted in your data warehouse or ML platform</li>
            <li>Sequencing: outreach tool with programmatic API</li>
            <li>RAG: proposal content library with retrieval</li>
            <li>Dashboards: RevOps metrics and SLA alerts</li>
          </ul>

          <h2>Next Steps</h2>
          <p>Run a 4-week pilot on one segment, then templatize and scale across regions.</p>
        </section>

        <footer className="mt-12 border-t pt-6 flex items-center justify-between">
          <Link href="/resources/ai-sales-battlecards-kit-2025" className="text-purple-700 font-medium hover:underline">Download AI Sales Battlecards Kit →</Link>
          <Link href="/contact" className="text-gray-700 hover:underline">Get a free GTM assessment</Link>
        </footer>
      </article>
    </div>
  );
}

