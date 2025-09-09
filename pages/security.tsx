import React from 'react';
import Head from 'next/head';

export default function Security() {
  return (
    <>
      <Head>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Security overview and practices at Zion Tech Group" />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Security</h1>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Security Overview</h2>
            <p className="text-gray-300 mb-6">
              At Zion Tech Group, security is at the core of everything we do. Our systems are built with 
              security-first principles, implementing multiple layers of protection to ensure your data and infrastructure 
              remain secure at all times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-2">End-to-End Encryption</h3>
                <p className="text-white/70 text-sm">All data is encrypted in transit and at rest</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
                <p className="text-white/70 text-sm">Continuous threat detection</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✅</div>
                <h3 className="text-xl font-semibold text-white mb-2">Compliance Ready</h3>
                <p className="text-white/70 text-sm">Meets industry security standards</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}