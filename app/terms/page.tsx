import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Terms of Service | Zion Tech Group',
  description: 'Terms of service for Zion Tech Group website, tools, and AI/IT services.',
  alternates: { canonical: '/terms' },
};

const sections = [
  { title: 'Agreement', body: 'By using Zion Tech Group services or website, you agree to these terms.' },
  { title: 'Services', body: 'Services include AI/IT consulting, implementation, support, and associated software. Specific terms may apply per proposal.' },
  { title: 'Acceptable Use', body: 'You agree not to misuse services, attempt unauthorized access, or interfere with operations.' },
  { title: 'Intellectual Property', body: 'Content and deliverables remain with their respective owners unless otherwise agreed in writing.' },
  { title: 'Limitation of Liability', body: 'To the maximum extent permitted by law, Zion Tech Group is not liable for indirect or incidental damages from service use.' },
  { title: 'Contact', body: 'Questions? Contact kleber@ziontechgroup.com or use the contact page.' },
];

export default function TermsOfServicePage() {
  return (
    <PageShell
      title="Terms of Service"
      description="The terms that govern use of the Zion Tech Group website, tools, and AI/IT services."
      eyebrow="Legal"
      align="center"
      canonical="https://ziontechgroup.com/terms/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Terms of Service' },
      ]}
      showCta={false}
    >
      <p className="mb-8 text-sm text-slate-400">Effective date: 2026-07-13</p>
      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="page-card">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-2 text-slate-300">{section.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-purple-300 hover:text-purple-200">← Back to homepage</Link>
      </div>
    </PageShell>
  );
}
