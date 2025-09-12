// @ts-nocheck
import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AICDPPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI GTM Toolkit 2025: Positioning, Pricing, and Distribution Templates"
        description="A free, practical toolkit for launching AI products in 2025. Includes positioning templates, pricing experiment sheets, and distribution playbooks."
        keywords="AI toolkit, GTM templates, pricing, positioning, distribution, AI growth, 2025"
        url="/resources/ai-2025-cdp-playbook"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-indigo-700 mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Free Resource</span>
            <span>•</span>
            <span>Templates & Checklists</span>
            <span>•</span>
            <span>Updated Sep 12, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI GTM Toolkit 2025</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Positioning templates, pricing experiment planner, and distribution playbooks you can copy.
            Built from hundreds of launches across AI tools and platforms.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What You Get</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Positioning template and 10 message tests</li>
              <li>Pricing experiment sheet with 5 WTP methods</li>
              <li>Distribution playbooks for 7 channels</li>
              <li>Metrics dashboard starter</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Who It's For</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Founders and product leaders</li>
              <li>Growth and marketing managers</li>
              <li>AI teams launching new features</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-600 text-white rounded-xl p-8 mb-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#download" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Download The Toolkit (Free)
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors text-center">
              Get GTM Advisory
            </Link>
          </div>
        </div>

        <section id="download" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Download</h2>
          <p className="text-gray-700 mb-6">No email required. Clone or copy the templates directly.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              href="/templates/ai-gtm-positioning-template-2025.pdf"
            >
              <div className="text-2xl mb-2">🧭</div>
              <div className="font-semibold text-gray-900">Positioning Template (PDF)</div>
              <div className="text-sm text-gray-600">One-page template with examples</div>
            </a>
            <a
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              href="/templates/ai-gtm-pricing-experiments-2025.xlsx"
            >
              <div className="text-2xl mb-2">💸</div>
              <div className="font-semibold text-gray-900">Pricing Experiment Sheet (XLSX)</div>
              <div className="text-sm text-gray-600">Plan and track WTP tests</div>
            </a>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Next</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/ai-go-to-market-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">AI Go-To-Market 2025</h3>
                <p className="text-gray-600">A step-by-step GTM playbook for AI products</p>
              </div>
            </Link>
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600">AI Implementation Checklist 2025</h3>
                <p className="text-gray-600">150+ actionable items for successful AI implementation</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

