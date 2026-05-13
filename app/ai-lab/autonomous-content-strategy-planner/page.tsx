'use client';
import React, { useState } from 'react';

interface ContentItem { phase: string; title: string; format: string; channel: string; persona: string; goal: string; timeline: string };

const PLANS: Record<string, ContentItem[]> = {
  saas: [
    { phase: 'Awareness', title: '"5 Signs Your Workflow Is Killing Productivity"', format: 'Blog Post', channel: 'LinkedIn', persona: 'CTO/VP Eng', goal: 'Lead gen', timeline: 'Week 1' },
    { phase: 'Awareness', title: '"How Top Teams Ship 2x Faster"', format: 'Case Study', channel: 'Blog', persona: 'CTO/VP Eng', goal: 'Social proof', timeline: 'Week 2' },
    { phase: 'Consideration', title: '"Feature Comparison: Us vs Them"', format: 'Landing Page', channel: 'Website', persona: 'Technical Buyer', goal: 'Differentiation', timeline: 'Week 3' },
    { phase: 'Consideration', title: '"ROI Calculator: Save 120hrs/month"', format: 'Interactive Tool', channel: 'Website', persona: 'Finance/Operations', goal: 'Engagement', timeline: 'Week 4' },
    { phase: 'Decision', title: '"Free Trial: Setup in 5 Minutes"', format: 'Landing Page', channel: 'Paid Ads', persona: 'Decision Maker', goal: 'Conversion', timeline: 'Week 5' },
    { phase: 'Retention', title: '"Monthly Feature Updates Newsletter"', format: 'Email', channel: 'Email', persona: 'Active Users', goal: 'Engagement', timeline: 'Monthly' },
    { phase: 'Retention', title: '"Customer Success Stories"', format: 'Video', channel: 'YouTube', persona: 'Prospects', goal: 'Social proof', timeline: 'Monthly' },
    { phase: 'Advocacy', title: '"Referral Program: Give $50, Get $50"', format: 'Email + Page', channel: 'Email + Website', persona: 'Happy Users', goal: 'Referrals', timeline: 'Quarterly' },
  ],
  ecommerce: [
    { phase: 'Awareness', title: '"Ultimate Gift Guide 2026"', format: 'Blog Post', channel: 'Blog + Pinterest', persona: 'Shoppers', goal: 'Traffic', timeline: 'Week 1' },
    { phase: 'Awareness', title: '"Behind the Scenes: How We Source"', format: 'Video', channel: 'Instagram', persona: 'Brand-conscious', goal: 'Brand trust', timeline: 'Week 2' },
    { phase: 'Consideration', title: '"Product Comparison: Which Model Is Right?"', format: 'Guide', channel: 'Website', persona: 'Researchers', goal: 'Product fit', timeline: 'Week 3' },
    { phase: 'Decision', title: '"Flash Sale: 48 Hours Only"', format: 'Email + Social', channel: 'Email + Instagram', persona: 'Cart abandoners', goal: 'Conversion', timeline: 'Week 4' },
    { phase: 'Retention', title: '"VIP Early Access Program"', format: 'Email', channel: 'Email', persona: 'Repeat buyers', goal: 'Retention', timeline: 'Monthly' },
    { phase: 'Advocacy', title: '"Share Your Unboxing"', format: 'Social Campaign', channel: 'Instagram/TikTok', persona: 'Customers', goal: 'UGC', timeline: 'Quarterly' },
  ],
  agency: [
    { phase: 'Awareness', title: '"The State of AI in 2026: Agency Survey Results"', format: 'Report', channel: 'LinkedIn + PR', persona: 'CMOs', goal: 'Thought leadership', timeline: 'Week 1' },
    { phase: 'Awareness', title: '"Client Transformations Before/After"', format: 'Case Study Carousel', channel: 'Instagram', persona: 'Business Owners', goal: 'Showcase', timeline: 'Week 2' },
    { phase: 'Consideration', title: '"How to Choose the Right Agency"', format: 'Guide', channel: 'Blog', persona: 'Decision Makers', goal: 'Trust building', timeline: 'Week 3' },
    { phase: 'Decision', title: '"Free Audit: Book Your Strategy Session"', format: 'Landing Page', channel: 'Paid Ads', persona: 'Qualified Leads', goal: 'Booked calls', timeline: 'Week 4' },
    { phase: 'Retention', title: '"Monthly Strategy Newsletter"', format: 'Email', channel: 'Email', persona: 'Clients', goal: 'Upsell', timeline: 'Monthly' },
    { phase: 'Advocacy', title: '"Partner Spotlight Program"', format: 'Blog + Video', channel: 'Website + LinkedIn', persona: 'Partners', goal: 'Referrals', timeline: 'Quarterly' },
  ],
};

export default function AutonomousContentStrategyPlannerPage() {
  const [industry, setIndustry] = useState('saas');
  const [showPlan, setShowPlan] = useState(false);
  const [filter, setFilter] = useState('all');

  const plan = PLANS[industry] || [];
  const filtered = filter === 'all' ? plan : plan.filter(item => item.phase === filter);
  const phases = [...new Set(plan.map(i => i.phase))];

  const generatePlan = () => setShowPlan(true);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a0033 0%, #0f172a 50%, #022c22 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #f472b6, #38bdf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📝 Autonomous Content Strategy Planner</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Generate a personalized 30-day content strategy. AI-powered content calendar mapped to your funnel stages, channels, and audience.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#1a0033', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>⚙️ Your Business</h3>
            <label style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '0.25rem' }}>Industry</label>
            <select value={industry} onChange={e => { setIndustry(e.target.value); setShowPlan(false); }} style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc', borderRadius: '6px', marginBottom: '1rem' }}>
              <option value="saas">SaaS / Tech</option>
              <option value="ecommerce">E-commerce</option>
              <option value="agency">Agency / Services</option>
            </select>
            <button onClick={generatePlan} style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>📝 Generate Content Plan</button>
          </div>

          <div style={{ background: '#1a0033', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ color: '#c084fc', marginBottom: '1rem' }}>📊 Strategy Overview</h3>
            {showPlan ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[
                    { label: 'Content Pieces', value: plan.length.toString(), color: '#22d3ee' },
                    { label: 'Channels', value: [...new Set(plan.map(i => i.channel))].length.toString(), color: '#34d399' },
                    { label: 'Funnel Stages', value: phases.length.toString(), color: '#f472b6' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #312e81' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: s.color }}>{s.value}</div>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ color: '#c084fc', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
                <div>Generate a plan to see overview</div>
              </div>
            )}
          </div>
        </div>

        {showPlan && (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button onClick={() => setFilter('all')} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: `1px solid ${filter === 'all' ? '#c084fc' : '#44403c'}`, background: filter === 'all' ? '#c084fc22' : 'transparent', color: filter === 'all' ? '#c084fc' : '#94a3b8', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem' }}>All ({plan.length})</button>
              {phases.map(p => (
                <button key={p} onClick={() => setFilter(p)} style={{ padding: '0.4rem 0.8rem', borderRadius: '6px', border: `1px solid ${filter === p ? '#f472b6' : '#44403c'}`, background: filter === p ? '#f472b622' : 'transparent', color: filter === p ? '#f472b6' : '#94a3b8', cursor: 'pointer', fontWeight: '600', fontSize: '0.8rem' }}>{p}</button>
              ))}
            </div>

            <div style={{ background: '#1a0033', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
              <div style={{ display: 'grid', gridTemplateColumns: `${'1fr 0.8fr 1fr 1fr 0.8fr 0.8fr'.split(' ').join(' ')}`, gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.7rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase' }}>
                <span>Phase</span><span>Timeline</span><span>Content</span><span>Channel</span><span>Persona</span><span>Goal</span>
              </div>
              {filtered.map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: `${'1fr 0.8fr 1fr 1fr 0.8fr 0.8fr'.split(' ').join(' ')}`, gap: '0.5rem', padding: '0.75rem', background: '#0f172a', borderRadius: '8px', marginBottom: '0.5rem', alignItems: 'center', fontSize: '0.85rem' }}>
                  <span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', background: item.phase === 'Awareness' ? '#7c3aed44' : item.phase === 'Consideration' ? '#0ea5e944' : item.phase === 'Decision' ? '#10b98144' : item.phase === 'Retention' ? '#f59e0b44' : '#ef444444', color: item.phase === 'Awareness' ? '#a78bfa' : item.phase === 'Consideration' ? '#38bdf8' : item.phase === 'Decision' ? '#6ee7b7' : item.phase === 'Retention' ? '#fbbf24' : '#fca5a5', fontWeight: '600', fontSize: '0.75rem', textAlign: 'center' }}>{item.phase}</span>
                  <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{item.timeline}</span>
                  <div><div style={{ fontWeight: '600' }}>{item.title}</div><div style={{ fontSize: '0.7rem', color: '#64748b' }}>{item.format}</div></div>
                  <span style={{ color: '#94a3b8' }}>{item.channel}</span>
                  <span style={{ color: '#94a3b8' }}>{item.persona}</span>
                  <span style={{ color: '#34d399', fontWeight: '600' }}>{item.goal}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
