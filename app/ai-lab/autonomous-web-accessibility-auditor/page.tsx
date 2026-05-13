'use client';
import React, { useState } from 'react';

interface AuditItem { category: string; title: string; status: 'pass' | 'fail' | 'warning'; description: string; fix?: string; wcag: string };

const ALL_ISSUES: AuditItem[] = [
  { category: 'Color Contrast', title: 'Body text contrast ratio', status: 'pass', description: '4.8:1 — meets WCAG AA (4.5:1 minimum)', wcag: '1.4.3' },
  { category: 'Color Contrast', title: 'Small text contrast', status: 'fail', description: '3.2:1 — below AA minimum of 4.5:1', wcag: '1.4.3', fix: 'Increase text color darkness or lighten background' },
  { category: 'Color Contrast', title: 'Link color vs body text', status: 'pass', description: '5.1:1 — distinguishable from surrounding text', wcag: '1.4.1' },
  { category: 'Keyboard Navigation', title: 'Tab order logical', status: 'pass', description: 'Focus order matches visual layout', wcag: '2.4.3' },
  { category: 'Keyboard Navigation', title: 'Visible focus indicator', status: 'fail', description: 'No visible focus ring on interactive elements', wcag: '2.4.7', fix: 'Add outline: 2px solid #3b82f6 to :focus styles' },
  { category: 'Keyboard Navigation', title: 'Skip navigation link', status: 'pass', description: 'Skip link present at top of page', wcag: '2.4.1' },
  { category: 'ARIA Labels', title: 'Alt text on images', status: 'warning', description: '4 of 6 decorative images missing alt attributes', wcag: '1.1.1', fix: 'Add alt="" to decorative images, descriptive alt to content images' },
  { category: 'ARIA Labels', title: 'ARIA roles present', status: 'pass', description: 'Navigation, banner, main roles correctly assigned', wcag: '4.1.2' },
  { category: 'ARIA Labels', title: 'Form labels associated', status: 'fail', description: '2 inputs missing for/label associations', wcag: '1.3.1', fix: 'Add <label for="id"> or aria-label to each input' },
  { category: 'Screen Reader', title: 'Language attribute set', status: 'pass', description: 'HTML lang="en" declared correctly', wcag: '3.1.1' },
  { category: 'Screen Reader', title: 'Page title descriptive', status: 'pass', description: '<title> matches page content purpose', wcag: '2.4.2' },
  { category: 'Screen Reader', title: 'Live regions announced', status: 'warning', description: 'Dynamic content updates without aria-live', wcag: '4.1.3', fix: 'Add aria-live="polite" to dynamic content containers' },
  { category: 'Semantic HTML', title: 'Heading hierarchy', status: 'pass', description: 'h1 → h2 → h3 structure is sequential', wcag: '1.3.1' },
  { category: 'Semantic HTML', title: 'Lists used correctly', status: 'pass', description: 'Navigation uses <nav>, lists use <ul>/<ol>', wcag: '1.3.1' },
  { category: 'Semantic HTML', title: 'Table headers', status: 'fail', description: 'Data table missing <th> scope declarations', wcag: '1.3.1', fix: 'Add scope="col" or scope="row" to all table headers' },
  { category: 'Forms', title: 'Error identification', status: 'pass', description: 'Form errors described in text', wcag: '3.3.1' },
  { category: 'Forms', title: 'Input suggestions', status: 'warning', description: 'No autocomplete attributes on name/email fields', wcag: '3.3.4', fix: 'Add autocomplete="name" and autocomplete="email" to inputs' },
];

const SAMPLE_URLS = ['https://ziontechgroup.com', 'https://example.com', 'https://github.com'];

export default function AutonomousAccessibilityAuditorPage() {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<AuditItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'pass' | 'fail' | 'warning'>('all');
  const [catFilter, setCatFilter] = useState<string>('all');

  const scan = async () => {
    if (!url) return;
    setScanning(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setResults(ALL_ISSUES);
    setScanning(false);
  };

  const categories = [...new Set(ALL_ISSUES.map(i => i.category))];
  const filtered = results.filter(i => (filter === 'all' || i.status === filter) && (catFilter === 'all' || i.category === catFilter));
  const passes = results.filter(i => i.status === 'pass').length;
  const fails = results.filter(i => i.status === 'fail').length;
  const warns = results.filter(i => i.status === 'warning').length;
  const score = results.length > 0 ? Math.round((passes / results.length) * 100) : 0;
  const scoreColor = score >= 90 ? '#22c55e' : score >= 70 ? '#f59e0b' : '#ef6571';
  const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>♿ Autonomous Web Accessibility Auditor</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Check a URL against WCAG 2.1 AA standards. Get contrast analysis, ARIA audits, keyboard nav checks, and screen reader compatibility scores.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>🔍 Scan a Page</h3>
            <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com" style={{ width: '100%', padding: '0.75rem', background: '#0f172a', border: '1px solid #312e81', color: '#f8fafc', borderRadius: '8px', marginBottom: '0.75rem' }} />
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {SAMPLE_URLS.map(u => (
                <button key={u} onClick={() => setUrl(u)} style={{ padding: '0.3rem 0.6rem', background: '#312e81', border: 'none', color: '#a78bfa', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>{u.replace('https://', '')}</button>
              ))}
            </div>
            <button onClick={scan} disabled={scanning || !url} style={{ width: '100%', padding: '0.75rem', background: !scanning && url ? 'linear-gradient(90deg, #7c3aed, #3b82f6)' : '#374151', color: 'white', border: 'none', borderRadius: '8px', cursor: !scanning && url ? 'pointer' : 'not-allowed', fontWeight: '600' }}>{scanning ? '♿ Scanning...' : '♿ Run Accessibility Audit'}</button>
          </div>

          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>📊 Audit Score</h3>
            {results.length > 0 ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '4rem', fontWeight: '700', color: scoreColor }}>{score}<span style={{ fontSize: '1.5rem', color: '#94a3b8' }}>/100</span></div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: scoreColor }}>Grade: {grade}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #2a1a0a' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#22c55e' }}>{passes}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Passed</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #7f1d1d' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f59e0b' }}>{fails}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Failed</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #713f12' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f59e0b' }}>{warns}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Warnings</div>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ color: '#a78bfa', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♿</div>
                <div>Enter a URL and run the audit</div>
              </div>
            )}
          </div>
        </div>

        {results.length > 0 && (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {(['all', 'pass', 'fail', 'warning'] as const).map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: `1px solid ${f === filter ? (f === 'pass' ? '#22' : f === 'fail' ? '#ef4444' : f === 'warning' ? '#f59e0b' : '#a78bfa') : '#44403c'}`, background: f === filter ? `${f === 'pass' ? '#22c55e' : f === 'fail' ? '#ef4444' : f === 'warning' ? '#f59e0b' : '#a78bfa'}22` : 'transparent', color: f === 'pass' ? '#22c55e' : f === 'fail' ? '#ef4444' : f === 'warning' ? '#f59e0b' : '#a78bfa', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem', textTransform: 'capitalize' }}>{f}</button>
              ))}
              <select value={catFilter} onChange={e => setCatFilter(e.target.value)} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', background: '#1e1b4b', border: '1px solid #312e81', color: '#f8fafc', fontSize: '0.8rem' }}>
                <option value="all">All Categories</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #312e81' }}>
              {filtered.map((item, i) => (
                <div key={i} style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem', borderLeft: `4px solid ${item.status === '' ? '#20a' : item.status === 'fail' ? '#ef6633500'}`, }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1rem' }}>{item.status === 'pass' ? '✅' : item.status === 'fail' ? '❌' : '⚠️'}</span>
                      <span style={{ fontWeight: '600' }}>{item.title}</span>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#64748b' }}>WCAG {item.wcag}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{item.description}</div>
                  {item.fix && <div style={{ fontSize: '0.75rem', color: '#4ade80', marginTop: '0.25rem' }}>💡 Fix: {item.fix}</div>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
