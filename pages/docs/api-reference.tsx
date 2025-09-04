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
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            API Reference
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.6 }}>
            Complete reference for all Zion Tech Group API endpoints, including request/response formats, authentication, and error handling.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 32 }}>
          {/* Base URL */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🌐 Base URL</h2>
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <code style={{ fontSize: '1.2rem', color: '#93c5fd' }}>https://api.ziontechgroup.com/v1</code>
            </div>
          </section>

          {/* Authentication */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>🔐 Authentication</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>All API requests require authentication using a Bearer token in the Authorization header.</p>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#93c5fd' }}>Header Format</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`Authorization: Bearer YOUR_API_KEY`}
              </pre>
            </div>
          </section>

          {/* Services Endpoints */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>📋 Services Endpoints</h2>
            
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{ padding: 20, background: '#f0f9ff', borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1e40af' }}>GET /services</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Retrieve a list of all available services.</p>
                
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#f59e0b' }}>Query Parameters</h4>
                  <div style={{ background: '#f0f9ff', padding: 12, borderRadius: 6, fontSize: '0.9rem' }}>
                    <div><code>page</code> - Page number (default: 1)</div>
                    <div><code>limit</code> - Items per page (default: 10, max: 100)</div>
                    <div><code>category</code> - Filter by service category</div>
                    <div><code>search</code> - Search in service names and descriptions</div>
                  </div>
                </div>
                
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#f59e0b' }}>Response</h4>
                  <pre style={{ background: '#0f172a', padding: 12, borderRadius: 6, overflow: 'auto', fontSize: '0.8rem', color: '#e2e8f0' }}>
{`{
  "success": true,
  "data": [
    {
      "id": "micro-saas",
      "name": "Micro SaaS Products",
      "description": "Ready-to-use software solutions",
      "category": "software",
      "endpoints": ["/v1/micro-saas"]
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
              </div>

              <div style={{ padding: 20, background: '#f0f9ff', borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#1e40af' }}>GET /services/&#123;service_id&#125;</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Retrieve detailed information about a specific service.</p>
                
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#f59e0b' }}>Path Parameters</h4>
                  <div style={{ background: '#f0f9ff', padding: 12, borderRadius: 6, fontSize: '0.9rem' }}>
                    <div><code>service_id</code> - Unique identifier for the service</div>
                  </div>
                </div>
                
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#f59e0b' }}>Response</h4>
                  <pre style={{ background: '#0f172a', padding: 12, borderRadius: 6, overflow: 'auto', fontSize: '0.8rem', color: '#e2e8f0' }}>
{`{
  "success": true,
  "data": {
    "id": "micro-saas",
    "name": "Micro SaaS Products",
    "description": "Ready-to-use software solutions",
    "category": "software",
    "features": ["Cost optimization", "Analytics", "Automation"],
    "pricing": {
      "starting": "$99/month",
      "enterprise": "Contact us"
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Quotes Endpoints */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>💬 Quotes Endpoints</h2>
            
            <div style={{ display: 'grid', gap: 20 }}>
              <div style={{ padding: 20, background: '#f0fdf4', borderRadius: 8 }}>
                <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#166534' }}>POST /quotes</h3>
                <p style={{ opacity: 0.8, marginBottom: 12 }}>Submit a request for a service quote or consultation.</p>
                
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#f59e0b' }}>Request Body</h4>
                  <pre style={{ background: '#0f172a', padding: 12, borderRadius: 6, overflow: 'auto', fontSize: '0.8rem', color: '#e2e8f0' }}>
{`{
  "service_id": "micro-saas",
  "company": "Your Company",
  "contact_email": "contact@company.com",
  "requirements": "Detailed project requirements",
  "budget_range": "$10,000 - $50,000",
  "timeline": "3-6 months"
}`}
                  </pre>
                </div>
                
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#f59e0b' }}>Response</h4>
                  <pre style={{ background: '#0f172a', padding: 12, borderRadius: 6, overflow: 'auto', fontSize: '0.8rem', color: '#e2e8f0' }}>
{`{
  "success": true,
  "data": {
    "quote_id": "qt_123456789",
    "status": "pending",
    "estimated_response": "24-48 hours",
    "message": "Thank you for your interest. We'll review your requirements and get back to you soon."
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⚠️ Error Handling</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>Our API uses standard HTTP status codes and returns detailed error information.</p>
            
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{ padding: 20, background: '#fef2f2', borderRadius: 8, border: '1px solid #fecaca' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#dc2626' }}>400 - Bad Request</h3>
                <p style={{ opacity: 0.8, marginBottom: 8, fontSize: '0.9rem' }}>Invalid request parameters or malformed request body.</p>
                <pre style={{ background: '#0f172a', padding: 12, borderRadius: 6, overflow: 'auto', fontSize: '0.8rem', color: '#e2e8f0' }}>
{`{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETERS",
    "message": "Missing required parameter: service_id"
  }
}`}
                </pre>
              </div>
              
              <div style={{ padding: 20, background: '#fef2f2', borderRadius: 8, border: '1px solid #fecaca' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#dc2626' }}>401 - Unauthorized</h3>
                <p style={{ opacity: 0.8, marginBottom: 8, fontSize: '0.9rem' }}>Invalid or missing API key.</p>
                <pre style={{ background: '#0f172a', padding: 12, borderRadius: 6, overflow: 'auto', fontSize: '0.8rem', color: '#e2e8f0' }}>
{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired"
  }
}`}
                </pre>
              </div>
              
              <div style={{ padding: 20, background: '#fef2f2', borderRadius: 8, border: '1px solid #fecaca' }}>
                <h3 style={{ fontWeight: 600, marginBottom: 8, color: '#dc2626' }}>429 - Rate Limited</h3>
                <p style={{ opacity: 0.8, marginBottom: 8, fontSize: '0.9rem' }}>Too many requests. Rate limit exceeded.</p>
                <pre style={{ background: '#0f172a', padding: 12, borderRadius: 6, overflow: 'auto', fontSize: '0.8rem', color: '#e2e8f0' }}>
{`{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Try again in 60 seconds"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Rate Limits */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⏱️ Rate Limits</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>API requests are rate limited to ensure fair usage and system stability.</p>
            
            <div style={{ background: '#f0f9ff', padding: 20, borderRadius: 8 }}>
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600 }}>Free Tier</span>
                  <span style={{ color: '#1e40af' }}>100 requests/hour</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600 }}>Pro Tier</span>
                  <span style={{ color: '#1e40af' }}>1,000 requests/hour</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600 }}>Enterprise</span>
                  <span style={{ color: '#1e40af' }}>10,000 requests/hour</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}