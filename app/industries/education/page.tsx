import Link from 'next/link';
import { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'AI for Education | Zion Tech Group',
  description: 'Education and research AI for learning, assessment, research ops, and campus efficiency.',
  alternates: { canonical: '/industries/education/' },
};

export default function Page() {
  return (
    <PageShell
      title="AI for Education"
      description="Education and research AI for learning, assessment, research ops, and campus efficiency."
      eyebrow="Industry"
      align="center"
      canonical="https://ziontechgroup.com/industries/education/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Contact us</Link>
          <Link href="/services/" className="btn-secondary">Browse services</Link>
        </>
      }
    />
  );
}
