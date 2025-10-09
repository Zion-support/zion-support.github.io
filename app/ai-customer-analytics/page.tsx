'use client';
import React from 'react';
import { CheckCircle, Star, BarChart, Users, Target, TrendingUp, Eye, Brain, Zap } from 'lucide-react';

const AICustomerAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Customer Segmentation',
      description: 'Automatically segment customers using advanced machine learning algorithms',
      benefits: ['95% accuracy in customer grouping', 'Real-time segmentation updates', 'Behavioral pattern recognition']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast customer behavior, churn risk, and lifetime value with AI',
      benefits: ['90% churn prediction accuracy', 'LTV prediction within 15%', 'Revenue forecasting']
    },
    {
      icon: Target,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences based on customer data insights',
      benefits: ['40% increase in engagement', '60% higher conversion rates', 'Dynamic content optimization']
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor customer metrics and KPIs with interactive, real-time dashboards',
      benefits: ['Live data visualization', 'Custom KPI tracking', 'Automated alerts']
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'Track and optimize the complete customer journey with AI insights',
      benefits: ['End-to-end journey visibility', 'Bottleneck identification', 'Optimization recommendations']
    },
    {
      icon: Eye,
      title: 'Sentiment Analysis',
      description: 'Analyze customer sentiment across all touchpoints using NLP',
      benefits: ['Real-time sentiment tracking', 'Multi-language support', 'Trend analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses getting started with customer analytics',
      features: [
        'Up to 10,000 customers',
        'Basic segmentation',
        'Standard dashboards',
        'Email support',
        'Monthly reports',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses with complex customer data',
      features: [
        'Up to 100,000 customers',
        'Advanced AI segmentation',
        'Predictive analytics',
        'Real-time dashboards',
        'Priority support',
        'Custom integrations',
        'A/B testing tools',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with extensive customer data needs',
      features: [
        'Unlimited customers',
        'Full AI suite',
        'Custom AI models',
        'White-label dashboards',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom data sources',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Optimize product recommendations and personalize shopping experiences',
      icon: '🛒',
      metrics: ['35% increase in average order value', '50% higher customer retention', '25% boost in conversion rates']
    },
    {
      title: 'SaaS Platforms',
      description: 'Reduce churn and increase user engagement with predictive analytics',
      icon: '💻',
      metrics: ['40% reduction in churn rate', '60% increase in feature adoption', '30% higher MRR growth']
    },
    {
      title: 'Financial Services',
      description: 'Enhance customer experience and identify cross-sell opportunities',
      icon: '💰',
      metrics: ['45% increase in cross-sell success', '50% faster loan approvals', '35% higher customer satisfaction']
    },
    {
      title: 'Healthcare',
      description: 'Improve patient outcomes and optimize care delivery',
      icon: '🏥',
      metrics: ['30% better patient outcomes', '40% reduction in readmissions', '50% faster diagnosis']
    }
  ];

  const analyticsCapabilities = [
    {
      title: 'Customer Lifetime Value Prediction',
      description: 'Accurately predict how much each customer will spend over their lifetime',
      accuracy: '92%',
      impact: 'Increase revenue by 25%'
    },
    {
      title: 'Churn Risk Identification',
      description: 'Identify customers at risk of churning before they leave',
      accuracy: '89%',
      impact: 'Reduce churn by 40%'
    },
    {
      title: 'Purchase Behavior Analysis',
      description: 'Understand when, what, and why customers make purchases',
      accuracy: '94%',
      impact: 'Boost conversion by 35%'
    },
    {
      title: 'Sentiment Trend Analysis',
      description: 'Track customer sentiment changes over time across all channels',
      accuracy: '91%',
      impact: 'Improve satisfaction by 45%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Customer Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Unlock the power of your customer data with AI-driven insights, predictive analytics, and personalized experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ Get Free Analysis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Analytics
            </h2>
            <p className="text-xl text-gray-600">
              Powerful AI capabilities that transform raw customer data into actionable insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-green-600">{capability.accuracy} accuracy</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-blue-600">{capability.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to understand and engage your customers better
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that matches your customer data volume and analytics needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              See how AI customer analytics transforms businesses across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Unlock Your Customer Data?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start making data-driven decisions that drive growth and customer satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerAnalyticsPage;