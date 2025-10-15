import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: 'AI Content Moderator Pro',
      description: 'Advanced AI-powered content moderation',
      monthly: 99,
      yearly: 990,
      features: [
        'Real-time content analysis',
        'Multi-language support (50+ languages)',
        'Custom moderation rules',
        'API integration',
        'Dashboard analytics',
        'Bulk content processing',
        '99.9% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Customer Churn Predictor AI',
      description: 'Predict customer churn with 95% accuracy',
      monthly: 149,
      yearly: 1490,
      features: [
        'Real-time churn scoring',
        'Behavioral pattern analysis',
        'Email alerts and notifications',
        'Customer segmentation',
        'Retention campaign suggestions',
        'Integration with CRM systems',
        'ROI tracking dashboard'
      ],
      popular: true
    },
    {
      name: 'AI Email Marketing Pro',
      description: 'Intelligent email marketing platform',
      monthly: 79,
      yearly: 790,
      features: [
        'AI content generation',
        'Send time optimization',
        'Subject line testing',
        'Personalization engine',
        'A/B testing automation',
        'Email template library',
        'Analytics and reporting'
      ],
      popular: false
    }
  ];

  const consultingPlans = [
    {
      name: 'AI Consulting',
      description: 'Expert AI consulting services',
      monthly: 150,
      yearly: 1500,
      features: [
        'Custom ML model development',
        'Data preprocessing and feature engineering',
        'Model training and optimization',
        'Production deployment',
        'Performance monitoring',
        'Team training and mentoring',
        'Technical documentation',
        'Ongoing support and maintenance'
      ],
      popular: false
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT solutions',
      monthly: 250,
      yearly: 2500,
      features: [
        'Cloud migration planning and execution',
        'Infrastructure as Code (IaC)',
        'Auto-scaling and load balancing',
        'Security and compliance',
        'Cost optimization',
        'Disaster recovery planning',
        '24/7 monitoring and support',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Web Development',
      description: 'Modern web development services',
      monthly: 100,
      yearly: 1000,
      features: [
        'Responsive web design',
        'E-commerce development',
        'Custom web applications',
        'API development and integration',
        'Performance optimization',
        'SEO optimization',
        'Content management systems',
        'Maintenance and support'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, ai services pricing, it services pricing, micro saas pricing, consulting rates" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
                <span className="text-purple-300 text-sm font-medium">💰 Pricing Plans</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Pricing Plans
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transparent pricing for our AI and IT services. Choose the plan that fits your business needs.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`mr-3 text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                  <span className="ml-1 text-xs text-purple-300">(Save 20%)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Micro SaaS Pricing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven micro SaaS tools designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${billingCycle === 'monthly' ? plan.monthly : plan.yearly}
                    <span className="text-lg text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-sm text-purple-300">Save ${(plan.monthly * 12) - plan.yearly}/year</div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Consulting Services Pricing */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Consulting Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert consulting services to help you implement cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-600'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${billingCycle === 'monthly' ? plan.monthly : plan.yearly}
                      <span className="text-lg text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    <div className="text-sm text-gray-400">Per hour consulting</div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-purple-300">Save ${(plan.monthly * 12) - plan.yearly}/year</div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                        : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10'
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project and get a custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/case-studies"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;