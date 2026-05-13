'use client';
import React, { useState } from 'react';

interface Finding { category: string; severity: string; title: string; recommendation: string; }

const PATTERNS: Record<string, { rule: RegExp; category: string; severity: string; title: string; rec: string }> = {
  sp: { rule: /single\s*point|single\s*server|no\s*replica|no\s*redundanc/i, category: 'Reliability', severity: 'Critical', title: 'Single Point of Failure', rec: 'Add redundancy: multi-AZ deployment, replicas, failover.' },
  sql: { rule: /direct\s*sql|user\s*input.*query|concat.*sql|sql.*injection/i, category: 'Security', severity: 'Critical', title: 'Potential SQL Injection', rec: 'Use parameterized queries or ORM.' },
  auth: { rule: /no\s*auth|no\s*authenticat|public.*endpoint.*no|no\s*rate.*limit|no\s*throttl/i, category: 'Security', severity: 'High', title: 'Missing Security Controls', rec: 'Add auth, rate limiting, input validation to public endpoints.' },
  scale: { rule: /hard.*(coded|code)|magic\s*number|no\s*config|no\s*env|fixed\s*size|static.*pool/i, category: 'Maintainability', severity: 'Medium', title: 'Hard-coded Configuration', rec: 'Use environment variables, config management, or secrets manager.' },
  cache: { rule: /no\s*cache|cache.*missing|every\s*request.*database|n\+\s*1|n\+1/i, category: 'Performance', severity: 'Medium', title: 'Missing Caching Layer', rec: 'Add Redis/Memcached. Use ETags for API responses.' },
  monitor: { rule: /no\s*log|no\s*monitor|no\s*alert|no\s*observ|no\s*metric/i, category: 'Observability', severity: 'High', title: 'Missing Observability', rec: 'Add structured logging, metrics (Prometheus), and alerting.' },
  backup: { rule: /no\s*backup|no\s*dr|no\s*disaster|no\s*restore/i, category: 'Reliability', severity: 'High', title: 'No Backup/DR Strategy', rec: 'Implement automated backups, test restores, define RPO/RTO.' },
  sync: { rule: /synchronous.*call.*external|blocking.*http|sync.*api.*call|blocking.*network/i, category: 'Performance', severity: 'Medium', title: 'Synchronous External Calls', rec: 'Use async patterns, message queues, and circuit breakers.' },
};

export default function AutonomousArchitectureReviewerPage() {
  const [description, setDescription] = useState('');
  const [findings, setFindings] = useState<Finding[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const review = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const f: Finding[] = [];
      Object.values(PATTERNS).forEach(({ rule, category, severity, title, rec }) => {
        if (rule.test(description)) f.push({ category, severity, title, recommendation: rec });
      });
      // Add additional heuristic findings
      const wordCount = description.split(/\s+/).length;
      if (wordCount < 50) f.push({ category: 'Documentation', severity: 'Medium', title: 'Brief Architecture Description', recommendation: 'Provide more detail: components, data flow, deployment topology, dependencies.' });
      const lines = description.split('\n');
      if (lines.length < 5) f.push({ category: 'Design', severity: 'Low', title: 'Simple Architecture', recommendation: 'Consider if the design scales. Document trade-off decisions.' });
      // Positive findings
      if (/microservice/i.test(description)) f.push({ category: 'Architecture', severity: 'Low', title: 'Microservice Pattern Detected', recommendation: 'Ensure service boundaries are well-defined. Use API gateway for routing.' });
      if (/event.*(driven|based)|kafka|rabbitmq|sqs|pub.sub/i.test(description)) f.push({ category: 'Design', severity: 'Low', title: 'Event-Driven Architecture', recommendation: 'Ensure event schema versioning and dead-letter queues are configured.' });
      if (/container|docker|kubernetes|k8s/i.test(description)) f.push({ category: 'Infrastructure', severity: 'Low', title: 'Container-Based Deployment', recommendation: 'Use health checks, resource limits, and rolling updates.' });

      setFindings(f);
      setIsAnalyzing(false);
    }, 600);
  };

  const sevColor = (s: string) => s === 'Critical' ? '#ef4444' : s === 'High' ? '#f97316' : s === 'Medium' ? '#eab308' : '#22d3ee';
  const criticals = findings.filter(f => f.severity === 'Critical').length;
  const highs = findings.filter(f => f.severity === 'High').length;
  const score = Math.max(0, 100 - criticals * 20 - highs * 10);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1a0a2e 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #38bdf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🏗️ Autonomous Architecture Reviewer</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Paste your architecture description. Get trade-off analysis, risk assessment, and improvement recommendations.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
            <h3 style={{ color: '#38bdf8', marginBottom: '1rem' }}>📝 Architecture Description</h3>
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder={"Our system uses:\n- 3 microservices behind an API gateway\n- PostgreSQL primary with no replica\n- No caching layer, every request hits the DB\n- Single server deployment, no redundancy\n- No monitoring or logging setup"} style={{ width: '100%', height: 300, padding: '0.75rem', borderRadius: '8px', fontFamily: 'monospace', background: '#0f172a', border: '1px solid #334155', color: '#f8fafc', fontSize: '0.9rem', resize: 'vertical' }} />
            <button onClick={review} disabled={isAnalyzing || !description.trim()} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', color: 'white', border: 'none', cursor: description.trim() ? 'pointer' : 'not-allowed', opacity: description.trim() ? 1 : 0.5, fontWeight: '600' }}>{isAnalyzing ? '🏗️ Reviewing...' : '🏗️ Run Architecture Review'}</button>
          </div>
          <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
            {findings.length > 0 ? (<>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: score >= 80 ? '#4ade80' : score >= 60 ? '#facc15' : '#f87171' }}>{score}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Architecture Score</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444' }}>{criticals}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Critical</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f97316' }}>{highs}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>High</div>
                </div>
              </div>
              {findings.map((finding, i) => (
                <div key={i} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem', borderLeft: `3px solid ${sevColor(finding.severity)}` }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: '600', color: sevColor(finding.severity), fontSize: '0.75rem' }}>[{finding.severity}]</span>
                    <span style={{ background: '#334155', padding: '0.1rem 0.4rem', borderRadius: '3px', fontSize: '0.7rem' }}>{finding.category}</span>
                    <span style={{ fontWeight: '600' }}>{finding.title}</span>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>💡 {finding.recommendation}</div>
                </div>
              ))}
            </>) : (
              <div style={{ color: '#475569', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div><div>Review findings will appear here</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}