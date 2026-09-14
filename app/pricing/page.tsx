import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing · Zion Tech Group',
  description:
    'Zion pricing lives on Plans — Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/mo.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://ziontechgroup.com/plans/' },
};

export default function PricingPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/plans/" />
      <main className="container-page py-16">
        <h1 className="text-3xl font-bold text-white">Pricing moved to Plans</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          This URL is a soft alias. Commercial pricing and payment paths live on{' '}
          <Link href="/plans/" className="text-sky-400 underline">
            Plans
          </Link>{' '}
          — Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/mo.
        </p>
        <p className="mt-6">
          <Link href="/plans/" className="btn-primary">
            Go to Plans
          </Link>
        </p>
      </main>
    </>
  );
}
