import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide cutting-edge technology solutions." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          <p className="text-lg text-gray-600">
            We are a leading technology solutions provider specializing in AI, cloud computing, 
            cybersecurity, and digital transformation for businesses worldwide.
          </p>
        </div>
      </div>
    </Layout>
  );
}