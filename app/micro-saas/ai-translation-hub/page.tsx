import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Translation Hub | Zion Tech Group',
  description: 'Enterprise-grade AI translation and localization platform supporting 100+ languages with context-aware translation, terminology management, and human-in-the-loop review workflows.',
  alternates: { canonical: '/micro-saas/ai-translation-hub' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Translation Hub',
        category: 'Language & Localization',
        description: 'Enterprise-grade AI translation and localization platform supporting 100+ languages with context-aware translation, terminology management, and human-in-the-loop review workflows.',
        iconEmoji: '🌐',
        features: [
            {
                        "title": "AI-Powered Neural Machine Translation",
                        "description": "Context-aware translation powered by large language models with domain-specific fine-tuning for legal, medical, and technical terminology."
            },
            {
                        "title": "100+ Language Support",
                        "description": "Instant translation between 100+ languages with dialect and regional variation support including RTL languages."
            },
            {
                        "title": "Terminology Management",
                        "description": "Custom glossaries and translation memories that maintain brand voice and industry-specific terminology across all content."
            },
            {
                        "title": "Quality Assurance Engine",
                        "description": "Automated quality scoring, glossary compliance checks, and inconsistency detection before content goes live."
            },
            {
                        "title": "Human-in-the-Loop Review",
                        "description": "Seamless handoff to professional translators with side-by-side comparison, TM suggestions, and approval workflows."
            },
            {
                        "title": "Real-Time API Integration",
                        "description": "RESTful API for embedding translation into your applications, websites, CMS, and marketing platforms in real time."
            }
],
        useCases: [
            {
                        "title": "Global Content Localization",
                        "description": "Translate your website, app, and marketing content into 100+ languages with brand-consistent terminology and cultural adaptation.",
                        "icon": "\ud83c\udf0d"
            },
            {
                        "title": "Customer Support Translation",
                        "description": "Real-time translation for multilingual customer support conversations, knowledge bases, and ticket responses.",
                        "icon": "\ud83d\udcac"
            },
            {
                        "title": "Legal & Compliance Documents",
                        "description": "High-accuracy translation for contracts, policies, and regulatory documents with certified translator review option.",
                        "icon": "\u2696\ufe0f"
            }
],
        benefits: [
      "Reduce translation costs by 80%",
      "10x faster content localization",
      "Consistent brand voice across languages",
      "Built-in quality assurance",
      "API-first integration",
      "Scalable to enterprise volume"
],
        ctaLabel: 'Get Started with AI Translation Hub',
        pricing: [
          { tier: 'Starter', price: '$49', period: '/month', features: ['Up to 10 documents per month', 'Basic OCR & extraction', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$149', period: '/month', features: ['Up to 500 documents per month', 'Full AI extraction & classification', 'Priority support', 'API access', 'Workflow automation'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited documents', 'Custom models & fine-tuning', 'Dedicated support engineer', 'SLA guarantee', 'On-premise deployment option', 'SSO & advanced security'], popular: false },
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown DE 19709',
        },
      }}
    />
  );
}
