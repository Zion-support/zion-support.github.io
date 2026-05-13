'use client';
import React, { useState } from 'react';

interface CheckResult {
  url: string;
  status: number;
  responseTime: number;
  timestamp: string;
  success: boolean;
}

interface MonitorTarget {
  name: string;
  url: string;
  expectedUptime: number;
  checks: CheckResult[];
}

const DEFAULT_TARGETS: MonitorTarget[] = [
  { name: 'Zion Tech Group', url: 'https://ziontechgroup.com', expectedUptime: 99.9, checks: [] },
  { name: 'Google', url: 'https://google.com', expectedUptime: 99.99, checks: [] },
  { name: 'GitHub', url: 'https://github.com', expectedUptime: 99.95, checks: [] },
];

const STATUS_COLORS: Record<number, string> = {
  200: '#22c55e',
  301: '#f59e0b',
  302: '#f59e0b',
  404: '#ef4444',
  500: '#dc2626',
  503: '#dc2626',
  0: '#6b7280',
};

export default function AutonomousUptimeMonitorPage() {
  const [targets, setTargets] = useState<MonitorTarget[]>(DEFAULT_TARGETS);
  const [running, setRunning] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newName, setNewName] = useState('');
  const [selectedTarget, setSelectedTarget] = useState<number>(0);

  const simulateChecks = async () => {
    setRunning(true);
    const updated = [...targets];

    for (let i = 0; i < updated.length; i++) {
      const checks: CheckResult[] = [];
      const baseUrl = updated[i].url;

      for (let j = 0; j < 24; j++) { // 24 hours of hourly checks
        const isOutage = Math.random() < 0.02; // 2% chance of failure per check
        const status = isOutage ? [500, 503, 404][Math.floor(Math.random() * 3)] : 200;
        const responseTime = isOutage ? 5000 + Math.random() * 10000 : 50 + Math.random() * 500;
        const hour = (new Date().getHours() - 23 + j + 24) % 24;

        checks.push({
          url: baseUrl,
          status,
          responseTime: Math.round(responseTime),
          timestamp: `${String(hour).padStart(2, '0')}:00`,
          success: status >= 200 && status < 400,
        });
      }

      updated[i].checks = checks;
    }

    setTargets(updated);
    setRunning(false);
  };

  const addTarget = () => {
    if (!newUrl || !newName) return;
    const url = newUrl.startsWith('http') ? newUrl : `https://${newUrl}`;
    setTargets([...targets, { name: newName, url, expectedUptime: 99.9, checks: [] }]);
    setNewUrl('');
    setNewName('');
  };

  const calcUptime = (checks: CheckResult[]) => {
    if (checks.length === 0) return null;
    const successCount = checks.filter(c => c.success).length;
    return (successCount / checks.length) * 100;
  };

  const calcAvgResponse = (checks: CheckResult[]) => {
    if (checks.length === 0) return 0;
    const successChecks = checks.filter(c => c.success);
    if (successChecks.length === 0) return 0;
    return Math.round(successChecks.reduce((sum, c) => sum + c.responseTime, 0) / successChecks.length);
  };

  const target = targets[selectedTarget];
  const uptime = target ? calcUptime(target.checks) : null;
  const avgResponse = target ? calcAvgResponse(target.checks) : 0;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0c1222 0%, #1a1a2e 50%, #16213e 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #22d3ee, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🟢 Autonomous Uptime Monitor</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Track website uptime, response times, and outage history with SLA reporting.</p>

        {/* Add new target */}
        <div style={{ background: '#1a1a2e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0f3460', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'end' }}>
            <div style={{ flex: 1 }}>
              <label style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Name</label>
              <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder="My Website" style={{ width: '100%', padding: '0.5rem', background: '#0c1222', border: '1px solid #0f3460', color: '#f8fafc', borderRadius: '6px' }} />
            </div>
            <div style={{ flex: 2 }}>
              <label style={{ color: '#94a3b8', fontSize: '0.8rem' }}>URL</label>
              <input type="text" value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder="https://example.com" style={{ width: '100%', padding: '0.5rem', background: '#0f3460', color: '#f8fafc', borderRadius: '6px' }} />
            </div>
            <button onClick={addTarget} style={{ padding: '0.5rem 1rem', background: '#06b6d4', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>+ Add</button>
            <button onClick={simulateChecks} disabled={running} style={{ padding: '0.5rem 1rem', background: running ? '#374151' : '#22d3ee', color: 'white', border: 'none', borderRadius: '6px', cursor: running ? 'not-allowed' : 'pointer', fontWeight: '600' }}>
              {running ? '⏳ Checking...' : '▶️ Run 24h Simulation'}
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
          {/* Left panel - Targets list */}
          <div style={{ background: '#1a1a2e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0f3460' }}>
            <h3 style={{ color: '#22d3ee', marginBottom: '1rem' }}>📍 Monitored Sites</h3>
            {targets.map((t, i) => {
              const tUptime = calcUptime(t.checks);
              const statusColor = tUptime === null ? '#6b7280' : tUptime >= t.expectedUptime ? '#22c55e' : tUptime >= 99 ? '#f59e0b' : '#ef4444';
              return (
                <button
                  key={i}
                  onClick={() => setSelectedTarget(i)}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.75rem',
                    marginBottom: '0.5rem',
                    background: selectedTarget === i ? '#0f3460' : '#0c1222',
                    border: `1px solid ${selectedTarget === i ? '#22d3ee' : '#1a1a2e'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#f8fafc'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600' }}>{t.name}</span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: statusColor, display: 'inline-block' }}></span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{t.url}</div>
                  {tUptime !== null && (
                    <div style={{ fontSize: '0.75rem', color: statusColor, marginTop: '0.25rem' }}>
                      {tUptime.toFixed(2)}% uptime | {calcAvgResponse(t.checks)}ms avg
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right panel - Details */}
          <div style={{ background: '#1a1a2e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0f3460' }}>
            <h3 style={{ color: '#22d3ee', marginBottom: '1rem' }}>📊 {target.name} — Last 24 Hours</h3>

            {uptime !== null ? (
              <>
                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Uptime', value: `${uptime.toFixed(2)}%`, color: uptime >= target.expectedUptime ? '#22c55e' : '#ef6633500', 'color': '#4ade80' },
                    { label: 'SLA Target', value: `${target.expectedUptime}%`, color: '#60a5fa' },
                    { label: 'Avg Response', value: `${avgResponse}ms`, color: avgResponse < 500 ? '#4ade80' : avgResponse < 1000 ? '#f59e0b' : '#ef67171' },
                    { label: 'Total Checks', value: `${target.checks.length}`, color: '#22d3ee' },
                  ].map((stat, i) => (
                    <div key={i} style={{ background: '#0c1222', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: stat.color }}>{stat.value}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Timeline visualization */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#94a3b8', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Response Time Timeline</h4>
                  <div style={{ display: 'flex', alignItems: 'end', gap: '2px', height: 120 }}>
                    {target.checks.map((c, i) => {
                      const height = Math.min(100, (c.responseTime / 1000) * 100);
                      return (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${height}%`,
                            background: c.success ? '#22c55e' : '#ef4444',
                            borderRadius: '2px 2px 0 0',
                            opacity: 0.8,
                            transition: 'height 0.3s',
                            cursor: 'pointer'
                          }}
                          title={`${c.timestamp}: ${c.responseTime}ms (${c.status})`}
                        ></div>
                      );
                    })}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#64748b', marginTop: '0.25rem' }}>
                    <span>-24h</span>
                    <span>-12h</span>
                    <span>Now</span>
                  </div>
                </div>

                {/* Status codes legend */}
                <div>
                  <h4 style={{ color: '#94a3b8', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Status Code Distribution</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                    {Object.entries(
                      target.checks.reduce((acc: Record<number, number>, c) => {
                        acc[c.status] = (acc[c.status] || 0) + 1;
                        return acc;
                      }, {} as Record<number, number>)
                    ).sort(([a], [b]) => Number(a) - Number(b)).map(([code, count]) => (
                      <div key={code} style={{
                        background: '#0c1222',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        textAlign: 'center',
                        border: `1px solid ${STATUS_COLORS[Number(code)] || '#6b7280'}`
                      }}>
                        <div style={{ fontWeight: '700', color: STATUS_COLORS[Number(code)] || '#6b7280' }}>HTTP {code}</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{count} checks</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ color: '#22d3ee', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📡</div>
                <div>Run simulation to see uptime data</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                  Simulates 24 hourly checks per target
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
