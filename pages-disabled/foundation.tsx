<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head',
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Head from 'next/head';
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
=======
import Head from 'next/head';
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import Head from 'next/head',
import Link from 'next/link',
import CharterGenerator from '../components/foundation/CharterGenerator',
export default function FoundationPage() {
  return (
    <>
      <Head>
        <title>Zion Foundation</title>
        <meta name="description" content="Public-facing Zion Foundation: neutrality, transparency, grants, and governance." />
      </Head>
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
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="space-y-4" id="reports">
          <h2 className="text-2xl font-semibold">Transparency Reports</h2>
          <p className="text-gray-600 dark:text-gray-300">Quarterly financials, grants, and impact metrics. Initial placeholders shown until reports are published.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3].map((q) => (
              <div key={q} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">Report Q{q} 2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Status: Draft</div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

            <Link href="/governance/trust"><a className="underline">Governance & Trust</Link></Link>
            <a className="underline" href="#reports">Transparency Reports</Link>
            <a className="underline" href="#grants">Grants</Link>
            <a className="underline" href="#mou">Partnership MOUs</Link>
          </div>
        </section>
        <section className="space-y-4" id="charter">
          <h2 className="text-2xl font-semibold">Foundation Charter</h2>
          <p className="text-gray-600 dark:text-gray-300">Legal-neutral charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust.</p>
          <CharterGenerator />
        </section>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>
            ))}
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>
              Open dataset creation for multilingual benchmarks — Milestone 0;
              (Planned)
            </li>            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>


              </div>;
            ))}
          </div>;
        </section>;
        <section className='space-y-4' id='grants'>;'
          <h2 className='text-2xl font-semibold'>Grants Issued</h2>;'
          <p className='text-gray-600 dark:text-gray-300'>;
            Cross-multiverse grants across chains, rollups, and alternate;
            compute realms.;
          </p>;'
          <ul className='list-disc list-inside space-y-2 text-sm'>;
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>;
            <li>;
              Open dataset creation for multilingual benchmarks — Milestone 0;
              (Planned);
            </li>            <li>Agent interoperability standards and sandbox — RFP (Open)</li>;
          </ul>;
        </section>;'
        <section className='space-y-4' id='mou'>;'
          <h2 className='text-2xl font-semibold'>Partnership MOU Archive</h2>;'
          <p className='text-gray-600 dark: text-gray-300'>;
            Public archive of Memoranda of Understanding (MOUs). Redactions may;
            apply where legally required.;
          </p>;'
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400'>;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import Head from 'next / head';
import Link from 'next / link';
=======
'
import Head from 'next / head';'
import Link from 'next / link';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import CharterGenerator from '../components / foundation / CharterGenerator';
              </div>))}
          </div>;
        </section>;'
        <section className='space - y-4' id='grants'>;'
          <h2 className='text - 2xl font - semibold'>Grants Issued</h2>;'
          <p className='text - gray - 600 dark:text - gray - 300'>;
            Cross - multiverse grants across chains, rollups, and alternate;
            compute realms.;
          </p>;'
          <ul className='list - disc list - inside space - y-2 text - sm'>;
            <li > Seed safety tooling and evals R & D — Milestone 1 (Pending)</li>;
            <li>;
              Open dataset creation for multilingual benchmarks — Milestone 0;
              (Planned);
            </li>            <li > Agent interoperability standards and sandbox — RFP (Open)</li>;
          </ul>;
        </section>;'
        <section className='space - y-4' id='mou'>;'
          <h2 className='text - 2xl font - semibold'>Partnership MOU Archive</h2>;'
          <p className='text - gray - 600 dark: text - gray - 300'>;
            Public archive of Memoranda of Understanding (MOUs). Redactions may;
            apply where legally required.;
          </p>;'
          <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 text - sm text - gray - 600 dark:text - gray - 400'>;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            No MOUs published yet.;
          </div>;
        </section>;
      </div>;


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
        <section className='space-y-4' id='grants'>
=======

        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>
=======

<section className='space-y-4' id='grants'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <h2 className='text-2xl font-semibold'>Grants Issued</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Cross-multiverse grants across chains, rollups, and alternate
            compute realms.
          </p>
          <ul className='list-disc list-inside space-y-2 text-sm'>
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


        <section className="space-y-4" id="grants">"
          <h2 className="text-2xl font-semibold">Grants Issued</h2>"
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>"
          <ul className="list-disc list-inside space-y-2 text-sm">





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
        <section className='space-y-4' id='mou'>
=======
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>
              Open dataset creation for multilingual benchmarks — Milestone 0
              (Planned)
            </li>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>

<<<<<<< HEAD
        <section className='space-y-4' id='mou'>
=======
<section className='space-y-4' id='mou'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  );
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <section className="space-y-4" id="mou">
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>
=======




"
        <section className="space-y-4" id="mou">"
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>"
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">No MOUs published yet.</div>
        </section>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>;
        </section>;"
        <section className="space-y-4" id="grants">;"
          <h2 className="text-2xl font-semibold">Grants Issued</h2>;"
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>;"
          <ul className="list-disc list-inside space-y-2 text-sm">;
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>;
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>;
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>;
          </ul>;
        </section>;"
        <section className="space-y-4" id="mou">;"
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>;"
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>;"
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">No MOUs published yet.</div>;
        </section>;
      </div>;
    </>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
