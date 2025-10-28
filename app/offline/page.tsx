'use client';

import React from 'react';
import Head from 'next/head';

export default function OfflinePage() {
  return (
    <>
      <Head>
        <title>Offline | Zion Tech Group</title>
        <meta name="description" content="You are currently offline" />
        <meta name="keywords" content="offline, no internet" />
        <meta property="og:title" content="Offline | Zion Tech Group" />
        <meta property="og:description" content="You are currently offline" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            You're offline
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Please check your internet connection and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}
