import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperApi() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>API Access - AI Generated</title>
        <meta name="description" content="API access for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">API Access</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">API Endpoints</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">GET Whitepaper</h3>
                  <code className="text-sm bg-gray-100 p-2 rounded block">
                    GET /api/whitepaper/{id}
                  </code>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">GET Whitepaper Content</h3>
                  <code className="text-sm bg-gray-100 p-2 rounded block">
                    GET /api/whitepaper/{id}/content
                  </code>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">GET Whitepaper Metadata</h3>
                  <code className="text-sm bg-gray-100 p-2 rounded block">
                    GET /api/whitepaper/{id}/metadata
                  </code>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">API Key</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value="your-api-key-here"
                  readOnly
                  className="flex-1 border rounded-lg px-3 py-2 font-mono text-sm"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}