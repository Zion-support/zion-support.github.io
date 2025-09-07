import React from 'react';
import Head from 'next/head';

export default function Summit() {
  return (
    <>
      <Head>
        <title>summit | Zion Tech Group</title>
        <meta name="description" content="summit page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              summit
            </h1>
            <p className="text-xl text-gray-600">
              This is the summit page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}