import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Analytics: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Analytics - Zion Tech Solutions</title>
        <meta name="description" content="Analytics service" />
      </Head>
      
      <main>
        <h1>Analytics</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default Analytics;
