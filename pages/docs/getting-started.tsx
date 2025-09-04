import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const contact = {
  email: 'support@ziontechgroup.com',
  phone: '+1 (555) 123-4567'
};

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group</title>
        <meta name="description" content="Learn how to get started with Zion Tech Group's technology solutions and services." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/getting-started" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Getting Started
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: 32 }}>
            Your comprehensive guide to getting started with Zion Tech Group's technology solutions.
          </p>
        </div>

        <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🚀 Quick Start Guide</h2>
          <p style={{ color: '#64748b', marginBottom: 20, lineHeight: 1.6 }}>
            Follow these simple steps to begin your digital transformation journey with us.
          </p>
        </section>

        <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>📞 Need Help?</h2>
          <p style={{ color: '#64748b', marginBottom: 24 }}>
            Our team is here to help you get started. Contact us for personalized assistance.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <a href={`tel:${contact.phone}`} style={{
              background: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-block'
            }}>
              Call {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} style={{
              background: 'white',
              color: '#3b82f6',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-block',
              border: '2px solid #3b82f6'
            }}>
              Email Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
}