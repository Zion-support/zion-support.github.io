import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Assisted Code Migration & Refactoring — Zion Tech Group",
  description: "Automate legacy codebase modernization: convert jQuery to React, Python 2 to 3, AngularJS to modern frameworks with semantic-preserving transformations.",
  keywords: "AI services, IT services, AI-Assisted Code Migration & Refactoring",
  openGraph: {
    title: "AI-Assisted Code Migration & Refactoring",
    description: "Automate legacy codebase modernization: convert jQuery to React, Python 2 to 3, AngularJS to modern frameworks with semantic-preserving transformations.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Assisted Code Migration & Refactoring",
    description: "Automate legacy codebase modernization: convert jQuery to React, Python 2 to 3, AngularJS to modern frameworks with semantic-preserving transformations."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-for-code-migration',
     title: 'AI-Assisted Code Migration & Refactoring',
     description: 'Automate legacy codebase modernization: convert jQuery to React, Python 2 to 3, AngularJS to modern frameworks with semantic-preserving transformations.',
     features: [
       'Language-to-language AST-based translation',
       'Preserve business logic & edge cases',
       'Interactive migration playground (preview changes)',
       'Test generation for migrated functions',
       'Gradual cutover strategy planning'
     ],
     benefits: [
       'Reduce migration project timeline by 75%',
       'Minimize regression risk via automated tests',
       'Lower cost vs. manual rewrite',
       'De-risk technical modernization'
     ],
     pricing: { basic: '2499', pro: '5999', enterprise: '19999' },
     contactInfo: { website: '/ai-services/ai-for-code-migration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔀',
     href: '/ai-services/ai-for-code-migration',
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

export default function AiassistedCodeMigrationAndRefactoringPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
