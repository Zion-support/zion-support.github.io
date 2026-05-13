'use client';

import React, { useState } from 'react';

// ============================================================
// AUTONOMOUS TECH STACK AUDITOR
// Client-side tech stack analyzer with modernization roadmap
// Zero external dependencies — fully self-contained
// ============================================================

interface TechEntry {
  id: string;
  category: string;
  name: string;
  version: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  recommendation: string;
  effortScore: number;
  impactScore: number;
}

interface AuditResult {
  overallScore: number;
  totalIssues: number;
  techs: TechEntry[];
  roadmap: TechEntry[];
}

const DEFAULT_STACK = {
  frontend: [
    { name: 'React', version: '18.2.0', category: 'Frontend' },
    { name: 'Next.js', version: '14.1.0', category: 'Frontend' },
    { name: 'TypeScript', version: '5.3.3', category: 'Frontend' },
    { name: 'Tailwind CSS', version: '3.4.1', category: 'Frontend' },
  ],
  testing: [
    { name: 'Jest', version: '29.7.0', category: 'Testing' },
    { name: 'Cypress', version: '13.0.0', category: 'Testing' },
  ],
  infra: [
    { name: 'Node.js', version: '20.10.0', category: 'Infrastructure' },
    { name: 'Vercel', version: 'cloud', category: 'Infrastructure' },
    { name: 'GitHub Actions', version: 'latest', category: 'Infrastructure' },
    { name: 'Docker', version: '24.0.7', category: 'Infrastructure' },
  ],
  monitoring: [
    { name: 'Sentry', version: '7.x', category: 'Monitoring' },
  ],
  tools: [
    { name: 'ESLint', version: '8.x', category: 'Dev Tools' },
    { name: 'Prettier', version: '3.x', category: 'Dev Tools' },
    { name: 'Husky', version: '8.0.3', category: 'Dev Tools' },
  ],
};

const RISK_RULES: Record<string, { riskLevel: 'low' | 'medium' | 'high' | 'critical'; recommendation: string; effortScore: number; impactScore: number }[]> = {
  React: [
    { riskLevel: 'low', recommendation: 'Upgrade to React 19 — new compiler, zero-config memoization, Actions API.', effortScore: 3, impactScore: 4 },
  ],
  'Next.js': [
    { riskLevel: 'low', recommendation: 'Update to Next.js 15 — React 19 support, caching improvements, turbopack stable.', effortScore: 4, impactScore: 4 },
  ],
  ESLint: [
    { riskLevel: 'medium', recommendation: 'Migrate to ESLint 9 + flat config — new plugin architecture, better performance.', effortScore: 3, impactScore: 3 },
  ],
  Husky: [
    { riskLevel: 'low', recommendation: 'Upgrade to Husky 9 — simpler setup, package.json-based config.', effortScore: 1, impactScore: 2 },
  ],
  'Node.js': [
    { riskLevel: 'low', recommendation: 'Update to Node 22+ — performance improvements, new test runner.', effortScore: 3, impactScore: 3 },
  ],
  Jest: [
    { riskLevel: 'medium', recommendation: 'Consider migrating to Vitest — 10-50x faster, ESM-native, Next.js compatible.', effortScore: 5, impactScore: 4 },
  ],
  Docker: [
    { riskLevel: 'low', recommendation: 'Update to Docker 25+ — better build cache, multi-platform improvements.', effortScore: 2, impactScore: 2 },
  ],
};

const GENERIC_RULES: Record<'low' | 'medium' | 'high' | 'critical', { recommendation: string; effortScore: number; impactScore: number }> = {
  low: { recommendation: 'Keep current — stable version.', effortScore: 1, impactScore: 1 },
  medium: { recommendation: 'Schedule update — minor version upgrade available.', effortScore: 2, impactScore: 2 },
  high: { recommendation: 'Plan migration — deprecated or approaching EOL.', effortScore: 4, impactScore: 3 },
  critical: { recommendation: 'Immediate action needed — security risk or EOL.', effortScore: 5, impactScore: 5 },
};

export default function AutonomousTechStackAuditor() {
  const [stack, setStack] = useState<Record<string, {name: string; version: string; category: string}[]>>(DEFAULT_STACK);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [newItem, setNewItem] = useState({ name: '', version: '', category: 'Frontend' });

  const runAudit = () => {
    const techs: TechEntry[] = [];
    Object.values(stack).flat().forEach(item => {
      const rules = RISK_RULES[item.name] || [GENERIC_RULES.medium];
      const rule = rules[0];
      techs.push({
        id: `${item.category}-${item.name}`,
        category: item.category,
        name: item.name,
        version: item.version,
        riskLevel: rule.riskLevel,
        recommendation: rule.recommendation,
        effortScore: rule.effortScore,
        impactScore: rule.impactScore,
      });
    });
    
    const totalIssues = techs.filter(t => t.riskLevel !== 'low').length;
    const overallScore = Math.max(0, 100 - totalIssues * 8);
    const roadmap = [...techs].sort((a, b) => b.impactScore * b.effortScore - a.impactScore * a.effortScore).slice(0, 5);

    setAuditResult({ overallScore, totalIssues, techs, roadmap });
  };

  const addItem = () => {
    if (!newItem.name || !newItem.version) return;
    const updated = { ...stack };
    const item = { name: newItem.name, version: newItem.version, category: newItem.category };
    if (!updated[newItem.category]) updated[newItem.category] = [];
    updated[newItem.category].push(item);
    setStack(updated);
    setNewItem({ name: '', version: '', category: 'Frontend' });
  };

  const removeItem = (category: string, name: string) => {
    const updated = { ...stack };
    updated[category] = updated[category].filter(i => i.name !== name);
    setStack(updated);
  };

  const riskColor = (level: string) => {
    switch (level) {
      case 'critical': return '#f44336';
      case 'high': return '#ff9800';
      case 'medium': return '#2196f3';
      default: return '#4caf50';
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>🔧 Autonomous Tech Stack Auditor</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Scan your tech stack for outdated dependencies, security risks, and modernization opportunities. Get a prioritized upgrade roadmap.</p>

      {/* Current Stack */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📦 Your Current Stack</h2>
        
        {Object.entries(stack).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #21262d' }}>
            <h3 style={{ fontSize: '0.9rem', color: '#58a6ff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{category}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
              {items.map(item => (
                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: '#0d1117', borderRadius: 6, border: '1px solid #30363d' }}>
                  <div>
                    <span style={{ fontWeight: 600 }}>{item.name}</span>
                    <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>v{item.version}</div>
                  </div>
                  <button onClick={() => removeItem(category, item.name)} style={{ background: 'transparent', border: 'none', color: '#8b949e', cursor: 'pointer', fontSize: '1rem' }}>×</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Item */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>➕ Add Component</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr)) 100px', gap: '0.75rem', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#8b949e' }}>Name</label>
            <input value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} placeholder="e.g., webpack" style={{ width: '100%', padding: '0.5rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, color: '#e0e0e0' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#8b949e' }}>Version</label>
            <input value={newItem.version} onChange={e => setNewItem({...newItem, version: e.target.value})} placeholder="e.g., 5.x" style={{ width: '100%', padding: '0.5rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, color: '#e0e0e0' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#8b949e' }}>Category</label>
            <select value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})} style={{ width: '100%', padding: '0.5rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, color: '#e0e0e0' }}>
              {['Frontend', 'Backend', 'Testing', 'Infrastructure', 'Monitoring', 'Dev Tools'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <button onClick={addItem} style={{ padding: '0.5rem', background: '#238636', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Add</button>
        </div>
      </div>

      <button onClick={runAudit} style={{ display: 'block', width: '100%', padding: '0.75rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #238636, #2ea043)', border: '1px solid #2ea043', borderRadius: 8, cursor: 'pointer', marginBottom: '1.5rem' }}>
        🔍 Run Stack Audit
      </button>

      {auditResult && (
        <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Score */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Overall Health Score</h2>
            <div style={{ fontSize: '4rem', fontWeight: 700, color: auditResult.overallScore > 80 ? '#4caf50' : auditResult.overallScore > 60 ? '#ff9800' : '#f44336' }}>{auditResult.overallScore}/100</div>
            <p style={{ color: '#8b949e' }}>{auditResult.totalIssues} items need attention</p>
          </div>

          {/* Roadmap */}
          <h3 style={{ marginBottom: '1rem' }}>🗓️ Prioritized Upgrade Roadmap</h3>
          {auditResult.roadmap.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#0d1117', borderRadius: 8, marginBottom: '0.5rem', borderLeft: `4px solid ${riskColor(item.riskLevel)}` }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ fontSize: '0.9rem', color: '#8b949e' }}>{item.recommendation}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.8rem', background: riskColor(item.riskLevel), color: '#fff', padding: '0.2rem 0.5rem', borderRadius: 4 }}>{item.riskLevel.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* All Techs Table */}
      {auditResult && (
        <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📊 Complete Stack Analysis</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #30363d' }}>Tool</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #30363d' }}>Version</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #30363d' }}>Risk</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #30363d' }}>Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {auditResult.techs.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 600 }}>{item.name}</td>
                    <td style={{ padding: '0.75rem', color: '#8b949e' }}>{item.version}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span style={{ background: riskColor(item.riskLevel), color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 4, fontSize: '0.8rem' }}>{item.riskLevel}</span>
                    </td>
                    <td style={{ padding: '0.75rem', color: '#c9d1d9' }}>{item.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
