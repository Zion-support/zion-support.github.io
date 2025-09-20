import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Holdings</title>
        <meta name="description" content="Zion Holdings - Leading technology solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Zion Holdings</h1>
        <p>Leading technology solutions for the modern world.</p>
      </main>
    </div>
  );
}