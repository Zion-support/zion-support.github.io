import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function support() {
  return (
    <Layout>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Support solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>
          <p className="text-lg text-gray-600">
            Professional support solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}