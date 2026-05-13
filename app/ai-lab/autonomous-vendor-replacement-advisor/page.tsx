'use client';

import React, { useState } from 'react';

interface VendorComparison {
  category: string;
  currentVendor: string;
  zionAlternative: string;
  currentCost: string;
  zionCost: string;
  features: { name: string; current: boolean; zion: boolean }[];
  migrationDifficulty: 'Easy' | 'Medium' | 'Hard';
  savingsPercent: number;
}

const ZION_SOLUTIONS: Record<string, { name: string; cost: string; features: string[] }> = {
  crm: { name: 'Zion Smart CRM', cost: '$49/mo', features: ['AI Lead Scoring', 'Automated Follow-ups', 'Pipeline Analytics', 'Email Sequences', 'Contact Enrichment'] },
  marketing: { name: 'Zion Content Studio', cost: '$79/mo', features: ['AI Content Generation', 'Multi-channel Publishing', 'SEO Optimization', 'Analytics Dashboard', 'A/B Testing'] },
  support: { name: 'Zion Knowledge Base Bot', cost: '$59/mo', features: ['24/7 AI Chatbot', 'Auto-responses', 'Ticket Routing', 'CSAT Tracking', 'Multi-language'] },
  devops: { name: 'Zion DevOps Automation', cost: '$99/mo', features: ['CI/CD Pipeline', 'Self-healing Monitor', 'Performance Budgets', 'Security Scanning', 'Incident Response'] },
  analytics: { name: 'Zion Smart Analytics', cost: '$69/mo', features: ['Real-time Dashboards', 'Predictive Models', 'Custom Reports', 'Data Pipelines', 'Cross-system Integration'] },
  security: { name: 'Zion Security Shield', cost: '$89/mo', features: ['Vulnerability Scanning', 'Compliance Monitoring', 'Secret Detection', 'Audit Trails', 'GDPR Automation'] },
};

const COMPETITOR_MAP: Record<string, { vendors: { name: string; cost: string; features: string[] }[] }> = {
  crm: {
    vendors: [
      { name: 'Salesforce', cost: '$150/user/mo', features: ['Lead Management', 'Pipeline View', 'Basic Automation', 'Reports', 'Mobile App'] },
      { name: 'HubSpot CRM', cost: '$50/user/mo', features: ['Contact Management', 'Deal Pipeline', 'Email Tracking', 'Basic Reports', 'Free Tier'] },
      { name: 'Pipedrive', cost: '$19/user/mo', features: ['Visual Pipeline', 'Email Integration', 'Basic Automation', 'Mobile App', 'Reporting'] },
    ],
  },
  marketing: {
    vendors: [
      { name: 'Hootsuite', cost: '$99/mo', features: ['Social Scheduling', 'Analytics', 'Team Collaboration', 'Content Calendar', 'Bulk Upload'] },
      { name: 'Buffer', cost: '$6/mo', features: ['Social Posting', 'Analytics', 'Link Shortening', 'Content Calendar', 'Team Access'] },
      { name: 'SEMrush', cost: '$129/mo', features: ['SEO Audit', 'Keyword Research', 'Backlink Analysis', 'Content Template', 'Rank Tracking'] },
    ],
  },
  support: {
    vendors: [
      { name: 'Zendesk', cost: '$55/agent/mo', features: ['Ticket System', 'Knowledge Base', 'Live Chat', 'Automation', 'Multi-channel'] },
      { name: 'Intercom', cost: '$74/agent/mo', features: ['Messenger', 'Chatbot', 'Help Center', 'Outbound Messages', 'Inbox'] },
      { name: 'Freshdesk', cost: '$15/agent/mo', features: ['Ticket Management', 'Automation', 'Knowledge Base', 'Multi-brand', 'SLA Management'] },
    ],
  },
  devops: {
    vendors: [
      { name: 'Datadog', cost: '$23/host/mo', features: ['Infrastructure Monitoring', 'APM', 'Log Management', 'Alerting', 'Dashboards'] },
      { name: 'Sentry', cost: '$26/mo', features: ['Error Tracking', 'Performance Monitoring', 'Session Replay', 'Alerts', 'Releases'] },
      { name: 'New Relic', cost: '$199/user/mo', features: ['Full-stack Observability', 'APM', 'Infrastructure', 'Logs', 'Alerts'] },
    ],
  },
  analytics: {
    vendors: [
      { name: 'Tableau', cost: '$70/user/mo', features: ['Data Visualization', 'Dashboards', 'Data Prep', 'Sharing', 'Mobile'] },
      { name: 'Looker', cost: '$5K+/mo', features: ['Data Modeling', 'Dashboards', 'Embedding', 'SQL Runner', 'API Access'] },
      { name: 'Google Analytics', cost: 'Free-$150K', features: ['Web Analytics', 'Audiences', 'Conversions', 'Real-time', 'Custom Dimensions'] },
    ],
  },
  security: {
    vendors: [
      { name: 'Okta', cost: '$2/user/mo', features: ['SSO', 'MFA', 'User Management', 'API Access', 'Lifecycle Management'] },
      { name: 'Crowdstrike', cost: '$8.33/host/mo', features: ['EDR', 'Threat Intelligence', 'Incident Response', 'Vulnerability Mgmt', 'Next-gen AV'] },
      { name: 'Snyk', cost: '$23/user/mo', features: ['SAST', 'SCA', 'Container Security', 'IaC Scanning', 'IDE Integration'] },
    ],
  },
};

export default function AutonomousVendorComparator() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof ZION_SOLUTIONS | ''>('');
  const [selectedCompetitor, setSelectedCompetitor] = useState('');
  const [comparison, setComparison] = useState<{
    zion: { name: string; cost: string; features: string[] };
    competitor: { name: string; cost: string; features: string[] };
    allFeatures: { name: string; zion: boolean; competitor: boolean }[];
    savings: string;
    summary: string;
  } | null>(null);

  const handleCompare = () => {
    if (!selectedCategory || !selectedCompetitor) return;

    const zion = ZION_SOLUTIONS[selectedCategory];
    const catCompetitors = COMPETITOR_MAP[selectedCategory]?.vendors || [];
    const competitor = catCompetitors.find(v => v.name === selectedCompetitor);

    if (!competitor) return;

    const allFeatureNames = Array.from(new Set([...zion.features, ...competitor.features]));
    const allFeatures = allFeatureNames.map(name => ({
      name,
      zion: zion.features.includes(name),
      competitor: competitor.features.includes(name),
    }));

    // Simple savings estimate
    const zionCost = parseInt(zion.cost.replace(/\D/g, '')) || 49;
    const compCost = parseInt(competitor.cost.replace(/[\$K+,/mo]/g, '')) || 49;
    const savings = compCost > zionCost ? Math.round(((compCost - zionCost) / compCost) * 100) : 0;
    const savingsValue = compCost > zionCost ? `Save ~$${compCost - zionCost}/mo` : 'Competitive pricing';

    setComparison({
      zion,
      competitor,
      allFeatures,
      savings: `$${compCost}/mo → $${zionCost}/mo (${savingsValue})`,
      summary: savings > 0
        ? `Switch to Zion ${zion.name} and save ${savings}% vs ${competitor.name}. Zion ${zionCost < compCost ? 'costs less' : 'is competitively priced'} while offering ${allFeatures.filter(f => f.zion && !f.competitor).length} unique features ${competitor.name} doesn't have.`
        : `Zion ${zion.name} offers ${allFeatures.filter(f => f.zion && !f.competitor).length} features that ${competitor.name} doesn't provide at comparable pricing.`,
    });
  };

  return (
    <div style={{ maxWidth: 960, margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: 12, minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>⚔️ Vendor Replacement Advisor</h1>
      <p style={{ color: '#8b949e', marginBottom: '2rem' }}>Compare your current vendor against Zion's AI-powered alternative. See side-by-side features, cost savings, and migration ease — all client-side.</p>

      {/* Selection */}
      <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📦 Step 1: Select Category</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.5rem' }}>
          {Object.entries(ZION_SOLUTIONS).map(([key, val]) => (
            <button key={key} onClick={() => { setSelectedCategory(key as keyof typeof ZION_SOLUTIONS); setSelectedCompetitor(''); setComparison(null); }}
              style={{ padding: '0.75rem 1rem', borderRadius: 8, border: `1px solid ${selectedCategory === key ? '#1f6feb' : '#30363d'}`, background: selectedCategory === key ? '#1f6feb' : 'transparent', color: '#fff', cursor: 'pointer', fontSize: '0.9rem', textAlign: 'left' }}>
              {val.name}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>🏢 Step 2: Select Current Vendor</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {COMPETITOR_MAP[selectedCategory]?.vendors.map(v => (
              <button key={v.name} onClick={() => setSelectedCompetitor(v.name)}
                style={{ padding: '0.75rem 1rem', borderRadius: 8, border: `1px solid ${selectedCompetitor === v.name ? '#1f6feb' : '#30363d'}`, background: selectedCompetitor === v.name ? '#1f6feb' : 'transparent', color: '#fff', cursor: 'pointer', fontSize: '0.9rem', textAlign: 'left' }}>
                <div style={{ fontWeight: 600 }}>{v.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>{v.cost}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedCategory && selectedCompetitor && (
        <button onClick={handleCompare} style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #238636, #2ea043)', border: 'none', borderRadius: 8, cursor: 'pointer', marginBottom: '1.5rem' }}>
          ⚔️ Compare Now
        </button>
      )}

      {comparison && (
        <>
          {/* Cost Summary */}
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ padding: '1.25rem', background: '#0d1117', borderRadius: 8, textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: '#58a6ff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{comparison.zion.name}</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#4caf50' }}>{comparison.zion.cost}</div>
                <div style={{ color: '#8b949e', marginTop: '0.25rem' }}>Zion AI-Powered</div>
              </div>
              <div style={{ padding: '1.25rem', background: '#0d1117', borderRadius: 8, textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: '#f5a623', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{comparison.competitor.name}</div>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>{comparison.competitor.cost}</div>
                <div style={{ color: '#8b949e', marginTop: '0.25rem' }}>Current Vendor</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', padding: '0.75rem', background: '#121a26', borderRadius: 6 }}>
              <span style={{ color: '#4caf50', fontWeight: 600 }}>💰 {comparison.savings}</span>
            </div>
          </div>

          {/* Feature Comparison */}
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📊 Feature Comparison</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #30363d', color: '#58a6ff' }}>Feature</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid #30363d', color: '#58a6ff' }}>{comparison.zion.name}</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid #30363d', color: '#f5a623' }}>{comparison.competitor.name}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.allFeatures.map(f => (
                  <tr key={f.name} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '0.75rem' }}>{f.name}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'center' }}>{f.zion ? <span style={{ color: '#4caf50', fontSize: '1.2rem' }}>✅</span> : <span style={{ color: '#f44336' }}>❌</span>}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'center' }}>{f.competitor ? <span style={{ color: '#4caf50', fontSize: '1.2rem' }}>✅</span> : <span style={{ color: '#f44336' }}>❌</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Zion Advantages */}
          <div style={{ background: '#161b22', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>🏆 Zion Advantages</h2>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {comparison.allFeatures.filter(f => f.zion && !f.competitor).map(f => (
                <div key={f.name} style={{ padding: '0.75rem', background: '#0d1117', borderRadius: 6, borderLeft: '4px solid #4caf50' }}>
                  <span style={{ fontWeight: 600, color: '#4caf50' }}>✅ Exclusive: </span>{f.name}
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1rem', color: '#8b949e', fontSize: '0.9rem' }}>{comparison.summary}</p>
          </div>

          <a href="/contact?topic=vendor-migration&source=vendor-comparator" style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)', border: 'none', borderRadius: 8, textDecoration: 'none', textAlign: 'center', marginBottom: '1.5rem' }}>
            📞 Get a Personalized Migration Plan
          </a>
        </>
      )}
    </div>
  );
}
