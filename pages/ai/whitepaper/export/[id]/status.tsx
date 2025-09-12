import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperStatus() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Status - AI Generated</title>
        <meta name="description" content="Status for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Whitepaper Status</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Current Status</h2>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">✅ Ready</p>
                <p className="text-green-700">Your whitepaper is ready for viewing and sharing.</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Generation Progress</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="ml-3">Content generated</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="ml-3">Formatting applied</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="ml-3">Quality check completed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="ml-3">Ready for export</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
              <div className="space-y-2">
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  View Whitepaper
                </button>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                  Export Whitepaper
                </button>
                <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
                  Share Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}