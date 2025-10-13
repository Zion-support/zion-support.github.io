import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
const ZionAICustomerInsightsPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');
  // const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      title: 'Behavioral Analytics',
      description: 'Track customer behavior patterns and engagement across all touchpoints',
      icon: <Eye className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Churn Prediction',
      description: 'Predict customer churn with machine learning models and early warning systems',
      icon: <TrendingDown className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Personalized Recommendations',
      description: 'Generate AI-powered product and content recommendations for each customer',
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, value, and preferences',
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Real-time Insights',
      description: 'Get instant insights and alerts about customer behavior and trends',
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: 'ROI Tracking',
      description: 'Measure the return on investment of your customer engagement strategies',
      icon: <DollarSign className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Sentiment Analysis',
      description: 'Analyze customer sentiment from reviews, feedback, and social media',
      icon: <Heart className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Lifetime Value Prediction',
      description: 'Predict customer lifetime value and optimize acquisition strategies',
      icon: <TrendingUp className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Cross-channel Analytics',
      description: 'Unify customer data from all channels for complete customer view',
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Automated Reports',
      description: 'Generate comprehensive customer insight reports automatically',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: 'API Integration',
      description: 'Integrate with your existing CRM, marketing, and analytics tools',
      icon: <Settings className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated customer success manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true
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

=======
export default function ZionAiCustomerInsightsPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Customer Insights - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Customer Insights solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Customer Insights</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai customer insights solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
