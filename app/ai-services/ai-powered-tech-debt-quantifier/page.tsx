import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Tech Debt Quantifier — Zion Tech Group",
  description: "Automatically identify, classify, and quantify technical debt: code complexity, duplication, outdated deps, test gaps, and architectural violations with remediation cost estimates.",
  keywords: "AI services, IT services, AI-Powered Tech Debt Quantifier",
  openGraph: {
    title: "AI-Powered Tech Debt Quantifier",
    description: "Automatically identify, classify, and quantify technical debt: code complexity, duplication, outdated deps, test gaps, and architectural violations with remediation cost estimates.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Tech Debt Quantifier",
    description: "Automatically identify, classify, and quantify technical debt: code complexity, duplication, outdated deps, test gaps, and architectural violations with remediation cost estimates."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-powered-tech-debt-quantifier',
     title: 'AI-Powered Tech Debt Quantifier',
     description: 'Automatically identify, classify, and quantify technical debt: code complexity, duplication, outdated deps, test gaps, and architectural violations with remediation cost estimates.',
     features: [
       'Static code analysis + complexity heatmaps',
       'Dependency vulnerability & EOL detection',
       'Duplicate code detection with CloneDR',
       'Architecture rule validation (dependency cycles)',
       'Remediation effort estimation (person-days)'
     ],
     benefits: [
       'Make tech debt visible to leadership',
       'Prioritize refactoring by cost vs. risk',
       'Justify modernization budgets with data',
       'Track debt reduction over time'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2399' },
     contactInfo: { website: '/ai-services/ai-powered-tech-debt-quantifier', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🗑️',
     href: '/ai-services/ai-powered-tech-debt-quantifier',
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

export default function AipoweredTechDebtQuantifierPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
