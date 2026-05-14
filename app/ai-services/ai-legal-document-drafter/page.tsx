import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Legal Document Drafter — Zion Tech Group",
  description: "Draft contracts, NDAs, term sheets, and privacy policies with jurisdiction-specific clauses. Trained on actual filings from SEC, Companies House, etc.",
  keywords: "AI services, IT services, AI Legal Document Drafter",
  openGraph: {
    title: "AI Legal Document Drafter",
    description: "Draft contracts, NDAs, term sheets, and privacy policies with jurisdiction-specific clauses. Trained on actual filings from SEC, Companies House, etc.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Legal Document Drafter",
    description: "Draft contracts, NDAs, term sheets, and privacy policies with jurisdiction-specific clauses. Trained on actual filings from SEC, Companies House, etc."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-legal-drafting",
    href: "/ai-services/legal-drafting",
    icon: "⚖️",
    category: "ai",
    title: "AI Legal Document Drafter",
    description: "Draft contracts, NDAs, term sheets, and privacy policies with jurisdiction-specific clauses. Trained on actual filings from SEC, Companies House, etc.",
    features: [
      "Clause library with risk scoring",
      "Redline comparison against templates",
      "Obligation tracker with deadline reminders",
      "Multi-jurisdiction support — 50+ countries",
      "Law-firm approved templates — ex. Axiom, Latham"
    ],
    benefits: [
      "Cuts first-draft time from 4 hours to 12 minutes",
      "Reduces outside counsel spend by 35%",
      "Identifies non-standard clauses before signature"
    ],
    pricing: { startup: "299/mo", business: "899/mo", enterprise: "contact" }
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

export default function AiLegalDocumentDrafterPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
