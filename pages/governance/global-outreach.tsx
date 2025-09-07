import React from 'react';
import Head from 'next/head';

export default function GlobalOutreach() {
  return (
    <>
      <Head>
        <title>Global Outreach | Zion Tech Group</title>
        <meta name="description" content="Global outreach governance page" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Global Outreach</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            This is a placeholder page for global outreach governance.
          </p>
        </div>
      </div>
    </>
  );
}