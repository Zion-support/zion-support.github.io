import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function emergingtech() {
  return (
    <Layout>
      <Head>
        <title>Emerging Tech - Zion Tech Group</title>
        <meta name="description" content="Emerging Tech solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Emerging Tech</h1>
          <p className="text-lg text-gray-600">
            Professional emerging tech solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}