import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading technology solutions provider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Zion Tech Group</h1>
        <p>Leading technology solutions provider</p>
      </main>
    </div>
  );
}