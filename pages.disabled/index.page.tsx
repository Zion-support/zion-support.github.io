import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Innovative technology solutions" />
      </Head>
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion Tech Group</h1>
        <p className="text-lg text-gray-300">Building intelligent, secure, and scalable solutions.</p>
      </main>
    </div>
  );
}