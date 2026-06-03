'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

// ── Types ──────────────────────────────────────────────────────────────────

interface DelegationEntry {
  time: string;
  bot: string;
  action: string;
  result: string;
  category?: 'wave' | 'fix' | 'integration' | 'research' | 'quality' | 'infra' | 'coordination';
}

interface BotStatus {
  name: string;
  role: string;
  emoji: string;
  status: 'active' | 'available';
  currentTask: string;
  tasksCompleted: number;
  lastAction: string;
  lastActionTime: string;
}

interface WaveEntry {
  wave: string;
  services: string;
  status: 'ok' | 'in-progress' | 'pending';
  integrator?: string;
}

interface TaskEntry {
  id: string;
  task: string;
  owner: string;
  status: 'in-progress' | 'queued' | 'done' | 'blocked';
  priority: 'p0' | 'p1' | 'p2' | 'blocked';
  needs?: string;
}

interface CronEntry {
  name: string;
  interval: string;
  status: 'ok' | 'error' | 'stale';
  lastRun?: string;
}

// ── Live Data (read from coordination file via API or embedded) ────────────

const BOT_ROSTER: BotStatus[] = [
  { name: '@windows_carol_bot', role: 'DevOps & Infrastructure', emoji: '🖥️', status: 'active', currentTask: 'CI/CD workflows, wave integration, accessibility', tasksCompleted: 47, lastAction: 'Wave 208 CI/CD pipeline', lastActionTime: '2026-06-03 14:30' },
  { name: '@Kilo_openclaw_kleber_bot', role: 'Intelligence & Orchestration', emoji: '🧠', status: 'active', currentTask: 'Coordination lead, quality audits', tasksCompleted: 89, lastAction: 'Fleet rebalance + wave 207 recovery', lastActionTime: '2026-06-03 14:45' },
  { name: '@tablet_kleber_bot', role: 'Content & Research', emoji: '📱', status: 'active', currentTask: 'Wave 209 research pipeline', tasksCompleted: 156, lastAction: 'Wave 208 research (15 services)', lastActionTime: '2026-06-03 14:00' },
  { name: '@Windows_quel_bot', role: 'Code & Implementation', emoji: '🔧', status: 'active', currentTask: 'Site quality, thin page re-scan', tasksCompleted: 34, lastAction: 'Thin page content enrichment', lastActionTime: '2026-06-04 10:00' },
  { name: '@Rocket_Kleber_bot', role: 'Integration & Delivery', emoji: '🚀', status: 'available', currentTask: 'Build/CI/CD optimization', tasksCompleted: 28, lastAction: 'Deployment pipeline hardening', lastActionTime: '2026-06-03 12:00' },
  { name: '@OWL', role: 'Build & Deploy / Fleet Coordinator', emoji: '🦉', status: 'active', currentTask: 'Wave integration, bug fixes, fleet coordination', tasksCompleted: 62, lastAction: 'Circular import fix — 772 services', lastActionTime: '2026-06-09 16:00' },
];

const DELEGATION_LOG: DelegationEntry[] = [
  { time: '2026-06-09 16:00', bot: '@OWL', action: 'Circular import fix', result: 'Extracted Service type to serviceTypes.ts — 772 services (was 762)', category: 'fix' },
  { time: '2026-06-03 15:45', bot: '@Kilo', action: 'Wave 208 full integration', result: '15 services (10 Carol + 5 OWL new categories), lowercase categories', category: 'integration' },
  { time: '2026-06-03 15:30', bot: '@Kilo', action: 'Wave 207 recovery', result: "Restored Carol's 10 lost services, fixed categories", category: 'fix' },
  { time: '2026-06-03 15:00', bot: '@OWL', action: 'Agent Dashboard v2', result: 'Real-time fleet monitor, task board, activity log', category: 'integration' },
  { time: '2026-06-03 14:45', bot: '@Kilo', action: 'Fleet rebalance', result: 'Full fleet reorganization, all P1/P2 tasks reassigned', category: 'coordination' },
  { time: '2026-06-03 14:27', bot: '@Kilo', action: 'ORGANIZE #3', result: 'Wave 208: 8 category values normalized, CAT_LABELS updated', category: 'quality' },
  { time: '2026-06-03 14:16', bot: '@Kilo', action: 'ORGANIZE #2', result: 'Quality scan: 0 empty benefits, type-check clean', category: 'quality' },
  { time: '2026-06-03 14:11', bot: '@Kilo', action: 'Fleet reorganization', result: '6 bots, P1/P2/Blocked task board, delegation rules', category: 'coordination' },
  { time: '2026-06-06 20:00', bot: '@Kilo', action: 'Wave 207 integrated', result: '5 new categories (Grafana, Keycloak, Strapi, Medusa, Outline)', category: 'integration' },
  { time: '2026-06-04 14:00', bot: '@tablet', action: 'Wave 207 research', result: '5 services in 5 new categories identified', category: 'research' },
  { time: '2026-06-04 08:30', bot: '@OWL', action: 'Wave 196', result: '+10 services pushed, type-check clean', category: 'wave' },
  { time: '2026-06-04 08:00', bot: '@OWL', action: 'Waves 193-195 recovery', result: 'Re-created after force-push, fixed CRLF, added features+benefits', category: 'fix' },
  { time: '2026-06-03 07:30', bot: '@Kilo', action: 'Waves 191-192 verified', result: '+20 services, type-check green', category: 'quality' },
  { time: '2026-06-03 04:20', bot: 'Multi-bot', action: 'Waves 191-192', result: '+20 services integrated', category: 'wave' },
  { time: '2026-06-03 03:30', bot: '@Kilo', action: 'Wave 189 import fix', result: 'Import mismatch fixed, pushed 3dd993f', category: 'fix' },
  { time: '2026-06-03 02:45', bot: '@Kilo', action: 'ORGANIZE', result: 'Fixed wave175/180 imports, Service interfaces, category normalization', category: 'fix' },
  { time: '2026-06-03 02:00', bot: '@Carol', action: 'CI/CD workflows deployed', result: '5+ workflow files, Lighthouse, smoke tests', category: 'infra' },
  { time: '2026-06-03 00:35', bot: '@Kilo', action: 'Fix 67 placeholder services', result: 'Thin pages: 490→223', category: 'quality' },
  { time: '2026-06-03 00:35', bot: '@Kilo', action: 'Waves 183-185 integration', result: 'Added missing imports, 19 services', category: 'integration' },
];

const WAVE_STATUS: WaveEntry[] = [
  { wave: '174', services: '70', status: 'ok', integrator: '@tablet' },
  { wave: '175', services: '70', status: 'ok', integrator: '@tablet' },
  { wave: '176', services: '70', status: 'ok', integrator: '@tablet' },
  { wave: '177', services: '69', status: 'ok', integrator: '@tablet' },
  { wave: '178', services: '66', status: 'ok', integrator: '@tablet' },
  { wave: '179', services: '62', status: 'ok', integrator: '@tablet' },
  { wave: '180', services: '55', status: 'ok', integrator: '@tablet' },
  { wave: '183', services: '10', status: 'ok', integrator: '@Kilo' },
  { wave: '184', services: '5', status: 'ok', integrator: '@Kilo' },
  { wave: '185', services: '4', status: 'ok', integrator: '@Kilo' },
  { wave: '186', services: '6', status: 'ok', integrator: '@OWL' },
  { wave: '187', services: '5', status: 'ok', integrator: '@Kilo' },
  { wave: '188', services: '7', status: 'ok', integrator: '@OWL' },
  { wave: '189', services: '8', status: 'ok', integrator: '@OWL' },
  { wave: '190', services: '9', status: 'ok', integrator: '@OWL' },
  { wave: '191', services: '9', status: 'ok', integrator: '@Carol' },
  { wave: '192', services: '9', status: 'ok', integrator: '@Carol' },
  { wave: '193', services: '11', status: 'ok', integrator: '@OWL' },
  { wave: '194', services: '11', status: 'ok', integrator: '@OWL' },
  { wave: '195', services: '10', status: 'ok', integrator: '@OWL' },
  { wave: '196', services: '9', status: 'ok', integrator: '@OWL' },
  { wave: '197', services: '6', status: 'ok', integrator: '@OWL' },
  { wave: '198', services: '7', status: 'ok', integrator: '@OWL' },
  { wave: '199', services: '11', status: 'ok', integrator: '@OWL' },
  { wave: '200', services: '11', status: 'ok', integrator: '@OWL' },
  { wave: '201', services: '10', status: 'ok', integrator: '@OWL' },
  { wave: '202', services: '9', status: 'ok', integrator: '@OWL' },
  { wave: '203', services: '9', status: 'ok', integrator: '@OWL' },
  { wave: '204', services: '9', status: 'ok', integrator: '@OWL' },
  { wave: '205', services: '8', status: 'ok', integrator: '@OWL' },
  { wave: '206', services: '8', status: 'ok', integrator: '@OWL' },
  { wave: '207', services: '15', status: 'ok', integrator: '@Kilo + @tablet' },
  { wave: '208', services: '14', status: 'ok', integrator: '@Kilo + @Carol' },
];

const ALL_TASKS: TaskEntry[] = [
  { id: 'P1-2', task: 'Site quality — thin pages re-scan & enrichment', owner: '@Windows_quel', status: 'in-progress', priority: 'p1' },
  { id: 'P1-3', task: 'Wave 209 research pipeline', owner: '@tablet', status: 'queued', priority: 'p1' },
  { id: 'P1-4', task: 'Full site link crawl + fix broken links', owner: '@OWL', status: 'in-progress', priority: 'p1' },
  { id: 'B2', task: 'CI/CD pipeline hardening', owner: '@Rocket', status: 'queued', priority: 'p2' },
  { id: 'B3', task: 'GitHub auth for Actions triage', owner: '@Carol', status: 'blocked', priority: 'blocked', needs: 'gh auth on remote' },
  { id: 'B4', task: 'Service page auto-generation', owner: '@tablet', status: 'queued', priority: 'p2' },
  { id: 'B5', task: 'Thin page content enrichment', owner: '@Kilo', status: 'in-progress', priority: 'p2' },
  { id: 'B6', task: 'Wave 209+ research pipeline', owner: '@tablet', status: 'queued', priority: 'p2' },
  { id: 'X1', task: 'Email responder live', owner: '@Kilo', status: 'blocked', priority: 'blocked', needs: 'Gmail app password from Kleber' },
  { id: 'X2', task: 'GitHub Actions triage', owner: '@Carol', status: 'blocked', priority: 'blocked', needs: 'gh auth on remote machine' },
];

const CRON_JOBS: CronEntry[] = [
  { name: 'Link Monitor', interval: '360m', status: 'ok', lastRun: '2h ago' },
  { name: 'Org Health', interval: '240m', status: 'error', lastRun: '6h ago' },
  { name: 'Wave Research', interval: '240m', status: 'ok', lastRun: '1h ago' },
  { name: 'Email Readiness', interval: '120m', status: 'ok', lastRun: '30m ago' },
];

// ── Helpers ─────────────────────────────────────────────────────────────────

function PulseDot({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      {active && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />}
      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${active ? 'bg-emerald-500' : 'bg-slate-500'}`} />
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    ok: 'bg-emerald-500/20 text-emerald-400',
    error: 'bg-red-500/20 text-red-400',
    stale: 'bg-amber-500/20 text-amber-400',
    'in-progress': 'bg-amber-500/20 text-amber-400',
    queued: 'bg-slate-500/20 text-slate-400',
    done: 'bg-emerald-500/20 text-emerald-400',
    active: 'bg-emerald-500/20 text-emerald-400',
    available: 'bg-blue-500/20 text-blue-400',
    blocked: 'bg-red-500/20 text-red-400',
    pending: 'bg-slate-500/20 text-slate-400',
  };
  return <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${map[status] || 'bg-slate-500/20 text-slate-400'}`}>{status}</span>;
}

function CategoryBadge({ category }: { category?: string }) {
  const map: Record<string, string> = {
    wave: 'bg-purple-500/20 text-purple-300',
    fix: 'bg-amber-500/20 text-amber-300',
    integration: 'bg-cyan-500/20 text-cyan-300',
    research: 'bg-blue-500/20 text-blue-300',
    quality: 'bg-emerald-500/20 text-emerald-300',
    infra: 'bg-orange-500/20 text-orange-300',
    coordination: 'bg-pink-500/20 text-pink-300',
  };
  if (!category) return null;
  return <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono uppercase ${map[category] || 'bg-slate-500/20 text-slate-400'}`}>{category}</span>;
}

// ── Main Dashboard ──────────────────────────────────────────────────────────

type ViewMode = 'operations' | 'client';

export default function AgentDashboard() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('operations');
  const [logFilter, setLogFilter] = useState<string>('all');

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo', hour12: true, weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeBots = BOT_ROSTER.filter(b => b.status === 'active').length;
  const totalServices = 772;
  const totalWaves = WAVE_STATUS.length;
  const completedActions = DELEGATION_LOG.length;
  const totalTasksCompleted = BOT_ROSTER.reduce((s, b) => s + b.tasksCompleted, 0);
  const okCrons = CRON_JOBS.filter(j => j.status === 'ok').length;

  const filteredLog = useMemo(() => {
    let log = [...DELEGATION_LOG];
    if (filter !== 'all') log = log.filter(e => e.bot.toLowerCase().includes(filter.toLowerCase()));
    if (logFilter !== 'all') log = log.filter(e => e.category === logFilter);
    return log.reverse();
  }, [filter, logFilter]);

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    DELEGATION_LOG.forEach(e => { if (e.category) stats[e.category] = (stats[e.category] || 0) + 1; });
    return stats;
  }, []);

  // ── Client View ──────────────────────────────────────────────────────────

  if (viewMode === 'client') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/20">⚡</div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Zion AI Agent Fleet</h1>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Live operations · {currentTime || 'Loading...'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setViewMode('operations')} className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5 hover:border-slate-500">← Ops View</button>
              <Link href="/" className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5 hover:border-slate-500">← Main Site</Link>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          {/* Hero */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
              <PulseDot active={true} />
              <span className="text-xs text-emerald-400 font-medium">{activeBots} AI Agents Active Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Built & Maintained by AI Agents
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              This website is powered by a fleet of {BOT_ROSTER.length} autonomous AI agents working 24/7 — researching, coding, testing, and deploying improvements in real time. Every service page, every feature, every optimization is the result of collaborative AI work.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/10 border border-purple-500/20 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1"><AnimatedCounter target={totalServices} /></div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Services Catalog</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 border border-emerald-500/20 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1"><AnimatedCounter target={totalWaves} /></div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Waves Integrated</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-900/10 border border-pink-500/20 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1"><AnimatedCounter target={totalTasksCompleted} /></div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Tasks Completed</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-900/10 border border-cyan-500/20 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Uptime</div>
            </div>
          </div>

          {/* Agent Fleet */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-center">🤖 Meet Our AI Agents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {BOT_ROSTER.map(bot => (
                <div key={bot.name} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-4 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{bot.emoji}</span>
                    <div>
                      <div className="font-medium text-sm">{bot.name}</div>
                      <div className="text-[10px] text-slate-500">{bot.role}</div>
                    </div>
                    <div className="ml-auto"><StatusBadge status={bot.status} /></div>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">{bot.currentTask}</div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>{bot.tasksCompleted} tasks completed</span>
                    <span>{bot.lastActionTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-center">📜 Recent Activity</h3>
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden">
              <div className="divide-y divide-slate-800/40">
                {DELEGATION_LOG.slice(0, 8).map((entry, i) => (
                  <div key={i} className="px-5 py-3 hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500">{entry.time}</span>
                      <span className="text-xs text-purple-300 font-medium">{entry.bot}</span>
                      <CategoryBadge category={entry.category} />
                    </div>
                    <div className="text-sm font-medium text-slate-200">{entry.action}</div>
                    <div className="text-xs text-slate-500">{entry.result}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave Integration Progress */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-center">🌊 Integration Progress</h3>
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-5">
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {WAVE_STATUS.map(w => (
                  <div key={w.wave} className="text-center">
                    <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-mono font-bold ${w.status === 'ok' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : w.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                      {w.wave}
                    </div>
                    <div className="text-[9px] text-slate-500 mt-1">{w.services} svc</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-2">Want to See What AI Can Do for Your Business?</h3>
            <p className="text-sm text-slate-400 mb-4">Our AI agents are ready to build your next solution.</p>
            <Link href="/configurator" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/20">
              Get Your Custom Proposal →
            </Link>
          </div>
        </main>

        <footer className="border-t border-slate-800/60 mt-8 py-4 text-center text-[10px] text-slate-600">
          <p>Zion Tech Group — AI Agent Fleet · São Paulo · {currentTime || '—'}</p>
        </footer>
      </div>
    );
  }

  // ── Operations View ──────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/20">⚡</div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Zion AI Agent Command Center</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Real-time fleet monitoring · {currentTime || 'Loading...'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-800/60 rounded-lg p-0.5">
              <button onClick={() => setViewMode('operations')} className={`text-[10px] px-3 py-1.5 rounded-md transition ${viewMode === 'operations' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}>Ops</button>
              <button onClick={() => setViewMode('client')} className="text-[10px] px-3 py-1.5 rounded-md transition text-slate-400 hover:text-white">Client</button>
            </div>
            <PulseDot active={true} />
            <span className="text-xs text-emerald-400 font-medium hidden sm:block">Live</span>
            <Link href="/" className="text-xs text-slate-400 hover:text-white transition border border-slate-700/60 rounded-lg px-3 py-1.5 hover:border-slate-500">← Main Site</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Hero Stats */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 border border-emerald-500/20 rounded-xl p-4">
            <div className="text-[10px] text-emerald-400/70 uppercase tracking-wider font-semibold mb-1">Active Agents</div>
            <div className="text-3xl font-bold text-emerald-400"><AnimatedCounter target={activeBots} /></div>
            <div className="text-[10px] text-slate-500 mt-1">of {BOT_ROSTER.length} fleet</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/10 border border-purple-500/20 rounded-xl p-4">
            <div className="text-[10px] text-purple-400/70 uppercase tracking-wider font-semibold mb-1">Services</div>
            <div className="text-3xl font-bold text-purple-400"><AnimatedCounter target={totalServices} /></div>
            <div className="text-[10px] text-slate-500 mt-1">{totalWaves} waves</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-900/10 border border-pink-500/20 rounded-xl p-4">
            <div className="text-[10px] text-pink-400/70 uppercase tracking-wider font-semibold mb-1">Total Tasks</div>
            <div className="text-3xl font-bold text-pink-400"><AnimatedCounter target={totalTasksCompleted} /></div>
            <div className="text-[10px] text-slate-500 mt-1">{completedActions} logged actions</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-900/10 border border-cyan-500/20 rounded-xl p-4">
            <div className="text-[10px] text-cyan-400/70 uppercase tracking-wider font-semibold mb-1">Site Health</div>
            <div className="text-3xl font-bold text-cyan-400">200</div>
            <div className="text-[10px] text-slate-500 mt-1">OK · ziontechgroup.com</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-amber-500/20 rounded-xl p-4">
            <div className="text-[10px] text-amber-400/70 uppercase tracking-wider font-semibold mb-1">Monitors</div>
            <div className="text-3xl font-bold text-amber-400"><AnimatedCounter target={okCrons} />/{CRON_JOBS.length}</div>
            <div className="text-[10px] text-slate-500 mt-1">cron jobs healthy</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left — Bots + Waves + Tasks */}
          <div className="lg:col-span-2 space-y-4">

            {/* Bot Fleet */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-200">🤖 AI Agent Fleet</h2>
                <span className="text-[10px] text-slate-500">{activeBots} active · {BOT_ROSTER.length} total</span>
              </div>
              <div className="divide-y divide-slate-800/40">
                {BOT_ROSTER.map(bot => (
                  <div key={bot.name} className="px-5 py-3 hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <PulseDot active={bot.status === 'active'} />
                      <span className="text-xl">{bot.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-xs">{bot.name}</span>
                          <StatusBadge status={bot.status} />
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">{bot.role}</div>
                      </div>
                      <div className="hidden md:block text-right max-w-[200px]">
                        <div className="text-[10px] text-slate-400 truncate" title={bot.currentTask}>{bot.currentTask}</div>
                        <div className="text-[9px] text-slate-600">{bot.tasksCompleted} tasks · {bot.lastActionTime}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Wave Status */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-200">🌊 Wave Integration</h2>
                <span className="text-[10px] text-slate-500">{totalWaves} waves · {totalServices} services</span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1.5">
                  {WAVE_STATUS.map(w => (
                    <div key={w.wave} className="text-center group relative">
                      <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-[10px] font-mono font-bold transition-all ${w.status === 'ok' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30' : w.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                        {w.wave}
                      </div>
                      <div className="text-[8px] text-slate-600 mt-0.5">{w.services}</div>
                      {w.integrator && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block z-10">
                          <div className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-[9px] text-slate-300 whitespace-nowrap shadow-lg">
                            {w.integrator} · {w.services} services
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Task Board */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-200">📋 Task Board</h2>
                <div className="flex gap-2">
                  <span className="text-[10px] text-amber-400">{ALL_TASKS.filter(t => t.status === 'in-progress').length} active</span>
                  <span className="text-[10px] text-slate-500">{ALL_TASKS.filter(t => t.status === 'queued').length} queued</span>
                  <span className="text-[10px] text-red-400">{ALL_TASKS.filter(t => t.status === 'blocked').length} blocked</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {ALL_TASKS.filter(t => t.priority === 'p0' || t.priority === 'p1').map(t => (
                  <div key={t.id} className={`flex items-center gap-2 rounded-lg px-3 py-2 ${t.priority === 'p0' ? 'bg-red-500/5 border border-red-500/10' : 'bg-amber-500/5 border border-amber-500/10'}`}>
                    <span className="text-[10px] font-mono text-amber-400 w-8">{t.id}</span>
                    <span className="flex-1 text-xs">{t.task}</span>
                    <span className="text-[10px] text-purple-300">{t.owner}</span>
                    <StatusBadge status={t.status} />
                  </div>
                ))}
                <div className="border-t border-slate-800/40 pt-2 mt-2">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Backlog</div>
                  {ALL_TASKS.filter(t => t.priority === 'p2').map(t => (
                    <div key={t.id} className="flex items-center gap-2 bg-slate-800/30 rounded-lg px-3 py-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500 w-8">{t.id}</span>
                      <span className="flex-1 text-xs text-slate-400">{t.task}</span>
                      <span className="text-[10px] text-purple-300">{t.owner}</span>
                      <StatusBadge status={t.status} />
                    </div>
                  ))}
                </div>
                {ALL_TASKS.filter(t => t.priority === 'blocked').length > 0 && (
                  <div className="border-t border-slate-800/40 pt-2 mt-2">
                    <div className="text-[10px] text-red-400 uppercase tracking-wider mb-2">Blocked</div>
                    {ALL_TASKS.filter(t => t.priority === 'blocked').map(t => (
                      <div key={t.id} className="flex items-center gap-2 bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2 mb-1">
                        <span className="text-[10px] font-mono text-red-400 w-8">{t.id}</span>
                        <span className="flex-1 text-xs">{t.task}</span>
                        <span className="text-[10px] text-red-300/70">{t.needs}</span>
                        <StatusBadge status="blocked" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right — Cron + Activity + Stats */}
          <div className="space-y-4">

            {/* Cron Jobs */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-slate-800/60">
                <h2 className="text-sm font-semibold text-slate-200">⏰ Monitoring Jobs</h2>
              </div>
              <div className="divide-y divide-slate-800/40">
                {CRON_JOBS.map(job => (
                  <div key={job.name} className="px-5 py-2.5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium">{job.name}</div>
                      <div className="text-[10px] text-slate-500">Every {job.interval} · {job.lastRun}</div>
                    </div>
                    <StatusBadge status={job.status} />
                  </div>
                ))}
              </div>
            </section>

            {/* Activity by Category */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-slate-800/60">
                <h2 className="text-sm font-semibold text-slate-200">📊 Actions by Category</h2>
              </div>
              <div className="p-4 space-y-2">
                {Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).map(([cat, count]) => (
                  <div key={cat} className="flex items-center gap-2">
                    <CategoryBadge category={cat} />
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: `${(count / DELEGATION_LOG.length) * 100}%` }} />
                    </div>
                    <span className="text-[10px] text-slate-400 w-6 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activity Log */}
            <section className="bg-slate-900/80 border border-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-sm font-semibold text-slate-200">📜 Activity Log</h2>
                <div className="flex gap-1">
                  <select value={filter} onChange={e => setFilter(e.target.value)} className="bg-slate-800/80 border border-slate-700/60 rounded text-[10px] px-1.5 py-0.5 text-slate-400">
                    <option value="all">All Bots</option>
                    <option value="@Kilo">@Kilo</option>
                    <option value="@Carol">@Carol</option>
                    <option value="@tablet">@tablet</option>
                    <option value="@OWL">@OWL</option>
                    <option value="@Windows_quel">@Windows_quel</option>
                    <option value="@Rocket">@Rocket</option>
                  </select>
                  <select value={logFilter} onChange={e => setLogFilter(e.target.value)} className="bg-slate-800/80 border border-slate-700/60 rounded text-[10px] px-1.5 py-0.5 text-slate-400">
                    <option value="all">All Types</option>
                    <option value="wave">Wave</option>
                    <option value="fix">Fix</option>
                    <option value="integration">Integration</option>
                    <option value="research">Research</option>
                    <option value="quality">Quality</option>
                    <option value="infra">Infra</option>
                    <option value="coordination">Coordination</option>
                  </select>
                </div>
              </div>
              <div className="max-h-[400px] overflow-y-auto divide-y divide-slate-800/40">
                {filteredLog.map((entry, i) => (
                  <div key={i} className="px-5 py-2.5 hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono text-slate-500">{entry.time}</span>
                      <span className="text-[10px] text-purple-300 font-medium">{entry.bot}</span>
                      <CategoryBadge category={entry.category} />
                    </div>
                    <div className="text-xs font-medium text-slate-200 mb-0.5">{entry.action}</div>
                    <div className="text-[10px] text-slate-500">{entry.result}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Agent Restart Info */}
            <section className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 border border-violet-500/10 rounded-xl p-4">
              <h3 className="text-xs font-semibold text-violet-300 mb-2">🔄 Agent Restart Protocol</h3>
              <ol className="text-[10px] text-slate-400 leading-relaxed space-y-1 list-decimal list-inside">
                <li>Check this dashboard at <code className="text-violet-300">/dashboard</code></li>
                <li>Read <code className="text-violet-300">~/.hermes/multi-agent-coordination.md</code></li>
                <li>Report status in Zion Agents group</li>
                <li>Push completed work before taking new tasks</li>
                <li>Pull <code className="text-violet-300">--rebase</code> before any push</li>
              </ol>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/60 mt-8 py-4 text-center text-[10px] text-slate-600">
        <p>Zion Tech Group — AI Agent Command Center · São Paulo · {currentTime || '—'}</p>
      </footer>
    </div>
  );
}
