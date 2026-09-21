import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  description: 'Privacy policy for Zion Tech Group services, website, and AI tools.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  { title: 'Information We Collect', body: 'We collect information you provide directly, such as contact forms, scheduling requests, and communications with Zion Tech Group.' },
  { title: 'How We Use Information', body: 'We use information to deliver AI/IT services, improve website performance, and communicate about projects or proposals.' },
  { title: 'Data Sharing', body: 'We do not sell personal data. We may share data with service providers necessary to deliver services, under confidentiality obligations.' },
  { title: 'Security', body: 'We apply reasonable technical and organizational measures to protect data during engagement.' },
  { title: 'Your Choices', body: 'You may request updates or deletion of personal data by contacting kleber@ziontechgroup.com.' },
  { title: 'Contact', body: 'For privacy questions, email kleber@ziontechgroup.com or use the contact page.' },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How Zion Tech Group collects, uses, and protects information across the website, tools, and client engagements."
      eyebrow="Legal"
      align="center"
      canonical="https://ziontechgroup.com/privacy/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Privacy Policy' },
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
