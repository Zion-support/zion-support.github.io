<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import Link from 'next/link';
import Head from 'next/head',
import Link from 'next/link',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function GovernanceTrustPage() {
  return (
    <>
      <Head>
        <title>Zion Governance & Trust</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Governance, legal registry options, and public trust commitments for the Zion Protocol." />
<meta name="description" content="Governance, legal registry options, and public trust commitments for the Zion Protocol." />
        <meta name;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <meta name;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <meta name="description" content="Governance, legal registry options, and public trust commitments for the Zion Protocol." />
      </Head>
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">Governance & Public Trust</h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Appoint Core Stewards, delegate voting rights to nation and community DAOs, and publish quarterly reports with impact metrics.</p>
          <Link href="/foundation"><a className="underline text-sm">Back to Foundation Portal</a></Link>
        </section>

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Appoint Core Stewards, delegate voting rights to nation and community DAOs, and publish quarterly reports with impact metrics.</p>
          <Link href="/foundation"><a className="underline text-sm">Back to Foundation Portal</Link></Link>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Registry & Legal Structure</h2>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
=======
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Registry & Legal Structure</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {[{
              title: 'Cayman Foundation',
              desc: 'Globally recognized for crypto-native, non-profit style public-good coordination.'
            }, {
              title: 'Swiss Verein',
              desc: 'Member association model with global neutrality and flexible local chapters.'
            }, {
              title: 'US 501(c)(6)',
              desc: 'Business league for industry coordination and standards, disclosure-focused.'
            }, {
              title: 'DAO-native Wrapper',
<<<<<<< HEAD



<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.'
            }].map((opt) => (
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">{opt.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
            ))}
          </div>
        </section>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                Appointed via DAO ratification, accountable to publish roadmaps,

                risk registers, and post-mortems.
              </div>
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Core Stewards</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification, accountable to publish roadmaps, risk registers, and post-mortems.</div>



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <div className='font-medium mb-1'>Delegated Voting</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Nation/community DAOs receive delegated rights proportionally to
                stake and contribution, with slashing/recall for inactivity or
                misconduct.
              </div>
            </div>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <div className='font-medium mb-1'>Quarterly Reports</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Financials, grants, impact metrics, and execution status are
                published within 30 days of quarter-end.
              </div>
            </div>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <div className='font-medium mb-1'>Public Archives</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Charter versions, MOUs, audits, and on-chain dashboards are
                publicly accessible and time-stamped.
              </div>            </div>
          </div>
        </section>
<<<<<<< HEAD



        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Operator Prompt</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Write a legal-neutral foundation charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust. Include DAO integration and multiverse grant rights.</p>
          <Link href="/foundation#charter"><a className="underline text-sm">Open Charter Generator</Link></Link>
        </section>
      </div>
    </>
  )
import Head from 'next/head';
import Link from 'next/link';
export default function GovernanceTrustPage(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <title>Zion Governance & Trust</title>;
        <meta name="description" content="Governance, legal registry options, and public trust commitments for the Zion Protocol." />;
      </Head>;
      <div className="space-y-12">;
        <section className="space-y-3">;
          <h1 className="text-3xl font-bold">Governance & Public Trust</h1>;
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Appoint Core Stewards, delegate voting rights to nation and community DAOs, and publish quarterly reports with impact metrics.</p>;
          <Link href="/foundation"><a className="underline text-sm">Back to Foundation Portal</a></Link>;
        </section>;
        <section className="space-y-4">;
          <h2 className="text-2xl font-semibold">Registry & Legal Structure</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">;
            {[{;
              title: 'Cayman Foundation',;
              desc: 'Globally recognized for crypto-native, non-profit style public-good coordination.';
            }, {;
              title: 'Swiss Verein',;
              desc: 'Member association model with global neutrality and flexible local chapters.';
            }, {;
              title: 'US 501(c)(6)';
              desc: 'Business league for industry coordination and standards, disclosure-focused.';
            }, {;
              title: 'DAO-native Wrapper';
              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.';
            }].map((opt) => (;
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
                <div className="font-medium">{opt.title}</div>;
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>;
              </div>;
<<<<<<< HEAD
</div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}
          </div>;
        </section>;
        <section className='space-y-4'>;
          <h2 className='text-2xl font-semibold'>Governance</h2>;
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Core Stewards</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Appointed via DAO ratification, accountable to publish roadmaps,;
                risk registers, and post-mortems.;
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Delegated Voting</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Nation/community DAOs receive delegated rights proportionally to;
                stake and contribution, with slashing/recall for inactivity or;
                misconduct.;
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Quarterly Reports</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Financials, grants, impact metrics, and execution status are;
                published within 30 days of quarter-end.;
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Public Archives</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Charter versions, MOUs, audits, and on-chain dashboards are;
                publicly accessible and time-stamped.;
              </div>            </div>;
          </div>;
        </section>;
        <section className='space-y-2'>;
          <h2 className='text-2xl font-semibold'>Operator Prompt</h2>;
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
            Write a legal-neutral foundation charter for a decentralized AI;
import Head from 'next / head';
import Link from 'next / link';
              </div>))}
          </div>;
        </section>;
        <section className='space - y-4'>;
          <h2 className='text - 2xl font - semibold'>Governance</h2>;
          <div className='grid grid - cols - 1 md: grid - cols - 2 gap - 4'>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Core Stewards</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Appointed via DAO ratification, accountable to publish roadmaps,
                risk registers, and post - mortems.;
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Delegated Voting</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Nation / community DAOs receive delegated rights proportionally to;
                stake and contribution, with slashing / recall for inactivity or;
                misconduct.;
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Quarterly Reports</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Financials, grants, impact metrics, and execution status are;
                published within 30 days of quarter - end.;
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Public Archives</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Charter versions, MOUs, audits, and on - chain dashboards are;
                publicly accessible and time - stamped.;
              </div>            </div>;
          </div>;
        </section>;
        <section className='space - y-2'>;
          <h2 className='text - 2xl font - semibold'>Operator Prompt</h2>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
            Write a legal - neutral foundation charter for a decentralized AI;
            protocol committed to sovereignty, open knowledge, and trust.;
            Include DAO integration and multiverse grant rights.;
          </p>;
          <Link href='/foundation#charter'>;

<<<<<<< HEAD
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Core Stewards</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification, accountable to publish roadmaps, risk registers, and post-mortems.</div>
            </div>
<div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Delegated Voting</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Nation/community DAOs receive delegated rights proportionally to stake and contribution, with slashing/recall for inactivity or misconduct.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Quarterly Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Financials, grants, impact metrics, and execution status are published within 30 days of quarter-end.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Public Archives</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Charter versions, MOUs, audits, and on-chain dashboards are publicly accessible and time-stamped.</div>
            </div>
          </div>
        </section>
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Operator Prompt</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Write a legal-neutral foundation charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust. Include DAO integration and multiverse grant rights.</p>
          <Link href="/foundation#charter"><a className="underline text-sm">Open Charter Generator</a></Link>
        </section>
      </div>
    </>
  )
}
            <a className='underline text - sm'>Open Charter Generator</a>;
          </Link>;
        </section>;
      </div>;
    </>);
;
              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.'
            }].map((opt) => (
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">{opt.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>
              </div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </section>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Governance</h2>
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <div className='font-medium mb-1'>Core Stewards</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Appointed via DAO ratification, accountable to publish roadmaps
                Appointed via DAO ratification, accountable to publish roadmaps,
                risk registers, and post-mortems.
              </div>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Core Stewards</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification, accountable to publish roadmaps, risk registers, and post-mortems.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Delegated Voting</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Nation/community DAOs receive delegated rights proportionally to stake and contribution, with slashing/recall for inactivity or misconduct.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Quarterly Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Financials, grants, impact metrics, and execution status are published within 30 days of quarter-end.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Public Archives</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Charter versions, MOUs, audits, and on-chain dashboards are publicly accessible and time-stamped.</div>
            </div>
          </div>
        </section>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className='space-y-2'>
          <h2 className='text-2xl font-semibold'>Operator Prompt</h2>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Write a legal-neutral foundation charter for a decentralized AI
            protocol committed to sovereignty, open knowledge, and trust.
            Include DAO integration and multiverse grant rights.
          </p>
          <Link href='/foundation#charter'>
            <a className='underline text-sm'>Open Charter Generator</a>
          </Link>
        </section>
      </div>
    </>
  );
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Operator Prompt</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Write a legal-neutral foundation charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust. Include DAO integration and multiverse grant rights.</p>
          <Link href="/foundation#charter"><a className="underline text-sm">Open Charter Generator</Link></Link>
        </section>
      </div>
    </>
  )
import Head from 'next/head';
import Link from 'next/link';
export default function GovernanceTrustPage(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <title>Zion Governance & Trust</title>;
        <meta name="description" content="Governance, legal registry options, and public trust commitments for the Zion Protocol." />;
      </Head>;
      <div className="space-y-12">;
        <section className="space-y-3">;
          <h1 className="text-3xl font-bold">Governance & Public Trust</h1>;
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Appoint Core Stewards, delegate voting rights to nation and community DAOs, and publish quarterly reports with impact metrics.</p>;
          <Link href="/foundation"><a className="underline text-sm">Back to Foundation Portal</a></Link>;
        </section>;
        <section className="space-y-4">;
          <h2 className="text-2xl font-semibold">Registry & Legal Structure</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">;
            {[{;
              title: 'Cayman Foundation',;
              desc: 'Globally recognized for crypto-native, non-profit style public-good coordination.';
            }, {;
              title: 'Swiss Verein',;
              desc: 'Member association model with global neutrality and flexible local chapters.';
            }, {;
              title: 'US 501(c)(6)';
              desc: 'Business league for industry coordination and standards, disclosure-focused.';
            }, {;
              title: 'DAO-native Wrapper';
              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.';
            }].map((opt) => (;
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
                <div className="font-medium">{opt.title}</div>;
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>;
<<<<<<< HEAD
              </div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        <section className="space-y-4">;
          <h2 className="text-2xl font-semibold">Governance</h2>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">;
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              <div className="font-medium mb-1">Core Stewards</div>;
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification, accountable to publish roadmaps, risk registers, and post-mortems.</div>;
            </div>;
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              <div className="font-medium mb-1">Delegated Voting</div>;
              <div className="text-sm text-gray-600 dark:text-gray-400">Nation/community DAOs receive delegated rights proportionally to stake and contribution, with slashing/recall for inactivity or misconduct.</div>;
            </div>;
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              <div className="font-medium mb-1">Quarterly Reports</div>;
              <div className="text-sm text-gray-600 dark:text-gray-400">Financials, grants, impact metrics, and execution status are published within 30 days of quarter-end.</div>;
            </div>;
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">;
              <div className="font-medium mb-1">Public Archives</div>;
              <div className="text-sm text-gray-600 dark:text-gray-400">Charter versions, MOUs, audits, and on-chain dashboards are publicly accessible and time-stamped.</div>;
            </div>;
          </div>;
        </section>;
        <section className="space-y-2">;
          <h2 className="text-2xl font-semibold">Operator Prompt</h2>;
          <p className="text-sm text-gray-600 dark:text-gray-400">Write a legal-neutral foundation charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust. Include DAO integration and multiverse grant rights.</p>;
          <Link href="/foundation#charter"><a className="underline text-sm">Open Charter Generator</a></Link>;
        </section>;
      </div>;
<<<<<<< HEAD
    </>;
  );
=======
    </>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>;
            ))}
          </div>;
        </section>;

        <section className='space-y-4'>;
          <h2 className='text-2xl font-semibold'>Governance</h2>;
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Core Stewards</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Appointed via DAO ratification, accountable to publish roadmaps,;
                risk registers, and post-mortems.;
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Delegated Voting</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Nation/community DAOs receive delegated rights proportionally to;
                stake and contribution, with slashing/recall for inactivity or;
                misconduct.;
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Quarterly Reports</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Financials, grants, impact metrics, and execution status are;
                published within 30 days of quarter-end.;
              </div>;
            </div>;
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
              <div className='font-medium mb-1'>Public Archives</div>;
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Charter versions, MOUs, audits, and on-chain dashboards are;
                publicly accessible and time-stamped.;
              </div>            </div>;
          </div>;
        </section>;

        <section className='space-y-2'>;
          <h2 className='text-2xl font-semibold'>Operator Prompt</h2>;
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
            Write a legal-neutral foundation charter for a decentralized AI;
=======
import Head from 'next / head';
import Link from 'next / link';
              </div>))}
          </div>;
        </section>;
        <section className='space - y-4'>;
          <h2 className='text - 2xl font - semibold'>Governance</h2>;
          <div className='grid grid - cols - 1 md: grid - cols - 2 gap - 4'>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Core Stewards</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Appointed via DAO ratification, accountable to publish roadmaps,
                risk registers, and post - mortems.;
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Delegated Voting</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Nation / community DAOs receive delegated rights proportionally to;
                stake and contribution, with slashing / recall for inactivity or;
                misconduct.;
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Quarterly Reports</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Financials, grants, impact metrics, and execution status are;
                published within 30 days of quarter - end.;
              </div>;
            </div>;
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
              <div className='font - medium mb - 1'>Public Archives</div>;
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Charter versions, MOUs, audits, and on - chain dashboards are;
                publicly accessible and time - stamped.;
              </div>            </div>;
          </div>;
        </section>;
        <section className='space - y-2'>;
          <h2 className='text - 2xl font - semibold'>Operator Prompt</h2>;
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
            Write a legal - neutral foundation charter for a decentralized AI;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            protocol committed to sovereignty, open knowledge, and trust.;
            Include DAO integration and multiverse grant rights.;
          </p>;
          <Link href='/foundation#charter'>;


=======

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Core Stewards</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification, accountable to publish roadmaps, risk registers, and post-mortems.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Delegated Voting</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Nation/community DAOs receive delegated rights proportionally to stake and contribution, with slashing/recall for inactivity or misconduct.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Quarterly Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Financials, grants, impact metrics, and execution status are published within 30 days of quarter-end.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Public Archives</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Charter versions, MOUs, audits, and on-chain dashboards are publicly accessible and time-stamped.</div>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Operator Prompt</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Write a legal-neutral foundation charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust. Include DAO integration and multiverse grant rights.</p>
          <Link href="/foundation#charter"><a className="underline text-sm">Open Charter Generator</a></Link>
        </section>
      </div>
    </>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
            <a className='underline text - sm'>Open Charter Generator</a>;
          </Link>;
        </section>;
      </div>;
    </>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
