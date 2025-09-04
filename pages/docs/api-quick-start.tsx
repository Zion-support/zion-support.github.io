import Link from 'next/link';
import Head from 'next/head';

export default function ApiQuickStart() {
  return (
    <>
      <Head>
        <title>API Quick Start - Zion Tech Group Documentation</title>
        <meta name="description" content="Quick start guide for Zion Tech Group APIs. Learn how to make your first API call and integrate our services." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/api-quick-start" />
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
            API Quick Start
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Get up and running with Zion Tech Group APIs in minutes. This guide covers authentication, making your first request, and common use cases.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Authentication */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🔐 Authentication</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>All API requests require authentication using your API key.</p>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#93c5fd' }}>Header Authentication</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`curl -X GET "https://api.ziontechgroup.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#93c5fd' }}>JavaScript Example</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`const response = await fetch('https://api.ziontechgroup.com/v1/services', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
              </pre>
            </div>
          </section>

          {/* First API Call */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🚀 Your First API Call</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>Let's start with a simple request to list available services.</p>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#86efac' }}>Request</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`GET /v1/services
Authorization: Bearer YOUR_API_KEY`}
              </pre>
            </div>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#86efac' }}>Response</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`{
  "success": true,
  "data": [
    {
      "id": "micro-saas",
      "name": "Micro SaaS Products",
      "description": "Ready-to-use software solutions",
      "category": "software",
      "endpoints": ["/v1/micro-saas"]
    },
    {
      "id": "ai-services",
      "name": "AI Services",
      "description": "AI and machine learning solutions",
      "category": "ai",
      "endpoints": ["/v1/ai"]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 67
  }
}`}
              </pre>
            </div>
          </section>

          {/* Common Use Cases */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>💡 Common Use Cases</h2>
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{ padding: 20, background: '#f0f9ff', borderRadius: 8, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#93c5fd' }}>1. List Available Services</h3>
                <p style={{ opacity: 0.8, marginBottom: 12, fontSize: '0.9rem' }}>Get a comprehensive list of all available services and their details.</p>
                <code style={{ background: '#1e293b', padding: '4px 8px', borderRadius: 4, fontSize: '0.8rem', color: '#e2e8f0' }}>GET /v1/services</code>
              </div>
              
              <div style={{ padding: 20, background: '#faf5ff', borderRadius: 8, border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#c4b5fd' }}>2. Request Service Quote</h3>
                <p style={{ opacity: 0.8, marginBottom: 12, fontSize: '0.9rem' }}>Submit a request for a custom service quote or consultation.</p>
                <code style={{ background: '#1e293b', padding: '4px 8px', borderRadius: 4, fontSize: '0.8rem', color: '#e2e8f0' }}>POST /v1/quotes</code>
              </div>
              
              <div style={{ padding: 20, background: '#f0fdf4', borderRadius: 8, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#86efac' }}>3. Get Service Details</h3>
                <p style={{ opacity: 0.8, marginBottom: 12, fontSize: '0.9rem' }}>Retrieve detailed information about a specific service.</p>
                <code style={{ background: '#1e293b', padding: '4px 8px', borderRadius: 4, fontSize: '0.8rem', color: '#e2e8f0' }}>GET /v1/services/&#123;service_id&#125;</code>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⚠️ Error Handling</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>Our API uses standard HTTP status codes and returns detailed error information.</p>
            
            <div style={{ background: '#fef2f2', padding: 20, borderRadius: 8, border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#fca5a5' }}>Error Response Example</h3>
              <pre style={{ background: '#1e293b', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired",
    "details": "Please check your API key and try again"
  },
  "timestamp": "2025-01-26T10:30:00Z"
}`}
              </pre>
            </div>
          </section>

          {/* Next Steps */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🎯 Next Steps</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#f0f9ff', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>📖</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Read the Full API Reference</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Explore all available endpoints and parameters.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#f0f9ff', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>💻</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Try Integration Examples</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>See real-world examples of API integration.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, background: '#f0f9ff', borderRadius: 8 }}>
                <div style={{ fontSize: '1.5rem' }}>🤝</div>
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: 4 }}>Get API Access</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Contact us to get your API credentials and start building.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}