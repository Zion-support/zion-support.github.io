<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function EmailDmarcAnalyzerPage() {
  return (
    <Layout>
      <Head>
        <title>Email DMARC Analyzer | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Monitor DMARC aggregate reports, SPF/DKIM posture, domain reputation hints, and deliverability scorecards.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/email-dmarc-analyzer&quot; />
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function EmailDmarcAnalyzerPage() {_return (_<Layout>
      <Head>
        <title>Email DMARC Analyzer | Zion Tech Group</title>
        <meta name="description" content="Monitor DMARC aggregate reports, _SPF/DKIM posture, _domain reputation hints, _and deliverability scorecards." />
        <link rel="canonical" href="https://ziontechgroup.com/email-dmarc-analyzer" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Email DMARC Analyzer</h1>
          <p className="text-slate-300">DMARC reporting, _SPF/DKIM audits, _DNS change tracking, _and mailbox provider insights for small teams.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<<<<<<< HEAD
            {[ 'DMARC aggregate/forensic reportsSPF/DKIM audits & DNS historyProvider insights & tipsWeekly deliverability scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-amber-500/30 text-slate-200">{f}</div>
=======
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent&quot;>Email DMARC Analyzer</h1>
          <p className=&quot;text-slate-300&quot;>DMARC reporting, SPF/DKIM audits, DNS change tracking, and mailbox provider insights for small teams.</p>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            {[ 'DMARC aggregate/forensic reports', 'SPF/DKIM audits & DNS history', 'Provider insights & tips', 'Weekly deliverability scorecard' ].map((f) => (
              <div key={f} className=&quot;p-4 rounded-xl bg-black/40 border border-amber-500/30 text-slate-200&quot;>{f}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            {[ 'DMARC aggregate/forensic reports', _'SPF/DKIM audits & DNS history', _'Provider insights & tips', _'Weekly deliverability scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-amber-500/30 text-slate-200">{_f}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white&quot;>Start from $39/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

