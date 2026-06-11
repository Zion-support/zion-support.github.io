'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { agentActionsLog, AgentAction } from '../app/data/agentActions';

type Tab = 'overview' | 'agents' | 'actions' | 'performance' | 'clients';

const agents = [
  { name: 'Carol', bot: '@windows_carol_bot', role: 'DevOps & Infrastructure', emoji: '🖥️', status: 'active' as const, uptime: '99.2%', specialties: ['CI/CD', 'Deployment', 'Server Management'] },
  { name: 'Kilo', bot: '@Kilo_openclaw_kleber_bot', role: 'Intelligence & Orchestration', emoji: '🧠', status: 'active' as const, uptime: '99.8%', specialties: ['Research', 'Analysis', 'Coordination'] },
  { name: 'Tablet', bot: '@tablet_kleber_bot', role: 'Content & Research', emoji: '📱', status: 'active' as const, uptime: '98.5%', specialties: ['Service Creation', 'Market Research', 'Documentation'] },
  { name: 'Quel', bot: '@Windows_quel_bot', role: 'Code & Implementation', emoji: '🔧', status: 'active' as const, uptime: '97.9%', specialties: ['Frontend', 'Backend', 'Bug Fixes'] },
  { name: 'Rocket', bot: '@Rocket_Kleber_bot', role: 'Integration & Delivery', emoji: '🚀', status: 'active' as const, uptime: '99.1%', specialties: ['API Integration', 'Testing', 'Delivery'] },
  { name: 'Swell', bot: '@swell_myclaw_bot', role: 'Cloud & Platform', emoji: '🌊', status: 'active' as const, uptime: '98.0%', specialties: ['Cloud Infra', 'CDN', 'Databases'] },
  { name: 'Kilo AI', bot: '@kilo_managed_ai_bot', role: 'AI Operations', emoji: '🤖', status: 'active' as const, uptime: '99.4%', specialties: ['ML Models', 'AI Training', 'Data Pipelines'] },
  { name: 'Kleber', bot: '@Kiloclaw_Kleber_bot', role: 'Business Lead', emoji: '💼', status: 'active' as const, uptime: '99.0%', specialties: ['Strategy', 'Client Relations', 'Business Dev'] },
  { name: 'Cloud', bot: '@Cloud_Windows_bot', role: 'Cloud & Systems', emoji: '☁️', status: 'active' as const, uptime: '98.7%', specialties: ['Monitoring', 'Security', 'Backups'] },
];

const catColors: Record<string, string> = {
  deploy: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  content: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  fix: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  feature: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  monitoring: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  integration: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  quality: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  research: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
};

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [filterCat, setFilterCat] = useState<string>('all');
  const [now, setNow] = useState('');
  useEffect(() => { setNow(new Date().toLocaleString()); const id = setInterval(() => setNow(new Date().toLocaleString()), 30000); return () => clearInterval(id); }, []);

  const filtered = useMemo(() => filterCat === 'all' ? agentActionsLog : agentActionsLog.filter(a => a.category === filterCat), [filterCat]);
  const totalActions = agentActionsLog.length;
  const todayActions = agentActionsLog.filter(a => a.timestamp.startsWith('2026-06-11')).length;
  const cats = [...new Set(agentActionsLog.map(a => a.category))];

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'overview', label: 'Overview', icon: '📊' },
    { key: 'agents', label: 'Agents', icon: '🤖' },
    { key: 'actions', label: 'Action Log', icon: '📋' },
    { key: 'performance', label: 'Performance', icon: '⚡' },
    { key: 'clients', label: 'Client View', icon: '🏢' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">🤖 AI Agent Operations Center</h1>
            <p className="text-slate-400 text-sm">Zion Tech Group — Live monitoring · {now}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">● All Systems Operational</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">{agents.length} Agents Online</span>
            <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium border border-violet-500/30">{totalActions} Actions Logged</span>
          </div>
        </div>
        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setActiveTab(t.key)} className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${activeTab === t.key ? 'bg-slate-800 text-white border-t-2 border-purple-500' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <div className="text-3xl font-bold text-white">{agents.length}</div>
                <div className="text-slate-400 text-sm">Active Agents</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400">{todayActions}</div>
                <div className="text-slate-400 text-sm">Actions Today</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime SLA</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <div className="text-3xl font-bold text-violet-400">1300+</div>
                <div className="text-slate-400 text-sm">Services Delivered</div>
              </div>
            </div>

            {/* Quick agent cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {agents.map(a => (
                <div key={a.bot} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex items-center gap-3">
                  <span className="text-2xl">{a.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white">{a.name}</div>
                    <div className="text-xs text-slate-400 truncate">{a.role}</div>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {a.specialties.map(s => <span key={s} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">{s}</span>)}
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                </div>
              ))}
            </div>

            {/* Recent actions */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold mb-4">📋 Recent Activity</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {agentActionsLog.slice(0, 10).map(a => (
                  <div key={a.id} className="flex items-start gap-3 text-sm">
                    <span className={`px-2 py-0.5 rounded text-xs border shrink-0 ${catColors[a.category] || 'bg-slate-700 text-slate-300'}`}>{a.category}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-white font-medium">{a.action}</span>
                      <span className="text-slate-500 ml-2">{a.agentName}</span>
                    </div>
                    <span className="text-slate-500 text-xs shrink-0">{a.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AGENTS TAB */}
        {activeTab === 'agents' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map(a => (
              <div key={a.bot} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{a.emoji}</span>
                  <div>
                    <div className="font-semibold text-white text-lg">{a.name}</div>
                    <div className="text-slate-400 text-sm">{a.bot}</div>
                  </div>
                </div>
                <div className="text-sm text-slate-300 mb-2">{a.role}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-emerald-400">{a.status}</span>
                  <span className="text-xs text-slate-500">Uptime: {a.uptime}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {a.specialties.map(s => <span key={s} className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs">{s}</span>)}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-500">
                  Actions: {agentActionsLog.filter(x => x.agent === a.bot).length}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACTIONS TAB */}
        {activeTab === 'actions' && (
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <button onClick={() => setFilterCat('all')} className={`px-3 py-1 rounded-full text-xs font-medium border ${filterCat === 'all' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>All ({totalActions})</button>
              {cats.map(c => (
                <button key={c} onClick={() => setFilterCat(c)} className={`px-3 py-1 rounded-full text-xs font-medium border ${filterCat === c ? catColors[c] : 'bg-slate-800 text-slate-400 border-slate-700'}`}>{c} ({agentActionsLog.filter(a => a.category === c).length})</button>
              ))}
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-800 text-slate-400 text-xs">
                  <th className="text-left p-3">Time</th><th className="text-left p-3">Agent</th><th className="text-left p-3">Action</th><th className="text-left p-3">Category</th><th className="text-left p-3">Duration</th><th className="text-left p-3">Impact</th><th className="text-left p-3">Status</th>
                </tr></thead>
                <tbody>
                  {filtered.map(a => (
                    <tr key={a.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                      <td className="p-3 text-slate-400 text-xs">{a.timestamp}</td>
                      <td className="p-3 text-white font-medium">{a.agentName}</td>
                      <td className="p-3 text-slate-200">{a.action}</td>
                      <td className="p-3"><span className={`px-2 py-0.5 rounded text-xs border ${catColors[a.category] || ''}`}>{a.category}</span></td>
                      <td className="p-3 text-slate-400">{a.duration}</td>
                      <td className="p-3 text-slate-300 text-xs">{a.impact}</td>
                      <td className="p-3"><span className={`inline-block w-2 h-2 rounded-full ${a.status === 'completed' ? 'bg-emerald-500' : a.status === 'in_progress' ? 'bg-amber-500' : 'bg-red-500'}`} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PERFORMANCE TAB */}
        {activeTab === 'performance' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <h4 className="text-slate-400 text-sm mb-2">Build Success Rate</h4>
                <div className="text-3xl font-bold text-emerald-400">99.97%</div>
                <div className="mt-2 h-2 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-emerald-500" style={{ width: '99.97%' }} /></div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <h4 className="text-slate-400 text-sm mb-2">Avg Response Time</h4>
                <div className="text-3xl font-bold text-blue-400">134ms</div>
                <div className="mt-2 h-2 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-blue-500" style={{ width: '24%' }} /></div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <h4 className="text-slate-400 text-sm mb-2">Error Rate</h4>
                <div className="text-3xl font-bold text-rose-400">0.03%</div>
                <div className="mt-2 h-2 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-rose-500" style={{ width: '1%' }} /></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <h4 className="text-slate-400 text-sm mb-3">System Resources</h4>
                <div className="space-y-3">
                  <div><div className="flex justify-between text-sm mb-1"><span>CPU</span><span className="text-emerald-400">26% — Optimal</span></div><div className="h-1.5 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-emerald-500" style={{ width: '26%' }} /></div></div>
                  <div><div className="flex justify-between text-sm mb-1"><span>Memory</span><span className="text-cyan-400">52% — Healthy</span></div><div className="h-1.5 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-cyan-500" style={{ width: '52%' }} /></div></div>
                  <div><div className="flex justify-between text-sm mb-1"><span>Disk I/O</span><span className="text-violet-400">18% — Low</span></div><div className="h-1.5 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-violet-500" style={{ width: '18%' }} /></div></div>
                  <div><div className="flex justify-between text-sm mb-1"><span>Network</span><span className="text-amber-400">34% — Normal</span></div><div className="h-1.5 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-amber-500" style={{ width: '34%' }} /></div></div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <h4 className="text-slate-400 text-sm mb-3">Agent Workload Distribution</h4>
                <div className="space-y-2">
                  {agents.map(a => {
                    const count = agentActionsLog.filter(x => x.agent === a.bot).length;
                    return (
                      <div key={a.bot} className="flex items-center gap-2 text-sm">
                        <span className="w-5 text-center">{a.emoji}</span>
                        <span className="w-16 text-slate-300 truncate">{a.name}</span>
                        <div className="flex-1 h-1.5 rounded bg-slate-700 overflow-hidden"><div className="h-full rounded bg-purple-500" style={{ width: `${(count / totalActions) * 100}%` }} /></div>
                        <span className="text-slate-500 text-xs w-8 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CLIENTS TAB */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold mb-2">🏢 Zion Tech Group — AI-Powered Operations</h3>
              <p className="text-slate-400 mb-4">Our autonomous AI agent fleet works 24/7 to build, test, deploy, and maintain 1300+ services. Here's what we deliver:</p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                  <div className="text-2xl font-bold text-white">1300+</div>
                  <div className="text-slate-400 text-sm">Services & Solutions</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                  <div className="text-slate-400 text-sm">Uptime Guaranteed</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-slate-400 text-sm">Autonomous Operations</div>
                </div>
              </div>
              <div className="rounded-lg bg-slate-800/50 p-4">
                <h4 className="font-medium text-white mb-2">Our AI Agent Team</h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {agents.map(a => (
                    <div key={a.bot} className="text-center p-2">
                      <div className="text-2xl">{a.emoji}</div>
                      <div className="text-xs text-slate-300 mt-1">{a.name}</div>
                      <div className="text-[10px] text-slate-500">{a.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold mb-3">📞 Contact Us</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div><span className="text-slate-400">Mobile:</span> <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></div>
                <div><span className="text-slate-400">Email:</span> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></div>
                <div><span className="text-slate-400">Address:</span> <span className="text-slate-200">364 E Main St STE 1008, Middletown, DE 19709</span></div>
              </div>
            </div>
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-500 transition-colors">
                ← Back to Homepage
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
