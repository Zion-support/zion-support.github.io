import React from 'react';
import Head from 'next/head';

export default function ServicesAdvertisingPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const benefits = [
    '1000% ROI target with measurable KPIs',
    'Transparent pricing with market references',
    'Fast onboarding with templates and playbooks',
    'Enterprise-grade security and compliance',
    '24/7 support with SLAs',
    'Proven architectures and reference implementations'
  ];

  return (
    <div>
      <Head>
        <title>AI, IT and Micro SaaS Services Advertising | Zion Tech Group</title>
        <meta name="description" content="Explore our AI, IT, and micro SaaS services with features, capabilities, benefits, pricing references, and easy contact options." />
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Services That Ship Outcomes
            </h1>
            <p className="text-gray-300 text-lg">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <p className="text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 flex items-center gap-3">
                <span className="text-gray-200">{contact.mobile}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 flex items-center gap-3">
                <span className="text-gray-200">{contact.email}</span>
              </a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 flex items-center gap-3">
                <span className="text-gray-200 text-sm">{contact.address}</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}