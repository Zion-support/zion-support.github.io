import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SDK() {
  return (
    <>
      <Head>
        <title>SDK Documentation - Zion Tech Group Documentation</title>
        <meta name="description" content="Software Development Kits (SDKs) for Zion Tech Group APIs. Download and integrate our SDKs in your preferred programming language." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/sdk" />
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
            SDK Documentation
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Software Development Kits (SDKs) for easy integration with our APIs.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>📦 Available SDKs</h2>
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{ padding: 20, background: '#f0f9ff', borderRadius: 8, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#3b82f6' }}>JavaScript/Node.js</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Official SDK for JavaScript and Node.js applications.</p>
                <code style={{ background: '#1e293b', padding: '4px 8px', borderRadius: 4, fontSize: '0.8rem', color: '#e2e8f0' }}>
                  npm install @ziontechgroup/sdk
                </code>
              </div>
              
              <div style={{ padding: 20, background: '#f0f9ff', borderRadius: 8, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#3b82f6' }}>Python</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Official SDK for Python applications.</p>
                <code style={{ background: '#1e293b', padding: '4px 8px', borderRadius: 4, fontSize: '0.8rem', color: '#e2e8f0' }}>
                  pip install ziontechgroup-sdk
                </code>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}