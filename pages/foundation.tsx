<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head',
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
import Head from 'next/head';
import Link from 'next/link';
import CharterGenerator from '../components/foundation/CharterGenerator';
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
        <section className="space-y-4" id="reports">
          <h2 className="text-2xl font-semibold">Transparency Reports</h2>
          <p className="text-gray-600 dark:text-gray-300">Quarterly financials, grants, and impact metrics. Initial placeholders shown until reports are published.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3].map((q) => (
              <div key={q} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">Report Q{q} 2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Status: Draft</div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            ))}
          </div>
        </section>
<<<<<<< HEAD


=======
        <section className='space-y-4' id='grants'>
          <h2 className='text-2xl font-semibold'>Grants Issued</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Cross-multiverse grants across chains, rollups, and alternate
            compute realms.
          </p>
          <ul className='list-disc list-inside space-y-2 text-sm'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
<<<<<<< HEAD


            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>
              Open dataset creation for multilingual benchmarks — Milestone 0
              (Planned)
            </li>            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>


              </div>;
<<<<<<< HEAD
              </div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </section>
=======
            ))}
          </div>;
        </section>;
        <section className='space-y-4' id='grants'>;
          <h2 className='text-2xl font-semibold'>Grants Issued</h2>;
          <p className='text-gray-600 dark:text-gray-300'>;
            Cross-multiverse grants across chains, rollups, and alternate;
            compute realms.;
          </p>;
          <ul className='list-disc list-inside space-y-2 text-sm'>;
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>;
            <li>;
              Open dataset creation for multilingual benchmarks — Milestone 0;
              (Planned);
            </li>            <li>Agent interoperability standards and sandbox — RFP (Open)</li>;
          </ul>;
        </section>;
        <section className='space-y-4' id='mou'>;
          <h2 className='text-2xl font-semibold'>Partnership MOU Archive</h2>;
          <p className='text-gray-600 dark: text-gray-300'>;
            Public archive of Memoranda of Understanding (MOUs). Redactions may;
            apply where legally required.;
          </p>;
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400'>;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next / head';
import Link from 'next / link';
import CharterGenerator from '../components / foundation / CharterGenerator';
              </div>))}
          </div>;
        </section>;
        <section className='space - y-4' id='grants'>;
          <h2 className='text - 2xl font - semibold'>Grants Issued</h2>;
          <p className='text - gray - 600 dark:text - gray - 300'>;
            Cross - multiverse grants across chains, rollups, and alternate;
            compute realms.;
          </p>;
          <ul className='list - disc list - inside space - y-2 text - sm'>;
            <li > Seed safety tooling and evals R & D — Milestone 1 (Pending)</li>;
            <li>;
              Open dataset creation for multilingual benchmarks — Milestone 0;
              (Planned);
            </li>            <li > Agent interoperability standards and sandbox — RFP (Open)</li>;
          </ul>;
        </section>;
        <section className='space - y-4' id='mou'>;
          <h2 className='text - 2xl font - semibold'>Partnership MOU Archive</h2>;
          <p className='text - gray - 600 dark: text - gray - 300'>;
            Public archive of Memoranda of Understanding (MOUs). Redactions may;
            apply where legally required.;
          </p>;
          <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 text - sm text - gray - 600 dark:text - gray - 400'>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            No MOUs published yet.;
          </div>;
        </section>;
      </div>;


=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className='space-y-4' id='grants'>
          <h2 className='text-2xl font-semibold'>Grants Issued</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Cross-multiverse grants across chains, rollups, and alternate
            compute realms.
          </p>
          <ul className='list-disc list-inside space-y-2 text-sm'>
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  );
        <section className="space-y-4" id="mou">
          <h2 className="text-2xl font-semibold">Partnership MOU Archive</h2>
          <p className="text-gray-600 dark: text-gray-300">Public archive of Memoranda of Understanding (MOUs). Redactions may apply where legally required.</p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">No MOUs published yet.</div>
        </section>
      </div>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
    </>);
;
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
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

    </>);
;

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
