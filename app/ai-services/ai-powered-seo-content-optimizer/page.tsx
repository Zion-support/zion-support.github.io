import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered SEO Content Optimizer — Zion Tech Group",
  description: "Real-time SEO analysis and content optimization: auto-suggest keywords, restructure sentences for readability, generate meta tags, and audit for E-E-A-T signals.",
  keywords: "AI services, IT services, AI-Powered SEO Content Optimizer",
  openGraph: {
    title: "AI-Powered SEO Content Optimizer",
    description: "Real-time SEO analysis and content optimization: auto-suggest keywords, restructure sentences for readability, generate meta tags, and audit for E-E-A-T signals.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered SEO Content Optimizer",
    description: "Real-time SEO analysis and content optimization: auto-suggest keywords, restructure sentences for readability, generate meta tags, and audit for E-E-A-T signals."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-powered-seo-optimizer',
     title: 'AI-Powered SEO Content Optimizer',
     description: 'Real-time SEO analysis and content optimization: auto-suggest keywords, restructure sentences for readability, generate meta tags, and audit for E-E-A-T signals.',
     features: [
       'On-page SEO scoring (0-100)',
       'Competitor gap analysis',
       'Automated meta title/description generation',
       'Readability improvement suggestions',
       'Schema.org structured data suggestions'
     ],
     benefits: [
       'Increase organic traffic by 40% within 3 months',
       'Outrank competitors on target keywords',
       'Ensure Google E-E-A-T compliance',
       'Automate technical SEO fixes'
     ],
     pricing: { basic: '99', pro: '299', enterprise: '999' },
     contactInfo: { website: '/ai-services/ai-powered-seo-optimizer', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔍',
     href: '/ai-services/ai-powered-seo-optimizer',
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

export default function AipoweredSeoContentOptimizerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
