import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Code, Key, Zap, Shield } from 'lucide-react';

export default function APIReference() {
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
            WebkitTextFillColor: 'transparent'
          }}>
            API Reference
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.6 }}>
            Complete reference for all Zion Tech Group API endpoints, including request/response formats, authentication, and error handling.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
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
            <p style={{ opacity: 0.8, marginBottom: 20 }}>All API requests require authentication using your API key.</p>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 20 }}>
              <h3 style={{ fontWeight: 600, marginBottom: 12, color: '#93c5fd' }}>Header Authentication</h3>
              <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`curl -X GET "https://api.ziontechgroup.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
          </section>

          {/* Endpoints */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>📡 Endpoints</h2>
            
            {/* Services Endpoint */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: '#3b82f6' }}>GET /services</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>Retrieve a list of all available services.</p>
              
              <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 16 }}>
                <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#86efac' }}>Request</h4>
                <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`GET /v1/services
Authorization: Bearer YOUR_API_KEY`}
                </pre>
              </div>
              
              <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
                <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#86efac' }}>Response</h4>
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

            {/* Quotes Endpoint */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: '#3b82f6' }}>POST /quotes</h3>
              <p style={{ opacity: 0.8, marginBottom: 16 }}>Submit a request for a service quote.</p>
              
              <div style={{ background: '#1e293b', padding: 20, borderRadius: 8, marginBottom: 16 }}>
                <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#86efac' }}>Request Body</h4>
                <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`{
  "service_type": "micro-saas",
  "requirements": "Custom dashboard with analytics",
  "budget_range": "5000-10000",
  "timeline": "3-6 months",
  "contact_info": {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp"
  }
}`}
                </pre>
              </div>
              
              <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
                <h4 style={{ fontWeight: 600, marginBottom: 12, color: '#86efac' }}>Response</h4>
                <pre style={{ background: '#0f172a', padding: 16, borderRadius: 6, overflow: 'auto', fontSize: '0.9rem', color: '#e2e8f0' }}>
{`{
  "success": true,
  "data": {
    "quote_id": "QT-2025-001",
    "estimated_cost": 7500,
    "timeline": "4 months",
    "next_steps": "Schedule consultation call"
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Error Codes */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24 }}>⚠️ Error Codes</h2>
            
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{ padding: 16, background: '#fef2f2', borderRadius: 8, border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#dc2626' }}>400 - Bad Request</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Invalid request parameters or malformed JSON.</p>
              </div>
              
              <div style={{ padding: 16, background: '#fef2f2', borderRadius: 8, border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#dc2626' }}>401 - Unauthorized</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Invalid or missing API key.</p>
              </div>
              
              <div style={{ padding: 16, background: '#fef2f2', borderRadius: 8, border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#dc2626' }}>404 - Not Found</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Requested resource does not exist.</p>
              </div>
              
              <div style={{ padding: 16, background: '#fef2f2', borderRadius: 8, border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h4 style={{ fontWeight: 600, marginBottom: 8, color: '#dc2626' }}>500 - Internal Server Error</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Server error occurred while processing request.</p>
              </div>
            </div>
          </section>

          {/* Rate Limits */}
          <section style={{ background: '#f8fafc', padding: 32, borderRadius: 12, border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>⚡ Rate Limits</h2>
            <p style={{ opacity: 0.8, marginBottom: 20 }}>API requests are limited to prevent abuse and ensure fair usage.</p>
            
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 8 }}>
              <ul style={{ color: '#e2e8f0', lineHeight: 1.6 }}>
                <li>100 requests per minute per API key</li>
                <li>1000 requests per hour per API key</li>
                <li>Rate limit headers included in responses</li>
                <li>Exponential backoff recommended for retries</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );

export default Apireference;