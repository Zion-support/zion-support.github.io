import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperShare() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Share Whitepaper - AI Generated</title>
        <meta name="description" content="Share AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Share Whitepaper</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Share Link</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={`${window.location.origin}/ai/whitepaper/preview/${id}`}
                  readOnly
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Copy
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Social Media</label>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Twitter
                </button>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-lg">
                  LinkedIn
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}