import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperHelp() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Help - AI Generated</title>
        <meta name="description" content="Help for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Help Center</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Creating Your First Whitepaper</h3>
                  <p className="text-gray-600">Learn how to create your first AI-generated whitepaper with our step-by-step guide.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">Read Guide</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Understanding AI Features</h3>
                  <p className="text-gray-600">Discover all the AI-powered features available for creating professional whitepapers.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">Learn More</button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Advanced Features</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Customization Options</h3>
                  <p className="text-gray-600">Explore advanced customization options to make your whitepaper unique.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">View Options</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Export and Sharing</h3>
                  <p className="text-gray-600">Learn about all the ways you can export and share your whitepaper.</p>
                  <button className="text-blue-500 hover:text-blue-700 mt-2">See Methods</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}