import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — AI, Micro SaaS, IT Solutions</title>
        <meta name="description"
          content="AI solutions, Micro SaaS products, and IT services. Contact +1 302 464 0950 • kleber@ziontechgroup.com"
         />
        <link rel="canonical" href="https://ziontechgroup.com/"  />
      </Head>
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
              Contact Us
            </Link>
          </div>
          <div style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
            <p>
              Mobile: <a href="tel:+13024640950" style={{ color: '#1d4ed8' }}>+1 302 464 0950</a> · Email: <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#1d4ed8' }}>kleber@ziontechgroup.com</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

