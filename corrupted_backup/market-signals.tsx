<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const MarketSignals: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Market Signals Agent</title>
        <meta name='description' content='Daily curated AI market signals.' />
      </Head>
      <main className='space-y-4'>
        <h1 className='text-2xl font-bold'>AI Market Signals Agent</h1>
        <p>
          Runs daily to curate relevant AI/tech market signals and trends and
          stores them in the repository.
        </p>
        <div className='space-y-2'>
          <Link href='/data/reports/market-signals/latest.json'>
            <a className='text-blue-600 underline'>Latest Report (JSON)</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MarketSignals;
=======
 <div> <Head> <title>AI Market Signals Agent</title> <meta name="description" content="Daily curated AI market signals." /> </Head> <main className="space-y-4" > <h1 className="text-2xl font-bold" >AI Market Signals Agent</h1> <p>Runs daily to curate relevant AI/tech market signals and trends and stores them in the repository.</p> <div className="space-y-2" > <Link href="/data/reports/market-signals/latest.json" ><a className="text-blue-600 underline" >Latest Report (JSON) </Link></Link> </div> </main> </div> export default MarketSignals;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
