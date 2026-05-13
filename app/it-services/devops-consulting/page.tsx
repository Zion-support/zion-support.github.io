import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevOps Consulting & Implementation | Zion Tech Group',
  description: 'End-to-end DevOps transformation with CI/CD pipeline setup, infrastructure as code, container orchestration, and team training.',
  alternates: { canonical: 'it-services/devops-consulting' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'DevOps Consulting & Implementation',
        category: 'DevOps & Cloud',
        description: 'End-to-end DevOps transformation with CI/CD pipeline setup, infrastructure as code, container orchestration, and team training.',
        iconEmoji: '⚙️',
        features: [
          {
            "title": "CI/CD Pipeline Architecture",
            "description": "Design and implement automated build, test, and deployment pipelines with GitHub Actions or GitLab CI."
          },
          {
            "title": "Infrastructure as Code",
            "description": "Codify infrastructure with Terraform, Pulumi, or CloudFormation for reproducible environments."
          },
          {
            "title": "Container Orchestration",
            "description": "Deploy Kubernetes with auto-scaling, self-healing, and rolling update capabilities."
          },
          {
            "title": "Monitoring & Observability",
            "description": "Implement Prometheus, Grafana, and distributed tracing for full-stack visibility."
          },
          {
            "title": "Security Automation",
            "description": "Automate security scanning, compliance checks, and secret management in every deployment."
          },
          {
            "title": "Team Training & Enablement",
            "description": "Hands-on training in DevOps practices, tooling, and cloud-native development."
          }
        ],
        useCases: [
          {
            "title": "Enterprise DevOps Transformation",
            "description": "Migrate to CI/CD with 90% faster release cycles and zero-downtime deploys.",
            "icon": "🏢"
          },
          {
            "title": "Cloud Migration Strategy",
            "description": "Plan cloud migration with automation, cost optimization, and zero disruption.",
            "icon": "☁️"
          },
          {
            "title": "Platform Engineering",
            "description": "Build internal developer platforms that streamline engineering workflows.",
            "icon": "🔧"
          }
        ],
        benefits: ["90% faster release cycles", "Zero-downtime deployments", "Automated infrastructure management", "Built-in security compliance", "40% reduction in ops costs", "Comprehensive team enablement"],
        ctaLabel: 'Get Started with DevOps Consulting & Implementation',
        pricing: [
          { tier: 'Starter', price: '$2,499', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$7,999', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
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
