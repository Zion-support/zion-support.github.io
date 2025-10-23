

constAICRMPage: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns.',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Lead prioritization', 'Conversion optimization']
   },
    {icon: Users,
      title: 'Intelligent Customer Segmentation',
      description: 'AI automatically segments customers based on behavior, preferences, and value potential.',
      benefits: ['Dynamic segmentation', 'Behavioral insights', 'Personalization', 'Targeted campaigns']
   },
    {icon: Target,
      title: 'Predictive Sales Forecasting',
      description: 'Accurate sales predictions using AI that analyzes historical data and market trends.',
      benefits: ['Revenue forecasting', 'Pipeline analysis', 'Risk assessment', 'Goal tracking']
   },
    {icon: TrendingUp,
      title: 'Automated Follow-ups',
      description: 'AI schedules and personalizes follow-up communications based on customer engagement patterns.',
      benefits: ['Smart scheduling', 'Personalized content', 'Engagement tracking', 'Response optimization']

  constcapabilities= [
    {title: 'Smart Contact Management',
      description: 'AI automatically enriches contact data and maintains up-to-date information.',
      icon: Users,
      stats: '9 5% data accuracy'
   },
    {title: 'Intelligent Email Automation',
      description: 'Send personalized emails at the perfect time with AI-optimized content.',
      icon: Mail,
      stats: '4 0% higher open rates'
   },
    {title: 'Advanced Analytics',
      description: 'Comprehensive insights into customer behavior and sales performance.',
      icon: BarChart,
      stats: 'Real-time insights'
   },
    {title: 'Mobile-First Design',
      description: 'Access your CRM anywhere with our responsive mobile application.',
      icon: Phone,

  constpricingPlans= [
    {name: 'Starter',
      price: '$4 9',
      period: '/$1/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Mobile app access',
        'Standard support',
        'Basic analytics'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$9 9',
      period: '/$1/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1 0,000contacts',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom fields',
        'Team collaboration tools'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$19 9',
      period: '/$1/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Advanced reporting',
        '2 4/7 dedicated support',
        'White-label options',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false

  consttestimonials= [
    {name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM increased our lead conversion by65% and saved us 20hours per week on manual tasks.',
      rating:5},
    {name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP of Sales',
      content: 'The predictive analytics helped us identify high-value prospects we would have missed otherwise.',
      rating:5},
    {name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'Marketing Manager',
      content: 'Automated follow-ups and personalized content have dramatically improved our customer engagement.',

export default AICRMPage
