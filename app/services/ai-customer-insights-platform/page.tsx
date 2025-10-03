// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Customer Insights Platform | Zion Tech Group - Advanced Customer Analytics',
  description: 'AI-powered customer insights platform for behavioral analysis, sentiment tracking, and predictive analytics. Transform customer data into actionable business intelligence.',
  keywords: 'AI customer insights, behavioral analytics, sentiment analysis, predictive analytics, customer intelligence, business intelligence',
};

export default function AICustomerInsightsPlatformPage() {
  const features = [
    {
      name: "Behavioral Analytics Engine",
      description: "Advanced AI algorithms analyze customer behavior patterns across all touchpoints",
      capabilities: [
        "Real-time behavior tracking",
        "Pattern recognition and anomaly detection",
        "Customer journey mapping",
        "Engagement scoring",
        "Predictive behavior modeling",
        "Cross-platform data correlation"
      ],
      pricing: "Starting from $199/month"
    },
    {
      name: "Sentiment Intelligence",
      description: "AI-powered sentiment analysis across social media, reviews, and customer feedback",
      capabilities: [
        "Multi-language sentiment analysis",
        "Emotion detection and classification",
        "Brand mention monitoring",
        "Competitor sentiment tracking",
        "Trend analysis and forecasting",
        "Automated alert system"
      ],
      pricing: "Starting from $149/month"
    },
    {
      name: "Predictive Customer Analytics",
      description: "Machine learning models predict customer lifetime value, churn risk, and purchase behavior",
      capabilities: [
        "Customer lifetime value prediction",
        "Churn risk scoring",
        "Purchase probability modeling",
        "Personalization recommendations",
        "Market basket analysis",
        "Customer segmentation"
      ],
      pricing: "Starting from $299/month"
    },
    {
      name: "Real-time Customer Intelligence",
      description: "Live dashboard with actionable insights and automated recommendations",
      capabilities: [
        "Real-time customer monitoring",
        "Automated insight generation",
        "Custom alert configuration",
        "Performance benchmarking",
        "ROI tracking and optimization",
        "Executive reporting"
      ],
      pricing: "Starting from $399/month"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize product recommendations and reduce cart abandonment",
      results: "35% increase in conversion rates, 25% reduction in cart abandonment"
    },
    {
      industry: "SaaS",
      description: "Predict churn and improve customer retention",
      results: "40% reduction in churn rate, 50% improvement in customer lifetime value"
    },
    {
      industry: "Healthcare",
      description: "Enhance patient experience and satisfaction",
      results: "30% improvement in patient satisfaction scores, 20% increase in retention"
    },
    {
      industry: "Financial Services",
      description: "Improve risk assessment and customer onboarding",
      results: "45% improvement in risk prediction accuracy, 60% faster onboarding"
    }
  ];

  const benefits = [
    {
      title: "Increased Revenue",
      description: "Average 28% increase in revenue through better customer insights",
      icon: "💰"
    },
    {
      title: "Reduced Churn",
      description: "Predict and prevent customer churn with 85% accuracy",
      icon: "📈"
    },
    {
      title: "Better Personalization",
      description: "Deliver hyper-personalized experiences at scale",
      icon: "🎯"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed business decisions with real-time insights",
      icon: "📊"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses starting with customer analytics",
      features: [
        "Up to 10,000 customer profiles",
        "Basic behavioral analytics",
        "Standard sentiment analysis",
        "Monthly reporting",
        "Email support",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 100,000 customer profiles",
        "Advanced behavioral analytics",
        "Real-time sentiment monitoring",
        "Predictive analytics models",
        "Priority support",
        "Advanced integrations",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description: "For large organizations with complex customer data requirements",
      features: [
        "Unlimited customer profiles",
        "Advanced AI models",
        "Real-time intelligence",
        "Custom model development",
        "Dedicated account manager",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Customer Insights Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform customer data into actionable insights with our AI-powered analytics platform. 
            Understand behavior, predict trends, and optimize customer experiences with advanced machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link to="/pricing" 
              className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
                <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {feature.pricing}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/contact"
                className="inline-block w-full text-center bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industry Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.industry}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Results Achieved:</h4>
                  <p className="text-green-700">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transform Your Customer Understanding
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-emerald-500 mr-3">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'border border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proven Results Across Industries
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">28%</div>
              <p className="text-emerald-100">Average revenue increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-emerald-100">Churn prediction accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-emerald-100">Improvement in customer satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="text-emerald-100">Reduction in decision-making time</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Unlock Customer Insights?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using our AI customer insights platform to 
            understand their customers better, predict behavior, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              📞 Call: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-gray-500">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </div>
      </div>
    </div>
  );
}