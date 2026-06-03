'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

// ── Types ──────────────────────────────────────────────────────────────────

interface DelegationEntry {
  time: string;
  bot: string;
  action: string;
  result: string;
}

interface WaveEntry {
  wave: string;
  services: string;
  status: string;
}

interface BotStatus {
  name: string;
  role: string;
  emoji: string;
  status: 'active' | 'available' | 'busy';
  currentTask: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const BOT_ROSTER: BotStatus[] = [
  { name: '@windows_carol_bot', role: 'DevOps & Infrastructure', emoji: '🖥️', status: 'active', currentTask: 'CI/CD workflows, wave integration, accessibility' },
  { name: '@Kilo_openclaw_kleber_bot', role: 'Intelligence & Orchestration', emoji: '🧠', status: 'active', currentTask: 'Coordination lead, quality audits' },
  { name: '@tablet_kleber_bot', role: 'Content & Research', emoji: '📱', status: 'active', currentTask: 'Wave research & content creation' },
  { name: '@Windows_quel_bot', role: 'Code & Implementation', emoji: '🔧', status: 'available', currentTask: 'Site quality improvements' },
  { name: '@Rocket_Kleber_bot', role: 'Integration & Delivery', emoji: '🚀', status: 'available', currentTask: 'Build/deploy automation' },
  { name: '@OWL', role: 'Build & Deploy', emoji: '📊', status: 'active', currentTask: 'Wave creation, bug fixes, fleet coordination' },
];

const DELEGATION_LOG: DelegationEntry[] = [
  { time: '2026-06-03 00:35', bot: '@Kilo', action: 'Fix 67 placeholder services', result: 'Thin pages: 490→223' },
  { time: '2026-06-03 00:35', bot: '@Kilo', action: 'Waves 183-185 integration', result: 'Added missing imports' },
  { time: '2026-06-03 02:00', bot: '@Carol', action: 'Unstoppable CI/CD workflows', result: '5+ workflow files added' },
  { time: '2026-06-03 02:45', bot: '@Kilo', action: 'ORGANIZE', result: 'Fixed wave175/180 imports, interfaces, categories' },
  { time: '2026-06-03 03:30', bot: '@Kilo', action: 'ORGANIZE', result: 'Fixed wave189 import mismatch. Pushed 3dd993f' },
  { time: '2026-06-03 04:20', bot: 'Multiple', action: 'Waves 191-192 added', result: '+20 services integrated' },
  { time: '2026-06-04 08:00', bot: '@OWL', action: 'Waves 193-195 recovery', result: 'Re-created after Carol force-push, fixed CRLF' },
  { time: '2026-06-04 08:30', bot: '@OWL', action: 'Wave 196', result: '+10 services pushed' },
  { time: '2026-06-04 14:00', bot: '@tablet', action: 'Wave 207 research', result: 'Grafana, Keycloak, Strapi, Medusa, Outline' },
  { time: '2026-06-06 18:00', bot: '@Kilo', action: 'ORGANIZE', result: 'Full fleet rebalance, all bots synced' },
  { time: '2026-06-06 20:00', bot: '@Kilo', action: 'Wave 207 integrated', result: '5 new categories, type-check clean' },
  { time: '2026-06-09 00:00', bot: '@Kilo', action: 'ORGANIZE', result: 'Fleet review, P1-2→@Windows_quel' },
  { time: '2026-06-03 14:11', bot: '@Kilo', action: 'ORGANIZE #1', result: 'Full fleet reorganization, all tasks delegated' },
  { time: '2026-06-03 14:16', bot: '@Kilo', action: 'ORGANIZE #2', result: 'Quality scan: 0 issues, type-check clean' },
  { time: '2026-06-03 14:27', bot: '@Kilo', action: 'ORGANIZE #3', result: 'Wave 208: 15 services, lowercase fix, CAT_LABELS' },
];

const WAVE_STATUS: WaveEntry[] = [
  { wave: '174-180', services: '~497', status: '✅' },
  { wave: '183-185', services: '19', status: '✅' },
  { wave: '186', services: '6', status: '✅' },
  { wave: '187', services: '4', status: '✅' },
  { wave: '188-192', services: '44', status: '✅' },
  { wave: '193-196', services: '41', status: '✅' },
  { wave: '197-206', services: '~160', status: '✅' },
  { wave: '207', services: '15', status: '✅' },
  { wave: '208', services: '14', status: '✅' },
];

const CRON_JOBS = [
  { name: 'Link Monitor', interval: 'Every 360m', status: 'ok', lastRun: '2026-06-03 13:17' },
  { name: 'Org Health Check', interval: 'Every 240m', status: 'error', lastRun: '2026-06-03 14:09' },
  { name: 'Wave Research', interval: 'Every 240m', status: 'ok', lastRun: '2026-06-03 11:56' },
  { name: 'Email Readiness', interval: 'Every 120m', status: 'ok', lastRun: '2026-06-03 12:28' },
];

const BLOCKED_TASKS = [
  { id: 'X1', task: 'Email responder live', needs: 'Kleber: Gmail app password' },
  { id: 'X2', task: 'GitHub Actions triage', needs: 'Kleber: gh auth on remote' },
];

const P1_TASKS = [
  { id: 'P1-1', task: 'Wave 208 research', owner: '@tablet', status: '✅ Done' },
  { id: 'P1-2', task: 'Site quality pass — thin pages', owner: '@Windows_quel', status: '🔄 In Progress' },
  { id: 'P1-3', task: 'Wave 209 research', owner: '@tablet', status: '⏳ Queued' },
];

const P2_TASKS = [
  { id: 'B2', task: 'CI/CD pipeline hardening', owner: '@Rocket' },
  { id: 'B3', task: 'GitHub auth for Actions triage', owner: '@Carol' },
  { id: 'B4', task: 'Service page auto-generation', owner: '@tablet' },
  { id: 'B5', task: 'Thin page content enrichment', owner: '@Kilo' },
  { id: 'B6', task: 'Wave 209+ research pipeline', owner: '@tablet' },
];

// ── Components ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const color = status === '✅' ? 'bg-emerald-500/20 text-emerald-400'
    : status === '🔄' ? 'bg-amber-500/20 text-amber-400'
    : status === '⏳' ? 'bg-slate-500/20 text-slate-400'
    : status === 'ok' ? 'bg-emerald-500/20 text-emerald-400'
    : status === 'error' ? 'bg-red-500/20 text-red-400'
    : 'bg-slate-500/20 text-slate-400';
  return <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${color}`}>{status}</span>;
}

function PulseDot({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-3 w-3">
      {active && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
      <span className={`relative inline-flex rounded-full h-3 w-3 ${active ? 'bg-emerald-500' : 'bg-slate-500'}`}></span>
    </span>
  );
}

// ── Main Dashboard ─────────────────────────────────────────────────────────

export default function AgentDashboard() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeBots = BOT_ROSTER.filter(b => b.status === 'active').length;
  const totalWaves = WAVE_STATUS.length;
  const totalServices = WAVE_STATUS.reduce((sum, w) => sum + (parseInt(w.services.replace(/[^0-9]/g, '')) || 0), 80);
  const completedActions = DELEGATION_LOG.length;

  const filteredLog = useMemo(() => {
    if (filter === 'all') return DELEGATION_LOG;
    return DELEGATION_LOG.filter(e => e.bot.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold">⚡</div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Agent Operations Dashboard
              </h1>
              <p className="text-xs text-slate-400">Zion Tech Group — AI Fleet Monitor</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-slate-400">São Paulo Time</div>
              <div className="text-sm font-mono text-slate-200">{currentTime || '—'}</div>
            </div>
            <Link href="/" className="text-xs text-slate-400 hover:text-white transition border border-slate-700 rounded-lg px-3 py-1.5 hover:border-slate-500">
              ← Back to Site
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Active Agents</div>
            <div className="text-3xl font-bold text-emerald-400"><AnimatedCounter target={activeBots} /></div>
            <div className="text-xs text-slate-500 mt-1">of {BOT_ROSTER.length} total bots</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Waves Integrated</div>
            <div className="text-3xl font-bold text-purple-400"><AnimatedCounter target={totalWaves} /></div>
            <div className="text-xs text-slate-500 mt-1">waves 174-208</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Services</div>
            <div className="text-3xl font-bold text-pink-400"><AnimatedCounter target={totalServices} suffix="+" /></div>
            <div className="text-xs text-slate-500 mt-1">across all categories</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Actions Logged</div>
            <div className="text-3xl font-bold text-cyan-400"><AnimatedCounter target={completedActions} /></div>
            <div className="text-xs text-slate-500 mt-1">delegation entries</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column — Bots + Waves */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bot Fleet */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  🤖 Bot Fleet Status
                </h2>
                <span className="text-xs text-slate-400">{activeBots}/{BOT_ROSTER.length} active</span>
              </div>
              <div className="divide-y divide-slate-800">
                {BOT_ROSTER.map(bot => (
                  <div key={bot.name} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-800/50 transition">
                    <PulseDot active={bot.status === 'active'} />
                    <span className="text-2xl">{bot.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{bot.name}</div>
                      <div className="text-xs text-slate-400 truncate">{bot.role}</div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="text-xs text-slate-500 truncate max-w-[200px]">{bot.currentTask}</div>
                    </div>
                    <StatusBadge status={bot.status === 'active' ? '✅' : '🔵'} />
                  </div>
                ))}
              </div>
            </section>

            {/* Wave Integration Status */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold">🌊 Wave Integration Status</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-400 text-xs uppercase tracking-wider">
                      <th className="px-6 py-3 text-left">Wave</th>
                      <th className="px-6 py-3 text-left">Services</th>
                      <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {WAVE_STATUS.map(w => (
                      <tr key={w.wave} className="hover:bg-slate-800/50">
                        <td className="px-6 py-3 font-mono text-purple-300">{w.wave}</td>
                        <td className="px-6 py-3">{w.services}</td>
                        <td className="px-6 py-3"><StatusBadge status={w.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Task Board */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold">📋 Task Board</h2>
              </div>
              <div className="p-6 space-y-4">
                {/* P1 */}
                <div>
                  <h3 className="text-xs text-amber-400 uppercase tracking-wider mb-2 font-semibold">P1 — In Progress</h3>
                  <div className="space-y-2">
                    {P1_TASKS.map(t => (
                      <div key={t.id} className="flex items-center gap-3 bg-slate-800/50 rounded-lg px-4 py-2.5">
                        <span className="text-xs font-mono text-slate-500">{t.id}</span>
                        <span className="flex-1 text-sm">{t.task}</span>
                        <span className="text-xs text-purple-300">{t.owner}</span>
                        <StatusBadge status={t.status} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* P2 */}
                <div>
                  <h3 className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">P2 — Backlog</h3>
                  <div className="space-y-2">
                    {P2_TASKS.map(t => (
                      <div key={t.id} className="flex items-center gap-3 bg-slate-800/50 rounded-lg px-4 py-2.5">
                        <span className="text-xs font-mono text-slate-500">{t.id}</span>
                        <span className="flex-1 text-sm">{t.task}</span>
                        <span className="text-xs text-purple-300">{t.owner}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Blocked */}
                <div>
                  <h3 className="text-xs text-red-400 uppercase tracking-wider mb-2 font-semibold">🚫 Blocked</h3>
                  <div className="space-y-2">
                    {BLOCKED_TASKS.map(t => (
                      <div key={t.id} className="flex items-center gap-3 bg-red-500/5 border border-red-500/20 rounded-lg px-4 py-2.5">
                        <span className="text-xs font-mono text-red-400">{t.id}</span>
                        <span className="flex-1 text-sm">{t.task}</span>
                        <span className="text-xs text-red-300">{t.needs}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column — Cron + Activity Log */}
          <div className="space-y-6">
            {/* Cron Jobs */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold">⏰ Cron Jobs</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {CRON_JOBS.map(job => (
                  <div key={job.name} className="px-6 py-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{job.name}</span>
                      <StatusBadge status={job.status} />
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{job.interval}</span>
                      <span>Last: {job.lastRun}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Delegation Log */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <h2 className="text-lg font-semibold">📜 Activity Log</h2>
                <select
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg text-xs px-2 py-1 text-slate-300"
                >
                  <option value="all">All Bots</option>
                  <option value="@Kilo">@Kilo</option>
                  <option value="@Carol">@Carol</option>
                  <option value="@tablet">@tablet</option>
                  <option value="@OWL">@OWL</option>
                </select>
              </div>
              <div className="max-h-[600px] overflow-y-auto divide-y divide-slate-800">
                {filteredLog.reverse().map((entry, i) => (
                  <div key={i} className="px-6 py-3 hover:bg-slate-800/50 transition">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-500">{entry.time}</span>
                      <span className="text-xs text-purple-300 font-medium">{entry.bot}</span>
                    </div>
                    <div className="text-sm font-medium mb-0.5">{entry.action}</div>
                    <div className="text-xs text-slate-400">{entry.result}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Site Health */}
            <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800">
                <h2 className="text-lg font-semibold">🏥 Site Health</h2>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Site Status</span>
                  <div className="flex items-center gap-2">
                    <PulseDot active={true} />
                    <span className="text-sm text-emerald-400">200 OK</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Build</span>
                  <StatusBadge status="✅" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Type-check</span>
                  <StatusBadge status="✅" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Last Deploy</span>
                  <span className="text-xs text-slate-300">Wave 208</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">URL</span>
                  <a href="https://ziontechgroup.com" className="text-xs text-purple-400 hover:underline" target="_blank" rel="noopener">ziontechgroup.com</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-12 py-6 text-center text-xs text-slate-500">
        <p>Zion Tech Group — AI Agent Operations Dashboard</p>
        <p className="mt-1">Last updated: {currentTime || 'Loading...'}</p>
      </footer>
    </div>
  );
}
