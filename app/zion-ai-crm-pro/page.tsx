const ZionAICRMProPage = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const benefits: string[] = [];

  const features = [
    {
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring algorithm that automatically ranks prospects based on likelihood to convert.',
      icon: <Target className="w-6 h-6" />,
      benefits: ['Automatic scoring', 'Behavioral analysis', 'Conversion prediction', 'Custom scoring models']
    },
    {
      title: 'Automated Follow-ups',
      description: 'Smart follow-up sequences that automatically engage leads at the right time with personalized messages.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Smart timing', 'Personalized content', 'Multi-channel outreach', 'Performance tracking']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced analytics that predict customer behavior, churn risk, and sales opportunities.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Churn prediction', 'Upsell opportunities', 'Customer lifetime value', 'Risk assessment']
    },
    {
      title: 'Email Integration',
      description: 'Seamless email integration with automatic logging, tracking, and response management.',
      icon: <Mail className="w-6 h-6" />,
      benefits: ['Auto-logging', 'Email tracking', 'Response management', 'Template library']
    },
    {
      title: 'Sales Pipeline Management',
      description: 'Visual pipeline management with drag-and-drop stages and automated progression rules.',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ['Visual pipeline', 'Drag-and-drop', 'Automated rules', 'Stage analytics']
    },
    {
      title: 'Customer Segmentation',
      description: 'AI-powered customer segmentation for targeted marketing and personalized experiences.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['AI segmentation', 'Behavioral grouping', 'Custom segments', 'Dynamic updates']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams getting started with AI CRM',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email integration',
        'Mobile app',
        'Email support',
        'Basic analytics'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing sales teams with advanced needs',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Full email integration',
        'Sales pipeline management',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom fields'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete solution for large sales organizations',
      features: [
        'Unlimited contacts',
        'Premium AI features',
        'Advanced integrations',
        'Custom workflows',
        '24/7 dedicated support',
        'Advanced reporting',
        'White-label options',
        'On-premise deployment',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false;
    }
  ];

  const integrations = [
    { name: 'Gmail', logo: 'GM', category: 'Email' },
    { name: 'Outlook', logo: 'OL', category: 'Email' },
    { name: 'Slack', logo: 'SL', category: 'Communication' },
    { name: 'Microsoft Teams', logo: 'MT', category: 'Communication' },
    { name: 'Zoom', logo: 'ZM', category: 'Video' },
    { name: 'Calendly', logo: 'CL', category: 'Scheduling' },
    { name: 'Stripe', logo: 'ST', category: 'Payments' },
    { name: 'PayPal', logo: 'PP', category: 'Payments' },
    { name: 'HubSpot', logo: 'HS', category: 'Marketing' },
    { name: 'Mailchimp', logo: 'MC', category: 'Email Marketing' },
    { name: 'Zapier', logo: 'ZP', category: 'Automation' },
    { name: 'Salesforce', logo: 'SF', category: 'CRM' }
  ];
}