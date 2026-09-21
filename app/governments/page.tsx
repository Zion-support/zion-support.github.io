import AudiencePage from '@/components/AudiencePage';

export const metadata = {
  title: 'Governments | Zion Tech Group',
  description: 'AI and IT services for public-sector programs, citizen services, and compliance operations.',
  alternates: { canonical: '/governments/' },
};

export default function GovernmentsPage() {
  return (
    <AudiencePage
      title="Governments"
      description="Public-sector programs that need secure AI, citizen services, and compliance-ready operations."
      eyebrow="Public sector"
      path="/governments/"
      cards={[
        { title: 'Citizen services', body: 'Faster intake, routing, and case handling with audit-ready logs.' },
        { title: 'Compliance', body: 'Controls and evidence packages aligned to procurement and security reviews.' },
        { title: 'Modernization', body: 'Cloud, data, and automation programs that reduce operational cost.' },
      ]}
    />
  );
}
