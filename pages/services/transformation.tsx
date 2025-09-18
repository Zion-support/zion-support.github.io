import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Transformation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Transformation - Zion Tech Solutions</title>
        <meta name="description" content="Transformation service" />
      </Head>
      
      <main>
        <h1>Transformation</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default Transformation;
