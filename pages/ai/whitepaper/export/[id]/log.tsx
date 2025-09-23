import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperLog() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Log - AI Generated</title>
        <meta name="description" content="Log for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Whitepaper Log</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">System Logs</h2>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>2024-01-15 10:30:15 [INFO] Whitepaper generation started</div>
                <div>2024-01-15 10:30:16 [INFO] AI model loaded successfully</div>
                <div>2024-01-15 10:30:17 [INFO] Content generation in progress</div>
                <div>2024-01-15 10:30:45 [INFO] Content generation completed</div>
                <div>2024-01-15 10:30:46 [INFO] Formatting applied</div>
                <div>2024-01-15 10:30:47 [INFO] Quality check started</div>
                <div>2024-01-15 10:30:50 [INFO] Quality check completed</div>
                <div>2024-01-15 10:30:51 [INFO] Whitepaper ready for export</div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Error Logs</h2>
              <div className="bg-gray-900 text-red-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div>2024-01-15 10:30:15 [ERROR] No errors detected</div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Generation Time:</span>
                  <span className="font-mono">30.2s</span>
                </div>
                <div className="flex justify-between">
                  <span>Content Length:</span>
                  <span className="font-mono">2,456 words</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality Score:</span>
                  <span className="font-mono">94.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Memory Usage:</span>
                  <span className="font-mono">128MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}