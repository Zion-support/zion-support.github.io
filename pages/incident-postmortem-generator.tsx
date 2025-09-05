import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function IncidentPostmortemGeneratorPage() {
  return (
    <Layout>
      <Head>
        <title>Incident Postmortem Generator | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;AI-assisted incident RCA with timeline, impact, stakeholder comms, templates, and reviewer workflows.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/incident-postmortem-generator&quot; />
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">Incident Postmortem Generator</h1>
          <p className="text-slate-300">Generate high-quality RCAs by stitching logs, alerts, deploys, and chat history with templates and reviewer loops.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'RCA timeline assemblyImpact summary & customer commsTemplate library & reviewer flowAction items with owners & SLAs' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-purple-500/30 text-slate-200">{f}</div>
=======
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent&quot;>Incident Postmortem Generator</h1>
          <p className=&quot;text-slate-300&quot;>Generate high-quality RCAs by stitching logs, alerts, deploys, and chat history with templates and reviewer loops.</p>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            {[ 'RCA timeline assembly', 'Impact summary & customer comms', 'Template library & reviewer flow', 'Action items with owners & SLAs' ].map((f) => (
              <div key={f} className=&quot;p-4 rounded-xl bg-black/40 border border-purple-500/30 text-slate-200&quot;>{f}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-700 text-white&quot;>Start from $79/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

