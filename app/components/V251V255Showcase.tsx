'use client';
import { useState } from 'react';

const engines = [
  { id: 'v251', name: 'Context Memory', icon: '🧠', desc: 'Remembers past conversations with each contact, builds relationship context, detects communication patterns over time.', features: ['Conversation recall', 'Relationship depth', 'Fact extraction', 'Pattern detection'] },
  { id: 'v252', name: 'Response Time Optimizer', icon: '⏰', desc: 'Analyzes optimal response times, predicts recipient availability, suggests best send times based on historical data.', features: ['Urgency assessment', 'Priority scoring', 'Timezone awareness', 'Response windows'] },
  { id: 'v253', name: 'Fact Checker', icon: '🔍', desc: 'Verifies claims and statistics in emails, cross-references sources, flags misleading info, provides citations.', features: ['Claim verification', 'Trust scoring', 'Source checking', 'Misinfo detection'] },
  { id: 'v254', name: 'Tone Adapter Pro', icon: '🎨', desc: 'Detects communication style, adapts tone to match, maintains brand voice consistency across all emails.', features: ['Style detection', 'Tone mirroring', 'Sentiment awareness', 'Brand voice'] },
  { id: 'v255', name: 'ROI Tracker', icon: '📈', desc: 'Tracks business value from emails, measures deal progression, calculates time saved, generates ROI reports.', features: ['Deal tracking', 'Value extraction', 'Time savings', 'ROI metrics'] }
];

export default function V251V255Showcase() {
  const [active, setActive] = useState('v251');
  const selected = engines.find(e => e.id === active)!;

  return (
    <section className="my-8 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-6 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">Email Intelligence V30</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">V251-V255: Next-Gen AI Email Engines</h2>
        <p className="mt-1 text-sm text-slate-600">57 autonomous engines that analyze every email case-by-case, enforce reply-all, and take intelligent action.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {engines.map(e => (
          <button key={e.id} onClick={() => setActive(e.id)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${active === e.id ? 'bg-violet-600 text-white shadow' : 'bg-white text-slate-700 border border-slate-200 hover:border-violet-300'}`}>
            {e.icon} {e.name}
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-white p-5 border border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{selected.icon}</span>
          <div>
            <h3 className="font-bold text-lg text-slate-900">{selected.name}</h3>
            <p className="text-sm text-slate-600">{selected.desc}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          {selected.features.map(f => (
            <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="text-violet-500">✓</span> {f}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-500">
          ✅ All engines enforce <strong>reply-all</strong> for multi-recipient emails · Case-by-case analysis · Autonomous action
        </div>
        <div className="flex gap-2">
          <a href="/contact" className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">Get Started</a>
          <a href="/services" className="rounded-lg border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-700 hover:bg-violet-50">All 1,217 Services</a>
        </div>
      </div>

      <div className="mt-3 text-xs text-slate-500">
        📱 +1 302 464 0950 · ✉️ kleber@ziontechgroup.com · 📍 364 E Main St STE 1008, Middletown DE 19709
      </div>
    </section>
  );
}
