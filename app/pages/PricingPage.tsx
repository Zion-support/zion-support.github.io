'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  XMarkIcon,
  StarIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  EyeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: { monthly: 299, yearly: 249 },
      originalPrice: { monthly: 399, yearly: 299 },
      color: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "AI Content Generation (10,000 words/month)",
        "Basic Analytics Dashboard",
        "Email Support",
        "5 User Accounts",
        "Basic Security Features",
        "Standard Integrations",
        "Mobile App Access",
        "Basic Reporting"
      ],
      limitations: [
        "Limited AI Models",
        "Basic Customization",
        "Standard Support Hours"
      ],
      cta: "Start Free Trial",
      href: "/contact"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      price: { monthly: 799, yearly: 599 },
      originalPrice: { monthly: 999, yearly: 799 },
      color: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "AI Content Generation (100,000 words/month)",
        "Advanced Analytics Dashboard",
        "Priority Email & Chat Support",
        "25 User Accounts",
        "Advanced Security Features",
        "Premium Integrations (100+)",
        "Mobile & Desktop Apps",
        "Advanced Reporting & Insights",
        "Custom AI Models",
        "API Access",
        "White-label Options",
        "24/7 Support"
      ],
      limitations: [
        "Limited Custom AI Training",
        "Standard SLA"
      ],
      cta: "Start Free Trial",
      href: "/contact"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: { monthly: 1999, yearly: 1499 },
      originalPrice: { monthly: 2499, yearly: 1999 },
      color: "from-orange-500 to-red-500",
      popular: false,
      features: [
        "Unlimited AI Content Generation",
        "Custom Analytics Dashboard",
        "Dedicated Account Manager",
        "Unlimited User Accounts",
        "Enterprise Security & Compliance",
        "All Integrations (500+)",
        "Custom Mobile Apps",
        "Custom Reporting & BI",
        "Custom AI Model Training",
        "Full API Access",
        "Full White-label Solution",
        "24/7 Phone & Chat Support",
        "On-site Training",
        "Custom SLA (99.9% uptime)",
        "Data Residency Options",
        "Advanced Workflow Automation"
      ],
      limitations: [],
      cta: "Contact Sales",
      href: "/contact"
    }
  ];

  const serviceCategories = [
    {
      name: "AI Solutions",
      icon: CpuChipIcon,
      color: "from-purple-500 to-cyan-500",
      services: [
        { name: "Machine Learning Models", price: "Starting at $4,999/month" },
        { name: "Natural Language Processing", price: "Starting at $3,999/month" },
        { name: "Computer Vision", price: "Starting at $5,999/month" },
        { name: "Predictive Analytics", price: "Starting at $3,499/month" }
      ]
    },
    {
      name: "IT Solutions",
      icon: CogIcon,
      color: "from-blue-500 to-indigo-500",
      services: [
        { name: "Cloud Infrastructure", price: "Starting at $3,999/month" },
        { name: "Cybersecurity", price: "Starting at $4,999/month" },
        { name: "Network Solutions", price: "Starting at $3,499/month" },
        { name: "Data Management", price: "Starting at $4,499/month" }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      icon: GlobeAltIcon,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "AI Analytics Dashboard", price: "Starting at $299/month" },
        { name: "Content Generation Suite", price: "Starting at $199/month" },
        { name: "Customer Support AI", price: "Starting at $399/month" },
        { name: "Project Management Hub", price: "Starting at $249/month" }
      ]
    }
  ];

  const addOns = [
    {
      name: "Additional AI Credits",
      description: "Extra AI processing credits for high-volume usage",
      price: "$0.10 per 1,000 credits",
      icon: CpuChipIcon
    },
    {
      name: "Priority Support",
      description: "24/7 priority support with dedicated account manager",
      price: "$500/month",
      icon: UserGroupIcon
    },
    {
      name: "Custom Integrations",
      description: "Custom API integrations and third-party connections",
      price: "$2,000 per integration",
      icon: CogIcon
    },
    {
      name: "Advanced Security",
      description: "Enhanced security features and compliance certifications",
      price: "$1,000/month",
      icon: ShieldCheckIcon
    },
    {
      name: "Training & Onboarding",
      description: "Comprehensive training and onboarding for your team",
      price: "$3,000 per session",
      icon: UserGroupIcon
    },
    {
      name: "Data Migration",
      description: "Complete data migration from your existing systems",
      price: "$5,000 per project",
      icon: CloudIcon
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Our free trial includes full access to all features for 14 days, with no credit card required. You can test all our AI solutions, IT services, and micro SaaS tools."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and can accommodate enterprise purchase orders and invoicing."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for our standard plans. Custom implementations may have one-time setup costs, which we'll discuss upfront."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll provide a full refund, no questions asked."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI solutions, IT services, and micro SaaS tools. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, micro SaaS pricing, business plans" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8">
                <SparklesIcon className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold text-lg">Transparent Pricing</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Pricing
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Choose the perfect plan for your business with <span className="text-cyan-400 font-semibold">transparent pricing</span> and 
                no hidden fees. Start with a free trial and scale as you grow.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-16">
                <div className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      billingCycle === 'monthly'
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      billingCycle === 'yearly'
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Yearly
                    <span className="ml-2 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`group bg-slate-800/50 backdrop-blur-sm border rounded-3xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden ${
                    plan.popular 
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/10' 
                      : 'border-slate-700/50'
                  }`}>
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                          <StarIcon className="w-4 h-4 mr-2" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-6">{plan.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-5xl font-bold text-white">
                            ${plan.price[billingCycle]}
                          </span>
                          <span className="text-2xl text-gray-400 line-through">
                            ${plan.originalPrice[billingCycle]}
                          </span>
                        </div>
                        <p className="text-gray-400">
                          per {billingCycle === 'monthly' ? 'month' : 'year'}
                        </p>
                        <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                          Save ${plan.originalPrice[billingCycle] - plan.price[billingCycle]}/month
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <BoltIcon className="w-5 h-5 text-yellow-400 mr-2" />
                        What's Included
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-4 flex items-center">
                          <XMarkIcon className="w-5 h-5 text-red-400 mr-2" />
                          Limitations
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-center text-gray-400 text-sm">
                              <XMarkIcon className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      to={plan.href}
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center group/btn ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 shadow-lg hover:shadow-purple-500/25'
                          : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Service Categories
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Detailed pricing for our comprehensive range of AI and IT solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6">{category.name}</h3>
                    
                    <div className="space-y-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-700/50 last:border-b-0">
                          <span className="text-gray-300">{service.name}</span>
                          <span className="text-cyan-400 font-semibold">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Add-ons */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Add-ons & Extensions
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Enhance your plan with additional services and features tailored to your needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {addOns.map((addon, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center mr-4">
                        <addon.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{addon.name}</h3>
                        <p className="text-cyan-400 font-semibold">{addon.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{addon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Everything you need to know about our pricing and services.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Start your free trial today and experience the power of our AI and IT solutions. No credit card required.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                  >
                    <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                    Schedule Demo
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div>+1 (302) 464-0950</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div>kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PricingPage;