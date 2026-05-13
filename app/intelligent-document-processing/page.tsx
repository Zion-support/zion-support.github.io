import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intelligent Document Processing (IDP) | Zion Tech Group',
  description:
    'AI-powered document processing: extract data from invoices, contracts, receipts, and forms with 99.5% accuracy. Automate Accounts Payable, contract management, and compliance. Reduces manual data entry by 95%.',
  alternates: { canonical: '/intelligent-document-processing' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Intelligent Document Processing',
        category: 'Document Automation',
        description:
          'Transform unstructured documents into structured, actionable data using advanced AI. Our IDP platform reads invoices, contracts, receipts, purchase orders, and more — extracting fields, tables, and signatures with 99.5% accuracy. Automate AP/AR, contract lifecycle management, and compliance workflows. Starting at $1,499/month.',
        iconEmoji: '📄',
        features: [
          {
            title: 'Multi-Format Document Understanding',
            description:
              'Process PDFs, scans, images, Word docs, emails, and faxes. AI handles handwritten text, checkboxes, tables, and multi-page layouts without templates.',
          },
          {
            title: 'Pre-trained & Custom Models',
            description:
              'Out-of-the-box models for invoices, receipts, W-2s, bank statements, contracts. Train custom models on your unique documents with just 50 labeled examples.',
          },
          {
            title: 'Seamless ERP Integration',
            description:
              'Push extracted data directly into SAP, Oracle, NetSuite, QuickBooks, and Dynamics. Bi-directional sync: update document status when invoices are paid.',
          },
          {
            title: 'Human-in-the-Loop Validation',
            description:
              'Uncertain extractions routed to a simple review UI. One-click corrections improve models over time. Full audit trail for compliance.',
          },
          {
            title: 'Workflow Automation',
            description:
              'Trigger downstream actions: route approvals, create vendor records, initiate payments, flag duplicates, and archive to S3/SharePoint.',
          },
          {
            title: 'Compliance & Security',
            description:
              'SOC 2 Type II compliant. PII detection and masking, encryption at rest, role-based access, and GDPR-ready data handling.',
          },
        ],
        useCases: [
          {
            title: 'Accounts Payable Automation',
            description:
              'Extract vendor, line items, totals from invoices. Match to POs, route for approval, export to accounting software. Cut processing time from days to minutes.',
            icon: '💳',
          },
          {
            title: 'Contract Lifecycle Management',
            description:
              'Extract parties, dates, clauses, obligations. Track renewals, deadlines, and compliance. Integrate with DocuSign and Adobe Sign.',
            icon: '📝',
          },
          {
            title: 'Loan & Application Processing',
            description:
              'Automate mortgage, small business loan, and insurance applications. Extract income, assets, employment data from pay stubs, W-2s, bank statements.',
            icon: '🏦',
          },
        ],
        pricing: [
          {
            tier: 'Starter',
            price: '$1,499',
            period: '/month',
            features: [
              'Up to 5,000 pages/month',
              'Pre-trained models (invoices, receipts)',
              'Basic integrations (QuickBooks, Excel)',
              'Email support',
              '30-day retention',
            ],
          },
          {
            tier: 'Growth',
            price: '$3,999',
            period: '/month',
            features: [
              'Up to 25,000 pages/month',
              'Custom model training',
              'Advanced ERP integrations (NetSuite, SAP)',
              'Workflow automation',
              'Priority support',
              '90-day retention',
            ],
            popular: true,
          },
          {
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited pages',
              'Dedicated AI trainer',
              'On-premise/private cloud',
              'Custom API development',
              'SLA guarantees',
              '24/7 phone support',
              'Compliance reporting',
            ],
          },
        ],
        benefits: [
          'Reduce manual data entry by 95%',
          'Extract data with 99.5% accuracy',
          'Cut AP processing costs by 80%',
          'Accelerate revenue cycle',
          'Maintain full audit compliance',
          'Scale without adding headcount',
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709',
        },
        ctaLabel: 'Start a Free Document Processing Trial',
      }}
    />
  );
}
