import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secure File Transfer (MFT) — Zion Tech Group",
  description: "Secure File Transfer (MFT)",
  keywords: "AI services, IT services, Secure File Transfer (MFT)",
  openGraph: {
    title: "Secure File Transfer (MFT)",
    description: "Secure File Transfer (MFT)",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure File Transfer (MFT)",
    description: "Secure File Transfer (MFT)"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-secure-file-transfer',
    title: 'Secure File Transfer (MFT)',
    description: `Managed file transfer with end-to-end encryption, audit trails, and automated scheduling. Supports SFTP, FTPS, AS2, and HTTPS.`,
    features: ["PGP/GPG encryption", "AS2 protocol support", "Workflow automation", "Compliance reports (HIPAA, PCI)", "Detailed audit logs"],
    benefits: ["Secure B2B exchanges", "Automate file-based integrations", "Pass audits with ease"],
    pricing: {"basic":"199","pro":"499","enterprise":"1199"},
    contactInfo: {
      website: '/it-services/it-secure-file-transfer',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📁',
    href: '/it-services/it-secure-file-transfer',
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

export default function SecureFileTransferMftPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
