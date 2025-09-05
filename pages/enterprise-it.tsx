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
  return (_<Layout>
      <Head>
        <title>Enterprise IT | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Cloud, DevOps, data platforms, and SRE with cost, performance, and reliability in focus.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/enterprise-it&quot; />      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto space-y-12&quot;>
          <header className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4&quot;>
              <Server className=&quot;w-8 h-8 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Enterprise IT</h1>
            <p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>Ship secure, reliable platforms with measurable business outcomes.</p>
            <div className=&quot;mt-8 flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;px-8 py-4&quot;>Get a Roadmap</Link>
              <a href=&quot;/market-pricing&quot; className=&quot;px-8 py-4&quot;>See Market Pricing</Link>            </div>
          </header>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Core Capabilities</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              {features.map((f) => (
                <div key={f} className=&quot;flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; />
                  <span className=&quot;text-gray-200&quot;>{f}</span>                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Highlighted Solutions</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6&quot;>
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors&quot;>
                  <div className=&quot;text-gray-200 font-semibold mb-2&quot;>{s.name}</div>
                  <p className=&quot;text-gray-300 text-sm&quot;>Learn more</p>
                </Link>              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}