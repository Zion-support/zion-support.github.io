import type { NextPage } from 'next';
<<<<<<< HEAD
const [id]: NextPage = () => {,
  return (,
    <div>,
      <Head>,
        <title>[id] - Zion Tech Solutions</title>,
        <meta name="description" content="[id] blog post" />,
      </Head>,
      <main>,
        <h1>[id]</h1>,
        <p>Blog content coming soon...</p>,
        <Link href="/blog">Back to Blog</Link>,
      </main>,
    </div>,
  );
};
=======
import Head from 'next/head';
import Link from 'next/link';

const [id]: NextPage = () => {
  return (
    <div>
      <Head>
        <title>[id] - Zion Tech Solutions</title>
        <meta name="description" content="[id] blog post" />
      </Head>
      
      <main>
        <h1>[id]</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default [id];
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
