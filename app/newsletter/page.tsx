import Link from 'next/link';
import PageShell from '@/components/PageShell';
import ContactInquiryForm from '@/components/ContactInquiryForm';
import HubCards from '@/components/HubCards';

export const metadata = {
  title: 'Newsletter | Zion Tech Group',
  description: 'A short monthly briefing on AI delivery, IT operations, and what Zion is shipping.',
  alternates: { canonical: '/newsletter/' },
};

export default function NewsletterPage() {
  return (
    <PageShell
      title="A short briefing, not a blast"
      description="One note a month: what we shipped, what broke in the field, and which AI or IT move is actually worth the budget."
      eyebrow="Newsletter"
      align="center"
      canonical="https://ziontechgroup.com/newsletter/"
      actions={
        <>
          <Link href="/blog/" className="btn-primary">Read the blog</Link>
          <Link href="/contact/" className="btn-secondary">Talk to us instead</Link>
        </>
      }
      showCta={false}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactInquiryForm mode="newsletter" heading="Subscribe" />
        <HubCards
          columns={2}
          items={[
            { title: 'What you get', body: 'A field note on delivery, cost, or risk — plus one service or tool you can use the same week.' },
            { title: 'What you will not get', body: 'No partner recaps, no purchased lists, no weekly drip. Unsubscribe from any email.' },
            { title: 'Also useful', body: 'The blog keeps the longer guides. Case studies keep the numbers.', href: '/blog/' },
            { title: 'Prefer a human', body: 'Send a project brief and we will reply with a plan, not a newsletter sequence.', href: '/contact/' },
          ]}
        />
      </div>
    </PageShell>
  );
}
