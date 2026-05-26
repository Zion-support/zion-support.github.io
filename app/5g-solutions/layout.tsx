import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5G & Private Network Solutions',
  description: 'Enterprise 5G private networks, edge computing, network slicing, and telecom infrastructure solutions for industrial deployment.',
  openGraph: { title: '5G & Private Network Solutions | Zion Tech Group', description: 'Enterprise 5G private network solutions.', type: 'website' },
  alternates: { canonical: '/5g-solutions/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}