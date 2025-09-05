import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group - Technology Solutions</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, and micro SaaS development" />
      </Head>
      
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-blue-600"> Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
              <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}