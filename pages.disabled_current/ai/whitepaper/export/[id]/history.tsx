import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperHistory() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>History - AI Generated</title>
        <meta name="description" content="History for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Whitepaper History</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Activity Timeline</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Whitepaper generated</p>
                      <p className="text-gray-600">AI successfully created the whitepaper content</p>
                    </div>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Formatting applied</p>
                      <p className="text-gray-600">Content was formatted and styled</p>
                    </div>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Quality check completed</p>
                      <p className="text-gray-600">Content quality was verified</p>
                    </div>
                    <p className="text-sm text-gray-500">1 hour ago</p>
                  </div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">Ready for export</p>
                      <p className="text-gray-600">Whitepaper is ready for download and sharing</p>
                    </div>
                    <p className="text-sm text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Export History</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">PDF Export</p>
                    <p className="text-sm text-gray-600">Downloaded 2 hours ago</p>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700">Download Again</button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Word Export</p>
                    <p className="text-sm text-gray-600">Downloaded 1 hour ago</p>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700">Download Again</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}