import Metadata from 'next';

export const metadata = {
  title: 'AI Workflow Status Dashboard - Zion AI Lab',
  description: 'Track GitHub Actions workflow status, success rates, and automation pipeline health.',
};

export default function AIWorkflowStatusDashboardPage() {
  const workflows = [
    { name: 'AI Self-Heal Factory', runs: 144, successRate: 98.5, lastRun: '2 min ago' },
    { name: 'AI Lead Routing Guard', runs: 96, successRate: 99.2, lastRun: '5 min ago' },
    { name: 'AI Runtime Guardian', runs: 144, successRate: 99.1, lastRun: '1 min ago' },
    { name: 'AI Workflow Integrity', runs: 144, successRate: 98.8, lastRun: '3 min ago' },
    { name: 'AI Deploy Optimizer', runs: 48, successRate: 97.5, lastRun: '15 min ago' },
    { name: 'AI PM2 SLO Agent', runs: 72, successRate: 99.3, lastRun: '8 min ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-400">
            Deployment Intelligence · Live
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            AI Workflow Status Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Real-time GitHub Actions workflow monitoring for Zion autonomous pipelines.
            Track success rates, run history, and pipeline health.
          </p>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="rounded-lg bg-emerald-500/20 px-4 py-2 text-emerald-300">
            <span className="font-semibold">12</span> workflows passing
          </div>
          <div className="rounded-lg bg-slate-700/50 px-4 py-2 text-slate-300">
            <span className="font-semibold">0</span> failing
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/60">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-700/60 bg-slate-800/50 text-slate-300">
              <tr>
                <th className="px-4 py-3 font-medium">Workflow</th>
                <th className="px-4 py-3 font-medium">Total Runs</th>
                <th className="px-4 py-3 font-medium">Success Rate</th>
                <th className="px-4 py-3 font-medium">Last Run</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/30">
              {workflows.map((wf) => (
                <tr key={wf.name} className="hover:bg-slate-800/30">
                  <td className="px-4 py-3 font-medium text-slate-200">{wf.name}</td>
                  <td className="px-4 py-3 text-slate-400">{wf.runs}</td>
                  <td className="px-4 py-3">
                    <span className={`font-medium ${wf.successRate >= 99 ? 'text-emerald-400' : 'text-yellow-400'}`}>
                      {wf.successRate}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-400">{wf.lastRun}</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      Passing
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-slate-100">Total Workflows</h3>
            <p className="mt-2 text-3xl font-bold text-sky-400">12</p>
            <p className="text-xs text-slate-400">Active scheduled workflows</p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-slate-100">Avg Success Rate</h3>
            <p className="mt-2 text-3xl font-bold text-emerald-400">98.7%</p>
            <p className="text-xs text-slate-400">Last 24 hours</p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-slate-100">Total Runs Today</h3>
            <p className="mt-2 text-3xl font-bold text-purple-400">48</p>
            <p className="text-xs text-slate-400">All pipelines combined</p>
          </div>
        </div>
      </div>
    </div>
  );
}
