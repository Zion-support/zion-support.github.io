'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, FileText, Zap, Brain, Smartphone, Globe, Shield, Users, DollarSign } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIInvoiceGeneratorPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Generation',
      description: 'Intelligent invoice creation that learns from your business patterns and suggests optimal pricing.',
      benefits: ['Smart Pricing Suggestions', 'Template Learning', 'Auto-Population', 'Error Detection']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Instant Invoice Creation',
      description: 'Generate professional invoices in seconds with our AI-powered automation system.',
      benefits: ['One-Click Generation', 'Bulk Processing', 'Template Library', 'Custom Branding']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Smart Payment Tracking',
      description: 'Automated payment tracking and follow-up reminders to ensure timely payments.',
      benefits: ['Payment Monitoring', 'Auto Reminders', 'Late Fee Calculation', 'Payment Analytics']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Client Management',
      description: 'Comprehensive client database with payment history and communication tracking.',
      benefits: ['Client Profiles', 'Payment History', 'Communication Logs', 'Relationship Insights']
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Multi-Currency Support',
      description: 'Handle international clients with automatic currency conversion and tax calculations.',
      benefits: ['Currency Conversion', 'Tax Calculations', 'Regional Compliance', 'Multi-Language Support']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Secure & Compliant',
      description: 'Bank-level security with compliance to international invoicing standards.',
      benefits: ['Data Encryption', 'GDPR Compliant', 'Audit Trails', 'Backup & Recovery']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 50 invoices/month',
        'Basic AI features',
        'Email delivery',
        'Mobile app access',
        'Basic templates',
        'Payment tracking'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$39.99',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited invoices',
        'Advanced AI features',
        'Custom branding',
        'Client management',
        'Multi-currency support',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'Full-featured solution for large organizations',
      features: [
        'Everything in Professional',
        'Team collaboration',
        'Advanced analytics',
        'Custom integrations',
        'White-label options',
        '24/7 support',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const businessTypes = [
    {
      type: 'Freelancers',
      description: 'Perfect for consultants, designers, and independent professionals',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      type: 'Small Business',
      description: 'Ideal for retail, services, and local businesses',
      icon: <Globe className="w-6 h-6 text-green-500" />
    },
    {
      type: 'E-commerce',
      description: 'Built for online stores and digital product sales',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      type: 'Agencies',
      description: 'Comprehensive solution for marketing and creative agencies',
      icon: <Brain className="w-6 h-6 text-orange-500" />
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Freelance Designer',
      content: 'This AI invoice generator has saved me hours every week. The smart pricing suggestions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Small Business Owner',
      content: 'The payment tracking feature is a game-changer. I never miss a payment reminder anymore.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Marketing Agency Owner',
      content: 'Professional invoices that impress clients. The customization options are fantastic.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered invoice generation with smart pricing, payment tracking, and client management features." />
        <meta name="keywords" content="AI invoice generator, invoice automation, payment tracking, client management, business invoicing" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Invoice Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your invoicing process with AI-powered automation. Generate professional invoices, 
                track payments, and manage clients effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Perfect for Every Business</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for different business types and industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {businessTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{type.type}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to streamline your invoicing process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Loved by Business Owners</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses that have streamlined their invoicing process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <DollarSign key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
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
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Start Invoicing Smarter Today</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses that have transformed their invoicing process with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}