import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Driven Customer Segmentation & Persona Engine — Zion Tech Group",
  description: "Cluster your customer base into meaningful personas using behavioral data, purchase history, and engagement patterns; deliver personalized marketing automatically.",
  keywords: "AI services, IT services, AI-Driven Customer Segmentation & Persona Engine",
  openGraph: {
    title: "AI-Driven Customer Segmentation & Persona Engine",
    description: "Cluster your customer base into meaningful personas using behavioral data, purchase history, and engagement patterns; deliver personalized marketing automatically.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Driven Customer Segmentation & Persona Engine",
    description: "Cluster your customer base into meaningful personas using behavioral data, purchase history, and engagement patterns; deliver personalized marketing automatically."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-driven-customer-segmentation',
     title: 'AI-Driven Customer Segmentation & Persona Engine',
     description: 'Cluster your customer base into meaningful personas using behavioral data, purchase history, and engagement patterns; deliver personalized marketing automatically.',
     features: [
       'K-means + hierarchical clustering models',
       'Dynamic segment recalculation (daily/weekly)',
       'Persona profiles with predictive scores',
       'Export to CRM/CDP (Segment, HubSpot)',
       'Campaign performance tracking per segment'
     ],
     benefits: [
       'Increase conversion rates by 35%',
       'Reduce churn with targeted retention offers',
       'Discover hidden high-value niches',
       'Automate personalized messaging'
     ],
     pricing: { basic: '399', pro: '999', enterprise: '3299' },
     contactInfo: { website: '/ai-services/ai-driven-customer-segmentation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎯',
     href: '/ai-services/ai-driven-customer-segmentation',
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

export default function AidrivenCustomerSegmentationAndPersonaEnginePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
