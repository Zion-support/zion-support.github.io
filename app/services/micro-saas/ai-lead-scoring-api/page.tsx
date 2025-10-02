import React from 'react';
import Link from 'next/link';

export default function AILeadScoringAPIPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">AI Lead Scoring API</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Real-time lead scoring API that prioritizes prospects using behavioral, firmographic, and engagement signals.
            Simple REST interface, SOC2-ready logging, and transparent model explainability.
          </p>
          <div className="mt-6 text-sm text-gray-600">
            <span className="font-semibold text-blue-700">Pricing</span>: Starter $99/month (up to 100k events), Growth $499/month, Enterprise custom.
          </div>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Book a Demo</Link>
            <a href="tel:+13024640950" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Call +1 302 464 0950</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Multi-signal scoring: web, CRM, marketing automation, enrichment</li>
              <li>• Explainability: top contributing factors per score</li>
              <li>• Cold-start handling and cohort-based priors</li>
              <li>• Native integrations: HubSpot, Salesforce, Segment</li>
              <li>• Batch and streaming ingestion; SLA-backed responses</li>
              <li>• SOC2-aligned audit trails and PII minimization</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• 20–40% lift in meeting conversion rate</li>
              <li>• 15–30% faster sales cycle</li>
              <li>• Reduced SDR time-to-first-touch</li>
              <li>• Objective prioritization across territories</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Reference Pricing Links</h3>
          <p className="text-gray-600 mb-4">Comparable market pricing for similar capabilities:</p>
          <ul className="list-disc pl-6 text-blue-700">
            <li><a className="hover:underline" href="https://www.hubspot.com/pricing/sales" target="_blank" rel="noopener noreferrer">HubSpot Sales pricing</a></li>
            <li><a className="hover:underline" href="https://www.salesforce.com/editions-pricing/sales-cloud/" target="_blank" rel="noopener noreferrer">Salesforce Sales Cloud pricing</a></li>
            <li><a className="hover:underline" href="https://segment.com/pricing/" target="_blank" rel="noopener noreferrer">Segment pricing</a></li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Contact</div>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 font-semibold">kleber@ziontechgroup.com</a>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Phone</div>
            <a href="tel:+13024640950" className="text-blue-600 font-semibold">+1 302 464 0950</a>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Address</div>
            <div className="text-gray-800 font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>
      </section>
    </div>
  );
}

