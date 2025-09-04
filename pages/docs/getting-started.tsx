import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group Documentation</title>
        <meta name="description" content="Get started with Zion Tech Group services. Quick start guide and step-by-step instructions." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/getting-started" />
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
            Getting Started
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🚀 Quick Start Guide</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ 
                  flexShrink: 0, 
                  width: 32, 
                  height: 32, 
                  background: '#dbeafe', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#3b82f6',
                  fontWeight: 600
                }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>Choose Your Service</h3>
                  <p style={{ opacity: 0.8, marginBottom: 12 }}>Browse our comprehensive catalog of 350+ services across Micro SaaS, AI, and IT solutions.</p>
                  <Link href="/services-catalog" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    Browse Services →
                  </Link>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ 
                  flexShrink: 0, 
                  width: 32, 
                  height: 32, 
                  background: '#dbeafe', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#3b82f6',
                  fontWeight: 600
                }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>Contact Our Team</h3>
                  <p style={{ opacity: 0.8, marginBottom: 12 }}>Get in touch with our experts to discuss your specific needs and requirements.</p>
                  <Link href="/contact" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    Contact Us →
                  </Link>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ 
                  flexShrink: 0, 
                  width: 32, 
                  height: 32, 
                  background: '#dbeafe', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#3b82f6',
                  fontWeight: 600
                }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>Get Started</h3>
                  <p style={{ opacity: 0.8, marginBottom: 12 }}>We'll work with you to implement the perfect solution for your business needs.</p>
                  <Link href="/request-quote" style={{ color: '#3b82f6', textDecoration: 'none' }}>
                    Request Quote →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}