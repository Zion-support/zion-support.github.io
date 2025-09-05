import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function ApiDocs() {
  return (
    <Layout>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Documentation</h1>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive API documentation for our services will be available soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}