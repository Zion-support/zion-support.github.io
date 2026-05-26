// app/portal/projects/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Project Dashboard',
  description:
    'Active project dashboards, milestones, team assignments, and status updates.',
};

const projects = [
  {
    name: 'AI Customer Support Rollout',
    status: 'In Progress',
    progress: 65,
    color: 'bg-purple-500',
    team: ['AL', 'JM', 'RK', 'TW'],
    nextMilestone: 'Phase 2 Deployment — Jun 15',
    lastActivity: '3 hours ago',
  },
  {
    name: 'Cloud Migration — Phase 2',
    status: 'Planning',
    progress: 15,
    color: 'bg-blue-500',
    team: ['JM', 'TW'],
    nextMilestone: 'Architecture Review — Jun 8',
    lastActivity: '1 day ago',
  },
  {
    name: 'Security Audit & Hardening',
    status: 'In Review',
    progress: 90,
    color: 'bg-green-500',
    team: ['RK', 'AL'],
    nextMilestone: 'Final Report Delivery — Jun 3',
    lastActivity: '6 hours ago',
  },
  {
    name: 'Data Pipeline Optimization',
    status: 'On Hold',
    progress: 40,
    color: 'bg-amber-500',
    team: ['TW', 'JM'],
    nextMilestone: 'Awaiting vendor API update',
    lastActivity: '4 days ago',
  },
];

const timelineItems = [
  { date: 'May 28', event: 'Security audit — penetration testing completed', project: 'Security Audit & Hardening' },
  { date: 'May 26', event: 'AI workflow v2 deployed to staging', project: 'AI Customer Support Rollout' },
  { date: 'May 22', event: 'Cloud Migration Phase 2 scoping approved', project: 'Cloud Migration — Phase 2' },
  { date: 'May 19', event: 'Initial vulnerability scan results delivered', project: 'Security Audit & Hardening' },
];

export default function ProjectsPage() {
  return (
    <div className="container-page py-16">
      <Link
        href="/portal/"
        className="text-purple-400 hover:text-purple-300 text-sm mb-6 inline-block"
      >
        &larr; Back to Client Portal
      </Link>

      {/* Header */}
      <div className="glass-card max-w-4xl mb-8">
        <div className="text-5xl mb-4">&#x1F4CA;</div>
        <h1 className="text-4xl font-bold text-white mb-4">Project Dashboard</h1>
        <p className="text-slate-400 mb-8">
          Track active projects, milestones, and status updates in real time.
        </p>

        {/* Project Summary Bar */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-slate-700/60">
          <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Active Projects</p>
            <p className="text-xl font-bold text-white">{projects.length}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider">In Progress</p>
            <p className="text-xl font-bold text-purple-400">
              {projects.filter((p) => p.status === 'In Progress').length}
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Avg Progress</p>
            <p className="text-xl font-bold text-white">
              {Math.round(projects.reduce((s, p) => s + p.progress, 0) / projects.length)}%
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Next Milestone</p>
            <p className="text-xl font-bold text-green-400">Jun 3</p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-purple-500/30 transition"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full border self-start ${
                    p.status === 'In Progress'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                      : p.status === 'Planning'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        : p.status === 'In Review'
                          ? 'bg-green-500/20 text-green-300 border-green-500/30'
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}
                >
                  {p.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                <div
                  className={`${p.color} h-full rounded-full transition-all`}
                  style={{ width: `${p.progress}%` }}
                />
              </div>
              <p className="text-slate-500 text-xs mb-3">{p.progress}% complete</p>

              {/* Details Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <span className="text-purple-400 font-medium">Next:</span>
                  <span>{p.nextMilestone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-slate-500">Team:</span>
                  <div className="flex -space-x-1.5">
                    {p.team.map((init, ti) => (
                      <span
                        key={ti}
                        className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-[10px] font-bold text-white"
                        title={init}
                      >
                        {init}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-slate-500">Updated:</span>
                  <span>{p.lastActivity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Timeline */}
      <div className="glass-card max-w-4xl mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-0 divide-y divide-slate-700/40">
          {timelineItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
              {/* Date Badge */}
              <div className="shrink-0 w-20 pt-0.5">
                <span className="text-xs font-mono text-slate-500 bg-slate-800/80 px-2 py-1 rounded-md">
                  {item.date}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm">{item.event}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.project}</p>
              </div>
              {/* Dot */}
              <div className="shrink-0 mt-1.5">
                <span className="block w-2 h-2 rounded-full bg-purple-500/60" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto p-4 bg-green-950/30 rounded-xl border border-green-500/20">
        <p className="text-green-300 text-sm">
          Need to request a change or check on a milestone?{' '}
          <a href="/contact/" className="underline hover:text-green-200">
            Contact your project manager
          </a>{' '}
          or call{' '}
          <a href="tel:+13024350950" className="underline">
            +1 302 435 0950
          </a>
          .
        </p>
      </div>
    </div>
  );
}
