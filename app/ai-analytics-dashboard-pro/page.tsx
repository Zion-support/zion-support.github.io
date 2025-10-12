import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AIAnalyticsDashboardPro() {
  const features = [
    {
      icon: <Brain className="w-6h-6text-cyan-400" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide actionable business insights'
    },
    {
      icon: <BarChart3 className="w-6h-6text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Live data visualization with instant updates and interactive dashboards'
    },
    {
      icon: <Target className="w-6h-6text-yellow-400" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with confidence'
    },
    {
      icon: <Globe className="w-6h-6text-green-400" />,
      title: 'Multi-Platform Integration',
      description: 'Connect all your data sources in one unified dashboard'
    }
  ]

  const dashboardFeatures = [
    {
      category: 'Data Sources',
      items: ['Google Analytics', 'Facebook Ads', 'Salesforce CRM', 'Shopify', 'Stripe', 'Custom APIs']
    },
    {
      category: 'Visualizations',
      items: ['Interactive Charts', 'Heat Maps', 'Funnel Analysis', 'Cohort Analysis', 'Custom Reports', 'Real-time Alerts']
    },
    {
      category: 'AI Features',
      items: ['Anomaly Detection', 'Trend Prediction', 'Customer Segmentation', 'Churn Analysis', 'ROI Optimization', 'Smart Alerts']
    },
    {
      category: 'Collaboration',
      items: ['Team Dashboards', 'Custom Permissions', 'Scheduled Reports', 'Export Options', 'API Access', 'White-label']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic AI insights',
        'Standard visualizations',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 data sources',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'Real-time alerts',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'E-commerce Plus',
      content: 'AI Analytics Dashboard Pro transformed our decision-making process. ROI increased by 60% in just 3 months.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Marketing Agency Pro',
      content: 'The predictive analytics helped us optimize campaigns before problems occurred. Game-changer for our clients.',
      rating: 5
    },
    {
      name: 'Michael Davis',
      company: 'SaaS Startup',
      content: 'Real-time insights and AI recommendations saved us countless hours of manual analysis. Highly recommended.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Analytics Dashboard Pro - Advanced Business Intelligence | Zion Tech Group"
      description="Transform your data into actionable insights with AI-powered analytics dashboard. Real-time visualization, predictive analytics, and custom reporting. Start your free trial today."
      keywords="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-smfont-mediummb-6">
                <BarChart3 className="w-4h-4mr-2" />
                Advanced Analytics
              </div>
              <h1 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />AI Analytics Dashboard Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Transform your data into powerful insights with our AI-powered analytics platform. 
                Real-time visualization, predictive analytics, and intelligent recommendations.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Start Free Trial
                  
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Powerful Analytics Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Everything you need to make data-driven decisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40transition-allduration-300" />
                  <div className="flex items-centermb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semiboldtext-whiteml-3"   />{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">
              {feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Dashboard Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Comprehensive Dashboard Capabilities
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Connect, analyze, and visualize all your data in one place
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {dashboardFeatures.map((feature, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 className="text-xl font-semiboldtext-white mb-4"   />{feature.category}</h3>
                  <ul className="space-y-2" />
                    {feature.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-4 h-4text-green-400mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Choose the plan that fits your analytics needs
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-400/40 scale-105 shadow-2 xl shadow-green-500/20' 
                    : 'border-green-500/20 hover: border-green-400/40'
                }`} />
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-smfont-mediummb-4">
                      <Star className="w-4h-4mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-6">
              {plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5text-green-400mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                        : 'border-2 border-green-400 text-green-400 hover: bg-green-400/10'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Trusted by Data-Driven Companies
              </h2>
              <p className="text-gray-300">
              See how our analytics platform transforms business decisions
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="flex items-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
              "{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="text-smtext-gray-400"   />{testimonial.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-4 xlmx-autotext-center">
            <div className="bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-green-500/30">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Start Making Data-Driven Decisions Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses using AI Analytics Dashboard Pro to unlock their data potential
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};