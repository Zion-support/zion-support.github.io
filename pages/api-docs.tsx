import React from 'react';
import Head from 'next/head';

export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="API documentation and reference" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">API Documentation</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </>
  );
}