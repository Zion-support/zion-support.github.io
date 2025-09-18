import type { NextPage } from 'next';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/backup-main-20250918-004015

const [slug]: NextPage = () => {
  return (
    <div>
      <Head>
        <title>[slug] - Zion Tech Solutions</title>
        <meta name="description" content="[slug] service" />
      </Head>
      
      <main>
        <h1>[slug]</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default [slug];