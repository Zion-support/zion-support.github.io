import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function featureflagsedge() {
  return (
    <Layout>
      <Head>
        <title>Feature Flags Edge - Zion Tech Group</title>
        <meta name="description" content="Feature Flags Edge solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Feature Flags Edge</h1>
          <p className="text-lg text-gray-600">
            Professional feature flags edge solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}