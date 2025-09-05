import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Technology Solutions" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Zion Tech Group</h1>
          <p className="mt-4 text-lg text-gray-600">Technology Solutions Provider</p>
        </div>
      </div>
    </>
  );
}