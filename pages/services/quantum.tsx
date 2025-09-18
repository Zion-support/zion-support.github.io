import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Quantum: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quantum - Zion Tech Solutions</title>
        <meta name="description" content="Quantum service" />
      </Head>
      
      <main>
        <h1>Quantum</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default Quantum;
