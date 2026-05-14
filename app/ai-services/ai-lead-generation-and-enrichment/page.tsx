import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Lead Generation & Enrichment — Zion Tech Group",
  description: "Automatically discover, qualify, and enrich B2B leads with web scraping, firmographic scoring, and intent signal detection.",
  keywords: "AI services, IT services, AI Lead Generation & Enrichment",
  openGraph: {
    title: "AI Lead Generation & Enrichment",
    description: "Automatically discover, qualify, and enrich B2B leads with web scraping, firmographic scoring, and intent signal detection.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Generation & Enrichment",
    description: "Automatically discover, qualify, and enrich B2B leads with web scraping, firmographic scoring, and intent signal detection."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-lead-generation',
    title: 'AI Lead Generation & Enrichment',
    description: 'Automatically discover, qualify, and enrich B2B leads with web scraping, firmographic scoring, and intent signal detection.',
    features: ['Automated lead discovery from public sources', 'Firmographic enrichment — revenue, tech stack, contacts', 'Intent signal — hiring, mentions, website visits', 'CRM auto-sync to Salesforce, HubSpot, Pipedrive', 'Personalized outreach — email, LinkedIn, sequences', 'ML-powered lead quality scoring and ranking'],
    benefits: ['5x more qualified leads per month', 'Save 15 hours/week on enrichment', 'Intent targeting increases conversion 3x', 'Seamless CRM integration', 'ML-powered scoring models', 'Personalized outreach at scale'],
    pricing: { basic: '149', pro: '449', enterprise: '999' },
    contactInfo: { website: '/ai-services/ai-lead-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎯',
    href: '/ai-services/ai-lead-generation',
    popular: true,
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

export default function AiLeadGenerationAndEnrichmentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
