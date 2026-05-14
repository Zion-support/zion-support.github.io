import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Code Migration & Legacy Modernization — Zion Tech Group",
  description: "AI-powered legacy code analysis, automated migration planning, and assisted code transformation from COBOL, mainframe, and legacy frameworks to modern cloud-native stacks.",
  keywords: "AI services, IT services, AI Code Migration & Legacy Modernization",
  openGraph: {
    title: "AI Code Migration & Legacy Modernization",
    description: "AI-powered legacy code analysis, automated migration planning, and assisted code transformation from COBOL, mainframe, and legacy frameworks to modern cloud-native stacks.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Migration & Legacy Modernization",
    description: "AI-powered legacy code analysis, automated migration planning, and assisted code transformation from COBOL, mainframe, and legacy frameworks to modern cloud-native stacks."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-code-migration',
    title: 'AI Code Migration & Legacy Modernization',
    description: 'AI-powered legacy code analysis, automated migration planning, and assisted code transformation from COBOL, mainframe, and legacy frameworks to modern cloud-native stacks.',
    features: ['Legacy code analysis and dependency mapping', 'Automated migration plan generation', 'AI-assisted code transformation and refactoring', 'Test case generation for migrated systems', 'Risk assessment and rollback planning'],
    benefits: ['Reduce migration costs by 60%', 'Accelerate modernization timelines by 3x', 'Preserve business logic during transformation', 'Minimize production disruption'],
    pricing: { basic: '2999', pro: '5999', enterprise: '14999' },
    contactInfo: { website: '/ai-services/ai-code-migration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💻',
    href: '/ai-services/ai-code-migration',
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

export default function AiCodeMigrationAndLegacyModernizationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
