'use client';

import React, { useState } from 'react';

const engines = [
  {
    version: 'V296',
    name: 'Intent Classifier Pro',
    icon: '🎯',
    description: 'Advanced intent detection with 95% accuracy. Identifies motivations, predicts next steps, and routes emails to the perfect team.',
    features: ['10 Intent Categories', 'Motivation Analysis', 'Action Prediction', 'Priority Scoring', 'SLA Assignment'],
    metrics: { accuracy: '95%', routing: 'Auto', time_saved: '8 min/email' }
  },
  {
    version: 'V297',
    name: 'Analytics Dashboard',
    icon: '📊',
    description: 'Real-time email performance metrics with response time tracking, engagement scoring, team analytics, and predictive insights.',
    features: ['Response Time Tracking', 'Engagement Scoring', 'Team Analytics', 'Trend Analysis', 'SLA Compliance'],
    metrics: { insights: 'Real-time', teams: 'Unlimited', predictions: 'AI-powered' }
  },
  {
    version: 'V298',
    name: 'Integration Orchestrator',
    icon: '🔗',
    description: 'Connect email with 1000+ business tools. Auto-trigger workflows in CRM, project management, support, and communication platforms.',
    features: ['1000+ Integrations', 'CRM Auto-Sync', 'Ticket Creation', 'Calendar Sync', 'Workflow Chains'],
    metrics: { integrations: '1000+', automation: '80%', time_saved: '8 min/email' }
  },
  {
    version: 'V299',
    name: 'A/B Testing Engine',
    icon: '🧪',
    description: 'Automated A/B testing for subject lines, content, and send times with statistical significance and auto-promotion of winners.',
    features: ['Subject Line Testing', 'Send Time Optimization', 'Content Variants', 'Statistical Analysis', 'Auto-Promote'],
    metrics: { open_rate: '+40%', reply_rate: '+60%', optimization: 'Continuous' }
  },
  {
    version: 'V300',
    name: 'Global Compliance Guardian',
    icon: '🛡️',
    description: 'Real-time compliance checking for GDPR, CCPA, HIPAA, SOX, PCI-DSS with automatic PII/PHI redaction and audit trails.',
    features: ['7 Frameworks', 'PII Detection', 'PHI Protection', 'Auto-Redaction', '7-Year Audit Trail'],
    metrics: { frameworks: '7', compliance: '100%', fines_prevented: '$millions' }
  }
];

export default function V296V300Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Email Intelligence V39 — Engines V296-V300
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            The most advanced email intelligence suite ever built. 97 engines working together to analyze, 
            optimize, and protect every email communication. <strong>All engines enforce reply-all for multi-recipient emails.</strong>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-600/30 rounded-full text-blue-200 text-sm">97 Total Engines</span>
            <span className="px-4 py-2 bg-green-600/30 rounded-full text-green-200 text-sm">1,454 Services</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-purple-200 text-sm">Reply-All Enforced</span>
            <span className="px-4 py-2 bg-orange-600/30 rounded-full text-orange-200 text-sm">Case-by-Case Analysis</span>
          </div>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map((engine, idx) => (
            <button
              key={engine.version}
              onClick={() => setActiveEngine(idx)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeEngine === idx
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
              }`}
            >
              {engine.icon} {engine.version}
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{engines[activeEngine].icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{engines[activeEngine].name}</h3>
                  <span className="text-blue-400 text-sm">{engines[activeEngine].version}</span>
                </div>
              </div>
              <p className="text-slate-300 mb-6">{engines[activeEngine].description}</p>
              
              <h4 className="text-white font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {engines[activeEngine].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Performance Metrics:</h4>
              <div className="space-y-4">
                {Object.entries(engines[activeEngine].metrics).map(([key, value]) => (
                  <div key={key} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-slate-400 text-sm capitalize">{key.replace(/_/g, ' ')}</div>
                    <div className="text-2xl font-bold text-blue-400">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-900/30 rounded-lg border border-green-700/50">
                <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                  <span>✅</span> Reply-All Enforced
                </div>
                <p className="text-slate-300 text-sm">
                  All responses automatically include all original recipients (To + CC) to ensure 
                  transparent communication and proper case-by-case handling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Intelligence?</h3>
          <p className="text-slate-300 mb-6">Contact Zion Tech Group for a personalized demo of our V296-V300 engines.</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              📱 +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              ✉️ kleber@ziontechgroup.com
            </a>
            <span className="flex items-center gap-2">
              📍 364 E Main St STE 1008, Middletown DE 19709
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
