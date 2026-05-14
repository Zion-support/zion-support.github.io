import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Identity & Access Management (IAM) Platform — Zion Tech Group",
  description: "Enterprise IAM with SSO, MFA, PAM, and automated access provisioning across cloud and on-premise systems — Zero Trust-ready identity governance.",
  keywords: "AI services, IT services, Identity & Access Management (IAM) Platform",
  openGraph: {
    title: "Identity & Access Management (IAM) Platform",
    description: "Enterprise IAM with SSO, MFA, PAM, and automated access provisioning across cloud and on-premise systems — Zero Trust-ready identity governance.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Identity & Access Management (IAM) Platform",
    description: "Enterprise IAM with SSO, MFA, PAM, and automated access provisioning across cloud and on-premise systems — Zero Trust-ready identity governance."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-identity-access-management',
    title: 'Identity & Access Management (IAM) Platform',
    description: 'Enterprise IAM with SSO, MFA, PAM, and automated access provisioning across cloud and on-premise systems — Zero Trust-ready identity governance.',
    features: ['Single sign-on (SSO) with 5000+ app integrations', 'Adaptive multi-factor authentication with risk scoring', 'Privileged access management (PAM) with session recording', 'Automated access provisioning and de-provisioning', 'Identity governance with access certification workflows'],
    benefits: ['Reduce access-related incidents by 90%', 'Achieve 100% compliance with identity best practices', 'Eliminate orphaned accounts and access creep', 'Seamless experience with frictionless SSO for users'],
    pricing: { basic: '999', pro: '2499', enterprise: '5999' },
    contactInfo: { website: '/it-services/iam-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔑',
    href: '/it-services/iam-platform',
    category: 'security'
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

export default function IdentityAndAccessManagementIamPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
