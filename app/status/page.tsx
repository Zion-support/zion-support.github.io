import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'System Status | Zion Tech Group',
  description: 'Real-time status of Zion Tech Group services.',
  alternates: { canonical: '/status/' },
};

const systems = [
  { name: 'Website & catalog', status: 'Operational', detail: 'Public pages, sitemap, and service catalog.' },
  { name: 'Contact & scheduling', status: 'Operational', detail: 'Email, phone, Calendly, and proposal intake.' },
  { name: 'Client portal', status: 'Operational', detail: 'Tickets, billing, projects, and knowledge base.' },
];

export default function StatusAlias() {
  return (
    <PageShell
      title="System Status"
      description="Live platform health for Zion Tech Group public services and client operations."
      eyebrow="Status"
      align="center"
      canonical="https://ziontechgroup.com/status/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'System Status' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {systems.map((system) => (
          <div key={system.name} className="page-card">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">{system.status}</div>
            <h2 className="text-xl font-semibold text-white">{system.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{system.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/agents-monitoring/" className="text-purple-300 hover:text-purple-200">Open agent monitoring →</Link>
      </div>
    </PageShell>
  );
}
