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

              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">

            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>
              Open dataset creation for multilingual benchmarks — Milestone 0
              (Planned)
            </li>            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>

              </div>;
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
            No MOUs published yet.;
          </div>;
        </section>;
      </div>;

        <section className='space-y-4' id='grants'>
          <h2 className='text-2xl font-semibold'>Grants Issued</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Cross-multiverse grants across chains, rollups, and alternate
            compute realms.
          </p>
          <ul className='list-disc list-inside space-y-2 text-sm'>
        <section className="space-y-4" id="grants">
          <h2 className="text-2xl font-semibold">Grants Issued</h2>
          <p className="text-gray-600 dark:text-gray-300">Cross-multiverse grants across chains, rollups, and alternate compute realms.</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Seed safety tooling and evals R&D — Milestone 1 (Pending)</li>
            <li>Open dataset creation for multilingual benchmarks — Milestone 0 (Planned)</li>
            <li>Agent interoperability standards and sandbox — RFP (Open)</li>
          </ul>
        </section>

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
}

    </>);
;

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

