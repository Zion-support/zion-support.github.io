'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { services } from '../data/services';
import { CheckCircleIcon, StarIcon, RocketLaunchIcon, ClockIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const pricingTiers = getPricingTiers();

  const enterpriseFeatures = [
    'Unlimited API Calls',
    'Priority Support',
    'Custom Integrations',
    'Dedicated Account Manager',
    'SLA Guarantee',
    'Custom Training',
    'On-premise Deployment',
    'Advanced Analytics',
    'White-label Solutions',
    '24/7 Phone Support'
  ];

  const basicFeatures = [
    'Standard API Access',
    'Email Support',
    'Basic Documentation',
    'Community Forum',
    'Monthly Updates'
  ];

  const proFeatures = [
    'Enhanced API Access',
    'Priority Email Support',
    'Advanced Documentation',
    'Phone Support',
    'Weekly Updates',
    'Custom Integrations',
    'Advanced Analytics',
    'SLA Support'
  ];

  const getServicePricing = (service: any) => {
    const discount = billingCycle === 'yearly' ? 0.2 : 0;
    return {
      basic: Math.round(service.pricing.basic * (1 - discount)),
      pro: Math.round(service.pricing.pro * (1 - discount)),
      enterprise: Math.round(service.pricing.enterprise * (1 - discount))
    };
  };

  const popularServices = services.slice(0, 6);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Pricing - Transparent AI & IT Solutions | Zion Tech Group"
        description="Transparent pricing for all our AI services, IT solutions, and enterprise software. Choose the plan that fits your business needs."
        keywords="pricing, AI services pricing, IT solutions cost, enterprise pricing, transparent pricing"
      />
      
      {/* Enhanced Animated Background */}
      <div className="futuristic-bg"></div>
      <div className="cyber-grid-enhanced"></div>
      <div className="quantum-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="quantum-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="scan-lines"></div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="Transparent Pricing">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All our services come with transparent pricing, 
              no hidden fees, and flexible billing options.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-700 rounded-full transition-colors"
              >
                <div className={`absolute top-1 w-6 h-6 bg-cyan-400 rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                  Save 20%
                </span>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="glass-card px-6 py-3 text-cyan-400">
                <CheckCircleIcon className="h-5 w-5 inline mr-2" />
                No Setup Fees
              </div>
              <div className="glass-card px-6 py-3 text-green-400">
                <ClockIcon className="h-5 w-5 inline mr-2" />
                Cancel Anytime
              </div>
              <div className="glass-card px-6 py-3 text-purple-400">
                <StarIcon className="h-5 w-5 inline mr-2" />
                Free Trial Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Pricing Tiers */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              All plans include core features with different levels of support and customization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="glass-card p-8 card-hover">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                <p className="text-gray-400 mb-6">Perfect for startups and small businesses</p>
                <div className="text-4xl font-bold text-white mb-2">
                  $99<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-500">per service</p>
              </div>

              <ul className="space-y-4 mb-8">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className="w-full btn-neon text-center py-3 font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="glass-card p-8 card-hover relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <p className="text-gray-400 mb-6">Ideal for growing businesses</p>
                <div className="text-4xl font-bold text-white mb-2">
                  $299<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-500">per service</p>
              </div>

              <ul className="space-y-4 mb-8">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className="w-full btn-neon text-center py-3 font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card p-8 card-hover">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-6">For large organizations</p>
                <div className="text-4xl font-bold text-white mb-2">
                  $799<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-500">per service</p>
              </div>

              <ul className="space-y-4 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className="w-full btn-neon text-center py-3 font-semibold"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Detailed pricing for each of our AI and IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service, index) => {
              const pricing = getServicePricing(service);
              return (
                <div 
                  key={service.id}
                  className={`glass-card p-8 card-hover transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{service.shortDescription}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-gray-300">Basic</span>
                      <span className="text-2xl font-bold text-cyan-400">${pricing.basic}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700">
                      <span className="text-gray-300">Professional</span>
                      <span className="text-2xl font-bold text-purple-400">${pricing.pro}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300">Enterprise</span>
                      <span className="text-2xl font-bold text-pink-400">${pricing.enterprise}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <Link 
                      to={service.route}
                      className="flex-1 btn-neon text-center py-2 text-sm font-semibold"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to={service.demoUrl || '#'}
                      className="px-4 py-2 glass-card text-cyan-400 hover:text-white transition-colors border border-cyan-400/30 text-sm"
                    >
                      Demo
                    </Link>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    {billingCycle === 'yearly' ? 'Billed annually' : 'Billed monthly'}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="btn-neon hover-glow px-8 py-4 text-lg font-semibold"
            >
              View All Services
              <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer free trials?</h3>
              <p className="text-gray-400">Yes! Most of our services offer a 14-day free trial. Contact us to get started with your trial.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-400">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-400">No setup fees! All our services are ready to use immediately after signup.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-400">Yes! For enterprise customers with specific needs, we offer custom pricing and solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of companies already using our AI and IT solutions. 
              Start your free trial today or contact us for a custom quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="btn-neon hover-glow focus-neon px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
                <RocketLaunchIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/contact" 
                className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
              >
                Get Custom Quote
                <SparklesIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
