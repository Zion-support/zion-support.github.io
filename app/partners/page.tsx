import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Partners | Zion Tech Group',
  description:
    'Partner with Zion Tech Group for co-selling, integrations, managed AI delivery, and joint go-to-market programs for client outcomes.',
  openGraph: {
    title: 'Partners | Zion Tech Group',
    description:
      'Partner programs, integrations, and joint GTM for AI and IT services providers.',
    url: 'https://ziontechgroup.com/partners/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/partners/' },
};

const tracks = [
  {
    title: 'Integrators',
    body: 'Connect AI and IT services into your platform or delivery practice with clear onboarding and support.',
  },
  {
    title: 'Resellers',
    body: 'Offer managed AI, cloud, and cybersecurity services under your brand with pricing and procurement support.',
  },
  {
    title: 'Alliances',
    body: 'Joint solutions, co-selling motions, and shared success plans for enterprise clients.',
  },
];

export default function PartnersPage() {
  return (
    <PageShell
      title="Partners"
      description="Co-selling, integration, and delivery partnerships for technology and services providers."
      eyebrow="Partner Program"
      eyebrowIcon="🤝"
      align="center"
      canonical="https://ziontechgroup.com/partners/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Partners' },
      ]}
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Become a partner</Link>
          <Link href="/proposals/" className="btn-secondary">Submit a proposal</Link>
        </>
      }
      ctaTitle="Let's build a partnership that grows revenue"
      ctaDescription="Tell us your market, clients, and capabilities. We will return a partnership plan with joint offers, onboarding, and support coverage."
    >
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {tracks.map((track) => (
          <div key={track.title} className="page-card">
            <h2 className="mb-2 text-2xl font-bold text-white">{track.title}</h2>
            <p className="leading-relaxed text-slate-300">{track.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
