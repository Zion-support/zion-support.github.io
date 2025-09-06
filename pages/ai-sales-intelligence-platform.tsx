import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function AISalesIntelligencePlatform() {
  return (
    <Layout>
      <Head>
        <title>AI Sales Intelligence Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered sales intelligence platform for data-driven sales teams." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Sales Intelligence Platform</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI-powered sales intelligence platform for data-driven sales teams.
          </p>
        </div>
      </div>
    </Layout>
  );
}