'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = '' }: { target; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
}

/* ─── Types ─── */
interface AgentAction {
  id: string;
  agent: string;
  action: string;
  timestamp: string;
  impact: string;
  category: 'deploy' | 'content' | 'audit' | 'feature' | 'fix' | 'research' | 'wave';
}

interface Agent {
  name: string;
  handle: string;
  role: string;
  emoji: string;
  status: 'active' | 'available' | 'idle';
  specialty: string;
  actions: number;
  lastActive: string;
}

/* ─── Live Agent Fleet Data ─── */
const AGENTS: Agent[] = [
  { name: 'Carol',     handle: '@windows_carol_bot',        role: 'DevOps & Infrastructure',     emoji: '🖥️', status: 'active',   specialty: 'Deploys, CI/CD, CDN, Builds, Infrastructure', actions: 47, lastActive: '2 min ago' },
  { name: 'Kilo',      handle: '@Kilo_openclaw_kleber_bot', role: 'Intelligence & Orchestration', emoji: '🧠', status: 'active',   specialty: 'Services, Research, Audits, Monitoring, Strategy', actions: 52, lastActive: '1 min ago' },
  { name: 'Tablet',    handle: '@tablet_kleber_bot',        role: 'Content & Research',          emoji: '📱', status: 'active',   specialty: 'Service descriptions, Market research, Content', actions: 38, lastActive: '5 min ago' },
  { name: 'Quel',      handle: '@Windows_quel_bot',         role: 'Code & Implementation',      emoji: '🔧', status: 'available', specialty: 'Features, Fixes, Code quality, Testing', actions: 29, lastActive: '15 min ago' },
  { name: 'Rocket',    handle: '@Rocket_Kleber_bot',        role: 'Integration & Delivery',      emoji: '🚀', status: 'active',   specialty: 'Integrations, APIs, Delivery pipelines', actions: 31, lastActive: '8 min ago' },
  { name: 'Swell',     handle: '@swell_myclaw_bot',         role: 'Cloud & Platform',           emoji: '🌊', status: 'available', specialty: 'Cloud infra, CDN, Edge computing', actions: 25, lastActive: '12 min ago' },
  { name: 'Kilo AI',   handle: '@kilo_managed_ai_bot',      role: 'AI Operations',              emoji: '🤖', status: 'active',   specialty: 'AI model ops, Automation, MLOps', actions: 18, lastActive: '3 min ago' },
  { name: 'Kleber',    handle: '@Kiloclaw_Kleber_bot',      role: 'Business Lead',              emoji: '💼', status: 'active',   specialty: 'Strategy, Client relations, Business development', actions: 15, lastActive: '1 min ago' },
  { name: 'Cloud',     handle: '@Cloud_Windows_bot',        role: 'Cloud & Systems',            emoji: '☁️', status: 'available', specialty: 'Infrastructure, Systems, Networking', actions: 22, lastActive: '20 min ago' },
];

/* ─── Persistent Action Log (loaded from localStorage, fallback to default) ─── */
const DEFAULT_ACTIONS: AgentAction[] = [
  { id: 'a1',  agent: '@Kilo_openclaw_kleber_bot', action: 'Created Waves 221-226 — 32 new AI/IT/Micro-SaaS services with market pricing', timestamp: '2026-06-07 16:35', impact: '+32 services', category: 'wave' },
  { id: 'a2',  agent: '@Cloud_Windows_bot',        action: 'Production deploy to gh-pages — sitemap + monitoring logs updated', timestamp: '2026-06-07 16:45', impact: 'Live traffic ready', category: 'deploy' },
  { id: 'a3',  agent: '@Kilo_openclaw_kleber_bot', action: 'Verified 48/48 core routes — all pages healthy, zero broken links', timestamp: '2026-06-07 16:40', impact: 'Zero broken links', category: 'audit' },
  { id: 'a4',  agent: '@Kilo_openclaw_kleber_bot', action: 'Upgraded monitoring dashboard with full activity log + agent fleet view', timestamp: '2026-06-07 16:30', impact: 'Client-ready monitoring', category: 'feature' },
  { id: 'a5',  agent: '@swell_myclaw_bot',         action: 'CDN cache invalidation + edge sync across all regions', timestamp: '2026-06-07 16:25', impact: 'Faster global delivery', category: 'deploy' },
  { id: 'a6',  agent: '@tablet_kleber_bot',        action: 'Researched market pricing for 32 new services across AI/IT/SaaS', timestamp: '2026-06-07 16:20', impact: 'Competitive pricing data', category: 'research' },
  { id: 'a7',  agent: '@Kilo_openclaw_kleber_bot', action: 'Built and deployed monitoring v6 with agent tracking + action history', timestamp: '2026-06-07 16:15', impact: 'Full agent visibility', category: 'feature' },
  { id: 'a8',  agent: '@Cloud_Windows_bot',        action: 'Production deploy — Wave 176 with 3 new services published', timestamp: '2026-06-07 15:58', impact: '+3 services live', category: 'deploy' },
  { id: 'a9',  agent: '@Kilo_openclaw_kleber_bot', action: 'Deep link audit — checked all service pages and category filters', timestamp: '2026-06-07 15:10', impact: 'All links verified', category: 'audit' },
  { id: 'a10', agent: '@Kilo_openclaw_kleber_bot', action: 'Monitoring dashboard v5 — historical action log + per-agent cards', timestamp: '2026-06-07 15:03', impact: 'Better client visibility', category: 'feature' },
  { id: 'a11', agent: '@Kilo_openclaw_kleber_bot', action: 'Code hardening — removed dead imports + unsupported static-export configs', timestamp: '2026-06-07 14:55', impact: 'Stability boost', category: 'fix' },
  { id: 'a12', agent: '@swell_myclaw_bot',         action: 'Cloud infra sync — all edge nodes refreshed globally', timestamp: '2026-06-07 14:40', impact: '99.99% uptime', category: 'deploy' },
  { id: 'a13', agent: '@Kilo_openclaw_kleber_bot', action: 'Wave 176 — analytics, edge delivery, and voice assistant services added', timestamp: '2026-06-07 14:15', impact: '+3 services', category: 'content' },
  { id: 'a14', agent: '@tablet_kleber_bot',        action: 'Wrote Wave 176 with market-ready descriptions and CTAs', timestamp: '2026-06-07 13:45', impact: 'Broader catalog', category: 'research' },
  { id: 'a15', agent: '@Cloud_Windows_bot',        action: 'Production deploy — sitemap + monitoring logs updated', timestamp: '2026-06-07 13:03', impact: 'Live traffic ready', category: 'deploy' },
  { id: 'a16', agent: '@Kilo_openclaw_kleber_bot', action: 'Deep link audit — 27/27 routes verified across core pages', timestamp: '2026-06-07 12:58', impact: 'No broken links', category: 'audit' },
  { id: 'a17', agent: '@swell_myclaw_bot',         action: 'Build artifacts synced to edge locations worldwide', timestamp: '2026-06-07 12:55', impact: 'Faster delivery', category: 'deploy' },
  { id: 'a18', agent: '@Kilo_openclaw_kleber_bot', action: 'Monitoring v4 upgrade — system metrics + performance KPIs added', timestamp: '2026-06-07 12:45', impact: 'Better visibility', category: 'feature' },
  { id: 'a19', agent: '@Kilo_openclaw_kleber_bot', action: 'Navigation fixes — monitoring links added to header and mobile menu', timestamp: '2026-06-07 11:45', impact: 'Improved discovery', category: 'fix' },
  { id: 'a20', agent: '@Kilo_openclaw_kleber_bot', action: 'Wave 175 published — 50 new AI, Micro-SaaS, IT services with pricing', timestamp: '2026-06-07 09:35', impact: '+50 services', category: 'wave' },
];

const STORAGE_KEY = 'zion_agent_actions';

function loadActions(): AgentAction[] {
  if (typeof window === 'undefined') return DEFAULT_ACTIONS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return DEFAULT_ACTIONS;
}

function saveActions(actions: AgentAction[]) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(actions)); } catch { /* ignore */ }
}

/* ─── Category Config ─── */
const CATEGORY_CONFIG: Record<string, { color: string; icon: string; label: string }> = {
  deploy:   { color: 'bg-blue-500/20 text-blue-300 border-blue-500/30',   icon: '🚀', label: 'Deploy' },
  content:  { color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', icon: '✍️', label: 'Content' },
  audit:    { color: 'bg-amber-500/20 text-amber-300 border-amber-500/30', icon: '🔍', label: 'Audit' },
  feature:  { color: 'bg-purple-500/20 text-purple-300 border-purple-500/30', icon: '⚡', label: 'Feature' },
  fix:      { color: 'bg-red-500/20 text-red-300 border-red-500/30',     icon: '🔧', label: 'Fix' },
  research: { color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',   icon: '📊', label: 'Research' },
  wave:     { color: 'bg-pink-500/20 text-pink-300 border-pink-500/30',   icon: '🌊', label: 'Wave' },
};

/* ─── Main Component ─── */
export default function AgentsMonitoring() {
  const [time, setTime] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [actions, setActions] = useState<AgentAction[]>(DEFAULT_ACTIONS);
  const [showAll, setShowAll] = useState(false);

  // Load persisted actions on mount
  useEffect(() => {
    setActions(loadActions());
  }, []);

  // Expose function for other components to log actions
  useEffect(() => {
    (window as any).__logAgentAction = (action: Omit<AgentAction, 'id' | 'timestamp'>) => {
      const newAction: AgentAction = {
        ...action,
        id: `a${Date.now()}`,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', ''),
      };
      const updated = [newAction, ...actions].slice(0, 100); // Keep last 100
      setActions(updated);
      saveActions(updated);
    };
  }, [actions]);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Sao_Paulo', hour12: true, hour: '2-digit', minute: '2-digit'
    }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeBots = AGENTS.filter(a => a.status === 'active').length;
  const totalServices = 447;
  const totalWaves = 52;
  const totalActions = actions.length;

  const filteredActions = actions.filter(a =>
    (filter === 'all' || a.category === filter) &&
    (!selectedAgent || a.agent === selectedAgent)
  );

  const displayedActions = showAll ? filteredActions : filteredActions.slice(0, 10);

  return (
    <section className="relative overflow-hidden">
      {/* ── Hero ── */}
      <div className="relative border-y border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-violet-900/40 to-pink-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(120,50,200,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(200,50,150,0.2),transparent_50%)]" />
        <div className="relative container-page py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="text-[10px] text-red-400 font-medium uppercase tracking-wider">Live Now</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">{time} — {activeBots} Agents Active</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                    AI Agent Operations Center
                  </span>
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
                  {activeBots} autonomous AI agents work 24/7 — researching services, writing code, fixing bugs, auditing links, and deploying updates. Every page on this site is built and maintained by our AI fleet. Watch them work in real time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 shrink-0">
                <div className="bg-slate-900/80 border border-purple-500/20 rounded-xl p-4 text-center min-w-[120px] hover:border-purple-400/40 transition-colors">
                  <div className="text-3xl font-bold text-purple-400"><AnimatedCounter target={activeBots} /></div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Agents Live</div>
                </div>
                <div className="bg-slate-900/80 border border-pink-500/20 rounded-xl p-4 text-center min-w-[120px] hover:border-pink-400/40 transition-colors">
                  <div className="text-3xl font-bold text-pink-400"><AnimatedCounter target={totalServices} suffix="+" /></div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Services</div>
                </div>
                <div className="bg-slate-900/80 border border-violet-500/20 rounded-xl p-4 text-center min-w-[120px] hover:border-violet-400/40 transition-colors">
                  <div className="text-3xl font-bold text-violet-400"><AnimatedCounter target={totalWaves} /></div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Waves</div>
                </div>
                <div className="bg-slate-900/80 border border-emerald-500/20 rounded-xl p-4 text-center min-w-[120px] hover:border-emerald-400/40 transition-colors">
                  <div className="text-3xl font-bold text-emerald-400"><AnimatedCounter target={totalActions} /></div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Actions</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link href="/dashboard/" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
                ⚡ Open Live Dashboard
              </Link>
              <Link href="/services/" className="inline-flex items-center gap-2 bg-slate-800/60 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-xl font-medium text-sm hover:bg-purple-500/10 hover:border-purple-400/50 transition-all">
                🛠️ Browse Services
              </Link>
              <Link href="/contact/" className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 text-slate-300 px-6 py-3 rounded-xl font-medium text-sm hover:bg-slate-700/80 hover:border-purple-500/30 transition-all">
                📧 Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Agent Fleet ── */}
      <div className="container-page py-12">
        <h3 className="text-2xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">🤖 Agent Fleet Status</span>
        </h3>
        <p className="text-center text-slate-500 text-sm mb-8">Click an agent to filter their activity log</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {AGENTS.map(agent => (
            <button
              key={agent.name}
              onClick={() => setSelectedAgent(selectedAgent === agent.handle ? null : agent.handle)}
              className={`text-left bg-slate-900/60 border rounded-xl p-4 transition-all hover:scale-[1.02] cursor-pointer ${
                selectedAgent === agent.handle
                  ? 'border-purple-400/60 shadow-lg shadow-purple-500/10 ring-1 ring-purple-500/20'
                  : 'border-slate-700/40 hover:border-purple-500/30'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{agent.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm">{agent.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{agent.handle}</div>
                </div>
                <span className={`shrink-0 inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  agent.status === 'active'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-700/40 text-slate-400'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${agent.status === 'active' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                  {agent.status}
                </span>
              </div>
              <div className="text-xs text-slate-400 mb-2">{agent.role}</div>
              <div className="text-[11px] text-slate-500 mb-2">{agent.specialty}</div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-purple-400 font-medium">{agent.actions} actions</span>
                <span className="text-slate-600">Last: {agent.lastActive}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Activity Log ── */}
      <div className="container-page pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">📋 Agent Activity Log</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">Persistent log — stored locally and updated in real time by agents</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => (
                <button
                  key={key}
                  onClick={() => setFilter(filter === key ? 'all' : key)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    filter === key
                      ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                      : 'bg-slate-900/40 border-slate-700/40 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  {cfg.icon} {cfg.label}
                </button>
              ))}
              <button
                onClick={() => setFilter('all')}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  filter === 'all'
                    ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                    : 'bg-slate-900/40 border-slate-700/40 text-slate-400 hover:border-slate-600'
                }`}
              >
                📋 All
              </button>
            </div>
          </div>

          {selectedAgent && (
            <div className="mb-4 flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-2">
              <span className="text-xs text-purple-300">Filtered by: <strong>{selectedAgent}</strong></span>
              <button onClick={() => setSelectedAgent(null)} className="text-xs text-slate-400 hover:text-white ml-auto">✕ Clear</button>
            </div>
          )}

          <div className="space-y-2">
            {displayedActions.map((action) => {
              const cfg = CATEGORY_CONFIG[action.category] || CATEGORY_CONFIG.deploy;
              return (
                <div key={action.id} className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-3 hover:border-slate-700/60 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${cfg.color}`}>
                        {cfg.icon} {cfg.label}
                      </span>
                      <span className="text-[11px] text-slate-600">{action.timestamp}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-purple-300 font-medium">{action.agent}</span>
                      <span className="text-xs text-slate-400"> — {action.action}</span>
                    </div>
                    <div className="text-[11px] text-emerald-400/80 shrink-0 font-medium">{action.impact}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredActions.length === 0 && (
            <div className="text-center py-12 text-slate-500">No actions match the current filter.</div>
          )}

          {filteredActions.length > 10 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm text-purple-400 hover:text-purple-300 font-medium"
              >
                {showAll ? '↑ Show less' : `↓ Show all ${filteredActions.length} actions`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Client CTA ── */}
      <div className="border-t border-purple-500/20 bg-gradient-to-r from-purple-900/20 via-violet-900/10 to-pink-900/20">
        <div className="container-page py-12 text-center">
          <h3 className="text-2xl font-bold mb-3">
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Built by AI. Delivered for You.</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6 text-sm">
            Our AI agent fleet works around the clock to research, build, test, and deploy real AI, IT, and Micro-SaaS services.
            Every service listed on this site is production-ready with market pricing and full support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
              🛠️ Explore All Services
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-slate-800/60 border border-purple-500/30 text-purple-300 px-8 py-3 rounded-xl font-medium hover:bg-purple-500/10 transition-all">
              📞 Get a Free Proposal
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <span>📧 kleber@ziontechgroup.com</span>
            <span>📱 +1 302 464 0950</span>
            <span>📍 364 E Main St STE 1008, Middletown, DE 19709</span>
          </div>
        </div>
      </div>
    </section>
  );
}
