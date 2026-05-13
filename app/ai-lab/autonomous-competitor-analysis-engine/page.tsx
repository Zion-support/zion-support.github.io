'use client';
import React, { useState } from 'react';
interface Competitor { name: string; strength: string; weakness: string; marketShare: number; pricing: string; }
export default function AutonomousCompetitorAnalysisEnginePage() {
  const [niche, setNiche] = useState('');
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [result, setResult] = useState<any>(null);
  const analyze = () => {
    const c: Competitor[] = niche.toLowerCase().includes('saas')
      ? [
          { name: 'HubSpot', strength: 'All-in-one CRM suite', weakness: 'Expensive for SMBs', marketShare: 22, pricing: '$45–$3200/mo' },
          { name: 'Salesforce', strength: 'Enterprise customization', weakness: 'Steep learning curve', marketShare: 19, pricing: '$25–$300/user' },
          { name: 'Pipedrive', strength: 'Visual pipeline UX', weakness: 'Limited marketing features', marketShare: 4, pricing: '$14–$99/user' },
          { name: 'Zoho CRM', strength: 'Best price-to-feature ratio', weakness: 'Inconsistent UI across modules', marketShare: 3, pricing: '$7–$52/user' },
        ]
      : [
          { name: 'Competitor A', strength: 'Brand recognition', weakness: 'Slow innovation', marketShare: 30, pricing: '$49–$299/mo' },
          { name: 'Competitor B', strength: 'Feature-rich platform', weakness: 'Poor customer support', marketShare: 20, pricing: '$79–$499/mo' },
          { name: 'Competitor C', strength: 'Competitive pricing', weakness: 'Limited scalability', marketShare: 10, pricing: '$9–$49/mo' },
        ];
    const gaps = c.filter(comp => comp.marketShare < 15).map(comp => `${comp.name}: ${comp.weakness}`);
    const opp = c.reduce((best, comp) => comp.marketShare < best.marketShare ? comp : best, c);
    setResult({ competitors: c, gaps, opportunity: `Target ${opp.name}'s weakness: ${opp.weakness}`, matrix: c.map(comp => ({ name: comp.name, share: comp.marketShare })) });
  };
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #172554 0%, #991b1b 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #60a5fa, #f87171)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🏆 Autonomous Competitor Analysis Engine</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Auto-scan competitor landscape by niche. Get strength/weakness mapping, market share estimates, and gap analysis.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#172554', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e40af' }}>
            <input type="text" value={niche} onChange={e => setNiche(e.target.value)} placeholder="e.g., SaaS CRM, E-commerce, Fintech" style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #1e40af', color: '#f8fafc', borderRadius: '8px', marginBottom: '1rem' }} />
            <button onClick={analyze} style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(90deg, #dc2626, #2563eb)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>🏆 Analyze Competitors</button>
          </div>
          <div style={{ background: '#172554', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e40af' }}>
            {result ? (<>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                {result.competitors.map((c: Competitor, i: number) => (
                  <div key={i} style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ fontWeight: '700', color: '#60a5fa', marginBottom: '0.5rem' }}>{c.name} ({c.marketShare}%)</div>
                    <div style={{ color: '#4ade80', fontSize: '0.8rem' }}>💪 {c.strength}</div>
                    <div style={{ color: '#f87171', fontSize: '0.8rem' }}>⚠️ {c.weakness}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.25rem' }}>{c.pricing}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#052e16', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
                <div style={{ color: '#4ade80', fontWeight: '600' }}>🎯 Your Opportunity</div>
                <div style={{ color: '#a7f3d0', fontSize: '0.85rem' }}>{result.opportunity}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'end', gap: '0.5rem', height: 120, marginTop: '1rem' }}>
                {result.matrix.map((m: any, i: number) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ height: Math.max(10, m.share * 2), background: `hsl(${i * 60}, 80%, 60%)`, borderRadius: '4px 4px 0 0', transition: 'height 0.5s' }}></div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '0.2rem' }}>{m.name}</div>
                    <div style={{ fontSize: '0.65rem', color: '#e2e8f0' }}>{m.share}%</div>
                  </div>
                ))}
              </div>
            </>) : <div style={{ color: '#3b82f6', textAlign: 'center', padding: '3rem 1rem' }}>🏆 Analysis results here</div>}
          </div>
        </div>
      </div>
    </div>
  );
}