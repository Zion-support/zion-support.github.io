import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Testing & Quality Assurance — Zion Tech Group",
  description: "Automated test generation, visual regression testing, and AI-powered bug detection that adapts to your application code and learns from failures.",
  keywords: "AI services, IT services, AI Testing & Quality Assurance",
  openGraph: {
    title: "AI Testing & Quality Assurance",
    description: "Automated test generation, visual regression testing, and AI-powered bug detection that adapts to your application code and learns from failures.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Testing & Quality Assurance",
    description: "Automated test generation, visual regression testing, and AI-powered bug detection that adapts to your application code and learns from failures."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-testing-qa',
    title: 'AI Testing & Quality Assurance',
    description: 'Automated test generation, visual regression testing, and AI-powered bug detection that adapts to your application code and learns from failures.',
    features: ['Auto-generated test cases from user journeys', 'Visual regression testing across browsers', 'AI bug detection with root-cause suggestions', 'Performance testing & bottleneck analysis', 'Self-healing test scripts'],
    benefits: ['Reduce QA effort by 70%', 'Catch regressions before production', 'Self-healing tests reduce maintenance', 'Cross-browser visual consistency'],
    pricing: { basic: '349', pro: '749', enterprise: '1799' },
    contactInfo: { website: '/ai-services/ai-testing-qa', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧪',
    href: '/ai-services/ai-testing-qa',
    category: 'ai'
  }
;

const mergedService = {
  ...service,
  contactInfo: {
    website: 'https://ziontechgroup.com',
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }
};

export default function AiTestingAndQualityAssurancePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
