'use client';
import React, { useState } from 'react';

interface ContentItem {
  id: number; day: number; type: string; title: string; topic: string;
  keyword: string; channel: string; time: string; brief: string;
}

const TEMPLATES = [
  { type: 'Blog', title: 'How to {Topic} in 2026: Complete Guide', keyword: 'how-to {topic}', time: '09:00', brief: 'Comprehensive how-to with steps, screenshots, and examples.' },
  { type: 'Blog', title: '10 {Topic} Mistakes {Audience} Makes', keyword: '{topic} mistakes', time: '10:00', brief: 'Pain-point listicle with actionable fixes. Use real examples.' },
  { type: 'Social', title: 'Quick tip: {Topic} hack that saves time', keyword: '{topic} tips', channel: 'LinkedIn/X', time: '08:00', brief: 'Short-form actionable takeaway. Use bullet points and emojis.' },
  { type: 'Social', title: 'Myth vs Fact: {Topic} edition', keyword: '{topic} myths', channel: 'LinkedIn', time: '12:00', brief: 'Carousel/thread format. Debunk 3 common misconceptions.' },
  { type: 'Video', title: '{Topic} Tutorial: Step by Step', keyword: '{topic} tutorial', channel: 'YouTube', time: '10:00', brief: '10-15 min screen recording. Include timestamps in description.' },
  { type: 'Video', title: '{Topic} Tools Ranked: Best to Worst', keyword: 'best {topic} tools', channel: 'YouTube', time: '12:00', brief: 'Ranking format with demos. Include timestamps and pricing.' },
  { type: 'Blog', title: '{Topic} vs Alternatives: Which Is Best?', keyword: '{topic} vs', time: '08:30', brief: 'Head-to-head comparison with pros/cons table.' },
  { type: 'Social', title: 'Behind the scenes: How we handle {Topic}', keyword: '{topic} process', channel: 'Instagram', time: '14:00', brief: 'Authentic team content. Show process and people.' },
  { type: 'Blog', title: 'Why {Topic} Matters More Than Ever', keyword: 'why {topic}', time: '11:00', brief: 'Trends analysis with data. Include expert quotes.' },
  { type: 'Blog', title: 'The Ultimate {Topic} Checklist', keyword: '{topic} checklist', time: '09:30', brief: 'Downloadable checklist format. Make it saveable/printable.' },
  { type: 'Video', title: '{Topic} Myths Debunked in 60 Seconds', keyword: '{topic} facts', channel: 'Shorts/Reels', time: '15:00', brief: 'Fast-paced. Hook in first 3 seconds. Loop ending.' },
  { type: 'Social', title: 'Poll: Biggest {Topic} challenge?', keyword: '{topic} poll', channel: 'LinkedIn/X', time: '10:00', brief: 'Interactive for engagement. Follow up with results in 48h.' },
];

export default function AutonomousContentCalendarPage() {
  const [topic, setTopic] = useState('AI Automation');
  const [audience, setAudience] = useState('startup founders');
  const [freq, setFreq] = useState(5);
  const [items, setItems] = useState<ContentItem[]>([]);

  const generate = () => {
    const result: ContentItem[] = [];
    let day = 1, id = 0;
    for (let week = 0; week < 4; week++) {
      for (let p = 0; p < freq; p++) {
        const t = TEMPLATES[id % TEMPLATES.length];
        result.push({
          id: id + 1, day, type: t.type,
          title: t.title.replace('{Topic}', topic).replace('{Audience}', audience),
          topic: t.type,
          keyword: t.keyword.replace('{topic}', topic.toLowerCase()),
          channel: t.channel || 'Website', time: t.time,
          brief: t.brief,
        });
        id++; day += Math.max(1, Math.round(7 / freq));
      }
    }
    setItems(result);
  };

  const exportCSV = () => {
    const csv = 'Day,Type,Title,Keyword,Channel,Time,Brief\n' +
      items.map(c => `${c.day},"${c.type}","${c.title}","${c.keyword}","${c.channel}","${c.time}","${c.brief}"`).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'content-calendar-30d.csv'; a.click();
  };

  const tc: Record<string, string> = { Blog: '#3b82f6', Social: '#8b5cf6', Video: '#ef4444' };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #065f46 0%, #1e3a5f 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #34d399, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📅 Autonomous Content Calendar Generator</h1>
        <p style={{ color: '#a5f3fc', marginBottom: '2rem', fontSize: '1.1rem' }}>Generate a 30-day editorial calendar with SEO keywords, publishing times, and content briefs. Export CSV for Notion/Airtable.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#064e3b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #059669' }}>
            <h3 style={{ color: '#6ee7b7', marginBottom: '1rem' }}>⚙️ Settings</h3>
            {[['Topic/Niche', topic, setTopic, false], ['Target Audience', audience, setAudience, false]].map(([l, v, s]) => (
              <div key={l} style={{ marginBottom: '1rem' }}>
                <label style={{ color: '#6ee7b7', fontSize: '0.8rem', display: 'block', marginBottom: '0.3rem' }}>{l}</label>
                <input value={v} onChange={e => (s as any)(e.target.value)} style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid #059669', color: '#f8fafc', borderRadius: '4px' }} />
              </div>
            ))}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#6ee7b7', fontSize: '0.8rem' }}>Posts/Week: {freq}</label>
              <input type="range" min={2} max={7} value={freq} onChange={e => setFreq(Number(e.target.value))} style={{ width: '100%' }} />
            </div>
            <button onClick={generate} style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(90deg, #059669, #0ea5e9)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>📅 Generate</button>
            {items.length > 0 && <button onClick={exportCSV} style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', background: 'transparent', color: '#6ee7b7', border: '1px solid #059669', borderRadius: '8px', cursor: 'pointer' }}>📥 Export CSV</button>}
          </div>

          <div style={{ background: '#064e3b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #059669' }}>
            {items.length === 0 ? (
              <div style={{ color: '#059669', textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div><div>Your calendar will appear here</div>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>{items.length}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6ee7b7' }}>Content Pieces</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38bdf8' }}>30</div>
                    <div style={{ fontSize: '0.75rem', color: '#6ee7b7' }}>Day Span</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}>{new Set(items.map(i => i.type)).size}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6ee7b7' }}>Content Types</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.5rem' }}>
                  {items.map(i => (
                    <div key={i.id} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', borderLeft: `3px solid ${tc[i.type] || '#94a3b8'}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>Day {i.day}</span>
                        <span style={{ color: tc[i.type] || '#94a3b8', fontSize: '0.75rem', fontWeight: '600' }}>{i.type}</span>
                      </div>
                      <div style={{ color: '#e2e8f0', fontSize: '0.8rem', marginBottom: '0.35rem', lineHeight: 1.3 }}>{i.title}</div>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>🔍 {i.keyword} • 📡 {i.channel} @ {i.time}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}