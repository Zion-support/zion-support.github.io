import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managed Endpoint Detection & Response (EDR) | Zion Tech Group",
  description: "Managed Endpoint Detection & Response (EDR) — professional IT service from Zion Tech Group.",
  alternates: { canonical: "/it-services/it-endpoint-detection-response" },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={
        title: "Managed Endpoint Detection & Response (EDR)",
        category: 'AI & Machine Learning',
        description: "Managed Endpoint Detection & Response (EDR) — professional IT service from Zion Tech Group.",
        iconEmoji: "🛡️",
        features: [
          { title: 'Enterprise-grade delivery', description: 'Built for scale with enterprise SLAs and production-ready architecture.' },
          { title: 'Dedicated technical team', description: 'Senior engineers and architects assigned to your engagement from day one.' },
          { title: 'Ongoing support', description: 'Post-launch monitoring, maintenance, and continuous improvement included.' },
        ],
        useCases: [
          { title: 'Enterprise', description: 'Large-scale operations requiring custom solutions.', icon: '🏢' },
          { title: 'Mid-Market', description: 'Growing organisations looking to scale efficiently.', icon: '📈' },
          { title: 'Startup', description: 'Fast-moving teams that need to move quickly without sacrificing quality.', icon: '🚀' },
        ],
        benefits: [
          'Accelerated delivery with proven methodologies',
          'Transparent pricing with no hidden fees',
          'Dedicated account management',
          'Ongoing optimisation and support',
        ],
        ctaLabel: 'Request a quote',
        ctaHref: '/contact',
        secondaryCtaLabel: 'View all services',
        secondaryCtaHref: '/services',
        contactDetails: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709',
        },
        breadcrumb: [
          { label: 'Home', href: '/' },
          { label: 'IT Services', href: '/services' },
          { label: 'Managed Endpoint Detection & Response (EDR)', href: '/it-services/it-endpoint-detection-response' },
        ],
      }
    />
  );
}
