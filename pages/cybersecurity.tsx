import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

import { Shield, CheckCircle, Lock, Activity } from 'lucide-react';

export default function CybersecurityPage() {
  const features = [
    'Zero Trust architectures and identity-first segmentation',
    'Cloud posture hardening, secrets management, and key rotation',
    'Threat detection, incident response playbooks, and tabletop exercises',
    'Compliance readiness: SOC 2, ISO 27001, HIPAA, GDPR'];

  const solutions = [
    { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
    { name: 'Domain & TLS Monitoring', href: '/domain-dns-monitor' },
    { name: 'Email Security (DMARC)', href: '/email-dmarc-analyzer' },
    { name: 'Vendor Risk Automation', href: '/vendor-risk-automation' }];

  return (
    <Layout>
      <Head>
        <title>Cybersecurity | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Zero Trust designs, cloud posture hardening, incident response, and compliance readiness.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/cybersecurity&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto space-y-12&quot;>
          <header className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4&quot;>
              <Shield className=&quot;w-8 h-8 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Cybersecurity</h1>
            <p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>From strategy to operations: identity, data, networks, and workloads secured by design.</p>
            <div className=&quot;mt-2 text-sm text-gray-400&quot;>New: VAPT and MDM offerings below.</div>
            <div className=&quot;mt-6 flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;px-8 py-4&quot;>Security Assessment</Link>
              <a href=&quot;/market-pricing&quot; className=&quot;px-8 py-4&quot;>See Market Pricing</Link>
            </div>
          </header>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Key Capabilities</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              {features.map((f) => (
                <div key={f} className=&quot;flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; />
                  <span className=&quot;text-gray-200&quot;>{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Highlighted Solutions</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6&quot;>
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors&quot;>
                  <div className=&quot;text-gray-200 font-semibold mb-2&quot;>{s.name}</div>
                  <p className=&quot;text-gray-300 text-sm&quot;>Learn more</p>
                </Link>
              ))}
              <a href=&quot;/vulnerability-assessment-penetration-testing&quot; className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors&quot;>
                <div className=&quot;text-gray-200 font-semibold mb-2&quot;>Vulnerability Assessment & Pentest (VAPT)</div>
                <p className=&quot;text-gray-300 text-sm&quot;>Learn more</p>
              </Link>
              <a href=&quot;/mobile-device-management&quot; className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors&quot;>
                <div className=&quot;text-gray-200 font-semibold mb-2&quot;>Mobile Device Management (MDM)</div>
                <p className=&quot;text-gray-300 text-sm&quot;>Learn more</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}