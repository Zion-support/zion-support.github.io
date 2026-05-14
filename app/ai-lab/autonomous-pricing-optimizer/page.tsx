'use client';

import React, { useState } from 'react';

interface PricingTier { name: string; price: number; features: number; conversionRate: number; mrr: number; }
interface PricingResult { tiers: PricingTier[]; totalMrr: number; blendedCAC: number; ltvCacRatio: number; optimalPrice: number; sensitivity: string[]; competitors: { name: string; price: number }[]; }

const COMPETITORS = [
  { name: 'Competitor A', price: 29 },
  { name: 'Competitor B', price: 49 },
  { name: 'Competitor C', price: 99 },
  { name: 'Open Source', price: 0 },
  { name: 'Enterprise Alternative', price: 199 },
];

export default function AutonomousPricingOptimizerPage() {
  const [tiers, setTiers] = useState<PricingTier[]>([
    { name: 'Starter', price: 19, features: 5, conversionRate: 8, mrr: 1520 },
    { name: 'Professional', price: 49, features: 10, conversionRate: 4, mrr: 3920 },
    { name: 'Enterprise', price: 149, features: 15, conversionRate: 1.5, mrr: 4470 },
  ]);
  const [targetUsers, setTargetUsers] = useState(10000);
  const [cac, setCac] = useState(150);
  const [result, setResult] = useState<PricingResult | null>(null);

  const optimize = () => {
    const totalUsers = tiers.reduce((s, t) => s + Math.round(targetUsers * t.conversionRate / 100), 0);
    const totalMrr = tiers.reduce((s, t) => s + t.price * Math.round(targetUsers * t.conversionRate / 100), 0);
    const annualRevenue = totalMrr * 12;
    const totalAcquisitionCost = totalUsers * cac;
    const blendedCAC = totalUsers > 0 ? totalAcquisitionCost / totalUsers : 0;
    const avgLifetimeMonths = 18;
    const ltv = totalMrr / totalUsers * avgLifetimeMonths;
    const ltvCacRatio = blendedCAC > 0 ? ltv / blendedCAC : 0;

    // Price sensitivity analysis
    const sensitivity: string[] = [];
    const avgPrice = tiers.reduce((s, t) => s + t.price, 0) / tiers.length;
    const belowMarket = avgPrice < COMPETITORS.filter(c => c.price > 0).reduce((s, c) => s + c.price, 0) / COMPETITORS.filter(c => c.price > 0).length;
    if (belowMarket) sensitivity.push('💡 Your pricing is below market average — test 20-30% increase on mid-tier');
    if (ltvCacRatio > 5) sensitivity.push('✅ Excellent LTV:CAC ratio (>{1}):1 — consider aggressive user acquisition');
    else if (ltvCacRatio > 3) sensitivity.push('🟢 Healthy LTV:CAC ratio ({ratio}):1 — sustainable growth');
    else sensitivity.push('⚠️ Low LTV:CAC ratio ({ratio}):1 — improve retention or reduce CAC');

    const optimalPrice = Math.round(avgPrice * (ltvCacRatio > 3 ? 1.2 : 1));

    setResult({ tiers, totalMrr, blendedCAC, ltvCacRatio, optimalPrice, sensitivity, competitors: COMPETITORS });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #854d0e 0%, #713f12 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>💰 Autonomous Pricing Strategy Optimizer</h1>
        <p style={{ color: '#fde68a', marginBottom: '2rem', fontSize: '1.1rem' }}>Model your pricing tiers, analyze LTV:CAC ratios, benchmark against competitors, and get elasticity-based recommendations.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#422006', padding: '1.5rem', borderRadius: '12px', border: '1px solid #854d0e' }}>
            <h3 style={{ marginBottom: '1rem' }}>📊 Pricing Tiers</h3>
            {tiers.map((tier, i) => (
              <div key={i} style={{ background: '#713f12', padding: '1rem', borderRadius: '8px', marginBottom: '0.75rem' }}>
                <div style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{tier.name}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                  {[{ label: 'Monthly Price ($)', val: tier.price, key: 'price' as const, type: 'number' },
                    { label: 'Features Count', val: tier.features, key: 'features' as const, type: 'number' },
                    { label: 'Conversion Rate (%)', val: tier.conversionRate, key: 'conversionRate' as const, type: 'number' }].map(f => (
                    <div key={f.key}>
                      <label style={{ color: '#fde68a', fontSize: '0.75rem' }}>{f.label}</label>
                      <input type="number" value={f.val} onChange={e => {
                        const newTiers = [...tiers];
                        (newTiers[i] as any)[f.key] = Number(e.target.value);
                        setTiers(newTiers);
                      }} style={{ width: '100%', padding: '0.5rem', background: '#422006', border: '1px solid #854d0e', color: '#f8fafc', borderRadius: '4px' }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div><label style={{ color: '#fde68a', fontSize: '0.75rem' }}>Target Users (monthly)</label><input type="number" value={targetUsers} onChange={e => setTargetUsers(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', background: '#422006', border: '1px solid #854d0e', color: '#f8fafc', borderRadius: '4px' }} /></div>
              <div><label style={{ color: '#fde68a', fontSize: '0.75rem' }}>CAC ($)</label><input type="number" value={cac} onChange={e => setCac(Number(e.target.value))} style={{ width: '100%', padding: '0.5rem', background: '#422006', border: '1px solid #854d0e', color: '#f8fafc', borderRadius: '4px' }} /></div>
            </div>
            <button onClick={optimize} style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(90deg, #d97706, #b45309)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>💰 Optimize Pricing</button>
          </div>

          <div style={{ background: '#422006', padding: '1.5rem', borderRadius: '12px', border: '1px solid #854d0e' }}>
            <h3 style={{ marginBottom: '1rem' }}>📈 Optimization Results</h3>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#713f12', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#4ade80' }}>${result.totalMrr.toLocaleString()}/mo</div>
                    <div style={{ color: '#fde68a', fontSize: '0.8rem' }}>Total MRR</div>
                  </div>
                  <div style={{ background: '#713f12', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: result.ltvCacRatio > 3 ? '#4ade80' : '#f59e0b' }}>{result.ltvCacRatio.toFixed(1)}:1</div>
                    <div style={{ color: '#fde68a', fontSize: '0.8rem' }}>LTV:CAC Ratio</div>
                  </div>
                  <div style={{ background: '#713f12', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ color: '#38bdf8', fontWeight: '600' }}>Optimal Avg Price: ${result.optimalPrice}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Blended CAC: ${result.blendedCAC.toFixed(0)}</div>
                  </div>
                  <div style={{ background: '#713f12', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ color: '#f59e0b', fontWeight: '600' }}>💡 Recommendation</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{result.sensitivity[0]?.substring(0, 60)}...</div>
                  </div>
                </div>

                <h4 style={{ marginBottom: '0.5rem' }}>📊 Competitor Benchmark</h4>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'end', height: 100, marginBottom: '1rem' }}>
                  {result.competitors.map((c, i) => (
                    <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ height: `${Math.min(100, (c.price / 200) * 100)}%`, background: c.price === 0 ? '#6b7280' : c.price < (result.tiers.reduce((s, t) => s + t.price, 0) / result.tiers.length) ? '#4ade80' : '#f59e0b', borderRadius: '4px 4px 0 0' }}></div>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>${c.price}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#1c1917', padding: '0.75rem', borderRadius: '8px', border: '1px solid #44403c' }}>
                  {result.sensitivity.map((s, i) => (
                    <div key={i} style={{ color: '#e2e8f0', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{s}</div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ color: '#71717a', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                <div>Optimization results will appear here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}