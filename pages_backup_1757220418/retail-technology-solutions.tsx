import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function retailtechnologysolutions() {
  return (
    <Layout>
      <Head>
        <title>Retail Technology Solutions - Zion Tech Group</title>
        <meta name="description" content="Retail Technology Solutions solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Retail Technology Solutions</h1>
          <p className="text-lg text-gray-600">
            Professional retail technology solutions solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}