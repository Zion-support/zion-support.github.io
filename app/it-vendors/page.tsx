import AudiencePage from '@/components/AudiencePage';

export const metadata = {
  title: 'IT Vendors | Zion Tech Group',
  description: 'IT vendors extending their catalog with Zion AI, automation, and managed services.',
  alternates: { canonical: '/it-vendors/' },
};

export default function ITVendorsPage() {
  return (
    <AudiencePage
      title="IT Vendors"
      description="IT vendors that want to add AI, automation, and managed operations to an existing catalog."
      eyebrow="Ecosystem"
      path="/it-vendors/"
      cards={[
        { title: 'Catalog', body: 'White-label or co-branded services with clear SKUs and SLAs.' },
        { title: 'Operations', body: 'Zion-run delivery so you can sell without standing up a new practice.' },
        { title: 'Revenue', body: 'Transparent margins and a partner desk for deal support.' },
      ]}
    />
  );
}
