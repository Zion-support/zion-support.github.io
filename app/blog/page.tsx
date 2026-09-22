import Link from 'next/link';
import PageShell from '@/components/PageShell';
import CatalogBrowser from '@/components/CatalogBrowser';
import { blogIndex } from '@/data/blogIndex';

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Practical guides on AI, automation, IT operations, cloud, security, and enterprise implementation from Zion Tech Group.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndex() {
  const items = blogIndex.map((post) => ({
    href: `/blog/${post.slug}/`,
    title: post.title,
    excerpt: post.excerpt,
    topics: post.topics,
    featured: post.featured,
  }));

  return (
    <PageShell
      title="Field notes on AI and IT"
      description="Implementation guides for operators and buyers — automation, security, cloud, and delivery. Written to ship, not to decorate a slide."
      eyebrow="Insights"
      align="center"
      canonical="https://ziontechgroup.com/blog/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Request a custom playbook</Link>
          <Link href="/case-studies/" className="btn-secondary">See client results</Link>
        </>
      }
      ctaTitle="Want a brief written for your stack?"
      ctaDescription="Tell us the systems you run and the outcome you want. We will return a short implementation note with services, timeline, and expected ROI."
    >
      <CatalogBrowser items={items} searchPlaceholder="Search AI, cloud, security, operations…" />
    </PageShell>
  );
}
