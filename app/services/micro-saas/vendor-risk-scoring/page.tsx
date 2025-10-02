import React from 'react';
import { Metadata } from 'next';
import { Shield, CheckCircle, ArrowRight, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vendor Risk Scoring API | Zion Tech Group - Micro SaaS',
  description: 'Continuous vendor monitoring with cyber hygiene, breach intelligence, and questionnaire parsing into unified risk scores.',
  keywords: 'vendor risk, third-party risk, GRC, security ratings, SIG, CAIQ, compliance automation',
};

export default function VendorRiskScoringPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  } as const;

  const features = [
    'Security rating aggregation and normalization',
    'Questionnaire ingestion (SIG, CAIQ) with mapping',
    'Breach and exposure monitoring',
    'Tiering, SLAs, and auto-remediation tasks',
    'API and webhook notifications',
  ];

  const benefits = [
    'Faster vendor onboarding and reassessments',
    'Improved risk visibility and compliance evidence',
    'Automated follow-ups and ticketing',
  ];

  const pricing = '$399 - $2,499/month';
  const delivery = '2-3 weeks';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-600 text-white rounded-lg"><Shield className="w-6 h-6" /></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Vendor Risk Scoring API</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Continuous vendor monitoring with public cyber hygiene signals, breach intelligence, and questionnaire parsing into a unified risk score.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white rounded-lg border">
              <div className="flex items-center gap-2 text-green-600 font-semibold"><DollarSign className="w-4 h-4" /> {pricing}</div>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold mt-2"><Clock className="w-4 h-4" /> {delivery}</div>
            </div>
            <div className="p-4 bg-white rounded-lg border text-sm text-gray-700">
              Market average: $500 - $3,000/month. Our pricing is competitive with faster setup and better integrations.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Business Benefits</h2>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start text-gray-700 text-sm">
                    <ArrowRight className="w-4 h-4 text-emerald-600 mr-2 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-emerald-600 text-white rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-semibold">Talk to our security team</p>
                <p className="text-emerald-100 text-sm">Call {contact.phone} • {contact.email}</p>
              </div>
              <div className="flex gap-3">
                <a href={`tel:${contact.phone}`} className="px-5 py-3 bg-white text-emerald-700 rounded-lg font-semibold">Call</a>
                <a href={`mailto:${contact.email}?subject=Vendor Risk Scoring - Demo Request`} className="px-5 py-3 border-2 border-white rounded-lg font-semibold">Email</a>
              </div>
            </div>
            <div className="mt-2 text-xs text-emerald-100">📍 {contact.address}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

