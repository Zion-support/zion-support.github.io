import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Building2, Wallet} from 'lucide-react';
'use client';

import { useState } from 'react';

export default function AiFinancialAnalyticsProPage() {

  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your financial performance with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-time KPIs', 'Dynamic reporting']
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    },
    {
      icon: <Target className="w-5 h-5 ml-2" />,
      title: 'Custom Dashboards',
      description: 'Create personalized financial dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically with AI-driven insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    },
    {
      icon: <Globe className="w-5 h-5 ml-2" />,
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']
    }
  ];
  const analyticsTypes = [
    {
      category: 'Revenue Analytics',
      icon: <DollarSign className="w-5 h-5 ml-2" />,
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
      icon: <Calculator className="w-5 h-5 ml-2" />,
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
      icon: <Activity className="w-5 h-5 ml-2" />,
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
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
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
      icon: <Lock className="w-5 h-5 ml-2" />,
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
      icon: <Brain className="w-5 h-5 ml-2" />,
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
    { number: '500+', label: 'Financial Institutions', icon: <Building2 className="w-5 h-5 ml-2" /> },
    { number: '1 M+', label: 'Transactions Analyzed', icon: <Database className="w-5 h-5 ml-2" /> },
    { number: '99.9%', label: 'Data Accuracy', icon: <Shield className="w-5 h-5 ml-2" /> },
    { number: '50%', label: 'Faster Reporting', icon: <Zap className="w-5 h-5 ml-2" /> }
  ];
  const integrations = [
    { name: 'QuickBooks', icon: <Calculator className="w-5 h-5 ml-2" />, category: 'Accounting' },
    { name: 'Xero', icon: <FileText className="w-5 h-5 ml-2" />, category: 'Accounting' },
    { name: 'SAP', icon: <Database className="w-5 h-5 ml-2" />, category: 'ERP' },
    { name: 'Oracle', icon: <Building2 className="w-5 h-5 ml-2" />, category: 'ERP' },
    { name: 'Salesforce', icon: <TrendingUp className="w-5 h-5 ml-2" />, category: 'CRM' },
    { name: 'HubSpot', icon: <Target className="w-5 h-5 ml-2" />, category: 'CRM' },
    { name: 'Stripe', icon: <CreditCard className="w-5 h-5 ml-2" />, category: 'Payments' },
    { name: 'PayPal', icon: <Wallet className="w-5 h-5 ml-2" />, category: 'Payments' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Hero Section */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <h1 className="w-5 h-5 ml-2" />
            AI Financial Analytics{' '}
            <span className="w-5 h-5 ml-2" />Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your financial analysis with AI-powered insights, real-time analytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        >
          Start Free Trial
              
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
            <Link to="/ai-services" className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">View All AI Services
            </Link>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">✓ 14-day free trial • ✓ No credit card required • ✓ Bank-grade security
          </div>

        {/* Stats Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <stat.icon className="h-8w-8text-white"  />
                  </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced AI Features</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Our AI Financial Analytics Pro leverages cutting-edge machine learning 
              to provide unprecedented insights into your financial data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50rounded-2 xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300group" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                  </div>
                  <h3 className="w-5 h-5 ml-2" />{feature.title}</h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{feature.description}</p>
                  <ul className="w-5 h-5 ml-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5 h-5 ml-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Comprehensive Analytics</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Cover every aspect of your financial operations with our comprehensive analytics suite.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30transition-all duration-300" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {type.icon}
                  <h3 className="w-5 h-5 ml-2" />{type.category}</h3>
                </div>
                <ul className="w-5 h-5 ml-2" />
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-centertext-sm text-gray-300" />
                      <CheckCircle className="w-5 h-5 ml-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Seamless Integrations</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Connect with your existing financial systems and tools for a unified analytics experience.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300text-centergroup" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{integration.icon}
                </div>
                <h3 className="w-5 h-5 ml-2" />{integration.name}</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{integration.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Flexible pricing plans designed to meet your financial analytics needs at any scale.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`bg-slate-800/50" rounded-2 xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover: border-cyan-500/30'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5 ml-2" />Most Popular
                    </span>
                  </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5 h-5 ml-2" />{plan.name}</h3>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5 ml-2" />{plan.price}</span>
                    <span className="w-5 h-5 ml-2" />{plan.period}</span>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{plan.description}</p>
                </div>
                
                <ul className="w-5 h-5 ml-2" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300" />
                      <CheckCircle className="w-5 h-5 ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white'
                  }`} />
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join hundreds of finance professionals who trust AI Financial Analytics Pro.
              </p>
          </div>
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                    </div>
                    <div />
                      <h4 className="w-5 h-5 ml-2" />{testimonial.name}</h4>
                      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{testimonial.role}</p>
                      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{testimonial.company}</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4h-4text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"{testimonial.content}"</p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Result: {testimonial.results}
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Start your free trial today and experience the power of AI-driven financial analytics. 
              Join hundreds of finance professionals making smarter decisions with data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center" />
                Start Free Trial
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/about" className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center" />
                Learn More
                <PieChart className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <p />✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>
            </div>
        </section>
      </div>
  );
}