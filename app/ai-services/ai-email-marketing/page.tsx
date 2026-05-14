import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Email Marketing — Zion Tech Group",
  description: "Intelligent email campaigns with AI-powered subject lines, send-time optimization, dynamic content, and advanced segmentation.",
  keywords: "AI services, IT services, AI Email Marketing",
  openGraph: {
    title: "AI Email Marketing",
    description: "Intelligent email campaigns with AI-powered subject lines, send-time optimization, dynamic content, and advanced segmentation.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Email Marketing",
    description: "Intelligent email campaigns with AI-powered subject lines, send-time optimization, dynamic content, and advanced segmentation."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-email-marketing',
    title: 'AI Email Marketing',
    description: 'Intelligent email campaigns with AI-powered subject lines, send-time optimization, dynamic content, and advanced segmentation.',
    features: [
      'AI subject line & copy generator',
      'Send-time optimization per subscriber',
      'Dynamic content personalization',
      'Advanced behavioral segmentation',
      'A/B/n automated testing'
    ],
    benefits: [
      '35% higher open rates',
      '50% higher click-through rates',
      'Automated campaign workflows',
      'Revenue attribution tracking'
    ],
    pricing: {
      basic: '199',
      pro: '449',
      enterprise: '999'
    },
    contactInfo: {
      website: '/ai-services/ai-email-marketing',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📧',
    href: '/ai-services/ai-email-marketing',
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

export default function AiEmailMarketingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
