import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Compliance Monitoring & Automated Auditing — Zion Tech Group",
  description: "Continuous compliance monitoring across SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS with evidence collection, gap analysis, and automated audit-ready report generation.",
  keywords: "AI services, IT services, AI Compliance Monitoring & Automated Auditing",
  openGraph: {
    title: "AI Compliance Monitoring & Automated Auditing",
    description: "Continuous compliance monitoring across SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS with evidence collection, gap analysis, and automated audit-ready report generation.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Compliance Monitoring & Automated Auditing",
    description: "Continuous compliance monitoring across SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS with evidence collection, gap analysis, and automated audit-ready report generation."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-compliance',
    title: 'AI Compliance Monitoring & Automated Auditing',
    description: 'Continuous compliance monitoring across SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS with evidence collection, gap analysis, and automated audit-ready report generation.',
    features: ['Continuous control monitoring across 5+ frameworks', 'Automated evidence collection from systems and logs', 'Real-time compliance dashboards with trend analysis', 'Gap analysis with prioritized remediation workflows', 'Audit-ready report generation with full traceability'],
    benefits: ['Reduce audit preparation time by 75%', 'Eliminate compliance blind spots with continuous monitoring', 'Pass first-time audits with confidence', 'Scale compliance across growing multi-entity organizations'],
    pricing: { basic: '449', pro: '999', enterprise: '2499' },
    contactInfo: { website: '/ai-services/ai-compliance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
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

export default function AiComplianceMonitoringAndAutomatedAuditingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
