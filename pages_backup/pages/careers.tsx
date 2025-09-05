import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Careers() {
  return (
    <Layout>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and build the future of technology" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented individuals to join our team.
          </p>
        </div>
      </div>
    </Layout>
  );
}