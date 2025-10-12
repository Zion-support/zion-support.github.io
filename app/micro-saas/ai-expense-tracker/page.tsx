<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD

import React from 'react';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { ArrowRight, DollarSign, BarChart3, Receipt, CheckCircle, Clock, Target, TrendingUp, Shield, Zap, Bot, CheckSquare } from 'lucide-react';

=======
>>>>>>> origin/main
export default function AIExpenseTrackerPage() {
<<<<<<< HEAD
  const features = [
    {
      icon: <Receipt className="w-5h-5ml-2" />,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered OCR technology automatically extracts data from receipts and invoices'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive spending insights with predictive analytics and budget forecasting'
    },
    {
      icon: <Bot className="w-5h-5ml-2" />,
      title: 'AI Categorization',
      description: 'Automatically categorizes expenses using machine learning and learns from your patterns'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Bank-level Security',
      description: '256-bit encryption and secure cloud storage for all your financial data'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Smart Budgeting',
      description: 'AI-powered budget recommendations based on your spending patterns and goals'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Set up rules for automatic expense approval, reimbursement, and reporting'
    }
  ]

  const pricingPlans = [
    {
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
      popular: false;
    },
    {
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
      popular: true;
    },
    {
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
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Designer',
      content: 'Saves me hours every week. The AI categorization is incredibly accurate and the receipt scanning is flawless.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'Small Business Owner',
      content: 'Finally found an expense tracker that actually understands my business needs. The analytics are game-changing.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Finance Manager',
      content: 'Our team productivity increased by 40% since implementing this. The automated workflows are brilliant.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Save 5+ Hours Weekly',
      description: 'Automated data entry and categorization eliminates manual work'
    },
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: 'Reduce Costs by 15%',
      description: 'AI insights help identify spending patterns and optimization opportunities'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: '100% Accurate',
      description: 'AI-powered validation ensures data accuracy and compliance'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Real-time Sync',
      description: 'Instant updates across all devices and team members'
    }
  ]
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a

export default function AiExpenseTrackerPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

<<<<<<< HEAD
=======
  return (
    <>
      <Helmet>
        <title>A I Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered expense tracker with smart receipt scanning, automated categorization, and real-time analytics. Save 5+ hours weekly. Starting at $9/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Expense Tracker</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your financial management with AI-powered expense tracking, smart receipt scanning, 
            and automated categorization. Save time and gain insights like never before.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
      </>
>>>>>>> origin/main
  );

=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title />AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>
        <meta name="description" content="Revolutionary AI-powered expense tracker with smart receipt scanning, automated categorization, and real-time analytics. Save 5+ hours weekly. Starting at $9/month." /></meta>
        <meta name="keywords" content="AI expense tracker, receipt scanning, expense management, financial analytics, budget tracking, automated categorization" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-expense-tracker"  /></link>
=======
    <>
      <Helmet>
        <title>AiExpenseTracker - Zion Tech Group</title>
        <meta name="description" content="Professional ai expense tracker solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiExpenseTracker</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai expense tracker solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}