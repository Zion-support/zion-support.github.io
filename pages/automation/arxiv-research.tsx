import React from 'react';
import Head from 'next/head';

export default function ArxivResearch() {
  return (
    <>
      <Head>
        <title>arxiv-research | Zion Tech Group</title>
        <meta name="description" content="arxiv-research page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              arxiv-research
            </h1>
            <p className="text-xl text-gray-600">
              This is the arxiv-research page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}