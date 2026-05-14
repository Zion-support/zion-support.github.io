import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Video Analytics & Visual Intelligence — Zion Tech Group",
  description: "Real-time video analytics for retail, security, manufacturing, and public spaces — crowd behavior analysis, anomaly detection, and operational intelligence from existing CCTV.",
  keywords: "AI services, IT services, AI Video Analytics & Visual Intelligence",
  openGraph: {
    title: "AI Video Analytics & Visual Intelligence",
    description: "Real-time video analytics for retail, security, manufacturing, and public spaces — crowd behavior analysis, anomaly detection, and operational intelligence from existing CCTV.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Analytics & Visual Intelligence",
    description: "Real-time video analytics for retail, security, manufacturing, and public spaces — crowd behavior analysis, anomaly detection, and operational intelligence from existing CCTV."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-video-analytics',
    title: 'AI Video Analytics & Visual Intelligence',
    description: 'Real-time video analytics for retail, security, manufacturing, and public spaces — crowd behavior analysis, anomaly detection, and operational intelligence from existing CCTV.',
    features: ['Existing CCTV integration with AI overlay', 'Crowd density and flow pattern analysis', 'Anomaly detection for security incidents', 'Customer journey and dwell time analytics', 'Real-time alerts with automated response triggers'],
    benefits: ['Leverage existing camera infrastructure with AI upgrade', 'Detect security incidents 3x faster than human monitoring', 'Optimize store layouts with customer flow insights', 'Reduce retail shrinkage by 40% with proactive alerts'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-video-analytics', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📹',
    href: '/ai-services/ai-video-analytics',
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

export default function AiVideoAnalyticsAndVisualIntelligencePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
