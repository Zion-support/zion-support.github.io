import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AIAnalyticsDashboardPro() {
  const features = [
    {
      icon: <Brain className="w-5h-5 ml-2" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide actionable business insights'
    },
    {
      icon: <BarChart3 className="w-5h-5 ml-2" />,
      title: 'Real-time Analytics',
      description: 'Live data visualization with instant updates and interactive dashboards'
    },
    {
      icon: <Target className="w-5h-5 ml-2" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with confidence'
    },
    {
      icon: <Globe className="w-5h-5 ml-2" />,
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
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <BarChart3 className="w-5h-5 ml-2" />
                Advanced Analytics
              </div>
              <h1 className="w-5h-5 ml-2" />AI Analytics Dashboard Pro
              </h1>
              <p className="w-5h-5 ml-2" />
                Transform your data into powerful insights with our AI-powered analytics platform. 
                Real-time visualization, predictive analytics, and intelligent recommendations.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center"
        >
          Start Free Trial
                  
          <ArrowRight className="w-5h-5 ml-2" />
        </Link>
                <Link to="#demo" className="bo rder-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">View Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />Powerful Analytics Features
              </h2>
              <p className="w-5h-5 ml-2" />
                Everything you need to make data-driven decisions
              </p>
            </div>
            
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="bg-g radient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40transition-allduration-300" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                    <h3 className="w-5h-5 ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5 ml-2" />{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Dashboard Features */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />Comprehensive Dashboard Capabilities
              </h2>
              <p className="w-5h-5 ml-2" />
                Connect, analyze, and visualize all your data in one place
              </p>
            </div>
            
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {dashboardFeatures.map((feature, index) => (
                <div key="{index}" className="bg-s late-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 className="w-5h-5 ml-2" />{feature.category}</h3>
                  <ul className="w-5h-5 ml-2" />
                    {feature.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="fl exitems-center text-gray-300" />
                        <CheckCircle className="w-5h-5 ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />Flexible Pricing Plans
              </h2>
              <p className="w-5h-5 ml-2" />
                Choose the plan that fits your analytics needs
              </p>
            </div>
            
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-g radient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-400/40 scale-105 shadow-2 xl shadow-green-500/20' 
                    : 'border-green-500/20 hover: border-green-400/40'
                }`} />
                  {plan.popular && (
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <Star className="w-5h-5 ml-2" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="w-5h-5 ml-2" />{plan.name}</h3>
                  <p className="w-5h-5 ml-2" />{plan.description}</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5 ml-2" />{plan.price}</span>
                    <span className="w-5h-5 ml-2" />{plan.period}</span>
                  </div>
                  <ul className="w-5h-5 ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="fl exitems-center text-gray-300" />
                        <CheckCircle className="w-5h-5 ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-fu ll" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />Trusted by Data-Driven Companies
              </h2>
              <p className="w-5h-5 ml-2" />
                See how our analytics platform transforms business decisions
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-s late-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5h-5t e xt-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5 ml-2" />"{testimonial.content}"</p>
                  <div />
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />Start Making Data-Driven Decisions Today
              </h2>
              <p className="w-5h-5 ml-2" />
                Join thousands of businesses using AI Analytics Dashboard Pro to unlock their data potential
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-rfrom-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to="/about" className="bo rder-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};