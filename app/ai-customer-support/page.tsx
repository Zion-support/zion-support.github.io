import React from 'react';
const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: '24/7 AI Chat Support',
      description: 'Provide instant, intelligent customer support with our advanced AI chatbot that understands context and resolves issues automatically.',
      benefits: ['Instant responses', 'Context awareness', 'Multi-language support', 'Escalation to humans']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time Optimization',
      description: 'Reduce average response time from hours to seconds with intelligent routing and automated responses.',
      benefits: ['90% faster responses', 'Smart routing', 'Priority queuing', 'Auto-escalation']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Human-AI Collaboration',
      description: 'Seamlessly blend AI automation with human expertise for complex issues that require personal touch.',
      benefits: ['Smart handoffs', 'Context preservation', 'Agent assistance', 'Quality assurance']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, GDPR compliance, and SOC 2 certification.',
      benefits: ['Data encryption', 'Compliance ready', 'Access controls', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses with basic support needs',
      features: [
        '1,000 conversations/month',
        'Basic AI chatbot',
        'Email integration',
        'Standard analytics',
        'Email support',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with moderate support volume',
      features: [
        '5,000 conversations/month',
        'Advanced AI chatbot',
        'Multi-channel support',
        'Advanced analytics',
        'Priority support',
        '25 team members',
        'Custom integrations',
        'Knowledge base'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with high support volume',
      features: [
        'Unlimited conversations',
        'Premium AI chatbot',
        'All channels supported',
        'Custom analytics',
        '24/7 phone support',
        'Unlimited team members',
        'Custom integrations',
        'Advanced knowledge base',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];
  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '90%', label: 'Faster Response Time' },
    { number: '80%', label: 'Issues Resolved Automatically' },
    { number: '24/7', label: 'Always Available' }
  ];

  return (
                  }`}
                >
                  Get Started
                </a>
              </div>
  );
};

=======
export default AICustomerSupportPage;
>>>>>>> origin/main
