'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Lead {
  id: string;
  company: string;
  contact: string;
  email: string;
  source: string;
  industry: string;
  status: 'new' | 'contacted' | 'replied' | 'qualified' | 'converted' | 'lost';
  score: number;
  notes: string;
  dateFound: string;
  lastContact: string;
  services: string[];
}

interface OutreachTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  category: string;
}

const INITIAL_LEADS: Lead[] = [
  { id: 'l001', company: 'TechStart Inc', contact: 'Sarah Chen', email: 'sarah@techstart.io', source: 'LinkedIn', industry: 'SaaS', status: 'new', score: 85, notes: 'Looking for AI chatbot solution', dateFound: '2026-06-10', lastContact: '', services: ['AI Chatbot Builder', 'AI Customer Support Copilot'] },
  { id: 'l002', company: 'MedFlow Health', contact: 'Dr. James Wilson', email: 'jwilson@medflow.com', source: 'Web Search', industry: 'Healthcare', status: 'contacted', score: 92, notes: 'Needs patient scheduling AI + HIPAA compliance', dateFound: '2026-06-09', lastContact: '2026-06-11', services: ['AI Patient Scheduling', 'AI Clinical Trial Matching'] },
  { id: 'l003', company: 'RetailMax Corp', contact: 'Maria Garcia', email: 'mgarcia@retailmax.com', source: 'Cold Outreach', industry: 'Retail', status: 'replied', score: 78, notes: 'Interested in personalization engine', dateFound: '2026-06-08', lastContact: '2026-06-10', services: ['AI Retail Personalization', 'Subscription Analytics'] },
  { id: 'l004', company: 'FinanceHub', contact: 'Robert Kim', email: 'rkim@financehub.io', source: 'Referral', industry: 'FinTech', status: 'qualified', score: 95, notes: 'Ready to sign for fraud detection + financial close automation', dateFound: '2026-06-07', lastContact: '2026-06-11', services: ['AI Fraud Detection', 'AI Financial Close Automation'] },
  { id: 'l005', company: 'CloudScale Systems', contact: 'Alex Turner', email: 'aturner@cloudscale.io', source: 'LinkedIn', industry: 'Cloud', status: 'new', score: 88, notes: 'Needs cloud cost optimization + DRaaS', dateFound: '2026-06-11', lastContact: '', services: ['Cloud Cost Optimization', 'DRaaS'] },
  { id: 'l006', company: 'EduLearn Platform', contact: 'Lisa Park', email: 'lpark@edulearn.com', source: 'Web Search', industry: 'EdTech', status: 'contacted', score: 82, notes: 'Looking for personalized learning platform', dateFound: '2026-06-09', lastContact: '2026-06-10', services: ['AI Personalized Learning', 'AI Form Builder'] },
  { id: 'l007', company: 'SecureBank', contact: 'Michael Brown', email: 'mbrown@securebank.com', source: 'Conference', industry: 'Banking', status: 'new', score: 90, notes: 'Needs MDR 24/7 + zero trust network', dateFound: '2026-06-11', lastContact: '', services: ['MDR 24/7', 'Zero Trust Network Access'] },
  { id: 'l008', company: 'LogiTrans', contact: 'David Lee', email: 'dlee@logitrans.com', source: 'Cold Outreach', industry: 'Logistics', status: 'contacted', score: 75, notes: 'Interested in supply chain risk intelligence', dateFound: '2026-06-08', lastContact: '2026-06-09', services: ['AI Supply Chain Risk', 'Predictive Maintenance IoT'] },
];

const OUTREACH_TEMPLATES: OutreachTemplate[] = [
  {
    id: 't001',
    name: 'AI Services Introduction',
    subject: 'Custom AI Solutions for {{company}} — Free Proposal Inside',
    body: `Hi {{contact}},

I noticed {{company}} is in the {{industry}} space. At Zion Tech Group, we build custom AI solutions that help companies like yours:

• Reduce operational costs by 40-60%
• Automate repetitive tasks with AI
• Make data-driven decisions in real-time

We've helped similar companies implement:
• {{services}}

Would you be open to a 15-minute call this week to explore how AI could work for {{company}}?

Best regards,
Kleber Garcia
CEO, Zion Tech Group
📱 +1 302 464 0950
📧 kleber@ziontechgroup.com
🌐 ziontechgroup.com`,
    category: 'Introduction',
  },
  {
    id: 't002',
    name: 'Follow-Up After No Response',
    subject: 'Following up: AI solutions for {{company}}',
    body: `Hi {{contact}},

I wanted to follow up on my previous email about AI solutions for {{company}}.

I understand you're busy, so here's a quick summary:

• {{services}}

We offer a free, no-obligation custom proposal. No strings attached.

Would Thursday or Friday work for a brief 15-minute call?

Best,
Kleber Garcia
Zion Tech Group
📱 +1 302 464 0950`,
    category: 'Follow-Up',
  },
  {
    id: 't003',
    name: 'Re-Engagement (30 days)',
    subject: '{{company}} + Zion Tech — New AI capabilities available',
    body: `Hi {{contact}},

It's been a while since we last connected. Since then, we've added several new capabilities for {{company}}:

• AI Fraud Detection — reduce fraud losses by 85%
• AI Financial Close Automation — close books in 2 days instead of 10
• Cloud Cost Optimization — reduce cloud spend by 30-50%

Would you like to see a quick demo?

Best regards,
Kleber Garcia
Zion Tech Group`,
    category: 'Re-Engagement',
  },
  {
    id: 't004',
    name: 'Qualified Lead — Proposal Request',
    subject: 'Custom Proposal for {{company}} — Ready to Review',
    body: `Hi {{contact}},

Thank you for your interest in our solutions for {{company}}.

Based on our conversation, I've prepared a custom proposal covering:

• {{services}}

Key deliverables:
✅ Custom implementation plan
✅ ROI projection for your specific use case
✅ Timeline and milestones
✅ Pricing options (Basic / Pro / Enterprise)

Would you like to schedule a call to walk through it?

Best,
Kleber Garcia
CEO, Zion Tech Group
📱 +1 302 464 0950
📧 kleber@ziontechgroup.com`,
    category: 'Proposal',
  },
];

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  contacted: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  replied: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  qualified: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  converted: 'bg-green-500/20 text-green-300 border-green-500/30',
  lost: 'bg-red-500/20 text-red-300 border-red-500/30',
};

const STATUS_LABELS: Record<string, string> = {
  new: '🆕 New',
  contacted: '📧 Contacted',
  replied: '💬 Replied',
  qualified: '✅ Qualified',
  converted: '🎉 Converted',
  lost: '❌ Lost',
};

export default function LeadsControl() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [activeTab, setActiveTab] = useState<'leads' | 'templates' | 'stats'>('leads');
  const [currentTime, setCurrentTime] = useState('');
  const [composeTemplate, setComposeTemplate] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo', hour12: true, weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }));
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredLeads = leads.filter(l => {
    if (filter !== 'all' && l.status !== filter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return l.company.toLowerCase().includes(q) || l.contact.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) || l.industry.toLowerCase().includes(q);
    }
    return true;
  });

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    replied: leads.filter(l => l.status === 'replied').length,
    qualified: leads.filter(l => l.status === 'qualified').length,
    converted: leads.filter(l => l.status === 'converted').length,
    avgScore: Math.round(leads.reduce((s, l) => s + l.score, 0) / leads.length),
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status, lastContact: new Date().toISOString().split('T')[0] } : l));
  };

  const openCompose = (lead: Lead, templateId?: string) => {
    setSelectedLead(lead);
    if (templateId) {
      const t = OUTREACH_TEMPLATES.find(t => t.id === templateId);
      if (t) {
        setComposeTemplate(templateId);
        setComposeSubject(t.subject.replace(/{{company}}/g, lead.company).replace(/{{contact}}/g, lead.contact).replace(/{{industry}}/g, lead.industry).replace(/{{services}}/g, lead.services.join(', ')));
        setComposeBody(t.body.replace(/{{company}}/g, lead.company).replace(/{{contact}}/g, lead.contact).replace(/{{industry}}/g, lead.industry).replace(/{{services}}/g, lead.services.join('\n• ')));
      }
    } else {
      setComposeTemplate('');
      setComposeSubject('');
      setComposeBody('');
    }
  };

  const handleTemplateChange = (lead: Lead, templateId: string) => {
    const t = OUTREACH_TEMPLATES.find(t => t.id === templateId);
    if (t) {
      setComposeTemplate(templateId);
      setComposeSubject(t.subject.replace(/{{company}}/g, lead.company).replace(/{{contact}}/g, lead.contact).replace(/{{industry}}/g, lead.industry).replace(/{{services}}/g, lead.services.join(', ')));
      setComposeBody(t.body.replace(/{{company}}/g, lead.company).replace(/{{contact}}/g, lead.contact).replace(/{{industry}}/g, lead.industry).replace(/{{services}}/g, lead.services.join('\n• ')));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-lg font-bold shadow-lg shadow-amber-500/20">🎯</div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Leads Control Center</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Zion Tech Group · {currentTime || 'Loading...'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/agents-monitoring" className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5">📊 Dashboard</Link>
            <Link href="/" className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5">← Main Site</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <section className="grid grid-cols-3 md:grid-cols-7 gap-3 mb-6">
          {[
            { label: 'Total', value: stats.total, color: 'text-purple-400', border: 'border-purple-500/20' },
            { label: 'New', value: stats.new, color: 'text-blue-400', border: 'border-blue-500/20' },
            { label: 'Contacted', value: stats.contacted, color: 'text-amber-400', border: 'border-amber-500/20' },
            { label: 'Replied', value: stats.replied, color: 'text-purple-400', border: 'border-purple-500/20' },
            { label: 'Qualified', value: stats.qualified, color: 'text-emerald-400', border: 'border-emerald-500/20' },
            { label: 'Converted', value: stats.converted, color: 'text-green-400', border: 'border-green-500/20' },
            { label: 'Avg Score', value: stats.avgScore, color: 'text-cyan-400', border: 'border-cyan-500/20' },
          ].map((s, i) => (
            <div key={i} className={`bg-slate-900/80 border ${s.border} rounded-xl p-3 text-center`}>
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-[9px] text-slate-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </section>

        <div className="flex gap-1 mb-4 bg-slate-900/40 rounded-lg p-1 border border-slate-800/40">
          {([
            { id: 'leads' as const, label: `🎯 Leads (${filteredLeads.length})` },
            { id: 'templates' as const, label: '📧 Templates' },
            { id: 'stats' as const, label: '📊 Pipeline' },
          ]).map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 text-xs py-2 rounded-md transition font-medium ${activeTab === tab.id ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'leads' && (
          <div>
            <div className="flex gap-2 mb-4 flex-wrap">
              <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search..." className="bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2 w-40 placeholder-slate-500" />
              {['all', 'new', 'contacted', 'replied', 'qualified', 'converted', 'lost'].map(s => (
                <button key={s} onClick={() => setFilter(s)} className={`text-[10px] px-3 py-1.5 rounded-lg border transition ${filter === s ? 'bg-amber-600 text-white border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'}`}>
                  {s === 'all' ? 'All' : STATUS_LABELS[s] || s}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {filteredLeads.map(lead => (
                <div key={lead.id} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-4 hover:border-amber-500/30 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-sm font-semibold text-slate-200">{lead.company}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono border ${STATUS_COLORS[lead.status]}`}>{STATUS_LABELS[lead.status]}</span>
                        <span className="text-[9px] text-cyan-400">Score: {lead.score}</span>
                      </div>
                      <div className="text-xs text-slate-400 mb-1">{lead.contact} · {lead.email} · {lead.industry}</div>
                      <div className="text-xs text-slate-500 mb-2">{lead.notes}</div>
                      <div className="flex flex-wrap gap-1">
                        {lead.services.map(s => (<span key={s} className="text-[9px] bg-purple-500/10 text-purple-300 px-1.5 py-0.5 rounded">{s}</span>))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 shrink-0">
                      {lead.status === 'new' && <button onClick={() => updateLeadStatus(lead.id, 'contacted')} className="text-[10px] bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-500">📧 Contacted</button>}
                      {lead.status === 'contacted' && <button onClick={() => updateLeadStatus(lead.id, 'replied')} className="text-[10px] bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-500">💬 Replied</button>}
                      {lead.status === 'replied' && <button onClick={() => updateLeadStatus(lead.id, 'qualified')} className="text-[10px] bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-500">✅ Qualify</button>}
                      {lead.status === 'qualified' && <button onClick={() => updateLeadStatus(lead.id, 'converted')} className="text-[10px] bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-500">🎉 Convert</button>}
                      <button onClick={() => openCompose(lead, 't001')} className="text-[10px] bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg hover:bg-slate-600">📧 Compose</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-4">
            {OUTREACH_TEMPLATES.map(t => (
              <div key={t.id} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">{t.category}</span>
                  <h3 className="text-sm font-semibold text-slate-200">{t.name}</h3>
                </div>
                <div className="text-xs text-purple-300 font-mono mb-2 bg-slate-800/50 rounded px-3 py-1.5">Subject: {t.subject}</div>
                <pre className="text-xs text-slate-400 whitespace-pre-wrap font-sans leading-relaxed bg-slate-800/30 rounded-lg p-4">{t.body}</pre>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-slate-200 mb-4">Pipeline Funnel</h3>
              <div className="space-y-3">
                {[
                  { label: 'New', count: stats.new, total: stats.total, color: 'bg-blue-500' },
                  { label: 'Contacted', count: stats.contacted, total: stats.total, color: 'bg-amber-500' },
                  { label: 'Replied', count: stats.replied, total: stats.total, color: 'bg-purple-500' },
                  { label: 'Qualified', count: stats.qualified, total: stats.total, color: 'bg-emerald-500' },
                  { label: 'Converted', count: stats.converted, total: stats.total, color: 'bg-green-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-20">{item.label}</span>
                    <div className="flex-1 h-6 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full flex items-center justify-end pr-2`} style={{ width: `${Math.max(5, (item.count / item.total) * 100)}%` }}>
                        <span className="text-[10px] text-white font-bold">{item.count}</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 w-12 text-right">{Math.round((item.count / item.total) * 100)}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-amber-300 mb-3">📋 Lead Generation Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: '🔥 High-Priority (90+ score)', desc: 'Contact within 24h. Use Proposal template.' },
                  { title: '📧 Cold Outreach', desc: 'Research company first. Personalize with industry pain points.' },
                  { title: '💬 Follow-Up Schedule', desc: 'Day 1: Initial. Day 3: Follow-up. Day 7: Re-engage. Day 14: Final.' },
                  { title: '🎯 Conversion Tips', desc: 'Specific CTA. Free proposal. Reference similar companies. <150 words.' },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-900/60 rounded-lg p-3">
                    <div className="text-xs font-semibold text-slate-200">{s.title}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setSelectedLead(null)}>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">📧 Compose to {selectedLead.contact}</h3>
                <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-white text-xl">✕</button>
              </div>
              <div className="space-y-3">
                <div className="text-xs text-slate-400">To: {selectedLead.contact} &lt;{selectedLead.email}&gt; · {selectedLead.company}</div>
                <select value={composeTemplate} onChange={e => handleTemplateChange(selectedLead, e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2">
                  <option value="">Select template...</option>
                  {OUTREACH_TEMPLATES.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
                <input value={composeSubject} onChange={e => setComposeSubject(e.target.value)} placeholder="Subject..." className="w-full bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2" />
                <textarea value={composeBody} onChange={e => setComposeBody(e.target.value)} rows={12} className="w-full bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 px-3 py-2 resize-none font-mono" />
                <div className="flex gap-2">
                  <button onClick={() => { window.open(`mailto:${selectedLead.email}?subject=${encodeURIComponent(composeSubject)}&body=${encodeURIComponent(composeBody)}`); }} className="px-4 py-2 bg-amber-600 text-white text-xs rounded-lg hover:bg-amber-500">📧 Open in Email</button>
                  <button onClick={() => { updateLeadStatus(selectedLead.id, 'contacted'); setSelectedLead(null); }} className="px-4 py-2 bg-emerald-600 text-white text-xs rounded-lg hover:bg-emerald-500">✅ Mark Contacted</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800/60 mt-8 py-4 text-center text-[10px] text-slate-600">
        <p>Zion Tech Group — Leads Control · {currentTime || '—'} · {stats.total} leads</p>
      </footer>
    </div>
  );
}
