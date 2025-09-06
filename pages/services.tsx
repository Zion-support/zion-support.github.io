import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services and solutions" />
      </Head>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-center text-gray-600">Comprehensive technology solutions for your business needs.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;