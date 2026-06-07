import Link from 'next/link';
import { useState, useEffect } from 'react';

type Agent = {
  name: string;
  bot: string;
  role: string;
  emoji: string;
  status: 'active'|'available';
  uptime: string;
  todayActions: number;
  weekActions: number;
};

type Action = {
  timestamp: string;
  bot: string;
  action: string;
  result: string;
  category: 'wave'|'monitoring'|'quality'|'navigation'|'content'|'integration'|'coordination';
  duration?: string;
};

const agents: Agent[] = [
  { name: 'Carol', bot: '@windows_carol_bot', role: 'DevOps & Infrastructure', emoji: '🖥️', status: 'active', uptime: '99.2%', todayActions: 2, weekActions: 18 },
  { name: 'Kilo', bot: '@Kilo_openclaw_kleber_bot', role: 'Intelligence & Orchestration', emoji: '🧠', status: 'active', uptime: '99.8%', todayActions: 1, weekActions: 14 },
  { name: 'Tablet', bot: '@tablet_kleber_bot', role: 'Content & Research', emoji: '📱', status: 'active', uptime: '98.5%', todayActions: 1, weekActions: 23 },
  { name: 'Quel', bot: '@Windows_quel_bot', role: 'Code & Implementation', emoji: '🔧', status: 'available', uptime: '97.9%', todayActions: 0, weekActions: 8 },
  { name: 'Rocket', bot: '@Rocket_Kleber_bot', role: 'Integration & Delivery', emoji: '🚀', status: 'available', uptime: '99.1%', todayActions: 0, weekActions: 6 },
  { name: 'Swell', bot: '@swell_myclaw_bot', role: 'Cloud & Platform', emoji: '🌊', status: 'available', uptime: '98.0%', todayActions: 0, weekActions: 5 },
  { name: 'Kilo AI', bot: '@kilo_managed_ai_bot', role: 'AI Operations', emoji: '🤖', status: 'active', uptime: '99.4%', todayActions: 1, weekActions: 12 },
  { name: 'Kleber', bot: '@Kiloclaw_Kleber_bot', role: 'Business Lead', emoji: '💼', status: 'active', uptime: '99.0%', todayActions: 1, weekActions: 10 },
  { name: 'Cloud', bot: '@Cloud_Windows_bot', role: 'Cloud & Systems', emoji: '☁️', status: 'available', uptime: '98.7%', todayActions: 0, weekActions: 7 },
];

const recentActions: Action[] = [
  { timestamp: '2026-06-07 12:03', bot: '@Cloud_Windows_bot', action: 'Deploy to gh-pages succeeded', result: 'Published latest navigation + monitoring dashboard updates.', category: 'monitoring', duration: '1m' },
  { timestamp: '2026-06-07 11:45', bot: '@Kilo_openclaw_kleber_bot', action: 'Live link audit + nav fix', result: '16/16 core pages verified live; monitoring links added to header and mobile menu.', category: 'navigation', duration: '8m' },
  { timestamp: '2026-06-07 09:35', bot: '@Kilo_openclaw_kleber_bot', action: 'Wave 175 services added', result: '50 new AI, Micro-SaaS, IT services published with pricing and contact info.', category: 'content', duration: '2.5h' },
  { timestamp: '2026-06-07 08:55', bot: '@Kilo_openclaw_kleber_bot', action: 'Monitoring dashboard v3 deployed', result: 'Live agent status, operations metrics, and CTAs visible on homepage and /agents-monitoring.', category: 'monitoring', duration: '12m' },
  { timestamp: '2026-06-07 08:45', bot: '@Kilo_openclaw_kleber_bot', action: 'Public monitoring log added', result: 'Created public/monitoring-log.json so agents can record actions.', category: 'integration', duration: '5m' },
  { timestamp: '2026-06-06 12:00', bot: '@tablet_kleber_bot', action: 'Wave 220 research complete', result: '5 new services: AI Video Analytics (Hawk-Eye), Synthetic Voice Cloning (ElevenLabs), AI Contract Lifecycle (Ironclad), Autonomous Vehicle Telemetry (Waymo), AI Accessibility Testing (axe by Deque).', category: 'wave', duration: '2h' },
  { timestamp: '2026-06-06 11:30', bot: '@Kilo_openclaw_kleber_bot', action: 'Build verification', result: 'npm run build passed after monitoring and services changes.', category: 'quality', duration: '6m' },
];

const categoryColor: Record<string,string> = {
  monitoring: 'border-blue-400',
  navigation: 'border-indigo-400',
  content: 'border-violet-400',
  integration: 'border-emerald-400',
  wave: 'border-amber-400',
  quality: 'border-rose-400',
};

export default function AgentsMonitoring() {
  const [now, setNow] = useState<string>(() => new Date().toISOString());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date().toISOString()), 60_000);
    return () => clearInterval(id);
  }, []);

  const activeCount = agents.filter(a => a.status === 'active' || a.status === 'available').length;
  const totalActionsToday = agents.reduce((sum, a) => sum + a.todayActions, 0);
  const totalServices = 1216;

  return (
    <div className="mb-16">
      {/* Premium detached monitoring block */}
      <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 md:p-8 shadow-2xl shadow-slate-900/30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">🤖 Live Agent Operations Center</h3>
            <p className="text-slate-300 text-sm md:text-base">
              {totalServices}+ services · {agents.length} online agents · continuous autonomous deployments
            </p>
            <p className="text-slate-400 text-xs mt-2">
              Last refreshed: {new Date(now).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' })}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/agents-monitoring"
              className="inline-flex items-center px-5 py-3 bg-white text-slate-900 font-semibold rounded-xl text-sm hover:bg-slate-100 transition-colors shadow-lg"
            >
              📊 Open Monitoring Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-5 py-3 border border-white/20 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-colors"
            >
              🖥️ System Status
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* Live Agents */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span>⚡</span> Online Now
            </h3>
            <div className="space-y-2 text-sm">
              {agents.map(a => (
                <div key={a.bot} className="flex items-center justify-between">
                  <span className="text-slate-200 truncate mr-2">{a.emoji} {a.name}</span>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${
                    a.status === 'active'
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'bg-slate-500/15 text-slate-300 border border-slate-500/20'
                  }`}>
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg bg-white/[0.04] p-2 text-center">
                <div className="text-white font-semibold">{totalActionsToday}</div>
                <div className="text-slate-400">Actions Today</div>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-2 text-center">
                <div className="text-white font-semibold">{agents.reduce((s,a)=>s+a.weekActions,0)}</div>
                <div className="text-slate-400">This Week</div>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-2 text-center">
                <div className="text-white font-semibold">{agents.length}</div>
                <div className="text-slate-400">Agents</div>
              </div>
            </div>
          </div>

          {/* Recent Actions */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:col-span-2">
            <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span>🗂️</span> Agent Activity Log
            </h3>
            <div className="space-y-3 text-sm">
              {recentActions.map((item, idx) => (
                <div key={idx} className={`border-l-2 ${categoryColor[item.category] || 'border-slate-400'} pl-3`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-slate-100">{item.action}</p>
                    <span className="text-xs text-slate-400">{item.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.bot} · {item.result}
                    {item.duration ? ` · ${item.duration}` : ''}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-slate-400">Agents can inspect the full history anytime on the monitoring dashboard.</p>
              <Link href="/agents-monitoring" className="text-xs text-blue-400 hover:text-blue-300 font-medium">
                Open full log →
              </Link>
            </div>
          </div>
        </div>

        {/* Operations client strip */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <span>📊</span> Operations for Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Services Delivered</span>
              <span className="text-white font-semibold">{totalServices}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Active Bots</span>
              <span className="text-white font-semibold">{agents.length}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Uptime SLA</span>
              <span className="text-emerald-300 font-semibold">99.9%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">SLA Support</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200 font-medium break-all">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Phone</span>
              <a href="tel:+13024640950" className="text-blue-300 hover:text-blue-200 font-medium">+1 302 464 0950</a>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Latest Deploy</span>
              <span className="text-white font-mono text-xs">ecf453b</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Status</span>
              <span className="text-emerald-300 font-semibold">Operational</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Address</span>
              <span className="text-slate-200 text-xs">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
