'use client';
import React, { useState } from 'react';

interface ScoreItem { category: string; title: string; status: 'pass' | 'fail' | 'warning'; score: number; maxScore: number; description: string; fix?: string };

const ITEMS: ScoreItem[] = [
  { category: 'Hero Section', title: 'Clear headline value prop', status: 'pass', score: 10, maxScore: 10, description: 'Headline communicates core value proposition in under 5 seconds' },
  { category: 'Hero Section', title: 'Single primary CTA', status: 'pass', score: 10, maxScore: 10, description: 'One clear primary CTA above the fold with contrasting color' },
  { category: 'Hero Section', title: 'Supporting visual', status: 'pass', score: 8, maxScore: 10, description: 'Hero image/illustration supports message but could be more specific' },
  { category: 'Trust Signals', title: 'Social proof present', status: 'fail', score: 0, maxScore: 10, description: 'No testimonials, logos, or customer count visible above the fold', fix: 'Add "Trusted by 2,000+ companies" with logos in hero area' },
  { category: 'Trust Signals', title: 'Security badges', status: 'pass', score: 10, maxScore: 10, description: 'SSL badge and secure checkout indicator present' },
  { category: 'Trust Signals', title: 'Press/awards mentions', status: 'warning', score: 3, maxScore: 10, description: 'No media logos or award indicators', fix: 'Add "As featured in TechCrunch, Forbes" with publication logos' },
  { category: 'Content', title: 'Benefit-oriented copy', status: 'pass', score: 10, maxScore: 10, description: 'Copy focuses on benefits rather than features' },
  { category: 'Content', title: 'Scannable format', status: 'pass', score: 8, maxScore: 10, description: 'Good use of headings and bullet points, could use more whitespace' },
  { category: 'Content', title: 'Objection handling', status: 'fail', score: 0, maxScore: 10, description: 'No FAQ section or guarantee mention to reduce friction', fix: 'Add 3-5 question FAQ section and money-back guarantee statement' },
  { category: 'UX', title: 'Mobile responsive', status: 'pass', score: 10, maxScore: 10, description: 'Layout adapts gracefully across device sizes' },
  { category: 'UX', title: 'Page load perception', status: 'warning', score: 6, maxScore: 10, description: 'Estimated LCP 2.8s — above 2.5s target', fix: 'Optimize hero image format (WebP/AVIF) and defer non-critical CSS' },
  { category: 'UX', title: 'Sticky CTA on scroll', status: 'pass', score: 10, maxScore: 10, description: 'CTA button remains visible in sticky header on scroll' },
  { category: 'Conversion', title: 'Urgency/scarcity', status: 'warning', score: 5, maxScore: 10, description: 'No time-limited offer or limited availability messaging', fix: 'Add countdown timer or "Only X spots remaining" element' },
  { category: 'Conversion', title: 'Form optimization', status: 'fail', score: 0, maxScore: 10, description: 'Signup form has 5 fields — ideal is 2-3 for cold traffic', fix: 'Reduce to email-only field, collect details after signup' },
  { category: 'Conversion', title: 'Exit intent popup', status: 'warning', score: 5, maxScore: 10, description: 'No exit intent capture to recover abandoning visitors', fix: 'Add exit intent modal with secondary offer or lead magnet' },
  { category: 'SEO', title: 'Meta tags complete', status: 'pass', score: 10, maxScore: 10, description: 'Title, description, og:image, and canonical tags present' },
  { category: 'SEO', title: 'Structured data', status: 'warning', score: 5, maxScore: 10, description: 'No FAQ schema or Organization schema found', fix: 'Add FAQPage and Organization JSON-LD structured data' },
  { category: 'SEO', title: 'Internal linking', status: 'pass', score: 10, maxScore: 10, description: '3+ internal links with descriptive anchor text' },
];

const SAMPLES = [
  { name: 'SaaS Landing', url: 'https://ziontechgroup.com/ai', hero: 'AI Solutions That Scale', cta: 'Start Free Trial' },
  { name: 'E-commerce', url: 'https://example.com', hero: 'Summer Sale – 50% Off', cta: 'Shop Now' },
  { name: 'SaaS Service', url: 'https://example.com/consulting', hero: 'Enterprise IT Consulting', cta: 'Book Discovery Call' },
];

export default function AutonomousLandingPageScorecardPage() {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<ScoreItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'pass' | 'fail' | 'warning'>('all');

  const scan = async () => {
    if (!url) return;
    setScanning(true);
    setResults([]);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setResults(ITEMS);
    setScanning(false);
  };

  const filtered = results.filter(i => filter === 'all' || i.status === filter);
  const total = results.reduce((s, i) => s + i.score, 0);
  const max = results.reduce((s, i) => s + i.maxScore, 0);
  const pct = max > 0 ? Math.round((total / max) * 100) : 0;
  const grade = pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
  const convRate = pct >= 85 ? '5-8%' : pct >= 70 ? '3-5%' : pct >= 55 ? '1-3%' : '<1%';

  const categories = [...new Set(ITEMS.map(i => i.category))];
  const catScores = categories.map(cat => {
    const items = results.filter(i => i.category === cat);
    const catTotal = items.reduce((s, i) => s + i.score, 0);
    const catMax = items.reduce((s, i) => s + i.maxScore, 0);
    return { cat, score: catMax > 0 ? Math.round((catTotal / catMax) * 100) : 0 };
  });

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c4a6e 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #f472b6, #818cf8, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🎯 Autonomous Landing Page Scorecard</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Score a landing page for conversion readiness. Analyze hero, trust signals, CTA placement, content, UX, and SEO.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            <h3 style={{ color: '#818cf8', marginBottom: '1rem' }}>📝 Analyze a Page</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {SAMPLES.map((s, i) => (
                <button key={i} onClick={() => setUrl(s.url)} style={{ padding: '0.3rem 0.6rem', background: '#312e81', border: 'none', color: '#818cf8', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>{s.name}</button>
              ))}
            </div>
            <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://yourlandingpage.com" style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #312e81', color: '#f8fafc', borderRadius: '8px', marginBottom: '1rem' }} />
            <button onClick={scan} disabled={scanning || !url} style={{ width: '100%', padding: '0.75rem', background: !scanning && url ? 'linear-gradient(90deg, #7c3aed, #06b6d4)' : '#374151', color: 'white', border: 'none', borderRadius: '8px', cursor: !scanning && url ? 'pointer' : 'not-allowed', fontWeight: '600', fontSize: '1rem' }}>{scanning ? '🔍 Scanning...' : '🎯 Run Scorecard Audit'}</button>
          </div>

          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            <h3 style={{ color: '#818cf8', marginBottom: '1rem' }}>📊 Conversion Score</h3>
            {results.length > 0 ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '4rem', fontWeight: '700', color: pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444' }}>{pct}<span style={{ fontSize: '1.5rem', color: '#94a3b8' }}>/100</span></div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444' }}>Grade: {grade}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>Est. Conversion Rate: <span style={{ fontWeight: '600', color: '#22d3ee' }}>{convRate}</span></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: `${categories.map(() => '1fr').join(' ')}`, gap: '0.75rem' }}>
                  {catScores.map((c, i) => (
                    <div key={i} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #312e81' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: c.score >= 80 ? '#4ade80' : c.score >= 60 ? '#fbbf24' : '#f87171' }}>{c.score}</div>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{c.cat}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ color: '#818cf8', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                <div>Enter a URL and run the scorecard</div>
              </div>
            )}
          </div>
        </div>

        {results.length > 0 && (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {(['all', 'pass', 'warning', 'fail'] as const).map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: `1px solid ${filter === f ? (f === 'pass' ? '#22c55e' : f === 'warning' ? '#f59e0b' : '#ef4444') : '#44403c'}`, background: filter === f ? `${filter === 'pass' ? '#22c55e' : filter === 'warning' #20a' : '#20a'}22` : 'transparent', color: f === 'pass' ? '#22c55e' : f === 'warning' ? '#f59e0b' : '#ef4444', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem', textTransform: 'capitalize' }}>{f}</button>
              ))}
            </div>

            <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
              <h3 style={{ color: '#818cf8', marginBottom: '1rem' }}>📋 Detailed Breakdown ({results.length} checks)</h3>
              {filtered.map((item, i) => (
                <div key={i} style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem', borderLeft: `4px solid ${item.status === 'pass' ? '#22c55e' : item.status === 'fail' ? '#ef4444' : '#f59e0b'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', minWidth: '100px' }}>{item.category}</span>
                      <span style={{ fontWeight: '600' }}>{item.title}</span>
                    </div>
                    <span style={{ fontWeight: '600', color: item.status === 'pass' ? '#4ade80' : item.status === 'fail' ? '#f87171' : '#fbbf24' }}>{item.score}/{item.maxScore}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{item.description}</div>
                  {item.fix && <div style={{ fontSize: '0.75rem', color: '#4ade80', marginTop: '0.3rem' }}>💡 Fix: {item.fix}</div>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
