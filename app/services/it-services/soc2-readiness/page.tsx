import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function SOC2ReadinessPage() {
  const title = 'SOC 2 Readiness Program — Zion Tech Group';
  const description = 'End-to-end SOC 2 readiness with gap analysis, controls, evidence automation, and auditor support.';

  const features = [
    'Readiness assessment and roadmap',
    'Policy templates and control implementation',
    'Evidence collection automation',
    'Risk register and remediation tracking',
    'Continuous monitoring setup',
    'Auditor coordination and support'
  ];

  const pricing = [
    { name: 'Essential', price: '$12,000/project', details: ['Assessment & roadmap', 'Policy templates', 'Email support'] },
    { name: 'Standard', price: '$35,000/project', details: ['Controls rollout', 'Evidence automation', 'Weekly check-ins'] },
    { name: 'Enterprise', price: '$85,000/project', details: ['End-to-end program', 'Auditor support', 'Dedicated team'] }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/services/it-services/soc2-readiness" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
        <section className="py-16 border-b bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-4 text-slate-700">
              <Shield className="w-8 h-8" />
              <span className="font-semibold">IT Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">SOC 2 Readiness Program</h1>
            <p className="text-gray-600 text-lg max-w-3xl">{description}</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-900">Get Proposal</Link>
              <a href="#pricing" className="border border-slate-800 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100">View Pricing</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What’s Included</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />{f}</li>
                ))}
              </ul>
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
                  <div className="text-3xl font-extrabold text-slate-900 mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    {tier.details.map((d, j) => (
                      <li key={j} className="flex items-start text-sm"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />{d}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center bg-gradient-to-r from-slate-800 to-gray-900 text-white rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Be Audit-Ready Faster</h2>
            <p className="opacity-90 mb-6">We build sustainable controls and evidence so you pass with confidence.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+13024640950" className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center"><Phone className="w-5 h-5 mr-2"/>+1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 flex items-center"><Mail className="w-5 h-5 mr-2"/>kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm opacity-80 flex items-center justify-center"><MapPin className="w-4 h-4 mr-2"/>364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </section>
      </div>
    </>
  );
}

