'use client';
import { useState } from 'react';

const engines = [
  { id:'v139', name:'V139: Translation Hub', icon:'🌐',
    description:'Real-time bidirectional email translation across 100+ languages with industry glossaries, cultural adaptation, and quality scoring.',
    features:['100+ language support with auto-detection','Industry glossaries (legal/medical/tech/finance)','Cultural nuance adaptation per language pair','Translation quality scoring (BLEU-like)','HTML/formatting preservation during translation','Custom glossary management','Side-by-side original/translated view','Reply-all in recipient preferred language'],
    color:'from-teal-500 to-cyan-600', stats:{languages:'100+',industries:'6',quality:'95%+'}, pricing:'$399/mo',
    useCases:['Global Sales','International Support','Multinational Corps','Localization Teams']},
  { id:'v140', name:'V140: Revenue Attribution', icon:'💰',
    description:'Track revenue from every email with 6 attribution models, deal influence scoring, pipeline velocity analysis, and ROI dashboards.',
    features:['6 attribution models (first/last/linear/time-decay/U/W-shaped)','Deal influence scoring per touchpoint','Pipeline velocity per email interaction','Revenue-per-email metrics','Commission attribution from email deals','Per-campaign/team/individual ROI','Executive revenue dashboard','Reply-all for revenue-critical comms'],
    color:'from-yellow-500 to-amber-600', stats:{models:'6',accuracy:'94%',touchpoints:'∞'}, pricing:'$599/mo',
    useCases:['Revenue Operations','Sales Leadership','Marketing Ops','Finance Teams']},
  { id:'v141', name:'V141: Disaster Recovery', icon:'🛡️',
    description:'Continuous email backup with point-in-time recovery, cross-platform migration, ransomware protection, and DR drill automation.',
    features:['Continuous backup with point-in-time recovery','Cross-platform migration (Gmail/Outlook/Exchange)','Selective restore by date/sender/label/folder','Ransomware protection with immutable snapshots','Backup integrity verification (SHA-256)','RTO/RPO tracking and enforcement','Encrypted backups at rest','Automated DR drill with pass/fail report'],
    color:'from-red-600 to-rose-700', stats:{RTO:'<1h',RPO:'<1h',immutable:'30 days'}, pricing:'$499/mo',
    useCases:['IT Operations','Compliance Teams','CISO Offices','Business Continuity']},
  { id:'v142', name:'V142: Gamification Engine', icon:'🎮',
    description:'Gamify email productivity with XP, levels, achievements, leaderboards, streaks, and team challenges.',
    features:['XP system with leveling (500 XP/level)','10 achievement badges across 6 categories','Inbox zero streak tracking','Response time speed bonuses','Team and department leaderboards','Custom challenges with rewards','Productivity coaching through game mechanics','Reply-all compliance achievements'],
    color:'from-purple-500 to-fuchsia-600', stats:{achievements:'10+',categories:'6',challenges:'∞'}, pricing:'$199/mo',
    useCases:['Sales Teams','Support Centers','Operations','Employee Engagement']},
  { id:'v143', name:'V143: Competitive Intelligence', icon:'🕵️',
    description:'Extract competitive intelligence from emails: competitor mentions, pricing signals, feature requests, win/loss analysis, and market sentiment.',
    features:['7 signal types auto-detected','Competitor mention tracking with sentiment','Pricing signal extraction','Feature gap identification from customer emails','Win/loss reason analysis','Switching intent detection','Market sentiment trend dashboard','Competitor threat level scoring'],
    color:'from-slate-500 to-zinc-600', stats:{signalTypes:'7',tracking:'Real-time',insights:'Auto'}, pricing:'$449/mo',
    useCases:['Product Management','Competitive Intelligence','Sales Strategy','Market Research']},
];

export default function EmailIntelligenceV8Showcase() {
  const [active, setActive] = useState('v139');
  const current = engines.find(e => e.id === active) || engines[0];
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-950 via-teal-950/15 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 text-sm text-teal-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            V139–V143 • Translation · Revenue · Recovery · Gamification · Intel
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">🌍 35 Engines. Every Email. Every Angle.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Translate globally, attribute revenue precisely, recover from any disaster, gamify productivity,
            and extract competitive intelligence — all with <strong className="text-teal-300">guaranteed reply-all enforcement</strong>
            and case-by-case AI analysis.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {engines.map(eng => (
            <button key={eng.id} onClick={() => setActive(eng.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${active===eng.id?`bg-gradient-to-r ${eng.color} text-white shadow-lg scale-105`:'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
              {eng.icon} {eng.name.split(':')[0]}
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${current.color} bg-opacity-20`}>{current.icon}</div>
            <div><h3 className="text-2xl font-bold text-white">{current.name}</h3>
              <p className="text-slate-400 mt-1">{current.description}</p></div>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            {Object.entries(current.stats).map(([k,v])=>(
              <div key={k} className="bg-slate-800/60 rounded-lg px-4 py-2 text-center">
                <div className="text-lg font-bold text-white">{v}</div>
                <div className="text-xs text-slate-400 capitalize">{k.replace(/([A-Z])/g,' $1')}</div>
              </div>))}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-4 py-2 text-center">
              <div className="text-lg font-bold text-green-400">{current.pricing}</div>
              <div className="text-xs text-green-300">Starting at</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {current.features.map((f,i)=>(
              <div key={i} className="flex items-start gap-2 bg-slate-800/40 rounded-lg p-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-slate-300 text-sm">{f}</span>
              </div>))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {current.useCases.map((uc,i)=>(
              <span key={i} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full">{uc}</span>))}
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-between bg-slate-800/40 rounded-xl p-4">
            <div><p className="text-white font-semibold">Ready to go global and competitive?</p>
              <p className="text-slate-400 text-sm">14-day free trial • No credit card required</p></div>
            <div className="flex gap-2">
              <a href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Get Started</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">📧 Contact Sales</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {[{label:'Languages Supported',value:'100+',icon:'🌐'},{label:'Revenue Tracked',value:'$2B+',icon:'💰'},{label:'Emails Backed Up',value:'50M+',icon:'🛡️'},{label:'XP Earned',value:'10M+',icon:'🎮'},{label:'Competitors Tracked',value:'500+',icon:'🕵️'}].map((s,i)=>(
            <div key={i} className="bg-slate-800/40 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-slate-400 text-xs">{s.label}</div>
            </div>))}
        </div>
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>📱 +1 302 464 0950 • 📧 kleber@ziontechgroup.com • 📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}
