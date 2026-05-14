import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Presentation & Report Generator — Zion Tech Group",
  description: "Transform raw data into polished presentations and executive reports — AI-driven slide design, data visualization, narrative generation, and brand-aligned templates.",
  keywords: "AI services, IT services, AI Presentation & Report Generator",
  openGraph: {
    title: "AI Presentation & Report Generator",
    description: "Transform raw data into polished presentations and executive reports — AI-driven slide design, data visualization, narrative generation, and brand-aligned templates.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Presentation & Report Generator",
    description: "Transform raw data into polished presentations and executive reports — AI-driven slide design, data visualization, narrative generation, and brand-aligned templates."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-presentation-maker',
    title: 'AI Presentation & Report Generator',
    description: 'Transform raw data into polished presentations and executive reports — AI-driven slide design, data visualization, narrative generation, and brand-aligned templates.',
    features: ['AI-powered slide generation from documents and data', 'Automated chart and infographic creation', 'Executive narrative and talking point generation', 'Brand guideline enforcement across all slides', 'Export to PowerPoint, Google Slides, and PDF'],
    benefits: ['Create presentations 90% faster with AI generation', 'Ensure consistent brand quality across all decks', 'Transform complex data into clear executive narratives', 'Never start a slide deck from scratch again'],
    pricing: { basic: '99', pro: '249', enterprise: '599' },
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

export default function AiPresentationAndReportGeneratorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
