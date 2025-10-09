import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Users, Target, BarChart, Zap, Brain } from 'lucide-react';

const AICRMPage: React.FC = () => {
  const crmFeatures = [
    {
      title: 'AI-Powered Lead Scoring',
      description: 'Intelligent lead qualification using machine learning to identify high-value prospects automatically.',
      icon: '🎯',
      benefits: [
        'Increase conversion rates by 60%',
        'Reduce time spent on unqualified leads by 80%',
        'Improve lead quality by 90%',
        'Automate lead prioritization'
      ]
    },
    {
      title: 'Intelligent Contact Management',
      description: 'Smart contact organization with automatic data enrichment and relationship mapping.',
      icon: '👥',
      benefits: [
        'Automatically enrich contact data',
        'Map relationship networks',
        'Track interaction history',
        'Identify decision makers'
      ]
    },
    {
      title: 'Predictive Sales Analytics',
      description: 'AI-driven insights to forecast sales, identify opportunities, and optimize pipeline performance.',
      icon: '📊',
      benefits: [
        'Predict sales outcomes with 85% accuracy',
        'Identify at-risk deals early',
        'Optimize sales strategies',
        'Improve forecasting accuracy'
      ]
    },
    {
      title: 'Automated Follow-up Sequences',
      description: 'Intelligent email and call sequences that adapt based on prospect behavior and engagement.',
      icon: '📧',
      benefits: [
        'Increase engagement by 70%',
        'Reduce manual follow-up work by 90%',
        'Personalize communication at scale',
        'Optimize timing and frequency'
      ]
    },
    {
      title: 'Smart Task Automation',
      description: 'Automated task creation, prioritization, and assignment based on deal stage and priority.',
      icon: '⚙️',
      benefits: [
        'Automate 80% of routine tasks',
        'Ensure no follow-ups are missed',
        'Optimize team productivity',
        'Reduce administrative overhead'
      ]
    },
    {
      title: 'Intelligent Opportunity Management',
      description: 'AI-powered opportunity tracking with automatic stage progression and risk assessment.',
      icon: '💼',
      benefits: [
        'Track deal progression automatically',
        'Identify bottlenecks in sales process',
        'Predict deal closure probability',
        'Optimize sales velocity'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149/month',
      description: 'Perfect for small teams getting started with AI CRM',
      features: [
        'Up to 1,000 contacts',
        'AI lead scoring',
        'Basic automation',
        'Email integration',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Advanced features for growing sales teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI analytics',
        'Custom automation workflows',
        'Phone & email integration',
        'Advanced reporting',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'Advanced integrations',
        'White-label options',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered CRM - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered CRM with intelligent lead scoring, predictive analytics, and automated workflows. Transform your sales process." />
        <meta name="keywords" content="ai crm, intelligent crm, sales automation, lead scoring, predictive analytics, customer relationship management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered CRM
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary customer relationship management powered by artificial intelligence. Automate your sales process, predict outcomes, and close more deals.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
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

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our AI CRM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Automation</h3>
              <p className="text-gray-300">AI-powered automation that learns from your data and continuously improves your sales process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Predictive Insights</h3>
              <p className="text-gray-300">Advanced analytics that predict sales outcomes and help you make data-driven decisions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Seamless Integration</h3>
              <p className="text-gray-300">Easy integration with your existing tools and workflows for a smooth transition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI CRM Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses using AI to revolutionize their customer relationships and boost sales performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICRMPage;