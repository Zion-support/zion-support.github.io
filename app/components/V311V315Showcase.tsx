'use client';

import React, { useState } from 'react';

const engines = [
  {
    version: 'V311',
    name: 'Experimentation Platform',
    icon: '🧪',
    description: 'Run controlled A/B/n experiments on email strategies with statistical significance tracking and automated winner selection across segments.',
    features: ['A/B/n Testing', 'Statistical Significance', 'Segment Targeting', 'Auto-Winner Selection', 'Multi-Metric Tracking'],
    metrics: { reply_improvement: '+35%', experiments: 'Unlimited', significance: '95%+' }
  },
  {
    version: 'V312',
    name: 'Relationship Graph',
    icon: '🔗',
    description: 'Maps organizational relationship networks from email patterns, identifies key influencers, and detects communication bottlenecks and silos.',
    features: ['Network Mapping', 'Influence Scoring', 'Bottleneck Detection', 'Silo Identification', 'Stakeholder Analysis'],
    metrics: { influencers: 'Auto-ID\'d', silos: 'Detected', bottlenecks: 'Mapped' }
  },
  {
    version: 'V313',
    name: 'Evolution Engine',
    icon: '🧬',
    description: 'Continuously improves email templates using genetic algorithms — mutating subject lines, content, and CTAs through generations to find optimal combinations.',
    features: ['Genetic Algorithms', 'Template Mutation', 'Crossover Breeding', 'Fitness Scoring', 'Auto-Evolution'],
    metrics: { generations: 'Infinite', fitness: 'Auto-optimized', improvement: 'Continuous' }
  },
  {
    version: 'V314',
    name: 'Speed Optimizer',
    icon: '⚡',
    description: 'Reduces email processing time with one-click responses, smart templates, batch processing, and distraction-free compose mode.',
    features: ['One-Click Responses', 'Smart Templates', 'Batch Processing', 'Distraction-Free Mode', 'Send Scheduling'],
    metrics: { time_saved: '2+ hrs/day', speed: '3x faster', templates: 'AI-matched' }
  },
  {
    version: 'V315',
    name: 'Threat Intelligence Hub',
    icon: '🛡️',
    description: 'Aggregates threat intelligence feeds, correlates IOCs with incoming emails, detects zero-day phishing campaigns, and shares indicators organization-wide.',
    features: ['Threat Feed Aggregation', 'IOC Correlation', 'Zero-Day Detection', 'Campaign Analysis', 'Incident Reporting'],
    metrics: { threats_blocked: '99.9%', zero_day: 'Detected', IOCs: 'Auto-shared' }
  }
];

export default function V311V315Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-violet-900 via-slate-900 to-rose-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🧬 Email Intelligence V42 — Engines V311-V315
          </h2>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
            Experimentation, relationship mapping, genetic evolution, speed optimization, and threat intelligence. 
            <strong> 112 engines. 1,532 services. The world&apos;s most advanced email AI platform.</strong>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-violet-600/30 rounded-full text-violet-200 text-sm">112 Total Engines</span>
            <span className="px-4 py-2 bg-rose-600/30 rounded-full text-rose-200 text-sm">1,532 Services</span>
            <span className="px-4 py-2 bg-green-600/30 rounded-full text-green-200 text-sm">Reply-All Enforced</span>
            <span className="px-4 py-2 bg-blue-600/30 rounded-full text-blue-200 text-sm">Case-by-Case Analysis</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map((engine, idx) => (
            <button
              key={engine.version}
              onClick={() => setActiveEngine(idx)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeEngine === idx
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
              }`}
            >
              {engine.icon} {engine.version}
            </button>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{engines[activeEngine].icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{engines[activeEngine].name}</h3>
                  <span className="text-violet-400 text-sm">{engines[activeEngine].version}</span>
                </div>
              </div>
              <p className="text-slate-300 mb-6">{engines[activeEngine].description}</p>
              
              <h4 className="text-white font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {engines[activeEngine].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <span className="text-violet-400">✓</span> {feature}
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
                    <div className="text-2xl font-bold text-violet-400">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-900/30 rounded-lg border border-green-700/50">
                <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                  <span>✅</span> Reply-All Enforced
                </div>
                <p className="text-slate-300 text-sm">
                  All responses automatically include all original recipients (To + CC) for transparent 
                  communication and proper case-by-case handling.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-violet-600/20 to-rose-600/20 rounded-2xl p-8 border border-violet-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Transform Your Email Intelligence Today</h3>
          <p className="text-slate-300 mb-6">Contact Zion Tech Group for a personalized demo of our V311-V315 engines.</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
              📱 +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
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
