import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { Check, X, ArrowRight, Star, Zap, Shield, Users } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      icon: '🚀',
      features: [
        'Up to 5 team members',
        'Basic AI automation',
        'Cloud hosting included',
        'Email support',
        'Basic analytics',
        'SSL certificate',
        'Monthly backups'
      ],
      limitations: [
        'Limited custom integrations',
        'Standard response time',
        'Basic reporting'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=starter'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 599,
      yearlyPrice: 5999,
      icon: '⭐',
      features: [
        'Up to 15 team members',
        'Advanced AI automation',
        'Priority cloud hosting',
        'Phone & email support',
        'Advanced analytics',
        'Custom integrations',
        'Daily backups',
        'API access',
        'Custom branding'
      ],
      limitations: [
        'Limited custom development',
        'Business hours support'
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/contact?plan=professional'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 1299,
      yearlyPrice: 12999,
      icon: '🏢',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Dedicated cloud infrastructure',
        '24/7 priority support',
        'Custom analytics dashboard',
        'Unlimited integrations',
        'Real-time backups',
        'Full API access',
        'White-label solution',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Development',
      description: 'Custom AI models and machine learning solutions',
      price: 'Starting at $2,500/month',
      features: ['Custom model training', 'Data preprocessing', 'Model optimization', 'Integration support']
    },
    {
      name: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure',
      price: 'Starting at $5,000',
      features: ['Infrastructure assessment', 'Migration planning', 'Data transfer', 'Performance optimization']
    },
    {
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and hardening',
      price: 'Starting at $3,500',
      features: ['Security assessment', 'Vulnerability scanning', 'Compliance review', 'Security recommendations']
    },
    {
      name: 'DevOps Automation',
      description: 'Automated CI/CD pipelines and infrastructure',
      price: 'Starting at $1,500/month',
      features: ['CI/CD setup', 'Infrastructure as code', 'Monitoring setup', 'Automated deployments']
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! We offer custom pricing and solutions for enterprise clients. Contact our sales team to discuss your specific needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom billing for enterprise clients.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you reach your limits and offer options to upgrade or purchase additional capacity.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, annual billing saves you 2 months compared to monthly billing. That\'s a 16.7% discount!'
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Zion Tech Group | Transparent Technology Solutions Pricing"
        description="Choose the perfect plan for your business. Transparent pricing for AI services, cloud solutions, and technology consulting. Start with a free trial."
        keywords="pricing, AI services pricing, cloud solutions cost, technology consulting rates, enterprise pricing"
        canonical="https://ziontechgroup.com/pricing"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Choose the plan that fits your business needs. All plans include our core services with no hidden fees.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                    Save 16.7%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-white/10'
                  } hover:bg-white/10 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    
                    <Link
                      href={plan.href}
                      className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'border border-white/20 text-white hover:bg-white/10'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="text-lg font-semibold text-white mb-3 mt-6">Limitations:</h4>
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <div key={limitationIndex} className="flex items-center gap-3">
                            <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <span className="text-gray-400">{limitation}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with our specialized services and expert consulting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-blue-400 font-semibold mb-4">{service.price}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that trust Zion Tech Group for their technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact?type=demo"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pricing;