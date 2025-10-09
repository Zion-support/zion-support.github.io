'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$299',
      period: 'per month',
      features: [
        'Up to 3 AI applications',
        'Basic AI automation',
        'Email support',
        'Standard integrations',
        'Monthly updates',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: '$799',
      period: 'per month',
      features: [
        'Up to 10 AI applications',
        'Advanced AI automation',
        'Priority support',
        'Custom integrations',
        'Weekly updates',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited AI applications',
        'Full AI automation suite',
        'Dedicated support team',
        'White-label solutions',
        'Daily updates',
        'Enterprise analytics',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'AI Consulting',
      description: 'Strategic AI planning and implementation guidance',
      price: '$200/hour'
    },
    {
      name: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific needs',
      price: 'From $5,000'
    },
    {
      name: 'Data Migration',
      description: 'Seamless migration of your existing data to our platforms',
      price: 'From $1,500'
    },
    {
      name: 'Training & Support',
      description: 'Comprehensive training for your team on AI tools and best practices',
      price: '$150/hour'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - AI & IT Solutions Plans | Zion Tech Group"
        description="Transparent pricing for our AI services, IT solutions, and Micro SAAS applications. Choose the plan that fits your business needs and budget."
        keywords={['pricing', 'AI services pricing', 'IT services cost', 'Micro SAAS pricing', 'business solutions pricing']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Transparent, flexible pricing designed to scale with your business. 
                  Choose the plan that fits your needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  All plans include 24/7 support, regular updates, and our satisfaction guarantee.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`cyber-card p-8 relative ${
                      plan.popular ? 'border-2 border-cyan-400' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-6">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`w-full text-center py-3 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? 'cyber-button'
                          : 'bg-slate-700 text-white hover:bg-slate-600'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Add-on Services */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Additional Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Enhance your solution with our additional services and professional support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {addOnServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <a
                      href="/contact"
                      className="text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">
                  Common questions about our pricing and services.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Can I change my plan at any time?</h3>
                  <p className="text-gray-300">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing differences.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Is there a setup fee?</h3>
                  <p className="text-gray-300">
                    No setup fees for our Starter and Professional plans. Enterprise plans may include 
                    custom setup costs based on your specific requirements.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">What's included in support?</h3>
                  <p className="text-gray-300">
                    All plans include 24/7 support via email and chat. Professional and Enterprise plans 
                    include phone support and priority response times.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Do you offer discounts for annual billing?</h3>
                  <p className="text-gray-300">
                    Yes, we offer a 10% discount for annual billing on all plans. Contact us for more 
                    information about annual pricing.
                  </p>
                </div>
                
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Can I cancel anytime?</h3>
                  <p className="text-gray-300">
                    Yes, you can cancel your subscription at any time. There are no cancellation fees, 
                    and you'll continue to have access until the end of your billing period.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Money-back Guarantee */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="cyber-card p-8">
                <div className="text-6xl mb-6">🛡️</div>
                <h2 className="text-3xl font-bold text-white mb-6">30-Day Money-Back Guarantee</h2>
                <p className="text-xl text-gray-300 mb-8">
                  We're confident you'll love our services. If you're not completely satisfied within the first 30 days, 
                  we'll refund your payment, no questions asked.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Start Your Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;