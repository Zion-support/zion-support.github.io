'use client';

import { useState } from 'react';
import Link from 'next/link';

const engines = [
  { version: 'V421', name: 'Fraud Detection', icon: '🛡️', color: 'from-red-500 to-orange-500',
    desc: 'Detect phishing, spoofing, and suspicious patterns with 99% accuracy. Auto-block CRITICAL threats.',
    features: ['Phishing detection', 'URL safety analysis', 'Spoofing detection', 'Risk scoring 0-100'] },
  { version: 'V422', name: 'Sentiment Evolution', icon: '📈', color: 'from-blue-500 to-cyan-500',
    desc: 'Track sentiment changes across email threads. Detect escalation before it happens.',
    features: ['Thread sentiment tracking', 'Escalation detection', 'Volatility analysis', 'At-risk alerts'] },
  { version: 'V423', name: 'Smart Scheduler', icon: '📅', color: 'from-green-500 to-emerald-500',
    desc: 'Extract scheduling info from emails and generate calendar invites automatically.',
    features: ['Time preference extraction', 'Timezone awareness', 'Auto calendar invites', 'Duration detection'] },
  { version: 'V424', name: 'Compliance Checker', icon: '⚖️', color: 'from-purple-500 to-pink-500',
    desc: 'Check emails for GDPR, HIPAA, PCI-DSS, SOX violations. Auto-mask sensitive data.',
    features: ['PII/PHI detection', 'Financial data checks', 'Auto-masking', 'Data retention alerts'] },
  { version: 'V425', name: 'Personalization', icon: '🎨', color: 'from-yellow-500 to-amber-500',
    desc: 'Analyze recipient profiles and personalize responses based on communication style and history.',
    features: ['Style analysis', 'Relationship detection', 'Personal detail extraction', 'Tone matching'] }
];

export default function V421V425Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-4">
            🚀 NEW — V421-V425 Email Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Next-Gen Email Intelligence</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 new AI engines that detect fraud, track sentiment, schedule meetings, ensure compliance, 
            and personalize every email — with <strong className="text-yellow-400">reply-all ALWAYS enforced</strong>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {engines.map((e, i) => (
            <button key={e.version} onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                active === i ? `bg-gradient-to-r ${e.color} text-white shadow-lg scale-105` : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}>
              <span className="text-xl mr-2">{e.icon}</span>{e.version}: {e.name}
            </button>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${engines[active].color} mb-4`}>
                <span className="text-5xl">{engines[active].icon}</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">{engines[active].version}: {engines[active].name}</h3>
              <p className="text-gray-300 text-lg mb-6">{engines[active].desc}</p>
              <div className="space-y-3">
                {engines[active].features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-white">{f}</span>
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
                <li>• Continuous learning</li>
              </ul>
              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <p className="text-green-300 text-sm font-semibold">
                  ✉️ Reply-All Enforcement: Every engine checks for multiple recipients and ensures all parties are included.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {[
            { label: 'Total Engines', value: '225+', icon: '🤖' },
            { label: 'Total Services', value: '2,134+', icon: '📦' },
            { label: 'Fraud Detection', value: '99%', icon: '🛡️' },
            { label: 'Languages', value: '100+', icon: '🌍' },
            { label: 'Compliance', value: 'GDPR+HIPAA', icon: '⚖️' }
          ].map((s, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
              <span className="text-3xl">{s.icon}</span>
              <div className="text-2xl font-bold mt-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">🚀 Ready to Supercharge Your Email?</h3>
            <p className="mb-4">Contact us for a free demo of our V421-V425 suite.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                📞 +1 302 464 0950
              </Link>
              <Link href="/services" className="bg-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30">
                📦 Browse All 2,134+ Services
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
