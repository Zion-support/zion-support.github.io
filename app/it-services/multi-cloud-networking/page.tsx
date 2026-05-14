import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Multi-Cloud Networking — Zion Tech Group",
  description: "Multi-Cloud Networking",
  keywords: "AI services, IT services, Multi-Cloud Networking",
  openGraph: {
    title: "Multi-Cloud Networking",
    description: "Multi-Cloud Networking",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Cloud Networking",
    description: "Multi-Cloud Networking"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-multi-cloud-networking',
    title: 'Multi-Cloud Networking',
    description: `Global SD-WAN with direct cloud interconnect (AWS Direct Connect, Azure ExpressRoute). Secure, performant, and centrally managed.`,
    features: ["Global backbone (100+ PoPs)", "Direct cloud connects", "Zero-trust network access", "WAN optimization", "Central policy management"],
    benefits: ["Predictable performance", "Secure remote access", "Reduce MPLS costs"],
    pricing: {"basic":"399","pro":"899","enterprise":"2399"},
    contactInfo: {
      website: '/it-services/it-multi-cloud-networking',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌐',
    href: '/it-services/it-multi-cloud-networking',
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

export default function MulticloudNetworkingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
