import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Ethics, Safety & Governance Framework — Zion Tech Group",
  description: "Comprehensive AI governance framework with bias detection, model explainability, audit trails, and regulatory compliance for responsible AI deployment.",
  keywords: "AI services, IT services, AI Ethics, Safety & Governance Framework",
  openGraph: {
    title: "AI Ethics, Safety & Governance Framework",
    description: "Comprehensive AI governance framework with bias detection, model explainability, audit trails, and regulatory compliance for responsible AI deployment.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ethics, Safety & Governance Framework",
    description: "Comprehensive AI governance framework with bias detection, model explainability, audit trails, and regulatory compliance for responsible AI deployment."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-ethics-governance',
    title: 'AI Ethics, Safety & Governance Framework',
    description: 'Comprehensive AI governance framework with bias detection, model explainability, audit trails, and regulatory compliance for responsible AI deployment.',
    features: ['Automated bias detection across training data and model outputs', 'Model interpretability and explainability (SHAP/LIME integration)', 'AI ethics board policy generation and compliance tracking', 'Regulatory compliance automation (EU AI Act, NIST AI RMF)', 'Continuous monitoring and audit log generation'],
    benefits: ['Deploy AI responsibly with regulatory confidence', 'Reduce AI-related legal and reputational risks', 'Build stakeholder and customer trust in AI systems', 'Stay ahead of emerging AI regulations globally'],
    pricing: { basic: '799', pro: '1899', enterprise: '4499' },
    contactInfo: { website: '/ai-services/ai-ethics-governance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚖️',
    href: '/ai-services/ai-ethics-governance',
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

export default function AiEthicsSafetyAndGovernanceFrameworkPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
