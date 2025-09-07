import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function CaseStudyId() {
  return (
    <Layout>
      <Head>
        <title>Case Study - Zion Tech Group</title>
        <meta name="description" content="Case study content." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Study</h1>
          <p className="text-lg text-gray-600">
            Case study content coming soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}