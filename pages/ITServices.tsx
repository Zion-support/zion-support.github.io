import React from 'react';
import Head from 'next/head';

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services and infrastructure solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">IT Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Comprehensive IT infrastructure and support services for your business.
          </p>
          <div className="text-center">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}