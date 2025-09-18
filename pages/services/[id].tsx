import type { NextPage } from 'next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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