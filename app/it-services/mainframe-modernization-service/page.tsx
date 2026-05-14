import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mainframe Modernization Service — Zion Tech Group",
  description: "Mainframe Modernization Service",
  keywords: "AI services, IT services, Mainframe Modernization Service",
  openGraph: {
    title: "Mainframe Modernization Service",
    description: "Mainframe Modernization Service",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainframe Modernization Service",
    description: "Mainframe Modernization Service"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-mainframe-modernization',
    title: 'Mainframe Modernization Service',
    description: `Rehost, replatform, or refactor COBOL/PL1 applications to cloud. Automated code conversion, database migration, and cutover planning.`,
    features: ["Automated COBOL to Java/TS conversion", "Database migration (DB2 \u2192 PostgreSQL)", "Replatform to Azure/AWS mainframe alternatives", "Cutover orchestration", "Regression testing suite"],
    benefits: ["Reduce mainframe TCO by 70%", "Modernize at your own pace", "Keep business logic intact"],
    pricing: {"basic":"599","pro":"1299","enterprise":"3499"},
    contactInfo: {
      website: '/it-services/it-mainframe-modernization',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🖥️',
    href: '/it-services/it-mainframe-modernization',
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

export default function MainframeModernizationServicePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
