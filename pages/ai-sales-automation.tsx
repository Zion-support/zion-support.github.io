import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function AISalesAutomation() {
  return (
    <Layout>
      <Head>
        <title>AI Sales Automation - Zion Tech Group</title>
        <meta name="description" content="Intelligent sales automation solutions powered by artificial intelligence." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Sales Automation</h1>
          <p className="text-xl text-gray-600 mb-8">
            Intelligent sales automation solutions powered by artificial intelligence.
          </p>
        </div>
      </div>
    </Layout>
  );
}