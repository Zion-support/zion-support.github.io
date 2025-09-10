import React from 'react';
import Head from 'next/head';

export default function ContractAI() {
  return (
    <>
      <Head>
        <title>Contract AI - Zion Tech Group</title>
        <meta name="description" content="AI-powered contract analysis and management solutions" />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contract AI</h1>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Contract Management</h2>
          <p className="text-gray-600 mb-6">
            Automated contract analysis, review, and management powered by artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Contract Analysis</h3>
              <p className="text-gray-600">AI-driven contract review and risk assessment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Automated Management</h3>
              <p className="text-gray-600">Streamlined contract lifecycle management</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}