import React from 'react';
import Head from 'next/head';

export default function PitchGenerator() {
  return (
    <>
      <Head>
        <title>pitch-generator | Zion Tech Group</title>
        <meta name="description" content="pitch-generator page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              pitch-generator
            </h1>
            <p className="text-xl text-gray-600">
              This is the pitch-generator page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}