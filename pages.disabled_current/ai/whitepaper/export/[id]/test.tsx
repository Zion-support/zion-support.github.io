import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperTest() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Test - AI Generated</title>
        <meta name="description" content="Test for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Test Whitepaper</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Test Scenarios</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Content Generation Test</h3>
                  <p className="text-gray-600">Test the AI content generation functionality</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-2">
                    Run Test
                  </button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Export Test</h3>
                  <p className="text-gray-600">Test all export formats and functionality</p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mt-2">
                    Run Test
                  </button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Sharing Test</h3>
                  <p className="text-gray-600">Test sharing and collaboration features</p>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 mt-2">
                    Run Test
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Test Results</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>Content Generation</span>
                  <span className="text-green-600">✅ Passed</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>Export Functionality</span>
                  <span className="text-green-600">✅ Passed</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>Sharing Features</span>
                  <span className="text-green-600">✅ Passed</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span>Performance</span>
                  <span className="text-green-600">✅ Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}