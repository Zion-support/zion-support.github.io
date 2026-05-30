'use client';
import { useState } from 'react';

const engines = [
  {
    version: 'V401',
    name: 'Calendar Intelligence',
    icon: '📅',
    color: 'from-blue-500 to-cyan-500',
    features: ['Meeting request extraction', 'Conflict detection', 'Optimal time suggestions', 'Calendar invite generation', 'Timezone handling', 'Reply-all enforcement'],
    stats: { meetings: '2,450+', conflicts_prevented: '890+', hours_saved: '12,300+' },
    description: 'Auto-extract meeting requests from emails, detect scheduling conflicts, and suggest optimal meeting times across timezones.'
  },
  {
    version: 'V402',
    name: 'Translation Engine',
    icon: '🌐',
    color: 'from-purple-500 to-pink-500',
    features: ['100+ languages', 'Auto-detection', 'Tone preservation', 'Cultural context', 'Business etiquette', 'Reply-all enforcement'],
    stats: { languages: '100+', translations: '45,000+', accuracy: '95.8%' },
    description: 'Real-time email translation with automatic language detection, tone preservation, and cultural context adaptation for global business.'
  },
  {
    version: 'V403',
    name: 'Negotiation Assistant',
    icon: '🤝',
    color: 'from-green-500 to-emerald-500',
    features: ['Signal detection', 'Concession tracking', 'Leverage analysis', 'Counter-offer AI', 'Strategy briefings', 'Reply-all enforcement'],
    stats: { negotiations: '1,200+', deals_won: '340+', value_saved: '$2.4M' },
    description: 'Detect negotiation signals, track concessions, analyze leverage points, and generate winning counter-offers with AI strategy.'
  },
  {
    version: 'V404',
    name: 'Knowledge Base Builder',
    icon: '📚',
    color: 'from-amber-500 to-orange-500',
    features: ['FAQ auto-extraction', 'Knowledge graph', 'Gap detection', 'Documentation AI', 'Topic clustering', 'Reply-all enforcement'],
    stats: { articles: '3,400+', tickets_reduced: '60%', gaps_found: '245' },
    description: 'Automatically build a searchable knowledge base from email threads, extract FAQs, and identify knowledge gaps.'
  },
  {
    version: 'V405',
    name: 'Burnout Prevention',
    icon: '🧘',
    color: 'from-teal-500 to-green-500',
    features: ['Overload detection', 'After-hours monitoring', 'Inbox zero AI', 'Stress detection', 'Wellness reports', 'Reply-all enforcement'],
    stats: { users_protected: '850+', stress_alerts: '2,100+', wellness_improved: '40%' },
    description: 'Detect email overload patterns, monitor after-hours activity, and recommend workload balancing to prevent team burnout.'
  }
];

export default function V401V405Showcase() {
  const [activeEngine, setActiveEngine] = useState(0);
  const engine = engines[activeEngine];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-4">
            🧠 Email Intelligence V401-V405
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Next-Gen Email Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 specialized AI engines that analyze every email case-by-case, enforce reply-all, and take the most appropriate action. From calendar scheduling to burnout prevention.
          </p>
        </div>

        {/* Engine Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {engines.map((e, i) => (
            <button
              key={i}
              onClick={() => setActiveEngine(i)}
              className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeEngine === i
                  ? `bg-gradient-to-r ${e.color} text-white shadow-lg shadow-indigo-500/25 scale-105`
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xl">{e.icon}</span>
              <span>{e.version}</span>
            </button>
          ))}
        </div>

        {/* Active Engine Detail */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{engine.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{engine.version}: {engine.name}</h3>
                  <p className="text-gray-400">{engine.description}</p>
                </div>
              </div>
              <div className="space-y-2 mt-6">
                {engine.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">📊 Live Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(engine.stats).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-xl p-4 text-center">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${engine.color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 capitalize mt-1">
                      {key.replace(/_/g, ' ')}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 text-green-400 font-medium">
                  <span>✅</span>
                  <span>Reply-All Enforcement: ACTIVE</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  Every response includes all original recipients (To + CC). Case-by-case analysis ensures appropriate action for each email.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">🚀 Transform Your Email Workflow</h3>
            <p className="text-gray-200 mb-4">202 specialized email intelligence engines working for you 24/7</p>
            <div className="text-sm text-gray-300 space-y-1">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
