import Link from 'next/link';
import Head from 'next/head';

export default function ApiQuickStart() {
  return (
    <>
      <Head>
        <title>API Quick Start - Zion Tech Group Documentation</title>
        <meta name="description" content="Quick start guide for Zion Tech Group APIs. Learn how to authenticate, make your first API call, and integrate our services into your applications." />
        <meta name="keywords" content="API, quick start, authentication, integration, micro SaaS, AI services" />
        <link rel="canonical" href="https://ziontechgroup.com/docs/api-quick-start" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1a2e 50%, #16213e 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: 32, fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#64748b' }}>/</span>
            <Link href="/docs" style={{ color: '#93c5fd', textDecoration: 'none' }}>Documentation</Link>
            <span style={{ margin: '0 8px', color: '#64748b' }}>/</span>
            <span style={{ color: '#64748b' }}>API Quick Start</span>
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
                <Link href="/docs/getting-started" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Getting Started</Link>
                <Link href="/docs/api-quick-start" style={{ color: 'white', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 600 }}>API Quick Start</Link>
                <Link href="/docs/integration-examples" style={{ color: '#93c5fd', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Integration Examples</Link>
              </nav>
            </aside>

            {/* Main Content */}
            <main>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                API Quick Start
              </h1>
              
              <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: 32, lineHeight: 1.6 }}>
                Get started with Zion Tech Group APIs in minutes. This guide will walk you through authentication, making your first API call, and common integration patterns.
              </p>

              <div style={{ display: 'grid', gap: 24 }}>
                {/* Authentication */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#3b82f6' }}>Authentication</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    All API requests require authentication using API keys. You can obtain your API keys from the dashboard after signing up.
                  </p>
                  
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16, marginBottom: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>API Key Header</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</pre>
                  </div>

                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Example cURL Request</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`curl -X GET "https://api.ziontechgroup.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</pre>
                  </div>
                </section>

                {/* Making Your First Request */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#8b5cf6' }}>Making Your First Request</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Let's start with a simple request to list available services:
                  </p>
                  
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16, marginBottom: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>JavaScript Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`const response = await fetch('https://api.ziontechgroup.com/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const services = await response.json();
console.log(services);`}</pre>
                  </div>

                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>Python Example</h3>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.ziontechgroup.com/v1/services', headers=headers)
services = response.json()
print(services)`}</pre>
                  </div>
                </section>

                {/* Common Endpoints */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#22c55e' }}>Common Endpoints</h2>
                  <div style={{ display: 'grid', gap: 16 }}>
                    <div style={{ padding: 16, background: 'rgba(0, 0, 0, 0.2)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#3b82f6' }}>GET /v1/services</h3>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: 8 }}>List all available services</p>
                      <code style={{ color: '#22c55e', fontSize: '0.8rem' }}>Returns: Array of service objects</code>
                    </div>
                    <div style={{ padding: 16, background: 'rgba(0, 0, 0, 0.2)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#8b5cf6' }}>POST /v1/ai/analyze</h3>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: 8 }}>Analyze text using AI services</p>
                      <code style={{ color: '#22c55e', fontSize: '0.8rem' }}>Body: {`{"text": "string", "type": "sentiment|classification|extraction"}`}</code>
                    </div>
                    <div style={{ padding: 16, background: 'rgba(0, 0, 0, 0.2)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#22c55e' }}>GET /v1/usage</h3>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: 8 }}>Get your API usage statistics</p>
                      <code style={{ color: '#22c55e', fontSize: '0.8rem' }}>Returns: Usage metrics and limits</code>
                    </div>
                  </div>
                </section>

                {/* Error Handling */}
                <section style={{ 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 12, 
                  padding: 24, 
                  border: '1px solid rgba(255,255,255,0.1)' 
                }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, color: '#ef4444' }}>Error Handling</h2>
                  <p style={{ color: '#cbd5e1', marginBottom: 16 }}>
                    Our API uses standard HTTP status codes and returns detailed error messages:
                  </p>
                  
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 8, padding: 16 }}>
                    <pre style={{ color: '#cbd5e1', fontSize: '0.9rem', overflow: 'auto' }}>{`{
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired",
    "details": "Please check your API key and try again"
  }
}`}</pre>
                  </div>

                  <div style={{ marginTop: 16 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: '#ef4444' }}>Common Status Codes</h3>
                    <ul style={{ color: '#cbd5e1', paddingLeft: 20, lineHeight: 1.6 }}>
                      <li><strong>200</strong> - Success</li>
                      <li><strong>400</strong> - Bad Request (invalid parameters)</li>
                      <li><strong>401</strong> - Unauthorized (invalid API key)</li>
                      <li><strong>429</strong> - Rate Limited (too many requests)</li>
                      <li><strong>500</strong> - Internal Server Error</li>
                    </ul>
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
                    Ready to build something amazing? Check out these resources:
                  </p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link href="/docs/integration-examples" style={{ 
                      display: 'inline-block', 
                      padding: '12px 24px', 
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: 8, 
                      fontWeight: 600
                    }}>Integration Examples</Link>
                    <Link href="/contact" style={{ 
                      display: 'inline-block', 
                      padding: '12px 24px', 
                      background: 'rgba(15, 23, 42, 0.8)', 
                      color: 'white', 
                      textDecoration: 'none', 
                      borderRadius: 8, 
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontWeight: 600
                    }}>Get API Keys</Link>
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