import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Pricing | Zion Tech Group',
  description:
    'Flexible pricing and engagement models for AI and IT services, with transparent cost structures, payment terms, and ROI expectations.',
  openGraph: {
    title: 'Pricing | Zion Tech Group',
    description:
      'Flexible pricing and engagement models for AI and IT services, with transparent cost structures and ROI expectations.',
    url: 'https://ziontechgroup.com/pricing/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/pricing/' },
};

const models = [
  {
    title: 'Time and Materials',
    body: 'Hourly or daily rates for staffing, advisory, and iterative delivery. Best for evolving scopes and fast engagement starts.',
  },
  {
    title: 'Fixed Price',
    body: 'Scoped deliverables with milestone payments and acceptance criteria. Best for well-defined outcomes and predictable budgets.',
  },
  {
    title: 'Retainer',
    body: 'Ongoing managed services with predictable monthly spend and SLA terms. Best for continuous improvement and support coverage.',
  },
];

export default function PricingPage() {
  return (
    <PageShell
      title="Pricing & Engagement Models"
      description="Flexible engagement models with transparent cost structures, payment terms, and ROI expectations — so you can scale AI and IT services predictably."
      eyebrow="Transparent Pricing"
      eyebrowIcon="💎"
      align="center"
      canonical="https://ziontechgroup.com/pricing/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Pricing' },
      ]}
      actions={
        <>
          <a href="mailto:kleber@ziontechgroup.com" className="btn-primary">Email for pricing</a>
          <Link href="/contact/" className="btn-secondary">Request proposal</Link>
        </>
      }
      ctaTitle="Ready for a transparent cost model?"
      ctaDescription="Share your scope and constraints. We will return a tailored proposal with pricing model, timeline, team, and estimated ROI."
    >
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {models.map((model) => (
          <div key={model.title} className="page-card">
            <h2 className="mb-2 text-2xl font-bold text-white">{model.title}</h2>
            <p className="leading-relaxed text-slate-300">{model.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
