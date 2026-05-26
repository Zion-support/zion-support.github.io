import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Development & Integration',
  description: 'RESTful and GraphQL API design, development, and management platforms for modern enterprises.',
  openGraph: { title: 'API Development & Integration | Zion Tech Group', description: 'RESTful and GraphQL API design and development.', type: 'website' },
  alternates: { canonical: '/api-development/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}