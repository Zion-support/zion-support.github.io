import React from 'react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that automatically update with real-time data and provide deep insights.',
      benefits: ['Real-time updates', 'Interactive charts', 'Custom layouts', 'Mobile responsive']
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Let AI analyze your data and automatically generate insights, trends, and recommendations.',
      benefits: ['Automatic insights', 'Trend detection', 'Anomaly detection', 'Predictive analytics']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Perform complex statistical analysis, forecasting, and predictive modeling with built-in AI algorithms.',
      benefits: ['Statistical analysis', 'Forecasting', 'Predictive modeling', 'Machine learning']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visual Storytelling',
      description: 'Transform complex data into compelling visual stories that engage and inform your audience.',
      benefits: ['Story templates', 'Auto-narration', 'Export options', 'Presentation mode']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams and individual users',
      features: [
        '5 dashboards',
        'Basic charts',
        'Standard data sources',
        'Email support',
        '1 user',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses with moderate data needs',
      features: [
        '25 dashboards',
        'Advanced charts',
        'All data sources',
        'Priority support',
        '10 users',
        '10GB data storage',
        'AI insights',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex data requirements',
      features: [
        'Unlimited dashboards',
        'All chart types',
        'All data sources',
        '24/7 phone support',
        'Unlimited users',
        'Unlimited storage',
        'Advanced AI features',
        'White-label options',
        'Full API access',
        'Custom integrations',
        'Dedicated support'
      ],
      popular: false
    }
  ];
  const stats = [
    { number: '85%', label: 'Faster Insights' },
    { number: '60%', label: 'Time Saved' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Real-time Updates' }
  ];
                  }`}
                >
                  Get Started
                </a>
              </div>
  );
};

=======
export default AIDataVisualizationPage;
>>>>>>> origin/main
