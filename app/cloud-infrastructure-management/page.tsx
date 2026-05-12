import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure Management & Optimization | Zion Tech Group',
  description: 'Managed cloud services including AWS/Azure/GCP management, cost optimization, 24/7 monitoring, security hardening, and migration. Reduce cloud spend by up to 40% with 99.99% uptime SLA.',
  alternates: { canonical: '/cloud-infrastructure-management' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Cloud Infrastructure Management & Optimization',
        category: 'Cloud & Infrastructure',
        description:
          'Full-service cloud management: provisioning, monitoring, security, cost optimization, and disaster recovery. We operate your cloud infrastructure so you can focus on building product. Covers AWS, Azure, Google Cloud, and hybrid deployments. Average cost savings: 35–40%. Starting at $3,499/month.',
        iconEmoji: '☁️',
        features: [
          {
            title: 'Infrastructure as Code (IaC) Management',
            description:
              'Terraform, Pulumi, and CloudFormation templates maintained and evolved by our engineers. Provision, update, and tear down environments safely and consistently.',
          },
          {
            title: 'AI-Driven Cost Optimization',
            description:
              'Continuous analysis of usage patterns. Rightsize instances, schedule off-hours shutdowns, commit to reserved instances/savings plans, and eliminate orphaned resources. Detailed monthly savings report.',
          },
          {
            title: 'Multi-Region High Availability',
            description:
              'Design and operate active-active or active-passive architectures across regions. Automated failover testing, DNS management, and chaos engineering to validate resilience.',
          },
          {
            title: '24/7 NOC Monitoring & Alerting',
            description:
              'Our NOC watches metrics, logs, and traces. Proactively investigates anomalies before they impact users. Custom SLAs: response <5 min for critical, <30 for high, <4h for medium.',
          },
          {
            title: 'Security & Compliance as Code',
            description:
              'Automated compliance checks (CIS Benchmarks, PCI-DSS, HIPAA, GDPR). Encryption at rest & in transit, key rotation, IAM least-privilege reviews, and audit trail maintained.',
          },
          {
            title: 'Backup & Disaster Recovery',
            description:
              'Automated backups with point-in-time recovery, cross-region replication, and quarterly DR drills. Restore from backup in under 2 hours guaranteed.',
          },
        ],
        useCases: [
          {
            title: 'Startups Scaling to Production',
            description:
              'From first VPC to global multi-region. We build production-grade infrastructure from day one, avoiding costly re-architectures later.',
            icon: '🚀',
          },
          {
            title: 'Companies Optimizing Cloud Spend',
            description:
              'Wasting money on unused instances? We typically find 30–50% savings. Keep your team lean while we optimize costs continuously.',
            icon: '💰',
          },
          {
            title: 'Enterprise Cloud Migrations',
            description:
              'Lift-and-shift or re-architect. We plan, test, execute, and validate migrations with minimal downtime. Post-move optimization included.',
            icon: '🏢',
          },
        ],
        pricing: [
          {
            tier: 'Core',
            price: '$3,499',
            period: '/month',
            features: [
              'Up to 5 environments',
              'Basic monitoring & alerts',
              'Monthly cost optimization report',
              'Weekly security scan',
              'Email support (24h)',
              'IaC maintenance',
            ],
          },
          {
            tier: 'Pro',
            price: '$6,999',
            period: '/month',
            features: [
              'Up to 20 environments',
              '24/7 NOC monitoring',
              'AI-driven rightsizing',
              'Multi-region HA setup',
              'Automated backups + DR testing',
              'Phone & Slack support',
              'Compliance reporting (SOC2)',
            ],
            popular: true,
          },
          {
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited environments',
              'Dedicated cloud architect',
              'Custom integrations',
              'On-premise support',
              'Penetration testing',
              'SLA 99.99% availability',
              'Compliance (HIPAA, PCI-DSS)',
            ],
          },
        ],
        benefits: [
          'Reduce cloud costs by 35–40%',
          '99.99% uptime SLA',
          '24/7 NOC without hiring',
          'Security compliance maintained',
          'Instant scale during traffic spikes',
          'Focus on product, not plumbing',
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709',
        },
        ctaLabel: 'Get a Free Cloud Assessment',
      }}
    />
  );
}
