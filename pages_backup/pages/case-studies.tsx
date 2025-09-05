import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function CaseStudies() {
  return (
    <Layout>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real-world success stories from our clients" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover how we've helped businesses transform with our technology solutions.
          </p>
        </div>
      </div>
    </Layout>
  );
}