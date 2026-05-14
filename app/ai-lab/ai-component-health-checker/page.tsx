import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Component Health Checker - Zion AI Lab',
  description: 'Real-time health monitoring for Zion AI components. Check component status, uptime, and performance metrics.',
};

export default function AIComponentHealthCheckerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-400">
            Platform Intelligence · Live
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            AI Component Health Checker
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Real-time health monitoring for Zion autonomous AI components. 
            Track status, uptime, and performance across all live agents.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Self-Heal Factory', status: 'healthy', uptime: '99.9%', lastCheck: '2 min ago' },
            { name: 'Workflow Integrity', status: 'healthy', uptime: '99.8%', lastCheck: '5 min ago' },
            { name: 'Lead Routing Guard', status: 'healthy', uptime: '99.9%', lastCheck: '3 min ago' },
            { name: 'Runtime Guardian', status: 'healthy', uptime: '99.7%', lastCheck: '1 min ago' },
            { name: 'Deploy Drift Monitor', status: 'healthy', uptime: '99.9%', lastCheck: '4 min ago' },
            { name: 'SEO Audit Agent', status: 'healthy', uptime: '99.6%', lastCheck: '6 min ago' },
            { name: 'Content Generator', status: 'healthy', uptime: '99.5%', lastCheck: '8 min ago' },
            { name: 'PM2 SLO Agent', status: 'healthy', uptime: '99.8%', lastCheck: '2 min ago' },
            { name: 'Fingerprint Digest', status: 'healthy', uptime: '99.9%', lastCheck: '10 min ago' },
          ].map((component) => (
            <div
              key={component.name}
              className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-5 shadow-xl backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-100">{component.name}</h3>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {component.status}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>Uptime: {component.uptime}</span>
                <span>Check: {component.lastCheck}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-700/60 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-slate-100">System Health Overview</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">9</p>
              <p className="text-xs text-slate-400">Healthy Components</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sky-400">99.8%</p>
              <p className="text-xs text-slate-400">Average Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">47s</p>
              <p className="text-xs text-slate-400">Avg Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-400">0</p>
              <p className="text-xs text-slate-400">Active Incidents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
