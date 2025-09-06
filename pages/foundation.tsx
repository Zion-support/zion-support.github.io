<<<<<<< HEAD
import Head from 'next/head',
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
=======
import Head from 'next/head',
import Link from 'next/link',
import CharterGenerator from '../components/foundation/CharterGenerator',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function FoundationPage() {
  return (
    <>
      <Head>
        <title>Zion Foundation</title>
<<<<<<< HEAD
        <meta name="description" content="Public-facing Zion Foundation: neutrality, transparency, grants, and governance." />
      </Head>
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">Zion Foundation</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Stewarding the protocol’s vision, maintaining global neutrality, and operating outside of any one jurisdiction. This portal provides the charter, transparency reports, grants, and partnership MOUs.</p>
          <div className="flex flex-wrap gap-3 text-sm">
<<<<<<< HEAD
            <Link href="/governance/trust"><a className="underline">Governance & Trust</a></Link>
            <a className="underline" href="#reports">Transparency Reports</a>
            <a className="underline" href="#grants">Grants</a>
            <a className="underline" href="#mou">Partnership MOUs</a>
          </div>
        </section>

=======
            <Link href="/governance/trust"><a className="underline">Governance & Trust</Link></Link>
            <a className="underline" href="#reports">Transparency Reports</Link>
            <a className="underline" href="#grants">Grants</Link>
            <a className="underline" href="#mou">Partnership MOUs</Link>
          </div>
        </section>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <section className="space-y-4" id="charter">
          <h2 className="text-2xl font-semibold">Foundation Charter</h2>
          <p className="text-gray-600 dark:text-gray-300">Legal-neutral charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust.</p>
          <CharterGenerator />
        </section>
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <section className="space-y-4" id="reports">
          <h2 className="text-2xl font-semibold">Transparency Reports</h2>
          <p className="text-gray-600 dark:text-gray-300">Quarterly financials, grants, and impact metrics. Initial placeholders shown until reports are published.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3].map((q) => (
              <div key={q} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">Report Q{q} 2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Status: Draft</div>
<<<<<<< HEAD
=======
        <meta
          name='description'
          content='Public-facing Zion Foundation: neutrality, transparency, grants, and governance.'
        />
      </Head>
      <div className='space-y-12'>
        <section className='space-y-3'>
          <h1 className='text-3xl font-bold'>Zion Foundation</h1>
          <p className='text-gray-600 dark:text-gray-300 max-w-3xl'>
            Stewarding the protocol’s vision, maintaining global neutrality, and
            operating outside of any one jurisdiction. This portal provides the
            charter, transparency reports, grants, and partnership MOUs.
          </p>
          <div className='flex flex-wrap gap-3 text-sm'>
            <Link href='/governance/trust'>
              <a className='underline'>Governance & Trust</a>
            </Link>
            <a className='underline' href='#reports'>
              Transparency Reports
            </a>
            <a className='underline' href='#grants'>
              Grants
            </a>
            <a className='underline' href='#mou'>
              Partnership MOUs
            </a>
          </div>
        </section>

        <section className='space-y-4' id='charter'>
          <h2 className='text-2xl font-semibold'>Foundation Charter</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Legal-neutral charter for a decentralized AI protocol committed to
            sovereignty, open knowledge, and trust.
          </p>
          <CharterGenerator />
        </section>

        <section className='space-y-4' id='reports'>
          <h2 className='text-2xl font-semibold'>Transparency Reports</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Quarterly financials, grants, and impact metrics. Initial
            placeholders shown until reports are published.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[1, 2, 3].map(q => (
              <div
                key={q}
                className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'
              >
                <div className='font-medium'>Report Q{q} 2025</div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>
                  Status: Draft
                </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
              </div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        <section className='space-y-4' id='grants'>
          <h2 className='text-2xl font-semibold'>Grants Issued</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Cross-multiverse grants across chains, rollups, and alternate
            compute realms.
          </p>
          <ul className='list-disc list-inside space-y-2 text-sm'>
=======
        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
<<<<<<< HEAD
            <li>
              Open dataset creation for multilingual benchmarks — Milestone 0
              (Planned)
<<<<<<< HEAD
            </li>            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>
=======
            </li>
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        <section className='space-y-4' id='mou'>
          <h2 className='text-2xl font-semibold'>Partnership MOU Archive</h2>
          <p className='text-gray-600 dark: text-gray-300'>
            Public archive of Memoranda of Understanding (MOUs). Redactions may
            apply where legally required.
          </p>
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400'>
            No MOUs published yet.
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
=======
        <section className="space-y-4" id="mou">
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">No MOUs published yet.</div>
        </section>
      </div>
    </>
  )
import Head from 'next/head';
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
export default function FoundationPage(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <title>Zion Foundation</title>;
        <meta name="description" content="Public-facing Zion Foundation: neutrality, transparency, grants, and governance." />;
      </Head>;
      <div className="space-y-12">;
        <section className="space-y-3">;
          <h1 className="text-3xl font-bold">Zion Foundation</h1>;
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Stewarding the protocol’s vision, maintaining global neutrality, and operating outside of any one jurisdiction. This portal provides the charter, transparency reports, grants, and partnership MOUs.</p>;
          <div className="flex flex-wrap gap-3 text-sm">;
            <Link href="/governance/trust"><a className="underline">Governance & Trust</a></Link>;
            <a className="underline" href="#reports">Transparency Reports</a>;
            <a className="underline" href="#grants">Grants</a>;
            <a className="underline" href="#mou">Partnership MOUs</a>;
          </div>;
        </section>;
        <section className="space-y-4" id="charter">;
          <h2 className="text-2xl font-semibold">Foundation Charter</h2>;
          <p className="text-gray-600 dark:text-gray-300">Legal-neutral charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust.</p>;
          <CharterGenerator />;
        </section>;
        <section className="space-y-4" id="reports">;
          <h2 className="text-2xl font-semibold">Transparency Reports</h2>;
          <p className="text-gray-600 dark:text-gray-300">Quarterly financials, grants, and impact metrics. Initial placeholders shown until reports are published.</p>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
            {[1,2,3].map((q) => (;
              <div key={q} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
                <div className="font-medium">Report Q{q} 2025</div>;
                <div className="text-sm text-gray-600 dark:text-gray-400">Status: Draft</div>;
              </div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        <section className="space-y-4" id="grants">;
          <h2 className="text-2xl font-semibold">Grants Issued</h2>;
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>;
          <ul className="list-disc list-inside space-y-2 text-sm">;
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>;
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>;
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>;
          </ul>;
        </section>;
        <section className="space-y-4" id="mou">;
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>;
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>;
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">No MOUs published yet.</div>;
        </section>;
      </div>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
