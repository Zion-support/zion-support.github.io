import type { NextPage } from 'next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const [slug]: NextPage = () => {
  return (
    <div>
      <Head>
        <title>[slug] - Zion Tech Solutions</title>
        <meta name="description" content="[slug] blog post" />
      </Head>
      
      <main>
        <h1>[slug]</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default [slug];