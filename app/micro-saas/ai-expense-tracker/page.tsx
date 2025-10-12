import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Bot} from 'lucide-react';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      icon: <Receipt className="w-5 h-5ml-2" />,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered OCR technology automatically extracts data from receipts and invoices'
    },
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive spending insights with predictive analytics and budget forecasting'
    },
    {
      icon: <Bot className="w-5 h-5ml-2" />,
      title: 'AI Categorization',
      description: 'Automatically categorizes expenses using machine learning and learns from your patterns'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Bank-level Security',
      description: '256-bit encryption and secure cloud storage for all your financial data'
    },
    {
      icon: <Target className="w-5 h-5ml-2" />,
      title: 'Smart Budgeting',
      description: 'AI-powered budget recommendations based on your spending patterns and goals'
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
=======

import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Bot} from 'lucide-react';

import { ArrowRight, DollarSign, BarChart3, Receipt, CheckCircle, Clock, Target, TrendingUp, Shield, Zap, Bot, CheckSquare } from 'lucide-react';

export default function AIExpenseTrackerPage() {
  const features = [
      icon: <Receipt className="w-6h-6text-cyan-400" />,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered OCR technology automatically extracts data from receipts and invoices'
    },
      icon: <BarChart3 className="w-6h-6text-emerald-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive spending insights with predictive analytics and budget forecasting'
    },
      icon: <Bot className="w-6h-6text-purple-400" />,
      title: 'AI Categorization',
      description: 'Automatically categorizes expenses using machine learning and learns from your patterns'
    },
      icon: <Shield className="w-6h-6text-orange-400" />,
      title: 'Bank-level Security',
      description: '256-bit encryption and secure cloud storage for all your financial data'
    },
      icon: <Target className="w-6h-6text-pink-400" />,
      title: 'Smart Budgeting',
      description: 'AI-powered budget recommendations based on your spending patterns and goals'
    },
      icon: <Zap className="w-6h-6text-red-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'Automated Workflows',
      description: 'Set up rules for automatic expense approval, reimbursement, and reporting'
  ]

  const pricingPlans = [
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipts',
        'AI categorization',
        'Basic analytics',
        'Mobile app access',
        'Cloud backup',
        'Email support'
      ],
      popular: false
    },
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses and teams',
      features: [
        'Everything in Personal',
        'Team collaboration',
        'Advanced analytics',
        'Custom categories',
        'API access',
        'Priority support',
        'Expense policies',
        'Multi-currency support'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'Advanced reporting',
        'Compliance tools',
        'White-label option',
        'Custom workflows'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'David Kim',
      company: 'Freelance Designer',
      content: 'Saves me hours every week. The AI categorization is incredibly accurate and the receipt scanning is flawless.',
      rating: 5,
      avatar: 'DK'
    },
      name: 'Lisa Martinez',
      company: 'Small Business Owner',
      content: 'Finally found an expense tracker that actually understands my business needs. The analytics are game-changing.',
      rating: 5,
      avatar: 'LM'
    },
      name: 'James Wilson',
      company: 'Finance Manager',
      content: 'Our team productivity increased by 40% since implementing this. The automated workflows are brilliant.',
      rating: 5,
      avatar: 'JW'
  ]

  const benefits = [
<<<<<<< HEAD
    {
      icon: <Clock className="w-5 h-5ml-2" />,
      title: 'Save 5+ Hours Weekly',
      description: 'Automated data entry and categorization eliminates manual work'
    },
    {
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      title: 'Reduce Costs by 15%',
      description: 'AI insights help identify spending patterns and optimization opportunities'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: '100% Accurate',
      description: 'AI-powered validation ensures data accuracy and compliance'
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
=======
      icon: <Clock className="w-8h-8text-cyan-400" />,
      title: 'Save 5+ Hours Weekly',
      description: 'Automated data entry and categorization eliminates manual work'
    },
      icon: <TrendingUp className="w-8h-8text-emerald-400" />,
      title: 'Reduce Costs by 15%',
      description: 'AI insights help identify spending patterns and optimization opportunities'
    },
      icon: <Shield className="w-8h-8text-purple-400" />,
      title: '100% Accurate',
      description: 'AI-powered validation ensures data accuracy and compliance'
    },
      icon: <Zap className="w-8h-8text-orange-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      title: 'Real-time Sync',
      description: 'Instant updates across all devices and team members'
  ]

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title />AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>
        <meta name="description" content="Revolutionary AI-powered expense tracker with smart receipt scanning, automated categorization, and real-time analytics. Save 5+ hours weekly. Starting at $9/month." />
        <meta name="keywords" content="AI expense tracker, receipt scanning, expense management, financial analytics, budget tracking, automated categorization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-expense-tracker"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <DollarSign className="w-5 h-5ml-2" />
            <span />AI-Powered Financial Management</span>
          </div>
          
          <h1 className="w-5 h-5ml-2" />
            AI Expense
            <br />
            <span className="w-5 h-5ml-2" />Tracker
            </span>
          </h1>
          
          <p className="w-5 h-5ml-2">Transform your financial management with AI-powered expense tracking, smart receipt scanning, 
            and automated categorization. Save time and gain insights like never before.
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">5+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Hours Saved Weekly</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">15%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Average Cost Reduction</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">99.9%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Accuracy Rate</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">25 K+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Active Users</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Why Choose Our <span className="w-5 h-5ml-2" />AI Expense Tracker?</span>
            </h2>
            <p className="w-5 h-5ml-2">Experience the future of financial management with cutting-edge AI technology that works for you.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {benefits.map((benefit, index) => (
              <div key="{index}" className="text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{benefit.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5 h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Powerful Features for <span className="w-5 h-5ml-2" />Smart Finance</span>
            </h2>
            <p className="w-5 h-5ml-2">Everything you need to manage your finances efficiently with AI-powered intelligence and automation.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5 h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20p x-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Simple, Transparent <span className="w-5 h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5 h-5ml-2">Choose the plan that fits your needs. All plans include our core AI features and secure cloud storage.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                  <p className="w-5 h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5ml-2" />{plan.price}</span>
                    <span className="w-5 h-5ml-2" />{plan.period}</span>
                  </div>
                
                <ul className="w-5 h-5ml-2" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />{feature}</span>
                    </li>
=======

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>

      {/* Hero Section */}
    
            <span>AI-Powered Financial Management</span>

            AI Expense
    
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Tracker
          
            Transform your financial management with AI-powered expense tracking, smart receipt scanning, 
            and automated categorization. Save time and gain insights like never before.

              <span>Start Free Trial</span>
              <span>View Pricing</span>

          {/* Key Stats */}

              <div className="text-3 xl font-boldtext-cyan-400mb-2">5+</div>
              <div className="text-gray-300text-sm">Hours Saved Weekly</div>
              <div className="text-3 xl font-boldtext-purple-400mb-2">15%</div>
              <div className="text-gray-300text-sm">Average Cost Reduction</div>
              <div className="text-3 xl font-boldtext-pink-400mb-2">99.9%</div>
              <div className="text-gray-300text-sm">Accuracy Rate</div>
              <div className="text-3 xl font-boldtext-emerald-400mb-2">25 K+</div>
              <div className="text-gray-300text-sm">Active Users</div>

      {/* Benefits Section */}
    
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Expense Tracker?</span>

              Experience the future of financial management with cutting-edge AI technology that works for you.

 (
    
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}

                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                  {benefit.description}
    
            ))}

      {/* Features Section */}
    
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Finance</span>

              Everything you need to manage your finances efficiently with AI-powered intelligence and automation.

 (
    
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}

                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  {feature.description}
    
            ))}

      {/* Pricing Section */}
    
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>

              Choose the plan that fits your needs. All plans include our core AI features and secure cloud storage.

 (
                {plan.popular && (

                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                )}

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>

 (

                      <span className="text-gray-300">{feature}</span>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                  ))}

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
<<<<<<< HEAD
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Trusted by <span className="w-5 h-5ml-2" />25,000+</span> Users
            </h2>
            <p className="w-5 h-5ml-2">See what our customers are saying about their success with our AI expense tracker.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckSquare key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5 h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5 h-5ml-2" />
                  Ready to Transform Your <span className="w-5 h-5ml-2" />Financial Management?</span>
                </h2>
                
                <p className="w-5 h-5ml-2">Join thousands of users already saving time and money with our AI-powered expense tracker. 
                  Start your free trial today and experience the future of financial management.
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
=======
Get Started
    
            ))}

      {/* Testimonials Section */}
    
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">25,000+</span> Users

              See what our customers are saying about their success with our AI expense tracker.

 (
    
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>

 (
                  ))}

                <p className="text-gray-300italic">"{testimonial.content}"</p>

            ))}

      {/* CTA Section */}
    
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Financial Management?</span>
                
                  Join thousands of users already saving time and money with our AI-powered expense tracker. 
                  Start your free trial today and experience the future of financial management.

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

  );
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
