import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';

export const metadata = {
  title: 'Service Level Agreements | Zion Tech Group',
  description: 'Uptime, response, and reporting commitments for managed AI and IT services from Zion Tech Group.',
  alternates: { canonical: '/sla/' },
};

export default function Page() {
  return (
    <PageShell
      title="Service Level Agreements"
      description="Written commitments for uptime, incident response, and monthly review — attached to managed work, not to a marketing page."
      eyebrow="Reliability"
      align="center"
      canonical="https://ziontechgroup.com/sla/"
      actions={
        <>
          <Link href="/pricing/" className="btn-primary">Pricing models</Link>
          <Link href="/contact/" className="btn-secondary">Ask for a sample SLA</Link>
        </>
      }
    >
      <HubCards
        items={[
          { title: 'Uptime', body: '99.9% availability target for managed platforms, with published maintenance windows and a written exception list.' },
          { title: 'Response', body: 'Critical incidents acknowledged within one business hour during contracted coverage. Severity definitions live in the SOW.' },
          { title: 'Reporting', body: 'Monthly service review: incidents, changes, cost movement, and the next improvement we will actually do.' },
          { title: 'Coverage window', body: 'Set per contract. Many clients start with business-hours coverage and expand after the first quarter.' },
          { title: 'Escalation', body: 'Named owner, backup, and a path to a principal engineer when the runbook is not enough.' },
          { title: 'Credits', body: 'Service credits, if any, are written into the agreement — we do not hide them in a footnote.' },
        ]}
      />
    </PageShell>
  );
}
