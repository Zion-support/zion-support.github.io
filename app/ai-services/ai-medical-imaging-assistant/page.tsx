import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Medical Imaging Assistant — Zion Tech Group",
  description: "AI-powered diagnostic support for radiology and pathology: detect anomalies in X-rays, MRIs, CT scans, and histopathology slides with high accuracy.",
  keywords: "AI services, IT services, AI Medical Imaging Assistant",
  openGraph: {
    title: "AI Medical Imaging Assistant",
    description: "AI-powered diagnostic support for radiology and pathology: detect anomalies in X-rays, MRIs, CT scans, and histopathology slides with high accuracy.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Medical Imaging Assistant",
    description: "AI-powered diagnostic support for radiology and pathology: detect anomalies in X-rays, MRIs, CT scans, and histopathology slides with high accuracy."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-medical-imaging',
    title: 'AI Medical Imaging Assistant',
    description: 'AI-powered diagnostic support for radiology and pathology: detect anomalies in X-rays, MRIs, CT scans, and histopathology slides with high accuracy.',
    features: [
      'Multi-modality image analysis (X-ray, MRI, CT, ultrasound)',
      'Tumor & lesion detection & segmentation',
      'Bone fracture identification',
      'Priority triage (urgent cases flagged)',
      'DICOM & HL7 integration'
    ],
    benefits: [
      'Reduce radiologist reading time by 40%',
      'Increase early detection rates',
      'Lower false-negative risk',
      'Scale imaging capacity without hiring'
    ],
    pricing: {
      basic: '799',
      pro: '1799',
      enterprise: '4999'
    },
    contactInfo: {
      website: '/ai-services/ai-medical-imaging',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
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

export default function AiMedicalImagingAssistantPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
