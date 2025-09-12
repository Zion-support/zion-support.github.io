import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperSocial() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Share on Social Media - AI Generated</title>
        <meta name="description" content="Share AI generated whitepaper on social media" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Share on Social Media</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Social Media Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700">
                  <div className="text-2xl mb-2">🐦</div>
                  <div>Twitter</div>
                </button>
                <button className="bg-blue-800 text-white p-4 rounded-lg hover:bg-blue-900">
                  <div className="text-2xl mb-2">💼</div>
                  <div>LinkedIn</div>
                </button>
                <button className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-900">
                  <div className="text-2xl mb-2">🐙</div>
                  <div>GitHub</div>
                </button>
                <button className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700">
                  <div className="text-2xl mb-2">📺</div>
                  <div>YouTube</div>
                </button>
                <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700">
                  <div className="text-2xl mb-2">📘</div>
                  <div>Facebook</div>
                </button>
                <button className="bg-pink-600 text-white p-4 rounded-lg hover:bg-pink-700">
                  <div className="text-2xl mb-2">📷</div>
                  <div>Instagram</div>
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Custom Message</h2>
              <textarea
                rows={4}
                placeholder="Enter your custom message for social media..."
                className="w-full border rounded-lg px-3 py-2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}