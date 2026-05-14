import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Workplace Platform — Zion Tech Group",
  description: "Digital Workplace Platform",
  keywords: "AI services, IT services, Digital Workplace Platform",
  openGraph: {
    title: "Digital Workplace Platform",
    description: "Digital Workplace Platform",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Workplace Platform",
    description: "Digital Workplace Platform"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-digital-workplace-platform',
    title: 'Digital Workplace Platform',
    description: `Unified intranet, collaboration, and employee apps (Microsoft 365 + Google Workspace + Slack) with streamlined onboarding and automated license management.`,
    features: ["Self-service IT catalog", "Automated employee lifecycle (joiner/mover/leaver)", "License optimization engine", "Employee sentiment surveys"],
    benefits: ["Reduces SaaS sprawl", "Cuts license costs by 20%", "Improves employee satisfaction"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-digital-workplace-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💼',
    href: '/it-services/it-digital-workplace-platform',
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

export default function DigitalWorkplacePlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
