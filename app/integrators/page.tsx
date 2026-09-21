import AudiencePage from '@/components/AudiencePage';

export const metadata = {
  title: 'Integrators | Zion Tech Group',
  description: 'System integrators delivering Zion AI and IT services inside client programs.',
  alternates: { canonical: '/integrators/' },
};

export default function IntegratorsPage() {
  return (
    <AudiencePage
      title="Integrators"
      description="System integrators that embed Zion delivery into enterprise transformation programs."
      eyebrow="Ecosystem"
      path="/integrators/"
      cards={[
        { title: 'Architecture', body: 'Reference designs for AI, cloud, and security programs.' },
        { title: 'Delivery', body: 'Staff augmentation and managed pods that work inside your PMO.' },
        { title: 'Enablement', body: 'Playbooks, training, and reusable accelerators for repeatable delivery.' },
      ]}
    />
  );
}
