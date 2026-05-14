import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SAP Integration Hub — Zion Tech Group",
  description: "SAP Integration Hub",
  keywords: "AI services, IT services, SAP Integration Hub",
  openGraph: {
    title: "SAP Integration Hub",
    description: "SAP Integration Hub",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Integration Hub",
    description: "SAP Integration Hub"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-sap-integration-hub',
    title: 'SAP Integration Hub',
    description: `Pre-built connectors for SAP ERP, S/4HANA, SuccessFactors, and Ariba. Real-time sync, IDoc/BAPI support, and error handling out of the box.`,
    features: ["SAP ERP BAPI/IDoc adapters", "SuccessFactors sync", "Ariba network integration", "Error reconciliation dashboard", "SAP-certified connectors"],
    benefits: ["Integrate SAP in days not months", "Eliminate manual data entry", "Real-time business visibility"],
    pricing: {"basic":"499","pro":"1099","enterprise":"2799"},
    contactInfo: {
      website: '/it-services/it-sap-integration-hub',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🏢',
    href: '/it-services/it-sap-integration-hub',
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

export default function SapIntegrationHubPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
