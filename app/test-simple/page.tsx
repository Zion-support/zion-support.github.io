'use client';


import React from 'react';
import Head from 'next/head';

const TestPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
        <meta name="description" content="Test page" />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold">Test Page</h1>
        <p>This is a simple test page.</p>
      </div>
    </>
  );
};

export default TestPage;