import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Accessibility Auditor — Zion Tech Group",
  description: "AI Accessibility Auditor",
  keywords: "AI services, IT services, AI Accessibility Auditor",
  openGraph: {
    title: "AI Accessibility Auditor",
    description: "AI Accessibility Auditor",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Accessibility Auditor",
    description: "AI Accessibility Auditor"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-accessibility-auditor',
    title: 'AI Accessibility Auditor',
    description: `Automated WCAG 2.1 AA compliance scans for websites & apps with screen-reader simulation, color contrast testing, and keyboard navigation checks.`,
    features: ["Full-page accessibility scoring", "Component-level issue mapping", "Remediation code snippets", "Automated PDF accessibility check"],
    benefits: ["Avoid ADA lawsuit risks", "Improve SEO through accessibility", "Enhance UX for all users"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-accessibility-auditor',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '♿',
    href: '/ai-services/ai-accessibility-auditor',
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

export default function AiAccessibilityAuditorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
