'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CheckCircle, 
  FileText, 
  DollarSign, 
  Clock,
  Zap,
  ArrowRight,
  Star,
  Sparkles,
  Settings,
  Smartphone,
  Globe,
  Users,
  BarChart3,
  Target,
  Calendar,
  Mail,
  Bell,
  Shield,
  CreditCard,
  PieChart,
  TrendingUp
} from 'lucide-react';

export default function AIInvoiceGeneratorPage() {
  const features = [
    {
      title: 'AI-Powered Invoice Creation',
      description: 'Generate professional invoices automatically from project data, time tracking, and client information',
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      benefits: ['90% time savings', 'Professional templates', 'Auto-populated data']
    },
    {
      title: 'Smart Time Tracking',
      description: 'AI automatically tracks billable hours and generates accurate time-based invoices',
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      benefits: ['Automatic time capture', 'Accurate billing', 'Project categorization']
    },
    {
      title: 'Intelligent Pricing Suggestions',
      description: 'AI analyzes market rates and project complexity to suggest optimal pricing',
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      benefits: ['Market-based pricing', 'Profit optimization', 'Competitive analysis']
    },
    {
      title: 'Automated Follow-ups',
      description: 'AI sends personalized payment reminders and tracks invoice status automatically',
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      benefits: ['Reduced late payments', 'Professional communication', 'Automated workflows']
    },
    {
      title: 'Multi-Currency Support',
      description: 'Generate invoices in any currency with automatic exchange rate updates',
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      benefits: ['Global business support', 'Real-time rates', 'Tax compliance']
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive financial insights with AI-generated reports and forecasting',
      icon: <BarChart3 className="w-6 h-6 text-red-400" />,
      benefits: ['Revenue insights', 'Cash flow forecasting', 'Client profitability']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for freelancers',
      features: [
        'Unlimited invoices',
        'Basic AI features',
        '5 client profiles',
        'Mobile app',
        'Email support',
        'PDF export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49.99',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Everything in Solo',
        'Advanced AI features',
        'Unlimited clients',
        'Team collaboration',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'White-label options',
        'Advanced security',
        'Dedicated support',
        'Custom integrations',
        'Compliance tools'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Creative Agency',
      role: 'Owner',
      content: 'AI Invoice Generator has transformed our billing process. We create invoices 90% faster and our clients love the professional look.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'David Chen',
      company: 'Consulting Firm',
      role: 'Partner',
      content: 'The AI pricing suggestions have helped us increase our rates by 25% while maintaining client satisfaction. The analytics are incredibly valuable.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Freelance Designer',
      role: 'Business Owner',
      content: 'The automated follow-ups have reduced our late payments by 60%. The AI really understands how to communicate with different clients.',
      rating: 5,
      avatar: 'LR'
    }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: '📊' },
    { name: 'Xero', icon: '💼' },
    { name: 'FreshBooks', icon: '📈' },
    { name: 'Stripe', icon: '💳' },
    { name: 'PayPal', icon: '💰' },
    { name: 'Square', icon: '📱' },
    { name: 'Wise', icon: '🌍' },
    { name: 'Bank Transfer', icon: '🏦' }
  ];

  const stats = [
    { number: '90%', label: 'Time Savings', icon: <Clock className="w-6 h-6" /> },
    { number: '60%', label: 'Faster Payments', icon: <Zap className="w-6 h-6" /> },
    { number: '25%', label: 'Higher Revenue', icon: <DollarSign className="w-6 h-6" /> },
    { number: '99%', label: 'Invoice Accuracy', icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Invoice Generator - Smart Billing Solution | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your billing with AI-powered invoice generation, automated follow-ups, and intelligent pricing. Save 90% time on invoicing." />
        <meta name="keywords" content="AI invoice generator, automated billing, invoice management, smart pricing, payment tracking" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Invoice Generator - Smart Billing Solution" />
        <meta property="og:description" content="Revolutionize your billing with AI-powered invoice generation, automated follow-ups, and intelligent pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-invoice-generator" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-invoice-generator.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Invoice Generator - Smart Billing Solution" />
        <meta name="twitter:description" content="Revolutionize your billing with AI-powered invoice generation, automated follow-ups, and intelligent pricing." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-invoice-generator.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Invoice Generator
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your billing process with AI-powered invoice generation, 
                automated follow-ups, and intelligent pricing that saves you 90% time and increases revenue by 25%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Billing Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage AI to automate and optimize your entire invoicing workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Get started in minutes with our simple 3-step process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                  <Settings className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Setup & Configure</h3>
                <p className="text-gray-300">
                  Set up your business profile, client database, and billing preferences. Our AI learns your patterns.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. AI Generation</h3>
                <p className="text-gray-300">
                  AI automatically generates professional invoices based on project data, time tracking, and pricing insights.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Automated Delivery</h3>
                <p className="text-gray-300">
                  Invoices are automatically sent to clients with smart follow-ups and payment tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
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

        {/* Integrations Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Connect with your existing business tools and payment systems
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-2">{integration.icon}</div>
                  <div className="text-white text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses already using AI Invoice Generator
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-blue-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-500/30">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Billing Process?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free 14-day trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Questions? Call us: <a href="tel:+13024640950" className="underline hover:text-white">+1 302 464 0950</a></p>
                  <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}