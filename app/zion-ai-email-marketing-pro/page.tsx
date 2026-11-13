import { AppPageTemplate } from '@/components/AppPageTemplate';

const apps = {
  'zion-ai-email-marketing-pro': {
    slug: 'zion-ai-email-marketing-pro',
    name: 'Zion AI Email Marketing Pro',
    href: '/zion-ai-email-marketing-pro/',
    description: 'AI-driven email sequences, segmentation and deliverability for revenue growth.',
    group: 'money' as const,
    related: ['llm-gateway', 'token-cost', 'finops-autopilot'],
  },
  'zion-ai-data-sync': {
    slug: 'zion-ai-data-sync',
    name: 'Zion AI Data Sync',
    href: '/zion-ai-data-sync/',
    description: 'Real-time data pipelines, ingestion and reconciliation across SaaS, CRM and ERP.',
    group: 'data',
    related: ['token-cost', 'llm-gateway', 'finops-autopilot'],
  },
  'zion-ai-cloud-cost-optimizer': {
    slug: 'zion-ai-cloud-cost-optimizer',
    href: '/zion-ai-cloud-cost-optimizer/',
    description: 'Cloud waste finder and FinOps autopilot to cut spend 20-40% while protecting performance.',
    group: 'money' as const,
    related: ['finops-autopilot', 'token-cost', 'cloud-waste'],
  },
};

const app = apps['zion-ai-email-marketing-pro'];

export const metadata = {
  title: app.name,
  description: app.description,
  alternates: { canonical: app.href },
};

export default function EmailMarketingPage() {
  return <AppPageTemplate app={app} />;
}
