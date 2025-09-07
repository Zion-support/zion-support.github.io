import React from 'react';
import Head from 'next/head';

export default function ApiDocumentation() {
  return (
    <>
      <Head>
        <title>api-documentation | Zion Tech Group</title>
        <meta name="description" content="api-documentation page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              api-documentation
            </h1>
            <p className="text-xl text-gray-600">
              This is the api-documentation page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}