import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Meeting Intelligence Suite — Zion Tech Group",
  description: "Autonomous meeting agent that joins Zoom and Teams, transcribes, summarizes decisions, extracts action items with owners and due dates, and pushes to your project tools.",
  keywords: "AI services, IT services, AI Meeting Intelligence Suite",
  openGraph: {
    title: "AI Meeting Intelligence Suite",
    description: "Autonomous meeting agent that joins Zoom and Teams, transcribes, summarizes decisions, extracts action items with owners and due dates, and pushes to your project tools.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Meeting Intelligence Suite",
    description: "Autonomous meeting agent that joins Zoom and Teams, transcribes, summarizes decisions, extracts action items with owners and due dates, and pushes to your project tools."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-meeting-intelligence",
    href: "/ai-services/meeting-intelligence",
    icon: "🤖",
    category: "ai",
    title: "AI Meeting Intelligence Suite",
    description: "Autonomous meeting agent that joins Zoom and Teams, transcribes, summarizes decisions, extracts action items with owners and due dates, and pushes to your project tools.",
    features: [
      "Real-time transcription in 60+ languages",
      "Decision to task auto-creation (Asana, Linear, Jira)",
      "Conflict detection on action item assignments",
      "Voice print identification and speaker timeline",
      "Private mode for confidential calls"
    ],
    benefits: [
      "Saves 5–7 hours per week in meeting follow-up",
      "Zero missed action items or unclear owners",
      "Searchable knowledge base of all past discussions"
    ],
    pricing: { basic: "49", pro: "149", business: "499" }
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

export default function AiMeetingIntelligenceSuitePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
