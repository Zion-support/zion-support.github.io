import React from 'react';
import Head from 'next/head';

export default function Test() {
  return (
    <>
      <Head>
        <title>Test Page - Zion Tech Group</title>
        <meta name="description" content="Test page for build verification" />
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Test Page
          </h1>
          <p className="text-gray-600">
            This is a test page to verify the build is working.
          </p>
        </div>
      </div>
    </>
  );
}