import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Medical Imaging & Diagnostics — Zion Tech Group",
  description: "FDA-ready AI diagnostic support for radiology, pathology, and dermatology — detect anomalies, prioritize cases, and assist radiologists with second-opinion AI.",
  keywords: "AI services, IT services, AI Medical Imaging & Diagnostics",
  openGraph: {
    title: "AI Medical Imaging & Diagnostics",
    description: "FDA-ready AI diagnostic support for radiology, pathology, and dermatology — detect anomalies, prioritize cases, and assist radiologists with second-opinion AI.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Medical Imaging & Diagnostics",
    description: "FDA-ready AI diagnostic support for radiology, pathology, and dermatology — detect anomalies, prioritize cases, and assist radiologists with second-opinion AI."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-medical-imaging',
    title: 'AI Medical Imaging & Diagnostics',
    description: 'FDA-ready AI diagnostic support for radiology, pathology, and dermatology — detect anomalies, prioritize cases, and assist radiologists with second-opinion AI.',
    features: ['Deep learning anomaly detection in X-rays, CT, MRI', 'Pathology slide analysis and classification', 'Dermatological lesion assessment', 'Triage and workload prioritization', 'HIPAA-compliant deployment with audit trails'],
    benefits: ['Reduce diagnostic errors by 40%', 'Prioritize critical cases automatically', 'Extend specialist reach to underserved areas', 'Seamless PACS/EHR integration'],
    pricing: { basic: '999', pro: '2499', enterprise: '5999' },
    contactInfo: { website: '/ai-services/ai-medical-imaging', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏥',
    href: '/ai-services/ai-medical-imaging',
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

export default function AiMedicalImagingAndDiagnosticsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
