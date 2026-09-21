import AudiencePage from '@/components/AudiencePage';

export const metadata = {
  title: 'Providers | Zion Tech Group',
  description: 'Partner and delivery programs for technology providers working with Zion Tech Group.',
  alternates: { canonical: '/providers/' },
};

export default function ProvidersPage() {
  return (
    <AudiencePage
      title="Providers"
      description="Technology providers that want to package Zion AI, cloud, and managed services into their own offers."
      eyebrow="Ecosystem"
      path="/providers/"
      cards={[
        { title: 'Co-sell', body: 'Joint proposals, shared pricing, and a clear delivery handoff.' },
        { title: 'Integrate', body: 'Connect your platform to Zion services with documented APIs and runbooks.' },
        { title: 'Support', body: 'Escalation paths and SLA coverage so your customers stay supported.' },
      ]}
    />
  );
}
