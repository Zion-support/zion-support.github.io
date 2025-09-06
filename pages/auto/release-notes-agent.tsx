import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ReleaseNotesAgent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Release Notes Agent</title>
        <meta name="description" content="Daily AI-generated release notes." />
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">AI Release Notes Agent</h1>
        <p>Summarizes the last 24 hours of commits into human-friendly release notes.</p>
<<<<<<< HEAD
        <Link href="/data/reports/release/latest.json"><a className="text-blue-600 underline">Latest Release Notes (JSON)</a></Link>
=======
        <Link href="/data/reports/release/latest.json"><a className="text-blue-600 underline">Latest Release Notes (JSON)</Link></Link>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      </main>
    </div>
  )
},
<<<<<<< HEAD

export default ReleaseNotesAgent,;
=======
export default ReleaseNotesAgent,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
