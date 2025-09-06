import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Technology Solutions</title>
        <meta name="description" content="Leading technology solutions provider" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading technology solutions provider delivering innovative services
              to transform your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}