import React from 'react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Lead Scoring & Qualification',
      description: 'Automatically score and qualify leads using AI to identify the most promising prospects and prioritize your sales efforts.',
      benefits: ['95% accuracy in lead scoring', 'Automated qualification', 'Priority ranking', 'Behavioral analysis']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Automated Follow-ups',
      description: 'Never miss a follow-up with intelligent automation that sends personalized messages at the perfect time.',
      benefits: ['Perfect timing', 'Personalized content', 'Multi-channel outreach', 'A/B testing']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Predict which deals are most likely to close and when, helping you focus on high-probability opportunities.',
      benefits: ['Deal probability scoring', 'Close date prediction', 'Risk identification', 'Revenue forecasting']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Continuously optimize your sales process with AI-driven insights and recommendations for better results.',
      benefits: ['Process optimization', 'Performance insights', 'Best practice recommendations', 'ROI tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams getting started',
      features: [
        '1,000 leads/month',
        'Basic lead scoring',
        'Email automation',
        'Standard analytics',
        'Email support',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing sales teams with moderate volume',
      features: [
        '5,000 leads/month',
        'Advanced lead scoring',
        'Multi-channel automation',
        'Advanced analytics',
        'Priority support',
        '25 team members',
        'CRM integration',
        'Custom workflows',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large sales organizations with high volume',
      features: [
        'Unlimited leads',
        'Premium AI features',
        'All automation channels',
        'Custom analytics',
        '24/7 phone support',
        'Unlimited team members',
        'All integrations',
        'Custom workflows',
        'Advanced A/B testing',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];
    {
      name: 'Robert Johnson',
      role: 'VP of Sales',
      company: 'TechCorp Solutions',
      content: 'Our sales team increased their close rate by 60% using Zion Tech Group\'s AI automation. The lead scoring is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Sales Director',
      company: 'Growth Inc.',
      content: 'The automated follow-ups have been a game-changer. We never miss an opportunity, and our response rates have tripled.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The predictive analytics helped us identify which deals to focus on. Our revenue increased by 150% in just 6 months.',
      rating: 5
    }
  ];
                  }`}
                >
                  Get Started
                </a>
              </div>
  );
};

=======
export default AISalesAutomationPage;
>>>>>>> origin/main
