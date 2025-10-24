<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
=======
    <div>
      <Head>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Expense Tracker
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-expense-tracker services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import React from 'react'
import {Link} from 'react-router-dom'

import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import {ArrowRight, DollarSign, BarChart3, Receipt, CheckCircle, Clock, Target, TrendingUp, Shield, Zap, Bot, CheckSquare} from 'lucide-react';

export default function AIExpenseTrackerPage() {const features = [{
      icon: <Receipt className="w-5h-5ml-2"   />,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered OCR technology automatically extracts data from receipts and invoices'},
    {icon: <BarChart3 className="w-5h-5ml-2"   />,
      title: 'Real-time Analytics',
      description: 'Comprehensive spending insights with predictive analytics and budget forecasting'},
    {icon: <Bot className="w-5h-5ml-2"   />,
      title: 'AI Categorization',
      description: 'Automatically categorizes expenses using machine learning and learns from your patterns'},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: 'Bank-level Security',
      description: '256-bit encryption and secure cloud storage for all your financial data'},
    {icon: <Target className="w-5h-5ml-2"   />,
      title: 'Smart Budgeting',
      description: 'AI-powered budget recommendations based on your spending patterns and goals'},
    {icon: <Zap className="w-5h-5ml-2"   />,
      title: 'Automated Workflows',
      description: 'Set up rules for automatic expense approval, reimbursement, and reporting'}]

  const pricingPlans = [{name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipts',
        'AI categorization',
        'Basic analytics',
        'Mobile app access',
        'Cloud backup',
        'Email support'],
      popular: false;},
    {name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses and teams',
      features: ['Everything in Personal',
        'Team collaboration',
        'Advanced analytics',
        'Custom categories',
        'API access',
        'Priority support',
        'Expense policies',
        'Multi-currency support'],
      popular: true;},
    {name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: ['Everything in Business',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'Advanced reporting',
        'Compliance tools',
        'White-label option',
        'Custom workflows'],
      popular: false;}
  ]

  const testimonials = [{name: 'David Kim',
      company: 'Freelance Designer',
      content: 'Saves me hours every week. The AI categorization is incredibly accurate and the receipt scanning is flawless.',
      rating: 5,
      avatar: 'DK'},
    {name: 'Lisa Martinez',
      company: 'Small Business Owner',
      content: 'Finally found an expense tracker that actually understands my business needs. The analytics are game-changing.',
      rating: 5,
      avatar: 'LM'},
    {name: 'James Wilson',
      company: 'Finance Manager',
      content: 'Our team productivity increased by 40% since implementing this. The automated workflows are brilliant.',
      rating: 5,
      avatar: 'JW'}]

  const benefits = [{icon: <Clock className="w-5h-5ml-2"   />,
      title: 'Save 5+ Hours Weekly',
      description: 'Automated data entry and categorization eliminates manual work'},
    {icon: <TrendingUp className="w-5h-5ml-2"   />,
      title: 'Reduce Costs by 15%',
      description: 'AI insights help identify spending patterns and optimization opportunities'},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: '100% Accurate',
      description: 'AI-powered validation ensures data accuracy and compliance'},
    {icon: <Zap className="w-5h-5ml-2"   />,
      title: 'Real-time Sync',
      description: 'Instant updates across all devices and team members'}]

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiexpensetrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional ai expense tracker services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Expense Tracker</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai expense tracker services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
