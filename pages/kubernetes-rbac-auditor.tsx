<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function KubernetesRbacAuditorPage() {
  return (
    <Layout>
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function KubernetesRbacAuditorPage() {_return (_<Layout>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Head>
        <title>Kubernetes RBAC Auditor | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Detect over-permissive Kubernetes roles and unused bindings with least-privilege recommendations.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/kubernetes-rbac-auditor&quot; />
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Kubernetes RBAC Auditor</h1>
          <p className="text-slate-300">Over-permission detection, _wildcard checks, _unused bindings, _and least-privilege recommendations.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<<<<<<< HEAD
            {[ 'Cluster-wide RBAC inventoryOver-permission & wildcard detectionUnused binding analysisLeast-privilege recommendations' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-sky-500/30 text-slate-200">{f}</div>
=======
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto space-y-6&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent&quot;>Kubernetes RBAC Auditor</h1>
          <p className=&quot;text-slate-300&quot;>Over-permission detection, wildcard checks, unused bindings, and least-privilege recommendations.</p>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            {[ 'Cluster-wide RBAC inventory', 'Over-permission & wildcard detection', 'Unused binding analysis', 'Least-privilege recommendations' ].map((f) => (
              <div key={f} className=&quot;p-4 rounded-xl bg-black/40 border border-sky-500/30 text-slate-200&quot;>{f}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            {[ 'Cluster-wide RBAC inventory', _'Over-permission & wildcard detection', _'Unused binding analysis', _'Least-privilege recommendations' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-sky-500/30 text-slate-200">{_f}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            <a href=&quot;/contact&quot; className=&quot;px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white&quot;>Start from $179/mo</Link>
            <a href=&quot;/market-pricing&quot; className=&quot;px-6 py-3 rounded-xl border border-gray-700 text-gray-200&quot;>See market pricing</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

