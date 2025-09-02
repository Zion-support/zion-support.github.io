import React from 'react';
import Head from 'next/head';

const Sitemap: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Sitemap for Zion Tech Group website" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Main Pages</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="/services" className="text-blue-600 hover:underline">Services</a></li>
              <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
              <li><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;