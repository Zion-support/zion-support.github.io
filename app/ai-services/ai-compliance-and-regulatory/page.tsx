import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Compliance & Regulatory — Zion Tech Group",
  description: "Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more.",
  keywords: "AI services, IT services, AI Compliance & Regulatory",
  openGraph: {
    title: "AI Compliance & Regulatory",
    description: "Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Compliance & Regulatory",
    description: "Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-compliance',
    title: 'AI Compliance & Regulatory',
    description: 'Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more.',
    features: [
      'Automated policy generation',
      'Real-time compliance monitoring',
      'Risk assessment scoring',
      'Audit trail & reporting',
      'Regulatory change alerts'
    ],
    benefits: [
      'Continuous compliance assurance',
      'Reduced audit preparation time by 70%',
      'Automated risk scoring',
      'Multi-framework coverage'
    ],
    pricing: {
      basic: '449',
      pro: '999',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-compliance',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/ai-services/ai-compliance',
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

export default function AiComplianceAndRegulatoryPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
