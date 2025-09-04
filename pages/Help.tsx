import React from 'react';
import Head from 'next/head';

export default function Help() {
  return (
    <>
      <Head>
        <title>Help | Zion Tech Group</title>
        <meta name="description" content="Get help and support from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Help & Support</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Need assistance? Contact our support team.
          </p>
          <div className="text-center">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}