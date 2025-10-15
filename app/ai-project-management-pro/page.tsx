

import { Link } from 'react-router-dom';




  const benefits = [
    'Increase project completion rate by 40%',
    'Reduce project delays by 60%',
    'Improve team productivity by 35%',
    'Save 15+ hours per week on project management',
    'Better resource utilization and cost control',
    'Enhanced team collaboration and communication'
  ];

  const integrations = [
    { name: 'Slack', icon: <MessageSquare className="w-6 h-6 text-purple-400" /> },
    { name: 'Microsoft Teams', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { name: 'Google Workspace', icon: <Globe className="w-6 h-6 text-green-400" /> },
    { name: 'Jira', icon: <CheckSquare className="w-6 h-6 text-blue-600" /> },
    { name: 'Trello', icon: <Kanban className="w-6 h-6 text-cyan-400" /> },
    { name: 'Asana', icon: <Target className="w-6 h-6 text-orange-400" /> }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        'Basic AI features',
        '10 projects',
        'Standard integrations',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59/mo',
      originalPrice: '$99/mo',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 team members',
        'Advanced AI capabilities',
        'Unlimited projects',
        'Advanced integrations',
        'Priority support',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$119/mo',
      originalPrice: '$199/mo',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Manage sprints, code reviews, and deployment pipelines',
      icon: <Code className="w-6 h-6 text-blue-400" />,
      results: '50% faster delivery cycles'
    },
    {
      title: 'Marketing Agencies',
      description: 'Coordinate campaigns, track deliverables, and manage clients',
      icon: <Target className="w-6 h-6 text-green-400" />,
      results: '40% improvement in campaign efficiency'
    },
    {
      title: 'Construction',
      description: 'Track milestones, manage resources, and ensure compliance',
      icon: <Building className="w-6 h-6 text-orange-400" />,
      results: '35% reduction in project delays'
    },
    {
      title: 'Consulting',
      description: 'Manage client projects, track billable hours, and deliver results',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      results: '60% increase in billable utilization'
    }
  ];

  const stats = [
    { number: '40%', label: 'Higher Completion Rate' },
    { number: '60%', label: 'Fewer Delays' },
    { number: '35%', label: 'More Productive' },
    { number: '15+', label: 'Hours Saved Weekly' }
  ];


};

export default AIProjectManagementProPage;
}