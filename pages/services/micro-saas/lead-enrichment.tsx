import React from 'react';
import Head from 'next/head';

export default function LeadEnrichment() {
  return (
    <>
      <Head>
        <title>Lead Enrichment - Zion Tech Group</title>
        <meta name="description" content="AI-powered lead enrichment and data enhancement solutions" />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Lead Enrichment</h1>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Lead Enrichment</h2>
          <p className="text-gray-600 mb-6">
            Automated lead data enrichment and enhancement powered by artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Data Enhancement</h3>
              <p className="text-gray-600">AI-driven lead data enrichment and validation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Lead Scoring</h3>
              <p className="text-gray-600">Intelligent lead scoring and prioritization</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}