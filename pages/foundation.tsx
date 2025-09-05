<<<<<<< HEAD
import Head from 'next/head',
import Link from 'next/link',
import CharterGenerator from '../components/foundation/CharterGenerator',
export default function FoundationPage() {
  return (
    <>
      <Head>
        <title>Zion Foundation</title>
        <meta name=&quot;description&quot; content=&quot;Public-facing Zion Foundation: neutrality, transparency, grants, and governance.&quot; />
      </Head>
      <div className=&quot;space-y-12&quot;>
        <section className=&quot;space-y-3&quot;>
          <h1 className=&quot;text-3xl font-bold&quot;>Zion Foundation</h1>
          <p className=&quot;text-gray-600 dark:text-gray-300 max-w-3xl&quot;>Stewarding the protocol’s vision, maintaining global neutrality, and operating outside of any one jurisdiction. This portal provides the charter, transparency reports, grants, and partnership MOUs.</p>
          <div className=&quot;flex flex-wrap gap-3 text-sm&quot;>
            <Link href=&quot;/governance/trust&quot;><a className=&quot;underline&quot;>Governance & Trust</Link></Link>
            <a className=&quot;underline&quot; href=&quot;#reports&quot;>Transparency Reports</Link>
            <a className=&quot;underline&quot; href=&quot;#grants&quot;>Grants</Link>
            <a className=&quot;underline&quot; href=&quot;#mou&quot;>Partnership MOUs</Link>
          </div>
        </section>

        <section className=&quot;space-y-4&quot; id=&quot;charter&quot;>
          <h2 className=&quot;text-2xl font-semibold&quot;>Foundation Charter</h2>
          <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Legal-neutral charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust.</p>
          <CharterGenerator />
        </section>

        <section className=&quot;space-y-4&quot; id=&quot;reports&quot;>
          <h2 className=&quot;text-2xl font-semibold&quot;>Transparency Reports</h2>
          <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Quarterly financials, grants, and impact metrics. Initial placeholders shown until reports are published.</p>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {[1,2,3].map((q) => (
              <div key={q} className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
                <div className=&quot;font-medium&quot;>Report Q{q} 2025</div>
                <div className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>Status: Draft</div>
=======
import Head from 'next/head';
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';

export default function FoundationPage() {_return (_<>
      <Head>
        <title>Zion Foundation</title>
        <meta name="description" content="Public-facing Zion Foundation: neutrality, _transparency, _grants, _and governance." />
      </Head>
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">Zion Foundation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Stewarding the protocol’s vision, _maintaining global neutrality, _and operating outside of any one jurisdiction. This portal provides the charter, _transparency reports, _grants, _and partnership MOUs.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/governance/trust"><a className="underline">Governance & Trust</a></Link>
            <a className="underline" href="#reports">Transparency Reports</a>
            <a className="underline" href="#grants">Grants</a>
            <a className="underline" href="#mou">Partnership MOUs</a>
          </div>
        </section>

        <section className="space-y-4" id="charter">
          <h2 className="text-2xl font-semibold">Foundation Charter</h2>
          <p className="text-gray-600 dark:text-gray-300">Legal-neutral charter for a decentralized AI protocol committed to sovereignty, _open knowledge, _and trust.</p>
          <CharterGenerator />
        </section>

        <section className="space-y-4" id="reports">
          <h2 className="text-2xl font-semibold">Transparency Reports</h2>
          <p className="text-gray-600 dark:text-gray-300">Quarterly financials, _grants, _and impact metrics. Initial placeholders shown until reports are published.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, _2, _3].map((q) => (
              <div key={q} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">Report Q{_q} 2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Status: Draft</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </div>
        </section>

        <section className=&quot;space-y-4&quot; id=&quot;grants&quot;>
          <h2 className=&quot;text-2xl font-semibold&quot;>Grants Issued</h2>
          <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className=&quot;list-disc list-inside space-y-2 text-sm&quot;>
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>

<<<<<<< HEAD
        <section className="space-y-4" id="mou">
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">No MOUs published yet.</div>
=======
        <section className=&quot;space-y-4&quot; id=&quot;mou&quot;>
          <h2 className=&quot;text-2xl font-semibold&quot;>Partnership MOU Archive</h2>
          <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>
          <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400&quot;>No MOUs published yet.</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </section>
      </div>
    </>
  )
}