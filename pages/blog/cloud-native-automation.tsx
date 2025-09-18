import type { NextPage } from 'next';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/backup-main-20250918-004015

const CloudNativeAutomation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CloudNativeAutomation - Zion Tech Solutions</title>
        <meta name="description" content="CloudNativeAutomation blog post" />
      </Head>
      
      <main>
        <h1>CloudNativeAutomation</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default CloudNativeAutomation;
=======
export default CloudNativeAutomation;
>>>>>>> origin/backup-main-20250918-004015
