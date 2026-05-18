import ProductPageLayout from '../components/ProductPageLayout';

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Customer Churn Predictor',
        category: 'Revenue & Retention',
        description: 'Identify at-risk customers before they leave with ML-powered churn signals and automated retention workflows.',
        iconEmoji: '📉',
        features: [
          {
            title: 'Intelligent Core',
            description: `State-of-the-art AI capabilities embedded directly into the <em>{name}</em> workflow, enabling smart automation and real-time decision support.`
          },
          {
            title: 'Production Architecture',
            description: `Enterprise-grade reliability with auto-scaling, high availability, and comprehensive observability built in from day one.`
          },
          {
            title: 'Seamless Integration',
            description: `Connect <em>{name}</em> with your existing tools, APIs, and data sources through pre-built connectors and flexible webhooks.`
          },
          {
            title: 'Security & Compliance',
            description: `Built-in encryption, audit trails, and role-based access controls to meet SOC 2, GDPR, and industry-specific requirements.`
          },
          {
            title: 'Advanced Analytics',
            description: `Live dashboards and AI-driven insights that give you instant visibility into performance, usage, and business impact.`
          },
          {
            title: 'Customizable Workflows',
            description: `Tailor processes with a no-code rule builder, configurable pipelines, and extensible API for your specific needs.`
          }
        ],
        useCases: [
          {
            title: 'Operational Efficiency',
            description: 'Automate routine tasks with <em>AI Customer Churn Predictor</em>, reduce manual errors, and free your team to focus on strategic priorities.',
            icon: '⚡'
          },
          {
            title: 'Scalable Growth',
            description: 'Handle increasing complexity and volume without proportional headcount increases.',
            icon: '📈'
          },
          {
            title: 'Data-Driven Decisions',
            description: 'Leverage AI Customer Churn Predictor insights to make faster, more confident decisions backed by real operational data.',
            icon: '🎯'
          }
        ],
        benefits: [
          'Reduced operational costs',
          'Faster time to value',
          'Improved team productivity',
          'Scalable multi-tenant architecture',
          'Enterprise-grade security',
          'Measurable ROI tracking',
          'Continuous AI-powered improvement',
          'Seamless ecosystem integration'
        ],
        pricing: [
          {
            tier: 'Starter',
            price: '$49',
            period: '/month',
            features: [
              'Up to 5,000 AI operations/month',
              'Core workflow automation',
              'Email support',
              '99% uptime SLA'
            ]
          },
          {
            tier: 'Professional',
            price: '$149',
            period: '/month',
            features: [
              'Up to 50,000 AI operations/month',
              'Advanced integrations & webhooks',
              'Priority support',
              '99.5% uptime SLA',
              'Usage analytics dashboard',
              'Team collaboration (10 seats)'
            ],
            popular: true
          },
          {
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited AI operations',
              'On-premise or VPC deployment',
              'Dedicated account manager',
              'Custom SLA with 99.99% uptime',
              'Unlimited seats & workspaces',
              'Private model fine-tuning'
            ]
          }
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709'
        },
        ctaLabel: 'Get Started with AI Customer Churn Predictor',
        ctaHref: '/contact?topic=ai-customer-churn-predictor',
        secondaryCtaLabel: 'View All Services',
        secondaryCtaHref: '/services'
      }}
    />
  );
}
