'use client';
import React, { useState } from 'react';
interface Test { method: string; path: string; curl: string; expect: string; edge: string; }
export default function AutonomousApiTestGeneratorPage() {
  const [spec, setSpec] = useState('');
  const [tests, setTests] = useState<Test[]>([]);
  const generate = () => {
    const lines = spec.split('\n').filter(l => l.trim());
    const ts: Test[] = [];
    lines.forEach(l => {
      const m = l.match(/(GET|POST|PUT|DELETE|PATCH)[\s:]+(\/[^\s]+)/i);
      if (m) {
        const method = m[1].toUpperCase();
        const path = m[2];
        ts.push({
          method, path,
          curl: 'curl -X ' + method + ' https://api.example.com' + path,
          expect: method === 'GET' ? '200 OK' : method === 'DELETE' ? '204 No Content' : '201 Created',
          edge: method === 'GET' ? 'Test pagination, auth missing, invalid ID' : method === 'DELETE' ? 'Non-existent resource, auth expired' : 'Empty body, invalid JSON, duplicate, auth expired'
        });
      }
    });
    if (ts.length === 0 && spec.length > 10) {
      ts.push({ method: 'GET', path: '/users', curl: 'curl -X GET https://api.example.com/users', expect: '200 OK, JSON array', edge: 'Empty, pagination, auth missing' });
      ts.push({ method: 'POST', path: '/users', curl: "curl -X POST https://api.example.com/users -d '{"email":"test@test.com"}'", expect: '201 Created', edge: 'Empty body, invalid JSON, duplicate, rate limit' });
    }
    setTests(ts);
  };
  const mC = (m: string) => m === 'GET' ? '#4ade80' : m === 'POST' ? '#3b82f6' : m === 'PUT' ? '#f59e0b' : m === 'DELETE' ? '#ef4444' : '#a855f7';
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #14532d 0%, #0f172a 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #22d3ee, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>API Test Script Generator</h1>
        <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>Paste API specs (one endpoint per line: METHOD /path). Get cURL commands, expected responses, and edge cases.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#064e3b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #059669' }}>
            <h3 style={{ color: '#6ee7b7', marginBottom: '1rem' }}>API Spec</h3>
            <textarea value={spec} onChange={e => setSpec(e.target.value)} placeholder="GET /users\nPOST /users\nGET /users/:id\nPUT /users/:id\nDELETE /users/:id" style={{ width: '100%', height: 250, padding: '0.75rem', background: '#0f172a', border: '1px solid #059669', color: '#f8fafc', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem', resize: 'vertical' }} />
            <button onClick={generate} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', background: 'linear-gradient(90deg, #059669, #0ea5e9)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Generate Tests</button>
          </div>
          <div style={{ background: '#064e3b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #059669' }}>
            {tests.length > 0 ? <><div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>{tests.length}</div>
              <div style={{ color: '#6ee7b7', fontSize: '0.8rem' }}>Test Cases</div>
            </div>
            {tests.map((t, i) => <div key={i} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span style={{ background: mC(t.method) + '33', color: mC(t.method), padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.8rem' }}>{t.method}</span>
                <span style={{ fontFamily: 'monospace', color: '#22d3ee' }}>{t.path}</span>
              </div>
              <code style={{ background: '#022c22', padding: '0.5rem', display: 'block', borderRadius: '4px', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.5rem', overflowX: 'auto' }}>{t.curl}</code>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Expect: <span style={{ color: '#4ade80' }}>{t.expect}</span></div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>Edge: <span style={{ color: '#fbbf24' }}>{t.edge}</span></div>
            </div>)}</> : <div style={{ color: '#047857', textAlign: 'center', padding: '3rem 1rem' }}>Tests appear here</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
