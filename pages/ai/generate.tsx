import React from 'react';
import Head from 'next/head';

export default function AiGenerate() {
  return (
    <>
      <Head>
        <title>AI Content Generator</title>
        <meta name="description" content="Generate content using AI" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AI Content Generator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Generate Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Content Type</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Blog Post</option>
                  <option>Social Media</option>
                  <option>Email</option>
                  <option>Product Description</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Topic</label>
                <input
                  type="text"
                  placeholder="Enter topic..."
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                Generate Content
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Content</h2>
            <div className="h-64 border rounded-lg p-4 overflow-y-auto">
              <p className="text-gray-600">Generated content will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}