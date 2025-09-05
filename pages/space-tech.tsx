<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
import { Satellite, CheckCircle, Globe2 } from 'lucide-react',

export default function SpaceTechPage() {
  const features = [
    'Mission control dashboards and telemetry pipelinesSatellite operations playbooks and anomaly responseGround station integrations and data delivery SLAsSecure communications and zero-trust segmentation'],
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';


export default function SpaceTechPage() {_const _features = [
    'Mission control dashboards and telemetry pipelines', _'Satellite operations playbooks and anomaly response', _'Ground station integrations and data delivery SLAs', _'Secure communications and zero-trust segmentation'];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Layout>
      <Head>
        <title>Space Technology | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Space mission control, satellite operations, and secure communications consulting.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/space-tech&quot; />
=======
        <meta name="description" content="Space mission control, _satellite operations, _and secure communications consulting." />
        <link rel="canonical" href="https://ziontechgroup.com/space-tech" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto space-y-12&quot;>
          <header className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4&quot;>
              <Satellite className=&quot;w-8 h-8 text-white&quot; />
            </div>
<<<<<<< HEAD
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Space Technology</h1>
            <p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>Secure, reliable operations for space and earth observation missions.</p>
            <div className=&quot;mt-8 flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
              <a href=&quot;/contact&quot; className=&quot;px-8 py-4&quot;>Discuss a Mission</Link>
              <a href=&quot;/market-pricing&quot; className=&quot;px-8 py-4&quot;>See Market Pricing</Link>
=======
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Space Technology</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Secure, _reliable operations for space and earth observation missions.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Discuss a Mission</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </header>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Capabilities</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              {features.map((f) => (
<<<<<<< HEAD
                <div key={f} className=&quot;flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; />
                  <span className=&quot;text-gray-200&quot;>{f}</span>
=======
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{_f}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </div>
          </section>

<<<<<<< HEAD
          <section className="text-center">
            <a href="/space-technology" className="inline-flex items-center gap-2 text-cyan-300 hover: text-cyan-200">
              <Globe2 className="w-4 h-4" />
=======
          <section className=&quot;text-center&quot;>
            <a href=&quot;/space-technology&quot; className=&quot;inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200&quot;>
              <Globe2 className=&quot;w-4 h-4&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <span>Explore detailed Space Technology offerings</span>
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  )
}