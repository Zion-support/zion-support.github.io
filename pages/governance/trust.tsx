<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function GovernanceTrustPage() {
=======

export default function GovernanceTrustPage() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <>
      <Head>
        <title>Zion Governance & Trust</title>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <meta name="description" content="Governance, legal registry options, and public trust commitments for the Zion Protocol." />
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      </Head>
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">Governance & Public Trust</h1>

=======
<<<<<<< HEAD
=======
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Appoint Core Stewards, delegate voting rights to nation and community DAOs, and publish quarterly reports with impact metrics.</p>
          <Link href="/foundation"><a className="underline text-sm">Back to Foundation Portal</Link></Link>
        </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Registry & Legal Structure</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.'
            }].map((opt) => (
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">{opt.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>
            ))}
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='space-y-4'>
=======
=======

<section className='space-y-4'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <h2 className='text-2xl font-semibold'>Governance</h2>
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
              <div className='font-medium mb-1'>Core Stewards</div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Appointed via DAO ratification, accountable to publish roadmaps
<<<<<<< HEAD
                Appointed via DAO ratification, accountable to publish roadmaps,
                risk registers, and post-mortems.
              </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
                risk registers, and post-mortems.
              </div>
=======


                Appointed via DAO ratification, accountable to publish roadmaps,

                risk registers, and post-mortems.
              </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                risk registers, and post-mortems.
              </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Core Stewards</div>
=======

        <section className="space-y-4">"
          <h2 className="text-2xl font-semibold">Governance</h2>"
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">"
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">"
              <div className="font-medium mb-1">Core Stewards</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification, accountable to publish roadmaps, risk registers, and post-mortems.</div>



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>'
              <div className='font-medium mb-1'>Delegated Voting</div>'
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Nation/community DAOs receive delegated rights proportionally to;
                stake and contribution, with slashing/recall for inactivity or;
                misconduct.
              </div>
            </div>'
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>'
              <div className='font-medium mb-1'>Quarterly Reports</div>'
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Financials, grants, impact metrics, and execution status are;
                published within 30 days of quarter-end.
              </div>
            </div>'
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>'
              <div className='font-medium mb-1'>Public Archives</div>'
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Charter versions, MOUs, audits, and on-chain dashboards are;
                publicly accessible and time-stamped.
<<<<<<< HEAD
              </div>            </div>
          </div>
        </section>


<<<<<<< HEAD
=======

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </div>;
            ))}
          </div>;
        </section>;
'
        <section className='space-y-4'>;'
          <h2 className='text-2xl font-semibold'>Governance</h2>;'
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>;'
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;'
              <div className='font-medium mb-1'>Core Stewards</div>;'
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Appointed via DAO ratification, accountable to publish roadmaps,;
                risk registers, and post-mortems.;
              </div>;
            </div>;'
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;'
              <div className='font-medium mb-1'>Delegated Voting</div>;'
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Nation/community DAOs receive delegated rights proportionally to;
                stake and contribution, with slashing/recall for inactivity or;
                misconduct.;
              </div>;
            </div>;'
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;'
              <div className='font-medium mb-1'>Quarterly Reports</div>;'
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Financials, grants, impact metrics, and execution status are;
                published within 30 days of quarter-end.;
              </div>;
            </div>;'
            <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;'
              <div className='font-medium mb-1'>Public Archives</div>;'
              <div className='text-sm text-gray-600 dark:text-gray-400'>;
                Charter versions, MOUs, audits, and on-chain dashboards are;
                publicly accessible and time-stamped.;
              </div>            </div>;
          </div>;
        </section>;
'
        <section className='space-y-2'>;'
          <h2 className='text-2xl font-semibold'>Operator Prompt</h2>;'
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
            Write a legal-neutral foundation charter for a decentralized AI;'
import Head from 'next / head';'
import Link from 'next / link';
              </div>))}
          </div>;
        </section>;'
        <section className='space - y-4'>;'
          <h2 className='text - 2xl font - semibold'>Governance</h2>;'
          <div className='grid grid - cols - 1 md: grid - cols - 2 gap - 4'>;'
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;'
              <div className='font - medium mb - 1'>Core Stewards</div>;'
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Appointed via DAO ratification, accountable to publish roadmaps,
                risk registers, and post - mortems.;
              </div>;
            </div>;'
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;'
              <div className='font - medium mb - 1'>Delegated Voting</div>;'
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Nation / community DAOs receive delegated rights proportionally to;
                stake and contribution, with slashing / recall for inactivity or;
                misconduct.;
              </div>;
            </div>;'
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;'
              <div className='font - medium mb - 1'>Quarterly Reports</div>;'
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Financials, grants, impact metrics, and execution status are;
                published within 30 days of quarter - end.;
              </div>;
            </div>;'
            <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;'
              <div className='font - medium mb - 1'>Public Archives</div>;'
              <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
                Charter versions, MOUs, audits, and on - chain dashboards are;
                publicly accessible and time - stamped.;
              </div>            </div>;
          </div>;
        </section>;'
        <section className='space - y-2'>;'
          <h2 className='text - 2xl font - semibold'>Operator Prompt</h2>;'
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
            Write a legal - neutral foundation charter for a decentralized AI;
            protocol committed to sovereignty, open knowledge, and trust.;
            Include DAO integration and multiverse grant rights.;
          </p>;'
          <Link href='/foundation#charter'>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <a className='underline text - sm'>Open Charter Generator</a>;
          </Link>;
        </section>;
      </div>;
    </>);
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.'
            }].map((opt) => ("
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">"
                <div className="font-medium">{opt.title}</div>"
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>


              </div>
<<<<<<< HEAD
            ))  } catch (error) {
=======
  } catch (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
=======
            ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
          </div>
        </section>

                risk registers, and post-mortems.
              </div>
"
        <section className="space-y-4">"
          <h2 className="text-2xl font-semibold">Governance</h2>"
          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">"
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">"
              <div className="font-medium mb-1">Core Stewards</div>"
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification, accountable to publish roadmaps, risk registers, and post-mortems.</div>


            </div>"
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">"
              <div className="font-medium mb-1">Delegated Voting</div>"
              <div className="text-sm text-gray-600 dark:text-gray-400">Nation/community DAOs receive delegated rights proportionally to stake and contribution, with slashing/recall for inactivity or misconduct.</div>
            </div>"
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">"
              <div className="font-medium mb-1">Quarterly Reports</div>"
              <div className="text-sm text-gray-600 dark:text-gray-400">Financials, grants, impact metrics, and execution status are published within 30 days of quarter-end.</div>
            </div>"
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">"
              <div className="font-medium mb-1">Public Archives</div>"
              <div className="text-sm text-gray-600 dark:text-gray-400">Charter versions, MOUs, audits, and on-chain dashboards are publicly accessible and time-stamped.</div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='space-y-2'>
=======
=======

<section className='space-y-2'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
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
    </>);
;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                risk registers, and post-mortems.
              </div>

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
