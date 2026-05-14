import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Service Desk Automation — Zion Tech Group",
  description: "AI-powered IT service management with intelligent ticket routing, auto-resolution, self-service portals, and SLA monitoring.",
  keywords: "AI services, IT services, IT Service Desk Automation",
  openGraph: {
    title: "IT Service Desk Automation",
    description: "AI-powered IT service management with intelligent ticket routing, auto-resolution, self-service portals, and SLA monitoring.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Service Desk Automation",
    description: "AI-powered IT service management with intelligent ticket routing, auto-resolution, self-service portals, and SLA monitoring."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-service-desk-automation',
    title: 'IT Service Desk Automation',
    description: 'AI-powered IT service management with intelligent ticket routing, auto-resolution, self-service portals, and SLA monitoring.',
    features: ['Intelligent ticket classification', 'Auto-resolution engine', 'Self-service knowledge base', 'SLA monitoring and escalation', 'Performance analytics'],
    benefits: ['Resolve 40% of tickets automatically', 'Reduce average response time by 60%', 'Improve end-user satisfaction', 'Lower IT support costs'],
    pricing: { basic: '499', pro: '1199', enterprise: '3499' },
    contactInfo: { website: '/it-services/it-service-desk-automation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎧',
    href: '/it-services/it-service-desk-automation',
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

export default function ItServiceDeskAutomationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
