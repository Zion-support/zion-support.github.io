import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ReleaseNotesAgent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Release Notes Agent</title>
        <meta name=&quot;description&quot; content=&quot;Daily AI-generated release notes.&quot; />
      </Head>
      <main className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>AI Release Notes Agent</h1>
        <p>Summarizes the last 24 hours of commits into human-friendly release notes.</p>
        <Link href=&quot;/data/reports/release/latest.json&quot;><a className=&quot;text-blue-600 underline&quot;>Latest Release Notes (JSON)</Link></Link>
      </main>
    </div>
  );
};

export default ReleaseNotesAgent;