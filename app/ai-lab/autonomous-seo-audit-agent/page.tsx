'use client';

import React, { useState } from 'react';

interface SeoIssue { id: number; category: string; severity: 'critical' | 'warning' | 'info'; title: string; fix: string; }

const SEO_CHECKS = [
  { check: (h: string) => !/<title[^>]*>[\s\S]*?<\/title>/i.test(h), cat: 'Meta', sev: 'critical' as const, title: 'Missing <title> tag', fix: 'Add a descriptive <title> element (50-60 chars).' },
  { check: (h: string) => !/<meta[^>]*name=["']description["']/i.test(h), cat: 'Meta', sev: 'critical' as const, title: 'Missing meta description', fix: 'Add <meta name="description" content="..."/> (150-160 chars).' },
  { check: (h: string) => !/<meta[^>]*name=["']keywords["']/i.test(h), cat: 'Meta', sev: 'info' as const, title: 'No meta keywords', fix: 'Add relevant keywords (optional but helpful for older crawlers).' },
  { check: (h: string) => !/<h1[^>]*>[\s\S]*?<\/h1>/i.test(h), cat: 'Headings', sev: 'critical' as const, title: 'Missing H1 tag', fix: 'Add exactly one <h1> per page with primary keyword.' },
  { check: (h: string) => (h.match(/<h1/gi) || []).length > 1, cat: 'Headings', sev: 'warning' as const, title: 'Multiple H1 tags', fix: 'Use only one H1; demote others to H2/H3.' },
  { check: (h: string) => !/<a[^>]*href=["'][^"']*["'][^>]*>[\s\S]*?<\/a>/i.test(h), cat: 'Links', sev: 'warning' as const, title: 'No internal links found', fix: 'Add internal links to improve crawl depth and page authority.' },
  { check: (h: string) => /<a[^>]*target=["']_blank["']/i.test(h) && !/rel=["'][^"']*noopener[^"']*["']/i.test(h), cat: 'Links', sev: 'warning' as const, title: 'External links missing rel="noopener"', fix: 'Add rel="noopener noreferrer" to target="_blank" links.' },
  { check: (h: string) => !/<img[^>]*src=["'][^"']*["'][^>]*alt=["'][^"']+["']/i.test(h) && /<img/i.test(h), cat: 'Media', sev: 'warning' as const, title: 'Images missing alt text', fix: 'Add descriptive alt attributes to all images.' },
  { check: (h: string) => /<img[^>]*src=["'][^"']*["'][^>]*(width|height)=/i.test(h), cat: 'Media', sev: 'info' as const, title: 'Images with dimension attributes', fix: 'Specify width/height to prevent CLS (Cumulative Layout Shift).' },
  { check: (h: string) => !/<link[^>]*rel=["']canonical["']/i.test(h), cat: 'Meta', sev: 'warning' as const, title: 'Missing canonical URL', fix: 'Add <link rel="canonical" href="..."/> to prevent duplicate content.' },
  { check: (h: string) => !/<meta[^>]*property=["']og:/i.test(h), cat: 'Social', sev: 'info' as const, title: 'Missing Open Graph tags', fix: 'Add og:title, og:description, og:image for better social sharing.' },
  { check: (h: string) => !/<link[^>]*rel=["']icon["']/i.test(h), cat: 'Media', sev: 'info' as const, title: 'No favicon link', fix: 'Add <link rel="icon" href="/favicon.ico"/> for browser tabs/bookmarks.' },
];

export default function SeoAuditAgentPage() {
  const [html, setHtml] = useState('');
  const [pageName, setPageName] = useState('Homepage');
  const [result, setResult] = useState<{ score: number; passed: number; failed: number; issues: SeoIssue[] } | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  const runAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      const issues: SeoIssue[] = [];
      let id = 0;
      SEO_CHECKS.forEach(({ check, cat, sev, title, fix }) => {
        if (check(html)) {
          id++;
          issues.push({ id, category: cat, severity: sev, title, fix });
        }
      });
      const critical = issues.filter(i => i.severity === 'critical').length;
      const warnings = issues.filter(i => i.severity === 'warning').length;
      const passed = SEO_CHECKS.length - issues.filter(i => i.severity !== 'info').length;
      const score = Math.max(0, 100 - (critical * 20) - (warnings * 8));
      setResult({ score, passed, failed: issues.length, issues });
      setIsAuditing(false);
    }, 600);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #4c1d95 0%, #7c2d12 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #c084fc, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🔍 Autonomous SEO Audit Agent</h1>
        <p style={{ color: '#c4b5fd', marginBottom: '2rem', fontSize: '1.1rem' }}>Paste page HTML to get instant SEO analysis: meta tags, headings, links, media, social tags, and canonical URLs.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Page Name</label>
            <input type="text" value={pageName} onChange={e => setPageName(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc', marginBottom: '1rem' }} />
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Page HTML</label>
            <textarea value={html} onChange={e => setHtml(e.target.value)} placeholder={'<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>'} style={{ width: '100%', height: 300, padding: '0.75rem', borderRadius: '8px', fontFamily: 'monospace', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc', fontSize: '0.9rem' }} />
            <button onClick={runAudit} disabled={isAuditing || !html.trim()} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #9333ea, #ea580c)', color: 'white', border: 'none', cursor: html.trim() ? 'pointer' : 'not-allowed', opacity: html.trim() ? 1 : 0.5, fontWeight: '600' }}>
              {isAuditing ? '🔍 Auditing...' : '🔍 Run SEO Audit'}
            </button>
          </div>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ marginBottom: '1rem' }}>📊 Audit Results</h3>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: result.score >= 80 ? '#4ade80' : result.score >= 60 ? '#facc15' : '#f87171' }}>{result.score}</div>
                    <div style={{ color: '#a7f3d0', fontSize: '0.85rem' }}>SEO Score</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa' }}>{result.passed}/{SEO_CHECKS.length}</div>
                    <div style={{ color: '#a7f3d0', fontSize: '0.85rem' }}>Checks Passed</div>
                  </div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#ef4444', fontWeight: '600' }}>🔴 Critical: {result.issues.filter(i => i.severity === 'critical').length}</div>
                  <div style={{ color: '#f59e0b', fontWeight: '600' }}>🟡 Warnings: {result.issues.filter(i => i.severity === 'warning').length}</div>
                  <div style={{ color: '#60a5fa', fontWeight: '600' }}>🔵 Info: {result.issues.filter(i => i.severity === 'info').length}</div>
                </div>
              </>
            ) : (
              <div style={{ color: '#7c3aed', textAlign: 'center', padding: '3rem 1rem' }}><div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>Results here</div>
            )}
          </div>
        </div>
        {result && result.issues.length > 0 && (
          <div style={{ background: '#1e1b4b', borderRadius: '12px', border: '1px solid #4c1d95', overflow: 'hidden' }}>
            <h3 style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #4c1d95', margin: 0 }}>📋 Issues</h3>
            {result.issues.map(i => (
              <div key={i.id} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #4c1d9533' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600', color: i.severity === 'critical' ? '#ef4444' : i.severity === 'warning' ? '#f59e0b' : '#60a5fa' }}>[{i.severity.toUpperCase()}]</span>
                  <span style={{ background: '#4c1d95', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>{i.category}</span>
                  <span style={{ fontWeight: '600' }}>{i.title}</span>
                </div>
                <div style={{ background: '#0f172a', padding: '0.5rem 0.75rem', borderRadius: '6px', color: '#4ade80', fontSize: '0.85rem' }}>💡 {i.fix}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}