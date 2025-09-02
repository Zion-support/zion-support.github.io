import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading technology solutions provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
