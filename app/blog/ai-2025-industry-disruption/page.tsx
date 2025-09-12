import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function AIIndustryDisruption2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Industry Disruption 2025: Quantified Impact by Sector"
        description="Healthcare, finance, manufacturing, and retail—quantified impact of AI with benchmarks and case studies."
        keywords="AI disruption, industry impact, benchmarks, case studies, 2025"
        url="/blog/ai-2025-industry-disruption"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-indigo-700 mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Analysis</span>
            <span>•</span>
            <span>45 min read</span>
            <span>•</span>
            <span>September 12, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Industry Disruption 2025: Quantified Impact by Sector
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A deep dive into how AI is reshaping healthcare, finance, manufacturing, and retail with measurable outcomes.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">$2.3B</div>
              <div className="text-gray-600">Rev. Impact (Top 10)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-gray-600">Avg. Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Cycle Time Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">300%</div>
              <div className="text-gray-600">ROI (Median)</div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Sector Snapshots</h2>
          <h3>Healthcare</h3>
          <p>AI-assisted diagnostics, care routing, and prior auth automation. Risk: drift and bias; Control: audit trails, human-in-the-loop.</p>
          <h3>Financial Services</h3>
          <p>Underwriting, KYC/AML, and customer automation. Risk: hallucinations; Control: retrieval with citations and guardrails.</p>
          <h3>Manufacturing</h3>
          <p>Quality, predictive maintenance, and supply planning. Risk: data latency; Control: edge inference with versioning.</p>
        </div>

        <div className="bg-indigo-600 text-white rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Get the Full Benchmark Dataset</h2>
          <p className="text-indigo-100 mb-6">Download sector benchmarks and implementation playbooks.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/resources" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold text-center">
              Download Resources
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-indigo-700">
              Request Industry Briefing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}