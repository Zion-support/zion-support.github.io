import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FirstSteps() {
  return (
    <>
      <Head>
        <title>First Steps - Zion Tech Group Documentation</title>
        <meta name="description" content="Get started with Zion Tech Group services. Step-by-step guide to begin your digital transformation journey." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/first-steps" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 800, 
            marginBottom: 16, 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            First Steps
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Welcome to Zion Tech Group! Follow this guide to get started with our services.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🚀 Getting Started</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>
              You're now ready to explore our services and start your digital transformation journey.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              <Link href="/services-catalog" style={{
                background: '#16a34a',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1rem',
                fontWeight: 600
              }}>
                Browse Services
              </Link>
              <Link href="/contact" style={{
                background: 'white',
                color: '#16a34a',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: 8,
                border: '2px solid #16a34a',
                fontSize: '1rem',
                fontWeight: 600
              }}>
                Contact Our Team
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}