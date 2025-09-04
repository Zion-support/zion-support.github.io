import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — AI, Micro SaaS, IT Solutions</title>
        <meta
          name="description"
          content="AI solutions, Micro SaaS products, and enterprise IT services. Contact +1 302 464 0950 • kleber@ziontechgroup.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zion Tech Group — AI, Micro SaaS, IT Solutions" />
        <meta property="og:description" content="AI services, micro SaaS platforms, and enterprise-grade IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com/"  />
      </Head>
<<<<<<< HEAD
      <main>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: '#111', marginBottom: 12 }}>Zion Tech Group</h1>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 24 }}>
            AI services, micro SaaS platforms, and enterprise-grade IT solutions.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" style={{ background: '#111', color: '#fff', padding: '10px 14px', borderRadius: 6 }}>
              Explore Services
            </Link>
            <Link href="/contact" style={{ border: '1px solid #111', padding: '10px 14px', borderRadius: 6, color: '#111' }}>
=======
      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Zion Tech Group</h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-8">
            AI services, micro SaaS platforms, and enterprise-grade IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" href="/services">
              Explore Services
            </Link>
            <Link className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100" href="/contact">
>>>>>>> origin/main
              Contact Us
            </Link>
          </div>
          <div style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
            <p>
<<<<<<< HEAD
              Mobile: <a href="tel:+13024640950" style={{ color: '#1d4ed8' }}>+1 302 464 0950</a> · Email: <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#1d4ed8' }}>kleber@ziontechgroup.com</a>
=======
              Mobile: <a className="text-blue-700" href="tel:+13024640950">+1 302 464 0950</a> · Email:{' '}
              <a className="text-blue-700" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> · Address: 364 E
              Main St STE 1008 Middletown DE 19709
>>>>>>> origin/main
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

