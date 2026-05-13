'use client';

import React, { useState } from 'react';

interface ProbeResult {
  url: string;
  status: number;
  duration: number;
  size: number;
  timestamp: number;
}

interface EndpointHealth {
  url: string;
  avgMs: number;
  p50Ms: number;
  p95Ms: number;
  p99Ms: number;
  minMs: number;
  maxMs: number;
  successes: number;
  total: number;
  avgBytes: number;
  hasCacheHeaders: boolean;
  status: number;
}

export default function AutonomousAPIProfiler() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState<ProbeResult[]>([]);
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState('');
  const [endpointMap, setEndpointMap] = useState<Record<string, ProbeResult[]>>({});

  const runProbes = async () => {
    const urlsList = urls.split('\n').map(url => url.trim()).filter(url => url.length > 0);
    if (urlsList.length === 0) return;

    setTesting(true);
    const allResults: ProbeResult[] = [];
    const epMap: Record<string, ProbeResult[]> = {};

    for (let i = 0; i < urlsList.length; i++) {
      setProgress(`Testing ${i + 1}/${urlsList.length}: ${urlsList[i]}`);

      for (let sample = 0; sample < 3; sample++) {
        try {
          const start = performance.now();
          const response = await fetch(urlsList[i], { method: 'GET', mode: 'cors' });
          const duration = Math.round(performance.now() - start);
          const text = await response.text();
          const size = new Blob([text]).size;
          const result = { url: urlsList[i], status: response.status, duration, size, timestamp: Date.now() + sample };
          allResults.push(result);

          const key = urlsList[i].replace(/\/\d+/g, '/:id');
          if (!epMap[key]) epMap[key] = [];
          epMap[key].push(result);
        } catch (error) {
          console.error(`Failed to probe ${urlsList[i]}:`, error);
          const key = urlsList[i].replace(/\/\d+/g, '/:id');
          if (!epMap[key]) epMap[key] = [];
          epMap[key].push({ url: urlsList[i], status: 0, duration: 0, size: 0, timestamp: Date.now() + sample });
        }
        await new Promise(r => setTimeout(r, 200));
      }
    }

    setProgress('Calculating percentiles...');
    setResults(allResults);
    setEndpointMap(epMap);
    setTesting(false);
  };

  const computeHealth = (name: string, samples: ProbeResult[]): EndpointHealth => {
    const durations = samples.map(s => s.duration).sort((a, b) => a - b);
    const sizes = samples.map(s => s.size);
    const successes = samples.filter(s => s.status >= 200 && s.status < 300).length;
    const avgMs = Math.round(durations.reduce((a, b) => a + b, 0) / durations.length);
    const p50Ms = durations[Math.floor(durations.length * 0.5)] || 0;
    const p95Ms = durations[Math.floor(durations.length * 0.95)] || 0;
    const p99Ms = durations[Math.floor(durations.length * 0.99)] || 0;

    return {
      url: name, avgMs, p50Ms, p95Ms, p99Ms, minMs: durations[0] || 0, maxMs: durations[durations.length - 1] || 0,
      successes, total: samples.length, avgBytes: Math.round(sizes.reduce((a, b) => a + b, 0) / sizes.length),
      hasCacheHeaders: false, status: samples[0]?.status || 0,
    };
  };

  const healths = Object.entries(endpointMap).map(([name, samples]) => computeHealth(name, samples));

  const statusColor = (s: number) => {
    if (s >= 200 && s < 300) return '#4caf50';
    if (s === 0) return '#f44336';
    return '#ff9800';
  };

  const perfColor = (ms: number) => ms < 100 ? '#4caf50' : ms < 300 ? '#ff9800' : '#f44336';

  return (
    <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>⚡ Autonomous API Response Time Profiler</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Enter API endpoints (one per line) to measure response times, payload sizes, and generate a performance health report. Takes 3 samples per endpoint.</p>

      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <textarea value={urls} onChange={e => setUrls(e.target.value)} placeholder="https://api.example.com/users\nhttps://api.example.com/products/1\nhttps://api.example.com/orders" style={{ width: '100%', minHeight: 120, padding: '0.75rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: 8, color: '#e0e0e0', fontFamily: 'monospace', fontSize: '0.9rem', resize: 'vertical' }} />
        <button onClick={runProbes} disabled={testing} style={{ display: 'block', width: '100%', marginTop: '1rem', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: testing ? '#6b7280' : 'linear-gradient(90deg, #f59e0b, #d97706)', border: 'none', borderRadius: 8, cursor: testing ? 'not-allowed' : 'pointer' }}>
          {testing ? `📡 Testing... ${progress}` : '📡 Start API Profiling'}
        </button>
      </div>

      {results.length > 0 && (
        <>
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📊 Endpoint Health Summary</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr>
                  {['Endpoint', 'Status', 'Avg', 'p50', 'p95', 'p99', 'Min', 'Max', 'Success', 'Avg Size'].map(h => (
                    <th key={h} style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #30363d', color: '#58a6ff' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {healths.map((h, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.75rem' }}>{h.url}</td>
                    <td style={{ padding: '0.5rem', color: statusColor(h.status) }}>{h.status || 'ERR'}</td>
                    {['avgMs', 'p50Ms', 'p95Ms', 'p99Ms', 'minMs', 'maxMs'].map(metric => (
                      <td key={metric} style={{ padding: '0.5rem', fontFamily: 'monospace', color: perfColor(h[metric as keyof EndpointHealth] as number) }}>{h[metric as keyof EndpointHealth]}ms</td>
                    ))}
                    <td style={{ padding: '0.5rem' }}>{h.successes}/{h.total}</td>
                    <td style={{ padding: '0.5rem', fontSize: '0.75rem' }}>{h.avgBytes > 0 ? `${h.avgBytes}B` : 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {healths.some(h => h.avgMs > 300) && (
            <div style={{ background: '#1c1017', borderRadius: 8, padding: '1rem', marginBottom: '1.5rem', border: '1px solid #f44336' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#f87171' }}>⚠️ Slow Endpoints Detected</h3>
              {healths.filter(h => h.avgMs > 300).map((h, i) => (
                <div key={i} style={{ marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span style={{ fontFamily: 'monospace', color: '#c9d1d9' }}>{h.url}</span> — avg response {h.avgMs}ms (p95: {h.p95Ms}ms)
                  <div style={{ color: '#8b949e', fontSize: '0.8rem', marginLeft: '1rem' }}>
                    💡 Consider: caching, query optimization, pagination, or CDN for this endpoint.
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📈 Raw Samples ({results.length} probes)</h2>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {results.slice(0, 20).map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: '#0d1117', borderRadius: 6, fontSize: '0.8rem' }}>
                  <span style={{ fontFamily: 'monospace', color: statusColor(r.status) }}>{r.status}</span>
                  <span style={{ color: perfColor(r.duration), fontWeight: 600 }}>{r.duration}ms</span>
                  <span style={{ color: '#8b949e' }}>{r.size > 0 ? `${r.size}B` : 'N/A'}</span>
                  <span style={{ color: '#6b7280' }}>{new Date(r.timestamp).toLocaleTimeString()}</span>
                </div>
              ))}
            </div>
          </div>

<button onClick={() => { setResults([]); setEndpointMap({}); setUrls(''); }} style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: 'none', borderRadius: 8, cursor: 'pointer', marginTop: '1rem' }}>
            🔄 Profile Another API
          </button>
        </>
      )}
    </div>
  );
}
