import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Cloud: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cloud - Zion Tech Solutions</title>
        <meta name="description" content="Cloud service" />
      </Head>
      
      <main>
        <h1>Cloud</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default Cloud;