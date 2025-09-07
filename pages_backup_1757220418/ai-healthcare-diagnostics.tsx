import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function aihealthcarediagnostics() {
  return (
    <Layout>
      <Head>
        <title>Ai Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Ai Healthcare Diagnostics solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Healthcare Diagnostics</h1>
          <p className="text-lg text-gray-600">
            Professional ai healthcare diagnostics solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}