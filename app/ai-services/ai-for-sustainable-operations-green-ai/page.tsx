import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI for Sustainable Operations (Green AI) — Zion Tech Group",
  description: "Optimize compute & cloud resource usage to reduce carbon footprint: model carbon-aware scheduling, energy profiling, and sustainability reporting.",
  keywords: "AI services, IT services, AI for Sustainable Operations (Green AI)",
  openGraph: {
    title: "AI for Sustainable Operations (Green AI)",
    description: "Optimize compute & cloud resource usage to reduce carbon footprint: model carbon-aware scheduling, energy profiling, and sustainability reporting.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Sustainable Operations (Green AI)",
    description: "Optimize compute & cloud resource usage to reduce carbon footprint: model carbon-aware scheduling, energy profiling, and sustainability reporting."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-sustainable-ops',
     title: 'AI for Sustainable Operations (Green AI)',
     description: 'Optimize compute & cloud resource usage to reduce carbon footprint: model carbon-aware scheduling, energy profiling, and sustainability reporting.',
     features: [
       'Carbon intensity forecasting per region',
       'Job scheduling to low-carbon time windows',
       'Resource right-sizing recommendations',
       'Sustainability KPI dashboards',
       'Compliance with ESG reporting standards'
     ],
     benefits: [
       'Reduce cloud carbon emissions by 40%',
       'Lower cost via energy optimization',
       'Meet corporate sustainability goals',
       'Public sustainability reporting for PR'
     ],
     pricing: { basic: '199', pro: '499', enterprise: '1499' },
     contactInfo: { website: '/ai-services/ai-sustainable-ops', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🌱',
     href: '/ai-services/ai-sustainable-ops',
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

export default function AiForSustainableOperationsGreenAiPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
