import React from 'react';
import Head from 'next/head';

export default function AiTranslate() {
  return (
    <>
      <Head>
        <title>AI Translator</title>
        <meta name="description" content="Translate text using AI" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AI Translator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Source Text</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">From Language</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">To Language</label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Spanish</option>
                  <option>English</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Text to Translate</label>
                <textarea
                  rows={6}
                  placeholder="Enter text to translate..."
                  className="w-full border rounded-lg px-3 py-2"
                ></textarea>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
                Translate
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Translation</h2>
            <div className="h-64 border rounded-lg p-4 overflow-y-auto">
              <p className="text-gray-600">Translation will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}