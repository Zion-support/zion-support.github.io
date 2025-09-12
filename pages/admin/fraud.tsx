import React from 'react';
import Head from 'next/head';

export default function FraudMonitoring() {
  return (
    <>
      <Head>
        <title>Fraud Monitoring - Admin</title>
        <meta name="description" content="Monitor fraud detection and prevention" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Fraud Monitoring</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium">Suspicious Activity Detected</p>
              <p className="text-gray-600">High-risk transaction pattern identified</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="font-medium">Unusual Login Pattern</p>
              <p className="text-gray-600">Multiple failed login attempts</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}