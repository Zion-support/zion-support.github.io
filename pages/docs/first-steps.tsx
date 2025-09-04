import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const contact = {
  email: 'support@ziontechgroup.com',
  phone: '+1 (555) 123-4567'
};

export default function FirstSteps() {
  return (
    <>
      <Head>
        <title>First Steps - Zion Tech Group</title>
        <meta name="description" content="Get started with Zion Tech Group - your first steps towards digital transformation." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/first-steps" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            First Steps
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: 32 }}>
            Welcome to Zion Tech Group! Let's get you started on your digital transformation journey.
          </p>
        </div>

        <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🎉 Welcome to Zion Tech Group</h2>
          <p style={{ color: '#64748b', marginBottom: 20, lineHeight: 1.6 }}>
            We're excited to have you on board! Our team is ready to help you transform your business with cutting-edge technology solutions.
          </p>
        </section>

        <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🚀 Getting Started</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div style={{ background: 'white', padding: 24, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>1. Explore Our Services</h3>
              <p style={{ color: '#64748b', marginBottom: 16 }}>
                Browse our comprehensive catalog of technology services and solutions.
              </p>
              <Link href="/services-catalog" style={{
                background: '#3b82f6',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                View Services
              </Link>
            </div>
            <div style={{ background: 'white', padding: 24, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>2. Schedule a Consultation</h3>
              <p style={{ color: '#64748b', marginBottom: 16 }}>
                Book a free consultation with our experts to discuss your specific needs.
              </p>
              <Link href="/contact" style={{
                background: '#3b82f6',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Schedule Call
              </Link>
            </div>
            <div style={{ background: 'white', padding: 24, borderRadius: 12, border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>3. Get Your Quote</h3>
              <p style={{ color: '#64748b', marginBottom: 16 }}>
                Receive a detailed proposal tailored to your business requirements.
              </p>
              <Link href="/contact" style={{
                background: '#3b82f6',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Request Quote
              </Link>
            </div>
          </div>
        </section>

        <section style={{ background: '#dcfce7', padding: 32, borderRadius: 12, textAlign: 'center', border: '1px solid #22c55e' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16, color: '#1e293b' }}>
            Ready for the Next Step?
          </h2>
          <p style={{ color: '#166534', marginBottom: 24, fontSize: '1.1rem' }}>
            You're now ready to explore our services and start your digital transformation journey.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link href="/services-catalog" style={{
              background: '#22c55e',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-block'
            }}>
              Browse Services
            </Link>
            <Link href="/contact" style={{
              background: 'white',
              color: '#22c55e',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-block',
              border: '2px solid #22c55e'
            }}>
              Contact Our Team
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}