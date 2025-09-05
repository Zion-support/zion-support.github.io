import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

import { Smartphone, CheckCircle, ExternalLink, Shield } from 'lucide-react';

export default function MDMPage() {
  const features = [
    'Zero-touch enrollment (Apple DEP/ABM, Android Zero-Touch)',
    'Device posture checks, compliance policies, and remediation',
    'App management, OS updates, remote lock/wipe, geofencing',
    'Identity integration (SAML/SCIM) and conditional access',
    'Kiosk/COPE/COBO support with granular restrictions'];

  const pricing = [
    { tier: 'SMB (up to 100 devices)', range: '$300–$1,000/month', note: 'Based on device count and features' },
    { tier: 'Mid-market (100–1,000 devices)', range: '$1,000–$7,000/month', note: 'Advanced policies, integrations, support' },
    { tier: 'Enterprise (1,000+ devices)', range: 'Custom', note: 'SLA, multi-tenant, dedicated support' }];

  const references = [
    { name: 'Microsoft Intune pricing', url: 'https://www.microsoft.com/en-us/security/business/microsoft-intune/pricing' },
    { name: 'Jamf pricing', url: 'https://www.jamf.com/pricing/' },
    { name: 'VMware Workspace ONE pricing', url: 'https://www.vmware.com/products/workspace-one/pricing.html' }];

  return (
    <Layout>
      <Head>
        <title>Mobile Device Management (MDM) | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Modern MDM with zero-touch enrollment, compliance policies, app management, and identity integration.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/mobile-device-management&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto space-y-12&quot;>
          <header className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4&quot;>
              <Smartphone className=&quot;w-8 h-8 text-white&quot; />
            </div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Mobile Device Management (MDM)</h1>
            <p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>Secure, compliant device fleets across iOS, Android, macOS, and Windows.</p>
            <div className=&quot;mt-8 flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;px-8 py-4&quot;>Talk to an Engineer</Link>
              <a href=&quot;/market-pricing&quot; className=&quot;px-8 py-4&quot;>Market Pricing</Link>
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
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Typical Pricing Ranges</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              {pricing.map((p) => (
                <div key={p.tier} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
                  <div className=&quot;text-gray-400 text-sm mb-1&quot;>{p.tier}</div>
                  <div className=&quot;text-2xl font-bold text-white&quot;>{p.range}</div>
                  <div className=&quot;text-sm text-gray-400 mt-2&quot;>{p.note}</div>
                </div>
              ))}
            </div>
            <div className=&quot;text-sm text-gray-400 mt-3 text-center&quot;>We align with leading platforms like Intune, Jamf, and Workspace ONE.</div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Vendor References</h2>
            <div className=&quot;flex flex-col sm:flex-row gap-4 items-center justify-center&quot;>
              {references.map((r) => (
                <a key={r.name} href={r.url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;px-4 py-3 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 inline-flex items-center gap-2 text-cyan-300&quot;>
                  <ExternalLink className=&quot;w-4 h-4&quot; />
                  <span>{r.name}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center gap-3 text-gray-300&quot;>
              <Shield className=&quot;w-5 h-5 text-purple-400&quot; />
              <span>SAML/SCIM, device attestation, and compliance-ready audit logs</span>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}