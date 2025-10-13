import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const AISmartCustomerInsightsPage = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "AI Sentiment Analysis",
      description: "Advanced NLP analyzes customer feedback, reviews, and social media to understand emotional sentiment and satisfaction levels."
    },
    {
      icon: ChartBarIcon,
      title: "Behavioral Analytics",
      description: "Track customer journey patterns, preferences, and engagement metrics to predict future actions and preferences."
    },
    {
      icon: EyeIcon,
      title: "Predictive Churn Detection",
      description: "Machine learning models identify customers at risk of churning with 90% accuracy, enabling proactive retention strategies."
    },
    {
      icon: HeartIcon,
      title: "Customer Lifetime Value",
      description: "AI calculates and predicts customer lifetime value to optimize marketing spend and retention efforts."
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Real-time Feedback Analysis",
      description: "Instant analysis of customer interactions, support tickets, and feedback to identify trends and issues immediately."
    },
    {
      icon: StarIcon,
      title: "Personalization Engine",
      description: "AI-powered recommendations and personalized experiences based on individual customer behavior and preferences."
    }
  ];

  const benefits = [
    "Increase customer retention by 40%",
    "Boost customer lifetime value by 60%",
    "Reduce churn rate by 50%",
    "Improve customer satisfaction by 35%",
    "Enhance personalization by 80%",
    "Optimize marketing ROI by 45%"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 customers",
        "Basic sentiment analysis",
        "Churn prediction",
        "Email support",
        "Standard dashboards"
      ]
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100,000 customers",
        "Advanced AI analytics",
        "Real-time insights",
        "Priority support",
        "Custom integrations",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited customers",
        "Custom AI models",
        "White-label solution",
        "Dedicated manager",
        "Advanced analytics",
        "Multi-brand support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Customer Insights - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer insights platform that increases retention by 40%, predicts churn, and personalizes customer experiences." />
        <meta name="keywords" content="AI customer insights, customer analytics, churn prediction, sentiment analysis, customer lifetime value" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <UserGroupIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Smart Customer Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the power of customer data with AI that predicts behavior, prevents churn, and personalizes experiences to increase retention by 40%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Customer Intelligence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Measurable Business Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.name === 'Professional' 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.name === 'Professional'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}>
                  {plan.name === 'Professional' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 800+ companies using AI Smart Customer Insights to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISmartCustomerInsightsPage;