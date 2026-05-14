import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Sustainability Dashboard — Zion Tech Group",
  description: "Track and optimize carbon footprint across your IT estate — data centers, cloud workloads, employee devices, and network. Set reduction targets and auto-generate ESG reports.",
  keywords: "AI services, IT services, IT Sustainability Dashboard",
  openGraph: {
    title: "IT Sustainability Dashboard",
    description: "Track and optimize carbon footprint across your IT estate — data centers, cloud workloads, employee devices, and network. Set reduction targets and auto-generate ESG reports.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Sustainability Dashboard",
    description: "Track and optimize carbon footprint across your IT estate — data centers, cloud workloads, employee devices, and network. Set reduction targets and auto-generate ESG reports."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-sustainability-dashboard",
    href: "/it-services/sustainability-dashboard",
    icon: "🌱",
    category: "it",
    title: "IT Sustainability Dashboard",
    description: "Track and optimize carbon footprint across your IT estate — data centers, cloud workloads, employee devices, and network. Set reduction targets and auto-generate ESG reports.",
    features: [
      "Cloud carbon calculator — AWS, Azure, GCP",
      "Hardware lifecycle tracking — embodied carbon",
      "Renewable energy usage % per region",
      "Automated sustainability recommendations",
      "ESG report export — GRI, SASB, TCFD frameworks"
    ],
    benefits: [
      "Reduces carbon output by 20–35% in year 1",
      "Meets investor ESG requirements",
      "Saves $200K+ annually via right-sizing and reserved instance optimization"
    ],
    pricing: { basic: "699", enterprise: "contact" }
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

export default function ItSustainabilityDashboardPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
