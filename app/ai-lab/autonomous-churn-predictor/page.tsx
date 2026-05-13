'use client';

import React, { useState } from 'react';

interface ChurnResult {
  churnRate: number;
  annualChurn: number;
  revenueAtRisk: number;
  retainedRevenue: number;
  keyDrivers: { driver: string; impact: number; recommendation: string }[];
  segments: { name: string; churnRate: number; users: number }[];
  projections: { month: string; retained: number; churned: number; revenue: number }[];
  healthScore: number;
}

export default function AutonomousChurnPredictorPage() {
  const [users, setUsers] = useState(1000);
  const [churned, setChurned] = useState(50);
  const [mrr, setMrr] = useState(49000);
  const [avgTenure, setAvgTenure] = useState(14);
  const [nps, setNps] = useState(35);
  const [supportTickets, setSupportTickets] = useState(120);
  const [result, setResult] = useState<ChurnResult | null>(null);

  const predict = () => {
    const churnRate = churned / users * 100;
    const annualChurn = 1 - Math.pow(1 - churnRate / 100, 12);
    const revenueAtRisk = mrr * annualChurn;
    const retainedRevenue = mrr * (1 - annualChurn);
    const healthScore = Math.max(0, Math.min(100, 50 + (100 - churnRate) * 0.5 + nps * 0.3 - (supportTickets / users * 100) * 0.2));

    const drivers = [
      { driver: 'Monthly Churn Rate', impact: Math.min(100, churnRate * 10), recommendation: churnRate > 5 ? 'Urgent: Churn >5%/mo. Run win-back campaigns.' : churnRate > 3 ? 'Monitor closely. Improve onboarding.' : 'Healthy level. Focus on retention programs.' },
      { driver: 'NPS Score', impact: nps < 0 ? 80 : nps < 20 ? 60 : nps < 40 ? 40 : 20, recommendation: nps < 0 ? 'Critical: More detractors than promoters. Address root causes.' : nps < 30 ? 'Below average. Survey churned users for feedback.' : 'Good NPS. Leverage promoters for referrals.' },
      { driver: 'Support Ticket Volume', impact: Math.min(100, (supportTickets / users) * 200), recommendation: supportTickets / users > 0.15 ? 'High ticket ratio. Improve self-service docs.' : 'Support load manageable. Consider proactive outreach.' },
      { driver: 'Average Tenure', impact: Math.max(0, 50 - avgTenure * 3), recommendation: avgTenure < 6 ? 'Very short tenure. Focus on first 30-day experience.' : avgTenure < 12 ? 'Moderate tenure. Implement milestone-based engagement.' : 'Strong tenure. Focus on upsell/cross-sell.' },
    ];

    const segments = [
      { name: 'New Users (<3 mo)', churnRate: Math.round(churnRate * 1.8), users: Math.round(users * 0.25) },
      { name: 'Growing (3-12 mo)', churnRate: Math.max(1, Math.round(churnRate * 0.8)), users: Math.round(users * 0.45) },
      { name: 'Established (12+ mo)', churnRate: Math.max(1, Math.round(churnRate * 0.4)), users: Math.round(users * 0.3) },
    ];

    const projections = Array.from({ length: 6 }, (_, i) => {
      const retained = Math.round(users * Math.pow(1 - annualChurn, i + 1));
      const churned = users - retained;
      const revenue = Math.round(retained * (mrr / users));
      return { month: `Month ${i + 1}`, retained, churned, revenue };
    });

    setResult({ churnRate, annualChurn, revenueAtRisk, retainedRevenue, keyDrivers: drivers, segments, projections, healthScore: Math.round(healthScore) });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #431407 0%, #1e1b4b 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #fb923c, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📉 Autonomous Churn Predictor</h1>
        <p style={{ color: '#fed7aa', marginBottom: '2rem', fontSize: '1.1rem' }}>Model user churn from key metrics. Get revenue-at-risk analysis, segment breakdowns, and 6-month projections with actionable retention recommendations.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #431407' }}>
            <h3 style={{ marginBottom: '1rem', color: '#fb923c' }}>📊 Input Metrics</h3>
            {[['Total Active Users', users, setUsers], ['Churned This Month', churned, setChurned], ['Monthly Revenue ($)', mrr, setMrr], ['Avg Tenure (months)', avgTenure, setAvgTenure], ['NPS Score (-100 to 100)', nps, setNps], ['Monthly Support Tickets', supportTickets, setSupportTickets]].map(
              ([label, val, setter]) => (
              <div key={label as string} style={{ marginBottom: '0.75rem' }}>
                <label style={{ color: '#c4b5fd', fontSize: '0.8rem', display: 'block', marginBottom: '0.2rem' }}>{label}</label>
                <input type="number" value={val as number} onChange={e => (setter as any)(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid #431407', color: '#f8fafc', borderRadius: '4px' }} />
              </div>
            ))}
            <button onClick={predict} style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', borderRadius: '8px', background: 'linear-gradient(90deg, #ea580c, #7c3aed)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: '600' }}>📉 Predict Churn</button>
          </div>

          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #431407' }}>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Health Score', val: `${result.healthScore}%`, color: result.healthScore >= 70 ? '#4ade80' : result.healthScore >= 50 ? '#facc15' : '#f87171' },
                    { label: 'Mo. Churn', val: `${result.churnRate.toFixed(1)}%`, color: result.churnRate <= 3 ? '#4ade80' : result.churnRate <= 5 ? '#facc15' : '#f87171' },
                    { label: 'Annual Churn', val: `${(result.annualChurn * 100).toFixed(1)}%`, color: '#38bdf8' },
                    { label: 'Revenue at Risk', val: `$${Math.round(result.revenueAtRisk).toLocaleString()}`, color: '#f87171' },
                  ].map((m, i) => (
                    <div key={i} style={{ background: '#1e1b4b', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: m.color }}>{m.val}</div>
                      <div style={{ color: '#c4b5fd', fontSize: '0.75rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#1e1b4b', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#fb923c', fontWeight: '600', marginBottom: '0.5rem' }}>🎯 Key Drivers</div>
                    {result.keyDrivers.map((d, i) => (
                      <div key={i} style={{ marginBottom: '0.5rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{d.driver} <span style={{ color: d.impact > 60 ? '#f87171' : '#4ade80' }}>({d.impact}%)</span></div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{d.recommendation}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#1e1b4b', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#fb923c', fontWeight: '600', marginBottom: '0.5rem' }}>👥 Segment Churn</div>
                    {result.segments.map((s, i) => (
                      <div key={i} style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.85rem' }}>{s.name} ({s.users})</span>
                        <span style={{ color: s.churnRate > 5 ? '#f87171' : '#4ade80', fontWeight: '600' }}>{s.churnRate}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#1e1b4b', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#fb923c', fontWeight: '600', marginBottom: '0.5rem' }}>📈 6-Month Projection</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', fontSize: '0.7rem', textAlign: 'center' }}>
                    {result.projections.map((p, i) => (
                      <div key={i} style={{ background: '#0f172a', padding: '0.5rem', borderRadius: '4px' }}>
                        <div style={{ color: '#e2e8f0', fontWeight: '600' }}>{p.month}</div>
                        <div style={{ color: '#4ade80' }}>{p.retained} users</div>
                        <div style={{ color: '#f87171' }}>{p.churned} lost</div>
                        <div style={{ color: '#38bdf8' }}>${p.revenue.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ color: '#71717a', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📉</div>
                <div>Churn predictions will appear here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
