import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, FileText, DollarSign, Clock, BarChart, Zap } from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = () => {
  const invoiceFeatures = [
    {
      title: 'AI Invoice Generation',
      description: 'Automatically generate professional invoices with AI-powered content and formatting.',
      icon: '📄',
      benefits: [
        'Auto-generate invoices',
        'Smart content suggestions',
        'Professional templates',
        'Brand customization'
      ]
    },
    {
      title: 'Payment Tracking',
      description: 'Track payments, send reminders, and manage outstanding invoices automatically.',
      icon: '💰',
      benefits: [
        'Payment status tracking',
        'Automated reminders',
        'Payment notifications',
        'Outstanding balance alerts'
      ]
    },
    {
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports and analytics with AI insights.',
      icon: '📊',
      benefits: [
        'Revenue analytics',
        'Payment trends',
        'Customer insights',
        'Financial forecasting'
      ]
    },
    {
      title: 'Multi-Currency Support',
      description: 'Handle invoices in multiple currencies with automatic conversion and tax calculations.',
      icon: '🌍',
      benefits: [
        '50+ currencies supported',
        'Automatic conversion',
        'Tax calculations',
        'Exchange rate updates'
      ]
    },
    {
      title: 'Client Management',
      description: 'Manage client information, payment terms, and invoice history in one place.',
      icon: '👥',
      benefits: [
        'Client database',
        'Payment terms tracking',
        'Invoice history',
        'Contact management'
      ]
    },
    {
      title: 'Automated Workflows',
      description: 'Set up automated invoice generation, sending, and follow-up sequences.',
      icon: '⚙️',
      benefits: [
        'Recurring invoices',
        'Auto-send schedules',
        'Follow-up sequences',
        'Workflow automation'
      ]
    }
  ];

  const invoiceTypes = [
    {
      type: 'Service Invoice',
      description: 'Professional service billing with hourly rates and project tracking',
      price: '$0.50 per invoice',
      features: ['Hourly billing', 'Project tracking', 'Time logging', 'Expense tracking']
    },
    {
      type: 'Product Invoice',
      description: 'E-commerce and product sales with inventory integration',
      price: '$0.30 per invoice',
      features: ['Product catalog', 'Inventory sync', 'Tax calculations', 'Shipping tracking']
    },
    {
      type: 'Recurring Invoice',
      description: 'Subscription and recurring billing automation',
      price: '$0.25 per invoice',
      features: ['Subscription billing', 'Auto-renewal', 'Proration', 'Dunning management']
    },
    {
      type: 'Proposal Invoice',
      description: 'Convert proposals to invoices with project estimates',
      price: '$0.75 per invoice',
      features: ['Proposal templates', 'Estimate conversion', 'Project approval', 'Milestone billing']
    },
    {
      type: 'Expense Invoice',
      description: 'Expense reimbursement and travel billing',
      price: '$0.40 per invoice',
      features: ['Expense categorization', 'Receipt scanning', 'Approval workflow', 'Reimbursement tracking']
    },
    {
      type: 'Custom Invoice',
      description: 'Fully customized invoices for specific business needs',
      price: '$1.00 per invoice',
      features: ['Custom fields', 'Brand integration', 'Special formatting', 'Advanced features']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 100 invoices/month',
        'Basic templates',
        'Payment tracking',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 1,000 invoices/month',
        'Premium templates',
        'Advanced reporting',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'Complete invoicing solution for large organizations',
      features: [
        'Unlimited invoices',
        'Custom templates',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Automated invoice creation with AI-powered content generation, payment tracking, and financial reporting. Streamline your billing process." />
        <meta name="keywords" content="ai invoice generator, automated invoicing, payment tracking, financial reporting, billing automation, invoice management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Invoice Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automate your invoicing process with AI-powered content generation, payment tracking, and financial reporting. Get paid faster and reduce administrative work.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Payments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Automation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Invoice Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {invoiceFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invoice Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Invoice Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {invoiceTypes.map((invoice, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{invoice.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{invoice.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{invoice.price}</div>
                </div>
                <ul className="space-y-2">
                  {invoice.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Invoice Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Generation</h3>
              <p className="text-gray-300">AI automatically generates professional invoices with accurate content and formatting.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Faster Payments</h3>
              <p className="text-gray-300">Streamlined invoicing process leads to faster payments and improved cash flow.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Automation</h3>
              <p className="text-gray-300">Automated workflows handle reminders, follow-ups, and payment tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Invoice Generator Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Invoicing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Streamline your billing process and get paid faster with AI-powered invoice generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInvoiceGeneratorPage;