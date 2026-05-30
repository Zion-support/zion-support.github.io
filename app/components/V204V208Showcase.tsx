"use client";
import React from 'react';

const V204V208Showcase = () => {
  const engineGroups = [
    {
      label: 'V204–V208',
      color: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/30',
      engines: [
        { v: 'V204', icon: '🚨', title: 'Priority Escalation', desc: 'Sentiment decay, executive detection, 5-level escalation', price: '$399/mo' },
        { v: 'V205', icon: '🧠', title: 'Knowledge Extraction', desc: 'Decisions, actions, deadlines, commitments extraction', price: '$349/mo' },
        { v: 'V206', icon: '🕸️', title: 'Stakeholder Mapper', desc: 'Org relationship mapping with influence scoring', price: '$449/mo' },
        { v: 'V207', icon: '⭐', title: 'Response Quality Grader', desc: 'A+ to F grading on clarity, tone, professionalism', price: '$199/mo' },
        { v: 'V208', icon: '⚙️', title: 'Workflow Automation', desc: 'Pattern detection, smart templates, routing logic', price: '$449/mo' },
      ],
    },
    {
      label: 'V209–V213',
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      engines: [
        { v: 'V209', icon: '🌍', title: 'Translation Hub', desc: '40+ languages, cultural context, formality matching', price: '$299/mo' },
        { v: 'V210', icon: '💰', title: 'Revenue Attribution', desc: 'Pipeline tracking, deal influence, ROI dashboards', price: '$499/mo' },
        { v: 'V211', icon: '🔄', title: 'Disaster Recovery', desc: 'Backup, corruption detection, point-in-time restore', price: '$199/mo' },
        { v: 'V212', icon: '🏆', title: 'Gamification', desc: 'Leaderboards, badges, streaks, team metrics', price: '$149/mo' },
        { v: 'V213', icon: '🎯', title: 'Competitive Intel', desc: 'Competitor detection, battle cards, switch risk', price: '$399/mo' },
      ],
    },
    {
      label: 'V214–V220',
      color: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30',
      engines: [
        { v: 'V214', icon: '📈', title: 'Sentiment Evolution', desc: 'Relationship health scoring, trend prediction', price: '$349/mo' },
        { v: 'V215', icon: '♟️', title: 'Negotiation Strategist', desc: '7 tactic detection, leverage scoring, game theory', price: '$499/mo' },
        { v: 'V216', icon: '🚨', title: 'Crisis Communication', desc: '5 crisis types, escalation paths, auto-response', price: '$399/mo' },
        { v: 'V217', icon: '🌏', title: 'Cultural Intelligence', desc: '10+ regions, taboo detection, formality adaptation', price: '$299/mo' },
        { v: 'V218', icon: '📋', title: 'Decision Audit Trail', desc: 'SOX/SOC2 compliance, governance scoring', price: '$399/mo' },
        { v: 'V219', icon: '🌱', title: 'Carbon Tracker', desc: 'CO2 calculation, ESG reporting, sustainability', price: '$149/mo' },
        { v: 'V220', icon: '🎭', title: 'Persuasion Analyzer', desc: '8 techniques, influence scoring, ethical flags', price: '$299/mo' },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4">
            🆕 22 AI Engines — Email Intelligence V20–V23
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            The World&apos;s Most Advanced Email AI Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            22 breakthrough engines that analyze every email case-by-case, take the most appropriate action,
            and <strong className="text-yellow-300">always enforce reply-all</strong> for multi-recipient messages.
          </p>
        </div>

        {engineGroups.map((group) => (
          <div key={group.label} className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm bg-gradient-to-r ${group.color} border ${group.border}`}>
                {group.label}
              </span>
              <span className="text-gray-400 text-sm font-normal">{group.engines.length} engines</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {group.engines.map((engine) => (
                <div key={engine.v} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all hover:border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{engine.icon}</span>
                    <div>
                      <span className="text-blue-400 text-xs font-mono">{engine.v}</span>
                      <h4 className="text-white font-semibold text-sm">{engine.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{engine.desc}</p>
                  <p className="text-yellow-300 text-xs font-semibold">From {engine.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Guarantee bar */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">🔒 Every Engine Guarantees:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3">
              <span className="text-2xl">✅</span>
              <p className="text-white font-semibold text-sm mt-1">Case-by-Case Analysis</p>
            </div>
            <div className="text-center p-3">
              <span className="text-2xl">📨</span>
              <p className="text-white font-semibold text-sm mt-1">Reply-All Enforcement</p>
            </div>
            <div className="text-center p-3">
              <span className="text-2xl">🤖</span>
              <p className="text-white font-semibold text-sm mt-1">AI-Powered Intelligence</p>
            </div>
            <div className="text-center p-3">
              <span className="text-2xl">🏢</span>
              <p className="text-white font-semibold text-sm mt-1">Enterprise Security</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/contact" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-400 transition mr-4">
              Get Free Consultation →
            </a>
            <a href="/services" className="inline-block px-8 py-3 border border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition">
              Browse All 1116+ Services
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </div>
    </section>
  );
};

export default V204V208Showcase;
