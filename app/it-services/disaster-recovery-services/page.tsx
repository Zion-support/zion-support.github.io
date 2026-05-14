import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disaster Recovery & Business Continuity | Zion Tech Group',
  description: 'Enterprise DR planning, backup automation, geo-redundant infrastructure, and rapid business continuity solutions.',
  alternates: { canonical: 'it-services/disaster-recovery-services' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Disaster Recovery & Business Continuity',
        category: 'Infrastructure & Resilience',
        description: 'Enterprise DR planning, backup automation, geo-redundant infrastructure, and rapid business continuity solutions.',
        iconEmoji: '🔄',
        features: [
          {
            "title": "Disaster Recovery Planning",
            "description": "Develop DR plans with RPO/RSL targets, failover, and testing schedules."
          },
          {
            "title": "Automated Backup Solutions",
            "description": "Encrypted backups with verification, retention, and instant restore."
          },
          {
            "title": "Geo-Redundant Infrastructure",
            "description": "Multi-region infrastructure with active-active or active-passive configs."
          },
          {
            "title": "Continuous Data Protection",
            "description": "Real-time data replication with sub-minute recovery points."
          },
          {
            "title": "Failover Testing & Drills",
            "description": "Regular testing and recovery validation for disaster readiness."
          },
          {
            "title": "Cloud-Native Recovery",
            "description": "Leverage cloud for rapid provisioning and automated orchestration."
          }
        ],
        useCases: [
          {
            "title": "Enterprise Resilience",
            "description": "Multi-region deployments with automated failover for critical apps.",
            "icon": "🏢"
          },
          {
            "title": "Data Protection & Recovery",
            "description": "Zero-data-loss strategies with instant restore for databases and files.",
            "icon": "💾"
          },
          {
            "title": "Regulatory Compliance",
            "description": "Documented plans, regular testing, and audit reports.",
            "icon": "📋"
          }
        ],
        benefits: ["Zero data loss with continuous replication", "Under 4-hour recovery time", "Geo-redundant infrastructure", "Automated failover testing", "Regulatory compliance assured", "Cloud-native disaster recovery"],
        ctaLabel: 'Get Started with Disaster Recovery & Business Continuity',
        pricing: [
          { tier: 'Starter', price: '$2,999', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$8,999', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
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
