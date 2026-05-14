import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Computer Vision — Zion Tech Group",
  description: "Image recognition, object detection, quality inspection, and visual search powered by deep learning models trained on your domain data.",
  keywords: "AI services, IT services, AI Computer Vision",
  openGraph: {
    title: "AI Computer Vision",
    description: "Image recognition, object detection, quality inspection, and visual search powered by deep learning models trained on your domain data.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Computer Vision",
    description: "Image recognition, object detection, quality inspection, and visual search powered by deep learning models trained on your domain data."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-computer-vision',
    title: 'AI Computer Vision',
    description: 'Image recognition, object detection, quality inspection, and visual search powered by deep learning models trained on your domain data.',
    features: ['Image classification & object detection', 'Visual quality inspection & defect detection', 'OCR + layout analysis', 'Visual search & similarity matching', 'Edge deployment for real-time inference'],
    benefits: ['Automated visual inspection at scale', '99%+ defect detection accuracy', 'Reduce QC labor costs by 80%', 'Real-time inference on edge devices'],
    pricing: { basic: '449', pro: '899', enterprise: '2199' },
    contactInfo: { website: '/ai-services/ai-computer-vision', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '👁️',
    href: '/ai-services/ai-computer-vision',
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

export default function AiComputerVisionPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
