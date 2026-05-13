import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Meeting Minutes Generator | Zion Tech Group',
  description: 'Audio transcription with AI-powered summarization that extracts decisions, action items, owners, and deadlines from meetings across any platform — Zoom, Teams, or in-person recordings.',
  alternates: { canonical: '/micro-saas/ai-meeting-minutes' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Meeting Minutes Generator',
        category: 'Productivity & Meetings',
        description: 'Audio transcription with AI-powered summarization that extracts decisions, action items, owners, and deadlines from meetings across any platform — Zoom, Teams, or in-person recordings.',
        iconEmoji: '🎙️',
        features: [
          { title: 'AI-Powered Engine', description: 'Built on advanced language models fine-tuned for domain-specific accuracy, ensuring professional-grade output every time.' },
          { title: 'Real-Time Processing', description: 'Instant results with sub-second response times. No queues, no waiting — your work is processed immediately.' },
          { title: 'Customizable Templates', description: 'Adapt output to your brand voice, formatting standards, and organizational requirements with flexible template controls.' },
          { title: 'Enterprise Security', description: 'SOC 2 Type II infrastructure with end-to-end encryption, role-based access, and audit logging for all operations.' },
          { title: 'API-First Integration', description: 'RESTful API with webhooks, SDKs for popular frameworks, and native integrations with Slack, Zapier, and major CRMs.' },
          { title: 'Analytics & Reporting', description: 'Track usage patterns, output quality scores, ROI metrics, and team adoption through built-in analytics dashboards.' },
        ],
        useCases: [
          { title: 'Team Productivity', description: 'Reduce time spent on repetitive documentation by 80% with AI-assisted workflows that handle drafting, formatting, and distribution.', icon: '⚡' },
          { title: 'Client Deliverables', description: 'Generate professional client-facing documents with consistent branding, accurate data, and polished presentation.', icon: '📤' },
          { title: 'Compliance & Auditing', description: 'Maintain audit-ready documentation and automated compliance trails that satisfy regulators and simplify external audits.', icon: '🔍' },
        ],
        benefits: ['80% reduction in manual effort', 'Professional-quality output', 'Sub-second processing times', 'Enterprise-grade security', 'API-first architecture', 'Built-in analytics'],
        ctaLabel: 'Get Started with AI Meeting Minutes Generator',
        pricing: [
          { tier: 'Starter', price: '$39', period: '/month', features: ['Core AI engine access', 'Up to 100 outputs/month', 'Basic templates', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$119', period: '/month', features: ['Advanced AI engine + fine-tuning', 'Up to 2,000 outputs/month', 'Premium templates & branding', 'Priority support (4h SLA)', 'API access & webhooks', 'Team collaboration (up to 10)'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited outputs', 'Custom model fine-tuning', 'SSO & advanced security', 'Dedicated support engineer', 'On-premise deployment option', 'Unlimited team members', '99.99% SLA guarantee', 'Custom integrations'], popular: false },
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
