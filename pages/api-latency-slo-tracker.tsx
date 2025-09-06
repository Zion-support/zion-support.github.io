import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
export default function ApiLatencySloTrackerPage() {
  return (
    <Layout>
      <Head>
        <title>API Latency SLO Tracker | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Define, monitor, and alert on p95/p99 API SLOs with synthetic and real-user monitoring and optional status pages.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/api-latency-slo-tracker&quot; />
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function ApiLatencySloTrackerPage() {_return (
    <Layout>
      <Head>
        <title>API Latency SLO Tracker | Zion Tech Group</title>
        <meta name="description" content="Define, _monitor, _and alert on p95/p99 API SLOs with synthetic and real-user monitoring and optional status pages." />
        <link rel="canonical" href="https://ziontechgroup.com/api-latency-slo-tracker" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">API Latency SLO Tracker</h1>
          <p className="text-slate-300">SLO-first observability for APIs: budgets, _alerts, _synthetic/RUM, _per-endpoint dashboards, _and public pages.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'SLO budgets with alerts', _'Synthetic + RUM coverage', _'Per-endpoint latency dashboards', _'Public status page (optional)' ].map(_(f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-rose-500/30 text-slate-200">{_f}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-700 text-white&quot;>Start from $129/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

