'use client';

import React from 'react';

import { ArrowRight, Brain, Database } from 'lucide-react';

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms provide deep insights and predictive analytics'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards with live data updates and customizable visualizations'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Predictive Modeling',
      description: 'Forecast trends, customer behavior, and business outcomes with high accuracy'
    },
    {
      icon: <Database className="w-6 h-6 text-red-500" />,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources with automated ETL processes'
    },
    {
      icon: <Eye className="w-6 h-6 text-cyan-500" />,
      title: 'Natural Language Query',
      description: 'Ask questions in plain English and get instant insights from your data'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-driven insights'
    }
  ];

  const analyticsModules = [
    {
      title: 'Financial Analytics',
      description: 'Comprehensive financial analysis and forecasting capabilities',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      features: ['Revenue forecasting', 'Cost analysis', 'Profit margin tracking', 'Budget optimization', 'Cash flow prediction']
    },
    {
      title: 'Customer Intelligence',
      description: 'Deep customer insights and behavioral analysis',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      features: ['Customer segmentation', 'Churn prediction', 'Lifetime value analysis', 'Purchase patterns', 'Satisfaction tracking']
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize business operations with data-driven insights',
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      features: ['Process optimization', 'Resource allocation', 'Performance monitoring', 'Efficiency metrics', 'Quality control']
    },
    {
      title: 'Market Intelligence',
      description: 'Competitive analysis and market trend monitoring',
      icon: <Globe className="w-8 h-8 text-red-500" />,
      features: ['Competitor analysis', 'Market trends', 'Price optimization', 'Demand forecasting', 'Brand monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic analytics dashboard',
        'Up to 5 data sources',
        'Standard reports',
        'Email support',
        'Up to 10 users',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI analytics',
        'Up to 25 data sources',
        'Custom dashboards',
        'Predictive modeling',
        'Priority support',
        'Up to 50 users',
        '10GB data storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Complete BI suite',
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Unlimited storage',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Retail Analytics Corp',
      content: 'The AI business intelligence platform has revolutionized our decision-making process. We\'ve increased revenue by 35% using their insights.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'Financial Services Group',
      content: 'The predictive modeling capabilities are outstanding. We can now forecast market trends with 95% accuracy.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Solutions',
      content: 'The operational analytics helped us optimize our supply chain and reduce costs by 25%. Highly recommended.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Advanced Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence. Advanced analytics, predictive modeling, and real-time insights. Start your free trial today!" />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive modeling, business insights, data visualization, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                AI-Powered Business Intelligence
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into actionable insights with our advanced AI-powered business intelligence platform. 
                Make smarter decisions with predictive analytics and real-time dashboards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Demo
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                ✓ 30-day free trial • ✓ No credit card required • ✓ Cancel anytime
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-400">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">35%</div>
                <div className="text-gray-400">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400">Data Points Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Real-time Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to transform your data into business intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Modules Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Analytics Modules
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized analytics solutions for every aspect of your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsModules.map((module, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{module.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{module.title}</h3>
                      <p className="text-gray-300">{module.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that scales with your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Data-Driven Companies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how businesses are transforming with AI business intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Business with AI Intelligence
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of companies making data-driven decisions with our AI platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
              <p className="text-white/80 text-sm mt-6">
                ✓ 30-day free trial • ✓ No setup fees • ✓ 24/7 support
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}