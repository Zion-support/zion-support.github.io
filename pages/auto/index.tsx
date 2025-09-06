import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const AutoIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Autonomous Cloud Agents - Zion</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content='Autonomous agents that run in the cloud, no human needed.'
        />
=======
        <meta name="description" content="Autonomous agents that run in the cloud, no human needed." />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>
      <main className="space-y-6">
        <h1 className="text-2xl font-bold">Autonomous Cloud Agents</h1>
        <p className="text-gray-600">These agents run on schedules in the cloud and sync results back to the repository automatically.</p>
        <ul className="grid md: grid-cols-2 gap-4">
          <li className="border rounded p-4">
            <h2 className="font-semibold text-lg"><Link href="/auto/language-sync">Global Language Sync Agent</Link></h2>
            <p className="text-sm text-gray-600">Backfills missing translations using AI and keeps locale files up to date.</p>
          </li>
          <li className="border rounded p-4">
            <h2 className="font-semibold text-lg"><Link href="/auto/market-signals">AI Market Signals Agent</Link></h2>
            <p className="text-sm text-gray-600">Collects relevant AI/tech signals and saves curated insights daily.</p>
          </li>
<<<<<<< HEAD
          <li className='border rounded p-4'>
            <h2 className='font-semibold text-lg'>
              <Link href='/auto/seo-audit'>Autonomous SEO Auditor</Link>
            </h2>
            <p className='text-sm text-gray-600'>
              Scans pages for SEO gaps and commits a report for fixes.
            </p>
=======
        <meta name="description" content="Autonomous agents that run in the cloud, no human needed." />
      </Head>
      <main className="space-y-6">
        <h1 className="text-2xl font-bold">Autonomous Cloud Agents</h1>
        <p className="text-gray-600">These agents run on schedules in the cloud and sync results back to the repository automatically.</p>
        <ul className="grid md: grid-cols-2 gap-4">
          <li className="border rounded p-4">
            <h2 className="font-semibold text-lg"><Link href="/auto/language-sync">Global Language Sync Agent</Link></h2>
            <p className="text-sm text-gray-600">Backfills missing translations using AI and keeps locale files up to date.</p>
          </li>
          <li className="border rounded p-4">
            <h2 className="font-semibold text-lg"><Link href="/auto/market-signals">AI Market Signals Agent</Link></h2>
            <p className="text-sm text-gray-600">Collects relevant AI/tech signals and saves curated insights daily.</p>
          </li>
          <li className="border rounded p-4">
            <h2 className="font-semibold text-lg"><Link href="/auto/seo-audit">Autonomous SEO Auditor</Link></h2>
            <p className="text-sm text-gray-600">Scans pages for SEO gaps and commits a report for fixes.</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <li className="border rounded p-4">
            <h2 className="font-semibold text-lg"><Link href="/auto/seo-audit">Autonomous SEO Auditor</Link></h2>
            <p className="text-sm text-gray-600">Scans pages for SEO gaps and commits a report for fixes.</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </li>
        </ul>
      </main>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default AutoIndex;
=======
  )
};

export default AutoIndex;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default AutoIndex;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
