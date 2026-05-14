import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed IT Services & IT Support | Zion Tech Group',
  description: 'Comprehensive IT services including 24/7 monitoring, help desk support, cloud infrastructure management, cybersecurity, and strategic IT consulting. Get enterprise-grade IT at a predictable monthly price.',
  alternates: { canonical: '/it-services' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Managed IT Services & IT Support',
        category: 'IT Services',
        description:
          'Comprehensive IT management, 24/7 monitoring, cybersecurity, and strategic consulting for businesses. We keep your technology running smoothly so you can focus on growth. Starting at $2,499/month for small teams, scalable for enterprise.',
        iconEmoji: '🖥️',
        features: [
          {
            title: '24/7 IT Help Desk & Support',
            description:
              'Round-the-clock technical support for your team. Get instant help with hardware, software, network, and cloud issues. Average response time <15 minutes.',
          },
          {
            title: 'Proactive Infrastructure Monitoring',
            description:
              'AI-powered monitoring of servers, networks, and applications. Detect issues before they cause downtime. 99.99% uptime SLA guaranteed.',
          },
          {
            title: 'Cloud Infrastructure Management',
            description:
              'Full management of AWS, Azure, Google Cloud. Cost optimization, security hardening, backup & disaster recovery. Save up to 40% on cloud spend.',
          },
          {
            title: 'Cybersecurity & Compliance',
            description:
              'Endpoint protection, threat hunting, vulnerability assessments, and compliance (GDPR, HIPAA, SOC2). Keep your data secure and audit-ready.',
          },
          {
            title: 'IT Strategy & Consulting',
            description:
              'Strategic technology roadmaps, digital transformation planning, and vendor selection advice. Align IT with business goals for maximum ROI.',
          },
          {
            title: 'Onsite & Remote Support',
            description:
              'Hybrid support model: remote issue resolution plus onsite engineers when needed. Covers all 50 US states and international locations.',
          },
        ],
        useCases: [
          {
            title: 'Small & Medium Businesses',
            description:
              'Replace expensive in-house IT with a full team of experts. Get CTO-level guidance without the C-level salary.',
            icon: '🏢',
          },
          {
            title: 'Startups & High-Growth Companies',
            description:
              'Scale IT infrastructure seamlessly as you grow. Focus on product, not plumbing. We handle the tech so you can move fast.',
            icon: '🚀',
          },
          {
            title: 'Enterprise Organizations',
            description:
              'Augment your existing IT team with specialized skills. 24/7 NOC, security operations, and cloud excellence.',
            icon: '🏛️',
          },
        ],
        pricing: [
          {
            tier: 'Starter',
            price: '$2,499',
            period: '/month',
            features: [
              'Up to 25 users',
              'Help desk support (9x5)',
              'Basic monitoring',
              'Cloud cost reports',
              'Monthly security scan',
            ],
          },
          {
            tier: 'Growth',
            price: '$4,999',
            period: '/month',
            features: [
              'Up to 100 users',
              '24/7 help desk',
              'Advanced monitoring + AI alerts',
              'Cloud optimization (up to 40% savings)',
              'Weekly security scans',
              'Compliance reporting',
            ],
            popular: true,
          },
          {
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited users',
              'Dedicated support team',
              'Custom integrations',
              'Onsite support included',
              'Penetration testing & audit',
              'SLA 99.99% uptime',
            ],
          },
        ],
        benefits: [
          'Reduce downtime by 80%',
          'Cut IT costs up to 40% vs in-house team',
          'Scale instantly as you grow',
          'Enterprise security without enterprise team',
          '24/7 peace of mind',
          ' Faster issue resolution (avg <15min)',
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709',
        },
        ctaLabel: 'Schedule a Free IT Assessment',
      }}
    />
  );
}
