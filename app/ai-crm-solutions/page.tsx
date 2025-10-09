import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, UserPlus, DollarSign, PieChart, Activity, Bot } from 'lucide-react';

const AICRMSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Lead Scoring & Qualification',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and predict conversion probability.',
      benefits: ['85% higher conversion rates', '40% faster sales cycles', 'Reduced manual qualification time']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'AI-Powered Customer Communication',
      description: 'Automated personalized communication across all channels with natural language processing and sentiment analysis.',
      benefits: ['60% improved response rates', '24/7 customer engagement', 'Consistent brand voice']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predictive Sales Analytics',
      description: 'Advanced analytics that forecast sales trends, identify opportunities, and optimize sales strategies.',
      benefits: ['95% accurate sales forecasts', '30% revenue increase', 'Better decision making']
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'Intelligent Sales Automation',
      description: 'AI-driven automation for follow-ups, task management, and workflow optimization based on customer behavior patterns.',
      benefits: ['50% time savings', 'Never miss opportunities', 'Consistent follow-up']
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Customer Journey Mapping',
      description: 'AI-powered customer journey analysis that identifies touchpoints and optimizes the entire customer experience.',
      benefits: ['40% improved customer satisfaction', 'Reduced churn', 'Better retention strategies']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Personalized Recommendations',
      description: 'AI-driven product and service recommendations based on customer preferences, behavior, and purchase history.',
      benefits: ['35% higher average order value', 'Improved cross-selling', 'Enhanced customer experience']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Standard reporting',
        'Mobile app access',
        'Email support',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Multi-channel automation',
        'Advanced analytics & reporting',
        'Priority support',
        'API integrations',
        'Custom workflows',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom AI model training',
        '24/7 dedicated support',
        'Advanced security & compliance',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Businesses',
      description: 'Optimize customer relationships with AI-powered personalization, automated follow-ups, and intelligent product recommendations.',
      icon: '🛒',
      benefits: ['40% higher conversion', 'Better customer retention', 'Automated upselling']
    },
    {
      title: 'SaaS Companies',
      description: 'Manage subscription lifecycles with AI-driven churn prediction, automated onboarding, and usage-based insights.',
      icon: '💻',
      benefits: ['30% reduced churn', 'Improved onboarding', 'Usage analytics']
    },
    {
      title: 'Real Estate Agencies',
      description: 'Streamline lead management with AI-powered lead scoring, automated follow-ups, and market trend analysis.',
      icon: '🏠',
      benefits: ['50% more qualified leads', 'Faster deal closure', 'Market insights']
    },
    {
      title: 'Financial Services',
      description: 'Enhance customer relationships with AI-driven risk assessment, personalized financial advice, and compliance automation.',
      icon: '💰',
      benefits: ['Better risk management', 'Personalized services', 'Compliance automation']
    }
  ];

  const integrations = [
    { name: 'Salesforce', description: 'Seamless integration with Salesforce CRM' },
    { name: 'HubSpot', description: 'Connect with HubSpot marketing automation' },
    { name: 'Mailchimp', description: 'Sync email campaigns and customer data' },
    { name: 'Zapier', description: 'Connect with 3000+ apps and services' },
    { name: 'Slack', description: 'Real-time notifications and team collaboration' },
    { name: 'Microsoft Teams', description: 'Integrated communication and workflow' },
    { name: 'Google Workspace', description: 'Sync with Gmail, Calendar, and Drive' },
    { name: 'Shopify', description: 'E-commerce integration and order management' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI CRM Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Revolutionize your customer relationships with AI-powered lead scoring, automated communication, and predictive sales analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered CRM Features
            </h2>
            <p className="text-xl text-gray-600">
              Transform your customer relationship management with cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
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

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options for businesses of all sizes
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600">
              See how different industries benefit from AI CRM solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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

      {/* Integrations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom AI CRM solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
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

export default AICRMSolutionsPage;