import React from 'react';
import Head from 'next/head';

export default function EmailDmarcAnalyzer() {
  return (
    <>
      <Head>
        <title>email-dmarc-analyzer | Zion Tech Group</title>
        <meta name="description" content="email-dmarc-analyzer page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              email-dmarc-analyzer
            </h1>
            <p className="text-xl text-gray-600">
              This is the email-dmarc-analyzer page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}