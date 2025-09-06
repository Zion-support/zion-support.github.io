import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const MarketSignals: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Market Signals Agent</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name='description' content='Daily curated AI market signals.' />
=======
        <meta name="description" content="Daily curated AI market signals." />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">AI Market Signals Agent</h1>
        <p>Runs daily to curate relevant AI/tech market signals and trends and stores them in the repository.</p>
        <div className="space-y-2">
          <Link href="/data/reports/market-signals/latest.json"><a className="text-blue-600 underline">Latest Report (JSON)</a></Link>
        </div>
      </main>
    </div>
  )
};

<<<<<<< HEAD
export default MarketSignals;
=======
        <meta name="description" content="Daily curated AI market signals." />
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">AI Market Signals Agent</h1>
        <p>Runs daily to curate relevant AI/tech market signals and trends and stores them in the repository.</p>
        <div className="space-y-2">
          <Link href="/data/reports/market-signals/latest.json"><a className="text-blue-600 underline">Latest Report (JSON)</a></Link>
        </div>
      </main>
    </div>
  )
};

export default MarketSignals;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default MarketSignals;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
