import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Workflow, CheckCircle, Shield, ArrowRight, Phone, Mail as MailIcon, MapPin, Server } from 'lucide-react';

export default function MLOpsPlatformPage() {
  const title = 'MLOps Platform & Enablement — Zion Tech Group';
  const description = 'Productionize ML with CI/CD for models, feature stores, experiment tracking, and governance across cloud and on-prem.';

  const features = [
    'Model registry and versioning',
    'Feature store and data lineage',
    'Deployment to batch, online, and streaming',
    'Canary, shadow, and A/B evaluation',
    'Monitoring: drift, performance, cost',
    'Access control, PII safeguards, audit logs'
  ];

  const pricing = [
    { name: 'Foundation', price: '$18,000/project', details: ['Core stack', '1 env', '4–6 weeks'] },
    { name: 'Department', price: '$45,000/project', details: ['2–3 envs', 'IaC & SSO', '8–12 weeks'] },
    { name: 'Enterprise', price: 'Custom', details: ['Regulated', 'On-prem/hybrid', 'Training & enablement'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/mlops-platform" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sky-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-sky-700">
              <Server className="w-8 h-8" />
              <span className="font-semibold">AI Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">MLOps Platform & Enablement</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-800">Plan Your Stack</Link>
              <a href="#pricing" className="border border-sky-700 text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Components</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Governance</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center"><Shield className="w-5 h-5 text-sky-700 mr-2" />Responsible AI controls</div>
                <div className="flex items-center"><Shield className="w-5 h-5 text-sky-700 mr-2" />Model cards & approvals</div>
                <div className="flex items-center"><Shield className="w-5 h-5 text-sky-700 mr-2" />Audit trails & lineage</div>
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
                  <div className="text-2xl font-extrabold text-sky-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-sky-700 to-cyan-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Deploy models with confidence</h2>
            <p className="opacity-90 mb-6">We enable your data science teams with reliable, governed MLOps.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center"><Phone className="w-5 h-5 mr-2"/>+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-700 flex items-center"><MailIcon className="w-5 h-5 mr-2"/>kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

