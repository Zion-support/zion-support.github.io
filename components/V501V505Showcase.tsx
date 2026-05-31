'use client';

import { useState } from 'react';
import Link from 'next/link';

const engines = [
  {
    version: 'V501', name: 'Legal Risk Scanner', icon: '⚖️',
    color: 'from-slate-700 to-gray-900',
    description: 'Detects contractual obligations, liability clauses, and legal exposure in emails before they become problems',
    features: ['Contract obligation detection', 'Liability identification', 'IP risk assessment', 'NDA compliance'],
    price: '$159/month', impact: 'Prevent costly legal exposure'
  },
  {
    version: 'V502', name: 'Influence & Persuasion', icon: '🧠',
    color: 'from-violet-600 to-purple-800',
    description: "Applies Cialdini's 6 principles of persuasion to optimize email effectiveness and influence outcomes",
    features: ['6 persuasion principles', 'CTA optimization', 'Power words', 'Readability scoring'],
    price: '$119/month', impact: 'Increase response rates by 65%'
  },
  {
    version: 'V503', name: 'Knowledge Distiller', icon: '📚',
    color: 'from-cyan-600 to-blue-800',
    description: 'Extracts and organizes knowledge from email threads into searchable wiki-style entries',
    features: ['FAQ generation', 'Process documentation', 'Decision logging', 'Wiki creation'],
    price: '$109/month', impact: 'Capture institutional knowledge'
  },
  {
    version: 'V504', name: 'Team Collaboration Hub', icon: '👥',
    color: 'from-teal-600 to-green-800',
    description: 'Real-time collaborative email drafting with role-based contributions and consensus tracking',
    features: ['Collaborative drafting', 'Approval workflows', 'Consensus scoring', 'Version control'],
    price: '$99/month', impact: 'Team-aligned communications'
  },
  {
    version: 'V505', name: 'Predictive Analytics', icon: '📊',
    color: 'from-orange-600 to-red-800',
    description: 'Forecasts email volume, response times, business outcomes, and detects anomalies in real-time',
    features: ['Volume forecasting', 'Anomaly detection', 'Capacity planning', 'Revenue prediction'],
    price: '$139/month', impact: 'Data-driven email intelligence'
  }
];

export default function V501V505Showcase() {
  const [active, setActive] = useState(0);
  const engine = engines[active];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-sm font-bold mb-4">
            🏆 V501-V505 — 305 Email Intelligence Engines Strong
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Legal AI, Persuasion Science, Knowledge Management & Predictive Analytics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From legal risk scanning to predictive analytics — 5 more breakthrough engines with <strong>100% reply-all enforcement</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map((e, i) => (
            <button key={e.version} onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                active === i ? `bg-gradient-to-r ${e.color} text-white shadow-lg scale-105` : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
              }`}>{e.icon} {e.version}</button>
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
                  <li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-1">●</span><span>{f}</span></li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-white/10 rounded-lg">
                <p className="text-sm"><strong>✅ Reply-All Enforcement:</strong> Every response auto-includes ALL recipients.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-3xl font-bold text-cyan-400">305+</div><div className="text-sm text-gray-400">Email Engines</div></div>
          <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-3xl font-bold text-violet-400">2,271+</div><div className="text-sm text-gray-400">Total Services</div></div>
          <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-3xl font-bold text-green-400">8</div><div className="text-sm text-gray-400">Legal Categories</div></div>
          <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-3xl font-bold text-orange-400">6</div><div className="text-sm text-gray-400">Persuasion Principles</div></div>
          <div className="bg-white/5 rounded-xl p-4 text-center"><div className="text-3xl font-bold text-red-400">100%</div><div className="text-sm text-gray-400">Reply-All Rate</div></div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-600 to-violet-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">The Most Advanced Email Intelligence Platform</h3>
            <p className="text-gray-200 mb-4">305 engines. 2,271+ services. One platform.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>📞 +1 302 464 0950</span>
              <span>✉️ kleber@ziontechgroup.com</span>
              <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="mt-4">
              <Link href="/services" className="inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Explore All 2,271+ Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
