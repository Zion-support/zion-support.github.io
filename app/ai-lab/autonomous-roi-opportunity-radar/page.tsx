'use client';
import React, { useState } from 'react';

interface Opp { id: number; area: string; title: string; desc: string; timeSaved: number; costReduction: number; effort: number; impact: number; }
const OPPS: Opp[] = [
  { id: 1, area: 'Customer Support', title: 'Auto-ticket routing + AI responses', desc: 'Classify and respond to common tickets automatically.', timeSaved: 15, costReduction: 3000, effort: 3, impact: 90 },
  { id: 2, area: 'Marketing', title: 'Social media scheduling dashboard', desc: 'Auto-generate and schedule posts across platforms.', timeSaved: 8, costReduction: 2000, effort: 4, impact: 70 },
  { id: 3, area: 'Engineering', title: 'Automated code review bot', desc: 'Static analysis + PR summaries before human review.', timeSaved: 5, costReduction: 4000, effort: 2, impact: 85 },
  { id: 4, area: 'Sales', title: 'Lead scoring with email enrichment', desc: 'Auto-enrich inbound leads and score for prioritization.', timeSaved: 10, costReduction: 5000, effort: 3, impact: 95 },
  { id: 5, area: 'Operations', title: 'Invoice processing automation', desc: 'OCR + auto-match invoices to purchase orders.', timeSaved: 20, costReduction: 3500, effort: 5, impact: 80 },
  { id: 6, area: 'HR', title: 'Employee onboarding workflow', desc: 'Auto-provision accounts, send welcome materials.', timeSaved: 6, costReduction: 1500, effort: 2, impact: 65 },
  { id: 7, area: 'Finance', title: 'Expense report automation', desc: 'Scan receipts, auto-categorize, flag anomalies.', timeSaved: 12, costReduction: 2500, effort: 4, impact: 75 },
  { id: 8, area: 'DevOps', title: 'Infrastructure cost optimizer', desc: 'Auto-scale, right-size instances, spot bidding.', timeSaved: 3, costReduction: 8000, effort: 6, impact: 95 },
];

export default function AutonomousRoiOpportunityRadarPage() {
  const [teamSize, setTeamSize] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [picked, setPicked] = useState<Set<number>>(new Set([1,3,4,8]));

  const toggle = (id: number) => setPicked(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const sel = OPPS.filter(o => picked.has(o.id));
  const annualSavings = sel.reduce((s, w) => s + w.costReduction * 12 + w.timeSaved * hourlyRate * 52, 0);
  const annualHours = sel.reduce((s, w) => s + w.timeSaved * 52, 0);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a192f 0%, #27272a 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #22d3ee, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ROI Opportunity Radar</h1>
        <p style={{ color: '#a8a29e', marginBottom: '2rem', fontSize: '1.1rem' }}>Click opportunities to select. See total savings and payback analysis.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#27272a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #44403c' }}>
            <h3 style={{ color: '#22d3ee', marginBottom: '1rem' }}>Settings</h3>
            <label style={{ color: '#a8a29e', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Team Size</label>
            <input type="number" value={teamSize} onChange={e => setTeamSize(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', background: '#0f172a', border: '1px solid #44403c', color: '#f8fafc', borderRadius: '4px' }} />
            <label style={{ color: '#a8a29e', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>Hourly Rate (USD)</label>
            <input type="number" value={hourlyRate} onChange={e => setHourlyRate(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', background: '#0f172a', border: '1px solid #44403c', color: '#f8fafc', borderRadius: '4px' }} />
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', lineHeight: 1.8 }}>
              <div style={{ color: '#4ade80', fontWeight: '600' }}>{'$'} {annualSavings.toLocaleString()}/yr</div>
              <div style={{ color: '#fbbf24' }}>{annualHours.toLocaleString()} hrs saved/yr</div>
              <div style={{ color: '#60a5fa' }}>{sel.length} tools selected</div>
            </div>
          </div>
          <div style={{ background: '#27272a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #44403c' }}>
            <h3 style={{ marginBottom: '1rem' }}>Opportunities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {OPPS.map(w => {
                const active = picked.has(w.id);
                const score = Math.round((w.timeSaved * hourlyRate * 52 + w.costReduction * 12) / (w.effort * 15000) * 100);
                return (
                  <div key={w.id} onClick={() => toggle(w.id)} style={{ background: active ? '#14532d' : '#0f172a', padding: '1rem', borderRadius: '8px', border: active ? '1px solid #22c55e' : '1px solid #44403c', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600', color: '#22d3ee' }}>{w.title}</span>
                      <span style={{ color: w.impact > 85 ? '#4ade80' : '#fbbf24', fontWeight: '600' }}>{w.impact}%</span>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{w.desc}</div>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: '#a8a29e' }}>
                      <span>Save: {w.timeSaved}h/wk</span>
                      <span>ROI: {'$'}{(w.costReduction + w.timeSaved * hourlyRate * 4).toLocaleString()}/mo</span>
                      <span>Effort: {w.effort}wk</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}