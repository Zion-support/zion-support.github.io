import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Email Campaign Generator — Zion Tech Group",
  description: "Email Campaign Generator",
  keywords: "AI services, IT services, Email Campaign Generator",
  openGraph: {
    title: "Email Campaign Generator",
    description: "Email Campaign Generator",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Campaign Generator",
    description: "Email Campaign Generator"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-email-campaign-generator',
    title: 'Email Campaign Generator',
    description: `End-to-end email marketing: Generate sequences, personalize per recipient, A/B test subject lines, optimize send times.`,
    features: ["Multi-email sequence generation", "Personalization tokens", "Subject line A/B testing", "Send-time optimization", "Deliverability monitoring"],
    benefits: ["Launch campaigns in hours not weeks", "30%+ open rates via AI optimization", "Scale to 100K+ subscribers"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/ai-services/ai-email-campaign-generator',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📧',
    href: '/ai-services/ai-email-campaign-generator',
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

export default function EmailCampaignGeneratorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
