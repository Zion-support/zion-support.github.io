'use client';

import React, { useState } from 'react';

interface Vulnerability {
  id: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | 'Info';
  category: string;
  title: string;
  description: string;
  remediation: string;
  codeExample?: string;
  owaspReference?: string;
}

const SECURITY_PATTERNS: Record<string, (input: string) => Vulnerability[]> = {
  secrets: (input) => {
    const vulns: Vulnerability[] = [];
    if (/AKIA[0-9A-Z]{16}/.test(input)) {
      vulns.push({
        id: 'SEC-001', severity: 'Critical', category: 'Secrets Exposure',
        title: 'AWS Access Key Detected',
        description: 'AWS access key found in code. Attackers can exploit your cloud resources.',
        remediation: 'Remove immediately, rotate credentials, use environment variables or AWS Secrets Manager.',
        codeExample: 'const key = process.env.AWS_ACCESS_KEY_ID;',
        owaspReference: 'A02:2021 – Cryptographic Failures',
      });
    }
    if (/sk-[a-zA-Z0-9]{32,}/.test(input) || /OPENAI_API_KEY/.test(input)) {
      vulns.push({
        id: 'SEC-002', severity: 'Critical', category: 'Secrets Exposure',
        title: 'OpenAI API Key Detected',
        remediation: 'Remove key, revoke in OpenAI dashboard, use server-side proxy pattern.',
        owaspReference: 'A02:2021 – Cryptographic Failures',
      });
    }
    if (/ghp_[a-zA-Z0-9]{36}/.test(input)) {
      vulns.push({
        id: 'SEC-003', severity: 'Critical', category: 'Secrets Exposure',
        title: 'GitHub Personal Access Token Detected',
        remediation: 'Revoke token immediately, rotate credentials, use GitHub\'s token patterns for CI.',
        owaspReference: 'A02:2021 – Cryptographic Failures',
      });
    }
    if (/password['"]?\s*[:=]\s*['"]\w{3,}/i.test(input) && !/process\.env|secret|placeholder|example/i.test(input)) {
      vulns.push({
        id: 'SEC-004', severity: 'High', category: 'Hardcoded Credentials',
        title: 'Possible Hardcoded Password',
        description: 'Potential hardcoded password detected in source code.',
        remediation: 'Move to environment variables or secrets management service.',
        owaspReference: 'A07:2021 – Identification and Authentication Failures',
      });
    }
    return vulns;
  },

  injection: (input) => {
    const vulns: Vulnerability[] = [];
    if (/exec\s*\(/.test(input) || /eval\s*\(/.test(input)) {
      vulns.push({
        id: 'SEC-010', severity: 'Critical', category: 'Code Injection',
        title: 'eval() or exec() Usage Detected',
        description: 'Dynamic code execution can lead to Remote Code Execution (RCE) if user input reaches these functions.',
        remediation: 'Avoid eval/exec. Use safer alternatives like JSON.parse() or Function constructors with strict input validation.',
        codeExample: '// Instead of eval(code), use:\nconst result = Function('"use strict"; return (' + code + ')')();',
        owaspReference: 'A03:2021 – Injection',
      });
    }
    if (/\$\{.*req\./i.test(input) || /innerHTML\s*=\s*.*\+/.test(input)) {
      vulns.push({
        id: 'SEC-011', severity: 'High', category: 'Cross-Site Scripting (XSS)',
        title: 'Potential XSS via User Input in HTML',
        description: 'User input being inserted directly into HTML without sanitization.',
        remediation: 'Use textContent instead of innerHTML, or sanitize with DOMPurify.',
        owaspReference: 'A03:2021 – Injection',
      });
    }
    return vulns;
  },

  sql: (input) => {
    const vulns: Vulnerability[] = [];
    if (/SELECT.*FROM.*\+|INSERT.*INTO.*\+|UPDATE.*SET.*\+|DELETE.*FROM.*\+/i.test(input)) {
      vulns.push({
        id: 'SEC-020', severity: 'Critical', category: 'SQL Injection',
        title: 'Potential SQL Injection via String Concatenation',
        description: 'SQL query built using string concatenation instead of parameterized queries.',
        remediation: 'Use parameterized queries or ORM. Example: db.query("SELECT * FROM users WHERE id = $1", [id])',
        owaspReference: 'A03:2021 – Injection',
      });
    }
    return vulns;
  },

  headers: (input) => {
    const vulns: Vulnerability[] = [];
    if (!/Content-Security-Policy/i.test(input)) {
      vulns.push({
        id: 'SEC-030', severity: 'Medium', category: 'Missing Security Headers',
        title: 'Content-Security-Policy Header Missing',
        description: 'CSP header not configured. Without CSP, the app is vulnerable to XSS and data injection attacks.',
        remediation: 'Add CSP header: res.setHeader("Content-Security-Policy", "default-src \'self\';")',
        owaspReference: 'A05:2021 – Security Misconfiguration',
      });
    }
    if (!/X-Frame-Options/i.test(input) && !/frame-ancestors/i.test(input)) {
      vulns.push({
        id: 'SEC-031', severity: 'Medium', category: 'Missing Security Headers',
        title: 'X-Frame-Options / frame-ancestors Not Set',
        description: 'App may be vulnerable to clickjacking attacks.',
        remediation: 'Add X-Frame-Options: DENY or CSP frame-ancestors \'none\''.
        owaspReference: 'A05:2021 – Security Misconfiguration',
      });
    }
    if (!/Strict-Transport-Security/i.test(input) && !/HSTS/i.test(input)) {
      vulns.push({
        id: 'SEC-032', severity: 'High', category: 'Missing Security Headers',
        title: 'HSTS Header Not Configured',
        description: 'Without HSTS, users may be vulnerable to protocol downgrade attacks.',
        remediation: 'Add: Strict-Transport-Security: max-age=31536000; includeSubDomains',
        owaspReference: 'A05:2021 – Security Misconfiguration',
      });
    }
    return vulns;
  },

  dependencies: (input) => {
    const vulns: Vulnerability[] = [];
    const depPattern = /(?:react|express|next|axios|lodash|jquery|webpack|typescript|node):\s*["']?(\d+\.\d+)/gi;
    const deps: Record<string, string> = {};
    let match;
    while ((match = depPattern.exec(input)) !== null) {
      deps[match[1].toLowerCase()] = match[2];
    }
    const outdated: Record<string, string> = {
      'react': '19.0.0', 'express': '5.0.0', 'next.js': '15.0.0',
      'axios': '1.7.0', 'lodash': '4.17.21', 'jquery': '3.7.1',
      'webpack': '5.94.0', 'typescript': '5.6.0', 'node': '22.0.0',
    };
    for (const [dep, version] of Object.entries(outdated)) {
      if (deps[dep]) {
        if (parseInt(deps[dep].split('.')[0]) < parseInt(version.split('.')[0])) {
          vulns.push({
            id: 'SEC-040', severity: 'Medium', category: 'Outdated Dependencies',
            title: `${dep} is outdated (current: ${deps[dep]}, latest: ${version})`,
            description: 'Outdated dependencies may contain known vulnerabilities.',
            remediation: `Update ${dep} to v${version} using npm update or yarn upgrade.`,
          });
        }
      }
    }
    return vulns;
  },
};

const ALL_PATTERNS = Object.values(SECURITY_PATTERNS);

export default function AutonomousSecurityPostureScanner() {
  const [input, setInput] = useState('');
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [scanned, setScanned] = useState(false);

  const scanCode = () => {
    const vulns: Vulnerability[] = [];
    ALL_PATTERNS.forEach(patternFn => {
      vulns.push(...patternFn(input));
    });
    setVulnerabilities(vulns);
    setScanned(true);
  };

  const severityColor = (s: string) => {
    const colors: Record<string, string> = {
      Critical: '#dc2626', High: '#ea580c', Medium: '#ca8a04',
      Low: '#16a34a', Info: '#2563eb',
    };
    return colors[s] || '#6b7280';
  };

  const scoreVulnerabilities = () => {
    if (vulnerabilities.length === 0) return 100;
    const weights: Record<string, number> = { Critical: 25, High: 15, Medium: 8, Low: 3, Info: 1 };
    const total = vulnerabilities.reduce((sum, v) => sum + (weights[v.severity] || 1), 0);
    return Math.max(0, Math.min(100, 100 - total));
  };

  const score = scoreVulnerabilities();

  return (
    <div style={{ maxWidth: 1000, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>🔒 Autonomous Security Posture Scanner</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Paste code, configuration, or headers to scan for vulnerabilities, exposed secrets, missing security headers, and outdated dependencies. Mapped to OWASP Top 10.</p>

      {/* Input */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Paste your code, config file, HTTP headers, or package.json here…"
          style={{ width: '100%', minHeight: 200, padding: '0.75rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: 8, color: '#e0e0e0', fontFamily: 'monospace', fontSize: '0.9rem', resize: 'vertical' }} />
        <button onClick={scanCode} style={{ display: 'block', width: '100%', marginTop: '1rem', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #dc2626, #ea580c)', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
          🔍 Scan for Vulnerabilities
        </button>
      </div>

      {scanned && (
        <>
          {/* Score */}
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', fontWeight: 700, color: score >= 80 ? '#22c55e' : score >= 60 ? '#eab308' : '#ef4444' }}>{score}</div>
            <div style={{ fontSize: '1.1rem', color: '#8b949e' }}>Security Score / 100</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
              {['Critical', 'High', 'Medium', 'Low', 'Info'].map(s => {
                const count = vulnerabilities.filter(v => v.severity === s).length;
                count > 0 && (
                  <span key={s} style={{ color: severityColor(s), fontSize: '0.9rem' }}>{s}: {count}</span>
                );
              })}
            </div>
          </div>

          {/* Vulnerabilities */}
          {vulnerabilities.length > 0 ? (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>⚠️ Vulnerabilities Found ({vulnerabilities.length})</h2>
              {vulnerabilities.map((v, i) => (
                <div key={i} style={{ background: '#161b22', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem', borderLeft: `4px solid ${severityColor(v.severity)}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600 }}>{v.title}</span>
                    <span style={{ background: severityColor(v.severity), color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 4, fontSize: '0.75rem' }}>{v.severity}</span>
                  </div>
                  <div style={{ color: '#8b949e', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{v.id} · {v.category}{v.owaspReference && ` · ${v.owaspReference}`}</div>
                  <p style={{ color: '#c9d1d9', marginBottom: '0.5rem' }}>{v.description}</p>
                  <div style={{ padding: '0.75rem', background: '#0d1117', borderRadius: 6 }}>
                    <span style={{ color: '#4caf50', fontWeight: 600 }}>✅ Remediation:</span> {v.remediation}
                  </div>
                  {v.codeExample && (
                    <pre style={{ marginTop: '0.5rem', padding: '0.75rem', background: '#0d1117', borderRadius: 6, overflowX: 'auto', fontSize: '0.85rem', color: '#c9d1d9' }}>{v.codeExample}</pre>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ background: '#161b22', borderRadius: 10, padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem' }}>🎉</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0.5rem', color: '#4caf50' }}>No Issues Detected</h2>
              <p style={{ color: '#8b949e' }}>Great job! Your code passed the security scan.</p>
            </div>
          )}

          {/* OWASP Mapping */}
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginTop: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📊 OWASP Top 10 Mapping</h2>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {Array.from(new Set(vulnerabilities.map(v => v.owaspReference).filter(Boolean))).map(ref => (
                <div key={ref} style={{ padding: '0.5rem 0.75rem', background: '#0d1117', borderRadius: 6, border: '1px solid #30363d' }}>
                  <span style={{ color: '#f5a623', fontWeight: 600 }}>{ref}</span>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => { setScanned(false); setVulnerabilities([]); setInput(''); }} style={{ display: 'block', width: '100%', padding: '0.75rem', marginTop: '1.5rem', fontSize: '1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
            🔄 Scan Again
          </button>
        </>
      )}
    </div>
  );
}