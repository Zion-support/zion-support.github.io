import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function GitHubComplianceBotPage() {
  return (
    <Layout>
      <Head>
        <title>GitHub Compliance Bot | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Automated GitHub compliance checks for SOC 2, ISO 27001, secrets scanning, and repo hygiene with reports and alerts.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/github-compliance-bot&quot; />      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">GitHub Compliance Bot</h1>
          <p className="text-slate-300">Automated repo checks for SOC 2/ISO controls, _branch protections, _CODEOWNERS, _secrets scanning, _licenses, _and drift alerts.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'Policy-as-code checksBranch protection enforcementSecrets scanning alertsWeekly report & scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 text-slate-200">{f}</div>            {[ 'Policy-as-code checks', _'Branch protection enforcement', _'Secrets scanning alerts', _'Weekly report & scorecard' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 text-slate-200">{_f}</div>
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white&quot;>Start from $149/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

