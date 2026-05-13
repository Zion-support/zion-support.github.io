import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Document Intelligence Suite | Zion Tech Group',
  description: 'End-to-end intelligent document processing with AI-powered OCR, classification, data extraction, and automated workflow triggers for invoices, contracts, forms, and correspondence.',
  alternates: { canonical: '/micro-saas/ai-document-intelligence-suite' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Document Intelligence Suite',
        category: 'Document Processing & Automation',
        description: 'End-to-end intelligent document processing with AI-powered OCR, classification, data extraction, and automated workflow triggers for invoices, contracts, forms, and correspondence.',
        iconEmoji: '📄',
        features: [
            {
                        "title": "AI-Powered OCR Engine",
                        "description": "High-accuracy text extraction from scanned documents, handwritten forms, photos, and complex layouts with 99%+ accuracy."
            },
            {
                        "title": "Intelligent Document Classification",
                        "description": "Automatically classify incoming documents (invoice, contract, form, letter) and route to the correct processing pipeline."
            },
            {
                        "title": "Field-Level Data Extraction",
                        "description": "Extract structured data from unstructured documents including line items, dates, amounts, signatures, and custom fields."
            },
            {
                        "title": "Validation & Reconciliation",
                        "description": "Cross-reference extracted data against ERP, CRM, and accounting systems with automatic discrepancy flagging."
            },
            {
                        "title": "Workflow & Approval Automation",
                        "description": "Trigger automated approval workflows, RPA actions, and database updates based on extracted data and business rules."
            },
            {
                        "title": "Compliance & Audit Trail",
                        "description": "Immutable audit trail with document versioning, access controls, and compliance reporting for SOX, GDPR, and HIPAA."
            }
],
        useCases: [
            {
                        "title": "Invoice Processing Automation",
                        "description": "Process thousands of invoices per month with zero manual data entry, matching against POs and triggering approval workflows.",
                        "icon": "\ud83d\udcb8"
            },
            {
                        "title": "Contract Lifecycle Management",
                        "description": "Extract key terms, dates, and obligations from contracts with alerts for renewals, expirations, and compliance requirements.",
                        "icon": "\ud83d\udcdd"
            },
            {
                        "title": "Healthcare Records Digitization",
                        "description": "Convert paper medical records, claims forms, and prescriptions into structured, searchable, HIPAA-compliant data.",
                        "icon": "\ud83c\udfe5"
            }
],
        benefits: [
      "Eliminate 90% of manual data entry",
      "Process documents 50x faster",
      "99%+ extraction accuracy",
      "ERP-ready structured output",
      "Built-in compliance audit trail",
      "Scalable to millions of documents"
],
        ctaLabel: 'Get Started with AI Document Intelligence Suite',
        pricing: [
          { tier: 'Starter', price: '$49', period: '/month', features: ['Up to 10 documents per month', 'Basic OCR & extraction', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$149', period: '/month', features: ['Up to 500 documents per month', 'Full AI extraction & classification', 'Priority support', 'API access', 'Workflow automation'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited documents', 'Custom models & fine-tuning', 'Dedicated support engineer', 'SLA guarantee', 'On-premise deployment option', 'SSO & advanced security'], popular: false },
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown DE 19709',
        },
      }}
    />
  );
}
