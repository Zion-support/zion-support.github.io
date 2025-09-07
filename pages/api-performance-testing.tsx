import React from 'react';
import Head from 'next/head';

export default function ApiPerformanceTesting() {
  return (
    <>
      <Head>
        <title>api-performance-testing | Zion Tech Group</title>
        <meta name="description" content="api-performance-testing page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              api-performance-testing
            </h1>
            <p className="text-xl text-gray-600">
              This is the api-performance-testing page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}