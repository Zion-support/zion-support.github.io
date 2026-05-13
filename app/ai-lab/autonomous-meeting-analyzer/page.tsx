'use client';

import React, { useState } from 'react';

interface MeetingMetrics {
  totalWords: number;
  totalSentences: number;
  estimatedDurationMin: number;
  actionItems: string[];
  questions: string[];
  participants: string[];
  topKeywords: { word: string; count: number }[];
  fillerWords: { word: string; count: number }[];
  avgSentenceLength: number;
  readabilityScore: number;
  timeWastedPercent: number;
  decisionCount: number;
  followUpNeeded: boolean;
}

const ACTION_PATTERNS = [/\b(need to|should|must|will|action item|todo|task|assign|follow up|next steps|deadline|by (monday|tuesday|wednesday|thursday|friday|next week|end of week|eow|tomorrow))\b/gi];
const FILLER_WORDS = ['um', 'uh', 'like', 'basically', 'you know', 'sort of', 'kind of', 'actually', 'i mean'];

function analyzeMeeting(text: string): MeetingMetrics {
  const words = text.match(/\b\w+\b/g) || [];
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const lines = text.split('\n').filter(l => l.trim().length > 0);
  const lower = text.toLowerCase();

  const actionItems: string[] = [];
  const questions: string[] = [];
  ACTION_PATTERNS.forEach(pattern => {
    const matches = lines.filter(l => pattern.test(l));
    actionItems.push(...matches.map(m => m.trim().substring(0, 120)));
  });
  sentences.forEach(s => {
    if (s.trim().includes('?') || /^(what|how|why|when|who|where|is|are|can|could|should|would|do|does|did)\b/i.test(s.trim())) {
      questions.push(s.trim());
    }
  });

  const participantPattern = /^([A-Z][a-z]+[A-Z][a-z]+|[A-Z][a-z]+ [A-Z][a-z]+):/gm;
  const participants = Array.from(new Set(Array.from(text.matchAll(participantPattern)).map(m => m[1])));

  const wordCounts: Record<string, number> = {};
  words.forEach(w => { const lw = w.toLowerCase(); if (lw.length > 3 && !FILLER_WORDS.includes(lw)) wordCounts[lw] = (wordCounts[lw] || 0) + 1; });
  const topKeywords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([word, count]) => ({ word, count }));

  const fillerCounts: Record<string, number> = {};
  FILLER_WORDS.forEach(fw => { const re = new RegExp(fw, 'gi'); const matches = text.match(re); if (matches) fillerCounts[fw] = matches.length; });
  const fillerWords = Object.entries(fillerCounts).sort((a, b) => b[1] - a[1]).map(([word, count]) => ({ word, count }));

  const totalFillers = Object.values(fillerCounts).reduce((s, c) => s + c, 0);
  const timeWastedPercent = words.length > 0 ? Math.min(100, Math.round((totalFillers / words.length) * 100 * 10) * 10) : 0;

  const decisionWords = ['decided', 'agreed', 'approved', 'confirmed', 'finalized', 'resolved', 'accepted'];
  const decisionCount = decisionWords.reduce((sum, dw) => sum + (text.match(new RegExp(dw, 'gi')) || []).length, 0);

  const avgSentenceLength = sentences.length > 0 ? Math.round(words.length / sentences.length) : 0;
  const readabilityScore = Math.max(0, 100 - Math.round(avgSentenceLength * 2));

  return {
    totalWords: words.length,
    totalSentences: sentences.length,
    estimatedDurationMin: Math.ceil(words.length / 150),
    actionItems: [...new Set(actionItems)].slice(0, 20),
    questions: [...new Set(questions)].slice(0, 10),
    participants: [...new Set(participants)],
    topKeywords,
    fillerWords,
    avgSentenceLength,
    readabilityScore,
    timeWastedPercent,
    decisionCount,
    followUpNeeded: actionItems.length > 0 || questions.some(q => !q.toLowerCase().includes('what do you think')),
  };
}

export default function AutonomousMeetingAnalyzer() {
  const [inputText, setInputText] = useState('');
  const [metrics, setMetrics] = useState<MeetingMetrics | null>(null);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    setMetrics(analyzeMeeting(inputText));
  };

  const qualityScore = metrics ? Math.round(
    (metrics.readabilityScore * 0.3 + (100 - metrics.timeWastedPercent) * 0.3 + Math.min(100, metrics.actionItems.length * 20) * 0.2 + Math.min(100, metrics.decisionCount * 30) * 0.2)
  ) : 0;

  return (
    <div style={{ maxWidth: '90%', margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: '12px', minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>📝 Autonomous Meeting Productivity Analyzer</h1>
      <p style={{ color: '#8b949e', marginBottom: '1.5rem' }}>Paste meeting transcripts, notes, or agendas. Get action items, participant analysis, filler word tracking, and productivity scoring.</p>

      {!metrics ? (
        <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem' }}>
          <textarea value={inputText} onChange={e => setInputText(e.target.value)} placeholder="Paste meeting transcript, notes, or agenda here...\n\nExample:\nJohn: We need to finalize the Q3 budget by Friday.\nSarah: I have some concerns about the marketing allocation.\nMike: I agree with Sarah. Let's review the ROI metrics tomorrow.\nJohn: Action item: Mike will prepare the ROI report by Wednesday." style={{ width: '100%', minHeight: '200px', padding: '0.75rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', color: '#e0e0e0', fontFamily: 'monospace', fontSize: '0.9rem', resize: 'vertical' }} />
          <button onClick={handleAnalyze} style={{ display: 'block', width: '100%', marginTop: '1rem', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #238636, #2ea043)', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>📝 Analyze Meeting</button>
        </div>
      ) : (
        <>
          {/* Score Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Productivity Score', value: `${qualityScore}%`, icon: '📈', color: qualityScore >= 70 ? '#4caf50' : qualityScore >= 50 ? '#ff9800' : '#f44336' },
              { label: 'Est. Duration', value: `${metrics.estimatedDurationMin} min`, icon: '⏱️' },
              { label: 'Action Items', value: metrics.actionItems.length, icon: '✅' },
              { label: 'Decisions Made', value: metrics.decisionCount, icon: '🎯' },
              { label: 'Filler Words', value: metrics.fillerWords.length, icon: '🗣️' },
              { label: 'Follow-up Needed', value: metrics.followUpNeeded ? 'Yes' : 'No', icon: '📋' },
            ].map(item => (
              <div key={item.label} style={{ background: '#161b22', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.85rem', color: '#8b949e', marginBottom: '0.25rem' }}>{item.label}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: item.color || '#58a6ff' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Action Items */}
          {metrics.actionItems.length > 0 && (
            <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>✅ Action Items ({metrics.actionItems.length})</h2>
              {metrics.actionItems.map((item, i) => (
                <div key={i} style={{ padding: '0.5rem', background: '#0d1117', borderRadius: '6px', marginBottom: '0.5rem', borderLeft: '4px solid #238636' }}>
                  <span style={{ color: '#c9d1d9' }}>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Questions Raised */}
          {metrics.questions.length > 0 && (
            <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>❓ Questions Raised ({metrics.questions.length})</h2>
              {metrics.questions.map((q, i) => (
                <div key={i} style={{ padding: '0.5rem', background: '#0d1117', borderRadius: '6px', marginBottom: '0.5rem', borderLeft: '4px solid #58a6ff' }}>
                  <span style={{ color: '#c9d1d9' }}>{q}</span>
                </div>
              ))}
            </div>
          )}

          {/* Filler Words */}
          {metrics.fillerWords.length > 0 && (
            <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>🗣️ Top Filler Words</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {metrics.fillerWords.slice(0, 5).map(fw => (
                  <span key={fw.word} style={{ padding: '0.5rem 0.75rem', background: '#0d1117', borderRadius: '6px', border: '1px solid #30363d', fontSize: '0.85rem' }}>
                    <strong>{fw.word}</strong>: {fw.count} uses
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>💡 Recommendations</h2>
            {metrics.timeWastedPercent > 20 && <div style={{ marginBottom: '0.5rem' }}>⚠️ High use of filler words detected ({metrics.timeWastedPercent}%). Consider more structured speaking.</div>}
            {metrics.actionItems.length === 0 && <div style={{ marginBottom: '0.5rem' }}>📋 No action items identified. Set clear next steps for attendees.</div>}
            {metrics.decisionCount === 0 && <div style={{ marginBottom: '0.5rem' }}>🎯 No decisions recorded. Ensure key decisions are documented.</div>}
            {metrics.estimatedDurationMin > 60 && <div style={{ marginBottom: '0.5rem' }}>⏰ Meeting estimated at {metrics.estimatedDurationMin} minutes. Consider splitting into focused sessions.</div>}
            {metrics.followUpNeeded && <div style={{ marginBottom: '0.5rem' }}>📧 Follow-up email recommended with action items and decisions.</div>}
          </div>

          <button onClick={() => { setMetrics(null); setInputText(''); }} style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '1rem' }}>🔄 Analyze Another Meeting</button>
        </>
      )}
    </div>
  );
}