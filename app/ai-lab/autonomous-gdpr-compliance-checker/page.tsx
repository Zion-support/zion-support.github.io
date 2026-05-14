'use client';
import React, { useState } from 'react';

interface AuditItem { area: string; question: string; yes: boolean; weight: number; }
interface AuditResult { score: number; grade: string; total: number; passed: number; failed: number; details: { area: string; passed: number; total: number }[]; recommendations: string[]; }

const AUDIT: AuditItem[] = [
  { area: 'Lawful Basis', question: 'Do you document the lawful basis for each processing activity?', yes: false, weight: 10 },
  { area: 'Lawful Basis', question: 'Is consent freely given, specific, informed, and unambiguous?', yes: false, weight: 10 },
  { area: 'Transparency', question: 'Is your privacy policy clear, accessible, and written in plain language?', yes: false, weight: 8 },
  { area: 'Transparency', question: 'Do you inform users about data sharing with third parties?', yes: false, weight: 8 },
  { area: 'Data Minimization', question: 'Do you only collect data that is necessary for the stated purpose?', yes: false, weight: 8 },
  { area: 'Data Minimization', question: 'Is there a data retention policy with defined time limits?', yes: false, weight: 8 },
  { area: 'User Rights', question: 'Can users access, correct, and delete their personal data easily?', yes: false, weight: 10 },
  { area: 'User Rights', question: 'Is there a process to handle data portability requests?', yes: false, weight: 8 },
  { area: 'Security', question: 'Is personal data encrypted at rest and in transit?', yes: false, weight: 10 },
  { area: 'Security', question: 'Do you have an incident response plan for data breaches?', yes: false, weight: 10 },
  { area: 'DPO & Governance', question: 'Have you appointed a Data Protection Officer (if required)?', yes: false, weight: 5 },
  { area: 'DPO & Governance', question: 'Do you maintain a Record of Processing Activities (RoPA)?', yes: false, weight: 5 },
  { area: 'DPIA', question: 'Do you conduct Data Protection Impact Assessments for high-risk processing?', yes: false, weight: 8 },
  { area: 'Third Parties', question: 'Do you have Data Processing Agreements (DPAs) with all processors?', yes: false, weight: 10 },
  { area: 'Third Parties', question: 'Is data transferred outside the EU under lawful mechanisms (SCCs, adequacy)?', yes: false, weight: 8 },
  { area: 'Children', question: 'If processing children data, do you have parental consent mechanisms?', yes: false, weight: 5 },
];

export default function AutonomousGdprCompliancePage() {
  const [items, setItems] = useState(AUDIT);
  const [result, setResult] = useState<AuditResult | null>(null);

  const toggle = (i: number) => { const n = [...items]; n[i].yes = !n[i].yes; setItems(n); };

  const audit = () => {
    const totalWeight = items.reduce((s, it) => s + it.weight, 0);
    const passWeight = items.filter(it => it.yes).reduce((s, it) => s + it.weight, 0);
    const score = Math.round((passWeight / totalWeight) * 100);
    const passed = items.filter(it => it.yes).length;
    const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
    const areas = [...new Set(items.map(it => it.area))];
    const details = areas.map(area => { const areaItems = items.filter(it => it.area === area); return { area, passed: areaItems.filter(it => it.yes).length, total: areaItems.length }; });
    const recommendations: string[] = [];
    if (!items.find(it => it.question.includes('encrypt'))) recommendations.push('❗ Implement encryption at rest and in transit for all personal data.');
    if (!items.find(it => it.question.includes('access, correct'))) recommendations.push('❗ Build self-service portal for data access/correction/deletion.');
    if (!items.find(it => it.question.includes('DPA'))) recommendations.push('❗ Execute DPAs with all third-party data processors.');
    if (score < 70) recommendations.push('⚠️ Consider engaging a GDPR-specialized legal advisor.');
    if (score < 50) recommendations.push('🚨 Urgent: Significant compliance gaps. Halt new data processing until addressed.');
    setResult({ score, grade, total: items.length, passed, failed: items.length - passed, details, recommendations });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e1b4b 0%, #3b0764 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #a78bfa, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🛡️ Autonomous GDPR Compliance Checker</h1>
        <p style={{ color: '#c4b5fd', marginBottom: '2rem', fontSize: '1.1rem' }}>Audit your app for GDPR readiness across 16 controls. Get compliance scores, gap analysis, and prioritized remediation steps.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>📋 Compliance Checklist</h3>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', background: it.yes ? '#052e16' : '#0f172a', borderRadius: '6px', marginBottom: '0.25rem', cursor: 'pointer' }} onClick={() => toggle(i)}>
                <input type="checkbox" checked={it.yes} onChange={() => toggle(i)} style={{ width: 18, height: 18, cursor: 'pointer' }} />
                <div>
                  <div style={{ fontSize: '0.85rem', color: it.yes ? '#4ade80' : '#e2e8f0' }}>{it.question}</div>
                  <div style={{ fontSize: '0.7rem', color: it.yes ? '#22c55e' : '#94a3b8' }}>{it.area} (w:{it.weight})</div>
                </div>
              </div>
            ))}
            <button onClick={audit} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', background: 'linear-gradient(90deg, #7c3aed, #ec4899)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>🛡️ Run Compliance Audit</button>
          </div>

          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            {result ? (<>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: result.score >= 80 ? '#4ade80' : result.score >= 60 ? '#facc15' : '#f87171' }}>{result.grade}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Grade</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a78bfa' }}>{result.score}%</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Score</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80' }}>{result.passed}/{result.total}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Passed</div>
                </div>
              </div>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <div style={{ color: '#a78bfa', fontWeight: '600', marginBottom: '0.5rem' }}>📊 By Area</div>
                {result.details.map((d, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', padding: '0.25rem 0', color: d.passed === d.total ? '#4ade80' : '#94a3b8' }}>
                    <span>{d.area}</span><span>{d.passed}/{d.total}</span>
                  </div>
                ))}
              </div>
              {result.recommendations.length > 0 && (
                <div style={{ background: '#1c1917', border: '1px solid #44403c', padding: '1rem', borderRadius: '8px' }}>
                  {result.recommendations.map((r, i) => <div key={i} style={{ color: '#e2e8f0', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{r}</div>)}
                </div>
              )}
            </>) : (
              <div style={{ color: '#475569', textAlign: 'center', padding: '3rem 1rem' }}><div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div><div>Compliance results will appear here</div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}