import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Support Tickets — Client Portal',
  description: 'Track and manage your support requests.',
  alternates: { canonical: '/portal/tickets/' },
};

export default function TicketsPage() {
  const tickets = [
    { id: 'TKT-0042', title: 'AI workflow failing on data validation step', status: 'Open', priority: 'High', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
    { id: 'TKT-0041', title: 'API key rotation — scheduled maintenance', status: 'Resolved', priority: 'Low', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
    { id: 'TKT-0040', title: 'Integration with Salesforce CRM', status: 'In Progress', priority: 'Medium', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  ];

  return (
    <PageShell
      title="Support Tickets"
      description="Track and manage your support requests. We respond within SLA timeframes."
      eyebrow="Client Portal"
      align="center"
      canonical="https://ziontechgroup.com/portal/tickets/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Client Portal', href: '/portal' },
        { label: 'Support Tickets' },
      ]}
    >
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="page-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-slate-500">{ticket.id}</span>
                <h3 className="mt-1 font-semibold text-white">{ticket.title}</h3>
              </div>
              <span className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-bold ${ticket.color}`}>{ticket.status}</span>
            </div>
            <div className="mt-2 text-xs text-slate-500">Priority: {ticket.priority}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
