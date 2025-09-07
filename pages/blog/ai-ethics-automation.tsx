import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function aiethicsautomation() {
  return (
    <Layout>
      <Head>
        <title>Ai Ethics Automation - Zion Tech Group</title>
        <meta name="description" content="Ai Ethics Automation solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Ethics Automation</h1>
          <p className="text-lg text-gray-600">
            Professional ai ethics automation solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
