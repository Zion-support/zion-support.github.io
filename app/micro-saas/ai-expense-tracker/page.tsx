import React from 'react'
import { Link } from 'react-router-dom'

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
      title: 'Real-time Sync',
      description: 'Instant updates across all devices and team members'
  ]

  return (

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

                  ))}

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
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
