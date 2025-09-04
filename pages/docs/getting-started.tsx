import Link from 'next/link';
import Head from 'next/head';

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group Documentation</title>
        <meta name="description" content="Quick start guide for Zion Tech Group services and APIs. Learn how to integrate our solutions into your business." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/getting-started" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#93c5fd', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Getting Started
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.6 }}>
            Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 32 }}>
          {/* Quick Setup */}
          <section style={{ background: 'rgba(255,255,255,0.05)', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🚀 Quick Setup</h2>
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{ padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8 }}>1. Choose Your Service</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Select from our comprehensive range of services:</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="/micro-saas" style={{ padding: '8px 16px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: 6, textDecoration: 'none', color: '#93c5fd' }}>Micro SaaS</Link>
                  <Link href="/ai-services" style={{ padding: '8px 16px', background: 'rgba(139, 92, 246, 0.2)', borderRadius: 6, textDecoration: 'none', color: '#c4b5fd' }}>AI Services</Link>
                  <Link href="/it-services" style={{ padding: '8px 16px', background: 'rgba(34, 197, 94, 0.2)', borderRadius: 6, textDecoration: 'none', color: '#86efac' }}>IT Services</Link>
                </div>
              </div>
              
              <div style={{ padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8 }}>2. Get Your API Key</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Contact us to receive your personalized API credentials:</p>
                <Link href="/contact" style={{ display: 'inline-block', padding: '10px 20px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', textDecoration: 'none', borderRadius: 8, fontWeight: 600 }}>
                  Request API Access
                </Link>
              </div>
              
              <div style={{ padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8 }}>3. Start Building</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Use our APIs and SDKs to integrate our services:</p>
                <div style={{ display: 'grid', gap: 8 }}>
                  <Link href="/docs/api-reference" style={{ color: '#93c5fd', textDecoration: 'none' }}>→ REST API Reference</Link>
                  <Link href="/docs/sdk" style={{ color: '#93c5fd', textDecoration: 'none' }}>→ SDK Documentation</Link>
                  <Link href="/docs/code-examples" style={{ color: '#93c5fd', textDecoration: 'none' }}>→ Code Examples</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section style={{ background: 'rgba(255,255,255,0.05)', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 24 }}>📋 Service Categories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              <div style={{ padding: 20, background: 'rgba(59, 130, 246, 0.1)', borderRadius: 8, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>Micro SaaS Products</h3>
                <p style={{ opacity: 0.8, marginBottom: 12, fontSize: '0.9rem' }}>Ready-to-use software solutions for specific business needs.</p>
                <Link href="/micro-saas" style={{ color: '#93c5fd', textDecoration: 'none', fontSize: '0.9rem' }}>Explore Products →</Link>
              </div>
              
              <div style={{ padding: 20, background: 'rgba(139, 92, 246, 0.1)', borderRadius: 8, border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#c4b5fd' }}>AI Services</h3>
                <p style={{ opacity: 0.8, marginBottom: 12, fontSize: '0.9rem' }}>Advanced artificial intelligence and machine learning solutions.</p>
                <Link href="/ai-services" style={{ color: '#c4b5fd', textDecoration: 'none', fontSize: '0.9rem' }}>Explore AI →</Link>
              </div>
              
              <div style={{ padding: 20, background: 'rgba(34, 197, 94, 0.1)', borderRadius: 8, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#86efac' }}>IT Services</h3>
                <p style={{ opacity: 0.8, marginBottom: 12, fontSize: '0.9rem' }}>Comprehensive IT solutions including cloud, DevOps, and cybersecurity.</p>
                <Link href="/it-services" style={{ color: '#86efac', textDecoration: 'none', fontSize: '0.9rem' }}>Explore IT →</Link>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section style={{ background: 'rgba(255,255,255,0.05)', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 16 }}>🎯 Next Steps</h2>
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>📚</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Read the API Documentation</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Learn about our REST APIs and how to integrate them.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>💻</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Try Code Examples</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Get hands-on with our sample code and tutorials.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>🤝</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Get Support</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Contact our team for personalized assistance and guidance.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}