import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Platform Engineering & Internal Developer Portal — Zion Tech Group",
  description: "Build internal developer platforms with self-service infrastructure provisioning, golden paths, and developer experience optimization to accelerate team productivity.",
  keywords: "AI services, IT services, Platform Engineering & Internal Developer Portal",
  openGraph: {
    title: "Platform Engineering & Internal Developer Portal",
    description: "Build internal developer platforms with self-service infrastructure provisioning, golden paths, and developer experience optimization to accelerate team productivity.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Engineering & Internal Developer Portal",
    description: "Build internal developer platforms with self-service infrastructure provisioning, golden paths, and developer experience optimization to accelerate team productivity."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-platform-engineering',
    title: 'Platform Engineering & Internal Developer Portal',
    description: 'Build internal developer platforms with self-service infrastructure provisioning, golden paths, and developer experience optimization to accelerate team productivity.',
    features: ['Internal developer platform (IDP) deployment', 'Self-service infrastructure provisioning', 'Golden path templates and scaffolding', 'Developer experience metrics and optimization', 'Integration with existing CI/CD pipelines'],
    benefits: ['Reduce developer onboarding time by 80%', 'Eliminate infrastructure request bottleneck', 'Standardize best practices across teams', 'Accelerate feature delivery by 2-3x'],
    pricing: { basic: '2499', pro: '5499', enterprise: '12999' },
    contactInfo: { website: '/it-services/platform-engineering', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛠️',
    href: '/it-services/platform-engineering',
    category: 'cloud'
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

export default function PlatformEngineeringAndInternalDeveloperPortalPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
