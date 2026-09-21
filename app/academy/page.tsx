import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Academy | Zion Tech Group',
  description: 'Learning paths for AI, cloud, security, and modern IT operations.',
  alternates: { canonical: '/academy/' },
};

const tracks = [
  {
    title: 'AI Basics',
    body: 'Foundations for automation, agents, and assistive tooling.',
    href: '/blog/ai-consulting-services-for-enterprise-it-in-2026/',
    label: 'AI Consulting',
  },
  {
    title: 'Cloud & Security',
    body: 'Implement safer cloud and zero-trust architectures.',
    href: '/services/zero-trust-network-access/',
    label: 'Zero Trust Access',
  },
  {
    title: 'Operations',
    body: 'Reduce cost and improve reliability with observability.',
    href: '/services/ai-document-processing/',
    label: 'Document Processing',
  },
];

export default function Academy() {
  return (
    <PageShell
      title="Academy"
      description="Practical courses and guides for implementing AI and IT services — written for operators who need production outcomes."
      eyebrow="Learn"
      align="center"
      canonical="https://ziontechgroup.com/academy/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Academy' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tracks.map((track) => (
          <div key={track.title} className="page-card">
            <h2 className="text-xl font-semibold text-white">{track.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{track.body}</p>
            <Link href={track.href} className="mt-4 inline-block text-sm font-semibold text-purple-300 hover:text-purple-200">
              {track.label} →
            </Link>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
