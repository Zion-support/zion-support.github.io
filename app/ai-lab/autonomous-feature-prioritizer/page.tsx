'use client';

import React, { useState } from 'react';

interface FeatureRequest {
  id: number;
  title: string;
  category: string;
  reach: number;      // users affected (1-100)
  impact: number;     // 1=low, 3=medium, 5=high
  confidence: number; // % certainty
  effort: number;     // person-weeks
  score: number;
}

export default function AutonomousFeaturePrioritizerPage() {
  const [requests, setRequests] = useState<FeatureRequest[]>([
    { id: 1, title: 'Dark mode theme', category: 'UX', reach: 80, impact: 3, confidence: 90, effort: 2, score: 0 },
    { id: 2, title: 'API webhooks', category: 'Integrations', reach: 40, impact: 5, confidence: 75, effort: 6, score: 0 },
    { id: 3, title: 'Export to CSV', category: 'Data', reach: 60, impact: 3, confidence: 85, effort: 1, score: 0 },
    { id: 4, title: 'SSO / SAML login', category: 'Security', reach: 25, impact: 5, confidence: 70, effort: 8, score: 0 },
    { id: 5, title: 'Mobile app', category: 'Platform', reach: 70, impact: 4, confidence: 60, effort: 12, score: 0 },
  ]);
  const [newReq, setNewReq] = useState({ title: '', category: 'UX', reach: 50, impact: 3, confidence: 70, effort: 4 });
  const [scoring, setScoring] = useState<'RICE' | 'WSJF'>('RICE');

  const addRequest = () => {
    if (!newReq.title.trim()) return;
    setRequests([...requests, { id: Date.now(), ...newReq, score: 0 }]);
    setNewReq({ title: '', category: 'UX', reach: 50, impact: 3, confidence: 70, effort: 4 });
  };

  const removeRequest = (id: number) => setRequests(requests.filter(r => r.id !== id));

  const calculateScores = () => {
    setRequests(requests.map(r => {
      if (scoring === 'RICE') {
        r.score = (r.reach * r.impact * (r.confidence / 100)) / r.effort;
      } else {
        // WSJF = (Business Value + Time Criticality + Risk Reduction) / Job Duration
        const bv = r.impact;
        const tc = Math.round(r.reach / 20);
        const rr = Math.round(r.confidence / 20);
        r.score = (bv + tc + rr) / r.effort;
      }
      return r;
    }).sort((a, b) => b.score - a.score));
  };

  const categoryColors: Record<string, string> = {
    'UX': '#a78bfa', 'Integrations': '#38bdf8', 'Data': '#4ade80',
    'Security': '#f87171', 'Platform': '#fbbf24', 'Performance': '#22d3ee',
    'Analytics': '#f472b6', 'default': '#94a3b8'
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #164e63 0%, #422006 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #22d3ee, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🎯 Autonomous Feature Request Prioritizer</h1>
        <p style={{ color: '#a7f3d0', marginBottom: '2rem', fontSize: '1.1rem' }}>Score and rank feature requests using RICE or WSJF frameworks. Balance reach, impact, confidence, and effort to find the highest-value work.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#0c4a6e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #164e63' }}>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>📝 Feature Requests</span>
              <select value={scoring} onChange={e => setScoring(e.target.value as any)} style={{ padding: '0.25rem 0.5rem', background: '#0f172a', border: '1px solid #164e63', color: '#f8fafc', borderRadius: '4px', fontSize: '0.85rem' }}>
                <option value="RICE">RICE</option><option value="WSJF">WSJF</option>
              </select>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {[['Title', newReq.title, (v: string) => setNewReq({ ...newReq, title: v }), false],
                ['Category', newReq.category, (v: string) => setNewReq({ ...newReq, category: v }), false, ['UX', 'Integrations', 'Data', 'Security', 'Platform', 'Performance', 'Analytics']]
              ].map(([label, val, setter, isSelect, options]) => (
                <div key={label as string} style={isSelect ? { gridColumn: '1' } : { gridColumn: '1 / -1' }}>
                  <label style={{ color: '#67e8f9', fontSize: '0.75rem' }}>{label}</label>
                  {isSelect ? (
                    <select value={val as string} onChange={e => (setter as any)(e.target.value)} style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid #164e63', color: '#f8fafc', borderRadius: '4px' }}>
                      {(options as string[]).map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input type="text" value={val as string} onChange={e => (setter as any)(e.target.value)} style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid #164e63', color: '#f8fafc', borderRadius: '4px' }} />
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {[['Reach (1-100)', newReq.reach, 'reach', 100], ['Impact (1-5)', newReq.impact, 'impact', 5], ['Confidence (%)', newReq.confidence, 'confidence', 100], ['Effort (weeks)', newReq.effort, 'effort', 20]].map(([label, val, key, max]) => (
                <div key={label as string}>
                  <label style={{ color: '#67e8f9', fontSize: '0.7rem' }}>{label}</label>
                  <input type="number" value={val as number} onChange={e => setNewReq({ ...newReq, [key as string]: Number(e.target.value) })} max={max} min={1} style={{ width: '100%', padding: '0.3rem', background: '#0f172a', border: '1px solid #164e63', color: '#f8fafc', borderRadius: '4px' }} />
                </div>
              ))}
            </div>
            <button onClick={addRequest} style={{ width: '100%', padding: '0.5rem', background: '#164e63', border: '1px solid #0e7490', color: '#f8fafc', borderRadius: '6px', cursor: 'pointer', marginBottom: '0.5rem' }}>+ Add Feature Request</button>
            <button onClick={calculateScores} style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(90deg, #0891b2, #ca8a04)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>🎯 Calculate {scoring} Scores</button>

            <div style={{ marginTop: '1rem' }}>
              <div style={{ color: '#67e8f9', fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: '600' }}>{scoring === 'RICE' ? 'RICE Formula' : 'WSJF Formula'}</div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                {scoring === 'RICE' ? 'Score = (Reach × Impact × Confidence%) / Effort' : 'Score = (Business Value + Time Criticality + Risk Reduction) / Job Duration'}
              </div>
            </div>
          </div>

          <div style={{ background: '#0c4a6e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #164e63' }}>
            <h3 style={{ marginBottom: '1rem' }}>📊 Prioritized Backlog</h3>
            {requests.filter(r => r.score > 0).length === 0 ? (
              <div style={{ color: '#0891b2', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                <div>Add requests and click Calculate</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {requests.filter(r => r.score > 0).map((r, i) => (
                  <div key={r.id} style={{ background: '#0f172a', padding: '0.75rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: i === 0 ? '#4ade80' : i === 1 ? '#38bdf8' : i === 2 ? '#fbbf24' : '#94a3b8', minWidth: 30 }}>{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '600' }}>{r.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        Reach:{r.reach} · Impact:{r.impact} · Confidence:{r.confidence}% · Effort:{r.effort}wk
                      </div>
                    </div>
                    <span style={{ background: categoryColors[r.category] || categoryColors.default, padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', color: '#0f172a', fontWeight: '600' }}>{r.category}</span>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: i === 0 ? '#4ade80' : '#e2e8f0' }}>{r.score.toFixed(1)}</div>
                    <button onClick={() => removeRequest(r.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.85rem' }}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}