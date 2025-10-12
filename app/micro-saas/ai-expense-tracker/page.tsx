import React from 'react'
import { Link } from 'react-router-dom'
export default function AIExpenseTrackerPage() {
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

  return (

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Expense Tracker - Zion Tech Group | Smart Financial Management</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

      </>
  );

