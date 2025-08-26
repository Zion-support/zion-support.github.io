import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Service | Zion Tech Group</title>
        <meta name="description" content="Service details" />
      </Head>
      <main className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Service: {slug}</h1>
          <p className="text-gray-300">This service page is under construction.</p>
        </div>
      </main>
    </>
  );
}
