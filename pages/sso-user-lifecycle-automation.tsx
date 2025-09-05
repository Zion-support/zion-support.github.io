import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function SsoUserLifecycleAutomationPage() {
  return (
    <Layout>
      <Head>
        <title>SSO User Lifecycle Automation | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Automate Joiner/Mover/Leaver across SSO/SCIM apps with approvals, logging, and policies.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/sso-user-lifecycle-automation&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent&quot;>SSO User Lifecycle Automation</h1>
          <p className=&quot;text-slate-300&quot;>SCIM connectors with approvals, deprovisioning, audit trails, and role change workflows.</p>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            {[ 'SCIM connectors with approvals', 'Role change workflows', 'Deprovisioning with evidence', 'Audit trails and reports' ].map((f) => (
              <div key={f} className=&quot;p-4 rounded-xl bg-black/40 border border-emerald-500/30 text-slate-200&quot;>{f}</div>
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 text-white&quot;>Start from $299/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

