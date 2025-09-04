import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Authentication() {
  const contact = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1-302-464-0950',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Authentication - Zion Tech Group Documentation</title>
        <meta name="description" content="Learn how to authenticate with Zion Tech Group APIs. Complete guide to API keys, security, and authentication methods." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/authentication" />
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
            Authentication
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Learn how to authenticate with our APIs using secure API keys and best practices.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🔑 API Keys</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>All API requests require a valid API key for authentication.</p>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#93c5fd' }}>Getting Your API Key</h3>
              <ol style={{ color: '#e2e8f0', lineHeight: 1.6, paddingLeft: 20 }}>
                <li>Contact our team to request API access</li>
                <li>Complete the API access application form</li>
                <li>Receive your unique API key via secure email</li>
                <li>Store your API key securely (never commit to version control)</li>
              </ol>
            </div>
          </section>

          <section style={{ background: '#f0f9ff', padding: 32, borderRadius: 12, border: '1px solid rgba(59, 130, 246, 0.2)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🤝 Need Help?</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>
              Our technical team is here to help you implement secure authentication.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              <Link href="/contact" style={{
                background: '#3b82f6',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1rem',
                fontWeight: 600
              }}>
                Get Support
              </Link>
              <a href={`mailto:${contact.email}`} style={{
                background: 'white',
                color: '#3b82f6',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: 8,
                border: '2px solid #3b82f6',
                fontSize: '1rem',
                fontWeight: 600
              }}>
                Email Technical Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}