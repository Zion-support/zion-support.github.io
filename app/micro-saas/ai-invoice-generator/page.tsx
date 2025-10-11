import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, FileText, DollarSign, Clock, Shield, Zap, Star, Calculator, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    'AI-powered invoice generation',
    'Automated payment reminders',
    'Multi-currency support',
    'Tax calculation automation',
    'Client portal access',
    'Payment tracking',
    'Custom branding options',
    'Mobile app available'
  ];

  const benefits = [
    'Save 5+ hours per week on invoicing',
    'Get paid 30% faster with automated reminders',
    'Reduce billing errors by 95%',
    'Professional invoices that impress clients',
    'Track payments in real-time'
  ];

  const pricing = [
    {
      plan: 'Solo',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers',
      features: ['Up to 50 invoices/month', 'Basic templates', 'Email support', 'PDF export'],
      popular: false
    },
    {
      plan: 'Business',
      price: '$49',
      period: '/month',
      description: 'Ideal for small businesses',
      features: ['Unlimited invoices', 'Custom branding', 'Payment tracking', 'Priority support', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For growing companies',
      features: ['Everything in Business', 'Multi-user access', 'Advanced reporting', 'White-label options', 'Dedicated support'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Invoice Generator | Zion Tech Group - Smart Invoicing Solution</title>
        <meta name="description" content="Revolutionary AI-powered invoice generator that automates billing, payment tracking, and client management. Get paid faster with intelligent invoicing." />
        <meta name="keywords" content="AI invoice generator, automated invoicing, billing software, payment tracking, invoice templates, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-invoice-generator" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              AI-Powered Invoicing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Invoice Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create professional invoices in seconds with AI that learns your business patterns, 
              automates payment reminders, and helps you get paid faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Smart Invoicing Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to streamline your billing process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AI Invoice Generator?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results that improve your cash flow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Paid Faster?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI Invoice Generator to streamline their billing and improve cash flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/micro-saas" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInvoiceGeneratorPage;