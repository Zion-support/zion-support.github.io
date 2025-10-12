import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Building2, Wallet, Brain, BarChart3, Shield, Target, Zap, Globe, CheckCircle, Star } from 'lucide-react';
import Layout from '../layout';

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
      items: ['Revenue forecasting', 'Sales performance', 'Customer lifetime value', 'Pricing optimization', 'Market analysis', 'Growth metrics']
    },
    {
      category: 'Cost Management',
      items: ['Expense tracking', 'Cost optimization', 'Budget planning', 'Vendor analysis', 'ROI calculations', 'Cost center reporting']
    },
    {
      category: 'Cash Flow Analysis',
      items: ['Cash flow forecasting', 'Working capital analysis', 'Liquidity management', 'Payment tracking', 'Receivables analysis', 'Payables optimization']
    },
    {
      category: 'Risk Assessment',
      items: ['Credit risk analysis', 'Market risk evaluation', 'Operational risk assessment', 'Compliance monitoring', 'Fraud detection', 'Stress testing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'Up to 5 data sources',
        'Basic AI analytics',
        'Standard dashboards',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        'Unlimited data sources',
        'Advanced AI features',
        'Custom dashboards',
        'Priority support',
        'Real-time analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      description: 'Tailored solutions',
      features: [
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Financial Services Corp',
      content: 'AI Financial Analytics Pro transformed our financial reporting. The AI insights helped us identify cost savings of $2M annually.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Investment Firm',
      content: 'The predictive analytics feature is incredibly accurate. We can now forecast market trends with 95% confidence.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Manufacturing Co',
      content: 'The real-time dashboards give us instant visibility into our financial health. Decision-making has never been easier.',
      rating: 5
    }
  ];

  return (
    <Layout
      title="AI Financial Analytics Pro - Advanced Financial Intelligence | Zion Tech Group"
      description="Transform your financial analysis with AI-powered insights. Real-time analytics, predictive modeling, and automated reporting. Get started today."
      keywords="AI financial analytics, financial intelligence, predictive analytics, real-time reporting, financial dashboards"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8 text-green-400 mr-3" />
              <span className="text-green-400 font-semibold">AI-Powered Financial Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial Analytics Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your financial analysis with AI-powered insights. Get real-time analytics, 
              predictive modeling, and automated reporting in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Financial Features</h2>
              <p className="text-xl text-gray-300">Everything you need to make informed financial decisions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Financial Analytics</h2>
              <p className="text-xl text-gray-300">Cover every aspect of your financial operations</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{type.category}</h3>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-300">Flexible pricing for businesses of all sizes</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-400/40 scale-105 shadow-2xl shadow-green-500/20' 
                    : 'border-green-500/20 hover:border-green-400/40'
                }`}>
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4 text-green-400">
                      <Star className="w-5 h-5 mr-2" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'border-2 border-green-400 text-green-400 hover:bg-green-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Trusted by Financial Leaders</h2>
              <p className="text-xl text-gray-300">See how AI Financial Analytics Pro transforms financial operations</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Financial Analysis?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses who are already using AI Financial Analytics Pro to make better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Get Free Demo
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}