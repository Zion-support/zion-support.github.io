import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';

export const metadata = {
  title: 'Pricing | Zion Tech Group',
  description: 'Flexible pricing and engagement models for AI and IT services, with transparent cost structures, payment terms, and ROI expectations.',
  openGraph: {
    title: 'Pricing | Zion Tech Group',
    description: 'Flexible pricing and engagement models for AI and IT services, with transparent cost structures and ROI expectations.',
    url: 'https://ziontechgroup.com/pricing/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/pricing/' },
};

export default function PricingPage() {
  return (
    <PageShell
      title="Pick a model, then we price the work"
      description="No mystery retainers. You get a written model, a first milestone, and the number that belongs to that scope."
      eyebrow="Transparent Pricing"
      align="center"
      canonical="https://ziontechgroup.com/pricing/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Request a proposal</Link>
          <Link href="/sla/" className="btn-secondary">Read SLA terms</Link>
        </>
      }
      ctaTitle="Need a number for your scope?"
      ctaDescription="Share systems, outcome, and deadline. We return a model, team shape, timeline, and estimated ROI."
    >
      <HubCards
        items={[
          {
            title: 'Time and materials',
            body: 'Hourly or daily rates for advisory and evolving builds. Best when the problem is clear but the path will change.',
            meta: 'Typical start: discovery week',
          },
          {
            title: 'Fixed price',
            body: 'Scoped deliverables, milestone payments, and acceptance criteria. Best when the outcome and systems are already known.',
            meta: 'Typical start: written SOW',
          },
          {
            title: 'Retainer',
            body: 'Monthly managed coverage with an SLA. Best for monitoring, cost control, and a named team that already knows the stack.',
            meta: 'Typical start: 30-day onboarding',
          },
        ]}
      />
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold text-white">What every proposal includes</h2>
        <HubCards
          columns={2}
          items={[
            { title: 'Scope you can defend', body: 'In and out of scope, systems touched, and the first production milestone.' },
            { title: 'Who does the work', body: 'Named roles, not a generic “blended team” line.' },
            { title: 'Commercials', body: 'Model, payment terms, and what happens if the scope moves.' },
            { title: 'Risk', body: 'Dependencies, access we need, and how incidents are handled after go-live.' },
          ]}
        />
      </section>
    </PageShell>
  );
}
