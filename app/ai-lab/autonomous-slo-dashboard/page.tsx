'use client';
import React, { useState } from 'react';

interface Svc { name: string; slo: number; availability: number; budget: number; mttr: number; }

export default function AutonomousSloDashboardPage() {
  const [services, setServices] = useState<Svc[]>([
    { name: 'API Gateway', slo: 99.9, availability: 99.92, budget: 100, mttr: 15 },
    { name: 'Auth Service', slo: 99.95, availability: 99.97, budget: 100, mttr: 8 },
    { name: 'Database', slo: 99.99, availability: 100, budget: 100, mttr: 0 },
  ]);
  const [n, setN] = useState({ name: '', slo: 99.9, availability: 99.95, budget: 100, mttr: 10 });
  const [result, setResult] = useState<any>(null);

  const add = () => { if (!n.name) return; setServices([...services, { ...n }]); setN({ name: '', slo: 99.9, availability: 99.95, budget: 100, mttr: 10 }); };
  const rm = (i: number) => setServices(services.filter((_, j) => j !== i));

  const analyze = () => {
    const avgAvail = services.reduce((s, sv) => s + sv.availability, 0) / services.length;
    const avgBudget = services.reduce((s, sv) => s + sv.budget, 0) / services.length;
    const burnRates = services.map(sv => {
      const eb = 100 - sv.slo; const ea = 100 - sv.availability;
      const rate = eb > 0 ? (ea / eb) : 0;
      return { service: sv.name, rate: rate.toFixed(2), status: rate > 14.4 ? 'CRITICAL' : rate > 6 ? 'HIGH' : rate > 1 ? 'LOW' : 'OK' };
    });
    const alerts: string[] = [];
    services.filter(s => s.budget < 40).forEach(s => alerts.push(s.name + ': Budget near exhaustion (' + s.budget + '%)'));
    services.filter(s => s.mttr > 20).forEach(s => alerts.push(s.name + ': High MTTR (' + s.mttr + 'min). Review runbooks.'));
    if (avgAvail < 99.9) alerts.push('⚠️ Overall availability below 99.9%');
    setResult({ avgAvail: avgAvail.toFixed(2), avgBudget: Math.round(avgBudget), burnRates, alerts });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a192f 0%, #1a0a2e 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #64ffda, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📊 Autonomous SLO/SLI Dashboard Builder</h1>
        <p style={{ color: '#8892b0', marginBottom: '2rem', fontSize: '1.1rem' }}>Define service SLOs, track error budgets, calculate burn rates, and get alerting recommendations.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#112240', padding: '1.5rem', borderRadius: '12px', border: '1px solid #233554' }}>
            <h3 style={{ color: '#64ffda', marginBottom: '1rem' }}>🔧 Services</h3>
            {services.map((s, i) => (
              <div key={i} style={{ background: '#0a192f', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '600' }}>{s.name}</span>
                  <button onClick={() => rm(i)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>✕</button>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8892b0', marginTop: '0.25rem' }}>SLO: {s.slo}% • Avail: {s.availability}% • Budget: {s.budget}% • MTTR: {s.mttr}m</div>
              </div>
            ))}
            <div style={{ marginTop: '1rem' }}>
              <input type="text" value={n.name} onChange={e => setN({ ...n, name: e.target.value })} placeholder="Service name" style={{ width: '100%', padding: '0.5rem', background: '#0a192f', border: '1px solid #233554', color: '#f8fafc', borderRadius: '4px', marginBottom: '0.5rem' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <input type="number" step={0.01} value={n.slo} onChange={e => setN({ ...n, slo: Number(e.target.value) })} placeholder="SLO %" style={{ padding: '0.5rem', background: '#0a192f', border: '1px solid #233554', color: '#f8fafc', borderRadius: '4px' }} />
                <input type="number" step={0.01} value={n.availability} onChange={e => setN({ ...n, availability: Number(e.target.value) })} placeholder="Actual %" style={{ padding: '0.5rem', background: '#0a192f', border: '1px solid #233554', color: '#f8fafc', borderRadius: '4px' }} />
              </div>
            </div>
            <button onClick={add} style={{ width: '100%', padding: '0.5rem', marginTop: '0.75rem', background: '#233554', color: '#64ffda', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>+ Add Service</button>
            <button onClick={analyze} style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>📊 Analyze SLOs</button>
          </div>

          <div style={{ background: '#112240', padding: '1.5rem', borderRadius: '12px', border: '1px solid #233554' }}>
            {result ? (<>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#0a192f', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: Number(result.avgAvail) >= 99.9 ? '#64ffda' : '#ef4444' }}>{result.avgAvail}%</div>
                  <div style={{ color: '#8892b0', fontSize: '0.75rem' }}>Avg Availability</div>
                </div>
                <div style={{ background: '#0a192f', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: result.avgBudget > 70 ? '#64ffda' : '#ef4444' }}>{result.avgBudget}%</div>
                  <div style={{ color: '#8892b0', fontSize: '0.75rem' }}>Avg Budget</div>
                </div>
                <div style={{ background: '#0a192f', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#a78bfa' }}>{result.burnRates.length}</div>
                  <div style={{ color: '#8892b0', fontSize: '0.75rem' }}>Services</div>
                </div>
              </div>
              <div style={{ background: '#0a192f', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <div style={{ color: '#64ffda', fontWeight: '600', marginBottom: '0.5rem' }}>🔥 Burn Rates</div>
                {result.burnRates.map((br: any, i: number) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', padding: '0.25rem 0', color: br.status === 'CRITICAL' ? '#ef4444' : br.status === 'HIGH' ? '#f97316' : '#8892b0' }}>
                    <span>{br.service}</span><span>{br.status} ({br.rate}x)</span>
                  </div>
                ))}
              </div>
              {result.alerts.length > 0 && (
                <div style={{ background: '#1c1917', border: '1px solid #44403c', padding: '1rem', borderRadius: '8px' }}>
                  {result.alerts.map((a: string, i: number) => <div key={i} style={{ color: '#f59e0b', fontSize: '0.85rem', marginBottom: '0.25rem' }}>⚠️ {a}</div>)}
                </div>
              )}
            </>) : (
              <div style={{ color: '#475569', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div><div>SLO analysis will appear here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}