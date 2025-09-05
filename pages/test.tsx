import Head from "next/head";
import React from 'react';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page - ZION TECH GROUP</title>
        <meta name="description" content="Test page for ZION TECH GROUP" />
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </>
  );
}