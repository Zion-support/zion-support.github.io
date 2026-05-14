import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Network Automation & SD-WAN Management — Zion Tech Group",
  description: "Automated network configuration, monitoring, and optimization with SD-WAN, intent-based networking, and AI-driven performance management.",
  keywords: "AI services, IT services, Network Automation & SD-WAN Management",
  openGraph: {
    title: "Network Automation & SD-WAN Management",
    description: "Automated network configuration, monitoring, and optimization with SD-WAN, intent-based networking, and AI-driven performance management.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Automation & SD-WAN Management",
    description: "Automated network configuration, monitoring, and optimization with SD-WAN, intent-based networking, and AI-driven performance management."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-network-automation',
    title: 'Network Automation & SD-WAN Management',
    description: 'Automated network configuration, monitoring, and optimization with SD-WAN, intent-based networking, and AI-driven performance management.',
    features: ['Intent-based network configuration automation', 'SD-WAN deployment and centralized management', 'AI-driven traffic routing and QoS optimization', 'Automated compliance checks and security policy enforcement', 'Network performance monitoring with predictive alerts'],
    benefits: ['Reduce network change errors by 80%', 'Optimize WAN costs by 40-60% with SD-WAN', 'Automate repetitive network administration tasks', 'Proactively address performance degradations'],
    pricing: { basic: '999', pro: '2299', enterprise: '5499' },
    contactInfo: { website: '/it-services/network-automation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌐',
    href: '/it-services/network-automation',
    category: 'cloud'
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

export default function NetworkAutomationAndSdwanManagementPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
