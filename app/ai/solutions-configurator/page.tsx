import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Solutions Configurator | Zion Tech Group',
  description: 'Configure your custom AI and IT solutions with Zion Tech Group.',
  alternates: { canonical: '/ai/solutions-configurator/' },
};

export default function SolutionsConfiguratorPage() {
  return (
    <PageShell
      title="Solutions Configurator"
      description="Tell us where you are, what you want to improve, and which systems you rely on. We will assemble a deterministic blueprint of Zion's autonomous platform for your stack."
      eyebrow="AI Lab"
      align="center"
      canonical="https://ziontechgroup.com/ai/solutions-configurator/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'AI Lab', href: '/ai' },
        { label: 'Solutions Configurator' },
      ]}
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Start with a consultation</Link>
          <Link href="/ai/" className="btn-secondary">Back to AI Lab</Link>
        </>
      }
    >
      <div className="page-card mx-auto max-w-3xl text-center">
        <p className="text-slate-300">
          The interactive configurator is available through a discovery call. Share your current stack and we will return an architecture, delivery plan, and cost model.
        </p>
      </div>
    </PageShell>
  );
}
