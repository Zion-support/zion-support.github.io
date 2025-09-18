import type { NextPage } from 'next';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/backup-main-20250918-004015

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

<<<<<<< HEAD
export default Transformation;
=======
export default Transformation;
>>>>>>> origin/backup-main-20250918-004015
