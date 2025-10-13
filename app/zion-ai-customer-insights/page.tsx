import { Helmet } from 'react-helmet-async';

const ZionAICustomerInsightsPage = () => {

  const features = [
    {
      title: 'Behavioral Analytics',
      description: 'Track customer behavior patterns and engagement across all touchpoints',
      icon: <Eye className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Churn Prediction',
      description: 'Predict customer churn with machine learning models and early warning systems',
      icon: <TrendingDown className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Personalized Recommendations',
      description: 'Generate AI-powered product and content recommendations for each customer',
      icon: <Target className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, value, and preferences',
      icon: <Users className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Real-time Insights',
      description: 'Get instant insights and alerts about customer behavior and trends',
      icon: <Zap className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'ROI Tracking',
      description: 'Measure the return on investment of your customer engagement strategies',
      icon: <DollarSign className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Sentiment Analysis',
      description: 'Analyze customer sentiment from reviews, feedback, and social media',
      icon: <Heart className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Lifetime Value Prediction',
      description: 'Predict customer lifetime value and optimize acquisition strategies',
      icon: <TrendingUp className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Cross-channel Analytics',
      description: 'Unify customer data from all channels for complete customer view',
      icon: <Globe className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Automated Reports',
      description: 'Generate comprehensive customer insight reports automatically',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'API Integration',
      description: 'Integrate with your existing CRM, marketing, and analytics tools',
      icon: <Settings className="w-6 h-6" />,
      included: true;
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated customer success manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true;
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      originalPrice: '$599',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 customers',
        'Basic analytics',
        'Email support',
        'Standard reports',
        '5GB storage'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$599',
      originalPrice: '$1,199',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '10,000 customers',
        'Advanced analytics',
        'Priority support',
        'Custom reports',
        '25GB storage',
        'Churn prediction',
        'Personalized recommendations'
      ],
      popular: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Enterprise',
      price: '$1,199',
      originalPrice: '$2,399',
      period: '/month',
      description: 'For large organizations and enterprise teams',
      features: [
        'Unlimited customers',
        'Full analytics suite',
        '24/7 support',
        'Advanced reporting',
        'Unlimited storage',
        'Custom models',
        'API access',
        'Team collaboration',
        'Dedicated manager'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Optimize product recommendations and reduce cart abandonment',
      icon: <ShoppingCart className="w-8 h-8" />,
      examples: ['Product recommendations', 'Cart abandonment recovery', 'Customer segmentation', 'Lifetime value analysis']
    },
    {
      title: 'SaaS',
      description: 'Improve user engagement and reduce churn with behavioral insights',
      icon: <Cloud className="w-8 h-8" />,
      examples: ['Usage analytics', 'Churn prediction', 'Feature adoption', 'User onboarding optimization']
    },
    {
      title: 'Retail',
      description: 'Enhance customer experience with personalized shopping journeys',
      icon: <Store className="w-8 h-8" />,
      examples: ['Personalized offers', 'Inventory optimization', 'Customer journey mapping', 'Loyalty program insights']
    },
    {
      title: 'Financial Services',
      description: 'Improve customer retention and cross-selling opportunities',
      icon: <CreditCard className="w-8 h-8" />,
      examples: ['Risk assessment', 'Cross-selling opportunities', 'Customer lifetime value', 'Fraud detection']
    }
  ];
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}};
}
