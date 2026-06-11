import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Micro-SaaS Products | Zion Tech Group',
  description: 'Ready-to-use micro-SaaS products — booking schedulers, invoice generators, CRMs, and productivity tools.',
  alternates: { canonical: 'https://ziontechgroup.com/services/?category=micro-saas' },
};

export default function MicroSaasPage() {
  redirect('/services/?category=micro-saas');
}
