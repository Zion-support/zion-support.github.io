import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const ReleaseNotesAgent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Release Notes Agent</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name='description' content='Daily AI-generated release notes.' />
=======
        <meta name="description" content="Daily AI-generated release notes." />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">AI Release Notes Agent</h1>
        <p>Summarizes the last 24 hours of commits into human-friendly release notes.</p>
        <Link href="/data/reports/release/latest.json"><a className="text-blue-600 underline">Latest Release Notes (JSON)</a></Link>
      </main>
    </div>
  )
};

<<<<<<< HEAD
export default ReleaseNotesAgent;
=======
        <meta name="description" content="Daily AI-generated release notes." />
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">AI Release Notes Agent</h1>
        <p>Summarizes the last 24 hours of commits into human-friendly release notes.</p>
        <Link href="/data/reports/release/latest.json"><a className="text-blue-600 underline">Latest Release Notes (JSON)</a></Link>
      </main>
    </div>
  )
};

export default ReleaseNotesAgent;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default ReleaseNotesAgent;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
