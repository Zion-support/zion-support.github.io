import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Customer Sentiment Tracker — Zion Tech Group",
  description: "AI Customer Sentiment Tracker",
  keywords: "AI services, IT services, AI Customer Sentiment Tracker",
  openGraph: {
    title: "AI Customer Sentiment Tracker",
    description: "AI Customer Sentiment Tracker",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Sentiment Tracker",
    description: "AI Customer Sentiment Tracker"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-customer-sentiment-tracker',
    title: 'AI Customer Sentiment Tracker',
    description: `Monitors support tickets, reviews, social mentions, and surveys to produce a real-time Net Promoter Score (NPS) and emotion heatmap.`,
    features: ["Multi-channel aggregation (email, chat, social)", "Emotion classification (8 categories)", "Trend alerts for sentiment drops", "Root-cause topic clustering"],
    benefits: ["Detect brand crises within hours", "Identify at-risk accounts proactively", "Measure campaign impact on sentiment"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-customer-sentiment-tracker',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📊',
    href: '/ai-services/ai-customer-sentiment-tracker',
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

export default function AiCustomerSentimentTrackerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
