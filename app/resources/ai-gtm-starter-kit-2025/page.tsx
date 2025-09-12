import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIGTMStarterKit2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI GTM Starter Kit 2025"
        description="Templates, checklists, and scorecards to launch and scale AI products in 2025."
        keywords="AI GTM, templates, checklists, scorecards, go-to-market, AI products"
        url="/resources/ai-gtm-starter-kit-2025"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/resources" className="text-emerald-600 hover:text-emerald-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Sep 12, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI GTM Starter Kit 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Get production-ready assets to validate, launch, and scale AI products. Includes ICP canvas, security pack checklist,
            ROI storyboard, pilot scorecard, and onboarding tour script.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What’s Inside</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• ICP Canvas + Messaging Grid</li>
              <li>• Security & Compliance Checklist (DPA, SOC2, DPIA prep)</li>
              <li>• ROI Storyboard + Case Study Template</li>
              <li>• 30-Day Pilot Plan & Scorecard</li>
              <li>• Onboarding Tour Script + 3 role templates</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Who It’s For</h3>
            <p className="text-gray-700">Founders, product leaders, and sales engineers taking AI products to market.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Download the Starter Kit</h2>
              <p className="opacity-90">Instant access. No credit card required.</p>
            </div>
            <Link href="/contact" className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Access
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Guide</h3>
            <Link href="/blog/ai-2025-ai-go-to-market" className="text-emerald-700 hover:underline">AI Go-To-Market 2025</Link>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">More Resources</h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <Link href="/resources/ai-startup-funding-playbook-2025" className="text-emerald-700 hover:underline">
                  AI Startup Funding Playbook 2025
                </Link>
              </li>
              <li>
                <Link href="/resources/ai-implementation-checklist-2025" className="text-emerald-700 hover:underline">
                  AI Implementation Checklist 2025
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

