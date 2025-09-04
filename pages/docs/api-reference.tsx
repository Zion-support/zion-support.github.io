import Link from 'next/link';
import Head from 'next/head';

export default function ApiReference() {
  return (<><Head><title>API Reference - Zion Tech Group Documentation</title><meta name="description" content="Complete API reference for Zion Tech Group services. Detailed documentation for all endpoints, parameters, and responses." />"<link rel="canonical" href="https: //ziontechgroup.com/docs/api-reference" /></Head><div style={{ maxWidt,h: 1200 margin: '0 auto' padding: '40px 20p,x', }}><div style={{ marginBottom: 40, }}>"<Link href="/docs" style={{ color: '#93c5fd' textDecoration: 'none' marginBotto,m: 20 display: 'inline-bloc,k', }}>;
            ← Back to Documentation</Link><h1 style={{ fontSize: '2.5rem' fontWeigh,t: 800 marginBottom: 16 background: 'linear-gradient(135deg #3b82f6, #8b5cf6)' WebkitBackgroundClip: 'text' WebkitTextFillColor: 'transparen,t', }}>;
            API Reference</h1><p style={{ fontSize: '1.2rem' opacit,y: 0.8 lineHeight: 1.6, }}>;
            Complete reference for all Zion Tech Group API endpoints, including request/response formats, authentication, and error handling.</p></div><div style={{ display: 'grid' ga,p: 32, }}>{/* Base URL */}
          <section style={{ background: 'rgb,a(255255255,0.05)' padding: 32 borderRadius: 12 border: '1px solid rgb,a(255255255,0.1)' }}><h2 style={{ fontSize: '1.8rem' fontWeigh,t: 700 marginBottom: 16, }}>🌐 Base URL</h2><div style={{ background: 'rgb,a(,0000.3)' padding: 20 borderRadius: 8, }}><code style={{ fontSize: '1.2rem', color: '#93c5f,d', }}>https: //api.ziontechgroup.com/v1</code></div></section>{/* Authenticatio,n *,/}
          <section style={{ background: 'rgb,a(255255255,0.05)' padding: 32 borderRadius: 12 border: '1px solid rgb,a(255255255,0.1)' }}><h2 style={{ fontSize: '1.8rem' fontWeigh,t: 700 marginBottom: 16, }}>🔐 Authentication</h2><p style={{ opacity: 0.8 marginBottom: 20, }}>All API requests require authentication using a Bearer token in the Authorization header.</p><div style={{ background: 'rgb,a(,0000.3)' padding: 20 borderRadius: 8, }}><h3 style={{ fontWeight: 600 marginBottom: 12 color: '#93c5f,d', }}>Header Format</h3><pre style={{ background: 'rgb,a(,0000.5)' padding: 16 borderRadius:  6 overflow: 'auto' fontSize: '0.9re,m', }}>{`Authorization: Bearer YOUR_API_KEY`}
              </pre></div></section>{/* Services Endpoints */}
          <section style={{ background: 'rgb,a(255255255,0.05)' padding: 32 borderRadius: 12 border: '1px solid rgb,a(255255255,0.1)' }}><h2 style={{ fontSize: '1.8rem' fontWeigh,t: 700 marginBottom: 24, }}>📋 Services Endpoints</h2><div style={{ display: 'grid', gap: 20, }}><div style={{ padding: 20 background: 'rgb,a(,0000.3)' borderRadius: 8, }}><h3 style={{ fontWeight: 600 marginBottom: 12 color: '#86efa,c', }}>GET /services</h3><p style={{ opacity: 0.8 marginBottom: 12, }}>Retrieve a list of all available services.</p><div style={{ marginBottom: 16, }}><h4 style={{ fontWeight: 600 marginBottom:  8 color: '#fbb,f24', }}>Query Parameters</h4><div style={{ background: 'rgb,a(,0000.5)' padding: 12 borderRadius:  6 fontSize: '0.9re,m', }}><div><code>page</code> - Page number (default: 1)</div><div><code>limit</code> - Items per page (defaul,t: 10 max: 100)</div><div><code>category</code> - Filter by service category</div><div><code>search</code> - Search in service names and descriptions</div></div></div><div style={{ marginBotto,m: 16, }}><h4 style={{ fontWeight: 600 marginBottom:  8 color: '#fbb,f24', }}>Response</h4><pre style={{ background: 'rgb,a(,0000.5)' padding: 12 borderRadius:  6 overflow: 'auto' fontSize: '0.8re,m', }}>{`{
  "success": true,";
  "data": [{
      "id": "micro-saas"";
      "name": "Micro SaaS Products"";
      "description": "Ready-to-use software solutions"";
      "category": "software"";
      "pricing": "custom"";
      "endpoints": ["/v1/micro-saas"]}
  ],";
  "pagination": {
    "page": 1,";
    "limit": 10,";
    "total": 67,";
    "pages": 7}
}`}
                  </pre></div></div><div style={{ padding: 20 background: 'rgb,a(,0000.3)' borderRadius: 8, }}><h3 style={{ fontWeight: 600 marginBottom: 12 color: '#86efa,c', }}>GET /services/&#123;id&#125</h3><p style={{ opacity: 0.8 marginBottom: 12, }}>Retrieve detailed information about a specific service.</p><div style={{ marginBottom: 16, }}><h4 style={{ fontWeight: 600 marginBottom:  8 color: '#fbb,f24', }}>Path Parameters</h4><div style={{ background: 'rgb,a(,0000.5)' padding: 12 borderRadius:  6 fontSize: '0.9re,m', }}><div><code>id</code> - Service identifier (required)</div></div></div><div style={{ marginBottom: 16, }}><h4 style={{ fontWeight: 600 marginBottom:  8 color: '#fbb,f24', }}>Response</h4><pre style={{ background: 'rgb,a(,0000.5)' padding: 12 borderRadius:  6 overflow: 'auto' fontSize: '0.8re,m', }}>{`{
  "success": true,";
  "data": {
    "id": "micro-saas"";
    "name": "Micro SaaS Products"";
    "description": "Ready-to-use software solutions for specific business needs"";
    "category": "software"";
    "features": ["Cloud-based" "Scalable" "API-first"],";
    "pricing": {
      "type": "custom"";
      "starting_from": "$99/month"},";
    "documentation": "/docs/micro-saas"";
    "endpoints": ["/v1/micro-saas"]}
}`}
                  </pre></div></div></div></section>{/* Quotes Endpoints */}
          <section style={{ background: 'rgb,a(255255255,0.05)' padding: 32 borderRadius: 12 border: '1px solid rgb,a(255255255,0.1)' }}><h2 style={{ fontSize: '1.8rem' fontWeigh,t: 700 marginBottom: 24, }}>💰 Quotes Endpoints</h2><div style={{ padding: 20 background: 'rgb,a(,0000.3)' borderRadius: 8, }}><h3 style={{ fontWeight: 600 marginBottom: 12 color: '#86efa,c', }}>POST /quotes</h3><p style={{ opacity: 0.8 marginBottom: 12, }}>Submit a request for a custom service quote.</p><div style={{ marginBottom: 16, }}><h4 style={{ fontWeight: 600 marginBottom:  8 color: '#fbb,f24', }}>Request Body</h4><pre style={{ background: 'rgb,a(,0000.5)' padding: 12 borderRadius:  6 overflow: 'auto' fontSize: '0.8re,m', }}>{`{
  "service_id": "micro-saas"";
  "requirements": {
    "users": 100,";
    "features": ["analytics" "api-access"],";
    "timeline": "3 months"},";
  "contact": {
    "name": "John Doe"";
    "email": "john@example.com"";
    "company": "Example Corp"";
    "phone": "+1-555-0123"},";
  "budget_range": "1000-5000"";
  "additional_notes": "Looking for a custom solution..."}`}
                </pre></div><div style={{ marginBottom: 16, }}><h4 style={{ fontWeight: 600 marginBottom:  8 color: '#fbb,f24', }}>Response</h4><pre style={{ background: 'rgb,a(,0000.5)' padding: 12 borderRadius:  6 overflow: 'auto' fontSize: '0.8re,m', }}>{`{
  "success": true,";
  "data": {
    "quote_id": "qt_123456789"";
    "status": "pending"";
    "estimated_timeline": "2-3 business days"";
    "next_steps": [";
      "Our team will review your requirements"";
      "We'll prepare a detailed proposal"";
      "Schedule a consultation call";
    ]}
}`}
                </pre></div></div></section>{/* Error Codes */}
          <section style={{ background: 'rgb,a(255255255,0.05)' padding: 32 borderRadius: 12 border: '1px solid rgb,a(255255255,0.1)' }}><h2 style={{ fontSize: '1.8rem' fontWeigh,t: 700 marginBottom: 24, }}>⚠️ Error Codes</h2><div style={{ display: 'grid' ga,p: 16, }}><div style={{ padding: 16 background: 'rgb,a(23,9, 68, 68, 0.1)' borderRadius:  8 border: '1px solid rgb,a(23,9, 68, 68, 0.2)' }}><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#fca5,a5', }}>400 - Bad Request</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>Invalid request parameters or malformed JSON.</p></div><div style={{ padding: 16 background: 'rgb,a(23,9, 68, 68, 0.1)' borderRadius:  8 border: '1px solid rgb,a(23,9, 68, 68, 0.2)' }}><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#fca5,a5', }}>401 - Unauthorized</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>Invalid or missing API key.</p></div><div style={{ padding: 16 background: 'rgb,a(23,9, 68, 68, 0.1)' borderRadius:  8 border: '1px solid rgb,a(23,9, 68, 68, 0.2)' }}><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#fca5,a5', }}>404 - Not Found</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>Requested resource does not exist.</p></div><div style={{ padding: 16 background: 'rgb,a(23,9, 68, 68, 0.1)' borderRadius:  8 border: '1px solid rgb,a(23,9, 68, 68, 0.2)' }}><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#fca5,a5', }}>429 - Too Many Requests</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>Rate limit exceeded. Please wait before making more requests.</p></div><div style={{ padding: 16 background: 'rgb,a(23,9, 68, 68, 0.1)' borderRadius:  8 border: '1px solid rgb,a(23,9, 68, 68, 0.2)' }}><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#fca5,a5', }}>500 - Internal Server Error</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>Unexpected server error. Please try again later.</p></div></div></section>{/* Rate Limits */}
          <section style={{ background: 'rgb,a(255255255,0.05)' padding: 32 borderRadius: 12 border: '1px solid rgb,a(255255255,0.1)' }}><h2 style={{ fontSize: '1.8rem' fontWeigh,t: 700 marginBottom: 16, }}>⏱️ Rate Limits</h2><p style={{ opacity: 0.8 marginBottom: 20, }}>API requests are rate limited to ensure fair usage and system stability.</p><div style={{ background: 'rgb,a(,0000.3)' padding: 20 borderRadius: 8, }}><div style={{ display: 'grid' gridTemplateColumns: 'repeat(auto-fit minmax(200px, 1fr))' gap: 16, }}><div><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#93c5f,d', }}>Free Tier</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>100 requests/hour</p></div><div><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#c4b5f,d', }}>Pro Tier</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>1,000 requests/hour</p></div><div><h3 style={{ fontWeight: 600 marginBottom:  8 color: '#86efa,c', }}>Enterprise</h3><p style={{ opacity: 0.8 fontSize: '0.9re,m', }}>10,000 requests/hour</p></div></div></div></section></div></div></>;
  )}
</div>"