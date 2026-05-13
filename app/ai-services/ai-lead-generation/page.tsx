import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Lead Generation & Enrichment | Zion Tech Group',
  description: 'Automatically discover, qualify, and enrich B2B leads with AI-powered web scraping, firmographic scoring, and intent signal detection.',
  alternates: { canonical: 'ai-services/ai-lead-generation' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Lead Generation & Enrichment',
        category: 'AI Sales Intelligence',
        description: 'Automatically discover, qualify, and enrich B2B leads with AI-powered web scraping, firmographic scoring, and intent signal detection.',
        iconEmoji: '🎯',
        features: [
          {
            "title": "Automated Lead Discovery",
            "description": "AI crawls public sources, databases, and social signals to build targeted lead lists matching your ideal customer profile."
          },
          {
            "title": "Firmographic Enrichment",
            "description": "Auto-fill company size, revenue, tech stack, funding status, and decision-maker contacts for every lead."
          },
          {
            "title": "Intent Signal Detection",
            "description": "Monitor hiring patterns, job postings, social mentions, and website visits to identify in-market prospects."
          },
          {
            "title": "CRM Auto-Sync",
            "description": "Push qualified leads directly to Salesforce, HubSpot, Pipedrive, or custom CRM with deduplication."
          },
          {
            "title": "Personalized Outreach Sequences",
            "description": "Generate personalized email and LinkedIn messages based on each lead's firmographic and behavioral profile."
          },
          {
            "title": "Lead Quality Scoring",
            "description": "ML-powered scoring model that predicts conversion probability and prioritizes high-value accounts."
          }
        ],
        useCases: [
          {
            "title": "B2B Pipeline Generation",
            "description": "Build a self-filling pipeline with AI-discovered leads that match your ideal customer profile and show buying intent.",
            "icon": "🚀"
          },
          {
            "title": "Account-Based Marketing",
            "description": "Target, track, and engage specific high-value accounts with personalized multi-channel campaigns.",
            "icon": "🏢"
          },
          {
            "title": "Sales Team Enablement",
            "description": "Equip sales reps with enriched lead profiles, conversation starters, and account intelligence before every call.",
            "icon": "💼"
          }
        ],
        benefits: ["5x more qualified leads per month", "Automated enrichment saves 15 hours/week", "Intent-based targeting increases conversion 3x", "Seamless CRM integration", "ML-powered lead scoring", "Personalized outreach at scale"],
        ctaLabel: 'Get Started with AI Lead Generation & Enrichment',
        pricing: [
          { tier: 'Starter', price: '$149', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$449', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited usage', 'Dedicated support engineer', 'Custom configuration', 'SSO & advanced security', '99.99% SLA guarantee', 'On-premise deployment option'], popular: false },
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
