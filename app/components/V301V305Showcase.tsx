'use client';

import React, { useState } from 'react';

const engines = [
  {
    version: 'V301',
    name: 'Email DNA Profiler',
    icon: '🧬',
    description: 'Creates unique behavioral fingerprints for each sender. Detects impersonation, phishing, and social engineering with 99.9% accuracy using writing style, temporal, and linguistic DNA markers.',
    features: ['Behavioral DNA Profiling', 'Impersonation Detection', 'Phishing Prevention', 'Writing Style Analysis', 'Temporal Pattern Matching', '99.9% Accuracy'],
    metrics: { accuracy: '99.9%', profiles: 'Unlimited', detection: 'Real-time' }
  },
  {
    version: 'V302',
    name: 'Email Flow Optimizer',
    icon: '🌊',
    description: 'Reinforcement learning-powered email workflow optimization. Reduces inbox overload by 70% through smart batching, auto-responses, and intelligent routing.',
    features: ['RL-Based Optimization', 'Inbox Overload Reduction', 'Smart Batching', 'Auto-Response Detection', 'Routing Optimization', 'Productivity Scoring'],
    metrics: { overload_reduction: '70%', time_saved: '10+ hrs/wk', automation: 'AI-powered' }
  },
  {
    version: 'V303',
    name: 'Knowledge Synthesizer',
    icon: '🧠',
    description: 'Automatically extracts, organizes, and cross-references knowledge from all email conversations into a searchable knowledge graph with expertise mapping.',
    features: ['Knowledge Graph Building', 'Decision Extraction', 'Action Item Tracking', 'Expertise Mapping', 'Topic Classification', 'Cross-Reference Engine'],
    metrics: { knowledge_nodes: 'Auto-built', expertise: 'Mapped', search: 'Instant' }
  },
  {
    version: 'V304',
    name: 'Decision Intelligence',
    icon: '⚖️',
    description: 'Analyzes decision-making patterns in email threads, identifies bottlenecks causing delays, and suggests optimal decision paths with impact predictions.',
    features: ['Decision Pattern Analysis', 'Bottleneck Detection', 'Optimal Path Suggestion', 'Thread Efficiency Scoring', 'Decision Velocity Tracking', 'Impact Prediction'],
    metrics: { speed: '3x faster', bottlenecks: 'Auto-detected', efficiency: 'Scored' }
  },
  {
    version: 'V305',
    name: 'Brand Voice Engine',
    icon: '🎨',
    description: 'Ensures all outbound emails maintain consistent brand voice, tone, and messaging across the organization with real-time style enforcement and compliance scoring.',
    features: ['Brand Voice Scoring', 'Banned Phrase Detection', 'Tone Consistency', 'Inclusive Language Check', 'Auto-Correction', 'Style Guide Enforcement'],
    metrics: { consistency: '100%', grading: 'A-F', correction: 'Real-time' }
  }
];

export default function V301V305Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-900 via-slate-900 to-cyan-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🧬 Email Intelligence V40 — Engines V301-V305
          </h2>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            The next generation of email intelligence. DNA profiling, flow optimization, knowledge synthesis, 
            decision intelligence, and brand voice enforcement. <strong>102 engines working together.</strong>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-indigo-600/30 rounded-full text-indigo-200 text-sm">102 Total Engines</span>
            <span className="px-4 py-2 bg-green-600/30 rounded-full text-green-200 text-sm">1,480 Services</span>
            <span className="px-4 py-2 bg-purple-600/30 rounded-full text-purple-200 text-sm">Reply-All Enforced</span>
            <span className="px-4 py-2 bg-cyan-600/30 rounded-full text-cyan-200 text-sm">Case-by-Case Analysis</span>
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
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
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
                  <span className="text-cyan-400 text-sm">{engines[activeEngine].version}</span>
                </div>
              </div>
              <p className="text-slate-300 mb-6">{engines[activeEngine].description}</p>
              
              <h4 className="text-white font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {engines[activeEngine].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <span className="text-cyan-400">✓</span> {feature}
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
                    <div className="text-2xl font-bold text-cyan-400">{value}</div>
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
        <div className="mt-12 text-center bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Transform Your Email Intelligence Today</h3>
          <p className="text-slate-300 mb-6">Contact Zion Tech Group for a personalized demo of our V301-V305 engines.</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <a href="tel:+13024640950" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              📱 +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
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
