'use client';

import React, { useState } from 'react';

interface ScoreResult {
  revenueScore: number;
  operationsScore: number;
  experienceScore: number;
  overallScore: number;
  recommendations: string[];
  zionTools: string[];
}

const AI_READINESS_QUESTIONS = [
  { id: 'r1', category: 'revenue', text: 'Monthly Revenue Level', options: [
    { value: 1, label: '< $10K' },
    { value: 2, label: '$10K - $50K' },
    { value: 3, label: '$50K - $200K' },
    { value: 4, label: '$200K+' },
  ]},
  { id: 'r2', category: 'revenue', text: 'Lead Generation Method', options: [
    { value: 1, label: 'Manual outreach only' },
    { value: 2, label: 'Basic forms + email' },
    { value: 3, label: 'Some automation' },
    { value: 4, label: 'Fully automated pipeline' },
  ]},
  { id: 'r3', category: 'revenue', text: 'Sales Process Stage', options: [
    { value: 1, label: 'No defined process' },
    { value: 2, label: 'Basic CRM' },
    { value: 3, label: 'Structured, some automation' },
    { value: 4, label: 'AI-powered scoring & follow-up' },
  ]},
  { id: 'r4', category: 'revenue', text: 'Content Production', options: [
    { value: 1, label: 'Ad-hoc, inconsistent' },
    { value: 2, label: 'Regular schedule' },
    { value: 3, label: 'Scaled with tools' },
    { value: 4, label: 'AI-repurposing engine' },
  ]},
  { id: 'o1', category: 'operations', text: 'Operational Workflows', options: [
    { value: 1, label: 'Mostly manual' },
    { value: 2, label: 'Some automation' },
    { value: 3, label: 'Mostly automated' },
    { value: 4, label: 'Self-healing systems' },
  ]},
  { id: 'o2', category: 'operations', text: 'Incident Response', options: [
    { value: 1, label: 'Reactive, no system' },
    { value: 2, label: 'Ticketing system' },
    { value: 3, label: 'Automated alerts' },
    { value: 4, label: 'AI incident commander' },
  ]},
  { id: 'o3', category: 'operations', text: 'Team Coordination', options: [
    { value: 1, label: 'Meetings heavy' },
    { value: 2, label: 'Some async' },
    { value: 3, label: 'Mostly async tools' },
    { value: 4, label: 'AI agents coordinating work' },
  ]},
  { id: 'o4', category: 'operations', text: 'Security & Compliance', options: [
    { value: 1, label: 'No formal process' },
    { value: 2, label: 'Basic checks' },
    { value: 3, label: 'Automated scanning' },
    { value: 4, label: 'Continuous AI monitoring' },
  ]},
  { id: 'e1', category: 'experience', text: 'Customer Support', options: [
    { value: 1, label: 'Manual only' },
    { value: 2, label: 'Basic chatbot' },
    { value: 3, label: 'Omnichannel + knowledge base' },
    { value: 4, label: 'AI-powered 24/7 support' },
  ]},
  { id: 'e2', category: 'experience', text: 'Personalization Level', options: [
    { value: 1, label: 'None' },
    { value: 2, label: 'Basic segmentation' },
    { value: 3, label: 'Dynamic recommendations' },
    { value: 4, label: 'AI-driven personalization' },
  ]},
  { id: 'e3', category: 'experience', text: 'Feedback Loop', options: [
    { value: 1, label: 'No formal feedback' },
    { value: 2, label: 'Annual surveys' },
    { value: 3, label: 'Continuous NPS monitoring' },
    { value: 4, label: 'Real-time sentiment analysis' },
  ]},
  { id: 'e4', category: 'experience', text: 'Onboarding Experience', options: [
    { value: 1, label: 'Manual, inconsistent' },
    { value: 2, label: 'Documented process' },
    { value: 3, label: 'Automated workflows' },
    { value: 4, label: 'AI-guided, personalized path' },
  ]},
];

export default function AIRIOpsScorecard() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ScoreResult | null>(null);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const revenueQuestions = AI_READINESS_QUESTIONS.filter(q => q.category === 'revenue');
    const opsQuestions = AI_READINESS_QUESTIONS.filter(q => q.category === 'operations');
    const expQuestions = AI_READINESS_QUESTIONS.filter(q => q.category === 'experience');

    const calculate = (qs: typeof AI_READINESS_QUESTIONS) => {
      let total = 0;
      let max = 0;
      let answered = 0;
      for (const q of qs) {
        if (answers[q.id] !== undefined) {
          total += answers[q.id];
          max += 4;
          answered++;
        }
        if (answered === 0) return 0;
        return answered === qs.length ? Math.round((total / max) * 100) : Math.round((total / (answered * 4)) * 100);
      }
    };

    const revenueScore = calculate(revenueQuestions);
    const operationsScore = calculate(opsQuestions);
    const experienceScore = calculate(expQuestions);
    const allAnswered = Object.keys(answers).length === AI_READINESS_QUESTIONS.length;
    const overallScore = allAnswered ? Math.round((revenueScore + operationsScore + experienceScore) / 3) : 0;

    const recommendations: string[] = [];
    const zionTools: string[] = [];

    if (revenueScore < 75) {
      recommendations.push('Implement AI lead scoring and automated follow-ups');
      zionTools.push('AI Lead Scoring', 'Content Repurposing Engine');
    }
    if (operationsScore < 75) {
      recommendations.push('Deploy automated monitoring and incident response');
      zionTools.push('Self-Healing Monitor', 'Incident Response System');
    }
    if (experienceScore < 75) {
      recommendations.push('Launch AI-powered customer support and personalization');
      zionTools.push('Knowledge Base Chatbot', 'Sentiment Analyzer');
    }
    if (overallScore >= 80) {
      recommendations.push('Consider expanding AI to competitive intelligence and advanced forecasting');
      zionTools.push('Competitive Intelligence', 'Revenue Forecast Studio');
    }

    setResult({ revenueScore, operationsScore, experienceScore, overallScore, recommendations, zionTools });
  };

  const scoreColor = (score: number) => {
    if (score >= 80) return '#4caf50';
    if (score >= 60) return '#ff9800';
    if (score >= 40) return '#ff5722';
    return '#f44336';
  };

  return (
    <div style={{ maxWidth: 860, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '80vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>📊 AI ROI & Ops Scorecard</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Estimate impact across revenue, operations, and experience. See where AI will likely move the needle first.</p>

      {!result && (
        <>
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📝 Assessment (12 questions)</h2>
            {AI_READINESS_QUESTIONS.map((q, i) => (
              <div key={q.id} style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #21262d' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#c9d1d9' }}>
                  {i + 1}. {q.text}
                  <span style={{ fontSize: '0.8rem', color: '#8b949e', marginLeft: '0.5rem', textTransform: 'capitalize' }}>({q.category})</span>
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {q.options.map(option => (
                    <button key={option.value} onClick={() => handleAnswer(q.id, option.value)}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: 6,
                        border: `1px solid ${answers[q.id] === option.value ? '#1f6feb' : '#30363d'}`,
                        background: answers[q.id] === option.value ? '#1f6feb' : 'transparent',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                      }}>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button onClick={calculateScore} disabled={Object.keys(answers).length < AI_READINESS_QUESTIONS.length}
            style={{
              display: 'block', width: '100%', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600,
              color: Object.keys(answers).length === AI_READINESS_QUESTIONS.length ? '#fff' : '#8b949e',
              background: Object.keys(answers).length === AI_READINESS_QUESTIONS.length ? 'linear-gradient(90deg, #238636, #2ea043)' : '#21262d',
              border: 'none', borderRadius: 8, cursor: Object.keys(answers).length === AI_READINESS_QUESTIONS.length ? 'pointer' : 'not-allowed',
            }}>
            {Object.keys(answers).length}/{AI_READINESS_QUESTIONS.length} answered — Calculate Score
          </button>
        </>
      )}

      {result && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Revenue', score: result.revenueScore },
              { label: 'Operations', score: result.operationsScore },
              { label: 'Experience', score: result.experienceScore },
              { label: 'Overall', score: result.overallScore },
            ].map(item => (
              <div key={item.label} style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', textAlign: 'center', border: `2px solid ${scoreColor(item.score)}` }}>
                <div style={{ fontSize: '0.9rem', color: '#8b949e', marginBottom: '0.5rem' }}>{item.label}</div>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: scoreColor(item.score) }}>{item.score}</div>
                <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>/ 100</div>
              </div>
            ))}
          </div>

          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>🎯 Top Recommendations</h2>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              {result.recommendations.map((r, i) => <li key={i} style={{ marginBottom: '0.5rem', color: '#c9d1d9' }}>{r}</li>)}
            </ul>
          </div>

          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>🔧 Recommended Zion Tools</h2>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {result.zionTools.map((t, i) => <span key={i} style={{ padding: '0.5rem 0.75rem', background: '#0d1117', borderRadius: 6, border: '1px solid #30363d', fontSize: '0.9rem' }}>{t}</span>)}
            </div>
          </div>

          <button onClick={() => { setResult(null); setAnswers({}); }}
            style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: 'none', borderRadius: 8, cursor: 'pointer', marginTop: '1rem' }}>
            🔄 Retake Assessment
          </button>
        </>
      )}
    </div>
  );
}
