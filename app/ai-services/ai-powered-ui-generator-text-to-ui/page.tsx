import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered UI Generator (Text-to-UI) — Zion Tech Group",
  description: "Turn natural language descriptions into production-ready React/Next.js components with Tailwind styling; customize variants, states, and accessibility attributes via chat.",
  keywords: "AI services, IT services, AI-Powered UI Generator (Text-to-UI)",
  openGraph: {
    title: "AI-Powered UI Generator (Text-to-UI)",
    description: "Turn natural language descriptions into production-ready React/Next.js components with Tailwind styling; customize variants, states, and accessibility attributes via chat.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered UI Generator (Text-to-UI)",
    description: "Turn natural language descriptions into production-ready React/Next.js components with Tailwind styling; customize variants, states, and accessibility attributes via chat."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-powered-ui-generator',
     title: 'AI-Powered UI Generator (Text-to-UI)',
     description: 'Turn natural language descriptions into production-ready React/Next.js components with Tailwind styling; customize variants, states, and accessibility attributes via chat.',
     features: [
       'Natural language to JSX/TSX component generation',
       'Tailwind CSS class application',
       'Responsive breakpoint handling',
       'A11y attributes (aria-* roles & labels)',
       'Export to Figma/Storybook format'
     ],
     benefits: [
       'Ship UI 10x faster',
       'Maintain design consistency automatically',
       'Reduce frontend dev iteration cycles',
       'Prototypes in minutes, not days'
     ],
     pricing: { basic: '0', pro: '149', enterprise: '699' },
     contactInfo: { website: '/ai-services/ai-powered-ui-generator', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎨',
     href: '/ai-services/ai-powered-ui-generator',
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

export default function AipoweredUiGeneratorTexttouiPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
