'use client';

import React, { useState } from 'react';

interface WCAGIssue {
  id: string;
  criterion: string;
  level: 'A' | 'AA' | 'AAA';
  severity: 'Critical' | 'Major' | 'Minor';
  description: string;
  fix: string;
  before: string;
  after: string;
}

const CHECKS: ((input: string) => WCAGIssue[])[] = [
  // 1.1.1 Non-text Content - img alt
  (c) => /<img\b(?![^>]*\balt=)[^>]*>/i.test(c) ? [{
    id: 'WCAG-1.1.1', criterion: '1.1.1 Non-text Content', level: 'A', severity: 'Critical',
    description: 'Image missing alt text.', fix: 'Add alt attribute.', before: '<img src="img.png">',
    after: '<img src="img.png" alt="Description">',
  }] : [],

  // 1.3.1 Info Relationships - form inputs
  (c) => /<input\b(?![^>]*\b(id|aria-label|title)=)[^>]*>/i.test(c) && !/<label\b/.test(c) ? [{
    id: 'WCAG-1.3.1', criterion: '1.3.1 Info and Relationships', level: 'A', severity: 'Critical',
    description: 'Form input missing label.', fix: 'Add label with for attribute.',
    before: '<input type="text" name="email">', after: '<label for="email">Email</label>\n<input id="email" type="text">',
  }] : [],

  // Heading hierarchy
  (c) => {
    const hs = c.match(/<h([1-6])[\s>]/gi) || [];
    const issues: WCAGIssue[] = [];
    let last = 0;
    for (const h of hs) {
      const l = parseInt(h.match(/\d/)![0]);
      if (l > last + 1 && last > 0) {
        issues.push({
          id: 'WCAG-1.3.1', criterion: '1.3.1 Info and Relationships', level: 'A', severity: 'Major',
          description: `Heading level skipped (h${last} → h${l}).`,
          fix: 'Use sequential heading levels.', before: '<h2>Title</h2>\n<h4>Sub</h4>',
          after: '<h2>Title</h2>\n<h3>Sub</h3>',
        });
      }
      last = l;
    }
    return issues;
  },

  // Keyboard accessibility
  (c) => /on(click|mouseover)="\s*\}\)/.test(c) && !/on(key|focus)/.test(c) ? [{
    id: 'WCAG-2.1.1', criterion: '2.1.1 Keyboard', level: 'A', severity: 'Critical',
    description: 'Mouse-only event handler.', fix: 'Add onKeyDown for keyboard access.',
    before: '<div onClick="fn()">Click</div>', after: '<button onClick={fn} onKeyDown={onKey}>Click</button>',
  }] : [],

  // Focus management
  (c) => /outline\s*:\s*none/.test(c) && !/:focus-visible/.test(c) ? [{
    id: 'WCAG-2.4.7', criterion: '2.4.7 Focus Visible', level: 'AA', severity: 'Major',
    description: 'Focus outline removed without alternative.', fix: 'Use :focus-visible.',
    before: 'button:focus { outline: none; }',
    after: 'button:focus-visible { outline: 2px solid #1f6feb; }',
  }] : [],

  // Color contrast
  (c) => /(?:color|background)\s*:\s*#[cdefCDEF]\w{2,}/i.test(c) ? [{
    id: 'WCAG-1.4.3', criterion: '1.4.3 Contrast (Minimum)', level: 'AA', severity: 'Major',
    description: 'Potential low contrast ratio.', fix: 'Ensure ≥ 4.5:1 ratio for normal text.',
    before: 'color: #ccc;', after: 'color: #595959;',
  }] : [],

  // Semantic HTML
  (c) => /<div\b[^>]*class="[^"]*(?:button|link|nav|header|footer|main)/.test(c) ? [{
    id: 'WCAG-4.1.2', criterion: '4.1.2 Name, Role, Value', level: 'A', severity: 'Major',
    description: 'Interactive element using div instead of semantic HTML.', fix: 'Use semantic elements.',
    before: '<div class="button">Click</div>', after: '<button>Click</button>',
  }] : [],

  // Autoplay media
  (c) => /<(?:video|audio)\b[^>]*autoplay\b/i.test(c) ? [{
    id: 'WCAG-1.4.2', criterion: '1.4.2 Audio Control', level: 'A', severity: 'Major',
    description: 'Media auto-plays.', fix: 'Remove autoplay or add controls.',
    before: '<video autoplay src="v.mp4">', after: '<video controls src="v.mp4">',
  }] : [],

  // Target size
  (c) => {
    const m = c.match(/(?:width|height)\s*:\s*(\d+)px/i);
    if (m && parseInt(m[1]) < 44) return [{
      id: 'WCAG-2.5.8', criterion: '2.5.8 Target Size', level: 'AA', severity: 'Minor',
      description: 'Touch target too small.', fix: 'Min 44×44px for touch targets.',
      before: '.btn { width: 24px; }', after: '.btn { min-width: 44px; }',
    }];
    return [];
  },

  // Missing lang attribute
  (c) => /<html\b[^>]*>/i.test(c) && !/<html\b[^>]*lang=/.test(c) ? [{
    id: 'WCAG-3.1.1', criterion: '3.1.1 Language of Page', level: 'A', severity: 'Minor',
    description: 'Missing lang attribute on html element.', fix: 'Add lang="en" or appropriate language code.',
    before: '<html>', after: '<html lang="en">',
  }] : [],
];

export default function AutonomousAccessibilityAuditor() {
  const [code, setCode] = useState('');
  const [issues, setIssues] = useState<WCAGIssue[]>([]);
  const [scanned, setScanned] = useState(false);

  const runAudit = () => {
    const allIssues: WCAGIssue[] = [];
    CHECKS.forEach(fn => allIssues.push(...fn(code)));
    setIssues(allIssues);
    setScanned(true);
  };

  const score = scanned ? Math.max(0, 100 - issues.reduce((s, i) => s + (i.severity === 'Critical' ? 20 : i.severity === 'Major' ? 10 : 3), 0)) : 100;
  const sevColor = (s: string) => ({ Critical: '#dc2626', Major: '#ea580c', Minor: '#ca8a04' }[s] || '#666');

  return (
    <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>♿  Autonomous Accessibility Auditor</h1>
      <p style={{ color: '#8b949e', marginBottom: '1.5rem' }}>Paste HTML, JSX, or CSS to scan for WCAG 2.2 violations. Get fix suggestions with before/after code snippets.</p>
      
      {!scanned ? (
        <>
          <textarea value={code} onChange={e => setCode(e.target.value)} placeholder="Paste HTML, JSX, or CSS here..." style={{ width: '100%', minHeight: '200px', padding: '0.75rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', color: '#e0e0e0', fontFamily: 'monospace', fontSize: '0.9rem', resize: 'vertical' }} />
          <button onClick={runAudit} style={{ display: 'block', width: '100%', marginTop: '1rem', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>♿ Run WCAG 2.2 Audit</button>
        </>
      ) : (
        <>
          <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 700, color: score >= 90 ? '#22c55e' : score >= 70 ? '#eab308' : '#ef4444' }}>{score}</div>
            <div style={{ color: '#8b949e' }}>Accessibility Score / 100</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              {['Critical', 'Major', 'Minor'].map(s => {
                const count = issues.filter(i => i.severity === s).length;
                return count > 0 ? <span key={s} style={{ color: sevColor(s), fontSize: '0.85rem' }}>{s}: {count}</span> : null;
              })}
            </div>
          </div>
          
          {issues.length > 0 ? (
            issues.map((issue, i) => (
              <div key={i} style={{ background: '#161b22', borderRadius: '8px', padding: '1rem', marginBottom: '0.75rem', borderLeft: `4px solid ${sevColor(issue.severity)}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 600 }}>{issue.description}</span>
                  <span style={{ background: sevColor(issue.severity), color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>{issue.severity}</span>
                </div>
                <div style={{ color: '#8b949e', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{issue.id} · {issue.criterion} · Level {issue.level}</div>
                <div style={{ color: '#4caf50', fontSize: '0.9rem', marginBottom: '0.5rem' }}>✅ {issue.fix}</div>
                <pre style={{ background: '#0d1117', padding: '0.5rem', borderRadius: '6px', fontSize: '0.8rem', color: '#c9d1d9' }}>❌ {issue.before}\n✅ {issue.after}</pre>
              </div>
            ))
          ) : (
            <div style={{ background: '#161b22', borderRadius: '10px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem' }}>🎉</div>
              <h2 style={{ color: '#4caf50' }}>No Issues Detected</h2>
              <p style={{ color: '#8b949e' }}>Your code passes WCAG 2.2 checks.</p>
            </div>
          )}
          <button onClick={() => { setScanned(false); setIssues([]); setCode(''); }} style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '1rem' }}>🔄 Audit Another</button>
        </>
      )}
    </div>
  );
}
