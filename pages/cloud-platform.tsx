import React from 'react';
import Head from 'next/head';

export default function CloudPlatform() {
  return (
    <>
      <Head>
        <title>cloud-platform | Zion Tech Group</title>
        <meta name="description" content="cloud-platform page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              cloud-platform
            </h1>
            <p className="text-xl text-gray-600">
              This is the cloud-platform page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}