import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperPreview() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Whitepaper Preview - AI Generated</title>
        <meta name="description" content="Preview AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="mb-6">
            <button
              onClick={() => router.back()}
              className="text-blue-500 hover:text-blue-700"
            >
              ← Back
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-6">Whitepaper Preview</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">Whitepaper content for ID: {id}</p>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p>This is a preview of the AI-generated whitepaper. The full content would be loaded here based on the ID parameter.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}