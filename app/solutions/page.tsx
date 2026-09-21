import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry\'s unique challenges and compliance requirements.',
  alternates: { canonical: '/solutions/' },
};

const industries = [
  { name: 'Healthcare', desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.', path: '/industries/healthcare/' },
  { name: 'Financial Services', desc: 'RegTech, fraud detection, trading bots, and KYC automation.', path: '/industries/finance/' },
  { name: 'Manufacturing & Industrial', desc: 'Predictive maintenance, supply chain, quality inspection AI.', path: '/industries/manufacturing/' },
  { name: 'E-Commerce & Retail', desc: 'Recommendation engines, inventory AI, dynamic pricing.', path: '/industries/retail/' },
  { name: 'Technology & SaaS', desc: 'Developer tools, platform engineering, and delivery automation.', path: '/industries/technology-saas/' },
  { name: 'Logistics & Supply Chain', desc: 'Route optimization, warehouse automation, fleet tracking.', path: '/industries/logistics/' },
  { name: 'Government & Public Sector', desc: 'Citizen services, compliance automation, civic AI.', path: '/services?category=ai' },
  { name: 'Insurance', desc: 'Claims automation, underwriting AI, fraud prevention.', path: '/services?category=ai' },
];

export default function SolutionsPage() {
  return (
    <PageShell
      title="Industry Solutions"
      description="Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry's unique challenges and compliance requirements."
      eyebrow="Solutions"
      align="center"
      canonical="https://ziontechgroup.com/solutions/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Solutions' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <Link key={industry.name} href={industry.path} className="page-card hover:border-purple-500/40">
            <h2 className="mb-2 font-semibold text-white">{industry.name}</h2>
            <p className="text-sm text-slate-400">{industry.desc}</p>
            <span className="mt-3 inline-block text-xs font-semibold text-purple-300">Learn more →</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
