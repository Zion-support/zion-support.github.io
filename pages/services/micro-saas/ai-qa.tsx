import React from 'react';
import Head from 'next/head';

export default function AIQACopilot() {
  return (
    <>
      <Head>
        <title>AI QA Copilot - Zion Tech Group</title>
        <meta name="description" content="AI-powered QA testing and quality assurance solutions" />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">AI QA Copilot</h1>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Quality Assurance</h2>
          <p className="text-gray-600 mb-6">
            Automated testing and quality assurance powered by artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Automated Testing</h3>
              <p className="text-gray-600">AI-driven test case generation and execution</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Continuous quality monitoring and improvement</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}