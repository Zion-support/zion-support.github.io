import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Customer Sentiment Analytics — Zion Tech Group",
  description: "Real-time sentiment analysis across reviews, surveys, social media, and support interactions to drive proactive customer experience improvements.",
  keywords: "AI services, IT services, AI Customer Sentiment Analytics",
  openGraph: {
    title: "AI Customer Sentiment Analytics",
    description: "Real-time sentiment analysis across reviews, surveys, social media, and support interactions to drive proactive customer experience improvements.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Sentiment Analytics",
    description: "Real-time sentiment analysis across reviews, surveys, social media, and support interactions to drive proactive customer experience improvements."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-customer-sentiment-analytics',
    title: 'AI Customer Sentiment Analytics',
    description: 'Real-time sentiment analysis across reviews, surveys, social media, and support interactions to drive proactive customer experience improvements.',
    features: ['Multi-channel sentiment tracking', 'Emotion intensity scoring', 'Trend detection and alerting', 'Competitor sentiment benchmarking', 'Actionable insight generation'],
    benefits: ['Predict customer churn 30 days early', 'Identify brand perception shifts', 'Prioritize CX improvements', 'Benchmark against competitors'],
    pricing: { basic: '349', pro: '799', enterprise: '1999' },
    contactInfo: { website: '/ai-services/ai-customer-sentiment-analytics', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💭',
    href: '/ai-services/ai-customer-sentiment-analytics',
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

export default function AiCustomerSentimentAnalyticsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
