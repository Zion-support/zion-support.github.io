import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics & BI',
  description: 'Enterprise business intelligence, predictive analytics, real-time dashboards, and self-serve analytics platforms for data-driven decision making.',
  openGraph: { title: 'Data Analytics & BI | Zion Tech Group', description: 'Enterprise business intelligence, predictive analytics, real-time dashboards.', type: 'website' },
  alternates: { canonical: '/analytics/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}