import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, CheckCircle, ClipboardList, ArrowRight, Phone, Mail as MailIcon, MapPin } from 'lucide-react';

export default function SOC2ComplianceTrackerPage() {
  const title = 'SOC 2 Compliance Tracker — Zion Tech Group';
  const description = 'Automate SOC 2 controls, evidence collection, gap analysis, and auditor-ready reporting for startups and SMBs.';

  const features = [
    'Automated control mappings (Trust Services Criteria)',
    'Evidence collection from AWS/Azure/GCP/GitHub',
    'Policy management and versioning',
    'Risk register and remediation workflows',
    'Auditor portal with read-only access',
    'Continuous control monitoring alerts'
  ];

  const pricing = [
    { name: 'Startup', price: '$199/month', details: ['Up to 10 users', 'Basic integrations', 'Email support'] },
    { name: 'Growth', price: '$499/month', details: ['Up to 50 users', 'Advanced integrations', 'Priority support'] },
    { name: 'Enterprise', price: '$1,499/month', details: ['Unlimited users', 'SSO & SCIM', 'Dedicated CSM'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/micro-saas/soc2-compliance-tracker" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-green-700">
              <Shield className="w-8 h-8" />
              <span className="font-semibold">Micro SaaS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">SOC 2 Compliance Tracker</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800">Request a Demo</Link>
              <a href="#pricing" className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Audit-Ready</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center"><ClipboardList className="w-5 h-5 text-green-700 mr-2" />Evidence snapshots & trails</div>
                <div className="flex items-center"><ClipboardList className="w-5 h-5 text-green-700 mr-2" />Automated control attestations</div>
                <div className="flex items-center"><ClipboardList className="w-5 h-5 text-green-700 mr-2" />Auditor export packs (PDF/CSV)</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white border-top">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((tier, i) => (
                <div key={i} className="border rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-extrabold text-green-700 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Speak with a Compliance Expert</h2>
            <p className="opacity-90 mb-6">We’ll tailor the rollout to your controls, risk posture, and auditor needs.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center"><Phone className="w-5 h-5 mr-2"/>+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 flex items-center"><MailIcon className="w-5 h-5 mr-2"/>kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

