import React from 'react';
import Head from 'next/head';

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for your business needs." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Solutions</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Comprehensive technology solutions tailored to your business needs.
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