<<<<<<< HEAD
import Head from 'next/head';
export default function Pm2RedundancyRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0, url=/README_PM2_REDUNDANCY_COMPLETE.md" />
      </Head>
      <main style={{ padding: 24}}>
        <p>Redirecting to PM2 Redundancy docs…</p>
      </main>
    </>
  )
}

=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function pm2redundancy() {
  return (
    <Layout>
      <Head>
        <title>Pm2 Redundancy - Zion Tech Group</title>
        <meta name="description" content="Pm2 Redundancy solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pm2 Redundancy</h1>
          <p className="text-lg text-gray-600">
            Professional pm2 redundancy solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
