import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Codebase Documentation Generator — Zion Tech Group",
  description: "AI Codebase Documentation Generator",
  keywords: "AI services, IT services, AI Codebase Documentation Generator",
  openGraph: {
    title: "AI Codebase Documentation Generator",
    description: "AI Codebase Documentation Generator",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Codebase Documentation Generator",
    description: "AI Codebase Documentation Generator"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-codebase-doc-generator',
    title: 'AI Codebase Documentation Generator',
    description: `Automatically generates architecture diagrams, API docs, and README files by analyzing your Git repository and code dependencies.`,
    features: ["Interactive dependency graph", "Auto-updated API endpoint docs", "Change-log highlighting", "Developer onboarding checklist"],
    benefits: ["Cuts documentation time by 80%", "Keeps docs in sync with code", "Eases new hire ramp-up"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-codebase-doc-generator',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📚',
    href: '/ai-services/ai-codebase-doc-generator',
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

export default function AiCodebaseDocumentationGeneratorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
