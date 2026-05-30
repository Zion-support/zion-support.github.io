'use client';

import { useState } from 'react';

const engines = [
  {
    id: 'v119', name: 'V119: Meeting-to-Action Engine', icon: '📋',
    description: 'Convert meeting transcripts into actionable tasks, calendar events, and follow-up emails with deadline tracking and accountability assignment.',
    features: ['Auto-extract action items from transcripts', 'Assign tasks with deadlines', 'Generate follow-up emails per assignee', 'Create calendar events from decisions', 'Track meeting sentiment and engagement', 'Detect next meeting scheduling', 'Decision logging and accountability', 'Reply-all enforcement for all participants'],
    color: 'from-blue-500 to-cyan-600', stats: { extraction: '95%', timeSaved: '4h/meeting', actions: '∞' },
    pricing: '$299/mo', useCases: ['Project Managers', 'Executive Teams', 'Agile Squads', 'Board Meetings']
  },
  {
    id: 'v120', name: 'V120: Customer Journey Orchestrator', icon: '🗺️',
    description: 'Map and automate the entire customer journey from awareness to advocacy with touchpoint optimization, churn-risk triggers, and personalized nurture sequences.',
    features: ['12-stage customer lifecycle mapping', 'Automated trigger-based transitions', 'Churn risk scoring with intervention', 'Personalized nurture sequences per stage', 'Multi-channel orchestration (email, in-app, SMS, call)', 'Real-time engagement scoring', 'Next-best-action recommendations', 'Win-back campaigns for churned customers'],
    color: 'from-emerald-500 to-green-600', stats: { stages: '12', churnReduction: '-45%', LTV: '+60%' },
    pricing: '$499/mo', useCases: ['Customer Success', 'Revenue Operations', 'Growth Teams', 'SaaS Companies']
  },
  {
    id: 'v121', name: 'V121: Email Accessibility Engine', icon: '♿',
    description: 'Ensure all emails meet WCAG 2.1 AA standards with auto-alt-text, reading-level optimization, screen-reader compatibility, and multi-language accessibility.',
    features: ['WCAG 2.1 AA compliance checking', 'Reading level analysis (Flesch-Kincaid)', 'Auto-generated alt text for images', 'Screen reader compatibility audit', 'Link text descriptiveness check', 'Multi-language detection and declaration', 'Auto-fix suggestions for all issues', 'Compliance scoring and reporting'],
    color: 'from-violet-500 to-purple-600', stats: { compliance: 'WCAG AA', languages: '40+', autoFixes: '80%' },
    pricing: '$249/mo', useCases: ['Enterprise Communications', 'Government', 'Healthcare', 'Education']
  },
  {
    id: 'v122', name: 'V122: Negotiation Assistant', icon: '🤝',
    description: 'Real-time negotiation coaching during email exchanges — detect leverage points, suggest counter-offers, track concessions, and optimize deal outcomes.',
    features: ['7-phase negotiation detection', '8 leverage point types identified', 'Concession tracking (given and received)', 'Counter-offer generation with templates', 'Deal probability scoring', 'Walk-away risk assessment', 'Tactic recommendations per phase', 'Value extraction from negotiations'],
    color: 'from-amber-500 to-orange-600', stats: { accuracy: '92%', dealLift: '+22%', phases: '7' },
    pricing: '$599/mo', useCases: ['Sales Teams', 'Procurement', 'Account Executives', 'Business Development']
  },
  {
    id: 'v123', name: 'V123: Email Archival & Search', icon: '🔍',
    description: 'Intelligent email archival with semantic search, conversation threading across years, and instant recall of any commitment, decision, or fact ever mentioned.',
    features: ['Semantic search across all emails', 'Commitment and promise extraction', 'Decision logging with timestamps', 'Financial data archival', 'Contact information indexing', 'Thread-aware conversation linking', 'Timeline view of all interactions', 'Instant recall of any fact or promise'],
    color: 'from-rose-500 to-pink-600', stats: { search: '<10ms', entities: '∞', retention: 'Forever' },
    pricing: '$349/mo', useCases: ['Legal Teams', 'Compliance', 'Executive Assistants', 'Audit Teams']
  }
];

export default function EmailIntelligenceV4Showcase() {
  const [active, setActive] = useState('v119');
  const current = engines.find(e => e.id === active) || engines[0];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-950 via-rose-950/15 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-1.5 text-sm text-rose-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            V119–V123 • Advanced Email Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            🧠 Beyond Email — Strategic Intelligence
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Five breakthrough engines that turn meetings, negotiations, and customer journeys into
            automated intelligence. Every interaction analyzed case-by-case with
            <strong className="text-rose-300"> guaranteed reply-all enforcement</strong>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map(eng => (
            <button key={eng.id} onClick={() => setActive(eng.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === eng.id ? `bg-gradient-to-r ${eng.color} text-white shadow-lg scale-105` : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
              {eng.icon} {eng.name.split(':')[0]}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${current.color} bg-opacity-20`}>{current.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-white">{current.name}</h3>
              <p className="text-slate-400 mt-1">{current.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {Object.entries(current.stats).map(([key, val]) => (
              <div key={key} className="bg-slate-800/60 rounded-lg px-4 py-2 text-center">
                <div className="text-lg font-bold text-white">{val}</div>
                <div className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-4 py-2 text-center">
              <div className="text-lg font-bold text-green-400">{current.pricing}</div>
              <div className="text-xs text-green-300">Starting at</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {current.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 bg-slate-800/40 rounded-lg p-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-slate-300 text-sm">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {current.useCases.map((uc, i) => (
              <span key={i} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full">{uc}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-between bg-slate-800/40 rounded-xl p-4">
            <div>
              <p className="text-white font-semibold">Ready to transform your workflow?</p>
              <p className="text-slate-400 text-sm">14-day free trial • No credit card required</p>
            </div>
            <div className="flex gap-2">
              <a href="/contact" className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Get Started</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">📧 Contact Sales</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {[
            { label: 'Meetings Processed', value: '25K+', icon: '📋' },
            { label: 'Journeys Automated', value: '10K+', icon: '🗺️' },
            { label: 'Deals Optimized', value: '$50M+', icon: '🤝' },
            { label: 'Emails Archived', value: '1M+', icon: '🔍' },
            { label: 'Reply-All Rate', value: '100%', icon: '📬' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-800/40 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-slate-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>📱 +1 302 464 0950 • 📧 kleber@ziontechgroup.com • 📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}
