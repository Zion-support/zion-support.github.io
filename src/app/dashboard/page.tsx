'use client';

import { useState } from 'react';
import {
  INITIAL_AGENT_LOGS,
  INITIAL_AGENT_STATUS,
  WAVE_DATA,
  CRON_JOBS,
  TASKS,
  type AgentLogEntry,
  type AgentStatus,
} from '@/app/data/agent-logs';

type Tab = 'overview' | 'agents' | 'activity' | 'waves' | 'tasks';

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    active: 'bg-green-500/20 text-green-400',
    available: 'bg-blue-500/20 text-blue-400',
    idle: 'bg-slate-500/20 text-slate-400',
    ok: 'bg-green-500/20 text-green-400',
    done: 'bg-green-500/20 text-green-400',
    'in-progress': 'bg-yellow-500/20 text-yellow-400',
    queued: 'bg-slate-500/20 text-slate-400',
    blocked: 'bg-red-500/20 text-red-400',
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[status] || 'bg-slate-500/20 text-slate-400'}`}>
      {status}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    wave: 'bg-purple-500/20 text-purple-400',
    fix: 'bg-red-500/20 text-red-400',
    integration: 'bg-blue-500/20 text-blue-400',
    research: 'bg-cyan-500/20 text-cyan-400',
    quality: 'bg-green-500/20 text-green-400',
    infra: 'bg-orange-500/20 text-orange-400',
    coordination: 'bg-yellow-500/20 text-yellow-400',
    deploy: 'bg-emerald-500/20 text-emerald-400',
    design: 'bg-pink-500/20 text-pink-400',
    monitoring: 'bg-indigo-500/20 text-indigo-400',
    security: 'bg-red-500/20 text-red-400',
  };
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${colors[category] || 'bg-slate-500/20 text-slate-400'}`}>
      {category}
    </span>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'overview', label: 'Overview', icon: '📊' },
    { key: 'agents', label: 'Agents', icon: '🤖' },
    { key: 'activity', label: 'Activity Log', icon: '📋' },
    { key: 'waves', label: 'Waves', icon: '🌊' },
    { key: 'tasks', label: 'Task Board', icon: '✅' },
  ];

  const totalServices = WAVE_DATA.reduce((sum, w) => sum + w.services, 0);
  const totalWaves = WAVE_DATA.length;
  const activeAgents = INITIAL_AGENT_STATUS.filter(s => s.status === 'active').length;
  const totalTasksCompleted = TASKS.filter(t => t.status === 'done').length;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🤖 Agent Operations Dashboard
              </h1>
              <p className="text-slate-400 text-sm mt-1">Real-time monitoring of Zion Tech Group AI agent fleet</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-400 font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 text-center">
              <div className="text-3xl font-bold text-purple-400">{totalWaves}</div>
              <div className="text-xs text-slate-400 mt-1">Waves Deployed</div>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 text-center">
              <div className="text-3xl font-bold text-pink-400">{totalServices}</div>
              <div className="text-xs text-slate-400 mt-1">Services Cataloged</div>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 text-center">
              <div className="text-3xl font-bold text-green-400">{activeAgents}</div>
              <div className="text-xs text-slate-400 mt-1">Active Agents</div>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 text-center">
              <div className="text-3xl font-bold text-cyan-400">{INITIAL_AGENT_LOGS.length}</div>
              <div className="text-xs text-slate-400 mt-1">Logged Actions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.key
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Agent fleet */}
            <div>
              <h2 className="text-lg font-semibold text-slate-200 mb-4">Agent Fleet Status</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {INITIAL_AGENT_STATUS.map((agent, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{agent.emoji}</span>
                        <div>
                          <h3 className="font-semibold text-slate-100">{agent.name}</h3>
                          <p className="text-xs text-slate-500">{agent.telegram}</p>
                        </div>
                      </div>
                      <StatusBadge status={agent.status} />
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{agent.role}</p>
                    <p className="text-xs text-slate-500 mb-3">Current: {agent.currentTask}</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-slate-700/30 p-2">
                        <div className="text-sm font-bold text-slate-200">{agent.tasksCompleted}</div>
                        <div className="text-[10px] text-slate-500">Tasks</div>
                      </div>
                      <div className="rounded-lg bg-slate-700/30 p-2">
                        <div className="text-sm font-bold text-slate-200">{agent.todayActions}</div>
                        <div className="text-[10px] text-slate-500">Today</div>
                      </div>
                      <div className="rounded-lg bg-slate-700/30 p-2">
                        <div className="text-sm font-bold text-slate-200">{agent.uptime}</div>
                        <div className="text-[10px] text-slate-500">Uptime</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div>
              <h2 className="text-lg font-semibold text-slate-200 mb-4">Recent Activity</h2>
              <div className="space-y-2">
                {INITIAL_AGENT_LOGS.slice(0, 5).map((log, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-700/30 bg-slate-800/20 p-3">
                    <CategoryBadge category={log.category} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-200">{log.action}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{log.result.slice(0, 120)}...</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-slate-500">{log.timestamp.split(' ')[0]}</div>
                      {log.duration && <div className="text-xs text-slate-600">{log.duration}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cron jobs */}
            <div>
              <h2 className="text-lg font-semibold text-slate-200 mb-4">Scheduled Jobs</h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {CRON_JOBS.map((job, i) => (
                  <div key={i} className="rounded-lg border border-slate-700/30 bg-slate-800/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-200">{job.name}</span>
                      <StatusBadge status={job.status} />
                    </div>
                    <div className="text-xs text-slate-500">Every {job.interval} · Last: {job.lastRun}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="space-y-4">
            {INITIAL_AGENT_STATUS.map((agent, i) => (
              <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{agent.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-slate-100">{agent.name}</h3>
                      <StatusBadge status={agent.status} />
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{agent.telegram} · {agent.role}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      <div className="rounded-lg bg-slate-700/30 p-3 text-center">
                        <div className="text-lg font-bold text-purple-400">{agent.tasksCompleted}</div>
                        <div className="text-[10px] text-slate-500">Tasks Completed</div>
                      </div>
                      <div className="rounded-lg bg-slate-700/30 p-3 text-center">
                        <div className="text-lg font-bold text-green-400">{agent.todayActions}</div>
                        <div className="text-[10px] text-slate-500">Today</div>
                      </div>
                      <div className="rounded-lg bg-slate-700/30 p-3 text-center">
                        <div className="text-lg font-bold text-cyan-400">{agent.weekActions}</div>
                        <div className="text-[10px] text-slate-500">This Week</div>
                      </div>
                      <div className="rounded-lg bg-slate-700/30 p-3 text-center">
                        <div className="text-lg font-bold text-emerald-400">{agent.uptime}</div>
                        <div className="text-[10px] text-slate-500">Uptime</div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-300">
                      <span className="text-slate-500">Current:</span> {agent.currentTask}
                    </div>
                    <div className="text-sm text-slate-300">
                      <span className="text-slate-500">Last:</span> {agent.lastAction}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Specialty: {agent.specialty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-2">
            {INITIAL_AGENT_LOGS.map((log, i) => (
              <div key={i} className="rounded-lg border border-slate-700/30 bg-slate-800/20 p-4">
                <div className="flex items-start gap-3">
                  <CategoryBadge category={log.category} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-400">{log.bot}</span>
                      <span className="text-xs text-slate-600">{log.timestamp}</span>
                      {log.duration && <span className="text-xs text-slate-600">· {log.duration}</span>}
                    </div>
                    <p className="text-sm font-medium text-slate-200">{log.action}</p>
                    <p className="text-xs text-slate-400 mt-1">{log.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'waves' && (
          <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {WAVE_DATA.map((wave, i) => (
                <div key={i} className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-100">Wave {wave.wave}</h3>
                    <StatusBadge status={wave.status} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-slate-700/30 p-3 text-center">
                      <div className="text-xl font-bold text-purple-400">{wave.services}</div>
                      <div className="text-[10px] text-slate-500">Services</div>
                    </div>
                    <div className="rounded-lg bg-slate-700/30 p-3 text-center">
                      <div className="text-sm font-medium text-slate-300 mt-1">{wave.integrator}</div>
                      <div className="text-[10px] text-slate-500">Integrator</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-2">
            {TASKS.map((task, i) => (
              <div key={i} className="flex items-center gap-4 rounded-lg border border-slate-700/30 bg-slate-800/20 p-4">
                <StatusBadge status={task.status} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">{task.id}</span>
                    <span className="text-sm font-medium text-slate-200">{task.task}</span>
                  </div>
                  {task.note && <p className="text-xs text-slate-500 mt-0.5">{task.note}</p>}
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-slate-400">{task.owner}</div>
                  <div className="text-[10px] text-slate-600">{task.priority}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-slate-600">
          Zion Tech Group · Agent Operations Dashboard · {totalWaves} waves · {totalServices} services · {INITIAL_AGENT_STATUS.length} agents
        </div>
      </div>
    </div>
  );
}
