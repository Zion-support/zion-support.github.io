import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'AI Lead Scoring API — Micro SaaS | Zion Tech Group',
  description: 'Production-grade lead scoring API using ML models to prioritize leads by conversion likelihood. Fast, secure, and easy to integrate.',
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">AI Lead Scoring API</h1>
      <p className="text-gray-600 mb-8">
        A production-grade API that predicts lead conversion likelihood using engineered features and ensemble models. Plug into your CRM to route, prioritize, and personalize follow-ups.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="p-5 border rounded-lg bg-white">
          <h2 className="font-semibold text-lg mb-2">Key Capabilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Predictive scoring (0–100) with confidence and reason codes</li>
            <li>Smart feature extraction for UTM, engagement, firmographics</li>
            <li>Fairness, drift, and performance monitoring</li>
            <li>Native connectors for HubSpot, Salesforce, Pipedrive</li>
            <li>SLA-backed latency under 200ms p95</li>
          </ul>
        </div>
        <div className="p-5 border rounded-lg bg-white">
          <h2 className="font-semibold text-lg mb-2">Business Outcomes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>+15–35% lift in qualified pipeline</li>
            <li>Improved SDR productivity and response SLAs</li>
            <li>Higher conversion for paid channels with LTV-aware routing</li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-5 bg-white">
            <h3 className="font-semibold">Starter</h3>
            <p className="text-gray-600">Up to 50k scores/month</p>
            <p className="text-2xl font-bold mt-2">$199/mo</p>
          </div>
          <div className="border rounded-lg p-5 bg-white">
            <h3 className="font-semibold">Growth</h3>
            <p className="text-gray-600">Up to 500k scores/month</p>
            <p className="text-2xl font-bold mt-2">$899/mo</p>
          </div>
          <div className="border rounded-lg p-5 bg-white">
            <h3 className="font-semibold">Enterprise</h3>
            <p className="text-gray-600">Custom volume, SSO, on-prem</p>
            <p className="text-2xl font-bold mt-2">Talk to us</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Typical market ranges for lead scoring APIs run ~$99–$1,499/mo depending on volume and features. We align to market while including observability and SLAs.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-5 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Integration</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>REST + JSON with OpenAPI schema</li>
            <li>Client SDKs: TypeScript, Python</li>
            <li>CRM webhooks and batch CSV ingestion</li>
          </ul>
          <div className="mt-3 text-sm text-gray-600">See also: <span className="underline">OpenAPI initiative</span> and <span className="underline">OAuth 2.0 best practices</span>.</div>
        </div>
        <div className="p-5 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Security & Compliance</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Row-level encryption at rest and in transit</li>
            <li>PII minimization and strict RBAC</li>
            <li>Optional regional data residency</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Request Demo</Link>
        <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center justify-center px-5 py-3 border rounded-md hover:bg-gray-50">Email: kleber@ziontechgroup.com</a>
        <a href="tel:+13024640950" className="inline-flex items-center justify-center px-5 py-3 border rounded-md hover:bg-gray-50">Call: +1 302 464 0950</a>
      </div>
      <div className="text-xs text-gray-500 mt-4">Office: 364 E Main St STE 1008, Middletown DE 19709</div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Book a Demo</Link>
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

