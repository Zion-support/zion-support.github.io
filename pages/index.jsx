import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="AI, IT and Micro SaaS Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-center text-xl mb-8">
            AI, IT and Micro SaaS Services
          </p>
          <div className="text-center">
            <Link href="/services-advertising">
              <a className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg inline-block">
                View Services
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}