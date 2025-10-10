'use client';
import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  BarChart, 
  PieChart, 
  Target, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Award,
  Calculator,
  FileText,
  AlertTriangle,
  TrendingUp as Growth,
  PieChart as Analytics,
  Shield as Security,
  Globe,
  Smartphone,
  Database,
  Settings,
  Download,
  Upload,
  Eye,
  Lock,
  RefreshCw,
  Sparkles
} from 'lucide-react';

const AIFinancialAnalyzerProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: BarChart,
      title: 'AI-Powered Financial Analysis',
      description: 'Advanced machine learning algorithms analyze your financial data with 99.7% accuracy',
      details: ['Predictive analytics', 'Risk assessment', 'Trend analysis', 'Anomaly detection']
    },
    {
      icon: Target,
      title: 'Investment Optimization',
      description: 'Intelligent portfolio management with real-time optimization recommendations',
      details: ['Portfolio rebalancing', 'Asset allocation', 'Risk management', 'Performance tracking']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Real-time fraud detection and prevention with advanced AI algorithms',
      details: ['Transaction monitoring', 'Pattern recognition', 'Alert system', 'Compliance tracking']
    },
    {
      icon: Calculator,
      title: 'Tax Optimization',
      description: 'Smart tax planning and optimization to maximize your savings',
      details: ['Tax forecasting', 'Deduction optimization', 'Compliance monitoring', 'Filing assistance']
    },
    {
      icon: FileText,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports and insights automatically',
      details: ['Custom reports', 'Real-time dashboards', 'Export options', 'Scheduled delivery']
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies with real-time exchange rate updates',
      details: ['50+ currencies', 'Real-time rates', 'Hedging strategies', 'Cross-border analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: 29,
      originalPrice: 59,
      period: 'month',
      description: 'Perfect for individual investors and small portfolios',
      features: [
        'Up to 5 accounts',
        'Basic financial analysis',
        'Monthly reports',
        'Email support',
        'Mobile app access',
        'Tax optimization',
        'Fraud monitoring'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 99,
      originalPrice: 149,
      period: 'month',
      description: 'Ideal for financial advisors and growing portfolios',
      features: [
        'Up to 25 accounts',
        'Advanced AI analysis',
        'Real-time reporting',
        'Priority support',
        'API access',
        'Custom dashboards',
        'Multi-currency support',
        'Advanced tax planning'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 299,
      originalPrice: 399,
      period: 'month',
      description: 'For financial institutions and large portfolios',
      features: [
        'Unlimited accounts',
        'Premium AI analysis',
        'Custom reporting',
        '24/7 dedicated support',
        'Full API access',
        'White-label solution',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Personal Finance Management',
      description: 'Take control of your personal finances with AI-powered insights and recommendations',
      icon: Smartphone,
      examples: ['Budget tracking', 'Expense analysis', 'Savings optimization', 'Debt management']
    },
    {
      title: 'Investment Advisory',
      description: 'Professional-grade investment analysis and portfolio management tools',
      icon: TrendingUp,
      examples: ['Portfolio analysis', 'Risk assessment', 'Asset allocation', 'Performance tracking']
    },
    {
      title: 'Business Financial Planning',
      description: 'Comprehensive financial planning and analysis for businesses of all sizes',
      icon: BarChart,
      examples: ['Cash flow analysis', 'Profit optimization', 'Growth planning', 'Financial forecasting']
    },
    {
      title: 'Tax & Compliance',
      description: 'Streamline tax preparation and ensure compliance with financial regulations',
      icon: FileText,
      examples: ['Tax planning', 'Compliance monitoring', 'Audit preparation', 'Regulatory reporting']
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Financial Advisor',
      company: 'WealthMax Advisors',
      content: 'AI Financial Analyzer Pro has revolutionized how we manage client portfolios. The AI insights are incredibly accurate and have improved our returns by 23%.',
      rating: 5,
      avatar: '/images/testimonials/david-kim.jpg'
    },
    {
      name: 'Lisa Thompson',
      role: 'CFO',
      company: 'TechStart Inc.',
      content: 'The automated reporting and fraud detection features have saved us countless hours and prevented several potential security issues.',
      rating: 5,
      avatar: '/images/testimonials/lisa-thompson.jpg'
    },
    {
      name: 'Robert Chen',
      role: 'Portfolio Manager',
      company: 'Global Investments',
      content: 'The multi-currency support and real-time analysis capabilities are game-changers for our international operations.',
      rating: 5,
      avatar: '/images/testimonials/robert-chen.jpg'
    }
  ];

  const stats = [
    { number: '99.7%', label: 'Analysis Accuracy', icon: Target },
    { number: '50+', label: 'Currencies Supported', icon: Globe },
    { number: '15K+', label: 'Active Users', icon: Users },
    { number: '23%', label: 'Average ROI Increase', icon: TrendingUp }
  ];

  const integrations = [
    { name: 'Banking APIs', icon: Database, description: 'Connect to 1000+ banks worldwide' },
    { name: 'Trading Platforms', icon: TrendingUp, description: 'Integrate with major trading platforms' },
    { name: 'Accounting Software', icon: Calculator, description: 'Sync with QuickBooks, Xero, and more' },
    { name: 'Tax Software', icon: FileText, description: 'Export to TurboTax, H&R Block' },
    { name: 'CRM Systems', icon: Users, description: 'Connect with Salesforce, HubSpot' },
    { name: 'Cloud Storage', icon: Database, description: 'Secure cloud storage and backup' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">AI Financial Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Financial Analyzer Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your financial management with AI-powered analysis, investment optimization, 
              and intelligent insights that maximize your wealth and minimize risk.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99.7% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">50+ Currencies</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Real-time Analysis</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-bold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Advanced Financial Intelligence
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features that provide deep insights into your financial health and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Who Can Benefit
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From individual investors to large financial institutions, AI Financial Analyzer Pro serves all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card-advanced p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your existing financial tools and platforms for a unified experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="cyber-card-advanced p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-xs text-gray-400">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your financial analysis needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    <div className="text-lg text-gray-500 line-through">${plan.originalPrice}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700' 
                    : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Trusted by Financial Professionals
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Financial Analyzer Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-green-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven financial analysis. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📞 Phone: +1 (302) 464-0950</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAnalyzerProPage;