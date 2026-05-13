'use client';
import React, { useState } from 'react';

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  auth?: boolean;
  params?: { name: string; type: string; required: boolean; description: string }[];
  response?: string;
}

const ENDPOINTS: Endpoint[] = [
  { method: 'GET', path: '/api/users', description: 'List all users with pagination', auth: true, params: [{ name: 'page', type: 'number', required: false, description: 'Page number (default: 1)' }, { name: 'limit', type: 'number', required: false, description: 'Results per page (default: 20)' }], response: '{ "data": [{ "id": "string", "name": "string", "email": "string" }], "total": "number", "page": "number" }' },
  { method: 'POST', path: '/api/users', description: 'Create a new user', auth: true, params: [{ name: 'name', type: 'string', required: true, description: 'User full name' }, { name: 'email', type: 'string', required: true, description: 'User email address' }, { name: 'role', type: 'string', required: false, description: 'User role (admin, editor, viewer)' }] },
  { method: 'GET', path: '/api/users/:id', description: 'Get user by ID', auth: true, params: [{ name: 'id', type: 'string', required: true, description: 'Unique user identifier' }], response: '{ "id": "string", "name": "string", "email": "string", "role": "string", "createdAt": "ISO8601" }' },
  { method: 'PUT', path: '/api/users/:id', description: 'Update user details', auth: true, params: [{ name: 'id', type: 'string', required: true, description: 'Unique user identifier' }, { name: 'name', type: 'string', required: false, description: 'Updated name' }] },
  { method: 'DELETE', path: '/api/users/:id', description: 'Delete a user', auth: true, params: [{ name: 'id', type: 'string', required: true, description: 'Unique user identifier' }] },
  { method: 'GET', path: '/api/products', description: 'List products with filters', auth: false, params: [{ name: 'category', type: 'string', required: false, description: 'Filter by category' }, { name: 'min_price', type: 'number', required: false, description: 'Minimum price filter' }], response: '{ "data": [{ "id": "string", "name": "string", "price": "number", "category": "string" }], "total": "number" }' },
  { method: 'POST', path: '/api/products', description: 'Create a new product', auth: true, params: [{ name: 'name', type: 'string', required: true, description: 'Product name' }, { name: 'price', type: 'number', required: true, description: 'Product price in USD' }, { name: 'category', type: 'string', required: true, description: 'Product category' }] },
  { method: 'GET', path: '/api/orders', description: 'List orders with status filter', auth: true, params: [{ name: 'status', type: 'string', required: false, description: 'Filter: pending, processing, shipped, delivered' }, { name: 'user_id', type: 'string', required: false, description: 'Filter by user' }], response: '{ "data": [{ "id": "string", "userId": "string", "status": "string", "total": "number", "items": "array" }], "total": "number" }' },
];

const METHOD_COLORS: Record<string, { bg: string; text: string; tag: string }> = {
  GET: { bg: '#0c4a6e', text: '#38bdf8', tag: '#0284c7' },
  POST: { bg: '#052e16', text: '#4ade80', tag: '#16a34a' },
  PUT: { bg: '#451a03', text: '#fb923c', tag: '#ea580c' },
  DELETE: { bg: '#450a0a', text: '#f87171', tag: '#dc2626' },
  PATCH: { bg: '#3b0764', text: '#c084fc', tag: '#9333ea' },
};

const LANGUAGES = ['cURL', 'JavaScript', 'Python', 'Go'];

export default function AutonomousApiDocumentationGeneratorPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<number | null>(null);
  const [selectedLang, setSelectedLang] = useState('cURL');
  const [baseUrl, setBaseUrl] = useState('https://api.yourdomain.com/v1');

  const ep = selectedEndpoint !== null ? ENDPOINTS[selectedEndpoint] : null;
  const methodColors = ep ? METHOD_COLORS[ep.method] : null;

  const generateCode = (endpoint: Endpoint, lang: string, url: string) => {
    const fullUrl = `${url}${endpoint.path}`;
    switch (lang) {
      case 'cURL':
        return `curl -X ${endpoint.method} "${fullUrl}" ${ep?.auth ? '\\\n  -H "Authorization: Bearer <YOUR_TOKEN>"' : ''}${endpoint.params?.some(p => p.required) ? ' \\\n  -H "Content-Type: application/json"' : ''}${endpoint.method === 'GET' && endpoint.params?.length ? ` \\\n  -d "${endpoint.params.map(p => `${p.name}=<value>`).join('&')}"` : ''}`;
      case 'JavaScript':
        return `fetch("${fullUrl}", {\n  method: "${endpoint.method}",${endpoint.auth ? '\n  headers: {\n    "Authorization": "Bearer YOUR_TOKEN",\n    "Content-Type": "application/json"\n  },' : ''}${endpoint.params?.some(p => p.required) ? `\n  body: JSON.stringify({\n    ${endpoint.params?.filter(p => p.required).map(p => `${p.name}: "value"`).join(',\n    ')}\n  })` : ''}\n}).then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));`;
      case 'Python':
        return `import requests\n\nurl = "${fullUrl}"${endpoint.auth ? '\nheaders = {\n    "Authorization": "Bearer YOUR_TOKEN",\n    "Content-Type": "application/json"\n}' : ''}${endpoint.params?.some(p => p.required) ? `\ndata = {\n    ${endpoint.params?.filter(p => p.required).map(p => `"${p.name}": "value"`).join(',\n    ')}\n}\n\nresponse = requests.${endpoint.method.toLowerCase()}(url, headers=headers, json=data)` : `\nresponse = requests.${endpoint.method.toLowerCase()}(url${endpoint.auth ? ', headers=headers' : ''})`}\n\nprint(response.status_code)\nprint(response.json())`;
      case 'Go':
        return `package main\n\nimport (\n    "fmt"\n    "net/http"\n    "io/ioutil"\n)\n\nfunc main() {\n    client := &http.Client{}\n    req, _ := http.NewRequest("${endpoint.method}", "${fullUrl}", nil)${endpoint.auth ? '\n    req.Header.Set("Authorization", "Bearer YOUR_TOKEN")' : ''}\n    \n    resp, err := client.Do(req)\n    if err != nil {\n        panic(err)\n    }\n    defer resp.Body.Close()\n    \n    body, _ := ioutil.ReadAll(resp.Body)\n    fmt.Println(string(body))\n}`;
      default:
        return '';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📝 Autonomous API Documentation Generator</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Generate interactive API docs from endpoint lists. Auto-create code samples in multiple languages, auth guides, and response schemas.</p>

        <div style={{ background: '#1e1b4b', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', border: '1px solid #312e81', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Base URL:</span>
          <input type="text" value={baseUrl} onChange={e => setBaseUrl(e.target.value)} style={{ flex: 1, padding: '0.5rem', background: '#0f172a', border: '1px solid #312e81', color: '#f8fafc', borderRadius: '6px', fontFamily: 'monospace' }} />
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{ENDPOINTS.length} endpoints</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Endpoint list */}
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            <h3 style={{ color: '#818cf8', marginBottom: '1rem' }}>\ 📡 Endpoints</h3>
            {ENDPOINTS.map((e, i) => {
              const mc = METHOD_COLORS[e.method];
              return (
                <button key={i} onClick={() => setSelectedEndpoint(i)} style={{
                  display: 'block', width: '100%', padding: '0.75rem', marginBottom: '0.5rem',
                  background: selectedEndpoint === i ? '#312e81' : '#0f172a',
                  border: `1px solid ${selectedEndpoint === i ? '#6366f1' : '#1e1b4b'}`,
                  borderRadius: '8px', cursor: 'pointer', textAlign: 'left', color: '#f8fafc'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      padding: '0.2rem 0.5rem', borderRadius: '4px', background: mc.bg,
                      color: mc.text, fontWeight: '700', fontSize: '0.7rem'
                    }}>{e.method}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>{e.path}</span>
                    {e.auth && <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>🔒</span>}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{e.description}</div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            {ep && methodColors ? (
              <>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ padding: '0.3rem 0.6rem', borderRadius: '4px', background: methodColors.bg, color: methodColors.text, fontWeight: '700', fontSize: '0.8rem' }}>{ep.method}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>{baseUrl}{ep.path}</span>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{ep.description}</p>
                </div>

                {/* Parameters */}
                {ep.params && ep.params.length > 0 && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#818cf8', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Parameters</h4>
                    <div style={{ background: '#0f172a', borderRadius: '8px', overflow: 'hidden' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 0.6fr 0.5fr 1.5fr', gap: '0.5rem', padding: '0.5rem 0.75rem', background: '#1e1b4b', fontSize: '0.7rem', color: '#64748b', fontWeight: '600' }}>
                        <span>Name</span><span>Type</span><span>Required</span><span>Description</span>
                      </div>
                      {ep.params.map((p, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '0.8fr 0.6fr 0.5fr 1.5fr', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.8rem', borderBottom: i < ep.params.length - 1 ? '1px solid #1e1b4b' : 'none' }}>
                          <span style={{ fontFamily: 'monospace', color: '#38bdf8' }}>{p.name}</span>
                          <span style={{ color: '#94a3b8' }}>{p.type}</span>
                          <span style={{ color: p.required ? '#f87171' : '#4ade80' }}>{p.required ? 'Yes' : 'No'}</span>
                          <span style={{ color: '#94a3b8' }}>{p.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Response schema */}
                {ep.response && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#818cf8', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Response Schema</h4>
                    <pre style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem', color: '#a5b4fc', overflow: 'auto', whiteSpace: 'pre-wrap' }}>{ep.response}</pre>
                  </div>
                )}

                {/* Code samples */}
                <div>
                  <h4 style={{ color: '#818cf8', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Code Samples</h4>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {LANGUAGES.map(lang => (
                      <button key={lang} onClick={() => setSelectedLang(lang)} style={{
                        padding: '0.3rem 0.7rem', borderRadius: '4px',
                        background: selectedLang === lang ? '#6366f1' : '#0f172a',
                        color: selectedLang === lang ? 'white' : '#94a3b8',
                        border: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600'
                      }}>{lang}</button>
                    ))}
                  </div>
                  <pre style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem', color: '#a5b4fc', overflow: 'auto', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>{generateCode(ep, selectedLang, baseUrl)}</pre>
                </div>
              </>
            ) : (
              <div style={{ color: '#818cf8', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
                <div>Select an endpoint to view documentation</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                  Auto-generated code samples in cURL, JavaScript, Python, Go
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
