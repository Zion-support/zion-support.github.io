import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Sentiment Tracker — Zion Tech Group",
  description: "Social Sentiment Tracker",
  keywords: "AI services, IT services, Social Sentiment Tracker",
  openGraph: {
    title: "Social Sentiment Tracker",
    description: "Social Sentiment Tracker",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Sentiment Tracker",
    description: "Social Sentiment Tracker"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-social-sentiment-tracker',
    title: 'Social Sentiment Tracker',
    description: `Monitor brand sentiment across Twitter, Reddit, news, forums in real-time. Crisis detection alerts before issues go viral.`,
    features: ["30+ data sources", "Sentiment scoring (-100 to +100)", "Crisis detection", "Influencer identification", "Competitor benchmark"],
    benefits: ["Protect brand reputation proactively", "Understand customer feelings", "Measure campaign impact"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/ai-services/ai-social-sentiment-tracker',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📢',
    href: '/ai-services/ai-social-sentiment-tracker',
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

export default function SocialSentimentTrackerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
