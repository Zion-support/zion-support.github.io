import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search AI & IT Services | Zion Tech Group',
  description: 'Search and discover 15,000+ AI, IT, cloud, security, data, automation, and micro-SaaS services. Find tailored solutions for your industry with advanced filtering and AI-powered recommendations.',
  keywords: 'search AI services, find IT solutions, AI catalog search, cloud services directory, cybersecurity solutions, data analytics tools, automation services, micro-SaaS products, industry solutions',
  alternates: { canonical: '/search/' },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
