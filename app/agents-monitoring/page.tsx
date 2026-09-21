import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Agents Monitoring | Zion Tech Group',
  description: 'Monitor AI agents, automations, and operational telemetry in one place.',
  alternates: { canonical: '/agents-monitoring/' },
};

const cards = [
  {
    title: 'AI Agents',
    body: 'Track active automations, failures, and throughput.',
    href: '/services/ai-chatbot-builder/',
    label: 'Explore AI Chatbot Builder',
  },
  {
    title: 'Ops Telemetry',
    body: 'Monitor alerts, incidents, and remediation status.',
    href: '/services/managed-observability-247/',
    label: 'Explore Observability',
  },
  {
    title: 'Security Signals',
    body: 'Review detections, triage queues, and response metrics.',
    href: '/services/sec-soc-as-a-service/',
    label: 'Explore SOC Automation',
  },
];

export default function AgentsMonitoring() {
  return (
    <PageShell
      title="Agents Monitoring"
      description="Unified visibility into automation agents, workflows, and system health."
      eyebrow="Live"
      eyebrowIcon="●"
      align="center"
      canonical="https://ziontechgroup.com/agents-monitoring/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Agents Monitoring' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="page-card">
            <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{card.body}</p>
            <Link href={card.href} className="mt-4 inline-block text-sm font-semibold text-purple-300 hover:text-purple-200">
              {card.label} →
            </Link>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
