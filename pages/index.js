// import React from 'react';
// import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI Solutions & IT Services</title>
        <meta name="description" content="Leading provider of AI solutions, micro SaaS development, and enterprise IT services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading provider of AI solutions, micro SaaS development, and comprehensive enterprise IT services.
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">AI Solutions</h3>
                    <p className="text-gray-600">Advanced AI and machine learning solutions for your business.</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Micro SaaS</h3>
                    <p className="text-gray-600">Custom micro SaaS development and deployment services.</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">IT Services</h3>
                    <p className="text-gray-600">Comprehensive enterprise IT infrastructure and support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}