import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Free Developer Tools & Utilities | Zion Tech Group',
  description: '50+ free online developer tools: JSON formatter, JWT decoder, regex tester, SQL formatter, color palette generator, QR code generator, and more.',
  alternates: { canonical: '/free-tools' },
};

export default function FreeToolsProxy() {
  return (
    <PageShell
      title="Free Developer Tools"
      description="50+ free online tools for developers, designers, and data professionals. No signup required, no data stored."
      eyebrow="Tools"
      align="center"
      canonical="https://ziontechgroup.com/free-tools/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Free Tools' },
      ]}
      actions={
        <>
          <Link href="/tools/" className="btn-primary">Open the tools hub</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </>
      }
      ctaTitle="Need more than free tools?"
      ctaDescription="We offer AI implementation, IT automation, managed support, and custom integrations for teams that want production-ready solutions."
    >
      <div className="page-card mx-auto max-w-3xl text-center">
        <p className="text-slate-300">
          The full catalog of formatters, validators, scanners, and generators lives in the tools hub.
        </p>
        <div className="page-actions justify-center">
          <Link href="/tools/" className="btn-secondary">Browse all tools</Link>
        </div>
      </div>
    </PageShell>
  );
}
