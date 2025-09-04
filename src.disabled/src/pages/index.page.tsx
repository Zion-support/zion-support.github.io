import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — AI, IT and Micro SAAS Solutions</title>
        <meta name="description" content="AI services, IT solutions, and micro SAAS products that accelerate growth. Contact +1 302 464 0950 or kleber@ziontechgroup.com." />
        <link rel="canonical" href="https://ziontechgroup.com/" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Intelligent AI, robust IT, and practical micro SAAS solutions. Built to deliver outcomes fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <a className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Explore Services</a>
            </Link>
            <Link href="/contact">
              <a className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">Get a Quote</a>
            </Link>
          </div>
          <div className="mt-10 text-sm text-gray-600">
            <p>Mobile: <a className="underline" href="tel:+13024640950">+1 302 464 0950</a> · Email: <a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </section>
      </main>
    </>
  );
}

