import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI BDR/SDR Agent — Zion Tech Group",
  description: "Autonomous AI Business Development & Sales Development Representative: prospect, qualify, email, book meetings, and nurture leads 24/7 without human intervention.",
  keywords: "AI services, IT services, AI BDR/SDR Agent",
  openGraph: {
    title: "AI BDR/SDR Agent",
    description: "Autonomous AI Business Development & Sales Development Representative: prospect, qualify, email, book meetings, and nurture leads 24/7 without human intervention.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI BDR/SDR Agent",
    description: "Autonomous AI Business Development & Sales Development Representative: prospect, qualify, email, book meetings, and nurture leads 24/7 without human intervention."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-bdr-sdr',
    title: 'AI BDR/SDR Agent',
    description: 'Autonomous AI Business Development & Sales Development Representative: prospect, qualify, email, book meetings, and nurture leads 24/7 without human intervention.',
    features: [
      'Lead research & enrichment (LinkedIn, company data)',
      'Personalized cold email & LinkedIn outreach',
      'Intent signal detection & prioritization',
      'Automated meeting booking (Calendly integration)',
      'CRM sync (HubSpot, Salesforce)'
    ],
    benefits: [
      'Generate 50+ qualified meetings/month',
      '80% lower cost-per-lead vs human BDRs',
      '24/7 prospecting across timezones',
      'Scalable outbound engine'
    ],
    pricing: {
      basic: '699',
      pro: '1299',
      enterprise: '3499'
    },
    contactInfo: {
      website: '/ai-services/ai-bdr-sdr-agent',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📧',
    href: '/ai-services/ai-bdr-sdr-agent',
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

export default function AiBdrsdrAgentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
