<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

import React from 'react';

import { Link } from 'react-router-dom';
=======
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

import { Brain, TrendingUp, Zap, CheckCircle, ArrowRight, Star, BarChart3, DollarSign, Shield, Target, PieChart, Activity, Globe, Monitor, Sparkles, Calculator, FileText, Database, Lock, Building2, CreditCard, Wallet } from 'lucide-react';

export default function AiFinancialAnalyticsProPage() {
<<<<<<< HEAD
=======
export default function AiFinancialAnalyticsProPage() {
'use client';

>>>>>>> origin/main

  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your financial performance with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-time KPIs', 'Dynamic reporting']
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Custom Dashboards',
      description: 'Create personalized financial dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically with AI-driven insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    },
    {
      icon: <Globe className="w-5h-5ml-2" />,
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']
    }
  ];
  const analyticsTypes = [
    {
      category: 'Revenue Analytics',
      icon: <DollarSign className="w-5h-5ml-2" />,
      items: [
        'Revenue forecasting',
        'Sales performance tracking',
        'Customer lifetime value',
        'Revenue optimization',
        'Market share analysis'
      ]
    },
    {
      category: 'Expense Management',
      icon: <Calculator className="w-5h-5ml-2" />,
      items: [
        'Cost center analysis',
        'Budget variance tracking',
        'Expense categorization',
        'Spend optimization',
        'Vendor performance'
      ]
    },
    {
      category: 'Cash Flow Analysis',
      icon: <Activity className="w-5h-5ml-2" />,
      items: [
        'Cash flow forecasting',
        'Working capital analysis',
        'Liquidity management',
        'Payment optimization',
        'Credit risk assessment'
      ]
    },
    {
      category: 'Investment Analytics',
      icon: <TrendingUp className="w-5h-5ml-2" />,
      items: [
        'Portfolio performance',
        'Risk-return analysis',
        'Asset allocation',
        'Investment tracking',
        'ROI calculations'
      ]
    },
    {
      category: 'Compliance & Audit',
      icon: <Lock className="w-5h-5ml-2" />,
      items: [
        'Regulatory compliance',
        'Audit trail management',
        'Financial controls',
        'Risk monitoring',
        'Documentation'
      ]
    },
    {
      category: 'Predictive Modeling',
      icon: <Brain className="w-5h-5ml-2" />,
      items: [
        'Financial forecasting',
        'Scenario planning',
        'Risk modeling',
        'Market predictions',
        'Trend analysis'
      ]
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic analytics dashboard',
        'Monthly reports',
        'Email support',
        'Standard integrations',
        '1 GB data storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and finance teams',
      features: [
        'Unlimited data sources',
        'Advanced analytics suite',
        'Real-time dashboards',
        'Priority support',
        'Custom integrations',
        '10 GB data storage',
        'AI-powered insights',
        'Custom reporting'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex financial needs',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Unlimited storage',
        'API access',
        'On-premise deployment',
        'Custom compliance'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];
  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'FinTech Solutions',
      role: 'CFO',
      content: 'AI Financial Analytics Pro has transformed our financial reporting. The AI insights help us make data-driven decisions and identify opportunities we would have missed.',
      rating: 5,
      avatar: 'JW',
      results: '35% faster financial reporting'
    },
    {
      name: 'Robert Kim',
      company: 'Global Investments',
      role: 'Financial Director',
      content: 'The predictive analytics are incredibly accurate. We can now forecast revenue with 95% accuracy, helping us plan better and reduce financial risks.',
      rating: 5,
      avatar: 'RK',
      results: '95% forecast accuracy'
    },
    {
      name: 'Lisa Thompson',
      company: 'Enterprise Corp',
      role: 'VP Finance',
      content: 'The automated reporting saves us 20+ hours per week. Our team can now focus on strategic analysis instead of manual data processing.',
      rating: 5,
      avatar: 'LT',
      results: '20+ hours saved weekly'
    }
  ];
  const stats = [
    { number: '500+', label: 'Financial Institutions', icon: <Building2 className="w-5h-5ml-2" /&gt; },</Building2></Building2>
    { number: '1 M+', label: 'Transactions Analyzed', icon: <Database className="w-5h-5ml-2" /&gt; },</Database></Database>
    { number: '99.9%', label: 'Data Accuracy', icon: <Shield className="w-5h-5ml-2" /&gt; },</Shield></Shield>
    { number: '50%', label: 'Faster Reporting', icon: <Zap className="w-5h-5ml-2" /&gt; }</Zap></Zap>
  ];
  const integrations = [
    { name: 'QuickBooks', icon: <Calculator className="w-5h-5ml-2" />, category: 'Accounting' },
    { name: 'Xero', icon: <FileText className="w-5h-5ml-2" />, category: 'Accounting' },
    { name: 'SAP', icon: <Database className="w-5h-5ml-2" />, category: 'ERP' },
    { name: 'Oracle', icon: <Building2 className="w-5h-5ml-2" />, category: 'ERP' },
    { name: 'Salesforce', icon: <TrendingUp className="w-5h-5ml-2" />, category: 'CRM' },
    { name: 'HubSpot', icon: <Target className="w-5h-5ml-2" />, category: 'CRM' },
    { name: 'Stripe', icon: <CreditCard className="w-5h-5ml-2" />, category: 'Payments' },
    { name: 'PayPal', icon: <Wallet className="w-5h-5ml-2" />, category: 'Payments' }
  ];
  return (
<<<<<<< HEAD

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform</title>

        {/* Open Graph Meta Tags */}
    
        {/* Twitter Card Meta Tags */}
    
        {/* Structured Data */}
        <script type="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Financial Analytics Pro",
            "description": "Advanced AI-powered financial analytics platform with machine learning insights, real-time reporting, and predictive modeling for smarter financial decisions.",
            "url": "https: //ziontechgroup.com/ai-financial-analytics-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "unitText": "MONTH"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
          })}

              <p>✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>

<<<<<<< HEAD
=======
  return (
    <>
      <Helmet>
        <title>Ai Financial Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai financial analytics pro by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Service</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your financial analysis with AI-powered insights, real-time analytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligence.</p>
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
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiFinancialAnalyticsProPage() {
  return (
    <>
      <Helmet>
        <title>AiFinancialAnalyticsPro - Zion Tech Group</title>
        <meta name="description" content="Professional ai financial analytics pro solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiFinancialAnalyticsPro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai financial analytics pro solutions coming soon.</p>
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