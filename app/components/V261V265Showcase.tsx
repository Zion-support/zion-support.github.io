'use client';
import { useState } from 'react';

const engines = [
  { id: 'v261', name: 'Visual Content Analyzer', icon: '🎨', desc: 'Analyzes images/screenshots in emails, extracts text via OCR, detects sensitive visual content, and generates alt-text.', features: ['Image OCR extraction', 'Sensitive content detection', 'Visual context understanding', 'Alt-text generation'] },
  { id: 'v262', name: 'Cross-Cultural Intelligence', icon: '🌐', desc: 'Detects cultural communication patterns, adapts responses for global audiences, respects holidays and customs.', features: ['Cultural pattern detection', 'Holiday awareness', 'Formality calibration', 'Multi-language greetings'] },
  { id: 'v263', name: 'Predictive Response Generator', icon: '🔮', desc: 'Predicts what recipients want to hear, generates multiple response options, learns from past successful responses.', features: ['Needs prediction', 'Multiple response options', 'Success learning', 'Confidence scoring'] },
  { id: 'v264', name: 'Email-to-Action Bridge', icon: '📞', desc: 'Converts email requests into calendar events, tasks, workflow triggers, CRM updates, and ERP actions.', features: ['Calendar event creation', 'Task generation', 'CRM/ERP sync', 'Multi-tool bridging'] },
  { id: 'v265', name: 'Goal Achievement Tracker', icon: '🎯', desc: 'Tracks progress on email-discussed goals, sends milestone updates, escalates at-risk goals, generates reports.', features: ['Goal detection', 'Progress tracking', 'Risk escalation', 'Milestone updates'] }
];

export default function V261V265Showcase() {
  const [active, setActive] = useState('v261');
  const selected = engines.find(e => e.id === active)!;

  return (
    <section className="my-8 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Email Intelligence V32</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">V261-V265: Advanced AI Email Engines</h2>
        <p className="mt-1 text-sm text-slate-600">67 autonomous engines that analyze every email case-by-case, enforce reply-all, and bridge to real-world actions.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {engines.map(e => (
          <button key={e.id} onClick={() => setActive(e.id)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${active === e.id ? 'bg-emerald-600 text-white shadow' : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-300'}`}>
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
              <span className="text-emerald-500">✓</span> {f}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-500">
          ✅ All engines enforce <strong>reply-all</strong> for multi-recipient emails · Case-by-case analysis · Autonomous action
        </div>
        <div className="flex gap-2">
          <a href="/contact" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Get Started</a>
          <a href="/services" className="rounded-lg border border-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">All 1,269 Services</a>
        </div>
      </div>

      <div className="mt-3 text-xs text-slate-500">
        📱 +1 302 464 0950 · ✉️ kleber@ziontechgroup.com · 📍 364 E Main St STE 1008, Middletown DE 19709
      </div>
    </section>
  );
}
