import Link from 'next/link';
import { ArrowRight, Calculator, Building2, Wallet, TrendingUp, CheckCircle, Brain, BarChart3, Shield, Target, Zap, Globe, DollarSign, Activity, Lock, FileText, CreditCard, Database } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform',
  description: 'Transform your financial analysis with AI Financial Analytics Pro. Advanced machine learning, real-time insights, and predictive analytics for smarter financial decisions. Start your free trial today.',
  keywords: 'AI financial analytics, financial intelligence, predictive analytics, financial reporting, business intelligence, Zion Tech Group',
  openGraph: {
    title: 'AI Financial Analytics Pro - Advanced Financial Intelligence Platform',
    description: 'Transform your financial analysis with AI-powered insights, real-time analytics, and predictive modeling. Make smarter financial decisions with advanced intelligence.',
    type: 'website',
    url: 'https://ziontechgroup.com/ai-financial-analytics-pro'
  }
}

// Icon mapping for serialization
const iconMap = {
  Brain,
  BarChart3,
  Shield,
  Target,
  Zap,
  Globe,
  DollarSign,
  Calculator,
  Activity,
  TrendingUp,
  Lock,
  Building2,
  Database,
  FileText,
  CreditCard,
  Wallet
};

export default function AiFinancialAnalyticsProPage() {
  const features = [
    {
      icon: 'Brain',
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: 'BarChart3',
      title: 'Real-Time Analytics',
      description: 'Monitor your financial performance with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-time KPIs', 'Dynamic reporting']
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    },
    {
      icon: 'Target',
      title: 'Custom Dashboards',
      description: 'Create personalized financial dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
      icon: 'Zap',
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically with AI-driven insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    },
    {
      icon: 'Globe',
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']
    }
  ];

  const analyticsTypes = [
    {
      category: 'Revenue Analytics',
      icon: 'DollarSign',
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
      icon: 'Calculator',
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
      icon: 'Activity',
      items: [
        'Cash flow forecasting',
        'Working capital optimization',
        'Liquidity management',
        'Payment terms analysis',
        'Cash position monitoring'
      ]
    },
    {
      category: 'Investment Analytics',
      icon: 'TrendingUp',
      items: [
        'Portfolio performance',
        'ROI analysis',
        'Risk assessment',
        'Asset allocation',
        'Investment tracking'
      ]
    },
    {
      category: 'Compliance & Audit',
      icon: 'Lock',
      items: [
        'Regulatory compliance',
        'Audit trail management',
        'Risk monitoring',
        'Policy adherence',
        'Documentation tracking'
      ]
    },
    {
      category: 'Predictive Modeling',
      icon: 'Brain',
      items: [
        'Financial forecasting',
        'Scenario planning',
        'Trend analysis',
        'Anomaly detection',
        'Predictive insights'
      ]
    }
  ];

  const benefits = [
    'Reduce financial analysis time by 75%',
    'Improve forecasting accuracy by 40%',
    'Automate 90% of routine financial tasks',
    'Real-time insights and alerts',
    'Seamless integration with existing systems',
    'Enterprise-grade security and compliance'
  ];

  const stats = [
    { number: '500+', label: 'Financial Institutions', icon: 'Building2' },
    { number: '1M+', label: 'Transactions Analyzed', icon: 'Database' },
    { number: '99.9%', label: 'Data Accuracy', icon: 'Shield' },
    { number: '50%', label: 'Faster Reporting', icon: 'Zap' }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: 'Calculator', category: 'Accounting' },
    { name: 'Xero', icon: 'FileText', category: 'Accounting' },
    { name: 'SAP', icon: 'Database', category: 'ERP' },
    { name: 'Oracle', icon: 'Building2', category: 'ERP' },
    { name: 'Salesforce', icon: 'TrendingUp', category: 'CRM' },
    { name: 'HubSpot', icon: 'Target', category: 'CRM' },
    { name: 'Stripe', icon: 'CreditCard', category: 'Payments' },
    { name: 'PayPal', icon: 'Wallet', category: 'Payments' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            AI Financial Analytics Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your financial analysis with AI-powered insights, real-time analytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.number}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to gain unprecedented insights into your financial data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <IconComponent className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Analytics Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cover every aspect of your financial operations with our comprehensive analytics platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsTypes.map((type, index) => {
              const IconComponent = iconMap[type.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{type.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose AI Financial Analytics Pro?
              </h2>
              <p className="text-gray-300 mb-8">
                Our platform combines advanced AI technology with deep financial expertise to deliver 
                insights that drive real business value and competitive advantage.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Sign Up</h4>
                    <p className="text-gray-300 text-sm">Create your account and connect your financial data sources</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Configure</h4>
                    <p className="text-gray-300 text-sm">Set up your analytics preferences and dashboard layouts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Analyze</h4>
                    <p className="text-gray-300 text-sm">Start getting AI-powered insights and automated reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and systems for a unified financial analytics experience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => {
              const IconComponent = iconMap[integration.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI Financial Analytics Pro to make smarter financial decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}