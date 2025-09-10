import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperDownload() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Download Whitepaper - AI Generated</title>
        <meta name="description" content="Download AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Download Whitepaper</h1>
          <div className="space-y-4">
            <p className="text-gray-600">Preparing your whitepaper for download...</p>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-sm text-gray-500">This page would handle the actual download process for whitepaper ID: {id}</p>
          </div>
        </div>
      </div>
    </>
  );
}