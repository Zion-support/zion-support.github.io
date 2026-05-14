import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Sentiment Analysis & Brand Monitoring — Zion Tech Group",
  description: "Real-time brand perception tracking across social media, reviews, news, and forums. Understand customer emotion at scale and act on insights before they become crises.",
  keywords: "AI services, IT services, AI Sentiment Analysis & Brand Monitoring",
  openGraph: {
    title: "AI Sentiment Analysis & Brand Monitoring",
    description: "Real-time brand perception tracking across social media, reviews, news, and forums. Understand customer emotion at scale and act on insights before they become crises.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sentiment Analysis & Brand Monitoring",
    description: "Real-time brand perception tracking across social media, reviews, news, and forums. Understand customer emotion at scale and act on insights before they become crises."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-sentiment-analysis',
    title: 'AI Sentiment Analysis & Brand Monitoring',
    description: 'Real-time brand perception tracking across social media, reviews, news, and forums. Understand customer emotion at scale and act on insights before they become crises.',
    features: ['Multi-platform social listening (X, Reddit, TikTok, news)', 'Emotion-level sentiment scoring (joy, anger, fear, trust)', 'Brand mention clustering & trending topic detection', 'Influencer identification & partnership scoring', 'Crisis early-warning system with alert triage', 'Competitor sentiment benchmarking & gap analysis'],
    benefits: ['Identify PR crises 2-3 days before mainstream pickup', 'Quantify brand health with actionable metrics', 'Discover micro-influencers in your niche organically', 'Competitor sentiment intelligence for positioning'],
    pricing: { basic: '349', pro: '799', enterprise: '1899' },
    contactInfo: { website: '/ai-services/ai-sentiment-analysis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💬',
    href: '/ai-services/ai-sentiment-analysis',
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

export default function AiSentimentAnalysisAndBrandMonitoringPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
