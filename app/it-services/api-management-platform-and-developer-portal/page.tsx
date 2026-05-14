import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "API Management Platform & Developer Portal — Zion Tech Group",
  description: "Comprehensive API management - gateway, developer portal, monetization, analytics, and lifecycle management for enterprise API programs.",
  keywords: "AI services, IT services, API Management Platform & Developer Portal",
  openGraph: {
    title: "API Management Platform & Developer Portal",
    description: "Comprehensive API management - gateway, developer portal, monetization, analytics, and lifecycle management for enterprise API programs.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "API Management Platform & Developer Portal",
    description: "Comprehensive API management - gateway, developer portal, monetization, analytics, and lifecycle management for enterprise API programs."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-api-management',
    title: 'API Management Platform & Developer Portal',
    description: 'Comprehensive API management - gateway, developer portal, monetization, analytics, and lifecycle management for enterprise API programs.',
    features: ['API gateway with rate limiting', 'Developer portal with docs and SDKs', 'Lifecycle management', 'Monetization', 'Real-time analytics'],
    benefits: ['Accelerate API adoption', 'Monetize APIs', 'Protect backends', 'Track performance'],
    pricing: { basic: '1499', pro: '3299', enterprise: '7499' },
    contactInfo: { website: '/it-services/api-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔌',
    href: '/it-services/api-management',
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

export default function ApiManagementPlatformAndDeveloperPortalPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
