import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function TalentPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Talent Profile | Zion Tech Group</title>
        <meta name="description" content="Talent profile page" />
      </Head>
      <main className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Talent Profile: {id}</h1>
          <p className="text-gray-300">This talent profile page is under construction.</p>
        </div>
      </main>
    </>
  );
}
