import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with our team of experts" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business? Get in touch with our team of experts.
          </p>
        </div>
      </div>
    </Layout>
  );
}