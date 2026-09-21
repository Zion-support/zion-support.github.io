import AudiencePage from '@/components/AudiencePage';

export const metadata = {
  title: 'Business Customers | Zion Tech Group',
  description: 'AI and IT services for mid-market and enterprise business customers.',
  alternates: { canonical: '/business-customers/' },
};

export default function BusinessCustomersPage() {
  return (
    <AudiencePage
      title="Business Customers"
      description="Mid-market and enterprise teams that need reliable AI, IT operations, and measurable ROI."
      eyebrow="Customers"
      path="/business-customers/"
      cards={[
        { title: 'Outcomes', body: 'Scoped work with milestones, acceptance criteria, and reported ROI.' },
        { title: 'Operations', body: 'Managed AI, cloud, and support that stay online after go-live.' },
        { title: 'Trust', body: 'Security, compliance, and a named delivery team from day one.' },
      ]}
    />
  );
}
