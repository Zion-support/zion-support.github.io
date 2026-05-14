import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "API Security Testing — Zion Tech Group",
  description: "API Security Testing",
  keywords: "AI services, IT services, API Security Testing",
  openGraph: {
    title: "API Security Testing",
    description: "API Security Testing",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "API Security Testing",
    description: "API Security Testing"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-apisec-testing',
    title: 'API Security Testing',
    description: `Automated security scans for REST, GraphQL, and gRPC APIs. Detects OWASP API Top 10 vulnerabilities and provides remediation code snippets.`,
    features: ["DAST + SCA for APIs", "Authentication flaw detection", "Rate-limiting & throttling tests", "CI/CD pipeline integration"],
    benefits: ["Prevents data breaches via API", "Meets PCI & HIPAA API requirements", "Finds bugs before production"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-apisec-testing',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔐',
    href: '/it-services/it-apisec-testing',
    category: 'it'
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

export default function ApiSecurityTestingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
