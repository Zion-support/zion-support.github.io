import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Call Center Voice Analytics — Zion Tech Group",
  description: "Real-time call transcription, sentiment analysis, agent coaching insights, and compliance monitoring for contact centers.",
  keywords: "AI services, IT services, AI Call Center Voice Analytics",
  openGraph: {
    title: "AI Call Center Voice Analytics",
    description: "Real-time call transcription, sentiment analysis, agent coaching insights, and compliance monitoring for contact centers.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Call Center Voice Analytics",
    description: "Real-time call transcription, sentiment analysis, agent coaching insights, and compliance monitoring for contact centers."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-call-center-voice-analytics',
    title: 'AI Call Center Voice Analytics',
    description: 'Real-time call transcription, sentiment analysis, agent coaching insights, and compliance monitoring for contact centers.',
    features: [
      'Real-time speech-to-text transcription',
      'Sentiment & emotion detection',
      'Agent compliance monitoring (PCI, GDPR)',
      'Automated coaching suggestions',
      'Keyword & topic trend analysis'
    ],
    benefits: [
      'Improve CSAT scores by 25%',
      'Reduce agent onboarding time by 50%',
      'Automated compliance evidence collection',
      'Identify upsell opportunities in real-time'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1899'
    },
    contactInfo: {
      website: '/ai-services/ai-call-center-voice-analytics',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📞',
    href: '/ai-services/ai-call-center-voice-analytics',
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

export default function AiCallCenterVoiceAnalyticsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
