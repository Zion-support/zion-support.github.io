import React from 'react';
import Head from 'next/head';

export default function AiWhitepaper() {
  return (
    <>
      <Head>
        <title>AI Whitepaper Generator</title>
        <meta name="description" content="Generate whitepapers using AI" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AI Whitepaper Generator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Generate Whitepaper</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Topic</label>
                <input
                  type="text"
                  placeholder="Enter whitepaper topic..."
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Length</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Short (2-3 pages)</option>
                  <option>Medium (5-7 pages)</option>
                  <option>Long (10+ pages)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <select className="w-full border rounded-lg px-3 py-2">
                    <option>Technical</option>
                    <option>Business</option>
                    <option>General</option>
                  </select>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                Generate Whitepaper
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Whitepaper</h2>
            <div className="h-96 border rounded-lg p-4 overflow-y-auto">
              <p className="text-gray-600">Generated whitepaper will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}