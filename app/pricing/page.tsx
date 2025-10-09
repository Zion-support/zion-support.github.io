'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Zap,
  Shield,
  Users,
  Building,
  Crown
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        'Basic AI tools access',
        'Email support',
        'Standard templates',
        'Basic analytics',
        'Up to 5 users',
        '10GB storage'
      ],
      limitations: [
        'Limited AI models',
        'Basic customization',
        'Standard support hours'
      ],
      popular: false,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      monthlyPrice: 799,
      yearlyPrice: 7999,
      features: [
        'Full AI suite access',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Up to 25 users',
        '100GB storage',
        'API access',
        'Custom integrations',
        'Advanced security'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      popular: true,
      cta: 'Most Popular',
      link: '/contact'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      icon: Building,
      color: 'from-yellow-500 to-orange-500',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        'Full AI & IT suite',
        '24/7 dedicated support',
        'Custom development',
        'Real-time analytics',
        'Unlimited users',
        'Unlimited storage',
        'Full API access',
        'Custom integrations',
        'Enterprise security',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const microSAASPricing = [
    {
      category: 'AI Tools',
      plans: [
        { name: 'AI Content Generator', price: 29, period: 'month' },
        { name: 'AI Image Generator', price: 39, period: 'month' },
        { name: 'AI Video Editor', price: 49, period: 'month' },
        { name: 'AI Music Composer', price: 19, period: 'month' }
      ]
    },
    {
      category: 'Business Tools',
      plans: [
        { name: 'Smart CRM Pro', price: 79, period: 'month' },
        { name: 'Analytics Dashboard', price: 59, period: 'month' },
        { name: 'Email Marketing Suite', price: 39, period: 'month' },
        { name: 'Project Management AI', price: 69, period: 'month' }
      ]
    },
    {
      category: 'Developer Tools',
      plans: [
        { name: 'AI Code Assistant', price: 49, period: 'month' },
        { name: 'API Testing Suite', price: 39, period: 'month' },
        { name: 'Cloud Deployment AI', price: 89, period: 'month' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Pricing">
            Pricing
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transparent Pricing for Every Business Size
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our core AI and IT services 
            with flexible options to scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-cyan-400' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-cyan-400' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-1 text-sm text-green-400">(Save 17%)</span>
            </span>
          </div>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => {
            const IconComponent = plan.icon;
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            const savings = billingCycle === 'yearly' ? Math.round((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12) * 100) : 0;
            
            return (
              <div
                key={plan.id}
                className={`cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      {plan.cta}
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-cyan-400">${price}</span>
                    <span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    {billingCycle === 'yearly' && savings > 0 && (
                      <span className="ml-2 text-sm text-green-400">Save {savings}%</span>
                    )}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center text-gray-500">
                        <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={plan.link}
                  className={`w-full text-center inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.popular ? plan.cta : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Micro SAAS Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Micro SAAS Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSAASPricing.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="flex items-center justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-300">{plan.name}</span>
                      <span className="text-cyan-400 font-semibold">${plan.price}/{plan.period}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/micro-saas"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    View All Tools →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">
                We offer a 14-day free trial for all plans. No credit card required to get started. 
                Experience our full suite of services risk-free.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">What support is included?</h3>
              <p className="text-gray-300">
                All plans include email support. Professional and Enterprise plans include priority support, 
                and Enterprise includes 24/7 dedicated support.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-bold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-300">
                Yes, we offer custom AI and IT solutions tailored to your specific needs. 
                Contact our sales team to discuss your requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business or contact us for a custom solution. 
            Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.phone}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.email}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;