import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to build autonomous innovation systems and advanced technology solutions." />
      </Head>
      <main className="min-h-screen bg-black text-white p-8">
        <h1>About Zion Tech Group</h1>
        <p>Building autonomous innovation systems and advanced technology solutions.</p>
      </main>
    </>
  );
};

export default About;
