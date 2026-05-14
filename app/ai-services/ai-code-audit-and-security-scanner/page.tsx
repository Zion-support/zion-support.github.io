import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Code Audit and Security Scanner — Zion Tech Group",
  description: "Deep static analysis that finds complex vulnerabilities — logic bugs, race conditions, crypto misuses — beyond traditional linters. Uses LLMs to understand intent.",
  keywords: "AI services, IT services, AI Code Audit and Security Scanner",
  openGraph: {
    title: "AI Code Audit and Security Scanner",
    description: "Deep static analysis that finds complex vulnerabilities — logic bugs, race conditions, crypto misuses — beyond traditional linters. Uses LLMs to understand intent.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Audit and Security Scanner",
    description: "Deep static analysis that finds complex vulnerabilities — logic bugs, race conditions, crypto misuses — beyond traditional linters. Uses LLMs to understand intent."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-code-audit-security",
    href: "/ai-services/code-audit-security",
    icon: "🔐",
    category: "ai",
    title: "AI Code Audit and Security Scanner",
    description: "Deep static analysis that finds complex vulnerabilities — logic bugs, race conditions, crypto misuses — beyond traditional linters. Uses LLMs to understand intent.",
    features: [
      "Detects business logic flaws and privilege escalation",
      "Smart contract audit mode (EVM, Solana, Move)",
      "Patch suggestion with fix diffs",
      "SBOM generation and dependency risk scoring",
      "CI/CD gate integration"
    ],
    benefits: [
      "Prevents 90% of critical vulnerabilities before deployment",
      "Reduces manual code review time by 60%",
      "Meets SOC2 and ISO27001 compliance requirements"
    ],
    pricing: { basic: "149", pro: "399", team: "1299" }
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

export default function AiCodeAuditAndSecurityScannerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
