import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Presentation & Pitch Deck Maker — Zion Tech Group",
  description: "Generate polished presentations, pitch decks, and reports from outlines with data visualization, templates, and speaker notes.",
  keywords: "AI services, IT services, AI Presentation & Pitch Deck Maker",
  openGraph: {
    title: "AI Presentation & Pitch Deck Maker",
    description: "Generate polished presentations, pitch decks, and reports from outlines with data visualization, templates, and speaker notes.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Presentation & Pitch Deck Maker",
    description: "Generate polished presentations, pitch decks, and reports from outlines with data visualization, templates, and speaker notes."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-presentation-maker',
    title: 'AI Presentation & Pitch Deck Maker',
    description: 'Generate polished presentations, pitch decks, and reports from outlines with data visualization, templates, and speaker notes.',
    features: ['Document-to-slide conversion from any file', 'Smart data visualization — auto charts, graphs', 'AI-generated speaker notes and timing cues', 'Brand-consistent — apply company guidelines', 'Multi-format export — PowerPoint, Google Slides, PDF', 'Real-time collaboration with team editing'],
    benefits: ['Create presentations 10x faster', 'Professional design without designers', 'Data-driven visualizations', 'Brand consistency across teams', 'Speaker notes automatically included', 'Multi-format export options'],
    pricing: { basic: '39', pro: '129', enterprise: '349' },
    contactInfo: { website: '/ai-services/ai-presentation-maker', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/ai-services/ai-presentation-maker',
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

export default function AiPresentationAndPitchDeckMakerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
