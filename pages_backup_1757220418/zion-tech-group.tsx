import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function ziontechgroup() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Zion Tech Group</h1>
          <p className="text-lg text-gray-600">
            Professional zion tech group solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}