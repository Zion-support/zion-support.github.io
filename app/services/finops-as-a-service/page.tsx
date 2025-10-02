import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { DollarSign, CheckCircle, Shield, ArrowRight, Phone, Mail as MailIcon, MapPin, Cloud } from 'lucide-react';

export default function FinOpsAsAServicePage() {
  const title = 'FinOps as a Service — Zion Tech Group';
  const description = 'Reduce cloud spend 20–40% with cost visibility, rightsizing, commitment planning, and automated guardrails across AWS, Azure, and GCP.';

  const features = [
    'Cost allocation and unit economics dashboards',
    'Waste detection, rightsizing, schedule automation',
    'Reservations and Savings Plans optimization',
    'Kubernetes cost allocation (COST, OpenCost)',
    'Policy guardrails and anomaly detection',
    'Monthly executive reviews & playbooks'
  ];

  const pricing = [
    { name: 'Essentials', price: '$3,000/month', details: ['Up to $100k cloud spend', 'Monthly review', 'Email support'] },
    { name: 'Growth', price: '$7,500/month', details: ['Up to $500k cloud spend', 'Bi-weekly review', 'Slack support'] },
    { name: 'Enterprise', price: '1–3% of savings', details: ['>$500k spend', 'Dedicated FinOps lead', 'Custom automation'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/finops-as-a-service" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-emerald-700">
              <Cloud className="w-8 h-8" />
              <span className="font-semibold">IT Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FinOps as a Service</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800">Request Assessment</Link>
              <a href="#pricing" className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Governance</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center"><Shield className="w-5 h-5 text-emerald-700 mr-2" />Policy guardrails</div>
                <div className="flex items-center"><Shield className="w-5 h-5 text-emerald-700 mr-2" />Budget alerts & anomaly detection</div>
                <div className="flex items-center"><Shield className="w-5 h-5 text-emerald-700 mr-2" />SSO, RBAC, audit trails</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((tier, i) => (
                <div key={i} className="border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-2xl font-extrabold text-emerald-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-emerald-700 to-teal-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Cut spend, not performance</h2>
            <p className="opacity-90 mb-6">Our FinOps team partners with your engineering and finance leaders.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center"><Phone className="w-5 h-5 mr-2"/>+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 flex items-center"><MailIcon className="w-5 h-5 mr-2"/>kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

