import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI UX Research Assistant | Zion Tech Group',
  description: 'AI-powered UX research platform that conducts automated usability testing, generates heatmaps, analyzes session recordings, and produces actionable design recommendations.',
  alternates: { canonical: '/micro-saas/ai-ux-research-assistant' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI UX Research Assistant',
        category: 'Product Research & Design',
        description: 'AI-powered UX research platform that conducts automated usability testing, generates heatmaps, analyzes session recordings, and produces actionable design recommendations.',
        iconEmoji: '🎨',
        features: [
            {
                        "title": "Automated Usability Testing",
                        "description": "AI-driven testing that simulates real user interactions, identifies friction points, and generates severity-ranked issue reports."
            },
            {
                        "title": "Heatmap & Click Map Generation",
                        "description": "Visual heatmaps showing where users click, scroll, and hover with statistical significance analysis for each pattern."
            },
            {
                        "title": "Session Recording Intelligence",
                        "description": "AI analysis of thousands of recorded sessions to detect rage clicks, dead ends, form abandonment, and navigation confusion."
            },
            {
                        "title": "Survey & Interview Analysis",
                        "description": "Automatic sentiment analysis and thematic coding from open-ended survey responses and user interview transcripts."
            },
            {
                        "title": "Competitor UX Benchmarking",
                        "description": "Side-by-side UX comparison with competitor products using AI-evaluated heuristics and industry best practices."
            },
            {
                        "title": "Design Recommendation Engine",
                        "description": "Actionable design improvement suggestions ranked by impact, with before/after mockups and implementation effort estimates."
            }
],
        useCases: [
            {
                        "title": "Conversion Rate Optimization",
                        "description": "Identify and fix UX issues driving cart abandonment, form drop-off, and low engagement to boost conversions.",
                        "icon": "\ud83d\udcc8"
            },
            {
                        "title": "Pre-Launch UX Validation",
                        "description": "Test new features and landing pages with AI-powered simulated users before launch to catch usability issues early.",
                        "icon": "\ud83d\ude80"
            },
            {
                        "title": "Continuous UX Monitoring",
                        "description": "Implement ongoing UX monitoring with AI that tracks usability trends, flags regressions, and recommends improvements.",
                        "icon": "\ud83d\udd0d"
            }
],
        benefits: [
      "3x faster UX research cycles",
      "Automated heatmap generation",
      "AI-prioritized design fixes",
      "Competitor benchmarking insights",
      "Statistical significance analysis",
      "Actionable improvement roadmap"
],
        ctaLabel: 'Get Started with AI UX Research Assistant',
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
