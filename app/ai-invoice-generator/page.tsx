import React from 'react';
import { CheckCircle, ArrowRight, FileText, DollarSign, Clock, Shield, Zap, Users, Star, Download, Send, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIInvoiceGeneratorPage() {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Smart Invoice Creation',
      description: 'Generate professional invoices automatically from project data, time tracking, and client information.',
      features: ['Auto-populate client data', 'Project-based billing', 'Time tracking integration', 'Recurring invoice setup', 'Multi-currency support', 'Tax calculations'],
      price: 'Starting at $19/month',
      popular: true
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Payment Processing',
      description: 'Accept payments directly through invoices with integrated payment gateways and automated follow-ups.',
      features: ['Stripe integration', 'PayPal support', 'Bank transfer options', 'Payment reminders', 'Late fee automation', 'Payment analytics'],
      price: 'Starting at $29/month',
      popular: false
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Financial Analytics',
      description: 'Track revenue, outstanding payments, and financial performance with comprehensive reporting.',
      features: ['Revenue tracking', 'Outstanding payments', 'Client payment history', 'Tax reporting', 'Profit margin analysis', 'Custom reports'],
      price: 'Starting at $39/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Save Time',
      description: 'Reduce invoice creation time by 90% with automated generation and smart templates.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Get Paid Faster',
      description: 'Accelerate payments with professional invoices and automated follow-up reminders.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Reduce Errors',
      description: 'Eliminate manual data entry errors with AI-powered validation and auto-calculation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Professional Branding',
      description: 'Create branded invoices that reflect your business identity and build trust.'
    }
  ];

  const useCases = [
    {
      title: 'Freelancers',
      description: 'Streamline invoicing for project-based work and hourly billing',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Small Businesses',
      description: 'Professional invoicing system for growing businesses',
      icon: <FileText className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Consultants',
      description: 'Efficient billing for consulting services and retainers',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Agencies',
      description: 'Multi-client invoicing with project tracking and reporting',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Invoices Generated' },
    { number: '40%', label: 'Faster Payments' },
    { number: '95%', label: 'Time Saved' },
    { number: '24/7', label: 'Automation' }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: ['Up to 50 invoices/month', 'Basic templates', 'Email support', 'PDF export', 'Client management', 'Basic reporting'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for small businesses and growing teams',
      features: ['Unlimited invoices', 'Custom branding', 'Payment processing', 'Advanced templates', 'Priority support', 'Analytics dashboard'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For agencies and large organizations',
      features: ['Multi-user access', 'API integration', 'Custom fields', 'Advanced automation', 'Dedicated support', 'White-label options'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Generate professional invoices automatically with AI-powered invoice generator. Streamline billing, accept payments, and track finances with ease." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, billing software, payment processing, financial management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Invoice Generator
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create professional invoices automatically with AI-powered generation. 
              Streamline your billing process, get paid faster, and focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Invoice Generation Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, send, and track professional invoices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI invoice generator is designed for businesses of all sizes and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Invoice Generator?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of automated, intelligent invoicing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, cancel anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Invoicing?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join thousands of businesses using AI to create professional invoices and get paid faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/micro-saas-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}