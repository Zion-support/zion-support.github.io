import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Low-Code Platform Integration — Zion Tech Group",
  description: "Low-Code Platform Integration",
  keywords: "AI services, IT services, Low-Code Platform Integration",
  openGraph: {
    title: "Low-Code Platform Integration",
    description: "Low-Code Platform Integration",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Low-Code Platform Integration",
    description: "Low-Code Platform Integration"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-low-code-platform-integration',
    title: 'Low-Code Platform Integration',
    description: `Build & integrate internal tools on Retool, Tooljet, or internal platforms. Pre-built connectors to 200+ SaaS APIs and custom SQL/NoSQL builders.`,
    features: ["Drag-and-drop UI builder", "Role-based access controls", "Audit logging", "One-click deployment"],
    benefits: ["Empowers non-developers to build tools", "Reduces internal dev backlog by 40%", "Standardizes tooling across teams"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-low-code-platform-integration',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🧩',
    href: '/it-services/it-low-code-platform-integration',
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

export default function LowcodePlatformIntegrationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
