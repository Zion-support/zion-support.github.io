'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Calculator, Building2, Wallet, PiggyBank } from 'lucide-react';
export default function AiFinancialAnalyticsProPage() {

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your financial performance with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-time KPIs', 'Dynamic reporting']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Custom Dashboards',
      description: 'Create personalized financial dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically with AI-driven insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']
    }
  ];

  const analyticsTypes = [
    {
      category: 'Revenue Analytics',
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
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
      icon: <Calculator className="w-6 h-6 text-red-400" />,
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
      icon: <Activity className="w-6 h-6 text-blue-400" />,
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
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
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
      icon: <Lock className="w-6 h-6 text-orange-400" />,
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
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
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
    { number: '500+', label: 'Financial Institutions', icon: <Building2 className="w-6 h-6" /> },
    { number: '1M+', label: 'Transactions Analyzed', icon: <Database className="w-6 h-6" /> },
    { number: '99.9%', label: 'Data Accuracy', icon: <Shield className="w-6 h-6" /> },
    { number: '50%', label: 'Faster Reporting', icon: <Zap className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: <Calculator className="w-6 h-6" />, category: 'Accounting' },
    { name: 'Xero', icon: <FileText className="w-6 h-6" />, category: 'Accounting' },
    { name: 'SAP', icon: <Database className="w-6 h-6" />, category: 'ERP' },
    { name: 'Oracle', icon: <Building2 className="w-6 h-6" />, category: 'ERP' },
    { name: 'Salesforce', icon: <TrendingUp className="w-6 h-6" />, category: 'CRM' },
    { name: 'HubSpot', icon: <Target className="w-6 h-6" />, category: 'CRM' },
    { name: 'Stripe', icon: <CreditCard className="w-6 h-6" />, category: 'Payments' },
    { name: 'PayPal', icon: <Wallet className="w-6 h-6" />, category: 'Payments' }
  ];

  return (
    <div>
      <Helmet>
        <title>AI Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform</title>
        <meta name="description" content="Transform your financial analysis with AI Financial Analytics Pro. Advanced machine learning, real-time insights, and predictive analytics for smarter financial decisions. Start your free trial today." />
        <meta name="keywords" content="AI financial analytics, financial intelligence, predictive analytics, financial reporting, business intelligence, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        </Brain>
        </BarChart3>
        </Shield>
        </Target>
        </Zap>
        </Globe>
        </DollarSign>
        </Calculator>
        </Activity>
        </TrendingUp>
        </Lock>
        </Brain>
        </Building2>
        </Database>
        </Shield>
        </Zap>
        </Calculator>
        </FileText>
        </Database>
        </Building2>
        </TrendingUp>
        </Target>
        </CreditCard>
        </Wallet>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </meta>
        </ArrowRight>
        </stat>
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
        </ArrowRight>
        </Star>
        </Sparkles>
        </PieChart>
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
        <meta name="twitter:description" content="Transform your financial analysis with AI-powered insights, real-time analytics, and predictive modeling." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-financial-analytics.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        
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

      <div>
        {/* Hero Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Financial Analytics{' '}
            <span>
              Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your financial analysis with AI-powered insights, real-time analytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligence.
          </p>
          <div>
            <Link;
to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link;
to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View All AI Services
            </Link>
          </div>
          <div>
            ✓ 14-day free trial • ✓ No credit card required • ✓ Bank-grade security
          </div>
        </div>

        {/* Stats Section */}
        <section>
          <div>
            <div>
              {stats.map((stat, index) => (
                <div>
                  <div>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>{stat.number}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI Financial Analytics Pro leverages cutting-edge machine learning;
to provide unprecedented insights into your financial data.
            </p>
          </div>
          
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  <div>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Analytics</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cover every aspect of your financial operations with our comprehensive analytics suite.
            </p>
          </div>
          
          <div>
            {analyticsTypes.map((type, index) => (
              <div>
                <div>
                  {type.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{type.category}</h3>
                </div>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your existing financial systems and tools for a unified analytics experience.
            </p>
          </div>
          
          <div>
            {integrations.map((integration, index) => (
              <div>
                <div>
                  {integration.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to meet your financial analytics needs at any scale.
            </p>
          </div>
          
          <div>
            {pricingPlans.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <span>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div>
                    <span>{plan.price}</span>
                    <span>{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link;
to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join hundreds of finance professionals who trust AI Financial Analytics Pro.
              </p>
            </div>
            
            <div>
              {testimonials.map((testimonial, index) => (
                <div>
                  <div>
                    <div>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-3">"{testimonial.content}"</p>
                  <div>
                    Result: {testimonial.results}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven financial analytics. 
              Join hundreds of finance professionals making smarter decisions with data.
            </p>
            <div>
              <Link;
to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
              <Link;
to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <PieChart className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div>
              <p>✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}