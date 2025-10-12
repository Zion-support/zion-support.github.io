'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  BarChart3, 
  DollarSign, 
  Shield, 
  Target,
  PieChart,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  AlertCircle,
  Sparkles,
  Calculator,
  FileText,
  Database,
  Lock,
  Eye,
  Clock,
  Users,
  Building2,
  CreditCard,
  Wallet,
  PiggyBank
} from 'lucide-react';

export default function AiFinancialAnalyticsProPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
=======
      icon: <Brain className="w-8-h-8text-cyan-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
<<<<<<< HEAD
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
=======
      icon: <BarChart3 className="w-8-h-8text-green-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Real-Time Analytics',
      description: 'Monitor your financial performance with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-time KPIs', 'Dynamic reporting']
    },
    {
<<<<<<< HEAD
      icon: <Shield className="w-8 h-8 text-purple-400" />,
=======
      icon: <Shield className="w-8-h-8text-purple-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    },
    {
<<<<<<< HEAD
      icon: <Target className="w-8 h-8 text-orange-400" />,
=======
      icon: <Target className="w-8-h-8text-orange-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Custom Dashboards',
      description: 'Create personalized financial dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8 text-red-400" />,
=======
      icon: <Zap className="w-8-h-8text-red-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically with AI-driven insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    },
    {
<<<<<<< HEAD
      icon: <Globe className="w-8 h-8 text-blue-400" />,
=======
      icon: <Globe className="w-8-h-8text-blue-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']
    }
  ];

  const analyticsTypes = [
    {
      category: 'Revenue Analytics',
<<<<<<< HEAD
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
=======
      icon: <DollarSign className="w-6-h-6text-green-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
      icon: <Calculator className="w-6 h-6 text-red-400" />,
=======
      icon: <Calculator className="w-6-h-6text-red-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
      icon: <Activity className="w-6 h-6 text-blue-400" />,
=======
      icon: <Activity className="w-6-h-6text-blue-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
=======
      icon: <TrendingUp className="w-6-h-6text-purple-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
      icon: <Lock className="w-6 h-6 text-orange-400" />,
=======
      icon: <Lock className="w-6-h-6text-orange-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
=======
      icon: <Brain className="w-6-h-6text-cyan-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
        '1GB data storage'
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
        '10GB data storage',
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
<<<<<<< HEAD
    { number: '500+', label: 'Financial Institutions', icon: <Building2 className="w-6 h-6" /> },
    { number: '1M+', label: 'Transactions Analyzed', icon: <Database className="w-6 h-6" /> },
    { number: '99.9%', label: 'Data Accuracy', icon: <Shield className="w-6 h-6" /> },
    { number: '50%', label: 'Faster Reporting', icon: <Zap className="w-6 h-6" /> }
=======
    { number: '500+', label: 'Financial Institutions', icon: <Building2 className="w-6-h-6" / /> },
    { number: '1 M+', label: 'Transactions Analyzed', icon: <Database className="w-6-h-6" / /> },
    { number: '99.9%', label: 'Data Accuracy', icon: <Shield className="w-6-h-6" / /> },
    { number: '50%', label: 'Faster Reporting', icon: <Zap className="w-6-h-6" / /> }
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  ];

  const integrations = [
<<<<<<< HEAD
    { name: 'QuickBooks', icon: <Calculator className="w-6 h-6" />, category: 'Accounting' },
    { name: 'Xero', icon: <FileText className="w-6 h-6" />, category: 'Accounting' },
    { name: 'SAP', icon: <Database className="w-6 h-6" />, category: 'ERP' },
    { name: 'Oracle', icon: <Building2 className="w-6 h-6" />, category: 'ERP' },
    { name: 'Salesforce', icon: <TrendingUp className="w-6 h-6" />, category: 'CRM' },
    { name: 'HubSpot', icon: <Target className="w-6 h-6" />, category: 'CRM' },
    { name: 'Stripe', icon: <CreditCard className="w-6 h-6" />, category: 'Payments' },
    { name: 'PayPal', icon: <Wallet className="w-6 h-6" />, category: 'Payments' }
=======
    { name: 'QuickBooks', icon: <Calculator className="w-6-h-6" / />, category: 'Accounting' },
    { name: 'Xero', icon: <FileText className="w-6-h-6" / />, category: 'Accounting' },
    { name: 'SAP', icon: <Database className="w-6-h-6" / />, category: 'ERP' },
    { name: 'Oracle', icon: <Building2 className="w-6-h-6" / />, category: 'ERP' },
    { name: 'Salesforce', icon: <TrendingUp className="w-6-h-6" / />, category: 'CRM' },
    { name: 'HubSpot', icon: <Target className="w-6-h-6" / />, category: 'CRM' },
    { name: 'Stripe', icon: <CreditCard className="w-6-h-6" / />, category: 'Payments' },
    { name: 'PayPal', icon: <Wallet className="w-6-h-6" / />, category: 'Payments' }
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform</title>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900 pt-20">
      <Helmet />
        <title   />AI Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
        <meta name="description" content="Transform your financial analysis with AI Financial Analytics Pro. Advanced machine learning, real-time insights, and predictive analytics for smarter financial decisions. Start your free trial today." />
        <meta name="keywords" content="AI financial analytics, financial intelligence, predictive analytics, financial reporting, business intelligence, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
=======
        <meta name="viewport" content="width="device-width," initial-scale=1.0" / / />
        <meta name="theme-color" content="#8 b5 cf6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Financial Analytics Pro - Advanced Financial Intelligence Platform" />
        <meta property="og:description" content="Transform your financial analysis with AI-powered insights, real-time analytics, and predictive modeling. Make smarter financial decisions with advanced intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-financial-analytics-pro" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-financial-analytics.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Financial Analytics Pro - Advanced Financial Intelligence Platform" />
<<<<<<< HEAD
        <meta name="twitter:description" content="Transform your financial analysis with AI-powered insights, real-time analytics, and predictive modeling." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-financial-analytics.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
=======
        <meta name="twitter: description" content="Transform your financial analysis with AI-powered insights, real-time analytics, and predictive modeling." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-financial-analytics.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Financial Analytics Pro",
            "description": "Advanced AI-powered financial analytics platform with machine learning insights, real-time reporting, and predictive modeling for smarter financial decisions.",
            "url": "https://ziontechgroup.com/ai-financial-analytics-pro",
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
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Financial Analytics{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your financial analysis with AI-powered insights, real-time analytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
=======
      <div className="max-w-7 xl mx-auto px-4 sm:px-6-lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-centermb-16">
          <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-white mb-6" />
            AI Financial Analytics{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500-bg-clip-texttext-transparent"  />Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4 xlmx-auto mb-8" />
            Transform your financial analysis with AI-powered insights, real-time analytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4-justify-center mb-8">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Free Trial
              <ArrowRight className="w-5-h-5 ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View All AI Services
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            ✓ 14-day free trial • ✓ No credit card required • ✓ Bank-grade security
          </div>
        </div>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2-xlmb-16" />
          <div className="max-w-7-xlmx-auto">
            <div className="grid grid-cols-2-md:grid-cols-4gap-8">
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-fullmx-automb-4">
                    <stat.icon className="h-8-w-8text-white" / />
                  </div>
                  <div className="text-3 xl md: text-4 xl font-boldtext-white mb-2"   />{stat.number}</div>
                  <div className="text-gray-300"   />{stat.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
=======
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Advanced AI Features</h2>
            <p className="text-lg text-gray-300 max-w-3-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Our AI Financial Analytics Pro leverages cutting-edge machine learning 
              to provide unprecedented insights into your financial data.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
          <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="bg-slate-800/50 rounded-2 xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-allduration-300-group" />
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4-group-hover:scale-110transition-transform"  />{feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-whitemb-3 text-center"   />{feature.title}</h3>
                  <p className="text-gray-300-mb-4 text-center" />{feature.description}</p>
                  <ul className="space-y-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key="{benefitIndex}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400-mr-2flex-shrink-0" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Analytics Types Section */}
<<<<<<< HEAD
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Analytics</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
=======
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Comprehensive Analytics</h2>
            <p className="text-lg text-gray-300 max-w-3-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Cover every aspect of your financial operations with our comprehensive analytics suite.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
=======
          <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-3gap-6">
            {analyticsTypes.map((type, index) => (
              <div key="{index}" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30-transition-all duration-300" />
                <div className="flexitems-centermb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  {type.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{type.category}</h3>
                </div>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
<<<<<<< HEAD
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
                    <li key="{itemIndex}" className="flex items-centertext-smtext-gray-300" />
                      <CheckCircle className="w-4 h-4 text-green-400-mr-2flex-shrink-0" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
<<<<<<< HEAD
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
=======
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Seamless Integrations</h2>
            <p className="text-lg text-gray-300 max-w-3-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Connect with your existing financial systems and tools for a unified analytics experience.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.category}</p>
=======
          <div className="grid grid-cols-2-md:grid-cols-4gap-6">
            {integrations.map((integration, index) => (
              <div key="{index}" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300-text-centergroup" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-3-group-hover:scale-110transition-transform"  />{integration.icon}
                </div>
                <h3 className="text-whitefont-semiboldmb-1"   />{integration.name}</h3>
                <p className="text-gray-400-text-sm" />{integration.category}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
<<<<<<< HEAD
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
=======
        <section className="mb-16" />
          <div className="text-centermb-12">
            <h2 className="text-3 xl font-boldtext-white mb-4"   />Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              Flexible pricing plans designed to meet your financial analytics needs at any scale.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
          <div className="grid grid-cols-1-md:grid-cols-3gap-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
<<<<<<< HEAD
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
=======
                  <div className="absolute -top-3 left-1/2-transform-translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
=======
                  <h3 className="text-2 xl font-boldtext-white mb-2"   />{plan.name}</h3>
                  <div className="flex items-baselinejustify-centermb-2">
                    <span className="text-4 xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <span className="text-gray-400-ml-1"   />{plan.period}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
<<<<<<< HEAD
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
=======
                <ul className="space-y-3 mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="flexitems-centertext-gray-300" />
                      <CheckCircle className="w-5 h-5 text-green-400-mr-3flex-shrink-0" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
<<<<<<< HEAD
                  <ArrowRight className="w-4 h-4 ml-2" />
=======
                  <ArrowRight className="w-4-h-4 ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2-xlmb-16" />
          <div className="max-w-7-xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-3 xl font-boldtext-white mb-4"   />What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                Join hundreds of finance professionals who trust AI Financial Analytics Pro.
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-3">"{testimonial.content}"</p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    Result: {testimonial.results}
=======
            <div className="grid grid-cols-1-md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6-borderborder-slate-700" />
                  <div className="flexitems-centermb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                    </div>
                    <div />
                      <h4 className="text-whitefont-semibold"   />{testimonial.name}</h4>
                      <p className="text-gray-400-text-sm" />{testimonial.role}</p>
                      <p className="text-cyan-400-text-smfont-semibold" />{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flexitems-centermb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-4 h-4-text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <p className="text-gray-300-italicmb-3" />"{testimonial.content}"</p>
                  <div className="text-cyan-400-font-semiboldtext-sm"  />Result: {testimonial.results}
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven financial analytics. 
              Join hundreds of finance professionals making smarter decisions with data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Sparkles className="w-5 h-5 ml-2" />
=======
        <section className="text-center" />
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-12-borderborder-cyan-500/30">
            <h2 className="text-3 xl font-boldtext-white mb-4"  />Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3-xlmx-auto" />
              Start your free trial today and experience the power of AI-driven financial analytics. 
              Join hundreds of finance professionals making smarter decisions with data.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4-justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 inline-flexitems-centerjustify-center" />
                Start Free Trial
                <Sparkles className="w-5-h-5 ml-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
<<<<<<< HEAD
                <PieChart className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="mt-8 text-white/80 text-sm">
              <p>✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>
=======
                <PieChart className="w-5-h-5 ml-2" / />
              </Link>
            </div>
            <div className="mt-8-text-white/80text-sm">
              <p />✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}