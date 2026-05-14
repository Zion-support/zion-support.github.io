import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Legacy App Containerization — Zion Tech Group",
  description: "Legacy App Containerization",
  keywords: "AI services, IT services, Legacy App Containerization",
  openGraph: {
    title: "Legacy App Containerization",
    description: "Legacy App Containerization",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy App Containerization",
    description: "Legacy App Containerization"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-legacy-app-containerization',
    title: 'Legacy App Containerization',
    description: `Migrate monoliths and legacy apps to Docker/Kubernetes with minimal code changes. Automated dependency analysis and service extraction.`,
    features: ["Automated dependency mapping", "Service extraction recommendations", "StatefulSet migration", "Database connection pooling", "Blue-green deployment"],
    benefits: ["Modernize without rewrite", "Reduce infrastructure costs", "Enable CI/CD for legacy"],
    pricing: {"basic":"399","pro":"899","enterprise":"2299"},
    contactInfo: {
      website: '/it-services/it-legacy-app-containerization',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🐳',
    href: '/it-services/it-legacy-app-containerization',
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

export default function LegacyAppContainerizationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
