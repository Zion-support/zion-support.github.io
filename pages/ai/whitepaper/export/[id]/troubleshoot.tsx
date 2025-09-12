import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperTroubleshoot() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Troubleshooting - AI Generated</title>
        <meta name="description" content="Troubleshooting for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Troubleshooting</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Common Issues</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Whitepaper not generating</h3>
                  <p className="text-gray-600">If your whitepaper is not generating, check your internet connection and try refreshing the page.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">Try Solution</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Export not working</h3>
                  <p className="text-gray-600">If export is not working, ensure you have the latest version of your browser and try again.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">Try Solution</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Collaboration issues</h3>
                  <p className="text-gray-600">If you're having trouble with collaboration, check that all users have the correct permissions.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">Try Solution</button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Still need help?</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Contact Support</h3>
                  <p className="text-gray-600">If you're still experiencing issues, contact our support team for assistance.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">Contact Us</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Report a Bug</h3>
                  <p className="text-gray-600">Found a bug? Report it to help us improve the platform.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">Report Bug</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}