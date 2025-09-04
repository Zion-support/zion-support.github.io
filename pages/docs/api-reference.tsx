import Link from 'next/link';
import Head from 'next/head';

export default function ApiReference() {
  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group Documentation</title>
        <meta name="description" content="Complete API reference for Zion Tech Group services. Detailed documentation for all endpoints, parameters, and responses." />
        <link rel="canonical" href="https://ziontechgroup.com/docs/api-reference" />
      </Head>
      
      <div style={{ maxWidth: 1200, margin: '40px 20px' }}>
        <div style={{ marginBottom: 40 }}>
          <Link href="/docs" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
            ← Back to Documentation
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            API Reference
          </h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6 }}>
            Complete reference for all Zion Tech Group API endpoints, including request/response formats, authentication, and error handling.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Base URL */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🌐 Base URL</h2>
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8 }}>
              <code style={{ fontSize: '1.125rem', color: '#3b82f6' }}>https://api.ziontechgroup.com/v1</code>
            </div>
          </section>

          {/* Authentication */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🔐 Authentication</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>All API requests require authentication using your API key in the Authorization header.</p>
            
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>Header Format</h3>
              <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`Authorization: Bearer YOUR_API_KEY`}
              </pre>
            </div>

            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>Example</h3>
              <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`curl -H "Authorization: Bearer sk_live_1234567890abcdef" \\
  https://api.ziontechgroup.com/v1/health`}
              </pre>
            </div>
          </section>

          {/* Health Check */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🏥 Health Check</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>Check the status of our API services.</p>
            
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>GET /health</h3>
              <p style={{ opacity: 0.8, marginBottom: 12 }}>Returns the current status of all API services.</p>
              
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Request</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`curl -X GET \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.ziontechgroup.com/v1/health`}
                </pre>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Response</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0.0",
  "services": {
    "database": "healthy",
    "cache": "healthy",
    "queue": "healthy"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Micro SaaS APIs */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🚀 Micro SaaS APIs</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>APIs for our 150+ micro SaaS applications.</p>
            
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>GET /micro-saas/apps</h3>
              <p style={{ opacity: 0.8, marginBottom: 12 }}>List all available micro SaaS applications.</p>
              
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Query Parameters</h4>
                <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                  <li><code>category</code> - Filter by application category</li>
                  <li><code>status</code> - Filter by application status (active, beta, deprecated)</li>
                  <li><code>limit</code> - Number of results per page (default: 20, max: 100)</li>
                  <li><code>offset</code> - Number of results to skip (default: 0)</li>
                </ul>
              </div>

              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Request</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`curl -X GET \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  "https://api.ziontechgroup.com/v1/micro-saas/apps?category=analytics&limit=10"`}
                </pre>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Response</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`{
  "data": [
    {
      "id": "app_123",
      "name": "Cost Optimizer",
      "category": "analytics",
      "status": "active",
      "description": "Automatically optimize cloud costs",
      "version": "2.1.0",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 10,
    "offset": 0,
    "has_more": true
  }
}`}
                </pre>
              </div>
            </div>

            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>GET /micro-saas/apps/{"{id}"}</h3>
              <p style={{ opacity: 0.8, marginBottom: 12 }}>Get detailed information about a specific micro SaaS application.</p>
              
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Path Parameters</h4>
                <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                  <li><code>id</code> - The unique identifier of the application</li>
                </ul>
              </div>

              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Request</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`curl -X GET \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.ziontechgroup.com/v1/micro-saas/apps/app_123`}
                </pre>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Response</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`{
  "data": {
    "id": "app_123",
    "name": "Cost Optimizer",
    "category": "analytics",
    "status": "active",
    "description": "Automatically optimize cloud costs",
    "version": "2.1.0",
    "features": [
      "Real-time cost monitoring",
      "Automated optimization recommendations",
      "Multi-cloud support",
      "Cost forecasting"
    ],
    "pricing": {
      "tier": "premium",
      "monthly_cost": 99.99,
      "currency": "USD"
    },
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* AI Services APIs */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🤖 AI Services APIs</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>Machine learning and AI APIs for various use cases.</p>
            
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>POST /ai/analyze</h3>
              <p style={{ opacity: 0.8, marginBottom: 12 }}>Analyze text using various AI models.</p>
              
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Request Body</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`{
  "text": "Your text to analyze",
  "model": "sentiment-analysis",
  "options": {
    "language": "en",
    "confidence_threshold": 0.8
  }
}`}
                </pre>
              </div>

              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Request</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`curl -X POST \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "This is great!", "model": "sentiment-analysis"}' \\
  https://api.ziontechgroup.com/v1/ai/analyze`}
                </pre>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Response</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`{
  "data": {
    "sentiment": "positive",
    "confidence": 0.95,
    "score": 0.8,
    "model": "sentiment-analysis",
    "processing_time": 0.123
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* IT Services APIs */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🖥️ IT Services APIs</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>APIs for managing IT infrastructure and services.</p>
            
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>GET /it-services/status</h3>
              <p style={{ opacity: 0.8, marginBottom: 12 }}>Get the current status of IT services and infrastructure.</p>
              
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Request</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`curl -X GET \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.ziontechgroup.com/v1/it-services/status`}
                </pre>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 8 }}>Response</h4>
                <pre style={{ background: '#1a1a1a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.875rem' }}>
{`{
  "data": {
    "overall_status": "healthy",
    "services": {
      "cloud_infrastructure": {
        "status": "healthy",
        "uptime": "99.9%",
        "last_incident": null
      },
      "devops_pipeline": {
        "status": "healthy",
        "last_deployment": "2024-01-15T09:00:00Z",
        "success_rate": "98.5%"
      },
      "cybersecurity": {
        "status": "healthy",
        "threats_blocked": 42,
        "last_scan": "2024-01-15T10:00:00Z"
      }
    },
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Error Codes */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>❌ Error Codes</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>Standard HTTP status codes and custom error responses.</p>
            
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>Common Error Codes</h3>
              <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                <li><strong>400 Bad Request</strong> - Invalid request parameters</li>
                <li><strong>401 Unauthorized</strong> - Invalid or missing API key</li>
                <li><strong>403 Forbidden</strong> - Insufficient permissions</li>
                <li><strong>404 Not Found</strong> - Resource doesn't exist</li>
                <li><strong>429 Too Many Requests</strong> - Rate limit exceeded</li>
                <li><strong>500 Internal Server Error</strong> - Server-side error</li>
                <li><strong>503 Service Unavailable</strong> - Service temporarily unavailable</li>
              </ul>
            </div>
          </section>

          {/* Rate Limits */}
          <section style={{ background: '#1a1a1a', padding: 32, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⏱️ Rate Limits</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>API rate limits to ensure fair usage and system stability.</p>
            
            <div style={{ background: '#2a2a2a', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 12 }}>Rate Limit Tiers</h3>
              <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
                <li><strong>Free Tier</strong> - 100 requests per hour</li>
                <li><strong>Basic Tier</strong> - 1,000 requests per hour</li>
                <li><strong>Professional Tier</strong> - 10,000 requests per hour</li>
                <li><strong>Enterprise Tier</strong> - 100,000 requests per hour</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}