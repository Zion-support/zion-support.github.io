'use client';

import React, { useState } from 'react';

interface Endpoint {
  path: string; method: string; rpm: number; burstable: boolean;
  dbQuery: boolean; cached: boolean; weight: number;
}

interface CapacityResult {
  totalEndpoints: number; maxRpm: number; peakTps: number;
  dbPoolSize: number; monthlyCost: number; scaling: string;
  limits: { endpoint: string; limit: string }[];
  alerts: string[];
}

export default function AutonomousRateLimitPlannerPage() {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([
    { path: '/api/users', method: 'GET', rpm: 300, burstable: true, dbQuery: true, cached: true, weight: 1 },
    { path: '/api/orders', method: 'POST', rpm: 60, burstable: false, dbQuery: true, cached: false, weight: 3 },
    { path: '/api/health', method: 'GET', rpm: 1000, burstable: true, dbQuery: false, cached: true, weight: 0.1 },
  ]);
  const [newEp, setNewEp] = useState<Endpoint>({ path: '/api/resource', method: 'GET', rpm: 100, burstable: true, dbQuery: false, cached: true, weight: 1 });
  const [traffic, setTraffic] = useState(10); // multiplier
  const [result, setResult] = useState<CapacityResult | null>(null);

  const addEndpoint = () => setEndpoints([...endpoints, { ...newEp }]);
  const removeEndpoint = (i: number) => setEndpoints(endpoints.filter((_, idx) => idx !== i));

  const analyze = () => {
    const totalRpm = endpoints.reduce((sum, ep) => sum + ep.rpm * ep.weight, 0);
    const peakRpm = totalRpm * traffic;
    const peakTps = Math.ceil(peakRpm / 60);
    const activeDbEpCount = endpoints.filter(e => e.dbQuery).length;
    const dbPoolSize = Math.max(10, Math.ceil(peakTps / 3 * activeDbEpCount));
    const cachedEpCount = endpoints.filter(e => e.cached).length;
    const uncachedRatio = (endpoints.length - cachedEpCount) / endpoints.length;
    const monthlyCost = Math.round(dbPoolSize * 0.5 + peakTps * 0.01 + (uncachedRatio * 50));

    let scaling = 'Single server sufficient';
    if (peakTps > 1000) scaling = 'Need distributed rate limiting (e.g. Redis + RedisGears)';
    else if (peakTps > 500) scaling = 'Add a Redis cache layer + connection pool';
    else if (peakTps > 100) scaling = 'Consider Nginx/Caddy upstream proxy';
    else if (peakTps > 50) scaling = 'Monitor DB query times closely';

    const alerts: string[] = [];
    if (uncachedRatio > 0.5) alerts.push('More than 50% endpoints uncached — add caching to reduce DB load');
    const heavyEps = endpoints.filter(e => e.rpm * e.weight > 500);
    if (heavyEps.length > 0) alerts.push(`${heavyEps.length} endpoint(s) exceed 500 weighted RPM`);
    if (traffic > 5) alerts.push(`Traffic multiplier ${traffic}x — verify scaling plan handles this load`);

    setResult({
      totalEndpoints: endpoints.length,
      maxRpm: Math.round(peakRpm),
      peakTps,
      dbPoolSize,
      monthlyCost,
      scaling,
      limits: endpoints.map(ep => ({
        endpoint: `${ep.method} ${ep.path}`,
        limit: `${Math.ceil(ep.rpm / 10)} requests/sec ${ep.burstable ? '(burstable)' : '(strict)'}`
      })),
      alerts,
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🚦 API Rate Limit & Capacity Planner</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Model your API endpoints, set rate limits, and simulate traffic. Get capacity ceiling and scaling recommendations.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#162032', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e3a5f' }}>
            <h3 style={{ marginBottom: '1rem' }}>⚙️ Endpoints</h3>
            <div style={{ maxHeight: 300, overflowY: 'auto', marginBottom: '1rem' }}>
              {endpoints.map((ep, i) => (
                <div key={i} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '6px', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span><span style={{ color: '#38bdf8', fontWeight: '600' }}>{ep.method}</span> {ep.path}</span>
                    <button onClick={() => removeEndpoint(i)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>✕</button>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{ep.rpm} RPM • {ep.burstable ? 'Burstable' : 'Strict'} • {ep.cached ? '🟢 Cached' : '🔴 DB'} • w:{ep.weight}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              <input type="text" value={newEp.path} onChange={e => setNewEp({ ...newEp, path: e.target.value })} placeholder="/api/path" style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid #1e3a5f', color: '#f8fafc', borderRadius: '4px', marginBottom: '0.5rem' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <select value={newEp.method} onChange={e => setNewEp({ ...newEp, method: e.target.value })} style={{ padding: '0.5rem', background: '#0f172a', border: '1px solid #1e3a5f', color: '#f8fafc', borderRadius: '4px' }}>
                  <option value="GET">GET</option><option value="POST">POST</option><option value="PUT">PUT</option><option value="DELETE">DELETE</option>
                </select>
                <input type="number" value={newEp.rpm} onChange={e => setNewEp({ ...newEp, rpm: Number(e.target.value) })} placeholder="RPM" style={{ padding: '0.5rem', background: '#0f172a', border: '1px solid #1e3a5f', color: '#f8fafc', borderRadius: '4px' }} />
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                <input type="checkbox" checked={newEp.burstable} onChange={e => setNewEp({ ...newEp, burstable: e.target.checked })} /> Burstable
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                <input type="checkbox" checked={newEp.cached} onChange={e => setNewEp({ ...newEp, cached: e.target.checked })} /> Cached/CDN
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                <input type="checkbox" checked={newEp.dbQuery} onChange={e => setNewEp({ ...newEp, dbQuery: e.target.checked })} /> DB Query
              </label>
              <input type="range" min={0.1} max={5} step={0.1} value={newEp.weight} onChange={e => setNewEp({ ...newEp, weight: Number(e.target.value) })} style={{ width: '100%' }} />
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center' }}>Weight: {newEp.weight}</div>
            </div>
            <button onClick={addEndpoint} style={{ width: '100%', padding: '0.5rem', background: '#1e3a5f', border: 'none', color: '#f8fafc', borderRadius: '6px', cursor: 'pointer', marginBottom: '1rem' }}>+ Add Endpoint</button>

            <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Traffic Multiplier</label>
            <input type="range" min={1} max={20} value={traffic} onChange={e => setTraffic(Number(e.target.value))} style={{ width: '100%' }} />
            <div style={{ textAlign: 'center', color: '#38bdf8', fontWeight: '600' }}>{traffic}x baseline traffic</div>

            <button onClick={analyze} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: '600' }}>🚦 Analyze Capacity</button>
          </div>

          <div style={{ background: '#162032', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e3a5f' }}>
            <h3 style={{ marginBottom: '1rem' }}>📊 Capacity Plan</h3>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#38bdf8' }}>{result.peakTps}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Peak TPS</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#818cf8' }}>{result.maxRpm.toLocaleString()}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Max RPM</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>{result.dbPoolSize}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>DB Pool Size</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f59e0b' }}>${result.monthlyCost}/mo</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Infra Cost</div>
                  </div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Scaling Recommendation</div>
                  <div style={{ color: '#4ade80', fontWeight: '600' }}>{result.scaling}</div>
                </div>
                {result.alerts.length > 0 && (
                  <div style={{ background: '#1c1917', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #44403c' }}>
                    {result.alerts.map((a, i) => (
                      <div key={i} style={{ color: '#f59e0b', fontSize: '0.85rem', marginBottom: '0.25rem' }}>⚠️ {a}</div>
                    ))}
                  </div>
                )}
                <h4 style={{ marginBottom: '0.5rem' }}>Rate Limits</h4>
                {result.limits.map((l, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: '#0f172a', borderRadius: '4px', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
                    <span style={{ color: '#e2e8f0' }}>{l.endpoint}</span>
                    <span style={{ color: '#94a3b8' }}>{l.limit}</span>
                  </div>
                ))}
              </>
            ) : (
              <div style={{ color: '#71717a', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚦</div>
                <div>Capacity plan will appear here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
