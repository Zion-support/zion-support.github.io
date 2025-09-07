import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Summit() {
  return (
    <Layout>
      <Head>
        <title>Summit | Zion Tech Group</title>
        <meta name="description" content="Technology summit and conference" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Summit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            This is a placeholder page for the summit.
          </p>
        </div>
      </div>
    </Layout>
  );
}