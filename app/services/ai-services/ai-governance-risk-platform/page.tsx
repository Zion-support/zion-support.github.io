// import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { Shield, FileCheck2, Scale, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function AIGovernanceRiskPlatformPage() {
  const title = 'AI Governance & Risk Platform — Zion Tech Group';
  const description = 'Operationalize AI responsibly with policy controls, model risk management, evaluations, and audit readiness across your AI portfolio.';

  const features = [
    'Policy management and model inventory (AI Bill of Materials)',
    'Model risk classification and approval workflows',
    'Red-teaming, evals, and guardrail testing (toxicity, PII, bias)',
    'Prompt and output audit trails with retention policies',
    'Dataset lineage, consent, and usage governance',
    'Controls for GDPR/CCPA/HIPAA and SOC 2 alignment'
  ];

  const benefits = [
    'Reduce regulatory and reputational risk',
    'Accelerate compliant AI deployments',
    'Centralize controls for heterogeneous models and vendors',
    'Demonstrate audit readiness with one-click reports'
  ];

  const pricing = [
    { name: 'Team', price: '$2,500/month', details: ['Up to 10 models', 'SaaS', 'Email support'] },
    { name: 'Business', price: '$6,000/month', details: ['Up to 50 models', 'SaaS/VPC', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', details: ['Unlimited models', 'On‑prem/VPC', 'Dedicated support'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-services/ai-governance-risk-platform" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-indigo-700">
              <Shield className="w-8 h-8" />
              <span className="font-semibold">AI Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Governance & Risk Platform</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">Request a Demo</Link>
              <a href="#pricing" className="border border-indigo-600 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Capabilities</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Compliance & Audit</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center"><FileCheck2 className="w-5 h-5 text-indigo-700 mr-2" />Automated evidence collection</div>
                <div className="flex items-center"><Scale className="w-5 h-5 text-indigo-700 mr-2" />Policy mapping to regulations</div>
                <div className="flex items-center"><Shield className="w-5 h-5 text-indigo-700 mr-2" />RBAC, SSO, data residency options</div>
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
                  <div className="text-3xl font-extrabold text-indigo-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
                    Talk to Sales
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Deploy AI Responsibly</h2>
            <p className="opacity-90 mb-6">Govern your AI lifecycle from experimentation to production with consistent controls.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center"><Phone className="w-5 h-5 mr-2"/>+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 flex items-center"><Mail className="w-5 h-5 mr-2"/>kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

