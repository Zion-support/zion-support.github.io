import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer 360 Unified Profile — Zion Tech Group",
  description: "Customer 360 Unified Profile",
  keywords: "AI services, IT services, Customer 360 Unified Profile",
  openGraph: {
    title: "Customer 360 Unified Profile",
    description: "Customer 360 Unified Profile",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer 360 Unified Profile",
    description: "Customer 360 Unified Profile"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-customer-360',
    title: 'Customer 360 Unified Profile',
    description: `Aggregate all customer data (CRM, support, usage, billing) into single timeline. AI suggests next best action per customer.`,
    features: ["Data unification (10+ sources)", "Timeline view", "Next-best-action recommendations", "Segment builder", "Predictive CLV"],
    benefits: ["Know customer context instantly", "Personalize every interaction", "Identify at-risk accounts early"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/ai-services/ai-customer-360',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👤',
    href: '/ai-services/ai-customer-360',
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

export default function Customer360UnifiedProfilePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
