import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  alternates: { canonical: '/portal' },
  title: 'Client Portal — Zion Tech Group',
  description: 'Access client dashboards, support tickets, billing, and knowledge base in the Zion Tech Group portal.',
};

const cards = [
  { title: 'Support Tickets', href: '/portal/tickets', desc: 'Track and manage your support requests' },
  { title: 'Billing & Invoices', href: '/portal/billing', desc: 'View invoices, payment methods, and billing history' },
  { title: 'Knowledge Base', href: '/portal/kb', desc: 'Documentation, guides, and how-tos' },
  { title: 'Projects', href: '/portal/projects', desc: 'Active project dashboards and milestones' },
];

export default function PortalPage() {
  return (
    <PageShell
      title="Client Portal"
      description="Access your dashboards, support tickets, billing, and knowledge base."
      eyebrow="Clients"
      align="center"
      canonical="https://ziontechgroup.com/portal/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Client Portal' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="page-card hover:border-purple-500/40">
            <h2 className="mb-2 font-semibold text-white">{card.title}</h2>
            <p className="text-sm text-slate-400">{card.desc}</p>
            <span className="mt-3 inline-block text-xs font-semibold text-purple-300">Open →</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
