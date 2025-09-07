import React from 'react';
import Head from 'next/head';

export default function EmailDeliverabilityMonitor() {
  return (
    <>
      <Head>
        <title>email-deliverability-monitor | Zion Tech Group</title>
        <meta name="description" content="email-deliverability-monitor page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              email-deliverability-monitor
            </h1>
            <p className="text-xl text-gray-600">
              This is the email-deliverability-monitor page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}