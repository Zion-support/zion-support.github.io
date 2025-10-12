import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Zap, Brain, Clock, DollarSign, CheckCircle, Star, ArrowRight, Download, Send, Settings, BarChart3, Receipt, CreditCard, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Generation',
      description: 'Automatically generate professional invoices with intelligent data extraction and formatting'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Instant Processing',
      description: 'Create and send invoices in seconds with our lightning-fast AI processing'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Secure & Compliant',
      description: 'Bank-level security with automatic tax calculations and compliance checks'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Smart Analytics',
      description: 'Track payment trends, overdue invoices, and revenue insights with AI analytics'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers',
      features: [
        'Up to 50 invoices/month',
        'Basic AI generation',
        'PDF export',
        'Email delivery',
        'Basic templates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 500 invoices/month',
        'Advanced AI features',
        'Custom branding',
        'Payment tracking',
        'Advanced templates',
        'Priority support',
        'API access',
        'Multi-currency support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited invoices',
        'Premium AI capabilities',
        'White-label solution',
        'Advanced analytics',
        '24/7 dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Bulk operations'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      title: 'Save Time & Money',
      description: 'Reduce invoice creation time by 90% and eliminate manual data entry errors',
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Professional Branding',
      description: 'Create branded invoices that reflect your business identity and professionalism',
      icon: <FileText className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Automated Follow-ups',
      description: 'AI-powered payment reminders and follow-up sequences to improve collection rates',
      icon: <Send className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Multi-Channel Delivery',
      description: 'Send invoices via email, SMS, or integrate with your existing business tools',
      icon: <CreditCard className="w-8 h-8 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Intelligent invoice generation with AI-powered automation, professional templates, and automated payment tracking for businesses." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, invoice templates, payment tracking, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            AI-Powered Invoice Automation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Invoice
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your invoicing process with AI-powered automation. Generate professional invoices, 
            track payments, and get paid faster with intelligent invoice management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Sample
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Invoice Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features that make invoicing effortless and professional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Invoice Generator?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of intelligent invoice automation for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your invoicing needs and business size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:bg-white/20 ${
                plan.popular ? 'border-green-500 bg-green-500/10' : 'border-white/20'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Streamline Your Invoicing?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses already using AI-powered invoicing to get paid faster and reduce administrative overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIInvoiceGeneratorPage