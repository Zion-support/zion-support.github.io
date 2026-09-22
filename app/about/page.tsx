import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HubCards from '@/components/HubCards';

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

export default function AboutPage() {
  return (
    <PageShell
      title="About Zion Tech Group"
      description="We design and run AI-driven systems for teams that need reliable automation, secure infrastructure, and a number they can defend in a board meeting."
      eyebrow="Company"
      align="center"
      canonical="https://ziontechgroup.com/about/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Talk to an engineer</Link>
          <Link href="/case-studies/" className="btn-secondary">See results</Link>
        </>
      }
    >
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          ['B2B', 'Mid-market and enterprise'],
          ['US + BR', 'English and Portuguese'],
          ['7 days', 'Typical start window'],
          ['4.8/5', 'Client rating'],
        ].map(([stat, label]) => (
          <div key={stat} className="page-card text-center">
            <div className="text-2xl font-bold text-white">{stat}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{label}</div>
          </div>
        ))}
      </div>
      <HubCards
        items={[
          { title: 'Mission', body: 'Make enterprise AI reliable, measurable, and easy to operate after the demo ends.' },
          { title: 'Approach', body: 'Outcome-first delivery: named owner, written milestones, and production systems — not slideware.' },
          { title: 'Clients', body: 'Operators in healthcare, finance, SaaS, logistics, and internal IT who need a partner that can ship.' },
          { title: 'Capability', body: 'AI, cloud, security, data, automation, DevOps, and managed IT — assembled around the problem, not a catalog slot.' },
          { title: 'How we start', body: 'A short discovery call, then a proposal with scope, cost model, and the first milestone.', href: '/contact/' },
          { title: 'How we prove it', body: 'Public case studies and a written plan before you commit to a retainer.', href: '/case-studies/' },
        ]}
      />
    </PageShell>
  );
}
