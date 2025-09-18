import type { NextPage } from 'next';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/backup-main-20250918-004015

const [id]: NextPage = () => {
  return (
    <div>
      <Head>
        <title>[id] - Zion Tech Solutions</title>
        <meta name="description" content="[id] service" />
      </Head>
      
      <main>
        <h1>[id]</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default [id];