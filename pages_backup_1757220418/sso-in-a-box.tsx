import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function ssoinabox() {
  return (
    <Layout>
      <Head>
        <title>Sso In A Box - Zion Tech Group</title>
        <meta name="description" content="Sso In A Box solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sso In A Box</h1>
          <p className="text-lg text-gray-600">
            Professional sso in a box solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}