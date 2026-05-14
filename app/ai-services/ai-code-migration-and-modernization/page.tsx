import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Code Migration & Modernization — Zion Tech Group",
  description: "Automatically migrate legacy codebases to modern frameworks (COBOL → Java, jQuery → React, Python 2 → Python 3) with AI-assisted refactoring.",
  keywords: "AI services, IT services, AI Code Migration & Modernization",
  openGraph: {
    title: "AI Code Migration & Modernization",
    description: "Automatically migrate legacy codebases to modern frameworks (COBOL → Java, jQuery → React, Python 2 → Python 3) with AI-assisted refactoring.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Migration & Modernization",
    description: "Automatically migrate legacy codebases to modern frameworks (COBOL → Java, jQuery → React, Python 2 → Python 3) with AI-assisted refactoring."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-code-migration-modernization',
    title: 'AI Code Migration & Modernization',
    description: 'Automatically migrate legacy codebases to modern frameworks (COBOL → Java, jQuery → React, Python 2 → Python 3) with AI-assisted refactoring.',
    features: ['Automated code translation', 'Dependency analysis and mapping', 'Test generation and validation', 'Incremental migration planning', 'Code quality scoring post-migration'],
    benefits: ['Reduce migration effort by 60%', 'Minimize business disruption', 'Modernize without complete rewrites', 'Maintain security and compliance'],
    pricing: { basic: '2999', pro: '7499', enterprise: '19999' },
    contactInfo: { website: '/ai-services/ai-code-migration-modernization', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚙️',
    href: '/ai-services/ai-code-migration-modernization',
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

export default function AiCodeMigrationAndModernizationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
