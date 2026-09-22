import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';

export const metadata = {
  title: 'Community | Zion Tech Group',
  description: 'Guides, partner programs, and briefings for AI and IT operators working with Zion Tech Group.',
  alternates: { canonical: '/community/' },
};

export default function CommunityPage() {
  return (
    <PageShell
      title="Stay close to the work"
      description="The useful parts of a community — guides, partner paths, and a briefing — without a dead Discord link."
      eyebrow="Community"
      align="center"
      canonical="https://ziontechgroup.com/community/"
      actions={
        <>
          <Link href="/newsletter/" className="btn-primary">Get the briefing</Link>
          <Link href="/blog/" className="btn-secondary">Read the blog</Link>
        </>
      }
    >
      <HubCards
        items={[
          { title: 'Newsletter', body: 'One practical note a month. No purchased lists.', href: '/newsletter/', meta: 'Briefing' },
          { title: 'Academy', body: 'Short learning paths mapped to work we actually deliver.', href: '/academy/', meta: 'Learn' },
          { title: 'Blog', body: 'Implementation guides for AI, cloud, security, and operations.', href: '/blog/', meta: 'Guides' },
          { title: 'Partners', body: 'Co-sell, integrate, or white-label with a written first-deal plan.', href: '/partners/', meta: 'Partners' },
          { title: 'Testimonials', body: 'What clients said after the system was in production.', href: '/testimonials/', meta: 'Proof' },
          { title: 'Contact', body: 'If you have a live problem, skip the feed and send a brief.', href: '/contact/', meta: 'Talk' },
        ]}
      />
    </PageShell>
  );
}
