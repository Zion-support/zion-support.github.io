import React from 'react';
import Head from 'next/head';

export default function WebinarsPage() {
  return (
    <>
      <Head>
        <title>Webinars | Zion Tech Group</title>
        <meta name="description" content="Live and on-demand webinars from Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Webinars</h1>
          <p className="text-gray-300 mb-8 max-w-2xl">Explore our upcoming and past webinars covering AI, automation, cloud, and quantum security.</p>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <p className="text-gray-300">Webinars coming soon!</p>
          </div>
        </div>
      </main>
    </>
  );
}
