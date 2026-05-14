'use client';

import React, { useState } from 'react';

interface ComplianceArea {
  id: string;
  category: string;
  question: string;
  options: { value: number; label: string }[];
}

interface ComplianceResult {
  gdprScore: number;
  hipaaScore: number;
  soc2Score: number;
  overallScore: number;
  gaps: { regulation: string; severity: 'critical' | 'high' | 'medium' | 'low'; item: string; remedy: string; zionTool: string }[];
  breachReadiness: number;
}

const COMPLIANCE_QUESTIONS: ComplianceArea[] = [
  {
    id: 'gdpr1', category: 'GDPR',
    question: 'Do you have a documented data inventory mapping all personal data flows?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Partial' }, { value: 2, label: 'Complete' }],
  },
  {
    id: 'gdpr2', category: 'GDPR',
    question: 'Is there a lawful basis (consent, legitimate interest) documented for each data processing activity?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Some activities' }, { value: 2, label: 'All activities' }],
  },
  {
    id: 'gdpr3', category: 'GDPR',
    question: 'Can you fulfill data subject access requests (DSAR) within 30 days?',
    options: [{ value: 0, label: 'No process' }, { value: 1, label: 'Manual process' }, { value: 2, label: 'Automated' }],
  },
  {
    id: 'gdpr4', category: 'GDPR',
    question: 'Do you have a Data Protection Officer (DPO) or equivalent appointed?',
    options: [{ value: 0, label: 'No' }, { value: 2, label: 'Yes' }],
  },
  {
    id: 'gdpr5', category: 'GDPR',
    question: 'Is data processing limited to what is necessary (data minimization)?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Partially' }, { value: 2, label: 'Fully implemented' }],
  },
  {
    id: 'hipaa1', category: 'HIPAA',
    question: 'Have you completed a HIPAA Security Risk Analysis?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'More than 1 year ago' }, { value: 2, label: 'Within last 12 months' }],
  },
  {
    id: 'hipaa2', category: 'HIPAA',
    question: 'Is all PHI encrypted at rest and in transit?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'In transit only' }, { value: 2, label: 'Both' }],
  },
  {
    id: 'hipaa3', category: 'HIPAA',
    question: 'Do you have a breach notification plan with 60-day notification procedures?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Draft only' }, { value: 2, label: 'Tested plan' }],
  },
  {
    id: 'hipaa4', category: 'HIPAA',
    question: 'Are workforce access controls role-based with audit logging?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Basic' }, { value: 2, label: 'Full RBAC + audit' }],
  },
  {
    id: 'hipaa5', category: 'HIPAA',
    question: 'Is there a Business Associate Agreement (BAA) process for all third-party vendors?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Some vendors' }, { value: 2, label: 'All vendors' }],
  },
  {
    id: 'soc2_1', category: 'SOC 2',
    question: 'Are access controls formally documented with periodic reviews?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Documented only' }, { value: 2, label: 'Documented + reviewed quarterly' }],
  },
  {
    id: 'soc2_2', category: 'SOC 2',
    question: 'Is there a change management process with approval workflows?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Informal' }, { value: 2, label: 'Formal with audit trail' }],
  },
  {
    id: 'soc2_3', category: 'SOC 2',
    question: 'Are system logs retained for a minimum of 90 days?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Less than 90 days' }, { value: 2, label: '90+ days' }],
  },
  {
    id: 'soc2_4', category: 'SOC 2',
    question: 'Do you have an incident response plan with defined SLAs?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Draft' }, { value: 2, label: 'Documented + tested' }],
  },
  {
    id: 'soc2_5', category: 'SOC 2',
    question: 'Is there a vendor risk assessment process?',
    options: [{ value: 0, label: 'No' }, { value: 1, label: 'Ad-hoc' }, { value: 2, label: 'Structured annual review' }],
  },
];

const ZION_TOOL_MAP: Record<string, string> = {
  'Data inventory & mapping': 'Zion Data Pipeline Automation',
  'Consent management': 'Zion GDPR Compliance Module',
  'DSAR automation': 'Zion Customer Data 360',
  'DPO designation': 'Zion Governance Risk Advisor',
  'Data minimization': 'Zion Privacy Analytics Dashboard',
  'Security Risk Analysis': 'Zion DevSecOps Scanner',
  'PHI encryption': 'Zion Security Shield',
  'Breach notification': 'Zion Incident Response System',
  'RBAC + audit logging': 'Zion Customer 360 + Audit Trail',
  'BAA process': 'Zion Contract Lifecycle Manager',
  'Access control documentation': 'Zion Compliance Reporting',
  'Change management': 'Zion DevOps Automation',
  'Log retention': 'Zion Log Analytics',
  'Incident response plan': 'Zion Incident Response System',
  'Vendor risk assessment': 'Zion Vendor Risk Analytics',
};

export default function AutonomousComplianceAuditor() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ComplianceResult | null>(null);
  const [activeTab, setActiveTab] = useState<'gdpr' | 'hipaa' | 'soc2'>('gdpr');

  const groupedQuestions = COMPLIANCE_QUESTIONS.reduce<Record<string, ComplianceArea[]>>((acc, q) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push(q);
    return acc;
  }, {});

  const calculateScore = () => {
    const gdprQuestions = groupedQuestions['GDPR'] || [];
    const hipaaQuestions = groupedQuestions['HIPAA'] || [];
    const soc2Questions = groupedQuestions['SOC 2'] || [];

    const score = (qs: ComplianceArea[]) => {
      let total = 0;
      let max = 0;
      for (const q of qs) {
        if (answers[q.id] !== undefined) {
          total += answers[q.id];
          max += q.options.reduce((m, o) => Math.max(m, o.value), 0);
        }
      }
      return max > 0 ? Math.round((total / max) * 100) : 0;
    };

    const gdprScore = score(gdprQuestions);
    const hipaaScore = score(hipaaQuestions);
    const soc2Score = score(soc2Questions);
    const overall = (gdprScore + hipaaScore + soc2Score) / 3;

    const gaps: ComplianceResult['gaps'][] = [];

    COMPLIANCE_QUESTIONS.forEach(q => {
      const val = answers[q.id];
      if (val !== undefined && val < (q.options.reduce((m, o) => Math.max(m, o.value), 0))) {
        const remedy = q.question.endsWith('?') ? q.question.replace('?', '') : q.question;
        gaps.push({
          regulation: q.category,
          severity: val === 0 ? 'critical' : val === 1 ? 'high' : 'medium',
          item: q.question,
          remedy: `Implement: ${remedy}`,
          zionTool: ZION_TOOL_MAP[remedy.split(' ').slice(0, 3).join(' ')] || 'Zion Compliance Manager',
        });
      }
    });

    // Sort by severity
    const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    gaps.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

    const breachReadiness = Math.round(
      ((answers['hipaa3'] ?? 0) * 50 + (answers['gdpr3'] ?? 0) * 25 + (answers['soc2_4'] ?? 0) * 25) / 100
    );

    setResult({ gdprScore, hipaaScore, soc2Score, overall: Math.round(overall), gaps, breachReadiness });
  };

  const scoreColor = (score: number) => {
    if (score >= 80) return '#4caf50';
    if (score >= 60) return '#ff9800';
    if (score >= 40) return '#ff5722';
    return '#f44336';
  };

  const severityColor = (s: string) => ({ critical: '#f44336', high: '#ff9800', medium: '#ffd600', low: '#4caf50' }[s] || '#8b949e');

  return (
    <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>🛡️ Autonomous Compliance Auditor</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Assess your GDPR, HIPAA, and SOC 2 readiness. Get gap analysis, remediation steps, and Zion tool recommendations.</p>

      {!result ? (
        <>
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              📋 Compliance Questionnaire ({Object.keys(answers).length}/{COMPLIANCE_QUESTIONS.length} answered)
            </h2>

            {Object.entries(groupedQuestions).map(([category, questions]) => (
              <div key={category} style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#58a6ff', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #30363d' }}>
                  {category === 'GDPR' ? '🇪🇺' : category === 'HIPAA' ? '🏥' : '🔒'} {category} ({questions.filter(q => answers[q.id] !== undefined).length}/{questions.length})
                </h3>
                {questions.map((q, i) => (
                  <div key={q.id} style={{ marginBottom: '1.25rem', padding: '1rem', background: '#0d1117', borderRadius: 8, border: '1px solid #21262d' }}>
                    <p style={{ margin: '0 0 0.75rem', fontWeight: 500 }}>Q{i + 1}: {q.question}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {q.options.map(opt => (
                        <button key={opt.value} onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt.value }))}
                          style={{ padding: '0.5rem 1rem', borderRadius: 6, border: `1px solid ${answers[q.id] === opt.value ? '#1f6feb' : '#30363d'}`, background: answers[q.id] === opt.value ? '#1f6feb' : 'transparent', color: '#fff', cursor: 'pointer', fontSize: '0.9rem' }}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button onClick={calculateScore} style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)', border: 'none', borderRadius: 8, cursor: 'pointer', marginBottom: '1.5rem' }}>
            🛡️ Calculate Compliance Score
          </button>
        </>
      ) : (
        <>
          {/* Score Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Overall', score: result.overallScore, icon: '🛡️' },
              { label: 'GDPR', score: result.gdprScore, icon: '🇪🇺' },
              { label: 'HIPAA', score: result.hipaaScore, icon: '🏥' },
              { label: 'SOC 2', score: result.soc2Score, icon: '🔒' },
              { label: 'Breach Readiness', score: result.breachReadiness, icon: '🚨' },
            ].map(item => (
              <div key={item.label} style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', textAlign: 'center', border: `2px solid ${scoreColor(item.score)}` }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.85rem', color: '#8b949e', marginBottom: '0.25rem' }}>{item.label}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: scoreColor(item.score) }}>{item.score}</div>
                <div style={{ fontSize: '0.75rem', color: '#8b949e' }}>/ 100</div>
              </div>
            ))}
          </div>

          {/* Gap Analysis */}
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>⚠️ Gap Analysis ({result.gaps.length} gaps found)</h2>
            {result.gaps.map((gap, i) => (
              <div key={i} style={{ background: '#0d1117', borderRadius: 8, padding: '1rem', marginBottom: '0.75rem', borderLeft: `4px solid ${severityColor(gap.severity)}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', background: severityColor(gap.severity), color: '#000', padding: '0.2rem 0.5rem', borderRadius: 4 }}>{gap.severity}</span>
                  <span style={{ fontSize: '0.85rem', color: '#58a6ff' }}>{gap.regulation}</span>
                </div>
                <p style={{ margin: '0 0 0.5rem', color: '#c9d1d9' }}>{gap.item}</p>
                <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: '#4caf50' }}>➜ {gap.remedy}</p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#8b949e' }}>🔧 Recommended: {gap.zionTool}</p>
              </div>
            ))}
          </div>

          <button onClick={() => { setResult(null); setAnswers({}); }} style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: 'none', borderRadius: 8, cursor: 'pointer', marginBottom: '1.5rem' }}>
            🔄 Retake Assessment
          </button>
        </>
      )}
    </div>
  );
}
