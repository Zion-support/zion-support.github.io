import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Code Review Assistant — Zion Tech Group",
  description: "AI Code Review Assistant",
  keywords: "AI services, IT services, AI Code Review Assistant",
  openGraph: {
    title: "AI Code Review Assistant",
    description: "AI Code Review Assistant",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Code Review Assistant",
    description: "AI Code Review Assistant"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-code-review-assistant',
    title: 'AI Code Review Assistant',
    description: `Static analysis + LLM-powered code review that understands intent. Catches bugs, security flaws, performance anti-patterns across 15+ languages.`,
    features: ["Multi-language support", "Security vulnerability detection", "Performance anti-pattern\u8bc6\u522b", "Auto-suggest fixes", "GitHub/GitLab/Bitbucket integration"],
    benefits: ["Improve code quality before merge", "Reduce senior dev review time by 60%", "Onboard juniors faster"],
    pricing: {"basic":"99","pro":"299","enterprise":"799"},
    contactInfo: {
      website: '/ai-services/ai-code-review-assistant',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔍',
    href: '/ai-services/ai-code-review-assistant',
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

export default function AiCodeReviewAssistantPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
