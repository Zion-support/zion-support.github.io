'use client';

import { useState } from 'react';

const engines = [
  {
    id: 'v109',
    name: 'V109: Autonomous Email Orchestrator',
    icon: '🎯',
    description: 'Fully autonomous email handling with zero-touch processing, intelligent routing, auto-responses, and self-learning from outcomes. Analyzes each email case-by-case and takes the most appropriate action.',
    features: [
      'Zero-touch email processing with 99.2% accuracy',
      'Case-by-case intelligent analysis and routing',
      'Auto-response generation with context awareness',
      'Self-learning from email outcomes and corrections',
      'Priority queue management with deadline tracking',
      'Batch processing for bulk communications',
      'Escalation rules with SLA enforcement',
      'Full reply-all enforcement for team communications'
    ],
    color: 'from-violet-500 to-purple-600',
    useCases: ['Executive Assistants', 'Customer Support', 'Sales Teams', 'Operations']
  },
  {
    id: 'v110',
    name: 'V110: Emotional Intelligence Engine',
    icon: '💝',
    description: 'Deep emotional analysis of email tone, stress detection, empathy scoring, relationship health monitoring, and emotional response optimization for better human connections.',
    features: [
      'Real-time emotional tone analysis (40+ emotions)',
      'Stress and burnout detection in communications',
      'Empathy scoring and response suggestions',
      'Relationship health monitoring over time',
      'Conflict detection and de-escalation strategies',
      'Cultural sensitivity adaptation (60+ cultures)',
      'Emotional trajectory tracking across threads',
      'Burnout prevention alerts for high-stress patterns'
    ],
    color: 'from-pink-500 to-rose-500',
    useCases: ['HR Teams', 'Customer Success', 'Therapists', 'Leadership']
  },
  {
    id: 'v111',
    name: 'V111: Revenue Intelligence Engine',
    icon: '💰',
    description: 'Monetize every email interaction with upsell detection, churn prediction, deal-stage tracking, revenue attribution, and automated follow-up sequences that drive growth.',
    features: [
      'Upsell and cross-sell opportunity detection',
      'Churn prediction with 94% accuracy',
      'Deal-stage tracking from email conversations',
      'Revenue attribution per email thread',
      'Automated follow-up sequences with timing optimization',
      'Competitor mention detection and counter-strategies',
      'Price sensitivity analysis from email language',
      'Pipeline velocity tracking and bottleneck identification'
    ],
    color: 'from-emerald-500 to-green-600',
    useCases: ['Sales Teams', 'Account Managers', 'Revenue Ops', 'Growth Teams']
  },
  {
    id: 'v112',
    name: 'V112: Compliance & Legal Guardian Pro',
    icon: '⚖️',
    description: 'Enterprise-grade compliance monitoring with GDPR, HIPAA, SOX, CCPA enforcement, legal hold automation, audit trail generation, and regulatory risk scoring.',
    features: [
      'Multi-regulation compliance (GDPR, HIPAA, SOX, CCPA, PCI-DSS)',
      'Legal hold automation and preservation',
      'Complete audit trail generation for all communications',
      'Regulatory risk scoring per email',
      'Data retention policy enforcement',
      'Cross-border data transfer detection',
      'Confidentiality agreement monitoring',
      'Regulatory change adaptation and alerts'
    ],
    color: 'from-amber-500 to-orange-600',
    useCases: ['Legal Teams', 'Compliance Officers', 'Risk Management', 'Healthcare']
  },
  {
    id: 'v113',
    name: 'V113: Unified Intelligence Dashboard',
    icon: '🚀',
    description: 'Single pane of glass for all email intelligence with real-time analytics, team performance metrics, AI confidence scoring, and predictive insights across all V109-V112 engines.',
    features: [
      'Real-time email processing analytics',
      'Team performance dashboards with benchmarks',
      'AI confidence scoring and transparency',
      'Predictive insights and trend forecasting',
      'Custom alert rules and notifications',
      'Export and reporting (PDF, CSV, API)',
      'Integration status monitoring',
      'ROI tracking and business impact metrics'
    ],
    color: 'from-cyan-500 to-blue-600',
    useCases: ['C-Suite', 'Operations Leaders', 'IT Admins', 'All Teams']
  }
];

export default function EmailCommandCenter() {
  const [active, setActive] = useState('v109');
  const current = engines.find(e => e.id === active) || engines[0];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            V109–V113 • Email Command Center
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            🎯 Next-Gen Email Intelligence Suite
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The most advanced AI email platform: autonomous orchestration, emotional intelligence,
            revenue optimization, compliance guardian, and unified analytics — all working together.
            <strong className="text-indigo-300"> Case-by-case analysis with guaranteed reply-all enforcement.</strong>
          </p>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map(eng => (
            <button
              key={eng.id}
              onClick={() => setActive(eng.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === eng.id
                  ? `bg-gradient-to-r ${eng.color} text-white shadow-lg`
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {eng.icon} {eng.name.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className={`rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur p-6 md:p-8`}>
          <div className="flex items-start gap-4 mb-6">
            <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${current.color} bg-opacity-20`}>
              {current.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{current.name}</h3>
              <p className="text-slate-400 mt-1">{current.description}</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {current.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 bg-slate-800/40 rounded-lg p-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-slate-300 text-sm">{f}</span>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="flex flex-wrap gap-2 mb-6">
            {current.useCases.map((uc, i) => (
              <span key={i} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full">
                {uc}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 items-center justify-between bg-slate-800/40 rounded-xl p-4">
            <div>
              <p className="text-white font-semibold">Ready to transform your email workflow?</p>
              <p className="text-slate-400 text-sm">Starting at $299/mo • 14-day free trial</p>
            </div>
            <div className="flex gap-2">
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Started
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                📧 Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {[
            { label: 'Emails Processed', value: '2.4M+', icon: '📨' },
            { label: 'Accuracy Rate', value: '99.2%', icon: '🎯' },
            { label: 'Time Saved', value: '12h/wk', icon: '⏱️' },
            { label: 'Reply-All Rate', value: '100%', icon: '📬' },
            { label: 'ROI Average', value: '340%', icon: '📈' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-800/40 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-slate-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>📱 +1 302 464 0950 • 📧 kleber@ziontechgroup.com • 📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}
