import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="AI & Technology Solutions" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-center text-gray-600">
            Leading provider of AI, quantum computing, and cutting-edge technology solutions
          </p>
        </div>
      </main>
    </div>
  );
}