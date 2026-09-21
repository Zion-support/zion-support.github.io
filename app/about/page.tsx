import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'About Zion Tech Group | AI & IT Company',
  description: 'Zion Tech Group is an AI-native IT services company building autonomous operations, managed AI, and enterprise-ready delivery.',
  keywords: ['AI company', 'IT services', 'managed AI', 'enterprise automation', 'Zion Tech Group'],
  openGraph: {
    title: 'About Zion Tech Group',
    description: 'AI-native IT services company focused on autonomous operations, managed AI, and enterprise-ready delivery.',
    url: 'https://ziontechgroup.com/about/',
    type: 'website',
  },
  alternates: { canonical: '/about/' },
};

const cards = [
  { title: 'Mission', body: 'Make enterprise AI reliable, measurable, and easy to run.' },
  { title: 'Approach', body: 'Outcome-first delivery, accountable milestones, and real production systems.' },
  { title: 'Clients', body: 'Business-to-business engagements across mid-market and enterprise.' },
  { title: 'Capability', body: 'AI, cloud, security, data, automation, DevOps, and IT operations.' },
];

export default function AboutPage() {
  return (
    <PageShell
      title="About Zion Tech Group"
      description="Zion Tech Group designs and builds AI-driven systems for enterprises that need reliable automation, secure infrastructure, and measurable ROI. We operate across AI services, IT delivery, cloud, security, data, and automation."
      eyebrow="Company"
      align="center"
      canonical="https://ziontechgroup.com/about/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About' },
      ]}
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Talk to an engineer</Link>
          <Link href="/case-studies/" className="btn-secondary">See results</Link>
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="page-card">
            <h2 className="text-lg font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{card.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
