'use client';
import { useState } from 'react';

const engines = [
  { id:'v124', name:'V124: Email Personalization Engine', icon:'🎯',
    description:'Dynamic content insertion based on recipient profile, behavioral trigger personalization, A/B testing for personalized elements, and real-time personalization scoring.',
    features:['Dynamic content insertion per recipient','Behavioral trigger personalization','A/B testing with statistical significance','Real-time personalization scoring','Recipient profile enrichment','Segment-based content targeting','Personalization performance tracking','Reply-all enforcement for team emails'],
    color:'from-pink-500 to-rose-600', stats:{lift:'+52%',segments:'∞',accuracy:'96%'}, pricing:'$349/mo',
    useCases:['Email Marketing','Sales Outreach','Customer Engagement','E-commerce']},
  { id:'v125', name:'V125: Email Analytics Dashboard', icon:'📊',
    description:'Real-time engagement metrics, team performance benchmarking, ROI tracking per campaign, and predictive analytics for send optimization.',
    features:['Real-time open/click/reply rate tracking','Team performance benchmarking','ROI tracking per campaign','Predictive send-time optimization','A/B test analysis with p-values','Engagement heatmap by hour','Anomaly detection and alerts','Reply-all compliance reporting'],
    color:'from-cyan-500 to-blue-600', stats:{metrics:'50+',teams:'∞',forecast:'30d'}, pricing:'$299/mo',
    useCases:['Marketing Ops','Sales Leaders','Revenue Teams','Executives']},
  { id:'v126', name:'V126: Workflow Automation Builder', icon:'⚙️',
    description:'Visual drag-and-drop workflow designer with conditional branching, multi-step approval chains, parallel execution, and integration with 100+ tools.',
    features:['Visual workflow designer (ASCII + Mermaid)','Conditional branching (AND/OR logic)','Multi-step approval chains (4 modes)','Parallel execution via async','Error handling with retry policies','Case-by-case email routing','Reply-all validation and enforcement','100+ business tool integrations'],
    color:'from-teal-500 to-emerald-600', stats:{nodes:'∞',integrations:'100+',uptime:'99.9%'}, pricing:'$449/mo',
    useCases:['Operations','IT Teams','Finance','HR Departments']},
  { id:'v127', name:'V127: Email Localization Engine', icon:'🌍',
    description:'Auto-detect recipient language, cultural context adaptation (72 cultures), timezone-aware scheduling, and regional compliance checking across 19 regulatory frameworks.',
    features:['Auto-detect language from domain TLD','72 cultural profiles with formality levels','Timezone-aware scheduling','19 compliance regimes (GDPR, CCPA, LGPD...)','Locale-specific number/currency formatting','14 writing scripts supported','Cultural greeting/closing adaptation','Reply-all enforcement (52/72 cultures)'],
    color:'from-indigo-500 to-violet-600', stats:{cultures:'72',languages:'40+',regulations:'19'}, pricing:'$399/mo',
    useCases:['Global Marketing','International Sales','Multinational Corps','Localization Teams']},
  { id:'v128', name:'V128: Email Encryption Gateway', icon:'🔐',
    description:'End-to-end encryption for sensitive emails, auto-classification of confidential content, secure file sharing with expiration, and compliance with HIPAA, GDPR, SOC 2, PCI-DSS.',
    features:['End-to-end encryption (AES-256-GCM)','Auto-classify 6 sensitivity categories','Secure file sharing with expiration','HIPAA, GDPR, SOC 2, PCI-DSS compliance','Key management with rotation','Immutable audit trail','Access control lists per attachment','Reply-all enforcement for encrypted threads'],
    color:'from-red-600 to-orange-600', stats:{encryption:'AES-256',compliance:'4 frameworks',audit:'∞'}, pricing:'$599/mo',
    useCases:['Healthcare','Finance','Legal','Government']},
];

export default function EmailIntelligenceV5Showcase() {
  const [active, setActive] = useState('v124');
  const current = engines.find(e => e.id === active) || engines[0];
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-950 via-cyan-950/15 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-sm text-cyan-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            V124–V128 • Enterprise Email Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">🏢 Enterprise-Grade Email Intelligence</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Five powerful engines for enterprise email: personalization, analytics, workflow automation,
            global localization, and military-grade encryption. Every email analyzed case-by-case with
            <strong className="text-cyan-300"> guaranteed reply-all enforcement</strong>.
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
            <div><p className="text-white font-semibold">Ready to transform your email operations?</p>
              <p className="text-slate-400 text-sm">14-day free trial • No credit card required</p></div>
            <div className="flex gap-2">
              <a href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Get Started</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">📧 Contact Sales</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {[{label:'Personalizations',value:'500K+',icon:'🎯'},{label:'Analytics Events',value:'10M+',icon:'📊'},{label:'Workflows Built',value:'25K+',icon:'⚙️'},{label:'Languages',value:'40+',icon:'🌍'},{label:'Emails Encrypted',value:'1M+',icon:'🔐'}].map((s,i)=>(
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
