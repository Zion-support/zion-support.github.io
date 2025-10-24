<<<<<<< HEAD
'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import Link from 'next/link';
import { ArrowRight, Calculator, Building2, Wallet, PiggyBank, BarChart, TrendingUp, CheckCircle, Brain, Settings, BarChart3, Shield, Target, Zap, Globe, DollarSign, Activity, Lock, FileText, CreditCard, Database, Star, Sparkles, PieChart, Send, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform',
  description: 'Transform your financial analysis with AI Financial Analytics Pro. Advanced machine learning, real-time insights, and predictive analytics for smarter financial decisions. Start your free trial today.',
  keywords: 'AI financial analytics, financial intelligence, predictive analytics, financial reporting, business intelligence, Zion Tech Group',
  openGraph: {
    title: 'AI Financial Analytics Pro - Advanced Financial Intelligence Platform',
    description: 'Transform your financial analysis with AI-powered insights, real-time analytics, and predictive modeling. Make smarter financial decisions with advanced intelligence.',
    type: 'website',
    url: 'https://ziontechgroup.com/ai-financial-analytics-pro',
  },
};

export default function AiFinancialAnalyticsProPage() {

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor your financial performance with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-time KPIs', 'Dynamic reporting']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized financial dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically with AI-driven insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']
    }
  ];

  const analyticsTypes = [
    {
      category: 'Revenue Analytics',
      icon: DollarSign,
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
      icon: Calculator,
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
      icon: Activity,
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
      icon: TrendingUp,
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
      icon: Lock,
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
      icon: Brain,
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
    { number: '500+', label: 'Financial Institutions', icon: Building2 },
    { number: '1M+', label: 'Transactions Analyzed', icon: Database },
    { number: '99.9%', label: 'Data Accuracy', icon: Shield },
    { number: '50%', label: 'Faster Reporting', icon: Zap }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: Calculator, category: 'Accounting' },
    { name: 'Xero', icon: FileText, category: 'Accounting' },
    { name: 'SAP', icon: Database, category: 'ERP' },
    { name: 'Oracle', icon: Building2, category: 'ERP' },
    { name: 'Salesforce', icon: TrendingUp, category: 'CRM' },
    { name: 'HubSpot', icon: Target, category: 'CRM' },
    { name: 'Stripe', icon: CreditCard, category: 'Payments' },
    { name: 'PayPal', icon: Wallet, category: 'Payments' }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-2da3

const AiFinancialAnalyticsProPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ai Financial Analytics Pro</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Advanced AI solutions for modern businesses.</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">

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
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link 
              href="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View All AI Services
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-2da3
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
              <p className="text-xl text-gray-300">Advanced AI solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">Leverage artificial intelligence for enhanced performance and insights.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
                <p className="text-gray-300">Built to scale with your business needs and growth.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance features.</p>
              </div>
=======
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
                  </div>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-2da3
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiFinancialAnalyticsProPage;
