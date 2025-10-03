"use client"
import React from 'react';
import { Link } from 'react-router-dom';
import { Metadata } from 'next';
import { Phone, Mail, CheckCircle, MessageSquare, Brain, Shield, BarChart3, Globe, Users, Star, ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered Customer Support Automation | Zion Tech Group',
  description: 'Reduce support costs by 60% and boost CSAT with 24/7 AI agents, human handoff, analytics, and 50+ language support. Transparent pricing and fast setup.',
  keywords: [
    'AI customer support',
    'AI chatbot',
    'customer service automation',
    'helpdesk automation',
    'multilingual support AI',
  ],
  alternates: { canonical: 'https://ziontechgroup.com/services/micro-saas/ai-customer-support' },
  robots: { index: true, follow: true },
};

export default function AICustomerSupportPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',
  };

  const features = [
    'Natural language conversations with 95%+ intent accuracy',
    'Multi-channel: web chat, email, SMS, WhatsApp, social',
    'Human handoff with full transcript context',
    'Knowledge base grounding and citation mode',
    'Auto-triage, ticket creation, and SLA-aware routing',
    '50+ languages with tone and brand style controls',
  ];

  const benefits = [
    '60% cost reduction vs. traditional support',
    '80% faster first response times',
    '40% higher customer satisfaction (CSAT)',
    '24/7 coverage without staffing complexity',
  ];

  const plans = [
    { name: 'Starter', price: '$199/mo', items: ['One channel', 'Up to 2,000 conversations', 'Email support'] },
    { name: 'Growth', price: '$499/mo', items: ['Three channels', 'Up to 10,000 conversations', 'Priority support', 'Basic analytics'] },
    { name: 'Enterprise', price: 'Custom', items: ['Unlimited channels', 'Custom SLAs', 'SAML/SSO & RBAC', 'Advanced analytics & exports'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold">AI Customer Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">AI-Powered Customer Support Automation</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Deploy 24/7 AI agents that resolve tickets end-to-end, escalate when needed, and continuously learn from your knowledge base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contact.phone}`} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Call {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-lg font-semibold">Email Us</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[{Icon:Brain,label:'NLP Engine',desc:'95%+ intent accuracy with continual learning'},{Icon:Shield,label:'Trust & Safety',desc:'PII redaction, guardrails, audit logs'},{Icon:BarChart3,label:'Analytics',desc:'Deflection, CSAT, handle time, topic trends'},{Icon:Globe,label:'Global',desc:'50+ languages, locale-aware tone'}].map((b, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-14 h-14 mx-auto mb-3 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><b.Icon className="w-7 h-7" /></div>
                <h3 className="font-semibold text-gray-900 mb-1">{b.label}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700"><Star className="w-5 h-5 text-amber-500 mr-3 mt-0.5" />{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`bg-white rounded-2xl border ${p.name==='Growth' ? 'border-blue-600' : 'border-gray-200'} shadow p-8`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mt-2">{p.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-600 mr-3" />{item}</li>
                  ))}
                </ul>
                <a href={`mailto:${contact.email}?subject=${encodeURIComponent(p.name + ' Plan - AI Customer Support')}`} className={`w-full block text-center font-semibold py-3 rounded-lg ${p.name==='Growth' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /><a href={`tel:${contact.phone}`} className="hover:text-blue-300">{contact.phone}</a></div>
          <div className="flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /><a href={`mailto:${contact.email}`} className="hover:text-blue-300">{contact.email}</a></div>
          <div className="flex items-center justify-center"><MapPin className="w-5 h-5 mr-2" /><span>{contact.address}</span></div>
        </div>
      </section>
    </div>
  );
}

