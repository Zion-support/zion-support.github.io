import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const contact = {
  email: 'support@ziontechgroup.com',
  phone: '+1 (555) 123-4567'
};

export default function Authentication() {
  return (
    <>
      <Head>
        <title>API Authentication - Zion Tech Group</title>
        <meta name="description" content="Learn how to authenticate with our APIs using JWT tokens and secure authentication methods." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/authentication" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            API Authentication
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: 32 }}>
            Secure authentication methods for accessing our APIs
          </p>
        </div>

        {/* Overview */}
        <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🔐 Authentication Overview</h2>
          <p style={{ color: '#64748b', marginBottom: 20, lineHeight: 1.6 }}>
            Our APIs use JWT (JSON Web Token) based authentication to ensure secure access to your data and services.
          </p>
          <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginTop: 20 }}>
            <pre style={{ color: '#e2e8f0', fontSize: '0.9rem', overflow: 'auto' }}>
{`{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user123",
    "iat": 1640995200,
    "exp": 1641081600,
    "scope": "read write"
  }
}`}
            </pre>
          </div>
        </section>

        {/* Getting Started */}
        <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🚀 Getting Started</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>1. Obtain API Key</h3>
              <p style={{ color: '#64748b', marginBottom: 16 }}>
                Sign up for an account and generate your API key from the dashboard.
              </p>
              <div style={{ background: '#1e293b', padding: 16, borderRadius: 8 }}>
                <code style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                  curl -X POST https://api.ziontechgroup.com/auth/token
                </code>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>2. Include in Requests</h3>
              <p style={{ color: '#64748b', marginBottom: 16 }}>
                Add the Authorization header to all API requests.
              </p>
              <div style={{ background: '#1e293b', padding: 16, borderRadius: 8 }}>
                <code style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                  Authorization: Bearer YOUR_JWT_TOKEN
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Token Features */}
        <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🔑 Token Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>Self-contained</h3>
              <p style={{ color: '#64748b' }}>
                Tokens contain all necessary user information and permissions.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>Stateless</h3>
              <p style={{ color: '#64748b' }}>
                No server-side session storage required for authentication.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>Secure</h3>
              <p style={{ color: '#64748b' }}>
                HMAC SHA-256 signing ensures token integrity and authenticity.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>Expirable</h3>
              <p style={{ color: '#64748b' }}>
                Built-in expiration handling for enhanced security.
              </p>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section style={{ background: '#fef3c7', padding: 32, borderRadius: 12, marginBottom: 32, border: '1px solid #f59e0b' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>⏱️ Rate Limiting</h2>
          <p style={{ color: '#92400e', marginBottom: 20 }}>
            API requests are rate limited to ensure fair usage and system stability.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            <div style={{ background: 'white', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#1e293b' }}>Free Tier</h3>
              <p style={{ color: '#64748b' }}>1,000 requests/hour</p>
            </div>
            <div style={{ background: 'white', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#1e293b' }}>Professional</h3>
              <p style={{ color: '#64748b' }}>10,000 requests/hour</p>
            </div>
            <div style={{ background: 'white', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#1e293b' }}>Enterprise</h3>
              <p style={{ color: '#64748b' }}>Unlimited requests</p>
            </div>
          </div>
        </section>

        {/* Support */}
        <section style={{ background: '#dbeafe', padding: 32, borderRadius: 12, textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16, color: '#1e293b' }}>
            Need Help with Authentication?
          </h2>
          <p style={{ color: '#1e40af', marginBottom: 24, fontSize: '1.1rem' }}>
            Our technical team is here to help you implement secure authentication.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link href="/contact" style={{
              background: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-block'
            }}>
              Get Support
            </Link>
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
              Email Technical Team
            </a>
          </div>
        </section>
      </div>
    </>
  );
}