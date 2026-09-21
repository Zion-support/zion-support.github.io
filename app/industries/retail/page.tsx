import Link from 'next/link';
import { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'AI for Retail | Zion Tech Group',
  description: 'Retail AI for demand, personalization, inventory, operations, and customer experience.',
  alternates: { canonical: '/industries/retail/' },
};

export default function Page() {
  return (
    <PageShell
      title="AI for Retail"
      description="Retail AI for demand, personalization, inventory, operations, and customer experience."
      eyebrow="Industry"
      align="center"
      canonical="https://ziontechgroup.com/industries/retail/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Contact us</Link>
          <Link href="/services/" className="btn-secondary">Browse services</Link>
        </>
      }
    />
  );
}
