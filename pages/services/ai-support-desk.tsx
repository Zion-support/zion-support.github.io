import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { LifeBuoy, CheckCircle, Workflow, MessageSquare, Bot, DollarSign } from 'lucide-react';
import Link from 'next/link';

const AISupportDesk: NextPage = () => {
  const bundles = [
    { name: 'Essentials', price: 99, features: ['AI FAQ bot', 'Ticket deflection', 'Basic knowledge base', 'Email handoff'] },
    { name: 'Professional', price: 299, features: ['Agent assist', 'Summaries & macros', 'CSAT prediction', 'Zendesk/Intercom integration'] },
    { name: 'Enterprise', price: 899, features: ['Multi-brand KB', 'RAG with private data', 'SLA automation', 'SAML/SSO & SOC2'] },
  ];

  return (
    <MainLayout title="AI Support Desk - IT & AI Service by Zion Tech Group" description="AI chat, agent assist, and knowledge automation to improve support efficiency and CSAT.">
      <section className="bg-gradient-to-br from-sky-900 via-cyan-900 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">AI Support Desk</h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">Deflect repetitive tickets and supercharge agents with real-time suggestions and summaries.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {bundles.map((b) => (
            <div key={b.name} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{b.name}</h3>
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-4xl font-extrabold text-emerald-600 mb-2">${b.price}<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-2 mb-6">
                {b.features.map((f) => (
                  <li key={f} className="flex items-center text-gray-700"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Request Demo</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Bot className="w-6 h-6 text-emerald-600 mb-2" />
            <h4 className="font-semibold mb-1">AI Chat & Deflection</h4>
            <p className="text-gray-600">Answer common questions using your knowledge base and reduce Level 1 volume.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <MessageSquare className="w-6 h-6 text-emerald-600 mb-2" />
            <h4 className="font-semibold mb-1">Agent Assist</h4>
            <p className="text-gray-600">Suggest replies, summarize threads, and create macros in real-time.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Workflow className="w-6 h-6 text-emerald-600 mb-2" />
            <h4 className="font-semibold mb-1">Automations</h4>
            <p className="text-gray-600">Drive SLAs and routing with intelligent rules and priority prediction.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AISupportDesk;

