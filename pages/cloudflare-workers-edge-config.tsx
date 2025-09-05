import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function CloudflareWorkersEdgeConfigPage() {
  return (
    <Layout>
      <Head>
        <title>Cloudflare Workers Edge Config Manager | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Safe, versioned edge configuration for Cloudflare Workers/KV with previews, rollbacks, and audit logs.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/cloudflare-workers-edge-config&quot; />
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Cloudflare Workers Edge Config</h1>
          <p className="text-slate-300">Managed configuration for Workers/KV: environments, approvals, previews, rollbacks, and audit logs for edge apps.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 'Versioned config with approvalsPreview links & automatic rollbacksAudit logs & drift detectionMulti-env & secret management' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-indigo-500/30 text-slate-200">{f}</div>
=======
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent&quot;>Cloudflare Workers Edge Config</h1>
          <p className=&quot;text-slate-300&quot;>Managed configuration for Workers/KV: environments, approvals, previews, rollbacks, and audit logs for edge apps.</p>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            {[ 'Versioned config with approvals', 'Preview links & automatic rollbacks', 'Audit logs & drift detection', 'Multi-env & secret management' ].map((f) => (
              <div key={f} className=&quot;p-4 rounded-xl bg-black/40 border border-indigo-500/30 text-slate-200&quot;>{f}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white&quot;>Start from $99/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

