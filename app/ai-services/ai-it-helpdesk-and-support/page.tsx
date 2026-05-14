import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI IT Helpdesk & Support — Zion Tech Group",
  description: "Automated Tier-1 IT support for employees: password resets, software installs, device troubleshooting, and knowledge base search.",
  keywords: "AI services, IT services, AI IT Helpdesk & Support",
  openGraph: {
    title: "AI IT Helpdesk & Support",
    description: "Automated Tier-1 IT support for employees: password resets, software installs, device troubleshooting, and knowledge base search.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI IT Helpdesk & Support",
    description: "Automated Tier-1 IT support for employees: password resets, software installs, device troubleshooting, and knowledge base search."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-it-helpdesk',
    title: 'AI IT Helpdesk & Support',
    description: 'Automated Tier-1 IT support for employees: password resets, software installs, device troubleshooting, and knowledge base search.',
    features: [
      'Automated ticket creation & routing',
      'Knowledge base search with semantic understanding',
      'Password reset & MFA enrollment automation',
      'Software request fulfillment workflows',
      'Hardware troubleshooting decision trees'
    ],
    benefits: [
      'Resolve 70% of tickets without human agent',
      'Reduce helpdesk staffing costs by 60%',
      'Instant employee support 24/7',
      'Consistent, documented resolutions'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1899'
    },
    contactInfo: {
      website: '/it-services/ai-it-helpdesk',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🖥️',
    href: '/it-services/ai-it-helpdesk',
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

export default function AiItHelpdeskAndSupportPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
