<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
export default function FoundationPage() {
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function foundation() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <Layout>
      <Head>
        <title>Foundation - Zion Tech Group</title>
        <meta name="description" content="Foundation solutions and services." />
      </Head>
<<<<<<< HEAD
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">Zion Foundation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Stewarding the protocol’s vision, maintaining global neutrality, and operating outside of any one jurisdiction. This portal provides the charter, transparency reports, grants, and partnership MOUs.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/governance/trust"><a className="underline">Governance & Trust</a></Link>
            <a className="underline" href="#reports">Transparency Reports</a>
            <a className="underline" href="#grants">Grants</a>
            <a className="underline" href="#mou">Partnership MOUs</a>
          </div>
        </section>

        <section className="space-y-4" id="charter">
          <h2 className="text-2xl font-semibold">Foundation Charter</h2>
          <p className="text-gray-600 dark:text-gray-300">Legal-neutral charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust.</p>
          <CharterGenerator />
        </section>

        <section className="space-y-4" id="reports">
          <h2 className="text-2xl font-semibold">Transparency Reports</h2>
          <p className="text-gray-600 dark:text-gray-300">Quarterly financials, grants, and impact metrics. Initial placeholders shown until reports are published.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3].map((q) => (
              <div key={q} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">Report Q{q} 2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Status: Draft</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>

        <section className="space-y-4" id="mou">
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">No MOUs published yet.</div>
        </section>
      </div>
    </>
  )
=======
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Foundation</h1>
          <p className="text-lg text-gray-600">
            Professional foundation solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}