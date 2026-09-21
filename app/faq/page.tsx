import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'FAQ | Zion Tech Group',
  description:
    'Common questions about AI and IT services, engagement models, pricing, onboarding, support, security, and deployment timelines.',
  openGraph: {
    title: 'FAQ | Zion Tech Group',
    description:
      'Common questions about AI and IT services, timing, security, pricing, and onboarding.',
    url: 'https://ziontechgroup.com/faq/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/faq/' },
};

const faqs = [
  {
    q: 'How fast can you start?',
    a: 'Most engagements begin within 7 days. Managed services and advisory work can onboard faster if the scope is clear.',
  },
  {
    q: 'Do you support HIPAA and compliance regimes?',
    a: 'Yes. We design delivery with privacy-first controls and can support compliance evidence packages and operational requirements.',
  },
  {
    q: 'What does managed AI include?',
    a: 'Monitoring, cost controls, model updates, observability, performance tuning, and incident response for production AI systems.',
  },
  {
    q: 'How do you price engagements?',
    a: 'We use time-and-materials, fixed-price, and retainer models. After a short scoping call, we return a proposal with clear cost structure and milestones.',
  },
];

export default function FAQPage() {
  return (
    <PageShell
      title="Frequently Asked Questions"
      description="Straight answers about AI and IT services, pricing, onboarding, support, and what to expect from a Zion engagement."
      eyebrow="Help & FAQs"
      eyebrowIcon="💬"
      align="center"
      canonical="https://ziontechgroup.com/faq/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'FAQ' },
      ]}
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Ask a question</Link>
          <Link href="/services/" className="btn-secondary">Browse services</Link>
        </>
      }
      ctaTitle="Still have questions?"
      ctaDescription="Email or call us directly. Most questions get a detailed reply within one business hour."
    >
      <div className="mx-auto grid max-w-4xl gap-6">
        {faqs.map((item) => (
          <div key={item.q} className="page-card">
            <h2 className="mb-2 text-2xl font-bold text-white">{item.q}</h2>
            <p className="leading-relaxed text-slate-300">{item.a}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
