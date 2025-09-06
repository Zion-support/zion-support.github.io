import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Technology Solutions</title>
        <meta name="description" content="Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Leading technology solutions provider specializing in web development, 
              mobile applications, AI integration, and cloud services.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}