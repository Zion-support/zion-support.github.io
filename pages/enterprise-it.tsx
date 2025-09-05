<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
import { Server, CheckCircle, Database, Cloud } from 'lucide-react',

export default function EnterpriseITPage() {
  const features = [
    'Cloud migration and landing zones with cost governanceDevOps automation, CI/CD, and platform engineeringData platforms, lineage, and quality monitoringObservability, SLOs, and incident automation'],

  const solutions = [
    { name: 'Cloud Landing Zone', href: '/cloud-landing-zone' },
    { name: 'Cloud Cost Optimizer', href: '/cloud-cost-optimizer' },
    { name: 'Data Pipeline Observability', href: '/data-pipeline-observability' },
    { name: 'Uptime & SLO Monitor', href: '/uptime-slo-monitor' }],
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';


export default function EnterpriseITPage() {_const _features = [
    'Cloud migration and landing zones with cost governance', _'DevOps automation, _CI/CD, _and platform engineering', _'Data platforms, _lineage, _and quality monitoring', _'Observability, _SLOs, _and incident automation'];

  const _solutions = [
    { name: 'Cloud Landing Zone', _href: '/cloud-landing-zone'},
    {_name: 'Cloud Cost Optimizer', _href: '/cloud-cost-optimizer'},
    {_name: 'Data Pipeline Observability', _href: '/data-pipeline-observability'},
    {_name: 'Uptime & SLO Monitor', _href: '/uptime-slo-monitor'}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Layout>
      <Head>
        <title>Enterprise IT | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Cloud, DevOps, data platforms, and SRE with cost, performance, and reliability in focus.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/enterprise-it&quot; />
=======
        <meta name="description" content="Cloud, _DevOps, _data platforms, _and SRE with cost, _performance, _and reliability in focus." />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-it" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto space-y-12&quot;>
          <header className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4&quot;>
              <Server className=&quot;w-8 h-8 text-white&quot; />
            </div>
<<<<<<< HEAD
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Enterprise IT</h1>
            <p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>Ship secure, reliable platforms with measurable business outcomes.</p>
            <div className=&quot;mt-8 flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;px-8 py-4&quot;>Get a Roadmap</Link>
              <a href=&quot;/market-pricing&quot; className=&quot;px-8 py-4&quot;>See Market Pricing</Link>
=======
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Enterprise IT</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Ship secure, _reliable platforms with measurable business outcomes.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Get a Roadmap</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </header>

          <section>
<<<<<<< HEAD
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Core Capabilities</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              {features.map((f) => (
                <div key={f} className=&quot;flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; />
                  <span className=&quot;text-gray-200&quot;>{f}</span>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {_features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{_f}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </div>
          </section>

          <section>
<<<<<<< HEAD
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Highlighted Solutions</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6&quot;>
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors&quot;>
                  <div className=&quot;text-gray-200 font-semibold mb-2&quot;>{s.name}</div>
                  <p className=&quot;text-gray-300 text-sm&quot;>Learn more</p>
                </Link>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {_solutions.map(_(s) => (
                <a key={s.name} href={_s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{_s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}