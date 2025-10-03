"use client"
// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, DollarSign, BarChart3, Server, Calendar, Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization Platform | Zion Tech Group',
  description: 'Automated cloud savings: rightsizing, anomaly detection, RI/SP planning, and FinOps dashboards. Average 25–45% cost reduction across AWS, Azure, and GCP.',
  keywords: ['FinOps', 'cloud cost optimization', 'AWS savings', 'Azure optimization', 'GCP cost'],
  alternates: { canonical: 'https://ziontechgroup.com/services/micro-saas/cloud-cost-optimization' },
  robots: { index: true, follow: true },
};

export default function CloudCostOptimizationPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  };

  const features = [
    'Real-time anomaly detection and budget alerts',
    'Automated rightsizing and idle resource cleanup',
    'Reserved Instances/Savings Plans recommendations',
    'Unit economics and cost allocation (tags, business units)',
    'Multi-cloud dashboards (AWS, Azure, GCP)',
    'APIs and exports for finance and BI tools',
  ];

  const pricing = [
    { tier: 'Starter', price: '$299/mo', items: ['Single cloud', 'Up to $50k monthly spend', 'Email alerts'] },
    { tier: 'Professional', price: '$899/mo', items: ['Multi-cloud', 'Up to $250k monthly spend', 'Slack/MS Teams alerts', 'Policy automation'] },
    { tier: 'Enterprise', price: 'Custom', items: ['Unlimited spend', 'SSO & RBAC', 'Custom policies', 'Dedicated FinOps support'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Cloud FinOps</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Cloud Cost Optimization Platform</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Cut cloud spend by 25–45% with automated rightsizing, policy guardrails, and exec-ready savings reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contact.phone}`} className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Call {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-lg font-semibold">Email Us</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-semibold text-gray-900">Proven Results</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-700">-35%</div>
                <div className="text-sm text-gray-600">Average spend reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700">2 weeks</div>
                <div className="text-sm text-gray-600">Typical time to savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700">99.9%</div>
                <div className="text-sm text-gray-600">Dashboard uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700">ROI</div>
                <div className="text-sm text-gray-600">Pays back in first month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className={`bg-white rounded-2xl border ${p.tier==='Professional' ? 'border-emerald-600' : 'border-gray-200'} shadow p-8`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{p.tier}</h3>
                  <div className="text-3xl font-bold text-emerald-700 mt-2">{p.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-3" />{item}</li>
                  ))}
                </ul>
                <a href={`mailto:${contact.email}?subject=${encodeURIComponent(p.tier + ' Plan - Cloud Cost Optimization')}`} className={`w-full block text-center font-semibold py-3 rounded-lg ${p.tier==='Professional' ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /><a href={`tel:${contact.phone}`} className="hover:text-emerald-300">{contact.phone}</a></div>
          <div className="flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /><a href={`mailto:${contact.email}`} className="hover:text-emerald-300">{contact.email}</a></div>
          <div className="flex items-center justify-center"><MapPin className="w-5 h-5 mr-2" /><span>364 E Main St STE 1008, Middletown, DE 19709</span></div>
        </div>
      </section>
    </div>
  );
}

