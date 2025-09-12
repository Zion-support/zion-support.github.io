import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperActivity() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Activity - AI Generated</title>
        <meta name="description" content="Activity for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Whitepaper Activity</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">U</div>
                  <div className="flex-1">
                    <p className="font-medium">User viewed whitepaper</p>
                    <p className="text-sm text-gray-600">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">E</div>
                  <div className="flex-1">
                    <p className="font-medium">Export completed</p>
                    <p className="text-sm text-gray-600">5 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">S</div>
                  <div className="flex-1">
                    <p className="font-medium">Whitepaper shared</p>
                    <p className="text-sm text-gray-600">10 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">C</div>
                  <div className="flex-1">
                    <p className="font-medium">Comment added</p>
                    <p className="text-sm text-gray-600">15 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">24</p>
                  <p className="text-gray-600">Total Views</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">8</p>
                  <p className="text-gray-600">Exports</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">3</p>
                  <p className="text-gray-600">Shares</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}