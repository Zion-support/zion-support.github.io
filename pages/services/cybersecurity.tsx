import type { NextPage } from 'next';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/backup-main-20250918-004015

const Cybersecurity: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cybersecurity - Zion Tech Solutions</title>
        <meta name="description" content="Cybersecurity service" />
      </Head>
      
      <main>
        <h1>Cybersecurity</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default Cybersecurity;
=======
export default Cybersecurity;
>>>>>>> origin/backup-main-20250918-004015
