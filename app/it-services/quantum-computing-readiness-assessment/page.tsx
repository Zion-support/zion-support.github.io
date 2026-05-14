import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quantum Computing Readiness Assessment — Zion Tech Group",
  description: "Evaluate your organization quantum readiness, identify cryptographic vulnerabilities, and develop migration strategies for post-quantum security standards.",
  keywords: "AI services, IT services, Quantum Computing Readiness Assessment",
  openGraph: {
    title: "Quantum Computing Readiness Assessment",
    description: "Evaluate your organization quantum readiness, identify cryptographic vulnerabilities, and develop migration strategies for post-quantum security standards.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Computing Readiness Assessment",
    description: "Evaluate your organization quantum readiness, identify cryptographic vulnerabilities, and develop migration strategies for post-quantum security standards."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-quantum-readiness',
    title: 'Quantum Computing Readiness Assessment',
    description: 'Evaluate your organization quantum readiness, identify cryptographic vulnerabilities, and develop migration strategies for post-quantum security standards.',
    features: ['Post-quantum cryptography assessment', 'Quantum vulnerability scanning across systems', 'NIST PQC migration roadmap development', 'Quantum-safe encryption implementation', 'Executive quantum risk briefing and training'],
    benefits: ['Prepare for quantum computing threats proactively', 'Comply with emerging NIST PQC standards', 'Protect long-lived encrypted data from harvest-now-decrypt-later', 'Position as quantum-ready enterprise leader'],
    pricing: { basic: '3499', pro: '7999', enterprise: '18999' },
    contactInfo: { website: '/it-services/quantum-readiness', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔮',
    href: '/it-services/quantum-readiness',
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

export default function QuantumComputingReadinessAssessmentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
