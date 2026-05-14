'use client';

import React, { useState } from 'react';

// ============================================================
// AUTONOMOUS ROI CALCULATOR
// Client-side ROI simulator — zero external dependencies
// Computes: annual savings, payback period, ROI%, what-if
// ============================================================

interface ScenarioData {
  label: string;
  annualSavings: number;
  paybackMonths: number;
  roiPercent: number;
  color: string;
}

const AUTOMATION_CATEGORIES = [
  {
    id: 'lead_scoring',
    label: 'Lead Scoring & CRM',
    minHours: 5,
    maxHours: 20,
    avgSalaryImpact: 1,
    description: 'Automate lead qualification, scoring, and CRM enrichment',
    zionProduct: 'Smart CRM + Lead Scoring',
    zionRoute: '/leads',
  },
  {
    id: 'content_repurposing',
    label: 'Content Repurposing',
    minHours: 8,
    maxHours: 30,
    avgSalaryImpact: 0.8,
    description: 'Turn one piece of content into 10+ formats automatically',
    zionProduct: 'Content Repurposing Engine',
    zionRoute: '/repurpose',
  },
  {
    id: 'seo_intelligence',
    label: 'SEO & Content Generation',
    minHours: 6,
    maxHours: 15,
    avgSalaryImpact: 0.9,
    description: 'AI-driven SEO analysis, keyword targeting, and content briefs',
    zionProduct: 'SEO Intelligence Suite',
    zionRoute: '/seo',
  },
  {
    id: 'incident_response',
    label: 'Incident Response & Self-Healing',
    minHours: 3,
    maxHours: 12,
    avgSalaryImpact: 1.2,
    description: 'Automated health monitoring, incident detection, and recovery',
    zionProduct: 'Self-Healing Monitor',
    zionRoute: '/incidents',
  },
  {
    id: 'competitive_intelligence',
    label: 'Competitive Intelligence',
    minHours: 4,
    maxHours: 10,
    avgSalaryImpact: 0.9,
    description: 'Track competitor moves, pricing changes, and market positioning',
    zionProduct: 'Competitive Intelligence',
    zionRoute: '/ai-lab/autonomous-competitive-intelligence',
  },
  {
    id: 'knowledge_base',
    label: 'Knowledge Base Chatbot',
    minHours: 5,
    maxHours: 15,
    avgSalaryImpact: 0.7,
    description: '24/7 automated customer support from your docs',
    zionProduct: 'Knowledge Base Chatbot',
    zionRoute: '/chat',
  },
];

export default function AutonomousROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [weeklyHours, setWeeklyHours] = useState(15);
  const [avgMonthlySalary, setAvgMonthlySalary] = useState(5000);
  const [annualToolCost, setAnnualToolCost] = useState(2400);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['lead_scoring']));
  const [result, setResult] = useState<ScenarioData[] | null>(null);
  const [reportText, setReportText] = useState('');

  const toggleCategory = (id: string) => {
    const next = new Set(selectedCategories);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedCategories(next);
  };

  const computeROI = () => {
    const active = AUTOMATION_CATEGORIES.filter(c => selectedCategories.has(c.id));
    if (active.length === 0) return;

    const scenarios: ScenarioData[] = [
      { label: 'Worst Case (75% efficiency)', color: '#f44336' },
      { label: 'Expected Case (90% efficiency)', color: '#ff9800' },
      { label: 'Best Case (100% efficiency)', color: '#4caf50' },
    ].map(s => {
      const baseEfficiency = s.label.includes('100%') ? 1.0 : s.label.includes('90%') ? 0.9 : 0.75;
      let totalHoursReclaimed = 0;
      active.forEach(cat => {
        avgMonthlySalary *= cat.avgSalaryImpact;
      });
      active.forEach(cat => {
        const midRange = (cat.minHours + cat.maxHours) / 2;
        totalHoursReclaimed += midRange;
      });
      const weeklyReclaimed = totalHoursReclaimed * baseEfficiency;
      const hourlyCost = avgMonthlySalary / (4.33 * 40);
      const annualSavings = weeklyReclaimed * 52 * hourlyCost - annualToolCost;
      const monthlySavings = annualSavings / 12;
      const paybackMonths = annualToolCost > 0 ? Math.ceil(annualToolCost / (monthlySavings > 0 ? monthlySavings : 1)) : 0;
      const roiPercent = annualToolCost > 0 ? ((annualSavings - annualToolCost) / annualToolCost) * 100 : 0;

      return {
        ...s,
        annualSavings: Math.max(0, annualSavings),
        paybackMonths: Math.max(0, paybackMonths),
        roiPercent: Math.max(0, roiPercent),
      };
    });

    setResult(scenarios);
    generateReport(active, scenarios);
  };

  const generateReport = (active: typeof AUTOMATION_CATEGORIES, scenarios: ScenarioData[]) => {
    const best = scenarios[2];
    const lines = [
      '📊 AUTONOMOUS ROI REPORT',
      '',
      `Team Size: ${teamSize} members`,
      `Avg Monthly Salary: $${avgMonthlySalary.toLocaleString()}`,
      `Weekly Manual Hours Per Person: ${weeklyHours}`,
      `Annual Cost of Zion Tooling: $${annualToolCost.toLocaleString()}`,
      `Automation Categories Enabled: ${active.length}`,
      '',
      '────────────────────────────────────────',
      '',
      `💰 PROJECTED ANNUAL SAVINGS (Best Case): $${best.annualSavings.toLocaleString()}`,
      `⏱️  PAYBACK PERIOD: ${best.paybackMonths} months`,
      `📈 ROI: ${best.roiPercent.toFixed(1)}%`,
      '',
      'RECOMMENDED ZION PRODUCTS TO START WITH:',
      ...active.map(c => `▸ ${c.zionProduct} (${c.zionRoute})`),
      '',
      '────────────────────────────────────────',
      'Generated by Zion AI Lab — Autonomous ROI Calculator',
    ];
    setReportText(lines.join('\n'));
  };

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>📈 Autonomous ROI Calculator</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Project your annual savings, payback period, and ROI from automating your workflows with Zion tools.</p>

      {/* Input Section */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>⚙️ Your Team Data</h2>

        {/* Team Size */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>
            Team Size: <span style={{ color: '#58a6ff', fontWeight: 700 }}>{teamSize}</span>
          </label>
          <input type="range" min={1} max={200} value={teamSize} onChange={e => setTeamSize(Number(e.target.value))} style={{ width: '100%' }} />
        </div>

        {/* Weekly Hours */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>
            Weekly Manual Hours Per Person: <span style={{ color: '#58a6ff', fontWeight: 700 }}>{weeklyHours}h</span>
          </label>
          <input type="range" min={1} max={40} value={weeklyHours} onChange={e => setWeeklyHours(Number(e.target.value))} style={{ width: '100%' }} />
        </div>

        {/* Avg Salary */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>
            Avg Monthly Salary ($): <span style={{ color: '#58a6ff', fontWeight: 700 }}>${avgMonthlySalary.toLocaleString()}</span>
          </label>
          <input type="range" min={1000} max={20000} step={500} value={avgMonthlySalary} onChange={e => setAvgMonthlySalary(Number(e.target.value))} style={{ width: '100%' }} />
        </div>

        {/* Annual Tool Cost */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>
            Annual Zion Tooling Cost ($): <span style={{ color: '#58a6ff', fontWeight: 700 }}>${annualToolCost.toLocaleString()}</span>
          </label>
          <input type="range" min={0} max={10000} step={100} value={annualToolCost} onChange={e => setAnnualToolCost(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>

      {/* Category Selection */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>🤖 Automation Categories to Enable</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {AUTOMATION_CATEGORIES.map(cat => (
            <label key={cat.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', borderRadius: 8, background: selectedCategories.has(cat.id) ? '#1f2937' : 'transparent', cursor: 'pointer', border: selectedCategories.has(cat.id) ? '1px solid #58a6ff' : '1px solid transparent', transition: 'all 0.15s' }}>
              <input type="checkbox" checked={selectedCategories.has(cat.id)} onChange={() => toggleCategory(cat.id)} style={{ marginTop: '0.25rem', accentColor: '#58a6ff' }} />
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{cat.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>{cat.description}</div>
                <div style={{ fontSize: '0.75rem', color: '#58a6ff', marginTop: '0.25rem' }}>▸ {cat.zionProduct}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <button onClick={computeROI} style={{ display: 'block', width: '100%', padding: '0.75rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #238636, #2ea043)', border: '1px solid #2ea043', borderRadius: 8, cursor: 'pointer', marginBottom: '1.5rem' }}>
        📊 Calculate ROI
      </button>

      {/* Results */}
      {result && (
        <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📊 ROI Projection Results</h2>

          {/* Scenario Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {result.map(s => (
              <div key={s.label} style={{ background: '#0d1117', borderRadius: 8, padding: '1.25rem', borderLeft: `4px solid ${s.color}`, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: s.color }}>{s.label}</div>
                <div style={{ marginBottom: '0.25rem' }}><span style={{ color: '#8b949e' }}>Annual Savings:</span> <span style={{ fontWeight: 700, fontSize: '1.3rem' }}>{formatCurrency(s.annualSavings)}</span></div>
                <div><span style={{ color: '#8b949e' }}>ROI:</span> <span style={{ fontWeight: 700, color: s.color }}>{s.roiPercent.toFixed(1)}%</span></div>
              </div>
            ))}
          </div>

          {/* Payback Period */}
          <div style={{ background: '#0d1117', borderRadius: 8, padding: '1.25rem', textAlign: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>⏱️ Payback Period</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#58a6ff' }}>{result[1].paybackMonths} months</div>
            <p style={{ color: '#8b949e', margin: '0.5rem 0 0' }}>Time to recover tool investment from automation savings</p>
          </div>

          {/* Recommendations */}
          <div style={{ background: '#0d1117', borderRadius: 8, padding: '1.25rem' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>🎯 Recommended First Steps</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {AUTOMATION_CATEGORIES.filter(c => selectedCategories.has(c.id)).map(cat => (
                <a key={cat.id} href={cat.zionRoute} style={{ display: 'block', padding: '0.75rem', borderRadius: 6, background: '#161b22', border: '1px solid #238636', textDecoration: 'none', color: '#e0e0e0' }}>
                  <span style={{ fontWeight: 600 }}>{cat.zionProduct}</span>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#8b949e', marginTop: '0.25rem' }}>{cat.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Report Output */}
      {reportText && (
        <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📋 Shareable Report</h2>
          <button onClick={async () => {
            await navigator.clipboard.writeText(reportText);
            alert('Report copied to clipboard!');
          }} style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', background: '#238636', color: '#fff', border: '1px solid #2ea043', borderRadius: 6, cursor: 'pointer', marginBottom: '1rem' }}>
            📋 Copy Report to Clipboard
          </button>
          <pre style={{ background: '#0d1117', padding: '1rem', borderRadius: 6, whiteSpace: 'pre-wrap', color: '#c9d1d9', fontSize: '0.85rem', lineHeight: 1.6 }}>{reportText}</pre>
        </div>
      )}
    </div>
  );
}
