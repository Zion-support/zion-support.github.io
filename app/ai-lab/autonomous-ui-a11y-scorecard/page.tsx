'use client';

import React, { useState } from 'react';

interface A11yIssue {
  id: number;
  rule: string;
  level: 'A' | 'AA' | 'AAA';
  impact: 'critical' | 'serious' | 'moderate' | 'minor';
  description: string;
  fix: string;
  wcag: string;
}

interface A11yResult {
  score: number;
  totalRules: number;
  passed: number;
  failed: number;
  warnings: number;
  errors: A11yIssue[];
  grade: string;
}

const A11y_RULES = [
  { rule: 'Images have alt text', check: (c: string) => /<img(?![^>]*alt=)/i.test(c), wcag: '1.1.1', level: 'A', impact: 'critical' as const, fix: 'Add descriptive alt attribute to all <img> tags.' },
  { rule: 'Form inputs have labels', check: (c: string) => /<(input|select|textarea)(?![^>]*(id=|aria-label=|aria-labelledby=))/i.test(c), wcag: '1.3.1', level: 'A', impact: 'serious' as const, fix: 'Associate <label> with form inputs via htmlFor/id or use aria-label.' },
  { rule: 'Headings in order', check: (c: string) => { const h = c.match(/<h([1-6])/gi)?.map(m => m.match(/h(\d)/i)?.[1]).map(Number); if (!h || h.length === 0) return false; for (let i = 1; i < h.length; i++) if (h[i] > h[i - 1] + 1) return true; return false; }, wcag: '1.3.1', level: 'A', impact: 'moderate' as const, fix: 'Ensure heading hierarchy doesn\'t skip levels (h1 → h2 → h3).' },
  { rule: 'Color contrast sufficient', check: (c: string) => /(#fff[#0-9a-f]{0,3}[^#]*#fff)|(#000[^#]*#000)/i.test(c.replace(/\s/g, '')), wcag: '1.4.3', level: 'AA', impact: 'serious' as const, fix: 'Ensure text/background contrast ratio meets 4.5:1 (AA) or 7:1 (AAA).' },
  { rule: 'Links have text', check: (c: string) => /<a[^>]*>\s*<\/a>/i.test(c), wcag: '2.4.4', level: 'A', impact: 'serious' as const, fix: 'Add visible text content or aria-label to empty links.' },
  { rule: 'Buttons have accessible name', check: (c: string) => /<button[^>]*>\s*<\/button>/i.test(c), wcag: '4.1.2', level: 'A', impact: 'critical' as const, fix: 'Add text content or aria-label to <button> elements.' },
  { rule: 'Tables have headers', check: (c: string) => /<table[^>]*>(?![\s\S]*<th)/i.test(c), wcag: '1.3.1', level: 'A', impact: 'serious' as const, fix: 'Add <th> elements to table for proper header association.' },
  { rule: 'No positive tabindex', check: (c: string) => /tabindex="(?![0])[1-9]/.test(c), wcag: '2.4.3', level: 'A', impact: 'moderate' as const, fix: 'Avoid positive tabindex; use 0 or -1 instead.' },
  { rule: 'Lang attribute on html', check: (c: string) => !/<html[^>]*lang=/i.test(c), wcag: '3.1.1', level: 'A', impact: 'serious' as const, fix: 'Add lang attribute to <html> element (e.g., lang="en").' },
  { rule: 'No ARIA role conflicts', check: (c: string) => /<(button|a)[^>]*role=(?!button|link|menuitem|tab|treeitem)/i.test(c), wcag: '4.1.2', level: 'A', impact: 'serious' as const, fix: 'Don\'t override semantic elements with conflicting ARIA roles.' },
  { rule: 'Focus visible management', check: (c: string) => !/outline[^:]*none|outline:\s*0(?![^;]*focus)/i.test(c), wcag: '2.4.7', level: 'AA', impact: 'moderate' as const, fix: 'Don\'t remove outline unless providing visible focus alternative.' },
  { rule: 'Skip navigation link', check: (c: string) => !/skip.*(nav|main|content|to\s*main)/i.test(c), wcag: '2.4.1', level: 'A', impact: 'serious' as const, fix: 'Add a "Skip to main content" link as the first focusable element.' },
  { rule: 'Interactive elements keyboard accessible', check: (c: string) => /<(div|span|section)[^>]*(onClick|onclick|@click)[^>]*(?!tabindex)/i.test(c), wcag: '2.1.1', level: 'A', impact: 'critical' as const, fix: 'Add role="button" tabindex="0" and onKeyDown handler to clickable divs/spans.' },
  { rule: 'ARIA landmarks', check: (c: string) => !/(main|navigation|banner|contentinfo)/i.test(c), wcag: '1.3.1', level: 'A', impact: 'moderate' as const, fix: 'Use ARIA landmark roles: main, nav, banner, contentinfo.' },
];

export default function A11yScorecardPage() {
  const [html, setHtml] = useState('');
  const [pageName, setPageName] = useState('Homepage');
  const [result, setResult] = useState<A11yResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [filter, setFilter] = useState<'all' | 'critical' | 'serious' | 'moderate' | 'minor'>('all');

  const runAudit = () => {
    setIsScanning(true);
    setTimeout(() => {
      const errors: A11yIssue[] = [];
      let id = 0;

      A11y_RULES.forEach(({ rule, check, wcag, level, impact, fix }) => {
        if (check(html)) {
          id++;
          errors.push({ id, rule, level, impact, wcag, description: rule, fix });
        }
      });

      const total = A11y_RULES.length;
      const failed = errors.length;
      const passed = A11y_RULES.length - errors.filter(e => e.impact === 'critical').length - errors.filter(e => e.impact === 'serious').length;

      const score = Math.max(0, Math.round((passed / total) * 100));
      const grade = score >= 90 ? 'A+' : score >= 80 ? 'A' : score >= 70 ? 'B' : score >= 60 ? 'C' : score >= 40 ? 'D' : 'F';

      setResult({ score, totalRules: total, passed, failed, warnings: errors.filter(e => e.impact === 'moderate').length, errors, grade });
      setIsScanning(false);
    }, 800);
  };

  const impactColor = (i: string) => {
    switch(i) {
      case 'critical': return '#ef4444';
      case 'serious': return '#f97316';
      case 'moderate': return '#eab308';
      default: return '#22d3ee';
    }
  };

  const filteredErrors = filter === 'all' ? result?.errors || [] : result?.errors.filter(e => e.impact === filter) || [];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #7c3aed 0%, #4338ca 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ♿ UI Accessibility Scorecard
        </h1>
        <p style={{ color: '#c4b5fd', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Audit HTML/JSX against WCAG 2.2 rules. Get pass/fail grades, critical issues, and exact fix instructions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Page Name</label>
            <input type="text" value={pageName} onChange={e => setPageName(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc', marginBottom: '1rem' }} />
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>HTML / JSX to Audit</label>
            <textarea value={html} onChange={e => setHtml(e.target.value)} placeholder={'<html>\n  <body>\n    <img src="hero.jpg" />\n    <div onclick={() => submit()}>Click Me</div>\n    <table><tr><td>Data</td></tr></table>\n  </body>\n</html>'} style={{ width: '100%', height: 300, padding: '0.75rem', borderRadius: '8px', fontFamily: 'monospace', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc', fontSize: '0.9rem' }} />
            <button onClick={runAudit} disabled={isScanning || !html.trim()} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #7c3aed, #3b82f6)', color: 'white', border: 'none', cursor: html.trim() ? 'pointer' : 'not-allowed', opacity: html.trim() ? 1 : 0.5, fontWeight: '600' }}>
              {isScanning ? '♿ Scanning...' : '♿ Run Accessibility Audit'}
            </button>
          </div>

          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>📊 Accessibility Scorecard</h3>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: result.score >= 80 ? '#4ade80' : result.score >= 60 ? '#facc15' : '#f87171' }}>{result.grade}</div>
                    <div style={{ color: '#a7f3d0', fontSize: '0.85rem' }}>WCAG Grade</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#60a5fa' }}>{result.score}%</div>
                    <div style={{ color: '#a7f3d0', fontSize: '0.85rem' }}>Compliance Score</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ color: '#4ade80', fontWeight: '600' }}>✅ {result.passed} Passed</div>
                    <div style={{ color: '#f87171', fontWeight: '600' }}>❌ {result.failed} Failed</div>
                    <div style={{ color: '#eab308', fontWeight: '600' }}>⚠️ {result.warnings} Warnings</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ color: '#a7f3d0', fontSize: '0.85rem', marginBottom: '0.25rem' }}>📏 Rules Checked</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#a78bfa' }}>{result.totalRules}</div>
                    <div style={{ color: '#7c3aed', fontSize: '0.8rem', marginTop: '0.25rem' }}>WCAG 2.2 A/AA/AAA</div>
                  </div>
                </div>

                {result.score < 80 && (
                  <div style={{ background: '#1c1917', border: '1px solid #44403c', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                    <div style={{ color: '#f59e0b', fontWeight: '600' }}>⚠️ Accessibility Barrier</div>
                    <div style={{ color: '#a1a1aa', marginTop: '0.5rem', lineHeight: 1.5 }}>
                      {result.failed > 3 ? 'Significant barriers for users with disabilities. Prioritize critical issues first.' :
                       result.failed > 1 ? 'Some barriers exist. Fix serious issues to improve accessibility.' :
                       'Minor issues found. Quick fixes to reach AA compliance.'}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div style={{ color: '#c4b5fd', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♿</div>
                <div>Accessibility results will appear here</div>
              </div>
            )}
          </div>
        </div>

        {result && (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {['all', 'critical', 'serious', 'moderate', 'minor'].map(f => (
                <button key={f} onClick={() => setFilter(f as any)} style={{ padding: '0.5rem 1rem', borderRadius: '20px', background: filter === f ? '#7c3aed' : '#1e1b4b', color: filter === f ? 'white' : '#c4b5fd', border: 'none', cursor: 'pointer', textTransform: 'capitalize', fontWeight: filter === f ? '600' : '400' }}>
                  {f} ({f === 'all' ? result.errors.length : result.errors.filter(e => e.impact === f).length})
                </button>
              ))}
            </div>

            <div style={{ background: '#1e1b4b', borderRadius: '12px', border: '1px solid #4c1d95', overflow: 'hidden' }}>
              <h3 style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #4c1d95', margin: 0 }}>📋 WCAG Violation Report</h3>
              {filteredErrors.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#7c3aed' }}>🎉 No violations in this priority!</div>
              ) : (
                filteredErrors.map((err) => (
                  <div key={err.id} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #4c1d9533' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '700', color: impactColor(err.impact), fontSize: '0.85rem' }}>[{err.impact.toUpperCase()}]</span>
                      <span style={{ background: '#4c1d95', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#a78bfa' }}>WCAG {err.wcag} Level {err.level}</span>
                      <span style={{ fontWeight: '600' }}>{err.rule}</span>
                    </div>
                    <div style={{ color: '#c4b5fd', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{err.description}</div>
                    <div style={{ background: '#0f172a', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#4ade80' }}>
                      💡 {err.fix}
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
