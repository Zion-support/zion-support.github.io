import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperAnalytics() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Analytics - AI Generated</title>
        <meta name="description" content="Analytics for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Whitepaper Analytics</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Total Views</h2>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Downloads</h2>
              <p className="text-3xl font-bold text-green-600">456</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Shares</h2>
              <p className="text-3xl font-bold text-yellow-600">78</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Avg. Time</h2>
              <p className="text-3xl font-bold text-purple-600">4.2m</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}