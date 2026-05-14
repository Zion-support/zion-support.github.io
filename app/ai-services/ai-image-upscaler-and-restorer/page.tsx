import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Image Upscaler and Restorer — Zion Tech Group",
  description: "Upscale images 4–16× with detail reconstruction. Removes JPEG artifacts, fixes blur, and even colorizes black and white photos with historical accuracy.",
  keywords: "AI services, IT services, AI Image Upscaler and Restorer",
  openGraph: {
    title: "AI Image Upscaler and Restorer",
    description: "Upscale images 4–16× with detail reconstruction. Removes JPEG artifacts, fixes blur, and even colorizes black and white photos with historical accuracy.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Upscaler and Restorer",
    description: "Upscale images 4–16× with detail reconstruction. Removes JPEG artifacts, fixes blur, and even colorizes black and white photos with historical accuracy."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-image-upscaling",
    href: "/ai-services/image-upscaling",
    icon: "🖼️",
    category: "ai",
    title: "AI Image Upscaler and Restorer",
    description: "Upscale images 4–16× with detail reconstruction. Removes JPEG artifacts, fixes blur, and even colorizes black and white photos with historical accuracy.",
    features: [
      "Face-aware upscaling — preserves identity",
      "Batch processing via API — 10K images/hr",
      "Lossless PNG optimization post-upscale",
      "Before and after preview with quality metrics",
      "On-premise Docker image for air-gapped environments"
    ],
    benefits: [
      "Makes legacy asset libraries print-ready again",
      "Saves $50K+ in reshoots for archival imagery",
      "Improves product image conversion by 18% on e-commerce"
    ],
    pricing: { payg: "0.05/MP", subscription: "199/mo" }
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

export default function AiImageUpscalerAndRestorerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
