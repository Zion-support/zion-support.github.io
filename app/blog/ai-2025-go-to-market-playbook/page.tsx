import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIGoToMarketPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Go-To-Market Playbook 2025"
        description="Positioning, pricing, packaging, and distribution strategies for AI products that compound."
        keywords="go-to-market, AI GTM, pricing, positioning, distribution, 2025"
        url="/blog/ai-2025-go-to-market-playbook"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-pink-700 mb-4">
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">GTM</span>
            <span>•</span>
            <span>18 min read</span>
            <span>•</span>
            <span>September 12, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Go-To-Market Playbook 2025
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A field-tested playbook to reach product-market fit, accelerate distribution, and scale revenue.
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">7</div>
              <div className="text-gray-600">GTM Motions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">120+</div>
              <div className="text-gray-600">Templates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
              <div className="text-gray-600">Win Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">$47B</div>
              <div className="text-gray-600">Market Map</div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Positioning & Segmentation</h2>
          <p>Define ICPs, jobs-to-be-done, and compelling value propositions with quantified outcomes.</p>
          <h2>Pricing & Packaging</h2>
          <p>Design price metrics, tiering, and add-ons aligned to customer value and usage.</p>
          <h2>Distribution</h2>
          <p>Own channels, partner motion, and product-led growth with activation and expansion loops.</p>
          <h2>Sales Enablement</h2>
          <p>Teach to sell outcomes, objection handling, and ROI models that close deals faster.</p>
        </div>

        <div className="bg-pink-600 text-white rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Download the Complete Toolkit</h2>
          <p className="text-pink-100 mb-6">Positioning templates, pricing calculators, and pitch materials.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/resources" className="bg-white text-pink-700 px-6 py-3 rounded-lg font-semibold text-center">
              Get Resources
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-pink-700">
              Request GTM Workshop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

