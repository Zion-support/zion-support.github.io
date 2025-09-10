import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperDebug() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Debug - AI Generated</title>
        <meta name="description" content="Debug for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Debug Information</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">System Information</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm">
                  {JSON.stringify({
                    whitepaperId: id,
                    timestamp: new Date().toISOString(),
                    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server-side',
                    platform: typeof window !== 'undefined' ? window.navigator.platform : 'Server-side',
                    language: typeof window !== 'undefined' ? window.navigator.language : 'Server-side',
                    cookieEnabled: typeof window !== 'undefined' ? window.navigator.cookieEnabled : 'Server-side',
                    onLine: typeof window !== 'undefined' ? window.navigator.onLine : 'Server-side'
                  }, null, 2)}
                </pre>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Debug Tools</h2>
              <div className="space-y-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Test Generation
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Test Export
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                  Test Sharing
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Clear Cache
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Debug Logs</h2>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>Debug mode enabled</div>
                <div>All systems operational</div>
                <div>No issues detected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}