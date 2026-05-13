'use client';
import React, { useState } from 'react';

interface KBArticle { title: string; status: 'active' | 'outdated' | 'draft' | 'review'; category: string; wordCount: number; lastUpdated: string; quality: number; }
interface AuditResult { total: number; by: Record<string, number>; avgQuality: number; gaps: string[]; topFixes: string[]; }

export default function AutonomousKnowledgeBaseAuditorPage() {
  const [raw, setRaw] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);

  const audit = () => {
    const lines = raw.split('\n').filter(l => l.trim());
    const articles: KBArticle[] = lines.map(l => {
      const parts = l.split('|').map(p => p.trim());
      return { title: parts[0] || 'Untitled', status: (parts[1] || 'active') as any, category: parts[2] || 'General', wordCount: parseInt(parts[3]) || 0, lastUpdated: parts[4] || '2025-01-01', quality: parseInt(parts[5]) || 70 };
    });
    if (articles.length === 0) {
      articles.push(
        { title: 'Getting Started Guide', status: 'active', category: 'Onboarding', wordCount: 1200, lastUpdated: '2025-11-15', quality: 85 },
        { title: 'API Reference v2', status: 'outdated', category: 'Developer', wordCount: 4500, lastUpdated: '2024-06-01', quality: 45 },
        { title: 'Billing FAQ', status: 'active', category: 'Support', wordCount: 800, lastUpdated: '2025-12-20', quality: 90 },
        { title: 'Security Setup', status: 'review', category: 'Security', wordCount: 600, lastUpdated: '2025-10-01', quality: 60 },
        { title: 'Troubleshooting Guide', status: 'draft', category: 'Support', wordCount: 300, lastUpdated: '2025-08-15', quality: 30 },
      );
    }
    const by: Record<string, number> = {};
    articles.forEach(a => { by[a.status] = (by[a.status] || 0) + 1; });
    const avgQuality = Math.round(articles.reduce((s, a) => s + a.quality, 0) / articles.length);
    const outdated = articles.filter(a => a.status === 'outdated' || a.quality < 50);
    const gaps: string[] = outdated.map(a => a.title + ' (quality: ' + a.quality + '%)');
    const topFixes: string[] = [
      outdated.length > 0 ? outdated.length + ' articles need updating' : 'All articles up-to-date',
      articles.some(a => a.wordCount < 500) ? articles.filter(a => a.wordCount < 500).length + ' articles are too short (<500 words)' : 'All articles have adequate length',
      'Average quality score: ' + avgQuality + '%',
    ];
    setResult({ total: articles.length, by, avgQuality, gaps, topFixes });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #172554 0%, #312e81 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📚 Autonomous Knowledge Base Auditor</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Audit documentation for gaps, outdated articles, and quality scores. Pipe in CSV data or use sample analysis.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#1e3a5f', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e40af' }}>
            <h3 style={{ color: '#93c5fd', marginBottom: '1rem' }}>Input</h3>
            <textarea value={raw} onChange={e => setRaw(e.target.value)} placeholder={"Article Title|Status|Category|WordCount|LastUpdated|Quality\nGetting Started|active|Onboarding|1200|2025-11-15|85\nAPI Reference v2|outdated|Developer|4500|2024-06-01|45\nBilling FAQ|active|Support|800|2025-12-20|90"} style={{ width: '100%', height: 200, padding: '0.75rem', background: '#0f172a', border: '1px solid #1e40af', color: '#f8fafc', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85rem', resize: 'vertical' }} />
            <button onClick={audit} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', background: 'linear-gradient(90deg, #2563eb, #7c3aed)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Audit Knowledge Base</button>
          </div>
          <div style={{ background: '#1e3a5f', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e40af' }}>
            {result ? (<>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>{result.total}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Total Articles</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: result.avgQuality >= 70 ? '#4ade80' : '#f59e0b' }}>{result.avgQuality}%</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Avg Quality</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}>{result.gaps.length}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Gaps Found</div>
                </div>
              </div>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <div style={{ color: '#93c5fd', fontWeight: '600', marginBottom: '0.5rem' }}>By Status</div>
                {Object.entries(result.by).map(([k, v]) => <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}><span>{k}</span><span>{v}</span></div>)}
              </div>
              <div style={{ background: '#1c1917', padding: '1rem', borderRadius: '8px', border: '1px solid #44403c' }}>
                {result.topFixes.map((f, i) => <div key={i} style={{ color: '#e2e8f0', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{f.startsWith('-') ? f : '→ ' + f}</div>)}
              </div>
            </>) : <div style={{ color: '#3b82f6', textAlign: 'center', padding: '3rem 1rem' }}>Audit results here</div>}
          </div>
        </div>
      </div>
    </div>
  );
}