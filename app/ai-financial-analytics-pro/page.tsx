import Link from 'next/link'
import { ArrowRight, Calculator, Building2, Wallet, TrendingUp, CheckCircle, Brain, BarChart3, Shield, Target, Zap, Globe, DollarSign, Activity, Lock, FileText, CreditCard, Database, Star, Sparkles, PieChart } from 'lucide-react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'AI Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform'
      description: 'Transform your financial analysis with AI Financial Analytics Pro. Advanced machine learning, real-time insights, and predictive analytics for smarter financial decisions. Start your free trial today.'
  keywords: 'AI financial analytics, financial intelligence, predictive analytics, financial reporting, business intelligence, Zion Tech Group'
  openGraph: {
    title: 'AI Financial Analytics Pro - Advanced Financial Intelligence Platform'
      description: 'Transform your financial analysis with AI-powered insights, real-time analytics, and predictive modeling. Make smarter financial decisions with advanced intelligence.'
    type: 'website'
    url: 'https://ziontechgroup.com/ai-financial-analytics-pro'}}
export default function AiFinancialAnalyticsProPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights'
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights'
    benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection'  ];
    }
  {
    icon: BarChart3,
      title: 'Real-Time Analytics'
      description: 'Monitor your financial performance with live dashboards and instant reporting'
    }
    ];
  const analyticsTypes = [
    {
      category: 'Revenue Analytics'
      icon: DollarSign,
      items: [
        'Revenue forecasting'
        'Sales performance tracking'
        'Customer lifetime value'
        'Revenue optimization'
    'Market share analysis'
        ];
        }
    {
      category: 'Expense Management'
      icon: Calculator,
      items: [
        'Cost center analysis'
        'Budget variance tracking'
        'Expense categorization'
        'Spend optimization'
    'Vendor performance'
        ];
        }
    {
      category: 'Cash Flow Analysis'
      icon: Activity,
      items: [
        'Cash flow forecasting'
        'Working capital analysis'
        'Liquidity management'
        'Payment optimization'
    'Credit risk assessment'
        ];
        }
    {
      category: 'Investment Analytics'
      icon: TrendingUp,
      items: [
        'Portfolio performance'
        'Risk-return analysis'
        'Asset allocation'
        'Investment tracking'
    'ROI calculations'
        ];
        }
    {
      category: 'Compliance & Audit'
      icon: Lock,
      items: [
        'Regulatory compliance'
        'Audit trail management'
        'Financial controls'
        'Risk monitoring'
    'Documentation'
        ];
        }
    {
      category: 'Predictive Modeling'
      icon: Brain,
      items: [
        'Financial forecasting'
        'Scenario planning'
        'Risk modeling'
        'Market predictions'
    'Trend analysis'
    ];
}
    ];
  const pricingPlans = [
  {
      name: 'Starter'
    price: ''
      period: '/month'
    description: 'Perfect for small businesses and startups'
      features: [
        'Up to 5 data sources'
        'Basic analytics dashboard'
        'Monthly reports'
        'Email support'
        'Standard integrations'
    '1GB data storage'
        ];
      popular: false,
      cta: 'Start Free Trial'
        }
    {
      name: 'Professional'
    price: ''
      period: '/month'
    description: 'Ideal for growing businesses and finance teams'
      features: [
        'Unlimited data sources'
        'Advanced analytics suite'
        'Real-time dashboards'
        'Priority support'
        'Custom integrations'
        '10GB data storage'
        'AI-powered insights'
    'Custom reporting'
        ];
      popular: true,
      cta: 'Get Started'
        }
    {
      name: 'Enterprise'
    price: ',299'
      period: '/month'
    description: 'For large organizations with complex financial needs'
      features: [
        'Everything in Professional'
        'Custom AI models'
        'White-label options'
        'Dedicated support'
        'Unlimited storage'
        'API access'
        'On-premise deployment'
    'Custom compliance'
        ];
      popular: false,
      cta: 'Contact Sales'
    }
    ];
  const testimonials = [
    {
      name: 'Jennifer Walsh'
    company: 'FinTech Solutions'
      role: 'CFO'
    content: 'AI Financial Analytics Pro has transformed our financial reporting. The AI insights help us make data-driven decisions and identify opportunities we would have missed.'
      rating: 5,
      avatar: 'JW'
      results: '35% faster financial reporting'
        }
    {
      name: 'Robert Kim'
    company: 'Global Investments'
      role: 'Financial Director'
    content: 'The predictive analytics are incredibly accurate. We can now forecast revenue with 95% accuracy, helping us plan better and reduce financial risks.'
      rating: 5,
      avatar: 'RK'
      results: '95% forecast accuracy'
        }
    {
      name: 'Lisa Thompson'
    company: 'Enterprise Corp'
      role: 'VP Finance'
    content: 'The automated reporting saves us 20+ hours per week. Our team can now focus on strategic analysis instead of manual data processing.'
      rating: 5,
      avatar: 'LT'
    results: '20+ hours saved weekly'}
    ];
  const stats = [
    { number: '500+', label: 'Financial Institutions', icon: Building2     }
    { number: '1M+', label: 'Transactions Analyzed', icon: Database     }
    { number: '99.9%', label: 'Data Accuracy', icon: Shield     }
    { number: '50%', label: 'Faster Reporting', icon: Zap }
    ];
  const integrations = [
    { name: 'QuickBooks', icon: Calculator, category: 'Accounting'     }
    { name: 'Xero', icon: FileText, category: 'Accounting'     }
    { name: 'SAP', icon: Database, category: 'ERP'     }
    { name: 'Oracle', icon: Building2, category: 'ERP'     }
    { name: 'Salesforce', icon: TrendingUp, category: 'CRM'     }
    { name: 'HubSpot', icon: Target, category: 'CRM'     }
    { name: 'Stripe', icon: CreditCard, category: 'Payments'     }
    { name: 'PayPal', icon: Wallet, category: 'Payments' }
    ];
  return (
    <div className="...">
      <div className="...">
        {/* Hero Section */}
        <div className="...">
          <h1 className="...">
            AI Financial Analytics{' '}
            <span className="...">
              Pro
            </span>
          </h1>
          <p className="...">
            Transform your financial analysis with AI-powered insights, real-time analytics
            and predictive modeling. Make smarter financial decisions with advanced intelligence.
          </p>
          <div className="...">
            <Link 
              href="/contact" 
              className="...">
              Start Free Trial
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link 
              href="/ai-services" 
              className="...">
              View All AI Services
            </Link>
          </div>
          <div className="...">
            ✓ 14-day free trial • ✓ No credit card required • ✓ Bank-grade security
          </div>
        </div>
        {/* Stats Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              {stats.map((stat, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="...">
          <div className="...">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Features</h2>
            <p className="...">
              Our AI Financial Analytics Pro leverages cutting-edge machine learning
              to provide unprecedented insights into your financial data.
            </p>
          </div>
          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="...">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="...">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="...">
                        <CheckCircle className="w-8 h-8" />
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
        <section className="...">
          <div className="...">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Analytics</h2>
            <p className="...">
              Cover every aspect of your financial operations with our comprehensive analytics suite.
            </p>
          </div>
          <div className="...">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="...">
                <div className="...">
                  <type.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white ml-3">{type.category}</h3>
                </div>
                <ul className="...">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="...">
                      <CheckCircle className="w-8 h-8" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Integrations Section */}
        <section className="...">
          <div className="...">
            <h2 className="text-3xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="...">
              Connect with your existing financial systems and tools for a unified analytics experience.
            </p>
          </div>
          <div className="...">
            {integrations.map((integration, index) => (
              <div key={index} className="...">
                <div className="...">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.category}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="...">
          <div className="...">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="...">
              Flexible pricing plans designed to meet your financial analytics needs at any scale.
            </p>
          </div>
          <div className="...">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover: border-cyan-500/30'}`}>
                {plan.popular && (
                  <div className="...">
                    <span className="...">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="...">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="...">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="...">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="...">
                      <CheckCircle className="w-8 h-8" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white'}`}
                >
                  {plan.cta}
                  <ArrowRight className="w-8 h-8" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="...">
                Join hundreds of finance professionals who trust AI Financial Analytics Pro.
              </p>
            </div>
            <div className="...">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <div className="...">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="...">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-3">&quot;{testimonial.content}&quot;</p>
                  <div className="...">
                    Result: {testimonial.results}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="...">
          <div className="...">
            <h2 className="...">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="...">
              Start your free trial today and experience the power of AI-driven financial analytics.
              Join hundreds of finance professionals making smarter decisions with data.
            </p>
            <div className="...">
              <Link
                href="/contact"
                className="...">
                Start Free Trial
                <Sparkles className="w-8 h-8" />
              </Link>
              <Link
                href="/about"
                className="...">
                Learn More
                <PieChart className="w-8 h-8" />
              </Link>
            </div>
            <div className="...">
              <p>✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
}