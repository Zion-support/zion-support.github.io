<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665
=======
const ZionAICustomerInsightsPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');
  // const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {,
    title: 'Behavioral Analytics',
        description: 'Track customer behavior patterns and engagement across all touchpoints',
        icon: <Eye className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Churn Prediction',
        description: 'Predict customer churn with machine learning models and early warning systems',
        icon: <TrendingDown className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Personalized Recommendations',
        description: 'Generate AI-powered product and content recommendations for each customer',
        icon: <Target className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Customer Segmentation',
        description: 'Automatically segment customers based on behavior, value, and preferences',
        icon: <Users className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Real-time Insights',
        description: 'Get instant insights and alerts about customer behavior and trends',
        icon: <Zap className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'ROI Tracking',
        description: 'Measure the return on investment of your customer engagement strategies',
        icon: <DollarSign className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Sentiment Analysis',
        description: 'Analyze customer sentiment from reviews, feedback, and social media',
        icon: <Heart className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Lifetime Value Prediction',
        description: 'Predict customer lifetime value and optimize acquisition strategies',
        icon: <TrendingUp className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Cross-channel Analytics',
        description: 'Unify customer data from all channels for complete customer view',
        icon: <Globe className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Automated Reports',
        description: 'Generate comprehensive customer insight reports automatically',
        icon: <BarChart3 className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'API Integration',
        description: 'Integrate with your existing CRM, marketing, and analytics tools',
        icon: <Settings className="w-6 h-6" />,
        included: true
    },
    {,
    title: 'Priority Support',
        description: '24/7 priority support with dedicated customer success manager',
        icon: <Headphones className="w-6 h-6" />,
        included: true
    }
  ];

  const pricingPlans = [
    {,
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
    {,
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
    {,
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
    {,
    title: 'E-commerce',
        description: 'Optimize product recommendations and reduce cart abandonment',
        icon: <ShoppingCart className="w-8 h-8" />,
        examples: ['Product recommendations', 'Cart abandonment recovery', 'Customer segmentation', 'Lifetime value analysis']
    },
    {,
    title: 'SaaS',
        description: 'Improve user engagement and reduce churn with behavioral insights',
        icon: <Cloud className="w-8 h-8" />,
        examples: ['Usage analytics', 'Churn prediction', 'Feature adoption', 'User onboarding optimization']
    },
    {,
    title: 'Retail',
        description: 'Enhance customer experience with personalized shopping journeys',
        icon: <Store className="w-8 h-8" />,
        examples: ['Personalized offers', 'Inventory optimization', 'Customer journey mapping', 'Loyalty program insights']
    },
    {,
    title: 'Financial Services',
        description: 'Improve customer retention and cross-selling opportunities',
        icon: <CreditCard className="w-8 h-8" />,
        examples: ['Risk assessment', 'Cross-selling opportunities', 'Customer lifetime value', 'Fraud detection']
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

<<<<<<< HEAD
export default function zionAiCustomerInsights() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion Ai Customer Insights</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function ZionAiCustomerInsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Ai Customer Insights - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai customer insights solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Ai Customer Insights
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function ZionaicustomerinsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Ai Customer Insights</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BarChart3, TrendingUp, Target, Eye, Heart, Star, CheckCircle, Sparkles, Mail, Smartphone, Globe, Cloud, Settings, Headphones, DollarSign, CreditCard, TrendingDown, Play, Zap, ShoppingCart, Store } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ZionAICustomerInsightsPage = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
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
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
