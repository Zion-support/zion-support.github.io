'use client';

import React, { useState } from 'react';

// ============================================================
// AUTONOMOUS PROJECT ESTIMATOR
// Client-side project scope estimator + proposal generator
// Zero external dependencies — fully self-contained
// ============================================================

interface ProjectPhase {
  name: string;
  duration: number; // weeks
  cost: number;
  deliverables: string[];
  team: string[];
}

interface RiskItem {
  name: string;
  probability: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

const PROJECT_TYPES = [
  { id: 'web_app', label: 'Web Application', complexityMultiplier: 1.0, baseWeeks: 8 },
  { id: 'mobile_app', label: 'Mobile App', complexityMultiplier: 1.3, baseWeeks: 12 },
  { id: 'api_integration', label: 'API Integration', complexityMultiplier: 0.7, baseWeeks: 4 },
  { id: 'ai_ml', label: 'AI/ML Solution', complexityMultiplier: 1.8, baseWeeks: 16 },
  { id: 'data_pipeline', label: 'Data Pipeline', complexityMultiplier: 0.9, baseWeeks: 6 },
  { id: 'ecommerce', label: 'E-Commerce Platform', complexityMultiplier: 1.4, baseWeeks: 10 },
  { id: 'migration', label: 'System Migration', complexityMultiplier: 1.2, baseWeeks: 8 },
  { id: 'saas', label: 'SaaS Platform', complexityMultiplier: 1.6, baseWeeks: 20 },
];

const COMPLEXITY_LEVELS = [
  { id: 'mvp', label: 'MVP (Core Features)', multiplier: 0.6 },
  { id: 'standard', label: 'Standard', multiplier: 1.0 },
  { id: 'enterprise', label: 'Enterprise (Full Scope)', multiplier: 1.5 },
];

interface ProposalResult {
  phases: ProjectPhase[];
  risks: RiskItem[];
  totalCost: number;
  totalWeeks: number;
  teamSize: number;
  monthlyBurn: number;
  recommendation: string;
  zionTools: string[];
}

export default function AutonomousProjectEstimator() {
  const [projectType, setProjectType] = useState('web_app');
  const [complexity, setComplexity] = useState('standard');
  const [teamSize, setTeamSize] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [features, setFeatures] = useState('');
  const [proposals, setProposals] = useState<Record<string, ProposalResult | null>>({});
  const [activeProposal, setActiveProposal] = useState<string>('conservative');

  const generatePhases = (type: string, complex: string, size: number, rate: number, feats: string): ProposalResult => {
    const typeInfo = PROJECT_TYPES.find(t => t.id === type) || PROJECT_TYPES[0];
    const complexInfo = COMPLEXITY_LEVELS.find(c => c.id === complex) || COMPLEXITY_LEVELS[1];
    const baseWeeks = typeInfo.baseWeeks * complexInfo.multiplier;

    const isAI = type === 'ai_ml';
    const isMobile = type === 'mobile_app';
    const isEcommerce = type === 'ecommerce';
    const isSaaS = type === 'saas';

    const phases: ProjectPhase[] = [
      {
        name: 'Discovery & Planning',
        duration: Math.max(1, Math.ceil(baseWeeks * 0.15)),
        cost: Math.round(Math.ceil(baseWeeks * 0.15) * size * rate * 40),
        deliverables: ['Requirements document', 'Technical architecture', 'Risk assessment', 'Project timeline'],
        team: ['Project Manager', 'Tech Lead', 'Business Analyst'],
      },
      {
        name: 'Design & Prototyping',
        duration: Math.max(1, Math.ceil(baseWeeks * 0.2)),
        cost: Math.round(Math.ceil(baseWeeks * 0.2) * size * rate * 40),
        deliverables: ['UI/UX wireframes', 'Interactive prototype', 'Design system', 'User flow documentation'],
        team: ['UX Designer', 'UI Designer', 'Tech Lead'],
      },
      {
        name: 'Core Development',
        duration: Math.max(2, Math.ceil(baseWeeks * 0.35)),
        cost: Math.round(Math.ceil(baseWeeks * 0.35) * size * rate * 40),
        deliverables: ['Backend API development', 'Database schema', 'Core feature implementation', 'Unit tests'],
        team: ['Backend Engineers', 'Frontend Engineers', 'QA Engineer'],
      },
      {
        name: 'Integration & Testing',
        duration: Math.max(1, Math.ceil(baseWeeks * 0.15)),
        cost: Math.round(Math.ceil(baseWeeks * 0.15) * size * rate * 40),
        deliverables: [
          isAI ? 'ML model training & validation' : 'Third-party API integrations',
          isMobile ? 'App Store optimization assets' : 'Cross-browser testing',
          'E2E test suite',
          'Performance benchmarks',
        ],
        team: ['QA Engineers', 'DevOps Engineer', 'Integration Specialists'],
      },
      {
        name: 'Deployment & Launch',
        duration: Math.max(1, Math.ceil(baseWeeks * 0.1)),
        cost: Math.round(Math.ceil(baseWeeks * 0.1) * size * rate * 40),
        deliverables: ['CI/CD pipeline setup', 'Production deployment', 'Monitoring configuration', 'Launch checklist'],
        team: ['DevOps Engineer', 'Full-Stack Engineers'],
      },
      ...(isAI ? [{
        name: 'Model Optimization',
        duration: Math.max(1, Math.ceil(baseWeeks * 0.05)),
        cost: Math.round(Math.ceil(baseWeeks * 0.05) * size * rate * 40),
        deliverables: ['Model fine-tuning', 'A/B testing framework', 'Performance optimization', 'Documentation'],
        team: ['ML Engineers', 'Data Scientists'],
      }] : []),
    ];

    const risks: RiskItem[] = [
      {
        name: 'Scope Creep',
        probability: 'High',
        impact: 'High',
        mitigation: 'Weekly scope review meetings, phased deliverables, change request process',
      },
      {
        name: 'Technical Debt',
        probability: 'Medium',
        impact: 'Medium',
        mitigation: 'Code reviews, automated testing, CI/CD gates, regular refactoring sprints',
      },
      ...(isAI ? [
        {
          name: 'ML Model Performance',
          probability: 'Medium',
          impact: 'High',
          mitigation: 'Early prototyping, fallback rules-based system, continuous model monitoring',
        },
      ] : []),
      ...(isMobile ? [
        {
          name: 'App Store Rejection',
          probability: 'Low',
          impact: 'Medium',
          mitigation: 'Follow platform guidelines, pre-submission review, iterative testing',
        },
      ] : []),
      {
        name: 'Resource Availability',
        probability: 'Medium',
        impact: 'Medium',
        mitigation: 'Cross-training, documentation standards, knowledge sharing sessions',
      },
    ];

    const totalWeeks = phases.reduce((sum, p) => sum + p.duration, 0);
    const totalCost = phases.reduce((sum, p) => sum + p.cost, 0);
    const monthlyBurn = totalWeeks > 0 ? (totalCost / totalWeeks * 4) : 0;

    const zionTools = [
      ...(isAI ? ['AI Site Evolution Advisor', 'AI ROI & Ops Scorecard', 'Autonomous AI Experience Studio'] : []),
      'AI Project Estimator (this tool)',
      'Autonomous Tech Stack Auditor',
      'AI Lead Scoring',
    ].slice(0, 4);

    return {
      phases,
      risks,
      totalCost,
      totalWeeks,
      teamSize: size,
      monthlyBurn: Math.round(monthlyBurn),
      recommendation: totalWeeks > 20
        ? 'Recommend phased delivery with MVP first, then iterative feature additions.'
        : 'Timeline is manageable for full-scope delivery within the estimated window.',
      zionTools,
    };
  };

  const runEstimation = () => {
    const conservative = generatePhases(projectType, 'mvp', teamSize, hourlyRate, features);
    const standard = generatePhases(projectType, 'standard', teamSize, hourlyRate, features);
    const aggressive = generatePhases(projectType, 'enterprise', teamSize, hourlyRate, features);

    setProposals({
      conservative,
      standard,
      aggressive,
    });
    setActiveProposal('standard');
  };

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  const currentProposal = proposals[activeProposal];
  const typeName = PROJECT_TYPES.find(t => t.id === projectType)?.label || '';

  if (!currentProposal) {
    return (
      <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
        <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>📋 Autonomous Project Estimator</h1>
        <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Describe your project scope and get an instant detailed proposal with phases, costs, risks, and timelines.</p>

        <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>⚙️ Project Configuration</h2>

          {/* Project Type */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>Project Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem' }}>
              {PROJECT_TYPES.map(type => (
                <div key={type.id} onClick={() => setProjectType(type.id)}
                  style={{ padding: '0.75rem', borderRadius: 8, cursor: 'pointer', background: projectType === type.id ? '#1f6feb' : '#0d1117', border: `1px solid ${projectType === type.id ? '#1f6feb' : '#30363d'}`, transition: 'all 0.15s' }}>
                  <span style={{ fontWeight: 600 }}>{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complexity */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>Scope Level</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {COMPLEXITY_LEVELS.map(level => (
                <div key={level.id} onClick={() => setComplexity(level.id)}
                  style={{ padding: '0.75rem 1.5rem', borderRadius: 8, cursor: 'pointer', background: complexity === level.id ? '#1f6feb' : '#0d1117', border: `1px solid ${complexity === level.id ? '#1f6feb' : '#30363d'}`, flex: 1, textAlign: 'center', transition: 'all 0.15s' }}>
                  <span style={{ fontWeight: 600 }}>{level.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Size */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>
              Team Size: <span style={{ color: '#58a6ff', fontWeight: 700 }}>{teamSize}</span> members
            </label>
            <input type="range" min={2} max={30} value={teamSize} onChange={e => setTeamSize(Number(e.target.value))} style={{ width: '100%' }} />
          </div>

          {/* Hourly Rate */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>
              Hourly Rate ($): <span style={{ color: '#58a6ff', fontWeight: 700 }}>${hourlyRate}</span>
            </label>
            <input type="range" min={25} max={200} step={5} value={hourlyRate} onChange={e => setHourlyRate(Number(e.target.value))} style={{ width: '100%' }} />
          </div>

          {/* Features Description */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#c9d1d9' }}>Project Description (optional)</label>
            <textarea value={features} onChange={e => setFeatures(e.target.value)} placeholder="Describe your project goals, key features, and any special requirements..."
              style={{ width: '100%', minHeight: 100, padding: '0.75rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: 8, color: '#e0e0e0', resize: 'vertical' }} />
          </div>
        </div>

        <button onClick={runEstimation} style={{ display: 'block', width: '100%', padding: '0.75rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #238636, #2ea043)', border: '1px solid #2ea043', borderRadius: 8, cursor: 'pointer', marginBottom: '1.5rem' }}>
          📊 Generate Project Proposal
        </button>
      </div>
    );
  }

  const proposal = currentProposal;
  const proposalsEntries = Object.entries(proposals);

  return (
    <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>📋 Project Proposal — {typeName}</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Select a scenario to compare timelines, costs, and risk profiles.</p>

      {/* Scenario Selector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {proposalsEntries.map(([key, p]) => p && (
          <div key={key} onClick={() => setActiveProposal(key)}
            style={{ padding: '1.25rem', borderRadius: 10, cursor: 'pointer', background: activeProposal === key ? '#1f6feb' : '#161b22', border: `1px solid ${activeProposal === key ? '#1f6feb' : '#30363d'}`, transition: 'all 0.15s' }}>
            <h3 style={{ margin: '0 0 0.5rem', textTransform: 'capitalize' }}>{key}</h3>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{formatCurrency(p.totalCost)}</div>
            <div style={{ color: '#8b949e', marginBottom: '0.25rem' }}>Duration: {p.totalWeeks} weeks</div>
            <div style={{ color: '#8b949e' }}>Monthly Burn: {formatCurrency(p.monthlyBurn)}</div>
          </div>
        ))}
      </div>

      {/* Phases */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📅 Project Phases</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {proposal.phases.map((phase, i) => (
            <div key={i} style={{ background: '#0d1117', borderRadius: 8, padding: '1.25rem', borderLeft: `4px solid #1f6feb` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div>
                  <span style={{ fontWeight: 600 }}>Phase {i + 1}</span>: <span style={{ color: '#58a6ff' }}>{phase.name}</span>
                </div>
                <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>{phase.duration} weeks • {formatCurrency(phase.cost)}</div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#c9d1d9', marginBottom: '0.5rem' }}>
                <strong>Deliverables:</strong> {phase.deliverables.join(', ')}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>
                <strong>Team:</strong> {phase.team.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Assessment */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>⚠️ Risk Assessment</h2>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {proposal.risks.map((risk, i) => {
            const riskColor = risk.probability === 'High' ? '#f44336' : risk.probability === 'Medium' ? '#ff9800' : '#4caf50';
            const impactColor = risk.impact === 'High' ? '#f44336' : risk.impact === 'Medium' ? '#ff9800' : '#4caf50';
            return (
              <div key={i} style={{ background: '#0d1117', borderRadius: 8, padding: '1rem', borderLeft: `4px solid ${riskColor}` }}>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{risk.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#c9d1d9', marginBottom: '0.5rem' }}>
                  <span style={{ background: riskColor, color: '#fff', padding: '0.2rem 0.5rem', borderRadius: 4, fontSize: '0.75rem', marginRight: '0.5rem' }}>P: {risk.probability}</span>
                  <span style={{ background: impactColor, color: '#fff', padding: '0.2rem 0.5rem', borderRadius: 4, fontSize: '0.75rem', marginRight: '0.5rem' }}>I: {risk.impact}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>
                  <strong>Mitigation:</strong> {risk.mitigation}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendation + Zion Tools */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>💡 Recommendation</h2>
        <p style={{ color: '#c9d1d9', marginBottom: '1rem' }}>{proposal.recommendation}</p>

        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>🔧 Recommended Zion Tools</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {proposal.zionTools.map(tool => (
            <span key={tool} style={{ padding: '0.5rem 0.75rem', background: '#0d1117', borderRadius: 6, border: '1px solid #30363d', fontSize: '0.85rem' }}>{tool}</span>
          ))}
        </div>
      </div>

      {/* New Estimation Button */}
      <button onClick={() => { setProposals({}); setActiveProposal('conservative'); }} style={{ display: 'block', width: '100%', padding: '0.75rem 1.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: '1px solid #1f6feb', borderRadius: 8, cursor: 'pointer', marginBottom: '1.5rem' }}>
        🔄 Configure New Project
      </button>
    </div>
  );
}