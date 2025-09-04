import React from 'react';
import Head from 'next/head';

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services and solutions for your business transformation." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Transform your business with our cutting-edge artificial intelligence solutions.
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