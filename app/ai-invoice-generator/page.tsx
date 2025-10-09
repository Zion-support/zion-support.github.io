'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Zap, Clock, CheckCircle, DollarSign, Users, Shield, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, TrendingUp, Brain, Target, BarChart, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIInvoiceGeneratorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Invoice Creation',
      description: 'Generate professional invoices automatically with AI that learns your business patterns and preferences',
      benefits: ['90% faster invoice creation', 'Zero manual data entry', 'Smart template suggestions', 'Automatic calculations']
    },
    {
      icon: Zap,
      title: 'Smart Payment Processing',
      description: 'Integrated payment processing with AI-powered fraud detection and automated follow-ups',
      benefits: ['Secure payment processing', 'Fraud prevention', 'Automated reminders', 'Multiple payment methods']
    },
    {
      icon: Target,
      title: 'Intelligent Client Management',
      description: 'AI-driven client insights and automated relationship management for better business outcomes',
      benefits: ['Client behavior analysis', 'Payment prediction', 'Risk assessment', 'Personalized communication']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive financial analytics with AI insights to optimize your invoicing and cash flow',
      benefits: ['Cash flow forecasting', 'Payment trend analysis', 'Revenue optimization', 'Performance metrics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 50 invoices/month',
        'Basic AI invoice generation',
        'Standard payment processing',
        'Email support',
        'Basic analytics',
        '5 client profiles',
        'PDF export',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 500 invoices/month',
        'Advanced AI features',
        'Priority payment processing',
        'Priority support',
        'Advanced analytics & reporting',
        'Unlimited client profiles',
        'Custom branding',
        'API access',
        'Recurring invoices',
        'Multi-currency support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited invoices',
        'Full AI suite',
        'White-label solution',
        '24/7 dedicated support',
        'Custom analytics dashboard',
        'Unlimited team members',
        'Advanced integrations',
        'Custom workflows',
        'Dedicated account manager',
        'On-premise deployment option'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: '📊', description: 'Seamless accounting integration' },
    { name: 'Xero', icon: '💼', description: 'Cloud accounting platform' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'PayPal', icon: '💰', description: 'Global payment solution' },
    { name: 'Square', icon: '📱', description: 'Point of sale integration' },
    { name: 'FreshBooks', icon: '📈', description: 'Small business accounting' },
    { name: 'Wave', icon: '🌊', description: 'Free accounting software' },
    { name: 'Zapier', icon: '⚡', description: 'Workflow automation' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Freelance Designer',
      content: 'AI Invoice Generator has saved me 10+ hours per week. The AI creates perfect invoices automatically, and I get paid faster than ever.',
      rating: 5,
      savings: '10 hours/week saved'
    },
    {
      name: 'David Chen',
      role: 'Agency Owner',
      content: 'The AI insights helped me identify which clients pay late and optimize my payment terms. Revenue increased by 35% in 3 months.',
      rating: 5,
      savings: '35% revenue increase'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Consultant',
      content: 'The automated follow-ups and smart payment processing reduced my outstanding invoices by 60%. Game changer for cash flow!',
      rating: 5,
      savings: '60% reduction in outstanding invoices'
    }
  ];

  const useCases = [
    {
      industry: 'Freelancers',
      description: 'Automate invoice creation and payment tracking for multiple clients',
      benefits: ['Time savings', 'Professional appearance', 'Faster payments', 'Better organization']
    },
    {
      industry: 'Small Businesses',
      description: 'Streamline invoicing processes and improve cash flow management',
      benefits: ['Reduced admin work', 'Better cash flow', 'Client insights', 'Scalable solution']
    },
    {
      industry: 'Agencies',
      description: 'Manage complex billing structures and multiple client relationships',
      benefits: ['Complex billing', 'Client management', 'Team collaboration', 'Advanced reporting']
    },
    {
      industry: 'E-commerce',
      description: 'Automate order-to-invoice workflows and payment processing',
      benefits: ['Order integration', 'Automated billing', 'Payment processing', 'Inventory tracking']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Invoice Generator - Automated Invoice Creation & Payment Processing | Zion Tech Group"
        description="Transform your invoicing with AI-powered invoice generation, automated payment processing, and intelligent client management. Save 10+ hours per week and get paid 60% faster."
        keywords={['AI invoice generator', 'automated invoicing', 'payment processing', 'invoice automation', 'smart billing', 'AI invoicing software']}
        canonicalUrl="https://ziontechgroup.com/ai-invoice-generator"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                AI-Powered Invoice Generation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Invoice Generator
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your invoicing process with AI-powered automation. Generate professional invoices, 
                process payments, and manage clients with intelligent automation that saves you 10+ hours per week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Faster Invoice Creation</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Faster Payments</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
                <div className="text-gray-300">Hours Saved/Week</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your invoicing workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Perfect for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From freelancers to large enterprises, our AI invoice generator adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite business tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-sm text-white font-medium mb-1">{integration.name}</div>
                  <div className="text-xs text-gray-400">{integration.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business size and invoicing needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Invoice Generator ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Invoice Generator to streamline their billing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">{testimonial.savings}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Invoicing?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven invoice generation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIInvoiceGeneratorPage;