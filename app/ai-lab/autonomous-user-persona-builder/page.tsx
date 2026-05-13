'use client';

import React, { useState } from 'react';

interface Persona {
  name: string;
  age: number;
  role: string;
  avatar: string;
  goals: string[];
  painPoints: string[];
  skills: string;
  quote: string;
  buyingTrigger: string;
  frustrationLevel: number;
}

const NAMES_POOL = ['Alex Chen', 'Sarah Kim', 'Jordan Rivera', 'Maya Patel', 'Chris Brooks', 'Priya Sharma', 'Liam Torres', 'Emma Fischer', 'Kai Nakamura', 'Olivia Mwangi', 'Zara Koval', 'Theo Dubois', 'Nia Washington', 'Ravi Desai', 'Sofia Lund'];
const ROLES = ['Product Manager', 'CTO at Startup', 'Marketing Director', 'Solo Developer', 'Operations Lead', 'Growth Hacker', 'Data Analyst', 'UX Designer', 'Engineering Manager', 'Founder', 'DevOps Engineer', 'Sales Director'];
const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const GOALS_POOL = [
  'Streamline team workflows and reduce manual tasks', 'Increase product engagement and retention metrics',
  'Ship features faster without sacrificing quality', 'Reduce operational costs by 20%+ this quarter',
  'Improve team collaboration across time zones', 'Scale infrastructure to handle 10x growth',
  'Launch new product line within aggressive timeline', 'Build a self-sustaining revenue stream',
  'Automate repetitive reporting and analysis tasks', 'Achieve SOC2/ISO compliance before next funding round'
];
const PAINS_POOL = [
  'Too many disconnected tools causing context switching fatigue', 'Data silos making it hard to get a unified view',
  'Manual processes that should be automated', 'Lack of real-time visibility into key metrics',
  'High customer churn due to poor onboarding experience', 'Engineering team bottlenecked by code review delays',
  'Budget constraints limiting tool adoption', 'Difficulty measuring ROI of current tech stack',
  'Compliance requirements consuming engineering bandwidth', 'Scaling challenges with growing user base'
];
const QUOTES = [
  '"I just need one tool that does everything — I\'m tired of tab chaos."',
  '"If I have to explain this metric one more time, I\'m quitting."',
  '"Show me the ROI in the first 5 minutes or I\'m closing the tab."',
  '"My team spends more time managing tools than doing actual work."',
  '"I want to set it up once and have it run on autopilot."',
  '"Every minute I save on admin is a minute I can spend building."',
  '"If it doesn\'t integrate with our existing stack, it\'s dead on arrival."',
  '"I need to convince the board — make the numbers undeniable."'
];
const TRIGGERS = [
  'Saw competitor launch similar feature with premium pricing', 'Quarterly review revealed 40% drop in team productivity',
  'New compliance deadline approaching in 90 days', 'Investor demanded better unit economics',
  'Customer churn exceeded 15% for third consecutive month', 'Team grew from 10 to 50, tools broke at scale',
  'Manual reporting costs 20 engineer-hours per week', 'Security audit flagged critical gaps in current stack'
];

function hashStr(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function getFromPool(hash: number, pool: string[], count: number): string[] {
  const result: string[] = [];
  const used = new Set<number>();
  for (let i = 0; i < Math.min(count, pool.length); i++) {
    let idx;
    do { idx = (hash + i * 7 + result.length * 13) % pool.length; } while (used.has(idx));
    used.add(idx);
    result.push(pool[idx]);
    hash = (hash * 31 + 17) | 0;
  }
  return result;
}

export default function AutonomousUserPersonaBuilderPage() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [market, setMarket] = useState('');
  const [features, setFeatures] = useState('');
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const seed = hashStr(productName + description + market);
      const personaCount = 3 + (seed % 2);
      const result: Persona[] = Array.from({ length: personaCount }, (_, i) => {
        const h = (seed * (i + 1) * 997 + i * 31) | 0;
        return {
          name: NAMES_POOL[(h + i * 47) % NAMES_POOL.length],
          age: 24 + ((h * 31) % 25),
          role: ROLES[(h + i * 23) % ROLES.length],
          avatar: NAMES_POOL[(h + i * 47) % NAMES_POOL.length].split(' ').map(n => n[0]).join(''),
          goals: getFromPool(h, GOALS_POOL, 2),
          painPoints: getFromPool((h * 13 + 7) | 0, PAINS_POOL, 2),
          skills: SKILL_LEVELS[(h + i * 17) % SKILL_LEVELS.length],
          quote: QUOTES[(h + i * 11) % QUOTES.length],
          buyingTrigger: TRIGGERS[(h + i * 29) % TRIGGERS.length],
          frustrationLevel: 50 + ((h * 23) % 45),
        };
      });
      setPersonas(result);
      setIsGenerating(false);
    }, 800);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(personas, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${productName.replace(/\s+/g, '-').toLowerCase()}-personas.json`;
    a.click();
  };

  const frustrationColor = (lvl: number) => lvl >= 80 ? '#ef4444' : lvl >= 60 ? '#f59e0b' : '#4ade80';

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #a78bfa, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>👥 Autonomous User Persona Builder</h1>
        <p style={{ color: '#c4b5fd', marginBottom: '2rem', fontSize: '1.1rem' }}>Describe your product and target market. Generate detailed, data-driven user personas with goals, pain points, and buying triggers.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ marginBottom: '1rem' }}>📝 Product Details</h3>
            {([['Product Name', productName, setProductName, false], ['Short Description', description, setDescription, true], ['Target Market (e.g., SaaS, E-commerce)', market, setMarket, false], ['Key Features (comma-separated)', features, setFeatures, false]] as const).map(([label, val, setter, isTextarea]) => (
              <div key={label as string} style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#a78bfa', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>{label}</label>
                {isTextarea ? <textarea value={val as string} onChange={e => (setter as any)(e.target.value)} rows={2} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc', resize: 'vertical' }} /> : <input type="text" value={val as string} onChange={e => (setter as any)(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc' }} />}
              </div>
            ))}
            <button onClick={generate} disabled={isGenerating || !productName || !description} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'linear-gradient(90deg, #7c3aed, #ec4899)', color: 'white', border: 'none', cursor: (productName && description) ? 'pointer' : 'not-allowed', opacity: (productName && description) ? 1 : 0.5, fontWeight: '600' }}>{isGenerating ? '👥 Generating...' : '👥 Build Personas'}</button>
          </div>

          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>📊 Generated Personas {personas.length > 0 && <button onClick={exportJSON} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '20px', background: '#4c1d95', border: 'none', color: '#a78bfa', cursor: 'pointer' }}>📥 Export JSON</button>}</h3>
            {personas.length === 0 ? <div style={{ color: '#7c3aed', textAlign: 'center', padding: '3rem 1rem' }}><div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>Personas will appear here</div> : (
              <div style={{ display: 'grid', gap: '1rem' }}>
                {personas.map((p, i) => (
                  <div key={i} style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '10px', border: '1px solid #4c1d9533' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>{p.avatar}</div>
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>{p.name}</div>
                        <div style={{ color: '#a78bfa', fontSize: '0.85rem' }}>{p.role}, age {p.age} • {p.skills}</div>
                      </div>
                      <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Frustration</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: frustrationColor(p.frustrationLevel) }}>{p.frustrationLevel}/100</div>
                      </div>
                    </div>
                    <div style={{ fontStyle: 'italic', color: '#c4b5fd', marginBottom: '1rem', padding: '0.5rem 0.75rem', borderLeft: '3px solid #7c3aed', background: '#1e1b4b33', borderRadius: '0 6px 6px 0' }}>{p.quote}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div><div style={{ fontWeight: '600', color: '#4ade80', marginBottom: '0.35rem', fontSize: '0.85rem' }}>🎯 Goals</div>{p.goals.map((g, j) => <div key={j} style={{ color: '#d1d5db', fontSize: '0.8rem', marginBottom: '0.15rem' }}>• {g}</div>)}</div>
                      <div><div style={{ fontWeight: '600', color: '#f87171', marginBottom: '0.35rem', fontSize: '0.85rem' }}>⚠️ Pain Points</div>{p.painPoints.map((pp, j) => <div key={j} style={{ color: '#d1d5db', fontSize: '0.8rem', marginBottom: '0.15rem' }}>• {pp}</div>)}</div>
                    </div>
                    <div style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}><span style={{ color: '#fbbf24', fontWeight: '600' }}>💡 Trigger:</span> <span style={{ color: '#d1d5db' }}>{p.buyingTrigger}</span></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}