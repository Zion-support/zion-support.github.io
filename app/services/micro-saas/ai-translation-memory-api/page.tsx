// import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'AI Translation Memory API | Micro SaaS | Zion Tech Group',
  description: 'Lightning-fast translation memory and glossary enforcement API for global-scale localization with measurable quality and speed gains.',
};

export default function AITranslationMemoryAPIPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  };

  const features = [
    'Sub-50ms TM lookups with fuzzy matching and scoring',
    'Glossary and style-guide enforcement with violations report',
    'Batch and streaming term extraction endpoints',
    'File connectors: JSON, PO, XLIFF, CSV, YAML',
    'Secure RBAC, audit logs, and per-project namespaces',
    'SDKs for Node.js, Python, and Java',
  ];

  const benefits = [
    'Cut localization cycle time by 40-60%',
    'Ensure tone/terminology consistency across markets',
    'Reduce vendor costs with higher TM leverage',
    'Improve UX by preventing truncations/overflows',
  ];

  const pricing = [
    { tier: 'Starter', price: '$99/month', includes: 'Up to 1M TM lookups, 2 projects, email support' },
    { tier: 'Growth', price: '$399/month', includes: '10M lookups, 10 projects, SLA support, webhooks' },
    { tier: 'Enterprise', price: 'Custom', includes: 'Unlimited projects, SSO/SCIM, on-call SLA' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">AI Translation Memory API</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Enforce brand terminology and accelerate global releases with a production-grade translation memory and glossary API.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg">Call {contact.phone}</a>
            <a href={`mailto:${contact.email}?subject=AI Translation Memory API`} className="px-6 py-3 border border-white rounded-lg font-semibold">Email {contact.email}</a>
            <Link to="/services/micro-saas" className="px-6 py-3 bg-black/20 border border-white/30 rounded-lg font-semibold">Browse Micro SaaS</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            {features.map((f, i) => (<li key={i} className="text-gray-700">{f}</li>))}
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            {benefits.map((b, i) => (<li key={i} className="text-gray-700">{b}</li>))}
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className="border rounded-xl p-6">
                <div className="text-gray-900 font-bold text-lg">{p.tier}</div>
                <div className="text-blue-600 font-extrabold text-2xl mt-2">{p.price}</div>
                <div className="text-gray-600 mt-2 text-sm">{p.includes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get a demo</h2>
          <p className="text-gray-700 mb-6">Visit our website at <a className="text-blue-600 underline" href={`https://ziontechgroup.com/services/micro-saas/ai-translation-memory-api`}>ziontechgroup.com</a> or contact us directly.</p>
          <div className="text-gray-700">
            <div>Phone: {contact.phone}</div>
            <div>Email: {contact.email}</div>
            <div>Address: {contact.address}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

