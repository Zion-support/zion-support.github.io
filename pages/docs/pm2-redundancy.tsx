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