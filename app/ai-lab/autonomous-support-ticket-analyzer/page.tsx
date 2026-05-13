'use client';
import React, { useState } from 'react';

interface TicketAnalysis {
  tickets: { id: number; text: string; category: string; sentiment: string; urgency: string; suggestedAction: string; }[];
  stats: { total: number; byCategory: Record<string, number>; bySentiment: Record<string, number>; byUrgency: Record<string, number> };
  topIssues: string[];
  recommendations: string[];
}

const CATEGORIES = ['Bug Report', 'Feature Request', 'Billing', 'How-To', 'Complaint', 'Onboarding', 'Performance', 'Security'];
const CATEGORIES_KEYWORDS: Record<string, string[]> = {
  'Bug Report': ['not working', 'broken', 'error', 'bug', 'crash', 'fail', 'issue', 'wrong'],
  'Feature Request': ['please add', 'would be great', 'suggest', 'missing', 'wish', 'need', 'request'],
  'Billing': ['charge', 'invoice', 'payment', 'refund', 'subscription', 'billing', 'price', 'cost', 'cancel'],
  'How-To': ['how', 'how do i', 'help with', 'guide', 'steps', 'tutorial', 'where to', 'can i'],
  'Complaint': ['terrible', 'awful', 'worst', 'disappointed', 'hate', 'angry', 'unacceptable', 'frustrating'],
  'Onboarding': ['setup', 'getting started', 'new user', 'first time', 'welcome', 'sign up', 'register'],
  'Performance': ['slow', 'speed', 'lag', 'load time', 'performance', 'timeout', 'freeze'],
  'Security': ['hack', 'vulnerability', 'security', 'data breach', 'password', 'unauthorized', 'leak'],
};

export default function AutonomousSupportAnalyzerPage() {
  const [rawText, setRawText] = useState('');
  const [result, setResult] = useState<TicketAnalysis | null>(null);

  const analyze = () => {
    const tickets = rawText.split(/\n{2,}/).filter(t => t.trim().length > 10);
    const analyzed = tickets.map((text, i) => {
      const lower = text.toLowerCase();
      let bestCat = 'How-To';
      let bestScore = 0;
      Object.entries(CATEGORIES_KEYWORDS).forEach(([cat, keywords]) => {
        const score = keywords.filter(kw => lower.includes(kw)).length;
        if (score > bestScore) { bestScore = score; bestCat = cat; }
      });

      const negativeWords = ['angry', 'terrible', 'awful', 'worst', 'hate', 'unacceptable', 'frustrating', 'disappointed'];
      const positiveWords = ['great', 'love', 'amazing', 'excellent', 'helpful', 'thanks', 'appreciate'];
      const negCount = negativeWords.filter(w => lower.includes(w)).length;
      const posCount = positiveWords.filter(w => lower.includes(w)).length;
      const sentiment = negCount > posCount ? 'Negative' : posCount > negCount ? 'Positive' : 'Neutral';

      let urgency = 'Low';
      if (bestCat === 'Security') urgency = 'Critical';
      else if (negCount >= 2 || lower.includes('urgent') || lower.includes('asap')) urgency = 'High';
      else if (bestCat === 'Bug Report' || bestCat === 'Performance') urgency = 'Medium';

      const actions: Record<string, string> = {
        'Bug Report': 'Reproduce and file Jira ticket. Assign to engineering.',
        'Feature Request': 'Log in product board. Evaluate against roadmap.',
        'Billing': 'Forward to finance team. Reply within 4 hours.',
        'How-To': 'Link to documentation. Consider creating new help article.',
        'Complaint': 'Acknowledge immediately. Escalate to CSM. Follow up within 24h.',
        'Onboarding': 'Send welcome kit. Offer 15-min onboarding call.',
        'Performance': 'Check server metrics. Profile slow queries.',
        'Security': 'URGENT: Notify security team. Begin incident response.',
      };

      return { id: i + 1, text: text.substring(0, 80) + (text.length > 80 ? '...' : ''), category: bestCat, sentiment, urgency, suggestedAction: actions[bestCat] };
    });

    const byCategory: Record<string, number> = {};
    const bySentiment: Record<string, number> = {};
    const byUrgency: Record<string, number> = {};
    analyzed.forEach(t => {
      byCategory[t.category] = (byCategory[t.category] || 0) + 1;
      bySentiment[t.sentiment] = (bySentiment[t.sentiment] || 0) + 1;
      byUrgency[t.urgency] = (byUrgency[t.urgency] || 0) + 1;
    });

    const recommendations: string[] = [];
    const topCat = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0];
    if (topCat) recommendations.push(`📊 Top category: ${topCat[0]} (${topCat[1]} tickets). Consider proactive content or fixes here.`);
    if (bySentiment['Negative'] && bySentiment['Negative'] > analyzed.length * 0.2) recommendations.push('⚠️ >20% negative sentiment. Investigate root causes and consider customer outreach.');
    if (byUrgency['Critical']) recommendations.push(`🚨 ${byUrgency['Critical']} critical tickets need immediate attention.`);
    if (byCategory['How-To'] && byCategory['How-To'] > analyzed.length * 0.3) recommendations.push('📝 High how-to volume. Improve documentation and self-service resources.');

    setResult({ tickets: analyzed, stats: { total: analyzed.length, byCategory, bySentiment, byUrgency }, topIssues: Object.keys(byCategory), recommendations });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e293b 0%, #3730a3 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #60a5fa, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🎫 Autonomous Support Ticket Analyzer</h1>
        <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>Paste support tickets (one per paragraph). Auto-categorize, detect sentiment/urgency, and get actionable recommendations.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <h3 style={{ marginBottom: '1rem', color: '#60a5fa' }}>📝 Paste Tickets</h3>
            <textarea value={rawText} onChange={e => setRawText(e.target.value)} placeholder={"Ticket 1:\nOur app crashes every time I try to export data. This is urgent!\n\nTicket 2:\nHow do I set up SSO? I couldn't find it in the docs.\n\nTicket 3:\nI'd love to see a dark mode feature added. It would be great for our team."} style={{ width: '100%', height: 300, padding: '0.75rem', borderRadius: '8px', fontFamily: 'monospace', background: '#1e293b', border: '1px solid #3730a3', color: '#f8fafc', fontSize: '0.9rem', resize: 'vertical' }} />
            <button onClick={analyze} disabled={!rawText.trim()} style={{ width: '100%', padding: '0.75rem', marginTop: '0.75rem', borderRadius: '8px', background: 'linear-gradient(90deg, #3b82f6, #6366f1)', color: 'white', border: 'none', cursor: rawText.trim() ? 'pointer' : 'not-allowed', opacity: rawText.trim() ? 1 : 0.5, fontWeight: '600' }}>🎫 Analyze Tickets</button>
          </div>

          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>{result.stats.total}</div>
                    <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Total Tickets</div>
                  </div>
                  <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: result.stats.bySentiment['Negative'] ? '#f87171' : '#4ade80' }}>{result.stats.bySentiment['Negative'] || 0}</div>
                    <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Negative</div>
                  </div>
                  <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: result.stats.byUrgency['Critical'] ? '#ef4444' : '#4ade80' }}>{result.stats.byUrgency['Critical'] || 0}</div>
                    <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Critical</div>
                  </div>
                </div>

                <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ color: '#60a5fa', fontWeight: '600', marginBottom: '0.5rem' }}>📊 By Category</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem', fontSize: '0.85rem' }}>
                    {Object.entries(result.stats.byCategory).map(([cat, count]) => (
                      <div key={cat} style={{ display: 'flex', justifyContent: 'space-between' }}><span>{cat}</span><span style={{ fontWeight: '600' }}>{count}</span></div>
                    ))}
                  </div>
                </div>

                {result.recommendations.map((r, i) => (
                  <div key={i} style={{ background: '#1e1b4b', padding: '0.75rem', borderRadius: '8px', marginTop: '0.5rem', fontSize: '0.85rem', color: '#e2e8f0' }}>{r}</div>
                ))}
              </>
            ) : (
              <div style={{ color: '#475569', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎫</div><div>Analysis results will appear here</div>
              </div>
            )}
          </div>
        </div>

        {result && result.tickets.length > 0 && (
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <h3 style={{ marginBottom: '1rem', color: '#60a5fa' }}>📋 Ticket Details</h3>
            {result.tickets.map(t => (
              <div key={t.id} style={{ background: '#1e293b', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: '700', color: '#60a5fa' }}>#{t.id}</span>
                  <span style={{ background: '#1e40af', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.75rem' }}>{t.category}</span>
                  <span style={{ color: t.sentiment === 'Negative' ? '#f87171' : t.sentiment === 'Positive' ? '#4ade80' : '#fbbf24', fontSize: '0.75rem' }}>{t.sentiment}</span>
                  <span style={{ color: t.urgency === 'Critical' ? '#ef4444' : t.urgency === 'High' ? '#f97316' : t.urgency === 'Medium' ? '#fbbf24' : '#4ade80', fontSize: '0.75rem', fontWeight: '600' }}>{t.urgency}</span>
                </div>
                <div style={{ color: '#cbd5e1', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{t.text}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>💡 {t.suggestedAction}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}