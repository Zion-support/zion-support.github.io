import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function apidocumentationgenerator() {
  return (
    <Layout>
      <Head>
        <title>Api Documentation Generator - Zion Tech Group</title>
        <meta name="description" content="Api Documentation Generator solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Api Documentation Generator</h1>
          <p className="text-lg text-gray-600">
            Professional api documentation generator solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}