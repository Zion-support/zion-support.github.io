'use client';
import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  DollarSign, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Zap,
  Smartphone,
  CreditCard,
  Target,
  BarChart,
  Award,
  Shield,
  Globe,
  Calendar,
  Download,
  Upload,
  Settings,
  Users
} from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Invoice Creation',
      description: 'Generate professional invoices automatically from project data, time tracking, and client information.',
      benefits: ['Auto-generated invoices', 'Smart data extraction', 'Professional templates', 'Brand customization']
    },
    {
      icon: Zap,
      title: 'Automated Billing',
      description: 'Set up recurring invoices, payment reminders, and automated follow-ups to ensure timely payments.',
      benefits: ['Recurring billing', 'Auto reminders', 'Payment tracking', 'Late fee management']
    },
    {
      icon: Target,
      title: 'Smart Payment Processing',
      description: 'Accept payments online with integrated payment gateways and automated reconciliation.',
      benefits: ['Multiple payment methods', 'Secure processing', 'Auto reconciliation', 'Payment analytics']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Track revenue, outstanding payments, and financial performance with comprehensive reporting.',
      benefits: ['Revenue tracking', 'Payment analytics', 'Financial reports', 'Cash flow insights']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure tax compliance and data security with built-in compliance tools and encryption.',
      benefits: ['Tax compliance', 'Data encryption', 'Audit trails', 'GDPR compliance']
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Create invoices in multiple currencies with automatic exchange rate updates and conversion.',
      benefits: ['Multi-currency', 'Auto conversion', 'Exchange rates', 'Global clients']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        '50 invoices per month',
        'Basic templates',
        'Payment processing',
        'Email support',
        'Basic reporting',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49.99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Unlimited invoices',
        'Premium templates',
        'Advanced automation',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'For large organizations and accounting firms',
      features: [
        'Everything in Professional',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'Advanced compliance',
        'White-label options',
        'Multi-user access'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Freelancers',
      description: 'Streamline invoicing for freelance projects with automated billing and payment tracking.',
      icon: Users,
      examples: ['Project invoicing', 'Time tracking', 'Expense billing', 'Client management']
    },
    {
      title: 'Small Business',
      description: 'Professional invoicing solution for small businesses with automated workflows.',
      icon: Target,
      examples: ['Service billing', 'Product sales', 'Recurring billing', 'Customer management']
    },
    {
      title: 'Agencies',
      description: 'Comprehensive billing solution for agencies managing multiple clients and projects.',
      icon: BarChart,
      examples: ['Multi-client billing', 'Project tracking', 'Team collaboration', 'Revenue analytics']
    },
    {
      title: 'E-commerce',
      description: 'Automated invoice generation for online stores with integrated payment processing.',
      icon: Globe,
      examples: ['Order invoicing', 'Payment processing', 'Inventory tracking', 'Customer billing']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Freelance Developer',
      content: 'AI Invoice Generator has completely transformed my billing process. I can create professional invoices in seconds and get paid faster than ever.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Marketing Agency Owner',
      content: 'The automation features are incredible. I can manage billing for 20+ clients without spending hours on invoicing. The payment tracking is a game-changer.',
      rating: 5
    },
    {
      name: 'Mark Rodriguez',
      role: 'Small Business Owner',
      content: 'As a small business owner, this tool has helped me maintain cash flow and get paid on time. The analytics help me understand my business better.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <FileText className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Invoice Generator Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional invoices in seconds, automate billing workflows, and get paid faster with AI-powered invoice generation and payment processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need for Professional Invoicing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From invoice creation to payment collection, our AI-powered platform handles every aspect of your billing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white w-fit mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Business Type
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're a freelancer, small business, or large agency, we have the right solution for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white w-fit mx-auto mb-4">
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-2 text-left">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-orange-400 ring-2 ring-orange-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
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

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See what our users are saying about AI Invoice Generator Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Paid Faster with AI Invoice Generator
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses who have streamlined their invoicing process and improved their cash flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-orange-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIInvoiceGeneratorPage;