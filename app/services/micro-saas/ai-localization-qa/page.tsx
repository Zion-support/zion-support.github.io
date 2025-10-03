import React from 'react';
// Metadata handled by React Helmet
import { Globe, CheckCircle, ArrowRight, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Localization QA | Zion Tech Group - Micro SaaS',
  description: 'Automated linguistic QA checks for localized apps and content, flagging layout overflows, tone mismatches, and glossary violations.',
  keywords: 'localization QA, linguistic QA, translation QA, glossary enforcement, TMS connector',
};

export default function AILocalizationQAPage() {
  const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' } as const;
  const features = [
    'Glossary and style guide enforcement',
    'Visual layout checks and truncation detection',
    'Tone and formality consistency',
    'Screenshot-based review workflows',
    'Connector for common TMS platforms',
  ];
  const benefits = [
    'Consistent global UX',
    'Lower localization costs',
    'Faster release cycles in all markets',
  ];
  const pricing = '$129 - $799/month';
  const delivery = '1-2 weeks';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-50 to-violet-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-600 text-white rounded-lg"><Globe className="w-6 h-6" /></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI Localization QA</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Automated checks that keep copy accurate, on-brand, and properly displayed across languages and devices.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold"><DollarSign className="w-4 h-4" /> {pricing}</div>
              <div className="flex items-center gap-2 text-violet-600 font-semibold mt-2"><Clock className="w-4 h-4" /> {delivery}</div>
            </div>
            <div className="p-4 bg-white rounded-lg border text-sm text-gray-700">
              Market average: $150 - $1,000/month. Includes screenshot-based flows and glossary enforcement out of the box.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Business Benefits</h2>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start text-gray-700 text-sm">
                    <ArrowRight className="w-4 h-4 text-violet-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 p-6 bg-indigo-600 text-white rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold">Ensure global quality at scale</p>
                <p className="text-indigo-100 text-sm">Call {contact.phone} • {contact.email}</p>
              </div>
              <div className="flex gap-3">
                <a href={`tel:${contact.phone}`} className="px-5 py-3 bg-white text-indigo-700 rounded-lg font-semibold">Call</a>
                <a href={`mailto:${contact.email}?subject=AI Localization QA - Demo Request`} className="px-5 py-3 border-2 border-white rounded-lg font-semibold">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

