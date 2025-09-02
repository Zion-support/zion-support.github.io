import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Mail, CheckCircle, Zap, Gauge, Shield, DollarSign } from 'lucide-react';
import Link from 'next/link';

const AIEmailResponder: NextPage = () => {
  const plans = [
    { name: 'Starter', price: 49, features: ['Up to 2 inboxes', 'Smart reply suggestions', 'Priority tagging', 'Basic analytics'] },
    { name: 'Growth', price: 149, features: ['Up to 10 inboxes', 'Auto-replies with tone control', 'Custom rules & workflows', 'Advanced analytics & SLA'] },
    { name: 'Scale', price: 399, features: ['Unlimited inboxes', 'Fine-tuned models', 'CRM/Helpdesk integrations', 'SAML/SSO, audit logs'] },
  ];

  return (
    <MainLayout title="AI Email Responder - Micro SaaS by Zion Tech Group" description="Automate customer email responses with AI, triage, and analytics. Reduce response times and increase CSAT.">
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">AI Email Responder</h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">Reduce response time by up to 70% with automated drafting, triage, and routing powered by enterprise-grade AI.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">${plan.price}<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Zap className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-semibold mb-1">Auto-draft & Tone</h4>
            <p className="text-gray-600">Drafts context-aware replies aligned to your brand voice with optional approval workflow.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Gauge className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-semibold mb-1">Triage & Routing</h4>
            <p className="text-gray-600">Classifies intent, urgency, and routes to the right owner. Flags VIP and at-risk accounts.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Shield className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-semibold mb-1">Privacy & Security</h4>
            <p className="text-gray-600">PII redaction, region-pinned processing, and audit trails for compliance.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AIEmailResponder;

