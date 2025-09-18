import type { NextPage } from 'next';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/backup-main-20250918-004015

const AiMl: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AiMl - Zion Tech Solutions</title>
        <meta name="description" content="AiMl service" />
      </Head>
      
      <main>
        <h1>AiMl</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default AiMl;
=======
export default AiMl;
>>>>>>> origin/backup-main-20250918-004015
