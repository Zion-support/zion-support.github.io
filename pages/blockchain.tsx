import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Blockchain() {
  return (
    <Layout
      title="Blockchain Solutions - Zion Tech Group"
      description="Advanced blockchain technology solutions and services for your business."
    >
      <Head>
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional blockchain solutions including smart contracts, DeFi, and enterprise blockchain services."
        />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blockchain Solutions
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology. 
              We provide comprehensive blockchain solutions including smart contracts, 
              DeFi platforms, and enterprise blockchain services.
            </p>
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}