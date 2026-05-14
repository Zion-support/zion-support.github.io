'use client';

import React, { useState } from 'react';

interface DebtItem {
  id: number;
  category: 'deprecated' | 'unused' | 'duplicate' | 'complex' | 'documentation' | 'security';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  fixTime: string;
  impact: string;
}

interface DebtResult {
  totalDebt: number;
  criticalDebt: number;
  highDebt: number;
  mediumDebt: number;
  lowDebt: number;
  estimatedFixHours: number;
  debtScore: number;
  interestRate: string;
  items: DebtItem[];
  roi: { paybackWeeks: number; productivityGain: string };
}

const DEBT_PATTERNS = [
  { pattern: /UNSAFEComponentWillMount|componentWillReceiveProps|componentWillUpdate/i, category: 'deprecated' as const, title: 'Deprecated React lifecycle method', description: 'componentWillMount/ReceiveProps/Update are deprecated and unsafe.', suggestion: 'Use componentDidMount, componentDidUpdate, or getDerivedStateFromProps.' },
  { pattern: /PropTypes\s*=/i, category: 'documentation' as const, title: 'Using PropTypes instead of TypeScript', description: 'PropTypes is legacy pattern; TypeScript provides compile-time safety.', suggestion: 'Convert to TypeScript interfaces/types.' },
  { pattern: /any\s+/g, category: 'documentation' as const, title: 'Using "any" type', description: '"any" defeats TypeScript type checking.', suggestion: 'Use specific types or unknown with type guards.' },
  { pattern: /require\s*\(/i, category: 'deprecated' as const, title: 'CommonJS require() in ES module', description: 'Mixing require() with import statements is inconsistent.', suggestion: 'Use ES import syntax consistently.' },
  { pattern: /function\s+\w+\([^)]*\)\s*\{[^}]{500,}/s, category: 'complex' as const, title: 'Oversized function detected', description: 'Functions over 500 chars are hard to maintain and test.', suggestion: 'Extract into smaller, focused helper functions.' },
  { pattern: /\/\/\s*TODO|\/\/\s*FIXME|\/\/\s*HACK|\/\/\s*XXX/i, category: 'documentation' as const, title: 'Technical debt marker', description: 'TODO/FIXME/HACK comments indicate incomplete work.', suggestion: 'Create ticket and address or remove stale markers.' },
  { pattern: /console\.(log|warn|error|debug)\s*\(/i, category: 'documentation' as const, title: 'Console statements left in code', description: 'console.log/debug should be removed in production.', suggestion: 'Use proper logging framework or remove.' },
  { pattern: /import.*from\s+['"]react['"][\s\S]*import.*from\s+['"]react['"]/g, category: 'duplicate' as const, title: 'Multiple React imports', description: 'React is imported multiple times in same file.', suggestion: 'Consolidate into single import statement.' },
  { pattern: /useEffect\s*\(\s*\(\)\s*=>\s*\{[^}]*\},\s*\[\s*\]\s*\)/g, category: 'complex' as const, title: 'Empty dependency array useEffect', description: 'May miss dependencies or cause stale closures.', suggestion: 'Verify all dependencies are listed; use eslint-plugin-react-hooks.' },
];

export default function TechDebtTrackerPage() {
  const [code, setCode] = useState('');
  const [fileName, setFileName] = useState('component.tsx');
  const [result, setResult] = useState<DebtResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [filter, setFilter] = useState<'all' | 'deprecated' | 'unused' | 'duplicate' | 'complex' | 'documentation' | 'security'>('all');

  const analyzeDebt = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const lines = code.split('\n');
      const items: DebtItem[] = [];
      let id = 0;

      lines.forEach((line, idx) => {
        DEBT_PATTERNS.forEach(({ pattern, category, title, description }) => {
          pattern.lastIndex = 0; // Reset regex state for global patterns
          if (pattern.test(line)) {
            id++;
            const severityMap: Record<string, 'critical' | 'high' | 'medium' | 'low'> = {
              deprecated: 'high',
              unused: 'low',
              duplicate: 'medium',
              complex: 'medium',
              documentation: 'low',
              security: 'critical'
            };
            items.push({
              id,
              category,
              severity: severityMap[category],
              title,
              description,
              fixTime: category === 'deprecated' ? '2h' : category === 'complex' ? '4h' : '30m',
              impact: category === 'deprecated' ? 'May break in future React versions' :
                      category === 'complex' ? 'Hard to test and maintain' :
                      category === 'security' ? 'Potential vulnerability' : 'Reduced code quality',
            });
          }
        });
      });

      // Calculate metrics
      const critical = items.filter(i => i.severity === 'critical').length;
      const high = items.filter(i => i.severity === 'high').length;
      const medium = items.filter(i => i.severity === 'medium').length;
      const low = items.filter(i => i.severity === 'low').length;

      const debtScore = Math.max(0, 100 - (critical * 20) - (high * 12) - (medium * 6) - (low * 2));
      const fixHours = Math.ceil((critical * 4) + (high * 2) + (medium * 1) + (low * 0.5));
      const interestRate = debtScore >= 80 ? 'Low (2-5% velocity drag)' : debtScore >= 60 ? 'Medium (5-15% velocity drag)' : 'High (15-30% velocity drag)';

      setResult({
        totalDebt: items.length,
        criticalDebt: critical,
        highDebt: high,
        mediumDebt: medium,
        lowDebt: low,
        estimatedFixHours: fixHours,
        debtScore,
        interestRate,
        items,
        roi: {
          paybackWeeks: fixHours <= 4 ? 1 : fixHours <= 8 ? 2 : fixHours <= 16 ? 3 : 4,
          productivityGain: debtScore < 60 ? '5-10% faster development after fixes' : '2-5% smoother iteration'
        }
      });
      setIsAnalyzing(false);
    }, 600);
  };

  const filteredItems = filter === 'all' ? result?.items || [] : result?.items.filter(i => i.category === filter) || [];

  const getSeverityColor = (s: string) => {
    switch(s) {
      case 'critical': return '#ef4444';
      case 'high': return '#f97316';
      case 'medium': return '#eab308';
      default: return '#22d3ee';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #27272a 0%, #3f3f46 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          📊 Autonomous Tech Debt Tracker
        </h1>
        <p style={{ color: '#a1a1aa', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Detect deprecated APIs, complexity, duplicates, and missing docs. Calculate debt ROI and interest rate.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#18181b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #3f3f46' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>File Context</label>
            <input type="text" value={fileName} onChange={e => setFileName(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', background: '#27272a', border: '1px solid #3f3f46', color: '#f8fafc', marginBottom: '1rem' }} />
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Code to Analyze</label>
            <textarea value={code} onChange={e => setCode(e.target.value)} placeholder={'// Paste your code here\nimport React from "react";\nimport React from "react"; // duplicate\nconst x: any = getData();\n// TODO: fix this later\nconsole.log("debug left in");'} style={{ width: '100%', height: 300, padding: '0.75rem', borderRadius: '8px', fontFamily: 'monospace', background: '#27272a', border: '1px solid #3f3f46', color: '#f8fafc', fontSize: '0.9rem' }} />
            <button onClick={analyzeDebt} disabled={isAnalyzing || !code.trim()} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #f59e0b, #ef4444)', color: 'white', border: 'none', cursor: code.trim() ? 'pointer' : 'not-allowed', opacity: code.trim() ? 1 : 0.5, fontWeight: '600' }}>
              {isAnalyzing ? '🔍 Analyzing...' : '📊 Analyze Tech Debt'}
            </button>
          </div>

          <div style={{ background: '#18181b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #3f3f46' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>📈 Debt Dashboard</h3>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#27272a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: result.debtScore >= 80 ? '#4ade80' : result.debtScore >= 60 ? '#facc15' : '#f87171' }}>{result.debtScore}</div>
                    <div style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>Debt-Free Score</div>
                  </div>
                  <div style={{ background: '#27272a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b' }}>{result.totalDebt}</div>
                    <div style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>Total Debt Items</div>
                  </div>
                  <div style={{ background: '#27272a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444' }}>🔴 {result.criticalDebt}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f97316' }}>🟠 {result.highDebt}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#eab308' }}>🟡 {result.mediumDebt}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22d3ee' }}>🔵 {result.lowDebt}</div>
                  </div>
                  <div style={{ background: '#27272a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ color: '#a1a1aa', fontSize: '0.85rem', marginBottom: '0.5rem' }}>💰 ROI Analysis</div>
                    <div style={{ fontWeight: '600', color: '#4ade80' }}>Est. fix: {result.estimatedFixHours}h</div>
                    <div style={{ fontWeight: '600', color: '#60a5fa' }}>Payback: {result.roi.paybackWeeks} week(s)</div>
                    <div style={{ fontWeight: '600', color: '#fbbf24' }}>Interest: {result.interestRate}</div>
                    <div style={{ color: '#22d3ee', fontSize: '0.8rem', marginTop: '0.25rem' }}>{result.roi.productivityGain}</div>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ color: '#71717a', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                <div>Debt analysis will appear here</div>
              </div>
            )}
          </div>
        </div>

        {result && (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {['all', 'deprecated', 'complex', 'duplicate', 'documentation'].map(f => (
                <button key={f} onClick={() => setFilter(f as any)} style={{ padding: '0.5rem 1rem', borderRadius: '20px', background: filter === f ? '#f59e0b' : '#18181b', color: filter === f ? 'white' : '#a1a1aa', border: 'none', cursor: 'pointer', textTransform: 'capitalize', fontWeight: filter === f ? '600' : '400' }}>
                  {f} ({f === 'all' ? result.items.length : result.items.filter(i => i.category === f).length})
                </button>
              ))}
            </div>

            <div style={{ background: '#18181b', borderRadius: '12px', border: '1px solid #3f3f46', overflow: 'hidden' }}>
              <h3 style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #3f3f46', margin: 0 }}>📋 Debt Register</h3>
              {filteredItems.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#71717a' }}>No debt in this category!</div>
              ) : (
                filteredItems.map((item) => (
                  <div key={item.id} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #3f3f46' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600', color: getSeverityColor(item.severity) }}>[{item.severity.toUpperCase()}]</span>
                      <span style={{ backgroundColor: '#27272a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>{item.category}</span>
                      <span style={{ fontWeight: '600' }}>{item.title}</span>
                      <span style={{ color: '#a1a1aa', fontSize: '0.85rem', marginLeft: 'auto' }}>⏱ {item.fixTime}</span>
                    </div>
                    <div style={{ color: '#a1a1aa', marginBottom: '0.25rem' }}>{item.description}</div>
                    <div style={{ color: '#f59e0b', fontSize: '0.85rem' }}>⚠️ Impact: {item.impact}</div>
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