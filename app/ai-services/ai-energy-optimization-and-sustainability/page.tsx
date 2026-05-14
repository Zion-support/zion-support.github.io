import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Energy Optimization & Sustainability — Zion Tech Group",
  description: "AI-driven energy consumption optimization for buildings, data centers, and manufacturing — reduce costs, meet ESG targets, and automate sustainability reporting.",
  keywords: "AI services, IT services, AI Energy Optimization & Sustainability",
  openGraph: {
    title: "AI Energy Optimization & Sustainability",
    description: "AI-driven energy consumption optimization for buildings, data centers, and manufacturing — reduce costs, meet ESG targets, and automate sustainability reporting.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Energy Optimization & Sustainability",
    description: "AI-driven energy consumption optimization for buildings, data centers, and manufacturing — reduce costs, meet ESG targets, and automate sustainability reporting."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-energy-optimization',
    title: 'AI Energy Optimization & Sustainability',
    description: 'AI-driven energy consumption optimization for buildings, data centers, and manufacturing — reduce costs, meet ESG targets, and automate sustainability reporting.',
    features: ['AI-powered energy load forecasting and optimization', 'HVAC, lighting, and power system automated control', 'Carbon emissions tracking with ESG reporting', 'Peer benchmarking and efficiency gap analysis', 'Renewable energy integration recommendations', 'Real-time cost savings dashboard'],
    benefits: ['Reduce energy costs by 25-40%', 'Automate ESG and sustainability reporting', 'Meet regulatory carbon reduction targets', 'Predict equipment failures before they waste energy'],
    pricing: { basic: '549', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-energy-optimization', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚡',
    href: '/ai-services/ai-energy-optimization',
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

export default function AiEnergyOptimizationAndSustainabilityPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
