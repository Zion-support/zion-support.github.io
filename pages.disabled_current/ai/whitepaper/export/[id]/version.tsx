import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperVersion() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Version History - AI Generated</title>
        <meta name="description" content="Version history for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Version History</h1>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Version 1.2</h3>
                  <p className="text-gray-600">Updated content and formatting</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">View</button>
                  <button className="text-green-500 hover:text-green-700">Restore</button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Version 1.1</h3>
                  <p className="text-gray-600">Fixed typos and improved readability</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">View</button>
                  <button className="text-green-500 hover:text-green-700">Restore</button>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Version 1.0</h3>
                  <p className="text-gray-600">Initial version</p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">View</button>
                  <button className="text-green-500 hover:text-green-700">Restore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}