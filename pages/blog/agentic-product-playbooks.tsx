import type { NextPage } from 'next';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Head from 'next/head';
import Link from 'next/link';
>>>>>>> origin/backup-main-20250918-004015

const AgenticProductPlaybooks: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AgenticProductPlaybooks - Zion Tech Solutions</title>
        <meta name="description" content="AgenticProductPlaybooks blog post" />
      </Head>
      
      <main>
        <h1>AgenticProductPlaybooks</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default AgenticProductPlaybooks;
=======
export default AgenticProductPlaybooks;
>>>>>>> origin/backup-main-20250918-004015
