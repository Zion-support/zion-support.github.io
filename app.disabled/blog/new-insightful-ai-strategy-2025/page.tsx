import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Strategy 2025: 7 Practical Plays for Immediate Impact',
  description: 'A concise, actionable AI strategy for 2025 with seven practical plays any enterprise can start this quarter.',
  keywords: ['AI Strategy', 'Enterprise AI', 'Implementation', '2025', 'Playbook'],
  openGraph: {
    title: 'AI Strategy 2025: 7 Practical Plays for Immediate Impact',
    description: 'A concise, actionable AI strategy for 2025 with seven practical plays any enterprise can start this quarter.',
    type: 'article',
    publishedTime: '2025-09-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI Strategy', 'Enterprise AI', 'Playbook'],
  },
};

export default function AIPracticalStrategy2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/blog" className="inline-flex items-center text-purple-100 hover:text-white transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-purple-100/90">
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> September 15, 2025</div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 9 min read</div>
            <div className="flex items-center"><User className="w-4 h-4 mr-2" /> Zion Tech Group</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">AI Strategy 2025: 7 Practical Plays for Immediate Impact</h1>
          <p className="text-lg md:text-xl mt-4 opacity-95 max-w-3xl">Use these seven pragmatic plays to ship value quickly while laying the groundwork for long-term AI leverage across your enterprise.</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { title: 'Customer Service Copilots', desc: 'Deploy agent-assisted support to reduce handle time and increase CSAT.' },
            { title: 'Sales Enablement Copilots', desc: 'Generate proposals, summaries, and next steps directly in CRM.' },
            { title: 'Finance Reconciliation', desc: 'Automate invoice matching, variance detection, and anomaly alerts.' },
            { title: 'Marketing Content Engine', desc: 'Create on-brand assets with governance and approval workflows.' },
            { title: 'Ops Automation', desc: 'Triage tickets, update runbooks, and trigger remediations.' },
            { title: 'Data Quality Guardrails', desc: 'Establish lineage, PII controls, and evaluation harnesses.' },
            { title: 'Search & Knowledge', desc: 'Enterprise RAG with citations, feedback loops, and analytics.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <Lightbulb className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">30-60-90 Day Execution Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: '30 Days', items: ['Choose 2 plays', 'Set measurable KPIs', 'Stand up eval harness'] },
              { phase: '60 Days', items: ['Ship pilots', 'Instrument analytics', 'Train core users'] },
              { phase: '90 Days', items: ['Scale what works', 'De-risk compliance', 'Budget next wave'] },
            ].map((col) => (
              <div key={col.phase} className="bg-white border rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">{col.phase}</h3>
                <ul className="space-y-2 text-gray-700">
                  {col.items.map((t) => (
                    <li key={t} className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" /> {t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expected Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: '20-40%', label: 'AHT reduction' },
              { metric: '15-25%', label: 'Win rate lift' },
              { metric: '30-50%', label: 'Ops costs saved' },
              { metric: '2-5x', label: 'Content throughput' },
            ].map((m) => (
              <div key={m.label} className="bg-white border rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-purple-700">{m.metric}</div>
                <div className="text-gray-600">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to execute an AI strategy that ships value fast?</h3>
              <p className="opacity-90">Our team helps you prioritize, implement, and measure AI with enterprise-grade governance.</p>
            </div>
            <Link href="/contact" className="inline-block bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Talk to Experts
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/ai-2026-hyperautomation-business-playbook" className="block bg-white border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="font-semibold text-gray-900 mb-2">AI 2026: Hyperautomation Business Playbook</div>
              <p className="text-gray-600 text-sm">A practical playbook to design, deploy, and scale hyperautomation.</p>
            </Link>
            <Link href="/blog/ai-transformation-2025-complete-guide" className="block bg-white border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="font-semibold text-gray-900 mb-2">AI Transformation 2025: Complete Guide</div>
              <p className="text-gray-600 text-sm">Proven strategies and frameworks for enterprise AI transformation.</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

