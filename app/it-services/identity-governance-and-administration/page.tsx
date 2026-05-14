import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Identity Governance & Administration — Zion Tech Group",
  description: "Identity Governance & Administration",
  keywords: "AI services, IT services, Identity Governance & Administration",
  openGraph: {
    title: "Identity Governance & Administration",
    description: "Identity Governance & Administration",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Identity Governance & Administration",
    description: "Identity Governance & Administration"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-identity-governance',
    title: 'Identity Governance & Administration',
    description: `Centralized IGA: lifecycle management, access certifications, separation-of-duties policies. Integrates with Active Directory, Okta, Azure AD.`,
    features: ["Provisioning/deprovisioning workflows", "Access certification campaigns", "SoD policy engine", "Role mining & optimization", "SOD analytics"],
    benefits: ["Eliminate orphaned accounts", "Pass SOX audits", "Reduce access risk"],
    pricing: {"basic":"249","pro":"599","enterprise":"1499"},
    contactInfo: {
      website: '/it-services/it-identity-governance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔑',
    href: '/it-services/it-identity-governance',
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

export default function IdentityGovernanceAndAdministrationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
