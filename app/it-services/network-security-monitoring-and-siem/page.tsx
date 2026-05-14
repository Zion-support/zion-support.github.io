import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Network Security Monitoring & SIEM — Zion Tech Group",
  description: "Real-time network traffic analysis, threat correlation, and centralized Security Information and Event Management (SIEM) for enterprises requiring continuous security posture visibility.",
  keywords: "AI services, IT services, Network Security Monitoring & SIEM",
  openGraph: {
    title: "Network Security Monitoring & SIEM",
    description: "Real-time network traffic analysis, threat correlation, and centralized Security Information and Event Management (SIEM) for enterprises requiring continuous security posture visibility.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Security Monitoring & SIEM",
    description: "Real-time network traffic analysis, threat correlation, and centralized Security Information and Event Management (SIEM) for enterprises requiring continuous security posture visibility."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-network-security-monitoring',
    title: 'Network Security Monitoring & SIEM',
    description: 'Real-time network traffic analysis, threat correlation, and centralized Security Information and Event Management (SIEM) for enterprises requiring continuous security posture visibility.',
    features: ['24/7 network traffic monitoring & flow analysis', 'Centralized SIEM with log aggregation', 'Threat correlation engine with automated alerting', 'Custom dashboard & compliance reporting', 'Integration with firewalls, IDS/IPS, and endpoint protection'],
    benefits: ['Detect lateral movement within minutes, not months', 'Centralize security visibility across all infrastructure', 'Reduce alert fatigue with intelligent correlation', 'Meet regulatory requirements with automated reports'],
    pricing: { basic: '899', pro: '1999', enterprise: '4499' },
    contactInfo: { website: '/it-services/network-security-monitoring', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/it-services/network-security-monitoring',
    category: 'security'
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

export default function NetworkSecurityMonitoringAndSiemPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
