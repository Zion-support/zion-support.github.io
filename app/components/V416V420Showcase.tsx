'use client';

import { useState } from 'react';
import Link from 'next/link';

const engines = [
  {
    version: 'V416',
    name: 'Intent Classifier Pro',
    icon: '🎯',
    description: 'Classifies email intent into 20+ categories for intelligent routing and response strategy.',
    features: ['20+ intent categories', 'Confidence scoring', 'Auto-routing', 'Response strategy'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    version: 'V417',
    name: 'Response Quality Scorer',
    icon: '⭐',
    description: 'Scores email responses across 8 dimensions: clarity, tone, completeness, professionalism, empathy, actionability, grammar, relevance.',
    features: ['8-dimension scoring', 'A+ to D grading', 'Improvement tips', 'Tone analysis'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    version: 'V418',
    name: 'Thread Analyzer',
    icon: '🧵',
    description: 'Analyzes full email thread context, identifies decision points, tracks conversations, and detects unresolved issues.',
    features: ['Thread context', 'Decision tracking', 'Action items', 'Topic extraction'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    version: 'V419',
    name: 'Priority Decay Engine',
    icon: '⏱️',
    description: 'Dynamically adjusts email priority based on age, urgency signals, SLA, and business context.',
    features: ['Dynamic priority', 'SLA tracking', 'Auto-escalation', 'Dashboard'],
    color: 'from-red-500 to-rose-500'
  },
  {
    version: 'V420',
    name: 'Knowledge Extractor',
    icon: '📚',
    description: 'Extracts, categorizes, and stores knowledge from emails to build a searchable organizational knowledge base.',
    features: ['6 knowledge types', 'Searchable KB', 'Auto-categorization', 'Access tracking'],
    color: 'from-green-500 to-emerald-500'
  }
];

export default function V416V420Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4">
            🚀 NEW — V416-V420 Email Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Case-by-Case Intelligent Email Analysis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 new AI engines that analyze each email individually, classify intent, score quality, 
            track priorities, extract knowledge, and <strong className="text-yellow-400">ALWAYS enforce reply-all</strong> for multi-recipient emails.
          </p>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {engines.map((engine, idx) => (
            <button
              key={engine.version}
              onClick={() => setActiveEngine(idx)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeEngine === idx
                  ? `bg-gradient-to-r ${engine.color} text-white shadow-lg shadow-blue-500/25 scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{engine.icon}</span>
              {engine.version}: {engine.name}
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${engines[activeEngine].color} mb-4`}>
                <span className="text-5xl">{engines[activeEngine].icon}</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">
                {engines[activeEngine].version}: {engines[activeEngine].name}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {engines[activeEngine].description}
              </p>
              <div className="space-y-3">
                {engines[activeEngine].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black/30 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-yellow-400">🔑 Key Capabilities</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Case-by-case email analysis</li>
                <li>• Intelligent action determination</li>
                <li>• <strong className="text-red-400">Reply-all ALWAYS enforced</strong></li>
                <li>• Real-time processing</li>
                <li>• Autonomous operation</li>
                <li>• Continuous improvement</li>
                <li>• Multi-language support</li>
                <li>• Enterprise-grade security</li>
              </ul>
              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <p className="text-green-300 text-sm font-semibold">
                  ✉️ Reply-All Enforcement: Every engine checks for multiple recipients 
                  and ensures all parties are included in responses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {[
            { label: 'Total Engines', value: '220+', icon: '🤖' },
            { label: 'Total Services', value: '2,118+', icon: '📦' },
            { label: 'Intent Categories', value: '20+', icon: '🎯' },
            { label: 'Quality Dimensions', value: '8', icon: '⭐' },
            { label: 'Knowledge Types', value: '6', icon: '📚' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-4 text-center">
              <span className="text-3xl">{stat.icon}</span>
              <div className="text-2xl font-bold mt-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">🚀 Ready to Supercharge Your Email?</h3>
            <p className="mb-4">Contact us for a free demo of our V416-V420 Email Intelligence suite.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                📞 +1 302 464 0950
              </Link>
              <Link href="/services" className="bg-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30">
                📦 Browse All 2,118+ Services
              </Link>
            </div>
            <p className="mt-4 text-sm opacity-80">
              ✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
