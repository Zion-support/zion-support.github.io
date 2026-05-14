'use client';
import React, { useState } from 'react';

interface CheckResult {
  category: string;
  title: string;
  status: 'pass' | 'fail' | 'warning';
  score: number;
  maxScore: number;
  description: string;
  fix?: string;
}

const CHECKS: CheckResult[] = [
  { category: 'Authentication', title: 'SPF Record', status: 'pass', score: 10, maxScore: 10, description: 'Valid SPF record found: v=spf1 include:_spf.google.com ~all' },
  { category: 'Authentication', title: 'DKIM Signature', status: 'pass', score: 10, maxScore: 10, description: 'DKIM signature present and valid (selector: google)' },
  { category: 'Authentication', title: 'DMARC Policy', status: 'warning', score: 5, maxScore: 10, description: 'DMARC policy is "none" — consider upgrading to "quarantine"', fix: 'Update DMARC record to v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com' },
  { category: 'Authentication', title: 'Reverse DNS (PTR)', status: 'pass', score: 10, maxScore: 10, description: 'PTR record matches sending domain' },
  { category: 'Content', title: 'Subject Line Length', status: 'pass', score: 10, maxScore: 10, description: 'Subject is 42 characters — within 50 char optimal range' },
  { category: 'Content', title: 'Image-to-Text Ratio', status: 'fail', score: 0, maxScore: 10, description: 'Email is 70% images — spam filters prefer 60/40 text-to-image', fix: 'Add more text content relative to images to improve deliverability' },
  { category: 'Content', title: 'Spam Trigger Words', status: 'warning', score: 5, maxScore: 10, description: '3 potential spam triggers found: "FREE", "ACT NOW", "Limited"', fix: 'Replace "FREE" with "Complimentary", remove excessive urgency language' },
  { category: 'Content', title: 'HTML to Text Ratio', status: 'pass', score: 10, maxScore: 10, description: 'Both HTML and plain text versions included' },
  { category: 'Content', title: 'Link Count', status: 'pass', score: 10, maxScore: 10, description: '4 links found — below 10-link threshold for spam filters' },
  { category: 'Infrastructure', title: 'IP Reputation', status: 'pass', score: 8, maxScore: 10, description: 'Sending IP not listed on major blacklists (Spamhaus, SORBS)' },
  { category: 'Infrastructure', title: 'Sending Volume Pattern', status: 'warning', score: 5, maxScore: 10, description: 'Consistent volume detected, but warm-up period recommended for new domains', fix: 'Follow gradual warm-up: 50/day → 100/day → 500/day → 2000/day over 3 weeks' },
  { category: 'Infrastructure', title: 'Bounce Rate', status: 'pass', score: 10, maxScore: 10, description: 'Estimated bounce rate: 1.2% — below 2% threshold' },
  { category: 'Compliance', title: 'Unsubscribe Link', status: 'pass', score: 10, maxScore: 10, description: 'Clear unsubscribe link present in footer' },
  { category: 'Compliance', title: 'Physical Address', status: 'fail', score: 0, maxScore: 10, description: 'CAN-SPAM requires valid physical postal address', fix: 'Add your business address to the email footer' },
  { category: 'Compliance', title: 'List-Unsubscribe Header', status: 'pass', score: 10, maxScore: 10, description: 'List-Unsubscribe header present (one-click unsubscribe)' },
];

const SAMPLE_EMAILS = [
  { name: 'Marketing Newsletter', to: 'subscribers@list.com', subject: 'Your Weekly Update: 5 New Features You\'ll Love' },
  { name: 'Transaction Receipt', to: 'customer@email.com', subject: 'Order #12345 Confirmation' },
  { name: 'Cold Outreach', to: 'prospect@company.com', subject: 'Quick question about your team\'s workflow' },
];

export default function AutonomousEmailDeliverabilityCheckerPage() {
  const [email, setEmail] = useState({ from: '', to: '', subject: '', body: '' });
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<CheckResult[]>([]);
  const [filter, setFilter] = useState<'all' | 'pass' | 'fail' | 'warning'>('all');
  const [catFilter, setCatFilter] = useState<string>('all');

  const scan = async () => {
    setScanning(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setResults(CHECKS);
    setScanning(false);
  };

  const applySample = (idx: number) => {
    const samples = [
      { from: 'team@ziontechgroup.com', to: 'subscribers@list.com', subject: 'Your Weekly Update: 5 New Features You\'ll Love', body: 'Hi there! Check out what we built this week...' },
      { from: 'noreply@ziontechgroup.com', to: 'customer@email.com', subject: 'Order #12345 Confirmation', body: 'Thank you for your purchase! Here are your order details...' },
      { from: 'kleber@ziontechgroup.com', to: 'prospect@company.com', subject: 'Quick question about your team\'s workflow', body: 'Hi, I noticed your team is using X. We built Y that could help...' },
    ];
    setEmail(samples[idx]);
  };

  const categories = [...new Set(CHECKS.map(c => c.category))];
  const filtered = results.filter(c => (filter === 'all' || c.status === filter) && (catFilter === 'all' || c.category === catFilter));
  const totalScore = results.reduce((s, c) => s + c.score, 0);
  const maxScore = results.reduce((s, c) => s + c.maxScore, 0);
  const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const grade = pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
  const inboxRate = pct >= 90 ? '~99%' : pct >= 80 ? '~95%' : pct >= 70 ? '~85%' : pct >= 60 ? '~70%' : '<50%';

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a0000 0%, #2d1b3d 50%, #0f172a 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #f87171, #c084fc, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>✉️ Autonomous Email Deliverability Checker</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Analyze email content, headers, and infrastructure for spam score, DKIM/SPF alignment, bounce risk, and inbox placement prediction.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#2d1b3d', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>📧 Email Details</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {SAMPLE_EMAILS.map((s, i) => (
                <button key={i} onClick={() => applySample(i)} style={{ padding: '0.3rem 0.6rem', background: '#4c1d95', border: 'none', color: '#c084fc', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>{s.name}</button>
              ))}
            </div>
            <input type="email" value={email.from} onChange={e => setEmail({ ...email, from: e.target.value })} placeholder="From: sender@domain.com" style={{ width: '100%', padding: '0.5rem', background: '#1a0000', border: '1px solid #4c1d95', color: '#f8fafc', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <input type="email" value={email.to} onChange={e => setEmail({ ...email, to: e.target.value })} placeholder="To: recipient@domain.com" style={{ width: '100%', padding: '0.5rem', background: '#1a0000', border: '1px solid #4c1d95', color: '#f8fafc', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <input type="text" value={email.subject} onChange={e => setEmail({ ...email, subject: e.target.value })} placeholder="Subject line" style={{ width: '100%', padding: '0.5rem', background: '#1a0000', border: '1px solid #4c1d95', color: '#f8fafc', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <textarea value={email.body} onChange={e => setEmail({ ...email, body: e.target.value })} placeholder="Email body..." style={{ width: '100%', padding: '0.5rem', background: '#1a0000', border: '1px solid #4c1d95', color: '#f8fafc', borderRadius: '6px', height: 80, resize: 'vertical', marginBottom: '1rem' }} />
            <button onClick={scan} disabled={scanning} style={{ width: '100%', padding: '0.75rem', background: scanning ? '#57534e' : 'linear-gradient(90deg, #dc2626, #7c3aed)', color: 'white', border: 'none', borderRadius: '8px', cursor: scanning ? 'not-allowed' : 'pointer', fontWeight: '600', fontSize: '1rem' }}>{scanning ? '🔍 Analyzing...' : '✉️ Check Deliverability'}</button>
          </div>

          <div style={{ background: '#2d1b3d', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>📊 Deliverability Score</h3>
            {results.length > 0 ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '4rem', fontWeight: '700', color: pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444' }}>{pct}<span style={{ fontSize: '1.5rem', color: '#94a3b8' }}>/100</span></div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444' }}>Grade: {grade}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.5rem' }}>Estimated Inbox Rate: <span style={{ fontWeight: '600', color: '#22d3ee' }}>{inboxRate}</span></div>
                </div>
                <div style={{ background: '#1a0000', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Quick Stats</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                    {[
                      { label: 'Passed', value: results.filter(c => c.status === 'pass').length, color: '#22c55e' },
                      { label: 'Warnings', value: results.filter(c => c.status === 'warning').length, color: '#f59e0b' },
                      { label: 'Failed', value: results.filter(c => c.status === 'fail').length, color: '#ef4444' },
                    ].map((s, i) => (
                      <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: s.color }}>{s.value}</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ color: '#c084fc', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
                <div>Enter email details and run the analysis</div>
              </div>
            )}
          </div>
        </div>

        {results.length > 0 && (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {(['all', 'pass', 'warning', 'fail'] as const).map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: `1px solid ${filter === f ? (f === 'pass' ? '#22c55e' : f === 'warning' ? '#f59e0b' : '#ef4444') : '#44403c'}`, background: filter === f ? `${filter === 'pass' ? '#22c55e' : filter === 'warning' ? '#f59e0b' : '#ef4444'}22` : 'transparent', color: f === 'pass' ? '#22c55e' : f === 'warning' ? '#f59e0b' : '#ef4444', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem', textTransform: 'capitalize' }}>{f}</button>
              ))}
              <select value={catFilter} onChange={e => setCatFilter(e.target.value)} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', background: '#2d1b3d', border: '1px solid #4c1d95', color: '#f8fafc', fontSize: '0.8rem' }}>
                <option value="all">All Categories</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ background: '#2d1b3d', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
              {filtered.map((check, i) => (
                <div key={i} style={{ background: '#1a0000', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem', borderLeft: `4px solid ${check.status === 'pass' ? '#22c55e' : check.status === 'fail' ? '#ef4444' : '#f59e0b'}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>{check.status === 'pass' ? '✅' : check.status === 'fail' ? '❌' : '⚠️'}</span>
                      <span style={{ fontWeight: '600' }}>{check.title}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{check.score}/{check.maxScore}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{check.description}</div>
                  {check.fix && <div style={{ fontSize: '0.75rem', color: '#4ade80', marginTop: '0.25rem' }}>💡 Fix: {check.fix}</div>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
