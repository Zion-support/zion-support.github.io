import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered PR Drafting & Description — Zion Tech Group",
  description: "Automatically generate PR titles, descriptions, and changelog entries from commit history and diff analysis; link to JIRA tickets and update documentation.",
  keywords: "AI services, IT services, AI-Powered PR Drafting & Description",
  openGraph: {
    title: "AI-Powered PR Drafting & Description",
    description: "Automatically generate PR titles, descriptions, and changelog entries from commit history and diff analysis; link to JIRA tickets and update documentation.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered PR Drafting & Description",
    description: "Automatically generate PR titles, descriptions, and changelog entries from commit history and diff analysis; link to JIRA tickets and update documentation."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-powered-pr-drafting',
     title: 'AI-Powered PR Drafting & Description',
     description: 'Automatically generate PR titles, descriptions, and changelog entries from commit history and diff analysis; link to JIRA tickets and update documentation.',
     features: [
       'Intelligent diff summarization',
       'JIRA/GitHub issue linking & status updates',
       'Changelog entry drafting per semantic version',
       'Reviewer recommendation based on ownership',
       'Auto-update of API docs & README diffs'
     ],
     benefits: [
       'Consistent, high-quality PR descriptions',
       'Save 15+ minutes per PR on documentation',
       'Keep changelogs and releases up-to-date',
       'Improve code review context and velocity'
     ],
     pricing: { basic: '0', pro: '99', enterprise: '399' },
     contactInfo: { website: '/ai-services/ai-powered-pr-drafting', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📦',
     href: '/ai-services/ai-powered-pr-drafting',
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

export default function AipoweredPrDraftingAndDescriptionPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
