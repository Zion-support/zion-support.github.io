import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';


export default function CybersecurityPage() {_const _features = [
    'Zero Trust architectures and identity-first segmentation', _'Cloud posture hardening, _secrets management, _and key rotation', _'Threat detection, _incident response playbooks, _and tabletop exercises', _'Compliance readiness: SOC 2, _ISO 27001, _HIPAA, _GDPR'];

  const _solutions = [
    { name: 'Zero Trust Architecture', _href: '/zero-trust-network-architecture'},
    {_name: 'Domain & TLS Monitoring', _href: '/domain-dns-monitor'},
    {_name: 'Email Security (DMARC)', _href: '/email-dmarc-analyzer'},
    {_name: 'Vendor Risk Automation', _href: '/vendor-risk-automation'}];

  return (_<Layout>
      <Head>
        <title>Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Zero Trust designs, _cloud posture hardening, _incident response, _and compliance readiness." />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Cybersecurity</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">From strategy to operations: identity, _data, _networks, _and workloads secured by design.</p>
            <div className="mt-2 text-sm text-gray-400">New: VAPT and MDM offerings below.</div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Security Assessment</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {_features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{_f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {_solutions.map(_(s) => (
                <a key={s.name} href={_s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{_s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              ))}
              <a href="/vulnerability-assessment-penetration-testing" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                <div className="text-gray-200 font-semibold mb-2">Vulnerability Assessment & Pentest (VAPT)</div>
                <p className="text-gray-300 text-sm">Learn more</p>
              </a>
              <a href="/mobile-device-management" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                <div className="text-gray-200 font-semibold mb-2">Mobile Device Management (MDM)</div>
                <p className="text-gray-300 text-sm">Learn more</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}