'use client';

import React, { useState } from 'react';

interface ReviewIssue {
  id: number;
  type: 'security' | 'performance' | 'style' | 'maintainability' | 'bug';
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  line?: string;
  title: string;
  description: string;
  suggestion: string;
}

interface ReviewResult {
  score: number;
  issuesFound: number;
  securityIssues: number;
  performanceIssues: number;
  styleIssues: number;
  maintainabilityIssues: number;
  bugIssues: number;
  estimatedReviewTime: string;
  complexityScore: string;
  issues: ReviewIssue[];
  summary: string;
  recommendations: string[];
}

const SECURITY_PATTERNS = [
  { pattern: /password\s*=\s*['"][^'"]+['"]/i, title: 'Hardcoded password detected', description: 'Passwords should never be hardcoded in source code.', suggestion: 'Use environment variables or a secrets manager.' },
  { pattern: /api[_-]?key\s*=\s*['"][^'"]+['"]/i, title: 'Hardcoded API key', description: 'API keys should be stored securely, not in code.', suggestion: 'Move to .env file and use process.env.API_KEY.' },
  { pattern: /secret\s*=\s*['"][^'"]+['"]/i, title: 'Potential hardcoded secret', description: 'Secrets in code pose security risks.', suggestion: 'Use a vault service or environment variables.' },
  { pattern: /eval\s*\(/, title: 'Use of eval()', description: 'eval() can execute arbitrary code and is a security risk.', suggestion: 'Use JSON.parse() for JSON, or safer alternatives.' },
  { pattern: /innerHTML\s*=/, title: 'Potential XSS via innerHTML', description: 'innerHTML can lead to Cross-Site Scripting attacks.', suggestion: 'Use textContent or sanitize HTML with DOMPurify.' },
  { pattern: /document\.write\s*\(/, title: 'document.write() usage', description: 'document.write() can be exploited for XSS attacks.', suggestion: 'Use DOM manipulation methods instead.' },
  { pattern: /mysql\.query.*\$\{/, title: 'Potential SQL injection', description: 'String interpolation in SQL queries is dangerous.', suggestion: 'Use parameterized queries or an ORM.' },
  { pattern: /exec\s*\(\s*['"`].*\+/, title: 'Command injection risk', description: 'String concatenation in system commands is risky.', suggestion: 'Use parameterized exec() or validate input.' },
  { pattern: /dangerouslySetInnerHTML/, title: 'React dangerouslySetInnerHTML usage', description: 'Bypasses React\'s XSS protection.', suggestion: 'Sanitize content with DOMPurify before rendering.' },
];

const PERFORMANCE_PATTERNS = [
  { pattern: /for\s*\([^)]*\.length/i, title: 'Caching array length in loop', description: 'Accessing .length repeatedly in loop condition.', suggestion: 'Cache length variable: for (let i = 0, len = arr.length; i < len; i++)' },
  { pattern: /useState.*\[.*\]/, title: 'Array/obj in useState without memo', description: 'Creating new arrays/objects in useState each render.', suggestion: 'Use useMemo or initialize outside component.' },
  { pattern: /useEffect.*\[\s*\]/.*async/, title: 'Async in useEffect without cleanup', description: 'Async effects can cause state updates on unmounted components.', suggestion: 'Add cleanup function to abort requests.' },
  { pattern: /\.map\(.*\.filter\(/, title: 'Chained map/filter may be inefficient', description: 'Multiple array iterations create intermediate arrays.', suggestion: 'Use reduce() for single-pass transformations.' },
];

const STYLE_PATTERNS = [
  { pattern: /var\s+\w+\s*=/, title: 'Using var instead of let/const', description: 'var has function scope and can cause unexpected behavior.', suggestion: 'Use const by default, let when reassignment is needed.' },
  { pattern: /===?\s*null[^)]*\?\s*true\s*:\s*false/, title: 'Unnecessary ternary for null check', description: 'Can be simplified to boolean expression.', suggestion: 'Use !!value instead of value !== null ? true : false' },
];

const MAINTAINABILITY_PATTERNS = [
  { pattern: /^(.{100,})$/m, title: 'Very long line detected', description: 'Lines over 100 chars reduce readability.', suggestion: 'Break long lines or extract to variables.' },
  { pattern: /\/\/.*TODO|\/\/.*FIXME|\/\/.*HACK/i, title: 'Technical debt marker found', description: 'TODO/FIXME comments indicate unfinished work.', suggestion: 'Address or convert to tracked issue.' },
];

const BUG_PATTERNS = [
  { pattern: /setTimeout\s*\(\s*.*\s*,\s*["']\d+["']/, title: 'setTimeout with string delay', description: 'String as delay converts to NaN.', suggestion: 'Use numeric milliseconds: setTimeout(fn, 1000)' },
  { pattern: /if\s*\([^)]*=\s*[^=]/, title: 'Assignment in condition', description: 'Using = instead of == or ===.', suggestion: 'Fix to ===, or wrap in extra parens if intentional.' },
];

export default function CodeReviewAssistantPage() {
  const [code, setCode] = useState('');
  const [fileName, setFileName] = useState('example.ts');
  const [result, setResult] = useState<ReviewResult | null>(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [filter, setFilter] = useState<'all' | 'security' | 'performance' | 'style' | 'maintainability' | 'bug'>('all');

  const analyzeCode = () => {
    setIsReviewing(true);
    setTimeout(() => {
      const lines = code.split('\n');
      const issues: ReviewIssue[] = [];
      let issueId = 0;

      const allPatterns = [
        ...SECURITY_PATTERNS.map(p => ({ ...p, type: 'security' as const })),
        ...PERFORMANCE_PATTERNS.map(p => ({ ...p, type: 'performance' as const })),
        ...STYLE_PATTERNS.map(p => ({ ...p, type: 'style' as const })),
        ...MAINTAINABILITY_PATTERNS.map(p => ({ ...p, type: 'maintainability' as const })),
        ...BUG_PATTERNS.map(p => ({ ...p, type: 'bug' as const })),
      ];

      lines.forEach((line, idx) => {
        allPatterns.forEach(({ pattern, title, description, suggestion, type }) => {
          if (pattern.test(line)) {
            issueId++;
            issues.push({
              id: issueId,
              type,
              severity: type === 'security' ? 'critical' : type === 'bug' ? 'high' : 'medium' as 'critical' | 'high' | 'medium' | 'low' | 'info',
              line: `${idx + 1}`,
              title,
              description,
              suggestion,
            });
          }
        });
      });

      // Complexity heuristics
      const nestingDepth = Math.max(...lines.map(l => {
        const indent = l.match(/^(\s*)/)?.[1].length || 0;
        return Math.floor(indent / 2);
      }), 0);
      const complexityScore = nestingDepth > 4 ? 'High' : nestingDepth > 2 ? 'Medium' : 'Low';
      const estimatedTime = Math.max(1, Math.ceil(issues.length * 0.5)).toString();

      const securityIssues = issues.filter(i => i.type === 'security').length;
      const performanceIssues = issues.filter(i => i.type === 'performance').length;
      const styleIssues = issues.filter(i => i.type === 'style').length;
      const maintainabilityIssues = issues.filter(i => i.type === 'maintainability').length;
      const bugIssues = issues.filter(i => i.type === 'bug').length;

      const score = Math.max(0, 100 - (securityIssues * 15) - (bugIssues * 10) - (performanceIssues * 8) - (styleIssues * 3) - (maintainabilityIssues * 5));

      const recommendations: string[] = [];
      if (securityIssues > 0) recommendations.push('Address all security issues before merging. Security debt compounds quickly.');
      if (bugIssues > 0) recommendations.push('Fix bugs immediately — they indicate logic errors that will manifest in production.');
      if (performanceIssues > 0) recommendations.push('Consider optimizing hot paths. Profile before and after changes.');
      if (issues.filter(i => i.type === 'style').length > 3) recommendations.push('Consider running a linter (ESLint, Prettier) to auto-fix style issues.');
      if (score >= 80) recommendations.push('Overall good code quality. Minor improvements suggested.');
      else if (score >= 60) recommendations.push('Code needs improvement. Focus on critical issues first.');
      else recommendations.push('Significant refactoring recommended. Consider breaking into smaller functions.');

      setResult({
        score,
        issuesFound: issues.length,
        securityIssues,
        performanceIssues,
        styleIssues,
        maintainabilityIssues,
        bugIssues,
        estimatedReviewTime: `${estimatedTime} min`,
        complexityScore,
        issues,
        summary: `Found ${issues.length} issue(s) across ${code.split('\n').length} lines. Code quality score: ${score}/100.`,
        recommendations,
      });
      setIsReviewing(false);
    }, 800);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#ef4444';
      case 'high': return '#f97316';
      case 'medium': return '#eab308';
      case 'low': return '#22d3ee';
      case 'info': return '#60a5fa';
      default: return '#6b7280';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'security': return '🔒';
      case 'performance': return '⚡';
      case 'style': return '🎨';
      case 'maintainability': return '📝';
      case 'bug': return '🐛';
      default: return '💡';
    }
  };

  const filteredIssues = filter === 'all' ? result?.issues || [] : result?.issues.filter(i => i.type === filter) || [];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          🔍 Autonomous Code Review Assistant
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Paste your code, PR diff, or commit snippet. Get instant security, performance, and style analysis.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>File Name / Context</label>
            <input type="text" value={fileName} onChange={e => setFileName(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#0f172a', border: '1px solid #334155', color: '#f8fafc', marginBottom: '1rem' }} />
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Code Snippet / PR Diff</label>
            <textarea value={code} onChange={e => setCode(e.target.value)} placeholder={'// Paste your code here\nconst password = "super_secret_123";\nfor (let i = 0; i < arr.length; i++) {\n  eval(userInput);\n  if (x = true) { ... }\n}'} style={{ width: '100%', height: 300, padding: '0.75rem', borderRadius: '8px', fontFamily: 'monospace', background: '#0f172a', border: '1px solid #334155', color: '#f8fafc', fontSize: '0.9rem' }} />
            <button onClick={analyzeCode} disabled={isReviewing || !code.trim()} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', color: 'white', border: 'none', cursor: code.trim() ? 'pointer' : 'not-allowed', opacity: code.trim() ? 1 : 0.5, fontWeight: '600' }}>
              {isReviewing ? '🔍 Reviewing...' : '🚀 Run Code Review'}
            </button>
          </div>

          <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>📊 Review Summary</h3>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: result.score >= 80 ? '#4ade80' : result.score >= 60 ? '#facc15' : '#f87171' }}>{result.score}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Quality Score</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa' }}>{result.issuesFound}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Issues Found</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444' }}>🔒 {result.securityIssues}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Security</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f97316' }}>🐛 {result.bugIssues}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Bugs</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#eab308' }}>⚡ {result.performanceIssues}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Performance</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22d3ee' }}>🎨 {result.styleIssues}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Style</div>
                  </div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Summary</div>
                  <div style={{ fontWeight: '500' }}>{result.summary}</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>💡 Recommendations</div>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                    {result.recommendations.map((rec, i) => <li key={i} style={{ color: '#cbd5e1', marginBottom: '0.25rem' }}>{rec}</li>)}
                  </ul>
                </div>
              </>
            ) : (
              <div style={{ color: '#64748b', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                <div>Review results will appear here</div>
              </div>
            )}
          </div>
        </div>

        {result && (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {['all', 'security', 'performance', 'style', 'maintainability', 'bug'].map(f => (
                <button key={f} onClick={() => setFilter(f as any)} style={{ padding: '0.5rem 1rem', borderRadius: '20px', background: filter === f ? '#3b82f6' : '#1e293b', color: filter === f ? 'white' : '#94a3b8', border: 'none', cursor: 'pointer', textTransform: 'capitalize', fontWeight: filter === f ? '600' : '400' }}>
                  {f === 'all' ? '📋 All Issues' : `${getTypeIcon(f.charAt(0))} ${f}`} {f === 'all' ? `(${result.issuesFound})` : `(${result.issues.filter(i => i.type === f).length})`}
                </button>
              ))}
            </div>

            <div style={{ background: '#1e293b', borderRadius: '12px', border: '1px solid #334155', overflow: 'hidden' }}>
              <h3 style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #334155', margin: 0 }}>📋 Issue Details</h3>
              {filteredIssues.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>No issues in this category!</div>
              ) : (
                filteredIssues.map((issue) => (
                  <div key={issue.id} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #334155' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{getTypeIcon(issue.type)}</span>
                      <span style={{ fontWeight: '600', color: getSeverityColor(issue.severity) }}>[{issue.severity.toUpperCase()}]</span>
                      {issue.line && <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'monospace' }}>Line {issue.line}</span>}
                      <span style={{ color: '#cbd5e1' }}>{issue.title}</span>
                    </div>
                    <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>{issue.description}</div>
                    <div style={{ background: '#0f172a', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#4ade80' }}>
                      💡 {issue.suggestion}
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
