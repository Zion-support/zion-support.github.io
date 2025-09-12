import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function ManufacturingGiantCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Case Study: Manufacturing Giant Achieves 400% ROI with AI"
        description="How a Fortune 500 manufacturing company achieved 400% ROI, $2.3B in savings, and 35% throughput improvement through AI transformation."
        keywords="AI case study, manufacturing AI, ROI, automation, predictive maintenance, quality control"
        url="/case-studies/ai-transformation-manufacturing-giant-2025"
        type="article"
        publishedTime="2025-01-20"
        section="Case Studies"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-800 rounded-full px-6 py-3 mb-8">
            <span className="text-lg font-bold">📊 CASE STUDY</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Manufacturing Giant Achieves 400% ROI with AI
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            A multi-year AI transformation across production, supply chain, and customer service delivered
            outsized returns and sustainable competitive advantage.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outcomes</h2>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-6">
              <li>$2.3B cost savings over 3 years</li>
              <li>35% throughput improvement across flagship plants</li>
              <li>47% defect rate reduction with vision-based quality control</li>
              <li>24% supply chain lead time reduction</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">See the Playbook</h3>
            <p className="text-lg text-gray-700 mb-6">
              Download our implementation templates and KPI frameworks to replicate these results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/resources/ai-transformation-playbook-2025" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">Download Free Playbook</Link>
              <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

