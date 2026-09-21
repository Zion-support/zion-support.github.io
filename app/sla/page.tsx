import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Service Level Agreements | Zion Tech Group',
  description: 'Our commitment to uptime, performance, and support response times.',
  alternates: { canonical: '/sla/' },
};

const commitments = [
  { title: 'Uptime', body: '99.9% availability target for managed platforms, with published maintenance windows.' },
  { title: 'Response', body: 'Critical incidents acknowledged within one business hour during contracted coverage.' },
  { title: 'Reporting', body: 'Monthly service reviews covering incidents, changes, and improvement actions.' },
];

export default function Page() {
  return (
    <PageShell
      title="Service Level Agreements"
      description="Our commitment to uptime, performance, and support response times for managed AI and IT services."
      eyebrow="Reliability"
      align="center"
      canonical="https://ziontechgroup.com/sla/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'SLA' },
      ]}
      actions={
        <>
          <Link href="/pricing/" className="btn-primary">Pricing plans</Link>
          <Link href="/contact/" className="btn-secondary">Contact sales</Link>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {commitments.map((item) => (
          <div key={item.title} className="page-card">
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{item.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
