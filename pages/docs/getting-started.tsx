import Link from 'next/link';
import Head from 'next/head';

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group Documentation</title>
        <meta name="description" content="Get started with Zion Tech Group services and solutions. Learn how to integrate our micro SaaS products, AI services, and IT solutions into your business." />
        <meta name="keywords" content="getting started, documentation, integration, micro SaaS, AI services, IT solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/docs/getting-started" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1a2e 50%, #16213e 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: 32, fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#64748b' }}>/</span>
            <Link href="/docs" style={{ color: '#93c5fd', textDecoration: 'none' }}>Documentation</Link>
            <span style={{ margin: '0 8px', color: '#64748b' }}>/</span>
            <span style={{ color: '#64748b' }}>Getting Started</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 40, alignItems: 'start' }}>
            {/* Sidebar */}
            <aside style={{ 
              background: 'rgba(15, 23, 42, 0.8)', 
              borderRadius: 12, 
              padding: 24, 
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'sticky',
              top: 20
            }}>
              <h3 style={{ marginBottom: 16, fontSize: '1.1rem', fontWeight: 600 }}>Documentation</h3>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link href="/docs" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Overview</Link>
                <Link href="/docs/getting-started" style={{ color: 'white', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600 }}>Getting Started</Link>
                <Link href="/docs/api-quick-start" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>API Quick Start</Link>
                <Link href="/docs/integration-examples" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Integration Examples</Link>
              </nav>
            </aside>

            {/* Main Content */}
            <main>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Getting Started
              </h1>
              
              <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: 32, lineHeight: 1.6 }}>
                Welcome to Zion Tech Group! This guide will help you get started with our comprehensive suite of micro SaaS products, AI services, and IT solutions.
              </p>

              <div style={{ display: 'grid', gap: 24 }}>
                {/* Quick Start Section */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#3b82f6' }}>Quick Start</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Get up and running with our services in just a few steps:
                  </p>
                  <ol style={{ color: '#cbd5e1', paddingLeft: 20, lineHeight: 1.6 }}>
                    <li style={{ marginBottom: 8 }}>Choose your service category from our <Link href="/services-catalog" style={{ color: '#3b82f6', textDecoration: 'none' }}>services catalog</Link></li>
                    <li style={{ marginBottom: 8 }}>Review pricing and features on our <Link href="/pricing" style={{ color: '#3b82f6', textDecoration: 'none' }}>pricing page</Link></li>
                    <li style={{ marginBottom: 8 }}>Contact us through our <Link href="/contact" style={{ color: '#3b82f6', textDecoration: 'none' }}>contact form</Link> to get started</li>
                    <li style={{ marginBottom: 8 }}>Receive your API keys and integration documentation</li>
                    <li>Start building with our comprehensive APIs and SDKs</li>
                  </ol>
                </section>

                {/* Service Categories */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#8b5cf6' }}>Service Categories</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
                    <div style={{ padding: 16, background: 'rgba(59, 130, 246, 0.1)', borderRadius: 8, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#3b82f6' }}>Micro SaaS Products</h3>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: 12 }}>Ready-to-use software solutions for specific business needs</p>
                      <Link href="/micro-saas" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Learn More →</Link>
                    </div>
                    <div style={{ padding: 16, background: 'rgba(139, 92, 246, 0.1)', borderRadius: 8, border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#8b5cf6' }}>AI Services</h3>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: 12 }}>Advanced artificial intelligence and machine learning solutions</p>
                      <Link href="/ai-services" style={{ color: '#8b5cf6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Learn More →</Link>
                    </div>
                    <div style={{ padding: 16, background: 'rgba(34, 197, 94, 0.1)', borderRadius: 8, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>IT Services</h3>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: 12 }}>Comprehensive IT infrastructure and support services</p>
                      <Link href="/it-services" style={{ color: '#22c55e', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Learn More →</Link>
                    </div>
                  </div>
                </section>

                {/* Next Steps */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#22c55e' }}>Next Steps</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Ready to dive deeper? Check out these resources:
                  </p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link href="/docs/api-quick-start" style={{ 
                      display: 'inline-block', 
                      padding: '12px 24px', 
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: 8, 
                      fontWeight: 600,
                      transition: 'transform 0.2s'
                    }}>API Quick Start</Link>
                    <Link href="/docs/integration-examples" style={{ 
                      display: 'inline-block', 
                      padding: '12px 24px', 
                      background: 'rgba(15, 23, 42, 0.8)', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: 8, 
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontWeight: 600,
                      transition: 'transform 0.2s'
                    }}>Integration Examples</Link>
                    <Link href="/contact" style={{ 
                      display: 'inline-block', 
                      padding: '12px 24px', 
                      background: 'rgba(34, 197, 94, 0.1)', 
                      color: '#22c55e', 
                      textDecoration: 'none', 
                      borderRadius: 8, 
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                      fontWeight: 600,
                      transition: 'transform 0.2s'
                    }}>Contact Support</Link>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}