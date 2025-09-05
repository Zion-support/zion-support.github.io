import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Api() {
  return (
    <Layout>
      <Head>
        <title>API - Zion Tech Group</title>
        <meta name="description" content="API services and documentation" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our API services are coming soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}