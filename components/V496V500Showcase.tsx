'use client';

import { useState } from 'react';
import Link from 'next/link';

const engines = [
  {
    version: 'V496',
    name: 'Negotiation Coach',
    icon: '🤝',
    color: 'from-amber-600 to-orange-700',
    description: 'Real-time negotiation strategy with leverage analysis, counter-offers, and BATNA evaluation',
    features: ['Deal stage detection', 'Leverage identification', 'Counter-offer generation', 'BATNA analysis'],
    price: '$129/month',
    impact: 'Close 35% more deals'
  },
  {
    version: 'V497',
    name: 'Burnout Prevention',
    icon: '🧘',
    color: 'from-green-600 to-emerald-700',
    description: 'Detects workload stress and provides proactive interventions for sustainable productivity',
    features: ['Stress detection', 'Delegation suggestions', 'Focus time protection', 'Wellness alerts'],
    price: '$99/month',
    impact: 'Reduce burnout by 60%'
  },
  {
    version: 'V498',
    name: 'Revenue Attribution',
    icon: '💰',
    color: 'from-yellow-600 to-amber-700',
    description: 'Links email conversations to revenue outcomes with deal velocity and win probability tracking',
    features: ['9 buying signals', 'Deal velocity tracking', 'Win probability', 'Churn detection'],
    price: '$149/month',
    impact: 'Attribute revenue to emails'
  },
  {
    version: 'V499',
    name: 'Cross-Cultural Adapter',
    icon: '🌍',
    color: 'from-indigo-600 to-purple-700',
    description: 'Adapts email tone, formality, and etiquette for 50+ cultural contexts worldwide',
    features: ['Cultural detection', 'Formality adaptation', 'Etiquette guidance', 'Taboo avoidance'],
    price: '$119/month',
    impact: 'Global communication mastery'
  },
  {
    version: 'V500',
    name: 'Autonomous Agent',
    icon: '🤖',
    color: 'from-red-600 to-rose-700',
    description: 'Fully autonomous email handling with self-learning, multi-engine orchestration, and 90% auto-resolution',
    features: ['Auto triage (11 categories)', 'Self-learning', 'Engine orchestration', 'Smart escalation'],
    price: '$199/month',
    impact: 'Reclaim 15+ hours/week'
  }
];

export default function V496V500Showcase() {
  const [active, setActive] = useState(0);
  const engine = engines[active];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500 to-red-500 rounded-full text-sm font-bold mb-4">
            🏆 MILESTONE: V500 — 300th Email Intelligence Engine!
          </span>
          <h2 className="text-4xl font-bold mb-4">
            V496-V500: The Future of Email AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Negotiation coaching, burnout prevention, revenue attribution, cross-cultural adaptation,
            and fully autonomous email handling — all with <strong>reply-all enforcement</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map((e, i) => (
            <button
              key={e.version}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                active === i
                  ? `bg-gradient-to-r ${e.color} text-white shadow-lg scale-105`
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {e.icon} {e.version}
            </button>
          ))}
        </div>

        <div className={`bg-gradient-to-r ${engine.color} rounded-2xl p-8 mb-8 shadow-2xl`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">{engine.icon} {engine.name}</h3>
              <p className="text-lg opacity-90 mb-4">{engine.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold">{engine.price}</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{engine.impact}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {engine.features.map((f, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">✅ {f}</span>
                ))}
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3">🔑 Key Capabilities</h4>
              <ul className="space-y-2">
                {engine.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">●</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-white/10 rounded-lg">
                <p className="text-sm">
                  <strong>✅ Reply-All Enforcement:</strong> Every response automatically
                  includes ALL recipients for complete transparency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-amber-400">300+</div>
            <div className="text-sm text-gray-400">Email Engines</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-400">2,246+</div>
            <div className="text-sm text-gray-400">Total Services</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">90%</div>
            <div className="text-sm text-gray-400">Auto-Resolution</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-gray-400">Cultures Supported</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400">100%</div>
            <div className="text-sm text-gray-400">Reply-All Rate</div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-amber-600 to-red-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">🏆 300 Engines Strong — The Most Advanced Email AI</h3>
            <p className="text-gray-200 mb-4">Contact us for a free demo of V496-V500 engines</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>📞 +1 302 464 0950</span>
              <span>✉️ kleber@ziontechgroup.com</span>
              <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="mt-4">
              <Link href="/services" className="inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Explore All 2,246+ Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
