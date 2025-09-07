import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function spacetechnologyaiplatform() {
  return (
    <Layout>
      <Head>
        <title>Space Technology Ai Platform - Zion Tech Group</title>
        <meta name="description" content="Space Technology Ai Platform solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Space Technology Ai Platform</h1>
          <p className="text-lg text-gray-600">
            Professional space technology ai platform solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}