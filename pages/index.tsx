import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Zion Tech Group | AI, IT and Micro SaaS Services">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Zion Tech Group</h1>
        <p className="text-gray-700 mb-6">
          AI, Micro SaaS, and IT solutions to accelerate growth and reduce costs.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link className="block p-6 rounded-lg border hover:shadow" href="/services/micro-saas/ai-sales-assistant">
            <span className="font-semibold">AI Sales Assistant</span>
            <span className="block text-gray-600 text-sm">Automate qualification and forecasting.</span>
          </Link>
          <Link className="block p-6 rounded-lg border hover:shadow" href="/services/micro-saas/ai-customer-support">
            <span className="font-semibold">AI Customer Support</span>
            <span className="block text-gray-600 text-sm">Deflect tickets and boost CSAT.</span>
          </Link>
          <Link className="block p-6 rounded-lg border hover:shadow" href="/services/micro-saas/ai-compliance-monitor">
            <span className="font-semibold">AI Compliance Monitor</span>
            <span className="block text-gray-600 text-sm">Continuous SOC 2/GDPR monitoring.</span>
          </Link>
          <Link className="block p-6 rounded-lg border hover:shadow" href="/services/micro-saas/ai-finops-optimizer">
            <span className="font-semibold">AI FinOps Optimizer</span>
            <span className="block text-gray-600 text-sm">Forecast and right-size cloud costs.</span>
          </Link>
          <Link className="block p-6 rounded-lg border hover:shadow" href="/services/micro-saas/ai-marketing-studio">
            <span className="font-semibold">AI Marketing Studio</span>
            <span className="block text-gray-600 text-sm">Content and experimentation at scale.</span>
          </Link>
        </div>
        <div className="mt-10">
          <Link className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg" href="/request-quote">Request a Quote</Link>
        </div>
      </section>
    </Layout>
  );
}

