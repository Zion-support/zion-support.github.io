'use client';
import React, { useState } from 'react';

interface Finding { type: string; severity: string; text: string; rec: string; }

const P = [
  { rule: /((?:30|60|90|120)\s*(?:day|days?)\s*notice)/i, type: 'Notice Period', sev: 'Info', rec: 'Calendar this date. Set reminder 2x before expiry.' },
  { rule: /(auto[-\s]*renew|automatic\s*renewal)/i, type: 'Auto-Renewal', sev: 'Warning', rec: 'Set cancellation reminder before renewal opens.' },
  { rule: /(liability\s*(?:cap|limit|limited)|maximum\s*liability)/i, type: 'Liability Cap', sev: 'Info', rec: 'Check if cap covers risk exposure. Typical: 12mo fees.' },
  { rule: /(termination.*cause|either\s*party.*terminate|right.*terminate)/i, type: 'Termination', sev: 'Important', rec: 'Document exit procedure. Ensure data return clauses.' },
  { rule: /(penalty|liquidated.*damage|service.*credit|uptime.*guarantee)/i, type: 'Penalty', sev: 'Warning', rec: 'Verify credits are enforceable and cover downtime.' },
  { rule: /(data\s*owner|your\s*data|belongs.*customer)/i, type: 'Data Ownership', sev: 'Info', rec: 'Confirm you own your data explicitly.' },
  { rule: /(indemnif|hold\s*harmless)/i, type: 'Indemnification', sev: 'Important', rec: 'Ensure vendor indemnifies for IP and breaches.' },
  { rule: /(governing\s*law|jurisdiction|venue.*shall)/i, type: 'Governing Law', sev: 'Info', rec: 'Verify jurisdiction is favorable.' },
  { rule: /(confidential|non[-\s]*disclosure|proprietary.*information)/i, type: 'Confidentiality', sev: 'Info', rec: 'Ensure mutual NDA and data handling requirements.' },
  { rule: /(price.*increas|fee.*adjust|increase.*\d.*%|escalation)/i, type: 'Price Escalation', sev: 'Warning', rec: 'Cap increases at 5% annually.' },
  { rule: /(force\s*majeure|act\s*of\s*god)/i, type: 'Force Majeure', sev: 'Info', rec: 'Check scope includes cyberattacks.' },
  { rule: /(no\s*warrant|as\s*is|without\s*warranty)/i, type: 'No Warranty', sev: 'Important', rec: 'Vendor disclaims all warranties. Consider negotiating.' },
];

export default function AutonomousContractAnalyzerPage() {
  const [text, setText] = useState('');
  const [findings, setFindings] = useState<Finding[]>([]);
  const [score, setScore] = useState(100);

  const analyze = () => {
    const f: Finding[] = [];
    P.forEach(p => {
      if (p.rule.test(text)) {
        f.push({ type: p.type, severity: p.sev, text: text.substring(Math.max(0, p.rule.exec(text)!.index - 20), p.rule.exec(text)!.index + p.rule.exec(text)![0].length + 20), rec: p.rec });
      }
    });
    if (!text.match(/indemnif/i)) f.push({ type: 'Risk', severity: 'Warning', text: 'No indemnification clause', rec: 'Add mutual indemnification.' });
    if (!text.match(/termination/i)) f.push({ type: 'Risk', severity: 'Warning', text: 'No termination clause', rec: 'Add clear termination rights.' });
    const sevScore: Record<string, number> = { Warning: 10, Important: 8, Info: 0, Risk: 15 };
    setScore(Math.max(0, 100 - f.reduce((s, fi) => s + sevScore[fi.severity], 0)));
    setFindings(f);
  };

  const sevC = (s: string) => s === 'Warning' || s === 'Risk' ? '#ef4444' : s === 'Important' ? '#f59e0b' : '#22d3ee';

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #fbbf24, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📄 Autonomous Contract & SLA Analyzer</h1>
        <p style={{ color: '#a8a29e', marginBottom: '2rem', fontSize: '1.1rem' }}>Paste contracts/SLAs to extract obligations, penalties, renewal dates, liability caps, and risk analysis.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#292524', padding: '1.5rem', borderRadius: '12px', border: '1px solid #44403c' }}>
            <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>📝 Contract Text</h3>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste the full contract or SLA text here..." style={{ width: '100%', height: 400, padding: '0.75rem', borderRadius: '8px', background: '#1c1917', border: '1px solid #44403c', color: '#e7e5e4', fontSize: '0.85rem', resize: 'vertical', fontFamily: 'monospace' }} />
            <button onClick={analyze} disabled={!text.trim()} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', borderRadius: '8px', background: 'linear-gradient(90deg, #d97706, #dc2626)', color: 'white', border: 'none', cursor: text.trim() ? 'pointer' : 'not-allowed', opacity: text.trim() ? 1 : 0.5, fontWeight: '600' }}>📄 Analyze Contract</button>
          </div>
          <div style={{ background: '#292524', padding: '1.5rem', borderRadius: '12px', border: '1px solid #44403c' }}>
            {findings.length > 0 ? (<>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#1c1917', padding: '1rem', borderRadius: '8px', textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: score >= 80 ? '#4ade80' : score >= 60 ? '#fbbf24' : '#ef4444' }}>{score}</div>
                  <div style={{ color: '#a8a29e', fontSize: '0.75rem' }}>Contract Health</div>
                </div>
                <div style={{ background: '#1c1917', padding: '1rem', borderRadius: '8px', textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24' }}>{findings.length}</div>
                  <div style={{ color: '#a8a29e', fontSize: '0.75rem' }}>Clauses Found</div>
                </div>
              </div>
              {findings.map((fi, i) => (
                <div key={i} style={{ background: '#1c1917', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem', borderLeft: `3px solid ${sevC(fi.severity)}` }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: '600', color: sevC(fi.severity), fontSize: '0.75rem' }}>[{fi.severity}]</span>
                    <span style={{ background: '#44403c', padding: '0.15rem 0.4rem', borderRadius: '3px', fontSize: '0.7rem' }}>{fi.type}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#a8a29e', marginBottom: '0.25rem' }}>{fi.text}</div>
                  <div style={{ fontSize: '0.8rem', color: '#4ade80' }}>💡 {fi.rec}</div>
                </div>
              ))}
            </>) : (
              <div style={{ color: '#57534e', textAlign: 'center', padding: '3rem 1rem' }}><div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div><div>Contract analysis will appear here</div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}