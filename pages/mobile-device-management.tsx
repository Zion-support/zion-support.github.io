import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';


export default function MDMPage() {_const _features = [
    'Zero-touch enrollment (Apple DEP/ABM, _Android Zero-Touch)', _'Device posture checks, _compliance policies, _and remediation', _'App management, _OS updates, _remote lock/wipe, _geofencing', _'Identity integration (SAML/SCIM) and conditional access', _'Kiosk/COPE/COBO support with granular restrictions'];

  const _pricing = [
    { tier: 'SMB (up to 100 devices)', _range: '$300–$1, _000/month', _note: 'Based on device count and features'},
    {_tier: 'Mid-market (100–1, _000 devices)', _range: '$1, _000–$7, _000/month', _note: 'Advanced policies, _integrations, _support'},
    {_tier: 'Enterprise (1, _000+ devices)', _range: 'Custom', _note: 'SLA, _multi-tenant, _dedicated support'}];

  const _references = [
    {_name: 'Microsoft Intune pricing', _url: 'https://www.microsoft.com/en-us/security/business/microsoft-intune/pricing'},
    {_name: 'Jamf pricing', _url: 'https://www.jamf.com/pricing/'},
    {_name: 'VMware Workspace ONE pricing', _url: 'https://www.vmware.com/products/workspace-one/pricing.html'}];

  return (
    <Layout>
      <Head>
        <title>Mobile Device Management (MDM) | Zion Tech Group</title>
        <meta name="description" content="Modern MDM with zero-touch enrollment, compliance policies, app management, and identity integration." />
        <link rel="canonical" href="https://ziontechgroup.com/mobile-device-management" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Mobile Device Management (MDM)</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Secure, compliant device fleets across iOS, Android, macOS, and Windows.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Talk to an Engineer</a>
              <a href="/market-pricing" className="px-8 py-4">Market Pricing</a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {_features.map(_(f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{_f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Typical Pricing Ranges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {_pricing.map(_(p) => (
                <div key={p.tier} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="text-gray-400 text-sm mb-1">{_p.tier}</div>
                  <div className="text-2xl font-bold text-white">{_p.range}</div>
                  <div className="text-sm text-gray-400 mt-2">{_p.note}</div>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-400 mt-3 text-center">We align with leading platforms like Intune, Jamf, and Workspace ONE.</div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Vendor References</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {_references.map(_(r) => (
                <a key={r.name} href={_r.url} target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 inline-flex items-center gap-2 text-cyan-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>{_r.name}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>SAML/SCIM, device attestation, and compliance-ready audit logs</span>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}