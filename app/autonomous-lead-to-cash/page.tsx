import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Lead-to-Cash | Zion Tech Group',
  description:
    'End-to-end sales automation that turns leads into customers without manual intervention. AI qualifies leads, schedules demos, sends proposals, negotiates terms, and processes payments — all autonomously. Increase sales velocity by 10×.',
  alternates: { canonical: '/autonomous-lead-to-cash' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Autonomous Lead-to-Cash',
        category: 'Sales & Revenue Automation',
        description:
          'A fully autonomous sales engine that handles the entire customer journey from initial lead capture to payment collection. Our AI engages leads via email and chat, qualifies intent, books demos, creates customized proposals, negotiates within your pricing guardrails, and processes invoices. No sales hire needed. Works 24/7 across time zones. Starting at $4,999/month.',
        iconEmoji: '💰',
        features: [
          {
            title: 'AI Lead Qualification',
            description:
              'Natural language processing analyzes lead responses, website behavior, and firmographics to score intent. Automatically books qualified leads directly into your sales rep\'s calendar — or handles the entire sale if autonomous mode is enabled.',
          },
          {
            title: 'Autonomous Demo Scheduling',
            description:
              'AI matches lead availability with your team\'s calendar, sends personalized Zoom/Google Meet invites, and even runs a pre-demo qualification call to ensure readiness.',
          },
          {
            title: 'Smart Proposal Generation',
            description:
              'Generates customized proposals with tailored pricing, terms, and clauses based on lead profile and previous win/loss patterns. Includes e-signature collection via HelloSign/DocuSign.',
          },
          {
            title: 'AI Negotiation Assistant',
            description:
              'When leads push back, our AI negotiates within your defined guardrails (min discount %, acceptable payment terms). Escalates only for out-of-band requests. Closes deals at optimalwin rates.',
          },
          {
            title: 'Payment Processing & Invoicing',
            description:
              'Automated invoice generation, payment reminder sequences, and integration with Stripe, PayPal, QuickBooks, and NetSuite. Apply early-payment discounts automatically.',
          },
          {
            title: 'Revenue Operations Dashboard',
            description:
              'Full visibility into pipeline velocity, conversion rates, average deal size, and revenue forecast. Track which channels and playbooks drive most closed business.',
          },
        ],
        useCases: [
          {
            title: 'B2B SaaS Companies',
            description:
              'Turn website sign-ups into paying customers without a sales team. Perfect for self-serve and inside-sales hybrid motions.',
            icon: '💻',
          },
          {
            title: 'Consulting & Professional Services',
            description:
              'Automate client onboarding: qualify, book discovery calls, send statements of work, collect initial deposit. Free up your experts for delivery.',
            icon: '🤝',
          },
          {
            title: 'E-commerce & High-Volume Sales',
            description:
              'Handle large volumes of inbound inquiries consistently. Never miss a hot lead due to after-hours or overwhelmed reps.',
            icon: '📈',
          },
        ],
        pricing: [
          {
            tier: 'Starter',
            price: '$1,999',
            period: '/month',
            features: [
              'Up to 500 leads/month',
              'Basic lead scoring',
              'Auto email sequences',
              'Demo scheduling',
              'Stripe payments',
              'Basic dashboard',
            ],
          },
          {
            tier: 'Growth',
            price: '$4,999',
            period: '/month',
            features: [
              'Up to 2,500 leads/month',
              'AI qualification + chat',
              'Proposal generation',
              'E-signature integration',
              'Negotiation assistant',
              'Custom pricing rules',
              'Multi-channel attribution',
              'Priority support',
            ],
            popular: true,
          },
          {
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited leads',
              'Custom AI model training',
              'Full CRM sync (Salesforce, HubSpot)',
              'Dedicated revenue operations manager',
              'SLA guarantees',
              'On-premise deployment',
              '24/7 phone & Slack support',
            ],
          },
        ],
        benefits: [
          '10× faster sales velocity',
          'Close deals 24/7 across time zones',
          'Reduce customer acquisition cost by 60%',
          'Eliminate lead drop-off between touchpoints',
          'Scale revenue without hiring',
          'Maintain consistent messaging and pricing',
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709',
        },
        ctaLabel: 'Automate Your Sales Pipeline — Book a Demo',
      }}
    />
  );
}
