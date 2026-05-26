// app/portal/tickets/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Support Tickets',
  description:
    'Track and manage your support requests with real-time status updates and SLA tracking.',
};

const tickets = [
  {
    id: 'TKT-0043',
    title: 'Rate limiting on /v2/search endpoint',
    status: 'Open',
    priority: 'High',
    color: 'bg-red-500/20 text-red-300 border-red-500/30',
    assignee: 'Sarah Chen',
    updated: '30 min ago',
    sla: '4h remaining',
  },
  {
    id: 'TKT-0042',
    title: 'AI workflow failing on data validation step',
    status: 'Open',
    priority: 'High',
    color: 'bg-red-500/20 text-red-300 border-red-500/30',
    assignee: 'Mike Park',
    updated: '2 hours ago',
    sla: '6h remaining',
  },
  {
    id: 'TKT-0041',
    title: 'API key rotation — scheduled maintenance',
    status: 'Resolved',
    priority: 'Low',
    color: 'bg-green-500/20 text-green-300 border-green-500/30',
    assignee: 'Operations',
    updated: '1 day ago',
    sla: 'Completed',
  },
  {
    id: 'TKT-0040',
    title: 'Integration with Salesforce CRM',
    status: 'In Progress',
    priority: 'Medium',
    color: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    assignee: 'Lisa Tran',
    updated: '4 hours ago',
    sla: '12h remaining',
  },
  {
    id: 'TKT-0039',
    title: 'Dashboard reporting discrepancy — May invoices',
    status: 'Pending Review',
    priority: 'Medium',
    color: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    assignee: 'Raj Kumar',
    updated: '1 day ago',
    sla: 'Overdue by 2h',
  },
  {
    id: 'TKT-0038',
    title: 'New user onboarding — permissions request',
    status: 'Resolved',
    priority: 'Low',
    color: 'bg-green-500/20 text-green-300 border-green-500/30',
    assignee: 'Operations',
    updated: '3 days ago',
    sla: 'Completed',
  },
];

export default function TicketsPage() {
  const openCount = tickets.filter((t) => t.status === 'Open').length;
  const inProgressCount = tickets.filter((t) => t.status === 'In Progress').length;
  const slaAtRisk = tickets.filter((t) => t.sla.includes('remaining') && !t.sla.includes('12h')).length;

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
        <div className="text-5xl mb-4">&#x1F3AB;</div>
        <h1 className="text-4xl font-bold text-white mb-4">Support Tickets</h1>
        <p className="text-slate-400 mb-8">
          Track and manage your support requests. We respond within SLA timeframes.
        </p>

        {/* Ticket Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Open</p>
            <p className="text-2xl font-bold text-white">{openCount}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
              In Progress
            </p>
            <p className="text-2xl font-bold text-amber-400">{inProgressCount}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Resolved</p>
            <p className="text-2xl font-bold text-green-400">
              {tickets.filter((t) => t.status === 'Resolved').length}
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">SLA At Risk</p>
            <p className={`text-2xl font-bold ${slaAtRisk > 0 ? 'text-red-400' : 'text-green-400'}`}>
              {slaAtRisk}
            </p>
          </div>
        </div>

        {/* Filter Bar Placeholder */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pb-5 border-b border-slate-700/60">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 rounded-lg border border-slate-700">
            <span className="text-xs text-slate-500">Status:</span>
            <span className="text-xs text-white font-medium">All</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 rounded-lg border border-slate-700">
            <span className="text-xs text-slate-500">Priority:</span>
            <span className="text-xs text-white font-medium">All</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 rounded-lg border border-slate-700">
            <span className="text-xs text-slate-500">Sort:</span>
            <span className="text-xs text-white font-medium">Newest</span>
          </div>
          <button className="ml-auto text-xs text-purple-400 bg-purple-900/30 border border-purple-500/30 px-4 py-2 rounded-lg hover:bg-purple-900/50 transition">
            + New Ticket
          </button>
        </div>

        {/* Ticket List */}
        <div className="space-y-3">
          {tickets.map((t, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-purple-500/30 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-500 font-mono">{t.id}</span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full border ${t.color}`}
                    >
                      {t.status}
                    </span>
                    <span className="text-xs text-slate-500">
                      Priority: {t.priority}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mt-1 truncate">{t.title}</h3>
                </div>
              </div>

              {/* Meta Row */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="text-slate-600">Assignee:</span>
                  <span className="text-white/80">{t.assignee}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-slate-600">Updated:</span>
                  <span>{t.updated}</span>
                </span>
                <span
                  className={`flex items-center gap-1 ${
                    t.sla.startsWith('Overdue')
                      ? 'text-red-400'
                      : t.sla === 'Completed'
                        ? 'text-green-400'
                        : 'text-amber-400'
                  }`}
                >
                  <span className="text-slate-600">SLA:</span>
                  <span className="font-medium">{t.sla}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto p-4 bg-purple-950/30 rounded-xl border border-purple-500/20">
        <p className="text-purple-300 text-sm">
          Have a new issue or question?{' '}
          <a href="/contact/" className="underline hover:text-purple-200">
            Submit a support ticket
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
