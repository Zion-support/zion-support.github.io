import {Receipt, CheckCircle, Phone, Star} from 'lucide-react';;
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
'use client'
import { X, Brain, Target, TrendingUp } from 'lucide-react'
import React from 'react'
import { Receipt } from 'lucide-react'
import { CheckCircle, Star, Phone } from 'lucide-react'

constExpenseTrackerPage: React.FC= () =>{constfeatures= [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.',
      benefit: 'Save 8+ hours per month'
   },
    {icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.',
      benefit: 'Reduce expenses by25%'
   },
    {icon: Brain,
      title: 'AI Categorization',
      description: 'Automatically categorize expenses using machine learning that learns from your spending patterns and preferences.',
      benefit: '9 9% accurate categorization'
   },
    {icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated expense approval workflows, reimbursement processes, and compliance checks.',
      benefit: 'Process expenses5x faster'
   },
    {icon: Target,
      title: 'Budget Management',
      description: 'Create and track budgets with AI-powered alerts and recommendations for better financial control.',
      benefit: 'Stay within budget90% of the time'
   },
    {icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with tax regulations and company policies with automated checks and audit trails.',
      benefit: '100% compliance guarantee'
    }
  ]

  constpricingPlans= [
    {name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic AI categorization',
        'Expense reports',
        'Mobile app access',
        'Email support',
        '1 year data retention'
      ],
      popular: false
   },
    {name: 'Business',
      price: '$2 9',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 10users',
        'Advanced AI features',
        'Team collaboration',
        'Custom categories',
        'Priority support',
        'API access',
        'Advanced reporting',
        '2 years data retention'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$9 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Premium AI features',
        'Custom workflows',
        'Advanced integrations',
        'Dedicated support',
        'White-label options',
        'Unlimited data retention',
        'Custom compliance rules'
      ],
      popular: false
    }
  ]

  const integrations = [
    { name: 'QuickBooks', icon: '📊', description: 'Accounting software' },
    { name: 'Xero', icon: '💰', description: 'Cloud accounting' },
    { name: 'Sage', icon: '📈', description: 'Business management' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'PayPal', icon: '💸', description: 'Online payments' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' }
  ]

  consttestimonials= [
    {name: 'Michael Johnson',
      company: 'Small Business Owner',
      role: 'CEO',
      content: 'Expense Tracker saved me 1 0 hours per month on bookkeeping. The AI categorization is incredibly accurate.',
      rating:5},
    {name: 'Sarah Williams',
      company: 'Marketing Agency',
      role: 'Finance Manager',
      content: 'Our expense processing time dropped from2days to2hours. The automated workflows are game-changing.',
      rating:5},
    {name: 'David Chen',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The compliance features ensure we never miss a tax deduction. Our accountant loves the detailed reports.',
      rating: 5
    }
  ]

const Page = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      {/* Hero Section */}
      <section className=&quot;container mx-auto px-4 py-16 pt-24&quot;></section>
        <div className=&quot;text-center mb-16&quot;></div>
          <div className=&quot;inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6&quot;></div>
            <Receipt className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            AI Expense Tracker
          </h1>
          <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8 font-medium&quot;>
            Smart Financial Management
          </p>
          <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed&quot;>
            Transform your expense management with AI-powered receipt scanning, automated categorization,
            and intelligent financial insights. Save time, reduce errors, and gain complete control
            over your business finances.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Start Free Trial
            </a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 mb-16&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>8+</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Hours Saved</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Per month on expense management</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>99%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Accuracy</div>
            <div className=&quot;text-gray-300 text-sm&quot;>In AI categorization</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-green-400 mb-2&quot;>25%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Cost Reduction</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Through better expense control</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-orange-400 mb-2&quot;>5x</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Faster Processing</div>
            <div className=&quot;text-gray-300 text-sm&quot;>With automated workflows</div>
          </div>
        </div>
        {/* Features Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Powerful Expense Management Features
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300&quot;></div>
                <feature.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{feature.description}</p>
                <div className=&quot;text-cyan-400 font-semibold text-sm&quot;>{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Integrations Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Integrates with Your Tools
          </h2>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;></div>
            {integrations.map((integration, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300&quot;></div>
                <div className=&quot;text-4xl mb-3&quot;>{integration.icon}</div>
                <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{integration.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{integration.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Simple, Transparent Pricing
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}></div>
                {plan.popular && (
                  <div className=&quot;bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4&quot;></div>
                    Most Popular
                  </div>
                )}
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>{plan.description}</p>
                <div className=&quot;mb-6&quot;></div>
                  <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                  <span className=&quot;text-gray-300&quot;>{plan.period}</span>
                </div>
                <ul className=&quot;space-y-3 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            What Our Customers Say
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20&quot;></div>
                <div className=&quot;flex items-center mb-4&quot;></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <p className=&quot;text-gray-300 mb-4 italic&quot;>&quot;{testimonial.content}&quot;</p>
                <div></div>
                  <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                  <div className=&quot;text-cyan-400 text-sm&quot;>{testimonial.role}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
            Ready to Master Your Expenses?
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Join thousands of businesses using AI Expense Tracker to streamline financial
            management and gain better control over their spending.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}

export default Page;
