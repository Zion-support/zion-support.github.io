import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Document Redaction and PII Removal — Zion Tech Group",
  description: "Automatically detects and redacts PII, PHI, and sensitive data in documents, PDFs, images, and transcripts. SOC2-compliant audit trail included.",
  keywords: "AI services, IT services, AI Document Redaction and PII Removal",
  openGraph: {
    title: "AI Document Redaction and PII Removal",
    description: "Automatically detects and redacts PII, PHI, and sensitive data in documents, PDFs, images, and transcripts. SOC2-compliant audit trail included.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Document Redaction and PII Removal",
    description: "Automatically detects and redacts PII, PHI, and sensitive data in documents, PDFs, images, and transcripts. SOC2-compliant audit trail included."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-document-redaction",
    href: "/ai-services/document-redaction",
    icon: "🔒",
    category: "ai",
    title: "AI Document Redaction and PII Removal",
    description: "Automatically detects and redacts PII, PHI, and sensitive data in documents, PDFs, images, and transcripts. SOC2-compliant audit trail included.",
    features: [
      "Named entity recognition across 50+ PII types",
      "Image-based document OCR and redaction",
      "Bulk processing with S3 and GCS integration",
      "Tamper-evident redaction certificates",
      "Regex custom entity support"
    ],
    benefits: [
      "Preps 10,000 pages for public release in under 1 hour",
      "Eliminates manual review costs — $0.03/page vs $0.45/page",
      "Audit-ready for GDPR, HIPAA, CCPA violations"
    ],
    pricing: { payg: "0.03/page", subscription: "499/mo" }
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

export default function AiDocumentRedactionAndPiiRemovalPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
